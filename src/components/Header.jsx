// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; 
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (item) =>
    setOpenDropdown(openDropdown === item ? null : item);

  return (
    <header className="w-full bg-blue-900 p-2 flex items-center justify-between relative">
      {/* Left: Hamburger Menu (always visible) */}
      <button
        onClick={toggleMenu}
        className="text-white p-2"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Center: Logo */}
      <Link to="/" className="mx-auto">
        <img
          src={logo}
          alt="MyCalSuite Logo"
          className="h-6 w-auto md:h-8 md:w-auto"
        />
      </Link>

      {/* Right spacer to keep logo centered */}
      <div className="w-8" />

      {/* Dropdown Menu (works for desktop & mobile) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-64 bg-white text-black shadow-lg z-50">
          {/* Math */}
          <div className="border-b">
            <button
              onClick={() => toggleDropdown("math")}
              className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50"
            >
              <span>Math</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openDropdown === "math" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "math" && (
              <div>
                <Link
                  to="/calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  Basic Calculator
                </Link>
                <Link
                  to="/percentage-calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  Percentage Calculator
                </Link>
              </div>
            )}
          </div>

          {/* Health */}
          <div className="border-b">
            <button
              onClick={() => toggleDropdown("health")}
              className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50"
            >
              <span>Health & Fitness</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openDropdown === "health" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "health" && (
              <div>
                <Link
                  to="/bmi-calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  BMI Calculator
                </Link>
                <Link
                  to="/calorie-calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  Calorie Calculator
                </Link>
                <Link
                  to="/body-fat-calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  Body Fat Calculator
                </Link>
                <Link
                  to="/ideal-weight-calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  Ideal Weight Calculator
                </Link>
                <Link
                  to="/bmr-calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  BMR Calculator
                </Link>
              </div>
            )}
          </div>

          {/* Financial */}
          <div>
            <button
              onClick={() => toggleDropdown("financial")}
              className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50"
            >
              <span>Financial</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openDropdown === "financial" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "financial" && (
              <div>
                <Link
                  to="/finance-calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  Finance Calculator
                </Link>
                <Link
                  to="/mortgage-calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  Mortgage Calculator
                </Link>
                <Link
                  to="/loan-calculator"
                  onClick={toggleMenu}
                  className="block pl-8 pr-4 py-2 hover:bg-gray-50"
                >
                  Loan Calculator
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
