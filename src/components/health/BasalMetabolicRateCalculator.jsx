import React, { useState } from "react";

const BMR = () => {
  const [unit, setUnit] = useState("us");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weight, setWeight] = useState("");
  const [formula, setFormula] = useState("mifflin");
  const [resultType, setResultType] = useState("calories");
  const [bmr, setBmr] = useState(null);
  const [activityResults, setActivityResults] = useState([]);

  // Conversion helpers
  const toCm = () => {
    if (unit === "us") {
      const totalInches = Number(heightFeet) * 12 + Number(heightInches);
      return totalInches * 2.54;
    }
    return Number(heightCm);
  };

  const toKg = () => {
    if (unit === "us") {
      return Number(weight) * 0.453592;
    }
    return Number(weight);
  };

  // BMR Calculation Logic
  const calculateBMR = () => {
    if (!age || !weight || (!heightCm && !heightFeet)) return;

    const w = toKg();
    const h = toCm();
    const a = Number(age);
    let calculatedBMR = 0;

    if (formula === "mifflin") {
      calculatedBMR =
        gender === "male"
          ? 10 * w + 6.25 * h - 5 * a + 5
          : 10 * w + 6.25 * h - 5 * a - 161;
    } else if (formula === "revised") {
      calculatedBMR =
        gender === "male"
          ? 13.397 * w + 4.799 * h - 5.677 * a + 88.362
          : 9.247 * w + 3.098 * h - 4.330 * a + 447.593;
    } else if (formula === "katch") {
      const bodyFat = 0.2;
      const LBM = w * (1 - bodyFat);
      calculatedBMR = 370 + 21.6 * LBM;
    }

    const finalBMR =
      resultType === "kilojoules" ? calculatedBMR * 4.184 : calculatedBMR;

    const activities = [
      { level: "Sedentary: little or no exercise", multiplier: 1.2 },
      { level: "Light: exercise 1–3 times/week", multiplier: 1.375 },
      { level: "Moderate: exercise 4–5 times/week", multiplier: 1.55 },
      { level: "Active: daily or intense 3–4x/week", multiplier: 1.725 },
      { level: "Very Active: intense 6–7x/week", multiplier: 1.9 },
      { level: "Extra Active: very intense or physical job", multiplier: 2.0 },
    ];

    const results = activities.map((a) => ({
      level: a.level,
      value:
        resultType === "kilojoules"
          ? (finalBMR * a.multiplier).toFixed(2)
          : Math.round(finalBMR * a.multiplier),
    }));

    setBmr(finalBMR.toFixed(2));
    setActivityResults(results);
  };

  const clearAll = () => {
    setAge("");
    setGender("male");
    setHeightFeet("");
    setHeightInches("");
    setHeightCm("");
    setWeight("");
    setFormula("mifflin");
    setResultType("calories");
    setBmr(null);
    setActivityResults([]);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* ===== Result Row (Dynamic, Above First Row) ===== */}
      {bmr && (
        <div className="mb-6 border border-blue-100 shadow-lg p-4 rounded-lg animate-fadeIn">
          <h2 className="bg-blue-900 text-white text-center py-2 rounded">
            Your BMR Result
          </h2>

          <p className="mt-4 font-semibold text-blue-900 text-center">
            BMR = {bmr}{" "}
            {resultType === "calories" ? "Calories/day" : "Kilojoules/day"}
          </p>

          <p className="mt-4 font-semibold text-blue-900 text-center">
            Estimated Energy Requirement (EER) by Activity Level:
          </p>

          <div className="overflow-x-auto mt-3">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border border-gray-300 px-2 py-1 text-left">
                    Activity Level
                  </th>
                  <th className="border border-gray-300 px-2 py-1 text-right">
                    {resultType === "calories" ? "Calories" : "Kilojoules"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {activityResults.map((row, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-2 py-1">
                      {row.level}
                    </td>
                    <td className="border border-gray-300 px-2 py-1 text-right">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ===== First Row (Input Section) ===== */}
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4">
        {/* Left Column (with left margin) */}
        <div className="border border-blue-100 shadow-lg p-4 rounded-lg ml-[5px]">
          {/* Unit Selection */}
          <div className="flex mb-3 space-x-2">
            <button
              onClick={() => setUnit("us")}
              className={`px-3 py-1 rounded ${
                unit === "us"
                  ? "bg-blue-900 text-white font-semibold text-sm"
                  : "bg-blue-100 text-blue-900 font-semibold text-sm"
              }`}
            >
              US Units
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`px-3 py-1 rounded ${
                unit === "metric"
                  ? "bg-blue-900 text-white font-semibold text-sm"
                  : "bg-blue-100 text-blue-900 font-semibold text-sm"
              }`}
            >
              Metric Units
            </button>
          </div>

          {/* Input Fields */}
          <div className="space-y-3">
            {/* Age */}
            <div className="flex justify-between items-center">
              <label className="font-medium">Age</label>
              <input
                type="number"
                className="border-2 border-gray-300 shadow-md p-1 rounded w-32"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="font-medium mr-2">Gender:</label>
              <label className="mr-3">
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Female
              </label>
            </div>

            {/* Height */}
            <div>
              <label className="font-medium mr-2">Height:</label>
              {unit === "us" ? (
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="ft"
                    className="border-2 border-gray-300 shadow-md p-1 rounded w-20"
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="in"
                    className="border-2 border-gray-300 shadow-md p-1 rounded w-20"
                    value={heightInches}
                    onChange={(e) => setHeightInches(e.target.value)}
                  />
                </div>
              ) : (
                <input
                  type="number"
                  placeholder="cm"
                  className="border-2 border-gray-300 shadow-md p-1 rounded w-32"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                />
              )}
            </div>

            {/* Weight */}
            <div className="flex justify-between items-center">
              <label className="font-medium">Weight</label>
              <input
                type="number"
                className="border-2 border-gray-300 shadow-md p-1 rounded w-32"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            {/* Formula */}
            <div className="flex justify-between items-center ">
              <label className="font-medium">Formula</label>
              <select
                className="border-2 border-gray-300 shadow-md p-1 rounded w-38"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
              >
                <option value="mifflin">Mifflin St Jeor</option>
                <option value="revised">Revised Harris-Benedict</option>
                <option value="katch">Katch McArdle</option>
              </select>
            </div>

            {/* Result Type */}
            <div className="flex justify-between items-center">
              <label className="font-medium">Result</label>
              <select
                className="border-2 border-gray-300 shadow-md p-1 rounded w-48"
                value={resultType}
                onChange={(e) => setResultType(e.target.value)}
              >
                <option value="calories">Calories</option>
                <option value="kilojoules">Kilojoules</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 pt-3">
              <button
                onClick={calculateBMR}
                className="bg-blue-900 text-white px-4 py-1 rounded shadow-md hover:bg-blue-800"
              >
                Calculate
              </button>
              <button
                onClick={clearAll}
                className="bg-gray-400 text-white px-4 py-1 rounded shadow-md hover:bg-gray-500"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Empty) */}
        <div className="border border-blue-100 shadow p-4 rounded">
            <h1 className="text-lg text-white font-bold bg-blue-900 text-center mb-5">
              How to Use The Calculator
            </h1>
            <p className="text-sm px-2"><strong>1. Select Units</strong>  — Click <strong>US Units</strong> (feet/inches, pounds) or <strong>Metric Units</strong> (cm, kg) to choose <strong>how</strong> you’ll enter height and weight. </p>
            <p className="text-sm px-2"><strong>2. Enter Age:</strong>— Type your age in years in the<strong>Age</strong>field. Use whole numbers (e.g., 30). </p>
            <p className="text-sm px-2"><strong>3. Choose Gender:</strong> Select <strong>Male</strong> or <strong>Female</strong> with the radio buttons; this changes the formula constants. </p>
            <p className="text-sm px-2"><strong>4. Enter Height</strong> — </p>
            <p className="text-sm px-2">if<strong>US Units:</strong> enter <strong>feet</strong> in the first box and <strong>inches</strong> in the second (e.g., 5 ft and 9 in). </p> 
            <p className="text-sm px-2">if<strong>Metric Units:</strong> enter <strong>height</strong> in <strong>centimeters</strong> (e.g., 175). </p> 
            <p className="text-sm px-2"><strong>5. Enter Weight:</strong> — Type your <strong>weight</strong> in the selected unit: <strong>pounds for US, kilograms for Metric</strong> (e.g., 150 lb or 68 kg). </p>
            <p className="text-sm px-2"><strong>6. Pick a Formula:</strong> — Choose one formula from <strong>Mifflin St Jeor, Revised Harris-Benedict,</strong> or <strong>Katch McArdle.</strong> (Katch-McArdle uses lean mass — best when you know body fat.) </p>
            <p className="text-sm px-2"><strong>7. Choose Result Unit:</strong> — Select <strong>Calories</strong> or <strong>Kilojoules</strong> to control how the BMR and activity results are displayed. </p>
            <p className="text-sm px-2"><strong>8. Calculate:</strong> — Click the <strong>Calculate</strong> button. The calculator validates inputs, converts units if needed, computes your BMR using the selected formula, and shows results. </p>
            

        </div>
      </div>
    </div> 
  );
};

export default BMR;
