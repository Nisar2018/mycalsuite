import React, { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0);
  const [justCalculated, setJustCalculated] = useState(false);

  // Safe evaluate
  const safeEval = (expr) => {
    try {
      return Function(`"use strict"; return (${expr})`)();
    } catch {
      return "Error";
    }
  };

  // Input handling
  const handleInput = (val) => {
    if (justCalculated && !["+", "-", "×", "÷"].includes(val)) {
      setDisplay(val);
      setJustCalculated(false);
      return;
    }

    if (display === "0" && !["+", "-", "×", "÷"].includes(val)) {
      setDisplay(val);
    } else {
      setDisplay(display + val);
    }
    setJustCalculated(false);
  };

  const handleClearEntry = () => setDisplay("0");

  const handleAllClear = () => {
    setDisplay("0");
    setMemory(0);
  };

  const handlePlusMinus = () => {
    setDisplay((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
  };

  const handleEqual = () => {
    let expr = display.replace(/×/g, "*").replace(/÷/g, "/");
    let result = safeEval(expr);
    setDisplay(String(result));
    setJustCalculated(true);
  };

  const handleMemory = (type) => {
    let current = parseFloat(display);
    if (isNaN(current)) return;

    switch (type) {
      case "MC":
        setMemory(0);
        break;
      case "MR":
        setDisplay(String(memory));
        break;
      case "M+":
        setMemory(memory + current);
        break;
      case "M-":
        setMemory(memory - current);
        break;
      default:
        break;
    }
  };

  const handleSpecial = (type) => {
    let current = parseFloat(display);
    if (isNaN(current)) return;

    switch (type) {
      case "√":
        setDisplay(String(Math.sqrt(current)));
        break;
      case "%":
        setDisplay(String(current / 100));
        break;
      case "π":
        setDisplay("3.1415926536");
        break;
      case "R2":
        setDisplay(String(Math.round(current * 100) / 100));
        break;
      case "R0":
        setDisplay(String(Math.round(current)));
        break;
      default:
        break;
    }
  };

  const handleExponent = () => {
    setDisplay(display + "**");
  };

  const buttons = [
    ["MC", "MR", "M+", "M-"],
    ["CE", "AC", "±", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "=", "^"],
    ["√", "%", "π", "R2", "R0"],
  ];

return (
  <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[70vh] w-full ">
    {/* Inner box */}
    <div className="bg-white rounded-2xl p-4 flex flex-col h-full">
      
      {/* Display */}
      <div className="bg-gray-100 text-right text-2xl p-3 rounded mb-4 border border-gray-300 min-h-[60px]">
        {display}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 grid-rows-[repeat(7,1fr)] gap-2 flex-1 w-full">
        {buttons.flat().map((btn, i) => (
          <button
            key={i}
            className="bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold border border-gray-300 
                       shadow-sm hover:shadow-md transition-all flex items-center justify-center 
                       text-sm sm:text-base md:text-lg w-full h-full"
            onClick={() => {
              if (!isNaN(btn) || btn === "." || ["+", "-", "×", "÷"].includes(btn)) {
                handleInput(btn);
              } else if (btn === "=") handleEqual();
              else if (btn === "CE") handleClearEntry();
              else if (btn === "AC") handleAllClear();
              else if (btn === "±") handlePlusMinus();
              else if (["MC", "MR", "M+", "M-"].includes(btn)) handleMemory(btn);
              else if (["√", "%", "π", "R2", "R0"].includes(btn)) handleSpecial(btn);
              else if (btn === "^") handleExponent();
            }}
          >
            {btn}
          </button>
        ))}
      </div>

    </div>
  </div>
);


}
