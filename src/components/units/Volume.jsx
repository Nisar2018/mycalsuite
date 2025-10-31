import React, { useMemo, useState } from "react";
import { Title, Meta } from "react-head";

const Volume = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Liter");
  const [toUnit, setToUnit] = useState("Milliliter");

  const units = {
    Liter: 1,
    Milliliter: 0.001,
    CubicMeter: 1000,
    CubicCentimeter: 0.001,
    Gallon: 3.78541,
    Quart: 0.946353,
    Pint: 0.473176,
    Cup: 0.24,
    FluidOunce: 0.0295735,
  };

  const unitNames = Object.keys(units);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const toBase = (num, unit) => num * units[unit]; // → liter
  const fromBase = (liter, unit) => liter / units[unit];

  const fmt = (n) =>
    n === "" || n == null || !Number.isFinite(n)
      ? ""
      : n.toLocaleString(undefined, { maximumFractionDigits: 8 });

  const toOptions = useMemo(() => {
    const num = Number(value);
    if (!value || Number.isNaN(num))
      return unitNames.map((name) => ({ name, val: "" }));
    const base = toBase(num, fromUnit);
    return unitNames.map((name) => ({ name, val: fromBase(base, name) }));
  }, [value, fromUnit]);

  const result = useMemo(() => {
    const num = Number(value);
    if (!value || Number.isNaN(num)) return "";
    const base = toBase(num, fromUnit);
    return fmt(fromBase(base, toUnit));
  }, [value, fromUnit, toUnit]);

  return (
    <div className="p-4">
      <Title>Volume Converter | MyCalSuite</Title>
      <Meta
        name="description"
        content="Free online volume converter. Easily convert liters, milliliters, gallons, cups, cubic meters, and more. Perfect for cooking, education, and scientific calculations."
      />

      {/* Calculator Box */}
      <div className="p-4 border rounded-lg shadow bg-gray-100">
        <div className="grid grid-cols-2 gap-4 ">
          <label className="font-medium">From</label>
          <label className="font-medium">To</label>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input
            type="number"
            className="border p-2 rounded w-full bg-white"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
          />
          <input
            type="text"
            className="border p-2 rounded w-full bg-gray-100"
            readOnly
            value={result}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <select
            className="border p-2 rounded w-full md:h-60 bg-white"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            size={isDesktop ? unitNames.length : 1}
          >
            {unitNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <select
            className="border p-2 rounded w-full md:h-60 bg-white"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            size={isDesktop ? unitNames.length : 1}
          >
            {toOptions.map(({ name, val }) => (
              <option key={name} value={name}>
                {name}
                {value ? ` (${fmt(val)})` : ""}
              </option>
            ))}
          </select>
        </div>
        <p className="text-sm text-gray-600">
          {value && fromUnit && toUnit
            ? `Result: ${value} ${fromUnit} = ${result} ${toUnit}`
            : "Converted automatically"}
        </p>
      </div>

      {/* SEO Block */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">What is a Volume Converter?</h2>
        <p className="mb-4">
          A volume converter is a tool that helps you convert one unit of
          volume into another. It is commonly used in cooking, education,
          scientific research, and daily measurement tasks. For example, you
          can easily convert liters to milliliters, gallons to cups, or cubic
          meters to cubic centimeters.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">
          Why Use Our Volume Converter?
        </h3>
        <p className="mb-4">
          Our free online volume converter provides instant and accurate
          results. Whether you are a student, a scientist, or someone cooking
          in the kitchen, this tool ensures you always have the correct
          conversion at your fingertips.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">FAQs</h3>
        <div className="mb-2">
          <p className="font-medium">Q1: How do I convert liters to gallons?</p>
          <p>
            1 liter equals approximately 0.264 gallons. Enter the value in
            liters and select "Gallon" as the target unit to see the result
            instantly.
          </p>
        </div>
        <div className="mb-2">
          <p className="font-medium">
            Q2: What is the formula for converting cubic meters to liters?
          </p>
          <p>1 cubic meter = 1000 liters. Just multiply cubic meters by 1000.</p>
        </div>
        <div className="mb-2">
          <p className="font-medium">Q3: Can I use this converter for cooking?</p>
          <p>
            Yes! Our converter includes cups, pints, and fluid ounces, which
            are widely used in recipes worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volume;
