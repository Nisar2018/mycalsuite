import React, { useState } from "react";

const IdealWeightCalculator = () => {
  const [unit, setUnit] = useState("us");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [results, setResults] = useState(null);

  const calculateIdealWeight = () => {
    let heightInCmValue = 0;

    // Convert height to cm
    if (unit === "us") {
      const totalInches =
        parseFloat(heightFeet || 0) * 12 + parseFloat(heightInches || 0);
      heightInCmValue = totalInches * 2.54;
    } else {
      heightInCmValue = parseFloat(heightCm || 0);
    }

    if (!heightInCmValue || !age || !gender) {
      alert("Please fill all required fields.");
      return;
    }

    const h = heightInCmValue;
    let robinson, miller, devine, hamwi;

    if (gender === "male") {
      robinson = 52 + 1.9 * ((h / 2.54 - 60) / 1);
      miller = 56.2 + 1.41 * ((h / 2.54 - 60) / 1);
      devine = 50 + 2.3 * ((h / 2.54 - 60) / 1);
      hamwi = 48 + 2.7 * ((h / 2.54 - 60) / 1);
    } else {
      robinson = 49 + 1.7 * ((h / 2.54 - 60) / 1);
      miller = 53.1 + 1.36 * ((h / 2.54 - 60) / 1);
      devine = 45.5 + 2.3 * ((h / 2.54 - 60) / 1);
      hamwi = 45.5 + 2.2 * ((h / 2.54 - 60) / 1);
    }

    const heightM = h / 100;
    const bmiMin = 18.5 * heightM * heightM;
    const bmiMax = 24.9 * heightM * heightM;

    // Convert to lbs if US units selected
    const convertWeight = (kg) => (unit === "us" ? kg * 2.20462 : kg);
    const suffix = unit === "us" ? "lbs" : "kg";

    setResults({
      robinson: `${convertWeight(robinson).toFixed(1)} ${suffix}`,
      miller: `${convertWeight(miller).toFixed(1)} ${suffix}`,
      devine: `${convertWeight(devine).toFixed(1)} ${suffix}`,
      hamwi: `${convertWeight(hamwi).toFixed(1)} ${suffix}`,
      bmiRange: `${convertWeight(bmiMin).toFixed(1)} ${suffix} - ${convertWeight(
        bmiMax
      ).toFixed(1)} ${suffix}`,
    });
  };

  const clearAll = () => {
    setAge("");
    setGender("");
    setHeightFeet("");
    setHeightInches("");
    setHeightCm("");
    setResults(null);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Heading */}
      
    {/* Dynamic Row Result Section */}
      {results && (
        <div className="border border-blue-100 shadow-md rounded-lg p-4 w-full max-w-5xl mt-6">
          <h2 className="bg-blue-900 text-white text-center font-bold py-2 rounded">
            Result
          </h2>

          {/* Results Table */}
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-blue-100">
                <tr>
                  <th className="text-blue-900 font-semibold p-1 text-left text-sm border-b border-gray-300">
                    Formula
                  </th>
                  <th className="text-blue-900 font-semibold p-1 text-left text-sm border-b border-gray-300">
                    Ideal Weight
                  </th>
                </tr>
              </thead>
              <tbody className="text-black">
                <tr>
                  <td className="text-blue-900 text-sm font-semibold p-2 border-b border-gray-200">
                    Robinson Formula
                  </td>
                  <td className="p-2 border-b border-gray-200">
                    {results.robinson}
                  </td>
                </tr>
                <tr>
                  <td className="text-blue-900 text-sm font-semibold p-2 border-b border-gray-200">
                    Miller Formula
                  </td>
                  <td className="p-2 border-b border-gray-200">
                    {results.miller}
                  </td>
                </tr>
                <tr>
                  <td className="text-blue-900 text-sm font-semibold p-2 border-b border-gray-200">
                    Devine Formula
                  </td>
                  <td className="p-2 border-b border-gray-200">
                    {results.devine}
                  </td>
                </tr>
                <tr>
                  <td className="text-blue-900 text-sm font-semibold p-2 border-b border-gray-200">
                    Hamwi Formula
                  </td>
                  <td className="p-2 border-b border-gray-200">
                    {results.hamwi}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* BMI Range */}
          <div className="mt-4 text-blue-900 font-semibold">
            Healthy BMI Range:{" "}
            <span className="text-black">{results.bmiRange}</span>
          </div>
        </div>
      )}
      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-4 w-full max-w-5xl">
        {/* Left Column */}
        <div className=" border border-blue-100 shadow-md rounded-lg p-4">
          {/* Menu */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setUnit("us")}
              className={`flex-1 py-2 text-white text-sm font-semibold rounded ${
                unit === "us" ? "bg-blue-900" : "bg-gray-400"
              }`}
            >
              US Units
            </button>
            <button
              onClick={() => setUnit("metric")}
              className={`flex-1 py-2 text-white text-sm font-semibold rounded ${
                unit === "metric" ? "bg-blue-900" : "bg-gray-400"
              }`}
            >
              Metric Units
            </button>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            {/* Age */}
            <div className="flex items-center justify-between">
              <label className="font-semibold text-blue-900">Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border-2 border-gray-300 shadow-md p-1 rounded w-32"
              />
            </div>

            {/* Gender */}
            <div className="flex items-center justify-between">
              <label className="font-semibold text-blue-900">Gender:</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                    className="accent-blue-900"
                  />{" "}
                  Male
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                   
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                    className="accent-blue-900"
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            {/* Height */}
            <div className="flex items-center justify-between">
              <label className="font-semibold text-blue-900 mr-2">Height:</label>
              {unit === "us" ? (
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Feet"
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(e.target.value)}
                    className="border-2 border-gray-300 shadow-md p-1 rounded w-20"
                  />
                  <input
                    type="number"
                    placeholder="Inches"
                    value={heightInches}
                    onChange={(e) => setHeightInches(e.target.value)}
                    className="border-2 border-gray-300 shadow-md p-1 rounded w-20"
                  />
                </div>
              ) : (
                <input
                  type="number"
                  placeholder="Centimeters"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="border-2 border-gray-300 shadow-md p-1 rounded w-32"
                />
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center mt-2">
              <button
                onClick={calculateIdealWeight}
                className="bg-blue-900 text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-700"
              >
                Calculate
              </button>
              <button
                onClick={clearAll}
                className="bg-gray-300 text-black font-semibold px-4 py-2 rounded shadow hover:bg-gray-400"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Empty) */}
        <div className=" border border-blue-100 shadow-md rounded-lg  flex justify-center items-center text-blue-900 font-semibold">
          {/* Intentionally left empty */}
          
          
          
        <div className="mt-5  bg-white">
 
        </div><div className="border border-blue-100 shadow p-4 rounded">
            <h1 className="text-lg text-white font-bold bg-blue-900 text-center mb-5">
              How to Use The Calculator
            </h1>
            <p className="text-sm px-2"><strong>1. Choose units:</strong> — Select either <strong>US Units</strong> (feet & inches, results in lbs) or <strong>Metric Units</strong> (centimeters, results in kg) using the unit buttons at the top. </p>
            <p className="text-sm px-2"><strong>2. Enter your age:</strong> — Type your age in years into the <strong>Age</strong> field. This helps contextualize the result. </p>
            <p className="text-sm px-2"><strong>3. Select Your Gender:</strong> Choose <strong>Male</strong> or <strong>Female</strong> radio button. The selected option will highlight immediately. </p>
            <p className="text-sm px-2"><strong>4. Enter your height:</strong></p>
            <p className="text-sm px-2">-if <strong>US Units</strong> are selected, enter <strong>height</strong> in <strong>feet</strong> and <strong>inches</strong>. </p>
            <p className="text-sm px-2">-if <strong>Metric Unit</strong> are selected, enter <strong>height</strong> in <strong>centimeters</strong> . </p>
            <p className="text-sm px-2"><strong>5. Click “Calculate”:</strong> button to compute ideal weight using four formulas. Results will appear in a results box. </p>
            

        </div>

        
        
        
        
        </div>
      </div>

      

    </div>
  );
};

export default IdealWeightCalculator;
