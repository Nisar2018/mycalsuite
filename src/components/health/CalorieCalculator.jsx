import React, { useRef, useState } from "react";

export default function CalorieCalculator() {
  // inputs
  const [unit, setUnit] = useState("us");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("bmr");
  const [resultUnit, setResultUnit] = useState("calories");
  const [formula, setFormula] = useState("mifflin");

  // results
  const [results, setResults] = useState(null);

  // ref for dynamic result row
  const resultRowRef = useRef(null);

  // activity multipliers
  const activityFactors = {
    bmr: 1.0,
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
    extraActive: 2.2,
  };

  // default ranges (user accepted)
  const rangesByGender = {
    male: {
      low: [0, 1800],
      normal: [1800, 2600],
      high: [2600, 3500],
      max: 3500,
      colors: ["#22c55e", "#f59e0b", "#ef4444"],
    },
    female: {
      low: [0, 1500],
      normal: [1500, 2100],
      high: [2100, 2800],
      max: 2800,
      colors: ["#3b82f6", "#a78bfa", "#ec4899"],
    },
  };

  // helper: polar -> cartesian (SVG)
  const polarToCartesian = (cx, cy, r, angleDeg) => {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleRad),
      y: cy + r * Math.sin(angleRad),
    };
  };

  // SVG arc path for given startAngle and endAngle (degrees)
  const describeArc = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  // calculate calories & set results (show dynamic row)
  const calculateCalories = () => {
    // convert units to metric
    const h =
      unit === "us"
        ? Number(heightFt || 0) * 30.48 + Number(heightIn || 0) * 2.54
        : Number(heightCm || 0);
    const w = unit === "us" ? Number(weight || 0) * 0.453592 : Number(weight || 0);
    const a = Number(age || 0);

    // compute BMR
    let bmr = 0;
    if (formula === "mifflin") {
      bmr =
        gender === "male"
          ? 10 * w + 6.25 * h - 5 * a + 5
          : 10 * w + 6.25 * h - 5 * a - 161;
    } else if (formula === "harris") {
      bmr =
        gender === "male"
          ? 88.362 + 13.397 * w + 4.799 * h - 5.677 * a
          : 447.593 + 9.247 * w + 3.098 * h - 4.33 * a;
    } else if (formula === "katch") {
      // estimate LBM with assumed 25% body fat if user doesn't supply BF%
      const lbm = w * (1 - 0.25);
      bmr = 370 + 21.6 * lbm;
    }

    // total with activity
    const factor = activityFactors[activity] || 1;
    let total = bmr * factor;

    // convert to kilojoules if requested
    let displayBmr = bmr;
    let displayTotal = total;
    if (resultUnit === "kilojoules") {
      displayBmr *= 4.184;
      displayTotal *= 4.184;
    }

    const payload = {
      bmr: Number(displayBmr.toFixed(2)),
      total: Number(displayTotal.toFixed(2)),
    };

    setResults(payload);

    // scroll & focus to dynamic row
    setTimeout(() => {
      if (resultRowRef.current) {
        resultRowRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        // focus for screen readers (element has tabIndex -1)
        resultRowRef.current.focus({ preventScroll: true });
      }
    }, 120);
  };

  // clear form and hide dynamic row
  const clearForm = () => {
    setAge("");
    setGender("male");
    setHeightFt("");
    setHeightIn("");
    setHeightCm("");
    setWeight("");
    setActivity("bmr");
    setResultUnit("calories");
    setFormula("mifflin");
    setResults(null);

    // focus to first input
    setTimeout(() => {
      const el = document.querySelector('input[type="number"]');
      if (el) el.focus();
    }, 50);
  };

  // render the multi-colored segmented arc gauge (symmetrical 180°)
  const SegmentedGauge = ({ value }) => {
    const cfg = rangesByGender[gender] || rangesByGender.male;
    const max = cfg.max;
    const colors = cfg.colors;

    // clamp and fraction
    const val = Math.max(0, Math.min(Number(value) || 0, max));
    const f = val / max; // fraction 0..1

    // SVG arc center and radius
    const cx = 150;
    const cy = 150;
    const r = 120;
    const strokeWidth = 18;

    // We draw segments from left(180deg) -> right(0deg).
    // compute cumulative fractions for segment endpoints based on ranges
    const segEnds = [];
    const segRanges = [
      cfg.low,
      cfg.normal,
      cfg.high,
    ];
    let cum = 0;
    for (let i = 0; i < segRanges.length; i++) {
      const [s, e] = segRanges[i];
      const segLen = Math.max(0, Math.min(e, max) - Math.max(s, 0));
      const segFrac = segLen / max;
      cum += segFrac;
      segEnds.push(cum); // fraction end of segment
    }
    // segStarts can be derived
    const segStarts = [0, segEnds[0], segEnds[1]];

    // map fraction to angle in degrees on semicircle:
    // fraction 0 -> angle 180 (left), fraction 1 -> angle 0 (right)
    const fracToAngle = (frac) => 180 - frac * 180;

    return (
      <div className="flex flex-col items-center">
        <svg width="320" height="180" viewBox="0 0 300 180" role="img" aria-label="Calorie gauge">
          {/* background track (subtle) */}
          <path
            d={describeArc(cx, cy, r, 0, 180)}
            fill="none"
            stroke="#e6e7ea"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* segments */}
          {segStarts.map((startFrac, i) => {
            const endFrac = segEnds[i];
            const startAngle = fracToAngle(startFrac);
            const endAngle = fracToAngle(endFrac);
            // describe arc from startAngle -> endAngle
            return (
              <path
                key={i}
                d={describeArc(cx, cy, r, startAngle, endAngle)}
                fill="none"
                stroke={colors[i]}
                strokeWidth={strokeWidth}
                strokeLinecap="butt"
              />
            );
          })}

          {/* needle */}
          {(() => {
            const needleAngle = fracToAngle(f);
            const needlePoint = polarToCartesian(cx, cy, r - strokeWidth / 2 - 6, needleAngle);
            return (
              <>
                <line
                  x1={cx}
                  y1={cy}
                  x2={needlePoint.x}
                  y2={needlePoint.y}
                  stroke="#111827"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx={cx} cy={cy} r="6" fill="#111827" />
              </>
            );
          })()}

          {/* optional tick labels at 0%, 50%, 100% (left/center/right) */}
          <text x="28" y={cy + 12} fontSize="10" fill="#374151" textAnchor="middle">
            {0}
          </text>
          <text x={150} y={cy - r - 8 + 150} fontSize="10" fill="#374151" textAnchor="middle" />
          <text x="272" y={cy + 12} fontSize="10" fill="#374151" textAnchor="middle">
            {Math.round(max)}
          </text>
        </svg>

        <div className="mt-1 text-center">
          <div className="text-sm text-gray-600">Estimated daily calories</div>
          <div className="text-lg font-semibold">
            {Math.round(val)} {resultUnit === "calories" ? "kcal" : "kJ"}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-6">
      {/* Dynamic result row (appears only when results exist) */}
      {results && (
        <section
          ref={resultRowRef}
          tabIndex={-1}
          aria-live="polite"
          className="border border-blue-200 bg-blue-50 p-4 rounded-lg shadow"
        >
          <h2 className="text-center text-xl font-bold text-blue-900 mb-3">Your Daily Calorie Summary</h2>

          {/* BMR + Total summary */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-3">
            <div className="text-center">
              <div className="text-sm text-gray-600">BMR</div>
              <div className="text-lg font-semibold">{results.bmr} {resultUnit === "calories" ? "kcal" : "kJ"}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Total (with activity)</div>
              <div className="text-lg font-semibold">{results.total} {resultUnit === "calories" ? "kcal" : "kJ"}</div>
            </div>
          </div>

          {/* three parts displayed in parallel on md+ screens */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Gauge */}
            <div className="md:w-1/3 p-2 flex items-stretch justify-center">
              <div className="w-full flex justify-center items-start">
                <SegmentedGauge value={results.total} />
              </div>
            </div>

            {/* Weight Loss table */}
            <div className="md:w-1/3 p-2">
              <div className="h-full flex items-center">
                <div className="w-full border rounded p-3 bg-white shadow-sm">
                  <h3 className="text-center font-semibold text-red-600 mb-2">Weight Loss</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-red-50">
                        <th className="p-2 border">Goal</th>
                        <th className="p-2 border">Calories/day</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border">Maintain</td>
                        <td className="p-2 border text-center">{Number(results.total).toFixed(0)}</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">Lose 0.5 kg/week</td>
                        <td className="p-2 border text-center">{(Number(results.total) - 500).toFixed(0)}</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">Lose 1 kg/week</td>
                        <td className="p-2 border text-center">{(Number(results.total) - 1000).toFixed(0)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Weight Gain table */}
            <div className="md:w-1/3 p-2">
              <div className="h-full flex items-center">
                <div className="w-full border rounded p-3 bg-white shadow-sm">
                  <h3 className="text-center font-semibold text-green-600 mb-2">Weight Gain</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="p-2 border">Goal</th>
                        <th className="p-2 border">Calories/day</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border">Maintain</td>
                        <td className="p-2 border text-center">{Number(results.total).toFixed(0)}</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">Gain 0.5 kg/week</td>
                        <td className="p-2 border text-center">{(Number(results.total) + 500).toFixed(0)}</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">Gain 1 kg/week</td>
                        <td className="p-2 border text-center">{(Number(results.total) + 1000).toFixed(0)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main inputs row */}
      <div className="grid md:grid-cols-2 gap-2">
        {/* Input column */}
        <div className="border border-blue-100 shadow p-2 rounded-lg bg-white">
          

          <div className="space-y-3  p-3 rounded">
      
            <div className="flex gap-2">
              <button
                onClick={() => setUnit("us")}
                className={`px-3 py-1 rounded text-white ${unit === "us" ? "bg-blue-900" : "bg-gray-400"}`}
              >
                US Units
              </button>
              <button
                onClick={() => setUnit("metric")}
                className={`px-3 py-1 rounded text-white ${unit === "metric" ? "bg-blue-900" : "bg-gray-400"}`}
              >
                Metric Units
              </button>
            </div>

            <div className="flex items-center gap-2">
              <label className="w-24">Age:</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                className="border p-1 flex-1" placeholder="years" />
            </div>

            <div>
              <label className="font-medium">Gender:</label>
              <label className="flex-1 gap-4 mt-1">
                <input 
                    type="radio" 
                     
                    value="male" 
                    checked={gender === "male"} 
                    onChange={(e) => setGender(e.target.value)} /> 
                    Male
              </label>
              <label>
                <input 
                    type="radio" 
                    value="female" 
                    checked={gender === "female"} 
                    onChange={(e) => setGender(e.target.value)} /> 
                    Female
              </label>
            </div>

            {unit === "us" ? (
              <div className="flex items-center gap-2">
                <label className="w-24">Height:</label>
                <input type="number" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} className="border p-1 w-24" placeholder="ft" />
                <input type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} className="border p-1 w-24" placeholder="in" />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <label className="w-24">Height (cm):</label>
                <input type="number" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} className="border p-1 flex-1" placeholder="cm" />
              </div>
            )}

            <div className="flex items-center gap-2">
              <label className="w-24">Weight:</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="border p-1 flex-1" placeholder={unit === "us" ? "lbs" : "kg"} />
            </div>

            <div className="flex items-center gap-2">
              <label className="w-24">Activity:</label>
              <select value={activity} onChange={(e) => setActivity(e.target.value)} className="border p-1 flex-1">
                <option value="bmr">Basal Metabolic Rate (BMR)</option>
                <option value="sedentary">Sedentary: little/no exercise</option>
                <option value="light">Light: exercise 1-3x/week</option>
                <option value="moderate">Moderate: 4-5x/week</option>
                <option value="active">Active: daily exercise</option>
                <option value="veryActive">Very Active: intense 6-7x/week</option>
                <option value="extraActive">Extra Active: very intense/job</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="w-24">Formula:</label>
              <select value={formula} onChange={(e) => setFormula(e.target.value)} className="border p-1 flex-1">
                <option value="mifflin">Mifflin-St Jeor</option>
                <option value="harris">Harris-Benedict</option>
                <option value="katch">Katch-McArdle</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="w-24">Result:</label>
              <select value={resultUnit} onChange={(e) => setResultUnit(e.target.value)} className="border p-1 flex-1">
                <option value="calories">Calories</option>
                <option value="kilojoules">Kilojoules</option>
              </select>
            </div>

            <div className="mt-4 flex gap-2">
              <button onClick={calculateCalories} className="bg-blue-900 text-white px-4 py-2 rounded">
                Calculate
              </button>
              <button onClick={clearForm} className="bg-gray-400 text-white px-4 py-2 rounded">
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Right column: remains blank */}
        <div className="border border-blue-100 shadow p-4 rounded-lg bg-white">
          <h2 className="bg-blue-900 text-white text-center text-xl font-bold py-2 rounded mb-4">Instruction to Use: </h2>

          {/* Section 1 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 ">
              1. Enter Your Personal Information
            </h3>
            <ul className="list-disc ml-6 text-gray-600 ">
              <li><strong>Gender:</strong> Select <em>Male</em> or <em>Female</em> for accurate results.</li>
              <li><strong>Age:</strong> Enter your current age in years.</li>
              <li><strong>Height:</strong> Provide your height in centimeters (cm).</li>
              <li><strong>Weight:</strong> Enter your body weight in kilograms (kg).</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section >
            <h3 className="text-lg font-semibold text-gray-700 ">
              2. Choose Your Activity Level
            </h3>
            <p className="text-gray-600 ">
              Select the option that best matches your daily routine:
            </p>
        
        
          </section>

          {/* Section 3 */}
          <section >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              3. Click the “Calculate” Button
            </h3>
            <p className="text-gray-600">
              After filling in your details, click <strong>Calculate</strong> to view your results.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
