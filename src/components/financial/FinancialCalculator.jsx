import React, { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function FinanceCalculator() {
  const [activeMenu, setActiveMenu] = useState("FV");
  const [inputs, setInputs] = useState({
    periods: "",
    interest: "",
    presentValue: "",
    payment: "",
    futureValue: "",
  });
  const [result, setResult] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [paymentTiming, setPaymentTiming] = useState("beginning"); // default
  const [showSchedule, setShowSchedule] = useState(false);

  // Menu fields
  const menuConfig = useMemo(
    () => ({
      FV: [
        { label: "No. of Period", name: "periods" },
        { label: "Interest per Year (%)", name: "interest" },
        { label: "Present Value", name: "presentValue" },
        { label: "Periodic Payment", name: "payment" },
      ],
      PMT: [
        { label: "No. of Period", name: "periods" },
        { label: "Interest per Year (%)", name: "interest" },
        { label: "Present Value", name: "presentValue" },
        { label: "Future Value", name: "futureValue" },
      ],
      "I/Y": [
        { label: "No. of Period", name: "periods" },
        { label: "Present Value", name: "presentValue" },
        { label: "Periodic Payment", name: "payment" },
        { label: "Future Value", name: "futureValue" },
      ],
      N: [
        { label: "Interest per Year (%)", name: "interest" },
        { label: "Present Value", name: "presentValue" },
        { label: "Periodic Payment", name: "payment" },
        { label: "Future Value", name: "futureValue" },
      ],
      PV: [
        { label: "No. of Period", name: "periods" },
        { label: "Interest per Year (%)", name: "interest" },
        { label: "Periodic Payment", name: "payment" },
        { label: "Future Value", name: "futureValue" },
      ],
    }),
    []
  );

  const fmt = (num) =>
    Number.isFinite(num)
      ? num.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "-";

  const toNum = (v) =>
    v === "" || v === null || v === undefined
      ? NaN
      : parseFloat(v.toString().replace(/,/g, ""));

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^[0-9.,]*$/.test(value)) {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  const clearAll = () => {
    setInputs({
      periods: "",
      interest: "",
      presentValue: "",
      payment: "",
      futureValue: "",
    });
    setResult(null);
    setSchedule([]);
    setShowSchedule(false);
  };

  const handleCalculate = () => {
    const n = toNum(inputs.periods);
    const iPct = toNum(inputs.interest);
    const i = Number.isFinite(iPct) ? iPct / 100 : NaN;
    const PV = toNum(inputs.presentValue);
    const PMT = toNum(inputs.payment);
    const FV = toNum(inputs.futureValue);

    let calcLabel = activeMenu;
    let calcValue = NaN;
    let usedN = n,
      usedI = i,
      usedPV = PV,
      usedPMT = PMT,
      usedFV = FV;

    const zeroI = (x) => Math.abs(x) < 1e-12;

    try {
      switch (activeMenu) {
        case "FV": {
          if (zeroI(usedI)) {
            calcValue = usedPV + usedPMT * usedN;
          } else {
            calcValue =
              usedPV * Math.pow(1 + usedI, usedN) +
              usedPMT *
                (((Math.pow(1 + usedI, usedN) - 1) / usedI) *
                  (paymentTiming === "beginning" ? 1 + usedI : 1));
          }
          usedFV = calcValue;
          break;
        }
        case "PV": {
          if (zeroI(usedI)) {
            calcValue = usedFV - usedPMT * usedN;
          } else {
            calcValue =
              usedFV / Math.pow(1 + usedI, usedN) +
              usedPMT *
                (((1 - Math.pow(1 + usedI, -usedN)) / usedI) *
                  (paymentTiming === "beginning" ? 1 + usedI : 1));
          }
          usedPV = calcValue;
          break;
        }
        case "PMT": {
          if (zeroI(usedI)) {
            calcValue = usedN === 0 ? NaN : (usedFV - usedPV) / usedN;
          } else {
            const factor =
              (Math.pow(1 + usedI, usedN) - 1) /
              (usedI * (paymentTiming === "beginning" ? 1 + usedI : 1));
            calcValue =
              (usedFV - usedPV * Math.pow(1 + usedI, usedN)) / factor;
          }
          usedPMT = calcValue;
          break;
        }
        case "N":
        case "I/Y":
          calcValue = NaN;
          break;
        default:
          break;
      }
    } catch {
      // ignore errors
    }

    let sumPayments = usedPMT * usedN;
    let impliedFV = zeroI(usedI)
      ? usedPV + usedPMT * usedN
      : usedPV * Math.pow(1 + usedI, usedN) +
        usedPMT *
          (((Math.pow(1 + usedI, usedN) - 1) / usedI) *
            (paymentTiming === "beginning" ? 1 + usedI : 1));
    let totalInterest = impliedFV - (usedPV + sumPayments);

    // Build amortization schedule with accumulated interest
    let sched = [];
    let balance = usedPV;
    let accumulatedInterest = 0;

    for (let t = 1; t <= usedN; t++) {
      let interestPortion = balance * usedI;
      accumulatedInterest += interestPortion;

      balance = balance * (1 + usedI) + usedPMT;

      sched.push({
        period: t,
        pv: balance - usedPMT, // approximate PV before payment
        pmt: usedPMT,
        interest: interestPortion,
        fv: balance,
        accInterest: accumulatedInterest,
      });
    }

    setResult({
      label: calcLabel,
      value: calcValue,
      sumPayments,
      totalInterest,
    });
    setSchedule(sched);
    setShowSchedule(true);
  };

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column Inputs */}
        <div>
          {/* Menu */}
          <div className="flex flex-wrap gap-1 ">
            {Object.keys(menuConfig).map((menu) => (
              <button
                key={menu}
                onClick={() => setActiveMenu(menu)}
                className={`px-3 py-1 text-sm font-medium transition
                  ${
                    activeMenu === menu
                      ? "bg-gray-200 "
                      : "bg-blue-900 text-white hover:bg-gray-200 text-black"
                  }`}
              >
                {menu}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="border border-gray-300 p-4 shadow-sm bg-gray-50">
            {menuConfig[activeMenu].map((field) => {
              const id = `fc-${field.name}`;
              return (
                <div
                  key={field.name}
                  className="flex flex-col md:flex-row text-sm md:items-center md:gap-4 mb-3"
                >
                  <label
                    htmlFor={id}
                    className="md:w-1/2 text-sm font-semibold text-gray-700"
                  >
                    {field.label}
                  </label>
                  <input
                    id={id}
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    name={field.name}
                    value={inputs[field.name]}
                    onChange={handleChange}
                    className="w-full md:w-1/2 border rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder={field.label}
                  />
                </div>
              );
            })}

            {/* Radio buttons */}
            <div className="flex gap-4 mb-3">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="paymentTiming"
                  value="beginning"
                  checked={paymentTiming === "beginning"}
                  onChange={(e) => setPaymentTiming(e.target.value)}
                />
                Beginning
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="paymentTiming"
                  value="end"
                  checked={paymentTiming === "end"}
                  onChange={(e) => setPaymentTiming(e.target.value)}
                />
                End
              </label>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={handleCalculate}
                className="flex bg-blue-900 text-white py-1 px-2 rounded-lg hover:bg-blue-900"
              >
                Calculate
              </button>
              <button
                onClick={clearAll}
                className="flex bg-gray-200 text-gray-700 py-1 px-7 rounded-lg hover:bg-gray-300"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Right Column Result */}
        <div className="border border-gray-300 p-4 shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold p-2 mb-3 text-center text-white bg-blue-900">
            RESULT
          </h2>
          {!result ? (
            <div className="text-gray-600 text-center">
              Result will be shown here after calculation.
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3 rounded bg-gray-50 border flex justify-between">
                <span className="font-semibold">{result.label}:</span>
                <span>
                  {result.label === "I/Y"
                    ? `${fmt(result.value)}%`
                    : fmt(result.value)}
                </span>
              </div>
              <div className="p-3 rounded bg-gray-50 border flex justify-between">
                <span className="font-semibold">
                  Sum of Periodic Payments:
                </span>
                <span>{fmt(result.sumPayments)}</span>
              </div>
              <div className="p-3 rounded bg-gray-50 border flex justify-between">
                <span className="font-semibold">Total Interest:</span>
                <span>{fmt(result.totalInterest)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second Row: Only show after calculate */}
      {showSchedule && (
        <div className="flex-1  gap-6 mt-6 md:w-4/5 sm:w-full px-7">
          
          {/* Line Graph */}
          <div className="border border-gray-300 shadow-sm">
            <h2 className="text-lg font-semibold p-2 text-center text-white bg-blue-900">
              Balance & Interest Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={schedule}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis
                  tickFormatter={(value) =>
                    value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value
                  }
                />
                <Tooltip formatter={(val) => fmt(val)} />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#16a34a" name="PV" />
                <Line type="monotone" dataKey="pmt" stroke="#dc2626" name="PMT" />
                <Line type="monotone" dataKey="fv" stroke="#2563eb" name="FV" />
                <Line
                  type="monotone"
                  dataKey="accInterest"
                  stroke="#9333ea"
                  name="Acc. Interest"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

       {showSchedule && (
        <div className="flex-1  gap-6 mt-6 md:w-4/5 sm:w-full px-7">
          {/* Schedule Table */}
          <div className="overflow-x-auto border border-gray-300 shadow-sm">
            <h2 className="text-lg font-semibold p-2 text-center text-white bg-blue-900">
              Schedule
            </h2>
            <table className="w-full border-collapse text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1">Period</th>
                  <th className="border px-2 py-1">PV</th>
                  <th className="border px-2 py-1">PMT</th>
                  <th className="border px-2 py-1">Interest</th>
                  <th className="border px-2 py-1">FV</th>
                  <th className="border px-2 py-1">Acc. Interest</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.period}>
                    <td className="border px-2 py-1">{row.period}</td>
                    <td className="border px-2 py-1">{fmt(row.pv)}</td>
                    <td className="border px-2 py-1">{fmt(row.pmt)}</td>
                    <td className="border px-2 py-1">{fmt(row.interest)}</td>
                    <td className="border px-2 py-1">{fmt(row.fv)}</td>
                    <td className="border px-2 py-1">{fmt(row.accInterest)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
        </div>
      )}



    </div>
  );
}
