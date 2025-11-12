import React, { useState } from "react";
import GaugeComponent from "react-gauge-component";

export default function BodyFatCalculator() {
  const [unit, setUnit] = useState("us");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [neckFt, setNeckFt] = useState("");
  const [neckIn, setNeckIn] = useState("");
  const [neckCm, setNeckCm] = useState("");
  const [waistFt, setWaistFt] = useState("");
  const [waistIn, setWaistIn] = useState("");
  const [waistCm, setWaistCm] = useState("");
  const [hipFt, setHipFt] = useState("");
  const [hipIn, setHipIn] = useState("");
  const [hipCm, setHipCm] = useState("");
  const [results, setResults] = useState(null);

  // --- Helper functions ---
  const toCm = (ft, inch) => {
    const f = parseFloat(ft) || 0;
    const i = parseFloat(inch) || 0;
    return f * 30.48 + i * 2.54;
  };

  const toKg = (w, isMetric) =>
    isMetric ? parseFloat(w) || 0 : (parseFloat(w) || 0) * 0.453592;

  const getCategory = (bodyFat, gender) => {
    if (gender === "male") {
      if (bodyFat <= 5) return "Essential Fat";
      if (bodyFat <= 13) return "Athlete";
      if (bodyFat <= 17) return "Fitness";
      if (bodyFat <= 24) return "Average";
      return "Obese";
    } else {
      if (bodyFat <= 13) return "Essential Fat";
      if (bodyFat <= 20) return "Athlete";
      if (bodyFat <= 24) return "Fitness";
      if (bodyFat <= 31) return "Average";
      return "Obese";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Essential Fat":
        return "text-blue-600 font-bold";
      case "Athlete":
      case "Fitness":
        return "text-green-600 font-bold";
      case "Average":
        return "text-orange-500 font-bold";
      case "Obese":
        return "text-red-600 font-bold";
      default:
        return "text-gray-700";
    }
  };

  // --- Calculation logic ---
  const calculate = () => {
    let h, n, w, hp, wtKg;

    if (unit === "us") {
      h = toCm(heightFt, heightIn);
      n = toCm(neckFt, neckIn);
      w = toCm(waistFt, waistIn);
      hp = toCm(hipFt, hipIn);
      wtKg = toKg(weight, false);
    } else {
      h = parseFloat(heightCm) || 0;
      n = parseFloat(neckCm) || 0;
      w = parseFloat(waistCm) || 0;
      hp = parseFloat(hipCm) || 0;
      wtKg = toKg(weight, true);
    }

    // --- US Navy Method ---
    let bodyFat = 0;
    if (gender === "male") {
      bodyFat =
        495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) -
        450;
    } else {
      bodyFat =
        495 /
          (1.29579 -
            0.35004 * Math.log10(w + hp - n) +
            0.221 * Math.log10(h)) -
        450;
    }

    if (bodyFat < 0) bodyFat = 0;

    // --- BMI Method ---
    const heightM = h / 100;
    const bmi = wtKg / (heightM * heightM);
    const bodyFatBmi =
      gender === "male"
        ? 1.2 * bmi + 0.23 * parseFloat(age) - 16.2
        : 1.2 * bmi + 0.23 * parseFloat(age) - 5.4;

    // --- Derived values ---
    const fatMassKg = (bodyFat / 100) * wtKg;
    const leanMassKg = wtKg - fatMassKg;
    const category = getCategory(bodyFat, gender);

    setResults({
      bodyFat: bodyFat.toFixed(1),
      fatMassKg: fatMassKg.toFixed(1),
      leanMassKg: leanMassKg.toFixed(1),
      bodyFatBmi: bodyFatBmi.toFixed(1),
      category,
    });
  };

  const clearForm = () => {
    setAge("");
    setWeight("");
    setHeightFt("");
    setHeightIn("");
    setHeightCm("");
    setNeckFt("");
    setNeckIn("");
    setNeckCm("");
    setWaistFt("");
    setWaistIn("");
    setWaistCm("");
    setHipFt("");
    setHipIn("");
    setHipCm("");
    setResults(null);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      
     {/* Dynamic Row Result Section*/}
     {results && (
  <div className="border border-blue-300 rounded shadow mt-6 p-4 bg-gray-50">
    <h2 className="bg-blue-900 text-white text-2xl text-center py-2 font-bold">
      Results
    </h2>

    {/* Centered Gauge Display */}
    <div className="flex justify-center items-center my-6">
      <div className="w-[250px] h-[150px]">
        <GaugeComponent
          value={parseFloat(results.bodyFat)}
          minValue={0}
          maxValue={50}
          type="radial"
          arc={{
            colorArray: ["#5BE12C", "#F5CD19", "#EA4228"],
            subArcs:
              results.gender === "male"
                ? [
                    { limit: 18, color: "#5BE12C" }, // Healthy (Male)
                    { limit: 25, color: "#F5CD19" }, // Overweight
                    { limit: 50, color: "#EA4228" }, // Obese
                  ]
                : [
                    { limit: 25, color: "#5BE12C" }, // Healthy (Female)
                    { limit: 32, color: "#F5CD19" }, // Overweight
                    { limit: 50, color: "#EA4228" }, // Obese
                  ],
          }}
          labels={{
            valueLabel: {
              formatTextValue: (val) => `${val.toFixed(1)}%`,
              style: { fill: "#1e3a8a", fontWeight: "bold" }, // Tailwind "blue-900"
            },
          }}
        />
      </div>
    </div>

    {/* Result Details */}
    <div className="mt-4 space-y-3 text-blue-900">
      <div className="flex justify-between font-semibold">
        <span>Body Fat (US Navy Method):</span>
        <span>{results.bodyFat}%</span>
      </div>

      <div className="flex justify-between">
        <span className="font-semibold">Body Fat Category:</span>
        <span className={getCategoryColor(results.category)}>
          {results.category}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="font-semibold">Fat Mass:</span>
        <span>
          {results.fatMassKg} kg / {(results.fatMassKg * 2.20462).toFixed(1)} lb
        </span>
      </div>

      <div className="flex justify-between">
        <span className="font-semibold">Lean Mass:</span>
        <span>
          {results.leanMassKg} kg / {(results.leanMassKg * 2.20462).toFixed(1)} lb
        </span>
      </div>

      <div className="flex justify-between">
        <span className="font-semibold">Body Fat (BMI Method):</span>
        <span>{results.bodyFatBmi}%</span>
      </div>
    </div>
  </div>
)}

    
      {/* Main Two Columns */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column - Input Form */}
        <div className="border border-blue-100 shadow p-4 rounded">
          {/* Unit Switch */}
          <div className="flex gap-2">
              <button
                onClick={() => setUnit("us")}
                className={`px-3 py-1 rounded text-white ${unit === "us" ? "bg-blue-900" : "bg-gray-400"}`}
              >
                US Units
              </button>
              <button
                onClick={() => setUnit("metric")}
                className={`px-3 py-1 rounded text-white ${unit === "metric" ? "bg-blue-900" : "bg-gray-400"}`}
              >
                Metric Units
              </button>
            </div>

          {/* Inputs */}
          <div className="space-y-3 bg-gray-100 p-3 rounded">
            {/* Gender */}
            <div>
              <label className="font-medium">Gender:</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            {/* Age */}
            <div className="flex justify-between">
              <label className="font-medium">Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Years"
                className="border p-1 rounded w-32"
              />
            </div>

            {/* Weight */}
            <div className="flex justify-between">
              <label className="font-medium">Weight:</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Kg/Lbs"
                className="border p-1 rounded w-32"
              />
            </div>

            {/* Height */}
            {unit === "us" ? (
              <div className="flex justify-between">
                <label className="font-medium">Height:</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="ft"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    className="border p-1 rounded w-16"
                  />
                  <input
                    type="number"
                    placeholder="in"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    className="border p-1 rounded w-16"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-between">
                <label className="font-medium">Height:</label>
                <input
                  type="number"
                  placeholder="cm"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="border p-1 rounded w-32"
                />
              </div>
            )}

            {/* Neck, Waist, Hip */}
            {[
              { label: "Neck", ft: neckFt, setFt: setNeckFt, inch: neckIn, setIn: setNeckIn, cm: neckCm, setCm: setNeckCm },
              { label: "Waist", ft: waistFt, setFt: setWaistFt, inch: waistIn, setIn: setWaistIn, cm: waistCm, setCm: setWaistCm },
              { label: "Hip", ft: hipFt, setFt: setHipFt, inch: hipIn, setIn: setHipIn, cm: hipCm, setCm: setHipCm },
            ].map(({ label, ft, setFt, inch, setIn, cm, setCm }) => (
              <div key={label} className="flex justify-between">
                <label className="font-medium">{label}:</label>
                {unit === "us" ? (
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="ft"
                      value={ft}
                      onChange={(e) => setFt(e.target.value)}
                      className="border p-1 rounded w-16"
                    />
                    <input
                      type="number"
                      placeholder="in"
                      value={inch}
                      onChange={(e) => setIn(e.target.value)}
                      className="border p-1 rounded w-16"
                    />
                  </div>
                ) : (
                  <input
                    type="number"
                    placeholder="cm"
                    value={cm}
                    onChange={(e) => setCm(e.target.value)}
                    className="border p-1 rounded w-32"
                  />
                )}
              </div>
            ))}

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={calculate}
                className="bg-blue-900 text-white px-3 py-1 rounded"
              >
                Calculate
              </button>
              <button
                onClick={clearForm}
                className="bg-gray-500 text-white px-3 py-1 rounded"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Empty */}
          <div className="border border-blue-100 shadow p-4 rounded">
            <h1 className="text-lg text-white font-bold bg-blue-900 text-center mb-5">
              How to Use The Calculator
            </h1>
            <p className="text-sm px-2"><strong>1. Select Your Gender:</strong> Choose <strong>Male</strong> or <strong>Female</strong> to apply the correct calculation method. </p>
            <p className="text-sm px-2"><strong>2. Enter Your Measurements:</strong></p>
            <p className="text-sm px-2">-Input your <strong>Height, Neck, Waist</strong>, and <strong>Hip</strong>  (for females) values in your preferred units. </p>
            <p className="text-sm px-2"><strong>3. Click “Calculate”:</strong> The calculator will instantly estimate your <strong>Body Fat Percentage</strong> using the <strong>U.S. Navy Method</strong> and <strong>BMI Method</strong>. </p>
            <p className="text-sm px-2"><strong>4. View Results:</strong> See your <strong>Body Fat %, Body Fat Mass, Lean Body Mass</strong>, and <strong>Body Fat to Lose to Reach Ideal values</strong> in the results section. </p>
            <p className="text-sm px-2"><strong>5. Analyze with the Gauge Chart:</strong> The colored gauge helps you understand whether your body fat falls in the <strong>Underfat, Healthy, Overfat,</strong> or <strong>Obese</strong> range based on your gender. </p> 
            <p className="text-md px-2"><strong>6. The Result will display on befor this row after clicking the calculate Button</strong> </p>

        </div>
      </div> 

      {/* Third Row - Results */}
     


    </div>
  );
}
