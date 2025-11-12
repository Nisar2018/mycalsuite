import React, { useState, useEffect, useRef } from "react";

const MacroCalculator = () => {
  const [unitSystem, setUnitSystem] = useState("metric");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [heightCm, setHeightCm] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(1.55);
  const [formula, setFormula] = useState("mifflin");
  const [goal, setGoal] = useState("maintain");
  const [macroPlan, setMacroPlan] = useState("balanced");
  const [customRatios, setCustomRatios] = useState({
    protein: 30,
    carbs: 45,
    fat: 25,
  });
  const [results, setResults] = useState(null);
  const resultRef = useRef(null);

  // Reset all fields
  const clearAll = () => {
    setAge("");
    setGender("male");
    setHeightCm("");
    setHeightFeet("");
    setHeightInches("");
    setWeight("");
    setActivity(1.55);
    setFormula("mifflin");
    setGoal("maintain");
    setResults(null);
  };

  // BMR Formula
  const calculateBMR = (w, h, a, g) => {
    if (formula === "mifflin") {
      return g === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;
    } else {
      return g === "male"
        ? 66.47 + 13.75 * w + 5.003 * h - 6.755 * a
        : 655.1 + 9.563 * w + 1.85 * h - 4.676 * a;
    }
  };

  const goalFactors = {
    maintain: 0,
    loss025: -0.25,
    loss05: -0.5,
    loss1: -1,
    gain025: 0.25,
    gain05: 0.5,
    gain1: 1,
  };

  const macroPlans = {
    balanced: { protein: 0.25, carbs: 0.5, fat: 0.25 },
    lowcarb: { protein: 0.3, carbs: 0.4, fat: 0.3 },
    lowfat: { protein: 0.25, carbs: 0.55, fat: 0.2 },
    highprotein: { protein: 0.35, carbs: 0.4, fat: 0.25 },
  };

  // Main calculation
  const handleCalculate = () => {
    if (!age || !weight || (unitSystem === "metric" && !heightCm)) return;

    let h = 0;
    let w = parseFloat(weight);

    if (unitSystem === "metric") {
      h = parseFloat(heightCm);
    } else {
      const feetToCm = parseFloat(heightFeet || 0) * 30.48;
      const inchesToCm = parseFloat(heightInches || 0) * 2.54;
      h = feetToCm + inchesToCm;
      w = w * 0.453592; // lbs → kg
    }

    const bmr = calculateBMR(w, h, age, gender);
    let calories = bmr * activity;
    calories += goalFactors[goal] * 500;

    let macros;
    if (macroPlan === "custom") {
      macros = {
        protein: customRatios.protein / 100,
        carbs: customRatios.carbs / 100,
        fat: customRatios.fat / 100,
      };
    } else {
      macros = macroPlans[macroPlan];
    }

    const proteinCalories = calories * macros.protein;
    const carbCalories = calories * macros.carbs;
    const fatCalories = calories * macros.fat;

    const protein = proteinCalories / 4;
    const carbs = carbCalories / 4;
    const fat = fatCalories / 9;

    const sugar = Math.min(carbs * 0.22, 65);
    const satFat = Math.min(fat * 0.4, 31);

    const proteinRange = [protein * 0.9, protein * 1.4];
    const carbRange = [carbs * 0.8, carbs * 1.25];
    const fatRange = [fat * 0.8, fat * 1.25];

    setResults({
      protein: protein.toFixed(0),
      proteinRange: proteinRange.map((v) => v.toFixed(0)),
      carbs: carbs.toFixed(0),
      carbRange: carbRange.map((v) => v.toFixed(0)),
      fat: fat.toFixed(0),
      fatRange: fatRange.map((v) => v.toFixed(0)),
      sugar: sugar.toFixed(0),
      satFat: satFat.toFixed(0),
      calories: calories.toFixed(0),
    });

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  useEffect(() => {
    if (results) handleCalculate();
    // eslint-disable-next-line
  }, [macroPlan, customRatios]);

  // Keep sliders total = 100
  const handleCustomRatioChange = (key, value) => {
    let newRatios = { ...customRatios, [key]: parseInt(value) };
    const total = newRatios.protein + newRatios.carbs + newRatios.fat;
    if (total > 100) {
      const excess = total - 100;
      if (key !== "protein") newRatios.protein = Math.max(0, newRatios.protein - excess / 2);
      if (key !== "carbs") newRatios.carbs = Math.max(0, newRatios.carbs - excess / 2);
      if (key !== "fat") newRatios.fat = Math.max(0, newRatios.fat - excess / 2);
    }
    setCustomRatios(newRatios);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
       
      </h2>

      {/* ✅ Result Section */}
      {results && (
        <div
          ref={resultRef}
          className="mb-6 border border-blue-300 rounded p-4 bg-blue-50 shadow"
        >
          <h3 className="text-lg font-bold text-blue-900 mb-3 text-center bg-blue-100 py-2 rounded">
            Results (Plan:{" "}
            {macroPlan === "custom"
              ? "Create Your Own"
              : macroPlan.charAt(0).toUpperCase() + macroPlan.slice(1)}
            )
          </h3>

          {/* Macro Plan Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {["balanced", "lowcarb", "lowfat", "highprotein", "custom"].map(
              (plan) => (
                <button
                  key={plan}
                  className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                    macroPlan === plan
                      ? "bg-blue-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                  onClick={() => setMacroPlan(plan)}
                >
                  {plan === "balanced"
                    ? "Balanced"
                    : plan === "lowcarb"
                    ? "Low Carb"
                    : plan === "lowfat"
                    ? "Low Fat"
                    : plan === "highprotein"
                    ? "High Protein"
                    : "Create Your Own"}
                </button>
              )
            )}
          </div>

          {/* Custom Plan Sliders */}
          {macroPlan === "custom" && (
            <div className="mb-4 bg-white p-3 rounded-lg shadow-inner">
              <p className="text-sm text-gray-700 mb-2 text-center font-semibold">
                Adjust the sliders to create your own macro plan (total = 100%)
              </p>
              {["protein", "carbs", "fat"].map((key) => (
                <div key={key} className="mb-3">
                  <label className="capitalize font-semibold text-sm text-gray-700">
                    {key}: {customRatios[key]}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={customRatios[key]}
                    onChange={(e) => handleCustomRatioChange(key, e.target.value)}
                    className="w-full accent-blue-700"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Result Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-blue-200">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="p-2 text-left">Item</th>
                  <th className="p-2 text-left">Consumption</th>
                  <th className="p-2 text-left">Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Protein</td>
                  <td className="p-2 border">{results.protein} g</td>
                  <td className="p-2 border">
                    {results.proteinRange[0]}–{results.proteinRange[1]}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">Carbs (incl. sugar)</td>
                  <td className="p-2 border">{results.carbs} g</td>
                  <td className="p-2 border">
                    {results.carbRange[0]}–{results.carbRange[1]}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">Fat (incl. sat. fat)</td>
                  <td className="p-2 border">{results.fat} g</td>
                  <td className="p-2 border">
                    {results.fatRange[0]}–{results.fatRange[1]}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">Sugar</td>
                  <td className="p-2 border">&lt;{results.sugar} g</td>
                  <td className="p-2 border">N/A</td>
                </tr>
                <tr>
                  <td className="p-2 border">Saturated Fat</td>
                  <td className="p-2 border">&lt;{results.satFat} g</td>
                  <td className="p-2 border">N/A</td>
                </tr>
                <tr>
                  <td className="p-2 border">Food Energy</td>
                  <td className="p-2 border">{results.calories} kcal</td>
                  <td className="p-2 border">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Inputs */}
        <div>
          {/* ✅ Menu Button for Unit System */}
          <div className="flex gap-2 justify-start">
            <button
              onClick={() => setUnitSystem("metric")}
              className={`px-3 py-1 text-sm sm:text-base rounded ${
                unitSystem === "metric"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-400 text-gray-700"
              }`}
            >
              Metric Units
            </button>
            <button
              onClick={() => setUnitSystem("us")}
              className={`px-3 py-1 text-sm sm:text-base rounded ${
                unitSystem === "us"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-400 text-gray-100"
              }`}
            >
              US Units
            </button>
          </div>

          <div className="border-4 border-blue-100 p-4 space-y-3 shadow-md bg-gray-50 rounded-lg">
            {/* Age */}
            <div className="flex items-center justify-between mb-3">
              <label className="font-semibold w-1/2">Age:</label>
              <input
                type="number"
                className="border p-2 w-1/2 rounded"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            {/* Gender */}
            <div className="flex items-center justify-between mb-3">
              <label className="font-semibold w-1/2">Gender:</label>
              <div className="w-1/2 flex justify-end space-x-3">
                <label>
                  <input
                    type="radio"
                    
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            {/* Height */}
            {unitSystem === "metric" ? (
              <div className="flex items-center justify-between mb-3">
                <label className="font-semibold w-1/2">Height (cm):</label>
                <input
                  type="number"
                  className="border p-2 w-1/2 rounded"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                />
              </div>
            ) : (
              <div className="flex items-center justify-between mb-3">
                <label className="font-semibold w-1/2">Height:</label>
                <div className="w-1/2 flex gap-2">
                  <input
                    type="number"
                    placeholder="ft"
                    className="border p-2 w-1/2 rounded"
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="in"
                    className="border p-2 w-1/2 rounded"
                    value={heightInches}
                    onChange={(e) => setHeightInches(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Weight */}
            <div className="flex items-center justify-between mb-3">
              <label className="font-semibold w-1/2">
                Weight ({unitSystem === "metric" ? "kg" : "lbs"}):
              </label>
              <input
                type="number"
                className="border p-2 w-1/2 rounded"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            {/* Activity */}
            <div className="flex items-center justify-between mb-3">
              <label className="font-semibold w-1/2">Activity Level:</label>
              <select
                className="border p-2 w-1/2 rounded"
                value={activity}
                onChange={(e) => setActivity(parseFloat(e.target.value))}
              >
                <option value={1.2}>Sedentary</option>
                <option value={1.375}>Light (1–3 days/week)</option>
                <option value={1.55}>Moderate (4–5 days/week)</option>
                <option value={1.725}>Active (6–7 days/week)</option>
                <option value={1.9}>Very Active</option>
              </select>
            </div>

            {/* Formula */}
            <div className="flex items-center justify-between mb-3">
              <label className="font-semibold w-1/2">Formula:</label>
              <select
                className="border p-2 w-1/2 rounded"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
              >
                <option value="mifflin">Mifflin St Jeor</option>
                <option value="harris">Harris Benedict</option>
              </select>
            </div>

            {/* Goal */}
            <div className="flex items-center justify-between mb-3">
              <label className="font-semibold w-1/2">Your Goal:</label>
              <select
                className="border p-2 w-1/2 rounded"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              >
                <option value="maintain">Maintain Weight</option>
                <option value="loss025">Weight Loss of 0.25 kg/week</option>
                <option value="loss05">Weight Loss of 0.5 kg/week</option>
                <option value="loss1">Weight Loss of 1 kg/week</option>
                <option value="gain025">Weight Gain of 0.25 kg/week</option>
                <option value="gain05">Weight Gain of 0.5 kg/week</option>
                <option value="gain1">Weight Gain of 1 kg/week</option>
              </select>
            </div>

            <div className="flex justify-center gap-2 mt-2">
              <button
                onClick={handleCalculate}
                className="bg-blue-900 text-white px-3 py-1 rounded-lg text-sm sm:text-base"
              >
                Calculate
              </button>
              <button
                onClick={clearAll}
                className="bg-gray-400 text-white px-3 py-1 rounded-lg text-sm sm:text-base"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Instructions */}
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-4 leading-relaxed text-gray-700">
          <h3 className="text-xl font-bold bg-blue-900 text-white text-center py-2 mb-5">
            How to Use This Calculator
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Choose your <strong>unit system</strong> — Metric or US Units.</li>
            <li>Enter your <strong>age, gender, height</strong> and <strong>weight.</strong></li>
            <li>Select your <strong>activity level</strong> and <strong>formula.</strong></li>
            <li>Pick your <strong>goal</strong> (maintain, lose, or gain weight).</li>
            <li>Click <strong>“Calculate”</strong> to view your daily results.</li>
            <li>Try the <strong>macro plan tabs</strong> for instant recalculation.</li>
          </ol>
          <p className="mt-3 text-sm text-gray-600">
            💡 The calculator automatically scrolls to your results for easy viewing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MacroCalculator;
