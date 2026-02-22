import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  // State for toggles
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-4">
      {/* Heading */}
      <h2 className="text-lg md:text-lg md:text-center font-semibold text-white bg-blue-900 mb-5 mr-30 p-2 ">
  Others Calculators
</h2>


      {/* Category: Math */}
      <div className="mb-1">
        <button
          onClick={() => toggleCategory("math")}
          className="w-full text-left font-bold text-gray-600  px-2 rounded hover:bg-blue-50"
        >
          Math Calculators
        </button>
        {openCategory === "math" && (
          <div className="pl-4 mt-1 space-y-1">
            <Link
              to="/calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              Basic Calculator
            </Link>
            <Link
              to="/percentage-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              Percentage Calculator
            </Link>
            <Link
              to="/gwa-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              GWA Calculator
            </Link>
          </div>
        )}
      </div>

      {/* Category: Health and Fitness */}
      <div className="mb-1">
        <button
          onClick={() => toggleCategory("health")}
          className="w-full text-left font-bold text-gray-600 px-2 rounded hover:bg-blue-50"
        >
          Health and Fitness Calculators
        </button>
        {openCategory === "health" && (
          <div className="pl-4 mt-1 space-y-1">
            <Link
              to="/bmi-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              BMI Calculator
            </Link>
            <Link
              to="/calorie-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              Calorie Calculator
            </Link>
            <Link
              to="/body-fat-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              Body Fat Calculator
            </Link>
            <Link
              to="/ideal-weight-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              Ideal Weight Calculator
            </Link>
            <Link
              to="/bmr-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              BMR Calculator
            </Link>
            <Link
              to="/macro-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              Macro Calculator
            </Link>
          </div>
        )}
      </div>
      {/* Category: Finance */}
      <div className="mb-3">
        <button
          onClick={() => toggleCategory("finance")}
          className="w-full text-left font-bold text-gray-600  px-2 rounded hover:bg-blue-50"
        >
          Financial Calculators
        </button>
        {openCategory === "finance" && (
          <div className="pl-4 mt-1 space-y-1">
            <Link
              to="/finance-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              Finance Calculator
            </Link>
            <Link
              to="/mortgage-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              Mortgage Calculator
            </Link>
            <Link
              to="/loan-calculator"
              className="block text-sm text-gray-700 hover:text-blue-700"
            >
              Loan Calculator
            </Link>
          </div>
          
        )}
      </div>
    </div>
  );
}
