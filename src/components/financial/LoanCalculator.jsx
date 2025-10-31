import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

/**
 * Full LoanCalculator component with:
 * - Category 1: Amortized Loan (Amortization Schedule toggle)
 * - Category 2: Deferred Payment Loan (Schedule Table toggle with Annual/Monthly)
 * - Category 3: Bond (Predetermined Due Amount) (Schedule Table toggle with Annual/Monthly)
 *
 * All numeric outputs formatted with thousands separators and 2 decimal places.
 */

const compoundMap = {
  "Annually(APY)": 1,
  "Semi-annually": 2,
  Quarterly: 4,
  "Monthly(APR)": 12,
  "Semi-monthly": 24,
  Biweekly: 26,
  Weekly: 52,
  Daily: 365,
  Continuously: "continuous",
};

const paybackMap = {
  "Every Day": 365,
  "Every Week": 52,
  "Every 2 Week": 26,
  "Every Half Month": 24,
  "Every Month": 12,
  "Every Quarter": 4,
  "Every Six Months": 2,
  "Every Year": 1,
};

const COLORS = ["#4CAF50", "#FF5722"];

function formatCurrency(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "-";
  return Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Convert entered rate and compound selection into Effective Annual Rate (EAR)
function toEAR(ratePct, compoundLabel) {
  const r = (parseFloat(ratePct) || 0) / 100;
  if (!r) return 0;
  if (compoundLabel === "Annually(APY)") return r;
  if (compoundLabel === "Continuously") return Math.exp(r) - 1;
  const n = compoundMap[compoundLabel] || 12;
  return Math.pow(1 + r / n, n) - 1;
}

// Per-payment effective rate for a payback frequency (m payments per year)
function perPaymentRateFromEAR(EAR, m) {
  if (!EAR || !m) return 0;
  return Math.pow(1 + EAR, 1 / m) - 1;
}

export default function LoanCalculator() {
  // ---------------- Category 1 (Amortized) ----------------
  const [amort, setAmort] = useState({
    amount: "",
    years: "",
    months: "",
    rate: "",
    compound: "Annually(APY)",
    payback: "Every Month",
  });
  const [result1, setResult1] = useState(null);
  const [showAmortSchedule, setShowAmortSchedule] = useState(false);

  // ---------------- Category 2 (Deferred) ----------------
  const [def, setDef] = useState({
    amount: "",
    years: "",
    months: "",
    rate: "",
    compound: "Annually(APY)",
  });
  const [result2, setResult2] = useState(null);
  const [showDefSchedule, setShowDefSchedule] = useState(false);
  const [defScheduleType, setDefScheduleType] = useState("Annual"); // "Annual" or "Monthly"

  // ---------------- Category 3 (Bond) ----------------
  const [bond, setBond] = useState({
    dueAmount: "",
    years: "",
    months: "",
    rate: "",
    compound: "Annually(APY)",
  });
  const [result3, setResult3] = useState(null);
  const [showBondSchedule, setShowBondSchedule] = useState(false);
  const [bondScheduleType, setBondScheduleType] = useState("Annual");

  // ---------- Category 1: Calculate amortized loan ----------
  const calcAmortized = () => {
    const P = parseFloat(amort.amount);
    const Y = parseInt(amort.years || 0);
    const M = parseInt(amort.months || 0);
    const termYears = Y + (M || 0) / 12;
    if (!P || !termYears) {
      setResult1(null);
      return;
    }

    // Effective annual rate based on compound selection
    const EAR = toEAR(amort.rate, amort.compound);

    // per-payment rate based on payback
    const m = paybackMap[amort.payback] || 12;
    const i = perPaymentRateFromEAR(EAR, m); // per-payment rate

    const N = Math.round(m * termYears); // total number of payments - round to integer

    // PMT
    let PMT = 0;
    if (i === 0) {
      PMT = P / N;
    } else {
      PMT = (P * i) / (1 - Math.pow(1 + i, -N));
    }

    // Build amortization schedule per payment (payment periods = N)
    let schedule = [];
    let balance = P;
    for (let k = 1; k <= N; k++) {
      const interest = balance * i;
      let principalPortion = PMT - interest;
      // last payment adjust to avoid negative rounding residue
      if (k === N) principalPortion = balance;
      const ending = balance - principalPortion;
      schedule.push({
        sl: k,
        beginning: balance,
        interest,
        ending: ending < 0.0001 ? 0 : ending,
        principal: principalPortion,
        payment: k === N ? (principalPortion + interest) : PMT,
      });
      balance = ending;
      if (balance <= 0) break;
    }

    const totalPayment = schedule.reduce((s, row) => s + (row.payment || 0), 0);
    const totalInterest = totalPayment - P;

    setResult1({
      paymentPerPeriod: PMT,
      totalPayment,
      totalInterest,
      N,
      schedule,
      principal: P,
      paybackLabel: amort.payback,
    });
  };

  // ---------- Category 2: Deferred Payment ----------
  const calcDeferred = () => {
    const P = parseFloat(def.amount);
    const Y = parseInt(def.years || 0);
    const M = parseInt(def.months || 0);
    const t = Y + (M || 0) / 12;
    if (!P || !t) {
      setResult2(null);
      return;
    }

    // use EAR for consistent accumulation
    const EAR = toEAR(def.rate, def.compound);

    // future value at maturity
    const FV = P * Math.pow(1 + EAR, t);
    const totalInterest = FV - P;

    // Generate monthly accumulation schedule based on EAR
    const totalMonths = Math.round(t * 12);
    const monthlyRate = Math.pow(1 + EAR, 1 / 12) - 1;
    let arrMonthly = [];
    let bal = P;
    for (let i = 1; i <= totalMonths; i++) {
      const interest = bal * monthlyRate;
      const ending = bal + interest;
      arrMonthly.push({ sl: i, beginning: bal, interest, ending });
      bal = ending;
    }

    // Annual schedule: group months into years (account for partial last year)
    let arrAnnual = [];
    let yearStartBal = P;
  //  let elapsedMonths = 0;
    let remainingMonths = totalMonths;
    let yearIndex = 1;
    while (remainingMonths > 0) {
      const monthsThisYear = Math.min(12, remainingMonths);
      // effective factor for this partial year:
      const yearFactor = Math.pow(1 + monthlyRate, monthsThisYear);
      const yearEnding = yearStartBal * yearFactor;
      const yearInterest = yearEnding - yearStartBal;
      arrAnnual.push({
        sl: yearIndex,
        beginning: yearStartBal,
        interest: yearInterest,
        ending: yearEnding,
      });
      yearStartBal = yearEnding;
      remainingMonths -= monthsThisYear;
      yearIndex++;
    }

    setResult2({
      principal: P,
      futureValue: FV,
      totalInterest,
      monthlySchedule: arrMonthly,
      annualSchedule: arrAnnual,
      totalMonths,
    });
  };

  // ---------- Category 3: Bond (predetermined FV -> compute PV) ----------
  const calcBond = () => {
    const FV = parseFloat(bond.dueAmount);
    const Y = parseInt(bond.years || 0);
    const M = parseInt(bond.months || 0);
    const t = Y + (M || 0) / 12;
    if (!FV || !t) {
      setResult3(null);
      return;
    }

    const EAR = toEAR(bond.rate, bond.compound);

    // present value
    const PV = FV / Math.pow(1 + EAR, t);
    const totalInterest = FV - PV;

    // monthly schedule from PV -> FV
    const totalMonths = Math.round(t * 12);
    const monthlyRate = Math.pow(1 + EAR, 1 / 12) - 1;
    let arrMonthly = [];
    let bal = PV;
    for (let i = 1; i <= totalMonths; i++) {
      const interest = bal * monthlyRate;
      const ending = bal + interest;
      arrMonthly.push({ sl: i, beginning: bal, interest, ending });
      bal = ending;
    }

    // annual schedule aggregated
    let arrAnnual = [];
    let yearStartBal = PV;
    let remainingMonths = totalMonths;
    let yearIndex = 1;
    while (remainingMonths > 0) {
      const monthsThisYear = Math.min(12, remainingMonths);
      const yearFactor = Math.pow(1 + monthlyRate, monthsThisYear);
      const yearEnding = yearStartBal * yearFactor;
      const yearInterest = yearEnding - yearStartBal;
      arrAnnual.push({
        sl: yearIndex,
        beginning: yearStartBal,
        interest: yearInterest,
        ending: yearEnding,
      });
      yearStartBal = yearEnding;
      remainingMonths -= monthsThisYear;
      yearIndex++;
    }

    setResult3({
      presentValue: PV,
      futureValue: FV,
      totalInterest,
      monthlySchedule: arrMonthly,
      annualSchedule: arrAnnual,
      totalMonths,
    });
  };

  // ---------- Clear / Reset handlers ----------
  const clearAmort = () => {
    setAmort({ amount: "", years: "", months: "", rate: "", compound: "Annually(APY)", payback: "Every Month" });
    setResult1(null);
    setShowAmortSchedule(false);
  };
  const clearDeferred = () => {
    setDef({ amount: "", years: "", months: "", rate: "", compound: "Annually(APY)" });
    setResult2(null);
    setShowDefSchedule(false);
  };
  const clearBond = () => {
    setBond({ dueAmount: "", years: "", months: "", rate: "", compound: "Annually(APY)" });
    setResult3(null);
    setShowBondSchedule(false);
  };

  // ---------- UI ----------
  return (
    <div className=" m-6 p-2 max-w-6xl mx-auto space-y-8">
      {/* ---------------- Category 1 ---------------- */}
     
     <div className="border border-gray-200 rounded-2xl shadow-sm bg-white p-6">
  {/* Header */}
  <h2 className="text-2xl font-semibold mb-4 text-center bg-blue-900 text-white p-2 rounded-lg">
    Amortized Loan
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Inputs column */}
    <div className="border border-gray-200 rounded-xl p-4 space-y-4">
      {/* Loan Amount */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="sm:min-w-[140px] font-medium">Loan Amount</label>
        <input
          type="number"
          value={amort.amount}
          onChange={(e) => setAmort({ ...amort, amount: e.target.value })}
          className="border rounded-lg p-2 w-full"
          placeholder="e.g., 300,000"
        />
      </div>

      {/* Loan Term */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="sm:min-w-[140px] font-medium">Loan Term</label>
        <div className="flex gap-2 w-full">
          <input
            type="number"
            placeholder="Years"
            value={amort.years}
            onChange={(e) => setAmort({ ...amort, years: e.target.value })}
            className="border rounded-lg p-2 w-1/2"
          />
          <input
            type="number"
            placeholder="Months"
            value={amort.months}
            onChange={(e) => setAmort({ ...amort, months: e.target.value })}
            className="border rounded-lg p-2 w-1/2"
          />
        </div>
      </div>

      {/* Interest Rate */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="sm:min-w-[140px] font-medium">Interest Rate</label>
        <input
          type="number"
          value={amort.rate}
          onChange={(e) => setAmort({ ...amort, rate: e.target.value })}
          className="border rounded-lg p-2 w-full"
          placeholder="e.g., 5%"
        />
      </div>

      {/* Compound */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="sm:min-w-[140px] font-medium">Compound</label>
        <select
          value={amort.compound}
          onChange={(e) => setAmort({ ...amort, compound: e.target.value })}
          className="border rounded-lg p-2 w-full"
        >
          {Object.keys(compoundMap).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Payback */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="sm:min-w-[140px] font-medium">Pay Back</label>
        <select
          value={amort.payback}
          onChange={(e) => setAmort({ ...amort, payback: e.target.value })}
          className="border rounded-lg p-2 w-full"
        >
          {Object.keys(paybackMap).map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-3">
        <button
          onClick={calcAmortized}
          className="bg-blue-900 font-semibold text-white px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          Calculate
        </button>
        <button
          onClick={clearAmort}
          className="bg-gray-400 font-semibold text-white px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          Clear
        </button>
      </div>
    </div>

    {/* Result column */}
    <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
      <h3 className="text-2xl font-semibold mb-3 text-blue-900 underline">
        RESULT
      </h3>

      {result1 ? (
        <>
          <p>
            <strong>
              Payment ({result1.N} periods / {amort.payback}):
            </strong>{" "}
            ${formatCurrency(result1.paymentPerPeriod)}
          </p>
          <p>
            <strong>Total Payment:</strong> $
            {formatCurrency(result1.totalPayment)}
          </p>
          <p>
            <strong>Total Interest:</strong> $
            {formatCurrency(result1.totalInterest)}
          </p>
          <p>
            <strong>Total No. of Payments:</strong>{" "}
            {result1.N.toLocaleString()}
          </p>

          <div className="mt-4 flex justify-center">
            <PieChart width={180} height={180}>
              <Pie
                data={[
                  { name: "Principal", value: result1.principal },
                  { name: "Interest", value: result1.totalInterest },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={65}
                dataKey="value"
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                <Cell fill={COLORS[0]} />
                <Cell fill={COLORS[1]} />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </>
      ) : (
        <p className="text-gray-500">
          Enter loan details and click Calculate.
        </p>
      )}
    </div>
  </div>

  {/* Toggle Button */}
  {result1 && (
    <div className="mt-4 text-center">
      <button
        onClick={() => setShowAmortSchedule(!showAmortSchedule)}
        className="bg-blue-900 text-white px-4 py-2 rounded-lg"
      >
        {showAmortSchedule
          ? "Hide Amortization Schedule Table"
          : "Show Amortization Schedule Table"}
      </button>
    </div>
  )}

  {/* Amortization Schedule Table */}
  {showAmortSchedule && result1 && (
    <div className="mt-4 overflow-x-auto">
      <table className="table-auto w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-2 py-1">Sl#</th>
            <th className="border px-2 py-1">Beginning Balance</th>
            <th className="border px-2 py-1">Interest</th>
            <th className="border px-2 py-1">Principal</th>
            <th className="border px-2 py-1">Payment</th>
            <th className="border px-2 py-1">Ending Balance</th>
          </tr>
        </thead>
        <tbody>
          {result1.schedule.map((row, idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{row.sl}</td>
              <td className="border px-2 py-1">
                ${formatCurrency(row.beginning)}
              </td>
              <td className="border px-2 py-1">
                ${formatCurrency(row.interest)}
              </td>
              <td className="border px-2 py-1">
                ${formatCurrency(row.principal)}
              </td>
              <td className="border px-2 py-1">
                ${formatCurrency(row.payment)}
              </td>
              <td className="border px-2 py-1">
                ${formatCurrency(row.ending)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
    </div>


      {/* --------- toggle/button separation as requested (toggle placed between category1 and category2) --------- */}

      {/* ---------------- Category 2 (Deferred) ---------------- */}
      <div className="border border-blue-100 rounded-2xl shadow-sm bg-white p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center bg-blue-900 text-white p-2 rounded-lg">
          Deferred Payment Loan
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="border border-gray-200 rounded-xl p-4 space-y-4">
            {/* Loan Amount */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:min-w-[140px] font-medium">Loan Amount</label>
              <input
                type="number"
                value={def.amount}
                onChange={(e) => setDef({ ...def, amount: e.target.value })}
                className="border rounded-lg p-1 w-full"
                placeholder="e.g., 30000"
              />
            </div>

            {/* Loan Term */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label  className="sm:min-w-[140px] font-medium">Loan Term</label>
              <div className="flex gap-2 w-full">
                <input
                  type="number"
                  placeholder="Years"
                  value={def.years}
                  onChange={(e) => setDef({ ...def, years: e.target.value })}
                  className="border rounded-lg p-1 w-1/2"
                />
                <input
                  type="number"
                  placeholder="Months"
                  value={def.months}
                  onChange={(e) => setDef({ ...def, months: e.target.value })}
                  className="border rounded-lg p-1 w-1/2"
                />
              </div>
            </div>

            {/* Interest Rate */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:min-w-[140px] font-medium">Interest Rate (%)</label>
              <input
                type="number"
                value={def.rate}
                onChange={(e) => setDef({ ...def, rate: e.target.value })}
                className="border rounded-lg p-2 w-full"
                placeholder="e.g., 6"
              />
            </div>

            {/* Compound */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:min-w-[140px] font-medium">Compound</label>
              <select
                value={def.compound}
                onChange={(e) => setDef({ ...def, compound: e.target.value })}
                className="border rounded-lg p-2 flex-1"
              >
                {Object.keys(compoundMap).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4 justify-center sm:justify-start flex-wrap">
              <button
                onClick={calcDeferred}
                className="bg-blue-900 font-semibold text-white px-4 py-2 rounded-lg"
              >
                Calculate
              </button>
              <button
                onClick={clearDeferred}
                className="bg-gray-400 font-semibold text-white px-4 py-2 rounded-lg"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Result */}
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900 underline">
              RESULT
            </h3>
            {result2 ? (
              <>
                <p>
                  <strong>Future Value (Due at Maturity):</strong> $
                  {formatCurrency(result2.futureValue)}
                </p>
                <p>
                  <strong>Total Interest:</strong> $
                  {formatCurrency(result2.totalInterest)}
                </p>
                <p>
                  <strong>Total Number of Payments:</strong> 1
                </p>

                {/* Pie Chart */}
                <div className="mt-4 flex justify-center">
                  <PieChart width={200} height={200}>
                    <Pie
                      data={[
                        { name: "Principal", value: result2.principal },
                        { name: "Interest", value: result2.totalInterest },
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      <Cell fill={COLORS[0]} />
                      <Cell fill={COLORS[1]} />
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>
              </>
            ) : (
              <p className="text-gray-500">
                Enter loan details and click Calculate.
              </p>
            )}
          </div>
        </div>

        {/* Schedule Table toggle */}
        {result2 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowDefSchedule(!showDefSchedule)}
              className="bg-blue-900 text-white px-4 py-2 rounded-lg"
            >
              {showDefSchedule ? "Hide" : "Show"} Schedule Table
            </button>
          </div>
        )}

        {/* Schedule Table */}
        {showDefSchedule && result2 && (
          <div className="mt-6">
            <div className="flex gap-2 mb-4 justify-center flex-wrap">
              <button
                onClick={() => setDefScheduleType("Annual")}
                className={`px-3 py-1 border rounded ${
                  defScheduleType === "Annual" ? "bg-blue-600 text-white" : ""
                }`}
              >
                Annual Schedule
              </button>
              <button
                onClick={() => setDefScheduleType("Monthly")}
                className={`px-3 py-1 border rounded ${
                  defScheduleType === "Monthly" ? "bg-blue-600 text-white" : ""
                }`}
              >
                Monthly Schedule
              </button>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full border table-auto text-sm">
                <thead className="bg-gray-200 text-blue-900">
                  <tr>
                    <th className="border px-2 py-2">Sl#</th>
                    <th className="border px-2 py-2">Beginning Balance</th>
                    <th className="border px-2 py-2">Interest</th>
                    <th className="border px-2 py-2">Ending Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {(defScheduleType === "Monthly"
                    ? result2.monthlySchedule
                    : result2.annualSchedule
                  ).map((row, i) => (
                    <tr key={i} className="odd:bg-gray-50">
                      <td className="border px-2 py-2">{row.sl}</td>
                      <td className="border px-2 py-2">
                        ${formatCurrency(row.beginning)}
                      </td>
                      <td className="border px-2 py-2">
                        ${formatCurrency(row.interest)}
                      </td>
                      <td className="border px-2 py-2">
                        ${formatCurrency(row.ending)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ---------------- Category 3 (Bond) ---------------- */}
      <div className="border border-gray-200 rounded-2xl shadow-sm bg-white p-2 ">
        <h2 className="text-2xl font-semibold mb-4 text-center bg-blue-900 text-white p-2">Bond (Predetermined Due Amount)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="border border-blue-100 rounded-xl p-1 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:min-w-[140px] font-medium">Pre Determined DueAmount</label>
              <input
                type="number"
                value={bond.dueAmount}
                onChange={(e) => setBond({ ...bond, dueAmount: e.target.value })}
                className="border rounded-lg p-1 flex-1 w-40"
                placeholder="e.g., 5000"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:min-w-[140px] font-medium">Loan Term</label>
              <div className="flex gap-2 w-full">
                <input
                  type="number"
                  placeholder="Years"
                  value={bond.years}
                  onChange={(e) => setBond({ ...bond, years: e.target.value })}
                  className="border rounded-lg p-2 w-1/2"
                />
                <input
                  type="number"
                  placeholder="Months"
                  value={bond.months}
                  onChange={(e) => setBond({ ...bond, months: e.target.value })}
                  className="border rounded-lg p-2 w-1/2"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:min-w-[140px] font-medium">Interest Rate (%)</label>
              <input
                type="number"
                value={bond.rate}
                onChange={(e) => setBond({ ...bond, rate: e.target.value })}
                className="border rounded-lg p-2  w-full"
                placeholder="e.g., 4"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:min-w-[140px] font-medium">Compound</label>
              <select
                value={bond.compound}
                onChange={(e) => setBond({ ...bond, compound: e.target.value })}
                className="border rounded-lg p-2 w-full"
              >
                {Object.keys(compoundMap).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 mt-2">
              <button onClick={calcBond} className="bg-blue-900 font-semibold text-white px-4 py-2 rounded-lg">Calculate</button>
              <button onClick={clearBond} className="bg-gray-400 text-white font-semibold px-4 py-2 rounded-lg">Clear</button>
            </div>
          </div>

          {/* Result */}
          <div className="border border-blue-100 rounded-xl p-4 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-2 text-blue-900 underline">RESULT</h3>
            {result3 ? (
              <>
                <p><strong>Present Value (Loan Today):</strong> ${formatCurrency(result3.presentValue)}</p>
                <p><strong>Due at Maturity:</strong> ${formatCurrency(result3.futureValue)}</p>
                <p><strong>Total Interest:</strong> ${formatCurrency(result3.totalInterest)}</p>
                <p><strong>Total Number of Payments:</strong> 1</p>

                <div className="mt-4 flex justify-center">
                  <PieChart width={160} height={160}>
                    <Pie
                      data={[
                        { name: "Principal (PV)", value: result3.presentValue },
                        { name: "Interest", value: result3.totalInterest },
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={55}
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      <Cell fill={COLORS[0]} />
                      <Cell fill={COLORS[1]} />
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>
              </>
            ) : (
              <p className="text-gray-500">Enter details and click Calculate.</p>
            )}
          </div>
        </div>

        {/* Schedule Table toggle */}
        {result3 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowBondSchedule(!showBondSchedule)}
              className="bg-blue-900 text-white px-4 py-2 rounded-lg"
            >
              {showBondSchedule ? "Hide" : "Show"} Schedule Table
            </button>
          </div>
        )}

        {/* Bond schedule table with Annual / Monthly options */}
        {showBondSchedule && result3 && (
          <div className="mt-4">
            <div className="flex gap-2 mb-3 justify-center">
              <button
                onClick={() => setBondScheduleType("Annual")}
                className={`px-3 py-1 border rounded ${bondScheduleType === "Annual" ? "bg-blue-900 text-white" : ""}`}
              >
                Annual Schedule
              </button>
              <button
                onClick={() => setBondScheduleType("Monthly")}
                className={`px-3 py-1 border rounded ${bondScheduleType === "Monthly" ? "bg-blue-600 text-white" : ""}`}
              >
                Monthly Schedule
              </button>
            </div>

            {bondScheduleType === "Monthly" ? (
              <div className="overflow-x-auto">
                <table className="w-full border table-auto text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border px-2 py-1">Sl#</th>
                      <th className="border px-2 py-1">Beginning Balance</th>
                      <th className="border px-2 py-1">Interest</th>
                      <th className="border px-2 py-1">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result3.monthlySchedule.map((row, i) => (
                      <tr key={i}>
                        <td className="border px-2 py-1">{row.sl}</td>
                        <td className="border px-2 py-1">${formatCurrency(row.beginning)}</td>
                        <td className="border px-2 py-1">${formatCurrency(row.interest)}</td>
                        <td className="border px-2 py-1">${formatCurrency(row.ending)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border table-auto text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border px-2 py-1">Sl#</th>
                      <th className="border px-2 py-1">Beginning Balance</th>
                      <th className="border px-2 py-1">Interest</th>
                      <th className="border px-2 py-1">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result3.annualSchedule.map((row, i) => (
                      <tr key={i}>
                        <td className="border px-2 py-1">{row.sl}</td>
                        <td className="border px-2 py-1">${formatCurrency(row.beginning)}</td>
                        <td className="border px-2 py-1">${formatCurrency(row.interest)}</td>
                        <td className="border px-2 py-1">${formatCurrency(row.ending)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
