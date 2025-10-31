// Base factors to SI units (m, s, m², m³, kg)
export const LENGTH_UNITS = {
  meter: 1,
  kilometer: 1000,
  centimeter: 0.01,
  millimeter: 0.001,
  micrometer: 1e-6,
  nanometer: 1e-9,
  mile: 1609.344,
  yard: 0.9144,
  foot: 0.3048,
  inch: 0.0254,
};

export const TIME_UNITS = {
  second: 1,
  millisecond: 1e-3,
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 604800,
};

export const AREA_UNITS = {
  "square meter": 1,
  "square kilometer": 1e6,
  "square centimeter": 1e-4,
  "square millimeter": 1e-6,
  hectare: 1e4,
  acre: 4046.8564224,
  "square mile": 2589988.110336,
  "square yard": 0.83612736,
  "square foot": 0.09290304,
  "square inch": 0.00064516,
};

export const VOLUME_UNITS = {
  "cubic meter": 1,
  liter: 0.001,
  milliliter: 1e-6,
  "cubic centimeter": 1e-6, // 1 mL
  "cubic foot": 0.028316846592,
  "cubic inch": 1.6387064e-5,
  "US gallon": 0.003785411784,
  "US quart": 0.000946352946,
  "US pint": 0.000473176473,
  "US cup": 0.0002365882365,
};

export const WEIGHT_UNITS = {
  kilogram: 1,
  gram: 1e-3,
  milligram: 1e-6,
  microgram: 1e-9,
  "metric ton": 1000,
  pound: 0.45359237,
  ounce: 0.028349523125,
  stone: 6.35029318,
};

// Temperature conversions use formulas, not simple factors.
// We'll expose helpers for Temperature component.
export const TEMP_UNITS = ["celsius", "fahrenheit", "kelvin"];

export function toCelsius(value, unit) {
  const v = Number(value);
  if (Number.isNaN(v)) return NaN;
  switch (unit) {
    case "celsius": return v;
    case "fahrenheit": return (v - 32) * 5 / 9;
    case "kelvin": return v - 273.15;
    default: return NaN;
  }
}
export function fromCelsius(celsiusValue, targetUnit) {
  const c = Number(celsiusValue);
  if (Number.isNaN(c)) return NaN;
  switch (targetUnit) {
    case "celsius": return c;
    case "fahrenheit": return (c * 9 / 5) + 32;
    case "kelvin": return c + 273.15;
    default: return NaN;
  }
}
