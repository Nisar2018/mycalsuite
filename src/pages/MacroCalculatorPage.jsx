import React from "react";
import { Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import MacroCalculator from "../components/health/MacroCalculator";


export default function LayoutStructurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-white shadow-sm px-4 md:px-8 text-xs text-gray-600 md:ml-[60px]">
        <ol className="flex space-x-2">
          <li>
            <Link to="/" className="text-blue-700 hover:underline">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-semibold">Macro Calculator</li>
        </ol>
      </nav>

      {/* Meta SEO */}
      <Title>Macro Calculator Online | MyCalSuite</Title>
      <Meta
        name="description"
        content="Calculate your daily calories and macros instantly with this advanced Macro & Calorie Calculator. Choose your activity level, goal, and formula to get accurate protein, carbs, fat, sugar, and calorie targets — ideal for weight loss, muscle gain, or maintaining weight."
      />
      <meta
        name="keywords"
        content="macro calculator, calorie calculator, macro ratio calculator, daily calorie needs, macro nutrient calculator, weight loss calorie calculator, muscle gain calorie calculator, protein carb fat calculator, Mifflin St Jeor calculator, Harris Benedict calculator, nutrition calculator, balanced diet planner, macronutrient breakdown, calorie intake calculator, fitness macro planner"
      />

      {/* ===== Desktop Layout ===== */}
      <div className="hidden md:flex flex-row p-6 gap-2">
        {/* Main Content */}
        <div className="w-7/10 bg-white p-6 shadow-lg rounded-xl flex flex-col gap-2">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-900">
              Macro Calcculator
            </h1>
            <p className="text-start text-sm" > The calculator provides a range of suggested values for a person's macronutrient and calorie needs under normal conditions. It helps you determine your daily protein, carbohydrate, fat, sugar, and energy intake based on your age, gender, activity level, and fitness goals — whether you want to maintain, lose, or gain weight.</p>
          </div> 

          {/* Calculator Section */}
          <div className="rounded-lg border-4 border-blue-50 shadow-md">
            <MacroCalculator/>
          </div>

          {/* Text Section */}
          <div className="max-w-4xl mx-auto px-4 mt-6 space-y-6"></div>

          
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">
        Understanding the Calorie & Macro Calculator
      </h1>

      {/* Intro */}
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          This calculator can provide a range of suggested values for a person's
          macronutrient and calorie needs under normal conditions. It helps you
          determine your daily intake of protein, carbohydrates, fats, and total
          calories based on your age, gender, activity level, and fitness goals
          — whether you want to maintain, lose, or gain weight.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">How This Calculator Works</h2>
        <p>
          The calculator estimates your Basal Metabolic Rate (BMR) using
          scientifically validated formulas such as{" "}
          <strong>Mifflin-St Jeor</strong> and <strong>Harris-Benedict</strong>.
          It then adjusts for your selected activity level and fitness goal to
          suggest a total daily energy expenditure (TDEE). Based on this value,
          it distributes calories into macronutrients—protein, carbs, and fats—
          according to standard nutrition ratios or your selected macro plan.
        </p>
      </section>

      {/* Protein Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Protein</h2>
        <p className="mb-3">
          Protein is essential for muscle repair, hormone balance, and immune
          function. It should make up around <strong>10–35% of daily calories</strong>.
          For most adults, this equals approximately{" "}
          <strong>0.8–2.0 grams of protein per kilogram of body weight</strong>.
        </p>
        <p className="mb-3">
          <strong>Healthy Protein Sources:</strong> Lean meats (chicken, turkey),
          fish, eggs, tofu, lentils, beans, Greek yogurt, nuts, and seeds.
        </p>
        <p>
          <strong>Less Healthy Protein Sources:</strong> Processed meats like
          sausages, hot dogs, and high-sodium deli meats, which may increase
          heart disease risk when consumed frequently.
        </p>
      </section>

      {/* Carbs Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Carbohydrates</h2>
        <p className="mb-3">
          Carbohydrates are the body’s main energy source, ideally making up{" "}
          <strong>45–65% of total daily calories</strong>. The daily requirement
          varies depending on activity level and metabolism.
        </p>
        <p className="mb-3">
          <strong>Healthy Carbs:</strong> Whole grains (brown rice, oats,
          quinoa), fruits, vegetables, and legumes.
        </p>
        <p>
          <strong>Unhealthy Carbs:</strong> Refined sugars, white bread,
          pastries, and sugary drinks that spike blood sugar levels.
        </p>
      </section>

      {/* Fats Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Fats</h2>
        <p className="mb-3">
          Fats are essential for energy storage and nutrient absorption. They
          should account for around <strong>20–35% of daily calories</strong>.
        </p>
        <p className="mb-3">
          <strong>Healthy Fats:</strong> Avocados, olive oil, nuts, seeds, and
          fatty fish such as salmon or tuna.
        </p>
        <p>
          <strong>Unhealthy Fats:</strong> Trans fats and excessive saturated
          fats from fried foods, processed snacks, and high-fat dairy.
        </p>
      </section>

      {/* Macro Plans */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Macro Plans Explained</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Balanced Plan:</strong> ~50% carbs, 25% protein, 25% fat.
          </li>
          <li>
            <strong>Low Carb Plan:</strong> ~25% carbs, 40% protein, 35% fat.
          </li>
          <li>
            <strong>Low Fat Plan:</strong> ~60% carbs, 25% protein, 15% fat.
          </li>
          <li>
            <strong>High Protein Plan:</strong> ~40% protein, 30% carbs, 30% fat.
          </li>
        </ul>
      </section>

      {/* Reference Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Macronutrient Reference Table</h2>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full table-auto border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Food</th>
                <th className="border px-4 py-2 text-left">Serving Size</th>
                <th className="border px-4 py-2 text-left">Protein (g)</th>
                <th className="border px-4 py-2 text-left">Carbs (g)</th>
                <th className="border px-4 py-2 text-left">Fat (g)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Apple", "1 medium", "0.5", "25", "0.3"],
                ["Broccoli", "1 cup (chopped)", "2.6", "6", "0.3"],
                ["Chicken Breast", "3 oz", "26", "0", "1.5"],
                ["Brown Rice", "1 cup cooked", "5", "45", "1.5"],
                ["Avocado", "1/2 fruit", "2", "9", "15"],
                ["Greek Yogurt", "1 cup", "10", "6", "0"],
                ["Egg (whole)", "1 large", "6", "0.4", "5"],
                ["Almonds", "1 oz (23 nuts)", "6", "6", "14"],
                ["Salmon", "3 oz", "22", "0", "12"],
                ["Whole Wheat Bread", "1 slice", "4", "12", "1"],
                ["Olive Oil", "1 tbsp", "0", "0", "14"],
                ["Milk (2%)", "1 cup", "8", "12", "5"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {row.map((cell, j) => (
                    <td key={j} className="border px-4 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-8 text-sm text-gray-600">
        <p>
          <strong>Disclaimer:</strong> This calculator and table provide general
          nutrition guidance and may not apply to medical or special dietary
          conditions. Please consult a registered dietitian or physician for
          personalized advice.
        </p>
      </section>
    </div>
 
        </div>

        {/* Sidebar */}
        <div className="w-3/10 bg-white p-4 shadow-lg rounded-xl md:pt-[100px]">
          <Sidebar />
        </div>
      </div>

      {/* ===== Mobile Layout ===== */}
      <div className="flex flex-col md:hidden p-4 gap-4">
        {/* Heading */}
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold text-blue-900"> Macro Calcculator</h1>
        </div>

        {/* Calculator Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl border-4 border-blue-50">
          <MacroCalculator/>
        </div>

        {/* Text Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl space-y-4"></div>

        {/* Sidebar below */}
        <div className="bg-white p-2 shadow-lg rounded-xl">
          <Sidebar />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
