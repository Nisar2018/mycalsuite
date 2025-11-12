// src/components/BMI.js
import React, { useMemo, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Custom plugin to draw:
 *  - a needle on the half-doughnut (colored per BMI category)
 *  - tick marks and numeric tick labels (10,20,30,40)
 *
 * The plugin reads options from chart.options.plugins.gaugeNeedle:
 *   { value: 0..1, color: "#hex", ticks: [ {value: number, label: string}, ... ] }
 */
const gaugeNeedlePlugin = {
  id: "gaugeNeedlePlugin",
  afterDraw: function (chart) {
    const ctx = chart.ctx;
    const opts = chart.options || {};
    const pluginOpts = (opts.plugins && opts.plugins.gaugeNeedle) || {};
    const bmi = pluginOpts.bmi;
    const GAUGE_MIN = pluginOpts.min ?? 10;
    const GAUGE_MAX = pluginOpts.max ?? 40;
    const cutoffs = pluginOpts.cutoffs || [18.5, 25, 30];
    const bandColors = pluginOpts.bandColors || ["#3B82F6", "#22C55E", "#F59E0B", "#EF4444"];
    const tickDefs = pluginOpts.ticks || [];
    const tickColor = pluginOpts.tickColor || "#374151";

    const meta = chart.getDatasetMeta(0);
    if (!meta || !meta.data || !meta.data.length) return;
    const arcs = meta.data; // array of ArcElement for each band

    // center & radii
    const arc0 = arcs[0];
    const cx = arc0.x;
    const cy = arc0.y;
    const outerRadius = arc0.outerRadius;
    const innerRadius = arc0.innerRadius;

    // Chart rotation / circumference (radians)
    const rotationDeg = opts.rotation ?? -90;
    const circumferenceDeg = opts.circumference ?? 180;
    const rotation = (rotationDeg * Math.PI) / 180;
    const circumference = (circumferenceDeg * Math.PI) / 180;

    // --- draw ticks (using normalized positions) ---
    ctx.save();
    ctx.translate(cx, cy);
    ctx.lineWidth = 1;
    ctx.strokeStyle = tickColor;
    ctx.fillStyle = tickColor;
    tickDefs.forEach((t) => {
      const angle = rotation + clamp(t.value, 0, 1) * circumference;
      const inner = innerRadius - 6;
      const outer = outerRadius + 6;
      ctx.beginPath();
      ctx.moveTo(inner * Math.cos(angle), inner * Math.sin(angle));
      ctx.lineTo(outer * Math.cos(angle), outer * Math.sin(angle));
      ctx.stroke();

      // label
      const labelRadius = outerRadius + 18;
      ctx.font = "12px system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(t.label, labelRadius * Math.cos(angle), labelRadius * Math.sin(angle));
    });
    ctx.restore();

    // --- draw needle by locating which arc the BMI falls into and interpolating ---
    if (typeof bmi === "number") {
      // clamp
      const clamped = clamp(bmi, GAUGE_MIN, GAUGE_MAX);

      // compute band numeric boundaries
      const bounds = [GAUGE_MIN, ...(cutoffs.slice(0)), GAUGE_MAX]; // e.g. [10,18.5,25,30,40]
      // find band index where clamped <= bounds[i+1]
      let bandIndex = 0;
      for (let i = 0; i < bounds.length - 1; i++) {
        if (clamped <= bounds[i + 1]) {
          bandIndex = i;
          break;
        }
      }
      // band start & end numeric
      const bandStart = bounds[bandIndex];
      const bandEnd = bounds[bandIndex + 1];
      const bandRange = bandEnd - bandStart || 1;
      const proportionInBand = (clamped - bandStart) / bandRange;

      // guard: arcs length should match bands (4)
      const arcEl = arcs[bandIndex];
      if (arcEl) {
        const startA = arcEl.startAngle;
        const endA = arcEl.endAngle;
        const angle = startA + proportionInBand * (endA - startA);

        // draw needle
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        const needleLen = outerRadius * 0.92;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(needleLen, 0);
        ctx.lineWidth = 3;
        // choose color for this band
        const nColor = bandColors[bandIndex] || "#111827";
        ctx.strokeStyle = nColor;
        ctx.stroke();
        // center cap
        ctx.beginPath();
        ctx.fillStyle = nColor;
        ctx.arc(0, 0, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
  },
};

ChartJS.register(gaugeNeedlePlugin);

// clamp helper
function clamp(v, a, b) {
  return Math.min(Math.max(v, a), b);
}

export default function BMI() {
  const [unit, setUnit] = useState("metric");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInch, setHeightInch] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weight, setWeight] = useState("");

  const [resultText, setResultText] = useState(null);
  const [bmiValue, setBmiValue] = useState(null);
  const [category, setCategory] = useState("");

  // Helper conversions
  const toMeters = () => {
    if (unit === "us") {
      const feet = parseFloat(heightFeet || 0) || 0;
      const inch = parseFloat(heightInch || 0) || 0;
      const totalInches = feet * 12 + inch;
      return totalInches * 0.0254;
    }
    return (parseFloat(heightCm || 0) || 0) / 100;
  };
  
  const toKg = () =>
    unit === "us"
      ? (parseFloat(weight || 0) || 0) * 0.453592
      : parseFloat(weight || 0) || 0;

  // Calculate BMI and category
  const calculateBMI = () => {
    const h = toMeters();
    const w = toKg();
    if (!age || !h || !w) {
      setResultText("⚠ Please fill all required fields correctly.");
      setBmiValue(null);
      setCategory("");
      return;
    }

     const bmi = w / (h * h);
    setBmiValue(bmi);

    let cat = "";
    if (age < 2) {
      cat = "BMI calculation not applicable under age 2.";
    } else if (age >= 2 && age < 20) {
      if (bmi < 14) cat = "Underweight (<5%)";
      else if (bmi < 18) cat = "Healthy weight (5%–85%)";
      else if (bmi < 22) cat = "At risk of overweight (85%–95%)";
      else cat = "Overweight (>95%)";
    } else {
      if (bmi < 16) cat = "Severe Thinness";
      else if (bmi < 17) cat = "Moderate Thinness";
      else if (bmi < 18.5) cat = "Mild Thinness";
      else if (bmi < 25) cat = "Normal";
      else if (bmi < 30) cat = "Overweight";
      else if (bmi < 35) cat = "Obese Class I";
      else if (bmi < 40) cat = "Obese Class II";
      else cat = "Obese Class III";
    }

    setCategory(cat);
    setResultText(`Your BMI is ${bmi.toFixed(2)} → ${cat}`);
  };

  const clearAll = () => {
    setAge("");
    setGender("male");
    setHeightFeet("");
    setHeightInch("");
    setHeightCm("");
    setWeight("");
    setResultText(null);
    setBmiValue(null);
    setCategory("");
  };


  // Gauge configuration
  // We'll display BMI mapping from GAUGE_MIN..GAUGE_MAX (10..40)
 // Gauge constants and band sizing
  const GAUGE_MIN = 10;
  const GAUGE_MAX = 40;
  const cutoffs = [18.5, 25, 30]; // thresholds: under<18.5, normal 18.5-25, over 25-30, obese 30+
  const bandUnder = cutoffs[0] - GAUGE_MIN; // 18.5 - 10 = 8.5
  const bandNormal = cutoffs[1] - cutoffs[0]; // 25 - 18.5 = 6.5
  const bandOver = cutoffs[2] - cutoffs[1]; // 30 - 25 = 5
  const bandObese = GAUGE_MAX - cutoffs[2]; // 40 - 30 = 10
  const bandData = [bandUnder, bandNormal, bandOver, bandObese];

  const bandColors = ["#3B82F6", "#22C55E", "#F59E0B", "#EF4444"]; // under, normal, over, obese

  // ticks for numbers (10,20,30,40)
  const numericTicks = [10, 20, 30, 40];
  const tickDefs = numericTicks.map((num) => ({
    value: (num - GAUGE_MIN) / (GAUGE_MAX - GAUGE_MIN),
    label: String(num),
  }));

  // Chart.js data & options
   // Chart.js data & options
  // Chart.js data & options
// Chart.js data & options
const gaugeData = useMemo(
  () => ({
    labels: ["Underweight", "Normal", "Overweight", "Obese"],
    datasets: [
      {
        data: bandData,
        backgroundColor: bandColors,
        borderWidth: 0, // Remove any border between bands
        borderColor: "transparent",
        spacing: -0.5, // Slightly overlap to remove thin gaps
        cutout: "70%",
        circumference: 180,
        rotation: -90,
      },
    ],
  }),
  []
);

const gaugeOptions = useMemo(
  () => ({
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90,
    circumference: 180,
    cutout: "70%",
    layout: { padding: 0 },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      gaugeNeedle: {
        bmi: typeof bmiValue === "number" ? bmiValue : null,
        min: GAUGE_MIN,
        max: GAUGE_MAX,
        cutoffs,
        bandColors,
        ticks: tickDefs,
        tickColor: "#374151",
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
        borderColor: "transparent",
      },
    },
  }),
  [bmiValue]
);


  // Derived basic info
  const hM = toMeters();
  const healthyMin = hM ? 18.5 * hM * hM : null;
  const healthyMax = hM ? 25 * hM * hM : null;
  const bmiPrime = bmiValue ? bmiValue / 25 : null;
  const ponderalIndex = hM ? toKg() / (hM * hM * hM) : null;

  const displayWeight = (kgVal) =>
    unit === "us" ? `${(kgVal / 0.453592).toFixed(1)} lb` : `${kgVal.toFixed(1)} kg`;

  // result text color should reflect the band too
  const resultColor = (() => {
    if (!bmiValue || !category) return "#111827";
    const c = category.toLowerCase();
    if (c.includes("underweight") || c.includes("thinness")) return bandColors[0];
    if (c.includes("normal") || c.includes("healthy")) return bandColors[1];
    if (c.includes("overweight") && !c.includes("obese")) return bandColors[2];
    if (c.includes("obese")) return bandColors[3];
    return "#111827";
  })();

  return (
  <div className="max-w-4xl mx-auto px-4">
    {/* Dynamic Collapsible Result Row */}
    <div
      className={`transition-all duration-500 overflow-hidden ${
        resultText ? "max-h-[800px] opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"
      }`}
    >
      {resultText && (
        <div className="border-4 border-green-300 bg-gray-50 shadow-md rounded-lg p-4 text-center">
          <p className="text-2xl font-semibold text-blue-900 underline">
            Your BMI Result
          </p>
          <p
            className="text-lg font-semibold mt-1"
            style={{ color: resultColor }}
          >
            {resultText}
          </p>

          {/* Gauge Chart */}
          <div className="flex justify-center mt-6">
            <div className="sm:w-64 w-52 h-36">
              <Doughnut data={gaugeData} options={gaugeOptions} />
            </div>
          </div>

          {/* Color Legend */}
          <div className="flex flex-wrap gap-3 justify-center text-xs mt-3">
            <span className="flex items-center gap-1">
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ background: bandColors[0] }}
              />
              &lt;18.5 Underweight
            </span>
            <span className="flex items-center gap-1">
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ background: bandColors[1] }}
              />
              18.5–24.9 Normal
            </span>
            <span className="flex items-center gap-1">
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ background: bandColors[2] }}
              />
              25–29.9 Overweight
            </span>
            <span className="flex items-center gap-1">
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ background: bandColors[3] }}
              />
              ≥30 Obese
            </span>
          </div>

          {/* Basic Info */}
          <p className="text-gray-500 text-xl mt-6">Basic Information</p>
          <div className="text-sm mt-2 space-y-2">
            <p>
              Healthy BMI range: <b>18.5</b> – <b>25.0</b> kg/m²
            </p>
            {healthyMin != null && healthyMax != null && (
              <p>
                Healthy weight for your height:{" "}
                <b>{displayWeight(healthyMin)}</b> –{" "}
                <b>{displayWeight(healthyMax)}</b>
              </p>
            )}
            {bmiPrime != null && (
              <p>
                BMI Prime: <b>{bmiPrime.toFixed(2)}</b>
              </p>
            )}
            {ponderalIndex != null && (
              <p>
                Ponderal Index: <b>{ponderalIndex.toFixed(2)}</b> kg/m³
              </p>
            )}
          </div>
        </div>
      )}
    </div>

    {/* Two-column layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Input Section */}
      <div>
        <div className="flex gap-2 justify-start mt-4">
          <button
            onClick={() => setUnit("us")}
            className={`px-4 py-2 text-sm sm:text-base text-white rounded ${
              unit === "us" ? "bg-blue-900" : "bg-gray-400"
            }`}
          >
            US Units
          </button>
          <button
            onClick={() => setUnit("metric")}
            className={`px-4 py-2 text-sm sm:text-base text-white rounded ${
              unit === "metric" ? "bg-blue-900" : "bg-gray-400"
            }`}
          >
            Metric Units
          </button>
        </div>

        <div className="border-4 border-blue-100 p-4 space-y-3 shadow-md bg-gray-50 rounded-lg">
          {/* Age */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
            <label className="sm:w-28 text-sm sm:text-base">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-300 p-2 w-full sm:flex-1 rounded"
              placeholder="Enter age"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
            <label className="sm:w-28 text-sm sm:text-base">Gender:</label>
            <div className="flex gap-4">
              <label className="text-sm sm:text-base">
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                />
                Male
              </label>
              <label className="text-sm sm:text-base">
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                />
                Female
              </label>
            </div>
          </div>

          {/* Height */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
            <label className="sm:w-28 text-sm sm:text-base">Height:</label>
            {unit === "us" ? (
              <div className="flex gap-2 w-full">
                <input
                  type="number"
                  value={heightFeet}
                  onChange={(e) => setHeightFeet(e.target.value)}
                  className="border border-gray-400 p-2 w-1/2 rounded"
                  placeholder="Feet"
                />
                <input
                  type="number"
                  value={heightInch}
                  onChange={(e) => setHeightInch(e.target.value)}
                  className="border border-gray-400 p-2 w-1/2 rounded"
                  placeholder="Inches"
                />
              </div>
            ) : (
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="border border-gray-400 p-2 w-full sm:flex-1 rounded"
                placeholder="cm"
              />
            )}
          </div>

          {/* Weight */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
            <label className="sm:w-28 text-sm sm:text-base">Weight:</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-400 p-2 w-full sm:flex-1 rounded"
              placeholder={unit === "us" ? "lbs" : "kg"}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-2 mt-2">
            <button
              onClick={calculateBMI}
              className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
            >
              Calculate
            </button>
            <button
              onClick={clearAll}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Right Column (Instruction) */}
      <div>
        <div className="border-4 border-green-200 p-2 shadow-md bg-gray-50 rounded-lg flex flex-col items-center md:mt-2.5 ">
          
            
              <h2 className="text-xl font-bold bg-blue-900 mb-1 px-4 py-2 text-white ">
                How to Use BMI Calculator
              </h2>

              <p className="text-gray-800 text-sm leading-relaxed ">
                <b>Step 1 – Select Unit System:</b> Choose between 
                <span className="text-blue-900"> US Units</span> (feet, inches, pounds) or 
                <span className="text-blue-900"> Metric Units</span> (centimeters, kilograms). 
                Click the respective button to switch between them.
              </p>

              <p className="text-gray-800 text-sm leading-relaxed ">
                <b>Step 2 – Enter Your Details:</b> Provide your <b>age</b> and <b>gender</b>, then enter your 
                <b>height</b> and <b>weight</b> as follows:
              </p>

              <p className="text-gray-700 text-sm leading-relaxed ml-4 ">
                • For <b>US Units:</b> Enter height in <b>feet</b> and <b>inches</b>, and weight in <b>pounds (lbs)</b>.
              </p>
              <p className="text-gray-700 text-sm  leading-relaxed ml-4 ">
                • For <b>Metric Units:</b> Enter height in <b>centimeters (cm)</b> and weight in <b>kilograms (kg)</b>.
              </p>

              <p className="text-gray-800 leading-relaxed mb-3">
                <b>Step 3 – Calculate Your BMI:</b> Click the 
                <span className="bg-blue-900 text-white px-2 py-1 rounded text-sm ml-1">Calculate</span> 
                button to generate your BMI result. Your BMI value and category will appear above the input section 
              </p>

                        
              <p className="text-gray-800 text-sm  leading-relaxed">
                <b>Step 5 – Clear Inputs:</b> Click the 
                <span className="bg-gray-400 text-white px-2 rounded text-sm ml-1">Clear</span> 
                button to reset all fields and start a new calculation.
              </p>






        </div>
      </div>
    </div>
  </div>
);


}
