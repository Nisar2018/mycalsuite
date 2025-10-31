import React, { useMemo, useState } from "react";
import { Title, Meta } from "react-head";

const Weight = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Kilogram");
  const [toUnit, setToUnit] = useState("Gram");

  const units = {
    Kilogram: 1,
    Gram: 0.001,
    Milligram: 1e-6,
    Microgram: 1e-9,
    Pound: 0.453592,
    Ounce: 0.0283495,
    Ton: 1000,
  };
  const unitNames = Object.keys(units);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const toBase = (num, unit) => num * units[unit];     // → kg
  const fromBase = (kg, unit) => kg / units[unit];     // kg → unit

  const fmt = (n) =>
    n === "" || n == null || !Number.isFinite(n) ? "" : 
    n.toLocaleString(undefined, { maximumFractionDigits: 8 });

  const toOptions = useMemo(() => {
    const num = Number(value);
    if (!value || Number.isNaN(num)) return unitNames.map((name) => ({ name, val: "" }));
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
      {/* Meta SEO */}
      <Title>Weight Converter | MyCalSuite</Title>
      <Meta
        name="description"
        content="Free online weight converter. Instantly convert kilograms, grams, pounds, and ounces with accurate results. Useful for students, cooking, fitness, and science."
      />

      {/* Calculator Box */}
      <div className="p-4 border rounded-lg shadow bg-gray-100">
        <div className="grid grid-cols-2 gap-4 ">
          <label className="font-medium">From</label>
          <label className="font-medium">To</label>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input type="number" className="border p-2 rounded w-full bg-white"
            value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter value"/>
          <input type="text" className="border p-2 rounded w-full bg-gray-100"
            readOnly value={result}/>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <select className="border p-2 rounded w-full md:h-60 bg-white"
            value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}
            size={isDesktop ? unitNames.length : 1}>
            {unitNames.map((name) => <option key={name} value={name}>{name}</option>)}
          </select>
          <select className="border p-2 rounded w-full md:h-60 bg-white"
            value={toUnit} onChange={(e) => setToUnit(e.target.value)}
            size={isDesktop ? unitNames.length : 1}>
            {toOptions.map(({name,val}) =>
              <option key={name} value={name}>{name}{value ? ` (${fmt(val)})` : ""}</option>
            )}
          </select>
        </div>
        <p className="text-sm text-gray-600">
          {value && fromUnit && toUnit
            ? `Result: ${value} ${fromUnit} = ${result} ${toUnit}`
            : "Converted automatically"}
        </p>
      </div>

      {/* SEO Content Section */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-2">What is a Weight Converter?</h2>
        <p className="mb-4">
          A weight converter is an online tool that helps you quickly convert between different 
          units of weight such as kilograms, grams, pounds, ounces, tons, and more. 
          It is useful for cooking, fitness tracking, academic work, and everyday calculations.
        </p>

        <h3 className="text-lg font-semibold mb-2">Why Use a Weight Converter?</h3>
        <p className="mb-4">
          Instead of manually calculating conversions, this tool gives you instant and accurate 
          results. For example, if you want to know how many grams are in 2 pounds, the converter 
          can provide the answer immediately.
        </p>

        <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
        <div className="space-y-3">
          <div>
            <strong>Q: How many grams are in 1 kilogram?</strong>
            <p>A: 1 kilogram is equal to 1,000 grams.</p>
          </div>
          <div>
            <strong>Q: How many pounds are in 1 kilogram?</strong>
            <p>A: 1 kilogram equals approximately 2.2046 pounds.</p>
          </div>
          <div>
            <strong>Q: Can I convert ounces to grams?</strong>
            <p>A: Yes, simply select "Ounce" as the input unit and "Gram" as the output unit.</p>
          </div>
          <div>
            <strong>Q: Is this converter accurate for science calculations?</strong>
            <p>A: Yes, the converter uses precise conversion values suitable for academic and 
            professional purposes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weight;
