import React, { useMemo, useState } from "react";
import { Title, Meta } from "react-head";

const Time = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Second");
  const [toUnit, setToUnit] = useState("Minute");

  const units = {
    Second: 1,
    Millisecond: 0.001,
    Microsecond: 1e-6,
    Nanosecond: 1e-9,
    Minute: 60,
    Hour: 3600,
    Day: 86400,
    Week: 604800,
  };

  const unitNames = Object.keys(units);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  // base conversion helpers
  const toBase = (num, unit) => num * units[unit]; // -> seconds
  const fromBase = (seconds, unit) => seconds / units[unit];

  const fmt = (n) => {
    if (n === "" || n == null || !Number.isFinite(n)) return "";
    return n.toLocaleString(undefined, { maximumFractionDigits: 8 });
  };

  // options for "To" dropdown
  const toOptions = useMemo(() => {
    const num = Number(value);
    if (!value || Number.isNaN(num)) return unitNames.map((name) => ({ name, val: "" }));
    const base = toBase(num, fromUnit);
    return unitNames.map((name) => ({ name, val: fromBase(base, name) }));
  }, [value, fromUnit, unitNames]);

  // final read-only result
  const result = useMemo(() => {
    const num = Number(value);
    if (!value || Number.isNaN(num)) return "";
    const base = toBase(num, fromUnit);
    return fmt(fromBase(base, toUnit));
  }, [value, fromUnit, toUnit]);

  return (
    <div className="p-4">
      {/* ✅ Title & Meta for SEO */}
      <Title>Time Converter | MyCalSuite</Title>
      <Meta
        name="description"
        content="Free online time converter. Instantly convert seconds, minutes, hours, days, and weeks with accurate results. Ideal for students, professionals, and daily use."
      />

      {/* ✅ Calculator Box */}
      <div className="p-4 border rounded-lg shadow bg-gray-100">
        {/* Row 1 - labels */}
        <div className="grid grid-cols-2 gap-4 ">
          <label className="font-medium">From</label>
          <label className="font-medium">To</label>
        </div>

        {/* Row 2 - inputs */}
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input
            type="number"
            className="border p-2 rounded w-full bg-white"
            placeholder="Enter value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 rounded w-full bg-gray-100"
            readOnly
            value={result}
          />
        </div>

        {/* Row 3 - selects */}
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
                {value && !Number.isNaN(Number(value)) ? ` (${fmt(val)})` : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Row 4 - result text */}
        <p className="text-sm text-gray-600">
          {value && fromUnit && toUnit
            ? `Result: ${value} ${fromUnit} = ${result} ${toUnit}`
            : "Converted automatically"}
        </p>
      </div>

      {/* ✅ SEO Content Block (outside calculator box) */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">About the Time Converter</h2>
        <p className="mb-2">
          Our free <strong>online Time Converter</strong> helps you quickly convert
          between <strong>seconds, minutes, hours, days, and weeks</strong>.
          Whether you're a student working on assignments, a professional managing
          schedules, or just need quick time conversions for daily tasks, this tool
          provides accurate results instantly.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Why Use This Time Converter?</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Instant and accurate conversions</li>
          <li>Supports multiple time units from nanoseconds to weeks</li>
          <li>Simple, mobile-friendly interface</li>
          <li>Completely free to use</li>
        </ul>
        <p>
          With <strong>MyCalSuite Time Converter</strong>, you no longer need to
          worry about manual calculations—just enter your value, select units, and
          get results instantly.
        </p>
      </div>
    </div>
  );
};

export default Time;
