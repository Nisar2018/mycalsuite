import React, { useMemo, useState } from "react";
import { Title, Meta } from "react-head";

const Temperature = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Celsius");
  const [toUnit, setToUnit] = useState("Fahrenheit");

  const unitNames = ["Celsius", "Fahrenheit", "Kelvin"];
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const toBase = (num, unit) => {
    switch (unit) {
      case "Celsius": return num;
      case "Fahrenheit": return (num - 32) * (5 / 9);
      case "Kelvin": return num - 273.15;
      default: return num;
    }
  };

  const fromBase = (celsius, unit) => {
    switch (unit) {
      case "Celsius": return celsius;
      case "Fahrenheit": return celsius * 9/5 + 32;
      case "Kelvin": return celsius + 273.15;
      default: return celsius;
    }
  };

  const fmt = (n) =>
    n === "" || n == null || !Number.isFinite(n) ? "" : 
    n.toLocaleString(undefined, { maximumFractionDigits: 6 });

  const toOptions = useMemo(() => {
    const num = Number(value);
    if (value === "" || Number.isNaN(num))
      return unitNames.map((name) => ({ name, val: "" }));
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
    <div className="p-4">
      {/* Title & Meta for SEO */}
      <Title>Temperature Converter | MyCalSuite</Title>
      <Meta
        name="description"
        content="Free online temperature converter. Instantly convert between Celsius, Fahrenheit, and Kelvin with accurate results. Useful for students, scientists, and everyday use."
      />

      {/* Converter Box */}
      <div className="p-4 border rounded-lg shadow bg-gray-100 mb-6 ">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4 ">
          <label className="font-medium">From</label>
          <label className="font-medium">To</label>
        </div>
        {/* Row 2 */}
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
        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <select
            className="border p-2 rounded w-full md:h-40 bg-white"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            size={isDesktop ? unitNames.length : 1}
          >
            {unitNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
          <select
            className="border p-2 rounded w-full md:h-40 bg-white"
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
        {/* Row 4 */}
        <p className="text-sm text-gray-600">
          {value && fromUnit && toUnit
            ? `Result: ${value} ${fromUnit} = ${result} ${toUnit}`
            : "Converted automatically"}
        </p>
      </div>

      {/* 🔹 SEO Content Block (outside box) */}
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">What is a Temperature Converter?</h2>
          <p className="text-gray-700">
            A temperature converter allows you to easily switch between units like Celsius (°C), Fahrenheit (°F), 
            and Kelvin (K). It is widely used by students, scientists, engineers, and travelers 
            to quickly calculate accurate temperature values.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">How Does the Converter Work?</h2>
          <p className="text-gray-700">
            The converter first converts your input into Celsius as the base unit, then recalculates it 
            into your chosen unit (Fahrenheit or Kelvin). This ensures precise and reliable conversions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">FAQs about Temperature Conversion</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">🌡️ Q1: What is the difference between Celsius and Fahrenheit?</h3>
              <p className="text-gray-700">Celsius is used worldwide, while Fahrenheit is mainly used in the United States. The freezing point of water is 0°C or 32°F.</p>
            </div>
            <div>
              <h3 className="font-semibold">❄️ Q2: Why is Kelvin used in science?</h3>
              <p className="text-gray-700">Kelvin is the SI unit of temperature and is commonly used in physics and chemistry for scientific accuracy, starting at absolute zero.</p>
            </div>
            <div>
              <h3 className="font-semibold">🔥 Q3: Can I convert negative temperatures?</h3>
              <p className="text-gray-700">Yes, the converter supports negative values such as -10°C or -20°F, which are common in cold climates.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Temperature;
