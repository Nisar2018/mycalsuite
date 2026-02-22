import React, { useState } from "react";

export default function Ti84GwaCalculator() {
  const [subjects, setSubjects] = useState([{ grade: "", units: "" }]);
  const [currentField, setCurrentField] = useState("grade"); // grade or units
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenValue, setScreenValue] = useState("");
  const [gwa, setGwa] = useState(null);

  // Add new subject
  const addSubject = () => {
    setSubjects([...subjects, { grade: "", units: "" }]);
    setCurrentIndex(subjects.length);
    setCurrentField("grade");
    setScreenValue("");
  };

  // Remove subject
  const removeSubject = (index) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
    setCurrentIndex(0);
    setCurrentField("grade");
    setScreenValue(updated[0]?.grade || "");
    setGwa(null);
  };

  // Handle numeric keypad
  const handleKeypad = (value) => {
    const updated = [...subjects];
    let current = updated[currentIndex][currentField];

    if (value === "." && current.includes(".")) return;

    updated[currentIndex][currentField] = current + value;
    setSubjects(updated);
    setScreenValue(updated[currentIndex][currentField]);
    setGwa(null); // clear GWA while typing
  };

  // Clear current field
  const clearScreen = () => {
    const updated = [...subjects];
    updated[currentIndex][currentField] = "";
    setSubjects(updated);
    setScreenValue("");
    setGwa(null);
  };

  // Toggle field
  const toggleField = (field, index) => {
    setCurrentField(field);
    setCurrentIndex(index);
    setScreenValue(subjects[index][field]);
    setGwa(null);
  };

  // Calculate GWA
  const calculateGWA = () => {
    let totalWeighted = 0;
    let totalUnits = 0;

    subjects.forEach((subj) => {
      const grade = parseFloat(subj.grade);
      const units = parseFloat(subj.units);
      if (!isNaN(grade) && !isNaN(units)) {
        totalWeighted += grade * units;
        totalUnits += units;
      }
    });

    if (totalUnits === 0) {
      setGwa(null);
      setScreenValue("0");
      return;
    }

    const result = (totalWeighted / totalUnits).toFixed(3);
    setGwa(result);
    setScreenValue(result); // display on upper screen
  };

  return (
    <div className="max-w-sm mx-auto mt-6 bg-blue-950  rounded-xl shadow-xl p-4">
      {/* Calculator Screen */}
      <div className="bg-black text-green-400 font-mono text-right text-2xl p-3 rounded mb-4 h-20 flex flex-col justify-center">
        <span className="text-sm text-gray-400">
          {gwa ? "GWA Result" : `Subject ${currentIndex + 1} - ${currentField.toUpperCase()}`}
        </span>
        <span>{screenValue || "0"}</span>
      </div>

      {/* Subject Buttons */}
      <div className="flex flex-col gap-2 mb-4">
        {subjects.map((subj, idx) => (
          <div key={idx} className="flex gap-2">
            <button
              onClick={() => toggleField("grade", idx)}
              className={`flex-1 py-2 rounded ${
                currentField === "grade" && currentIndex === idx
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              G: {subj.grade || "-"}
            </button>
            <button
              onClick={() => toggleField("units", idx)}
              className={`flex-1 py-2 rounded ${
                currentField === "units" && currentIndex === idx
                  ? "bg-green-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              U: {subj.units || "-"}
            </button>
            <button
              onClick={() => removeSubject(idx)}
              className="bg-red-500 text-white px-3 rounded hover:bg-red-600"
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Keypad Grid */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((num) => (
          <button
            key={num}
            onClick={() => handleKeypad(num.toString())}
            className="bg-gray-400 py-4 rounded text-xl font-bold hover:bg-gray-500"
          >
            {num}
          </button>
        ))}
        <button
          onClick={clearScreen}
          className="bg-red-600 text-white py-4 rounded col-span-1 hover:bg-red-700"
        >
          C
        </button>
        <button
          onClick={addSubject}
          className="bg-blue-600 text-white py-4 rounded col-span-1 hover:bg-blue-700"
        >
          +S
        </button>
        <button
          onClick={calculateGWA}
          className="bg-yellow-500 text-black py-4 rounded col-span-1 hover:bg-yellow-600"
        >
          =
        </button>
      </div>
    </div>
  );
}