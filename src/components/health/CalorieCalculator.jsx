import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function CalorieCalculator() {
  const [unit, setUnit] = useState("us");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("bmr");
  const [resultUnit, setResultUnit] = useState("calories");
  const [formula, setFormula] = useState("mifflin");
  const [results, setResults] = useState(null);
  const [macros, setMacros] = useState({ protein: 20, carbs: 50, fat: 30 });

  const activityFactors = {
    bmr: 1.0,
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
    extraActive: 2.2,
  };

  const calculateCalories = () => {
    let h =
      unit === "us"
        ? Number(heightFt) * 30.48 + Number(heightIn) * 2.54
        : Number(heightCm);
    let w = unit === "us" ? Number(weight) * 0.4536 : Number(weight);
    let a = Number(age);

    let bmr = 0;
    if (formula === "mifflin") {
      bmr =
        gender === "male"
          ? 10 * w + 6.25 * h - 5 * a + 5
          : 10 * w + 6.25 * h - 5 * a - 161;
    } else if (formula === "harris") {
      bmr =
        gender === "male"
          ? 88.362 + 13.397 * w + 4.799 * h - 5.677 * a
          : 447.593 + 9.247 * w + 3.098 * h - 4.33 * a;
    } else if (formula === "katch") {
      let lbm = w * (1 - 0.25);
      bmr = 370 + 21.6 * lbm;
    }

    let total = bmr * (activityFactors[activity] || 1);
    if (resultUnit === "kilojoules") {
      bmr *= 4.184;
      total *= 4.184;
    }
    setResults({ bmr: bmr.toFixed(2), total: total.toFixed(2) });
  };

  const clearForm = () => {
    setAge("");
    setGender("male");
    setHeightFt("");
    setHeightIn("");
    setHeightCm("");
    setWeight("");
    setActivity("bmr");
    setResultUnit("calories");
    setFormula("mifflin");
    setResults(null);
  };

  // --- Gauge Meter ---
  const renderGauge = (value) => {
    const max = 4000;
    const val = Math.min(value, max);
    const angle = (val / max) * 180;
    const rad = (angle - 180) * (Math.PI / 180);
    const x = 150 + 120 * Math.cos(rad);
    const y = 160 + 120 * Math.sin(rad);

    const maleRanges = [
      { d: "M 20 160 A 130 130 0 0 1 100 40", color: "#22c55e" },
      { d: "M 100 40 A 130 130 0 0 1 200 40", color: "#eab308" },
      { d: "M 200 40 A 130 130 0 0 1 280 160", color: "#ef4444" },
    ];
    const femaleRanges = [
      { d: "M 20 160 A 130 130 0 0 1 120 60", color: "#3b82f6" },
      { d: "M 120 60 A 130 130 0 0 1 180 60", color: "#f59e0b" },
      { d: "M 180 60 A 130 130 0 0 1 280 160", color: "#ec4899" },
    ];

    const ranges = gender === "male" ? maleRanges : femaleRanges;

    return (
      <div className="flex flex-col items-center">
        <svg width="150" height="90" viewBox="0 0 300 180">
          {ranges.map((r, i) => (
            <path
              key={i}
              d={r.d}
              fill="none"
              stroke={r.color}
              strokeWidth="20"
            />
          ))}
          <line
            x1="150"
            y1="160"
            x2={x}
            y2={y}
            stroke="black"
            strokeWidth="4"
          />
          <circle cx="150" cy="160" r="6" fill="black" />
        </svg>
        <p className="mt-2 font-bold">
          {val} {resultUnit === "calories" ? "Calories" : "kJ"}
        </p>
      </div>
    );
  };

  // --- Macro Pie Chart ---
  const renderMacroPie = (calories) => {
    const data = [
      { name: "Protein", value: (calories * macros.protein) / 100 },
      { name: "Carbs", value: (calories * macros.carbs) / 100 },
      { name: "Fat", value: (calories * macros.fat) / 100 },
    ];
    const COLORS = ["#f87171", "#60a5fa", "#34d399"];
    return (
      <PieChart width={300} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    );
  };

  // --- Weight Tables ---
  const renderWeightTables = (totalCalories) => {
    const maintain = parseFloat(totalCalories);
    const lossHalf = maintain - 500;
    const lossOne = maintain - 1000;
    const gainHalf = maintain + 500;
    const gainOne = maintain + 1000;

    return (
      <div className="mt-6 space-y-6">
        {/* Weight Loss Table */}
        <div>
          <h3 className="text-lg font-semibold text-red-600 mb-2">
            Weight Loss
          </h3>
          <table className="w-full border text-center">
            <thead className="bg-red-100">
              <tr>
                <th className="border px-2 py-1">Goal</th>
                <th className="border px-2 py-1">Calories/day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Maintain</td>
                <td className="border px-2 py-1">{maintain.toFixed(0)}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Lose 0.5 kg/week</td>
                <td className="border px-2 py-1">{lossHalf.toFixed(0)}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Lose 1 kg/week</td>
                <td className="border px-2 py-1">{lossOne.toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Weight Gain Table */}
        <div>
          <h3 className="text-lg font-semibold text-green-600 mb-2">
            Weight Gain
          </h3>
          <table className="w-full border text-center">
            <thead className="bg-green-100">
              <tr>
                <th className="border px-2 py-1">Goal</th>
                <th className="border px-2 py-1">Calories/day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Maintain</td>
                <td className="border px-2 py-1">{maintain.toFixed(0)}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Gain 0.5 kg/week</td>
                <td className="border px-2 py-1">{gainHalf.toFixed(0)}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Gain 1 kg/week</td>
                <td className="border px-2 py-1">{gainOne.toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // --- Macro Sliders ---
  const handleMacroChange = (type, value) => {
    let newMacros = { ...macros, [type]: Number(value) };
    const total = newMacros.protein + newMacros.carbs + newMacros.fat;
    if (total > 100) {
      const excess = total - 100;
      if (type === "protein") {
        newMacros.carbs -= excess / 2;
        newMacros.fat -= excess / 2;
      } else if (type === "carbs") {
        newMacros.protein -= excess / 2;
        newMacros.fat -= excess / 2;
      } else if (type === "fat") {
        newMacros.protein -= excess / 2;
        newMacros.carbs -= excess / 2;
      }
    }
    setMacros(newMacros);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      

      <div className="grid md:grid-cols-2 gap-4">
        {/* Input Column */}
        <div className="border border-blue-100 shadow p-4 rounded-lg">
          <div className="flex gap-2 mb-4">
            <button
              className={`px-3 py-1 text-white ${
                unit === "us" ? "bg-blue-900" : "bg-gray-400"
              }`}
              onClick={() => setUnit("us")}
            >
              US Units
            </button>
            <button
              className={`px-3 py-1 text-white ${
                unit === "metric" ? "bg-blue-900" : "bg-gray-400"
              }`}
              onClick={() => setUnit("metric")}
            >
              Metric Units
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <label className="w-24">Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border p-1 flex-1"
              />
            </div>

            <div>
              <label className="mr-2">Gender:</label>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />{" "}
              Male
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
                className="ml-2"
              />{" "}
              Female
            </div>

            {unit === "us" ? (
              <div className="flex items-center gap-2">
                <label className="w-24">Height:</label>
                <input
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  className="border p-1 w-20"
                  placeholder="ft"
                />
                <input
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  className="border p-1 w-20"
                  placeholder="in"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <label className="w-24">Height:</label>
                <input
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="border p-1 flex-1"
                  placeholder="cm"
                />
              </div>
            )}

            <div className="flex items-center gap-2">
              <label className="w-24">Weight:</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="border p-1 flex-1 w-36"
                placeholder={unit === "us" ? "lbs" : "kg"}
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="w-20">Activity:</label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="border p-1 flex-1 w-36"
              >
                <option value="bmr">Basal Metabolic Rate (BMR)</option>
                <option value="sedentary">Sedentary: little/no exercise</option>
                <option value="light">Light: exercise 1-3x/week</option>
                <option value="moderate">Moderate: 4-5x/week</option>
                <option value="active">Active: daily exercise</option>
                <option value="veryActive">Very Active: intense 6-7x/week</option>
                <option value="extraActive">Extra Active: very intense/job</option>
              </select>
            </div>

            {/* Settings */}
            <div className="mt-4">
            {/*   <h3 className="font-semibold text-blue-900">Settings</h3> */}
              <div className="flex items-center gap-2 mt-2">
                <label className="w-24">Formula:</label>
                <select
                  value={formula}
                  onChange={(e) => setFormula(e.target.value)}
                  className="border p-1 flex-1"
                >
                  <option value="mifflin">Mifflin-St Jeor</option>
                  <option value="harris">Harris-Benedict</option>
                  <option value="katch">Katch-McArdle</option>
                </select>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <label className="w-24">Result:</label>
                <select
                  value={resultUnit}
                  onChange={(e) => setResultUnit(e.target.value)}
                  className="border p-1 flex-1"
                >
                  <option value="calories">Calories</option>
                  <option value="kilojoules">Kilojoules</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={calculateCalories}
                className="bg-blue-900 text-white px-4 py-2 rounded"
              >
                Calculate
              </button>
              <button
                onClick={clearForm}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="border border-blue-100 shadow p-4 rounded-lg">
          <h2 className="bg-blue-900 text-white text-center py-2 rounded">
            Result
          </h2>
          <div className="mt-4 space-y-4">
            {results ? (
              <>
                <p>
                  <span className="font-medium">BMR:</span> {results.bmr}{" "}
                  {resultUnit === "calories" ? "Calories" : "kJ"}
                </p>
                <p>
                  <span className="font-medium">Total (with activity):</span>{" "}
                  {results.total} {resultUnit === "calories" ? "Calories" : "kJ"}
                </p>

                {renderGauge(results.total)}

                {/* Macro Sliders */}
                <div className="mt-4 space-y-3">
                  <h3 className="text-lg font-semibold">Adjust Macronutrients</h3>
                  {["protein", "carbs", "fat"].map((m) => (
                    <div key={m} className="flex items-center gap-2">
                      <label className="w-24 capitalize">{m}:</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={macros[m]}
                        onChange={(e) => handleMacroChange(m, e.target.value)}
                        className="flex-1"
                      />
                      <span>{macros[m]}%</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    Macronutrient Breakdown
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li>
                      🥩 Protein: {macros.protein}% (
                      {((results.total * macros.protein) / 100 / 4).toFixed(0)} g)
                    </li>
                    <li>
                      🍚 Carbs: {macros.carbs}% (
                      {((results.total * macros.carbs) / 100 / 4).toFixed(0)} g)
                    </li>
                    <li>
                      🥑 Fat: {macros.fat}% (
                      {((results.total * macros.fat) / 100 / 9).toFixed(0)} g)
                    </li>
                  </ul>
                </div>

                {/* Pie Chart */}
                <div className="mt-4">{renderMacroPie(results.total)}</div>

                {/* Weight Tables */}
                {renderWeightTables(results.total)}
              </>
            ) : (
              <p className="text-gray-500 text-center">Enter details to calculate.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
