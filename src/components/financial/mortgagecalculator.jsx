import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function MortgageCalculator() {
  const [form, setForm] = useState({
    homePrice: 300000,
    downPayment: 60000,
    downType: "$",
    loanTerm: 30,
    interestRate: 6,
    startMonth: "Jan",
    startYear: 2025,
    includeTaxes: false,
    propertyTaxes: 2000,
    propertyTaxType: "$",
    insurance: 1200,
    insuranceType: "$",
    pmi: 0,
    pmiType: "%",
    hoa: 0,
    hoaType: "$",
    otherCost: 0,
    otherType: "$",
  });

  const [result, setResult] = useState(null);
  const [scheduleType, setScheduleType] = useState("monthly");

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const calculateMortgage = () => {
    let principal =
      form.downType === "$"
        ? form.homePrice - form.downPayment
        : form.homePrice - (form.homePrice * form.downPayment) / 100;

    const monthlyRate = form.interestRate / 100 / 12;
    const numberOfPayments = form.loanTerm * 12;

    const monthlyPrincipalAndInterest =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    let extraCosts = 0;
    if (form.includeTaxes) {
      const calcExtra = (value, type) =>
        type === "$" ? value / 12 : (form.homePrice * value) / 100 / 12;

      extraCosts += calcExtra(Number(form.propertyTaxes), form.propertyTaxType);
      extraCosts += calcExtra(Number(form.insurance), form.insuranceType);
      extraCosts += calcExtra(Number(form.pmi), form.pmiType);
      extraCosts += calcExtra(Number(form.hoa), form.hoaType);
      extraCosts += calcExtra(Number(form.otherCost), form.otherType);
    }

    const monthlyPayment = monthlyPrincipalAndInterest + extraCosts;
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    let balance = principal;
    let amortization = [];
    let yearlySummary = {};

    for (let i = 1; i <= numberOfPayments; i++) {
      let interest = balance * monthlyRate;
      let principalPaid = monthlyPrincipalAndInterest - interest;
      balance -= principalPaid;

      let year = form.startYear + Math.floor((i - 1) / 12);
      let monthIndex = (months.indexOf(form.startMonth) + i - 1) % 12;
      let date = `${months[monthIndex]} ${year}`;

      amortization.push({
        month: i,
        date,
        interest: interest.toFixed(2),
        principal: principalPaid.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00",
      });

      if (!yearlySummary[year]) {
        yearlySummary[year] = { year, balance: 0, interest: 0, payment: 0 };
      }
      yearlySummary[year].balance = balance > 0 ? balance : 0;
      yearlySummary[year].interest += interest;
      yearlySummary[year].payment += monthlyPayment;
    }

    const yearlyData = Object.values(yearlySummary).map((d) => ({
      year: d.year,
      balance: Number(d.balance.toFixed(2)),
      interest: Number(d.interest.toFixed(2)),
      payment: Number(d.payment.toFixed(2)),
    }));

    setResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      homePrice: Number(form.homePrice),
      downPayment:
        form.downType === "$"
          ? Number(form.downPayment)
          : (form.homePrice * form.downPayment) / 100,
      totalPayments: numberOfPayments,
      totalMortgage: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      startDate: `${form.startMonth} ${form.startYear}`,
      chartData: [
        { name: "Principal", value: principal },
        { name: "Interest", value: totalInterest },
      ],
      amortization,
      yearlyData,
    });
  };

  const clearForm = () => {
    setForm({
      homePrice: 300000,
      downPayment: 60000,
      downType: "$",
      loanTerm: 30,
      interestRate: 6,
      startMonth: "Jan",
      startYear: 2025,
      includeTaxes: false,
      propertyTaxes: 2000,
      propertyTaxType: "$",
      insurance: 1200,
      insuranceType: "$",
      pmi: 0,
      pmiType: "%",
      hoa: 0,
      hoaType: "$",
      otherCost: 0,
      otherType: "$",
    });
    setResult(null);
  };

  return (
    <div className="container mx-auto p-6">
      

      {/* Main Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column - Inputs */}
        <div className="border border-blue-100 rounded-xl bg-gray-50 p-4">
          <div className="space-y-4">
            {/* Home Price */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <label className="sm:w-40">Home Price</label>
              <input
                type="number"
                name="homePrice"
                value={form.homePrice}
                onChange={handleChange}
                className="border p-2 rounded w-full sm:w-2/3"
              />
            </div>

          {/* Down Payment */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <label className="sm:w-40">Down Payment</label>
              <div className="flex gap-2 w-full sm:w-2/3 min-w-0">
                <input
                  type="number"
                  name="downPayment"
                  value={form.downPayment}
                  onChange={handleChange}
                  className="border p-2 rounded flex-1 min-w-0"
                />
                <select
                  name="downType"
                  value={form.downType}
                  onChange={handleChange}
                  className="border p-2 rounded w-20"
                >
                  <option value="$">$</option>
                  <option value="%">%</option>
                </select>
              </div>
            </div>

            {/* Loan Term */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <label className="sm:w-40">Loan Term</label>
              <input
                type="number"
                placeholder="year"
                name="loanTerm"
                value={form.loanTerm}
                onChange={handleChange}
                className="border p-2 rounded w-full sm:w-2/3"
              />
            </div>

            {/* Interest Rate */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <label className="sm:w-40">Interest Rate</label>
              <input
                type="number"
                name="interestRate"
                value={form.interestRate}
                onChange={handleChange}
                className="border p-2 rounded w-full sm:w-2/3"
              />
            </div>

            {/* Start Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <label className="sm:w-40">Start Date</label>
              <div className="flex gap-2 w-full sm:w-2/3 min-w-0">
                <select
                  name="startMonth"
                  value={form.startMonth}
                  onChange={handleChange}
                  className="border p-2 rounded flex-1 min-w-0"
                >
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  name="startYear"
                  value={form.startYear}
                  onChange={handleChange}
                  className="border p-2 rounded w-24"
                />
              </div>
            </div>
            {/* Include Taxes */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="includeTaxes"
                checked={form.includeTaxes}
                onChange={handleChange}
              />
              <label>Include taxes and costs below</label>
            </div>

            {/* Taxes & Costs */}
            {/* Taxes & Costs */}
            {form.includeTaxes && (
              <div className="space-y-3 pl-2 sm:pl-4">
                <p className="font-semibold">Annual Tax and Cost</p>
                {[
                  ["propertyTaxes", "Property Taxes", form.propertyTaxType],
                  ["insurance", "Home Insurance", form.insuranceType],
                  ["pmi", "PMI Insurance", form.pmiType],
                  ["hoa", "HOA Fee", form.hoaType],
                  ["otherCost", "Other Cost", form.otherType],
                ].map(([field, label, type]) => (
                  <div
                    key={field}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                  >
                    <label className="sm:w-40">{label}</label>
                    <div className="flex gap-2 w-full sm:w-2/3 min-w-0">
                      <input
                        type="number"
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        className="border p-2 rounded flex-1 min-w-0"
                      />
                      <select
                        name={`${field}Type`}
                        value={type}
                        onChange={handleChange}
                        className="border p-2 rounded w-20"
                      >
                        <option value="$">$</option>
                        <option value="%">%</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 pt-4">
              <button
                onClick={calculateMortgage}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 w-full sm:w-auto"
              >
                Calculate
              </button>
              <button
                onClick={clearForm}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full sm:w-auto"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="border border-blue-100 rounded-xl bg-gray-50 p-4">
          <h3 className="bg-blue-900 text-white text-center p-2">Result</h3>
          {result ? (
            <div className="space-y-3">
              <p><strong>Monthly Pay:</strong> ${result.monthlyPayment}</p>
              <p><strong>Home Price:</strong> ${result.homePrice}</p>
              <p><strong>Down Payment:</strong> ${result.downPayment}</p>
              <p><strong>Total Payments:</strong> {result.totalPayments}</p>
              <p><strong>Total Mortgage Payment:</strong> ${result.totalMortgage}</p>
              <p><strong>Total Interest:</strong> ${result.totalInterest}</p>
              <p><strong>Mortgage Start Date:</strong> {result.startDate}</p>

              {/* Pie Chart */}
              <div className="h-64">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={result.chartData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={50}
                      innerRadius={20}
                      fill="#8884d8"
                      label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                    >
                      <Cell fill="#4CAF50" />
                      <Cell fill="#F44336" />
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Enter details and click Calculate.</p>
          )}
        </div>
    </div>

      {/* Amortization Table + Line Chart */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Amortization Table */}
          <div className="overflow-x-auto bg-white p-4 rounded shadow">
          <div className="justify-between items-center mb-2">
  <div>
    <h3 className="text-2xl font-bold text-center mb-3">Amortization Table</h3>
  </div>

  <div>
    <button
      onClick={() => setScheduleType("monthly")}
      className={`px-3 py-1 mr-2 rounded ${
        scheduleType === "monthly"
          ? "bg-blue-900 text-white"
          : "bg-gray-200"
      }`}
    >
      Monthly
    </button>
    <button
      onClick={() => setScheduleType("annual")}
      className={`px-3 py-1 rounded ${
        scheduleType === "annual"
          ? "bg-blue-900 text-white"
          : "bg-gray-200"
      }`}
    >
      Annual
    </button>
  </div>
</div>

<table className="min-w-full text-sm text-left">
  <thead>
    <tr className="border-b">
      <th className="p-2">
        {scheduleType === "monthly" ? "Month" : "Year"}
      </th>
      <th className="p-2">Date</th>
      <th className="p-2">Interest</th>
      <th className="p-2">Principal</th>
      <th className="p-2">Ending Balance</th>
    </tr>
  </thead>
  <tbody>
    {(scheduleType === "monthly"
      ? result.amortization
      : result.amortization.filter((_, i) => (i + 1) % 12 === 0)
    ).map((row, i) => (
      <tr key={i} className="border-b">
        <td className="p-2">
          {scheduleType === "monthly"
            ? row.month
            : Math.ceil(row.month / 12)}
        </td>
        <td className="p-2">{row.date}</td>
        <td className="p-2">${row.interest}</td>
        <td className="p-2">${row.principal}</td>
        <td className="p-2">${row.balance}</td>
      </tr>
    ))}
  </tbody>
</table>
          </div>

          {/* Line Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2">Balance, Interest & Payment Over Time</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={result.yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="balance" stroke="#8884d8" />
                <Line type="monotone" dataKey="interest" stroke="#82ca9d" />
                <Line type="monotone" dataKey="payment" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
