import React, { useMemo, useState } from "react"; 
import { Title, Meta } from "react-head";

const Area = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("SquareMeter");
  const [toUnit, setToUnit] = useState("SquareCentimeter");

  const units = {
    SquareMeter: 1,
    SquareKilometer: 1e6,
    SquareCentimeter: 0.0001,
    SquareMillimeter: 1e-6,
    Hectare: 10000,
    Acre: 4046.86,
    SquareMile: 2.59e6,
    SquareYard: 0.836127,
    SquareFoot: 0.092903,
    SquareInch: 0.00064516,
  };

  const unitNames = Object.keys(units);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const toBase = (num, unit) => num * units[unit];       // → m²
  const fromBase = (sqm, unit) => sqm / units[unit];

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
      {/* SEO Title & Meta */}
      <Title>Area Converter | MyCalSuite</Title>
      <Meta
        name="description"
        content="Easily convert between square meters, square kilometers, acres, hectares, square miles, and more with our free area converter tool."
      />

      {/* Converter Box */}
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
        <div className="grid grid-cols-2 gap-4 ">
          <select
            className="border p-2 rounded w-full md:h-60 bg-white"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            size={isDesktop ? unitNames.length : 1}
          >
            {unitNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
          <select
            className="border p-2 rounded w-full md:h-60 mb-4 bg-white"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            size={isDesktop ? unitNames.length : 1}
          >
            {toOptions.map(({ name, val }) => (
              <option key={name} value={name}>
                {name}{value ? ` (${fmt(val)})` : ""}
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

      {/* SEO Block - Definition & Q&A */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">What is Area?</h2>
        <p className="mb-4 text-gray-700">
          Area is the measurement of the amount of space inside a two-dimensional shape or surface. 
          It is typically measured in square units such as square meters (m²), square feet (ft²), 
          or acres. Area conversion is useful in real estate, construction, agriculture, and academic fields.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Frequently Asked Questions</h3>
        <div className="mb-2">
          <p className="font-medium">1. How do I convert square meters to acres?</p>
          <p className="text-gray-700">
            Divide the area in square meters by 4046.86 to get the value in acres.
          </p>
        </div>
        <div className="mb-2">
          <p className="font-medium">2. What is the formula for calculating area?</p>
          <p className="text-gray-700">
            The formula depends on the shape. For example, area of a rectangle = length × width.
          </p>
        </div>
        <div className="mb-2">
          <p className="font-medium">3. Why is area important?</p>
          <p className="text-gray-700">
            Area calculations are essential for land measurement, property development, flooring, painting, and farming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Area;
