import React, { useState, useEffect } from "react";

const PercentageCalculator = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result1, setResult1] = useState("");

  const [valA, setValA] = useState("");
  const [valB, setValB] = useState("");
  const [result2, setResult2] = useState("");

  const [oldVal, setOldVal] = useState("");
  const [newVal, setNewVal] = useState("");
  const [result3, setResult3] = useState("");

  const [part, setPart] = useState("");
  const [percent, setPercent] = useState("");
  const [result4, setResult4] = useState("");

  // remove trailing zero decimals
  const formatResult = (num) =>
    num !== "" && !isNaN(num) ? parseFloat(num.toFixed(2)).toString() : "";

  // auto calculations
  useEffect(() => {
    if (value1 && value2) setResult1(formatResult((value1 * value2) / 100));
  }, [value1, value2]);

  useEffect(() => {
    if (valA && valB) setResult2(formatResult((valA / valB) * 100));
  }, [valA, valB]);

  useEffect(() => {
    if (oldVal && newVal)
      setResult3(formatResult(((newVal - oldVal) / oldVal) * 100));
  }, [oldVal, newVal]);

  useEffect(() => {
    if (part && percent) setResult4(formatResult(part / (percent / 100)));
  }, [part, percent]);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8">
      {/* 1. What is X% of Y? */}
      <div className="p-4 border rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-3">What is X% of Y?</h3>
        <div className="flex flex-wrap items-center gap-2">
          <label>What is</label>
          <input
            type="number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            className="flex-1 min-w-[60px] p-2 border rounded"
          />
          <label>% of</label>
          <input
            type="number"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            className="flex-1 min-w-[60px] p-2 border rounded"
          />
          <span>=</span>
          <input
            type="text"
            readOnly
            value={result1}
            className="flex-1 min-w-[80px] p-2 border rounded bg-gray-100"
          />
        </div>
        <div className="flex justify-center gap-2 mt-3">
          <button
            onClick={() =>
              setResult1(formatResult((value1 * value2) / 100))
            }
            className="flex-1 max-w-[200px] p-2 bg-blue-900 text-white rounded-lg"
          >
            Calculate
          </button>
          <button
            onClick={() => {
              setValue1("");
              setValue2("");
              setResult1("");
            }}
            className="flex-1 max-w-[200px] p-2 bg-gray-600 text-white rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>

      {/* 2. X is what % of Y? */}
      <div className="p-4 border rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-3">X is what % of Y?</h3>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="number"
            value={valA}
            onChange={(e) => setValA(e.target.value)}
            className="flex-1 min-w-[60px] p-2 border rounded"
          />
          <label>is what % of</label>
          <input
            type="number"
            value={valB}
            onChange={(e) => setValB(e.target.value)}
            className="flex-1 min-w-[60px] p-2 border rounded"
          />
          <span>=</span>
          <input
            type="text"
            readOnly
            value={result2}
            className="flex-1 min-w-[80px] p-2 border rounded bg-gray-100"
          />
        </div>
        <div className="flex justify-center gap-2 mt-3">
          <button
            onClick={() => setResult2(formatResult((valA / valB) * 100))}
            className="flex-1 max-w-[200px] p-2 bg-blue-900 text-white rounded-lg"
          >
            Calculate
          </button>
          <button
            onClick={() => {
              setValA("");
              setValB("");
              setResult2("");
            }}
            className="flex-1 max-w-[200px] p-2 bg-gray-600 text-white rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>

      {/* 3. % Increase/Decrease from X to Y */}
      <div className="p-4 border rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-3">
          % Increase/Decrease from X to Y
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="number"
            value={oldVal}
            onChange={(e) => setOldVal(e.target.value)}
            className="flex-1 min-w-[60px] p-2 border rounded"
          />
          <label>to</label>
          <input
            type="number"
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
            className="flex-1 min-w-[60px] p-2 border rounded"
          />
          <span>=</span>
          <input
            type="text"
            readOnly
            value={result3}
            className="flex-1 min-w-[80px] p-2 border rounded bg-gray-100"
          />
        </div>
        <div className="flex justify-center gap-2 mt-3">
          <button
            onClick={() =>
              setResult3(formatResult(((newVal - oldVal) / oldVal) * 100))
            }
            className="flex-1 max-w-[200px] p-2 bg-blue-900 text-white rounded-lg"
          >
            Calculate
          </button>
          <button
            onClick={() => {
              setOldVal("");
              setNewVal("");
              setResult3("");
            }}
            className="flex-1 max-w-[200px] p-2 bg-gray-600 text-white rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>

      {/* 4. If X is Y% of a number, find the number */}
      <div className="p-4 border rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-3">
          If X is Y% of a number, find the number
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <label>If</label>
          <input
            type="number"
            value={part}
            onChange={(e) => setPart(e.target.value)}
            className="flex-1 min-w-[60px] p-2 border rounded"
          />
          <label>is</label>
          <input
            type="number"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            className="flex-1 min-w-[60px] p-2 border rounded"
          />
          <label>% of number =</label>
          <input
            type="text"
            readOnly
            value={result4}
            className="flex-1 min-w-[80px] p-2 border rounded bg-gray-100"
          />
        </div>
        <div className="flex justify-center gap-2 mt-3">
          <button
            onClick={() => setResult4(formatResult(part / (percent / 100)))}
            className="flex-1 max-w-[200px] p-2 bg-blue-900 text-white rounded-lg"
          >
            Calculate
          </button>
          <button
            onClick={() => {
              setPart("");
              setPercent("");
              setResult4("");
            }}
            className="flex-1 max-w-[200px] p-2 bg-gray-600 text-white rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;
