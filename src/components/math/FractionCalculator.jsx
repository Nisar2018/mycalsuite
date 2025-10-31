import React, { useState } from "react";

export default function FractionCalculator() {
  const [num1, setNum1] = useState(4);
  const [den1, setDen1] = useState(5);
  const [num2, setNum2] = useState(8);
  const [den2, setDen2] = useState(9);
  const [operator, setOperator] = useState("+");
  const [steps, setSteps] = useState([]);
  const [resultFraction, setResultFraction] = useState("");
  const [resultMixed, setResultMixed] = useState("");
  const [resultDecimal, setResultDecimal] = useState("");

  // GCD helper
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Calculate function
  const calculate = () => {
    let n1 = parseInt(num1), d1 = parseInt(den1);
    let n2 = parseInt(num2), d2 = parseInt(den2);
    let numerator, denominator;
    let newSteps = [];

    newSteps.push(`${n1}/${d1} ${operator} ${n2}/${d2}`);

    switch (operator) {
      case "+":
        numerator = n1 * d2 + n2 * d1;
        denominator = d1 * d2;
        newSteps.push(`= ${n1}x${d2}/${d1}x${d2} + ${n2}x${d1}/${d1}x${d2}`);
        newSteps.push(`= ${n1 * d2}/${denominator} + ${n2 * d1}/${denominator}`);
        newSteps.push(`= ${n1 * d2}+${n2 * d1} /${denominator}`);
        break;
      case "-":
        numerator = n1 * d2 - n2 * d1;
        denominator = d1 * d2;
        newSteps.push(`= ${n1}x${d2}/${d1}x${d2} - ${n2}x${d1}/${d1}x${d2}`);
        newSteps.push(`= ${n1 * d2}/${denominator} - ${n2 * d1}/${denominator}`);
        newSteps.push(`= ${n1 * d2}-${n2 * d1} /${denominator}`);
        break;
      case "X":
        numerator = n1 * n2;
        denominator = d1 * d2;
        newSteps.push(`= (${n1}x${n2})/(${d1}x${d2})`);
        break;
      case "/":
        numerator = n1 * d2;
        denominator = d1 * n2;
        newSteps.push(`= (${n1}x${d2})/(${d1}x${n2})`);
        break;
      default:
        return;
    }

    // Simplify
    const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
    numerator /= divisor;
    denominator /= divisor;

    newSteps.push(`= ${numerator}/${denominator}`);

    // Mixed
    let whole = Math.floor(numerator / denominator);
    let remainder = numerator % denominator;
    let mixed = whole > 0 && remainder !== 0
      ? `${whole} ${remainder}/${denominator}`
      : `${numerator}/${denominator}`;

    newSteps.push(`= ${mixed}`);

    setResultFraction(`${numerator}/${denominator}`);
    setResultMixed(mixed);
    setResultDecimal((numerator / denominator).toFixed(4));
    setSteps(newSteps);
  };

  // Clear
  const clearAll = () => {
    setNum1(4);
    setDen1(5);
    setNum2(8);
    setDen2(9);
    setOperator("+");
    setResultFraction("");
    setResultMixed("");
    setResultDecimal("");
    setSteps([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
        Fraction Calculator
      </h1>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="border border-blue-100 shadow-md rounded-xl p-4 bg-white">
          {/* Numerators Row */}
          <div className="flex items-end justify-center gap-6 mb-[2px]">
            <input
              type="number"
              className="border rounded p-1 w-20 text-center"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
            <select
              className="border rounded p-1 h-8 -my-1"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              style={{ marginBottom: "2px" }}
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="X">X</option>
              <option value="/">/</option>
            </select>
            <input
              type="number"
              className="border rounded p-1 w-20 text-center"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>

          {/* Fraction Bar */}
          <div className="flex items-center justify-center mb-[2px]">
            <div className="w-20 border-t-2 border-gray-400"></div>
            <div className="mx-8"></div>
            <div className="w-20 border-t-2 border-gray-400"></div>
          </div>

          {/* Denominators Row */}
          <div className="flex items-start justify-center gap-6 mb-[2px]">
            <input
              type="number"
              className="border rounded p-1 w-20 text-center"
              value={den1}
              onChange={(e) => setDen1(e.target.value)}
            />
            <div className="w-16"></div>
            <input
              type="number"
              className="border rounded p-1 w-20 text-center"
              value={den2}
              onChange={(e) => setDen2(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={calculate}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-800"
            >
              Calculate
            </button>
            <button
              onClick={clearAll}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-500"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="border border-blue-100 shadow-md rounded-xl p-4 bg-white">
          <h2 className="bg-blue-900 text-white text-center py-2 rounded-md">
            Result
          </h2>

          {resultFraction && (
            <>
              {/* Result Fraction with fraction bar */}
              <div className="mt-4 flex flex-col items-center">
                {/* Numerators */}
                <div className="flex items-end gap-6 mb-[2px]">
                  <span className="text-lg font-medium">{num1}</span>
                  <span className="text-xl">{operator}</span>
                  <span className="text-lg font-medium">{num2}</span>
                  <span className="ml-4">=</span>
                  <span className="text-lg font-medium">
                    {resultFraction.split("/")[0]}
                  </span>
                </div>

                {/* Fraction Bar */}
                <div className="flex items-center gap-6 mb-[2px]">
                  <div className="w-8 border-t-2 border-gray-400"></div>
                  <div className="w-8"></div>
                  <div className="w-8 border-t-2 border-gray-400"></div>
                  <div className="ml-6 w-8 border-t-2 border-gray-400"></div>
                </div>

                {/* Denominators */}
                <div className="flex items-start gap-6 mb-[2px]">
                  <span className="text-lg font-medium">{den1}</span>
                  <div className="w-4"></div>
                  <span className="text-lg font-medium">{den2}</span>
                  <div className="ml-6 text-lg font-medium">
                    {resultFraction.split("/")[1]}
                  </div>
                </div>
              </div>

              {/* Mixed Fraction */}
              <div className="mt-2 text-center">
                <p className="text-lg">= {resultMixed}</p>
              </div>

              {/* Decimal */}
              <div className="mt-2 text-center">
                <p className="text-lg">Decimal: {resultDecimal}</p>
              </div>

              {/* Steps */}
              <div className="mt-4">
                <p className="font-semibold text-blue-900">Calculation Steps:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
