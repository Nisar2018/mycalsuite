import React, { useMemo, useState } from "react";
import { Title, Meta } from "react-head";

const Length = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Meter");
  const [toUnit, setToUnit] = useState("Kilometer");

  // Factors to **meters**
  const units = {
    Meter: 1,
    Kilometer: 1000,
    Centimeter: 0.01,
    Millimeter: 0.001,
    Micrometer: 1e-6,
    Nanometer: 1e-9,
    Mile: 1609.34,
    Yard: 0.9144,
    Foot: 0.3048,
    Inch: 0.0254,
  };

  const unitNames = Object.keys(units);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const toBase = (num, unit) => num * units[unit];        // -> meters
  const fromBase = (meters, unit) => meters / units[unit]; // meters -> unit

  const fmt = (n) => {
    if (n === "" || n == null || !Number.isFinite(n)) return "";
    return n.toLocaleString(undefined, { maximumFractionDigits: 8 });
  };

  const toOptions = useMemo(() => {
    const num = Number(value);
    if (value === "" || Number.isNaN(num)) {
      return unitNames.map((name) => ({ name, val: "" }));
    }
    const base = toBase(num, fromUnit);
    return unitNames.map((name) => ({ name, val: fromBase(base, name) }));
  }, [value, fromUnit]);

  const result = useMemo(() => {
    const num = Number(value);
    if (value === "" || Number.isNaN(num)) return "";
    const base = toBase(num, fromUnit);
    return fmt(fromBase(base, toUnit));
  }, [value, fromUnit, toUnit]);

  return (
    <div className="space-y-8">
      {/* SEO Meta Tags */}
      <Title>Length Converter | MyCalSuite</Title>
      <Meta
        name="description"
        content="Use our free online Length Converter to easily convert between meters, kilometers, inches, feet, miles, and more. Accurate, fast, and user-friendly tool for students and professionals."
      />

      {/* Calculator Box */}
      <div className="p-4 border rounded-lg shadow bg-gray-100">
        {/* Row 1 */}
        <div className="grid grid-cols-2 ">
          <label className="font-medium block mb-1">From</label>
          <label className="font-medium block mb-1">To</label>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4 mb-2 bg-white">
          <input
            type="number"
            className="border p-2 rounded w- "
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

        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* From */}
          <div>
            <select
              className="border p-2 rounded w-full md:h-60 md:min-w-[240px] bg-white"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              size={isDesktop ? unitNames.length : 1}
            >
              {unitNames.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>

          {/* To */}
          <div>
            <select
              className="border p-2 rounded w-full md:h-60 md:min-w-[260px] bg-white"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              size={isDesktop ? unitNames.length : 1}
            >
              {toOptions.map(({ name, val }) => (
                <option key={name} value={name}>
                  {name}
                  {value !== "" && !Number.isNaN(Number(value)) ? ` (${fmt(val)})` : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <p className="text-lg   text-gray-600">
          {value && fromUnit && toUnit
            ? `Result: ${value} ${fromUnit} = ${result} ${toUnit}`
            : "Converted automatically"}
        </p>
      </div>

      {/* SEO Content Block (outside the calculator box) */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">About Length Conversion</h2>
        <p className="mb-3">
          Length conversion helps in converting one unit of distance into another. 
          Common length units include meters, kilometers, inches, feet, yards, and miles. 
          This tool makes it easy to switch between different measurement systems like 
          Metric and Imperial.
        </p>

        <h3 className="text-lg font-semibold mb-2">Why Use a Length Converter?</h3>
        <p className="mb-3">
          A length converter is useful for students, engineers, travelers, and professionals 
          who often work with multiple measurement systems. Instead of manual calculations, 
          this converter provides instant, accurate results.
        </p>

        <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions (FAQs)</h3>
        <div className="space-y-3">
          <div>
            <p className="font-medium">1. How do you convert meters to feet?</p>
            <p>1 meter = 3.28084 feet. Simply enter your value in meters and select "Feet" as the target unit.</p>
          </div>
          <div>
            <p className="font-medium">2. What is the difference between miles and kilometers?</p>
            <p>1 mile equals approximately 1.609 kilometers. Miles are commonly used in the US and UK, while kilometers are used worldwide.</p>
          </div>
          <div>
            <p className="font-medium">3. Can I convert inches to millimeters?</p>
            <p>Yes, 1 inch equals 25.4 millimeters. The converter provides exact values instantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Length;
