import React from "react";
import {Title, Meta} from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CalorieCalculator from "../components/health/CalorieCalculator";

export default function calorieCalulatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
       {/* Breadcrumb */}
            <nav className="bg-white shadow-sm px-4 md:px-8  text-xs text-gray-600 md:ml-[60px]">
              <ol className="flex space-x-2">
                <li>
                  <Link to="/" className="text-blue-700 hover:underline">
                    Home
                  </Link>
                </li>
                
                <li>/</li>
                <li className="text-gray-800 font-semibold">Calorie Calculator</li>
              </ol>
            </nav>
            {/* Meta SEO */}
                  <Title>Calorie Calculator Online | MyCalSuite</Title>
                  <Meta
                    name="description"
                    content="Calculate your daily calorie needs instantly with our advanced Calorie Calculator. Find out how many calories you need to lose, maintain, or gain weight based on your age, gender, activity level, and fitness goals. Perfect for tracking fat loss, muscle gain, and balanced nutrition."
                  />

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row p-4 gap-2">
        {/* Main Portion */}
        <div className="w-7/10 bg-white p-6 shadow-lg rounded-xl flex flex-col gap-2">
          {/* Heading */}
          <div className="text-center ">
            <h1 className="text-3xl font-bold text-blue-900">
         Calorie Calculator
            </h1>
            <p className="mt-3 text-start text-sm">The Calorie Calculator is a simple and effective tool designed to estimate your daily calorie needs based on your personal goals and activity level. It helps you understand how many calories you should consume each day to maintain, lose, or gain weight. You can easily choose your preferred activity level and calculation formula to get a more accurate result for your daily calorie requirement.</p>
          </div>

          {/* Row 1: Calculator */}
          <div className="rounded-lg border-4 border-blue-50 shadow-md ">
           <CalorieCalculator/>
          </div>

          {/* Row 2: Text Section */}
         <div className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
         
          <div className="max-w-6xl mx-auto p-6 text-gray-800 leading-relaxed">
            {/* Header */}
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              Calorie Calculator: Understanding Your Daily Energy Needs
            </h1>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-6 mb-2">
              1. What Is a Calorie?
            </h2>
            <p>
              A calorie is a unit of energy that measures how much energy food and
              drinks provide to your body. Every activity you perform — from breathing
              and sleeping to walking and exercising — requires calories.
            </p>
            <p className="mt-2">
              In nutrition, we actually refer to{" "}
              <strong>kilocalories (kcal)</strong>, where 1 kilocalorie = 1,000
              calories.
            </p>
            <p className="mt-2">
              Your daily calorie requirement depends on several factors including age,
              gender, weight, height, and physical activity level. Consuming more
              calories than your body needs leads to weight gain, while consuming
              fewer calories leads to weight loss.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-6 mb-2">
              2. Understanding Activity Levels
            </h2>
            <p>
              Your daily calorie expenditure includes both your{" "}
              <strong>Basal Metabolic Rate (BMR)</strong> and your{" "}
              <strong>Activity Level</strong>.
            </p>
            <p className="mt-2">
              The BMR represents the calories your body burns at rest — just to
              maintain vital functions like breathing, heart rate, and temperature
              regulation. The Activity Level accounts for calories burned during
              physical movement and exercise.
            </p>

            <div className="mt-4 space-y-3">
              {[
                {
                  title: "2.1 Basal Metabolic Rate (BMR)",
                  desc: "Minimum calories your body requires at complete rest to sustain essential bodily functions such as breathing, circulation, and cell production.",
                },
                {
                  title: "2.2 Sedentary (Little or No Exercise)",
                  desc: "Applies to people with minimal physical activity or desk jobs.",
                  mult: "BMR × 1.2",
                },
                {
                  title: "2.3 Lightly Active (Exercise 1–3 Times/Week)",
                  desc: "Includes light workouts or casual walking.",
                  mult: "BMR × 1.375",
                },
                {
                  title: "2.4 Moderately Active (Exercise 4–5 Times/Week)",
                  desc: "Regular exercise or moderately active jobs.",
                  mult: "BMR × 1.55",
                },
                {
                  title: "2.5 Active (Daily or Intense Exercise)",
                  desc: "Training daily or participating in moderately intense physical activities.",
                  mult: "BMR × 1.725",
                },
                {
                  title: "2.6 Very Active (Intense Exercise 6–7 Times/Week)",
                  desc: "Applies to athletes or heavy laborers.",
                  mult: "BMR × 1.9",
                },
                {
                  title: "2.7 Extra Active (Very Intense Exercise or Physical Job)",
                  desc: "For extreme physical training or manual labor jobs.",
                  mult: "BMR × 2.0",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-blue-900">{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.mult && (
                    <p>
                      👉 <strong>Multiplier:</strong> {item.mult}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-6 mb-2">
              3. Common Formulas for Calculating Calories
            </h2>
            <p>
              Here are three popular scientific methods to estimate your daily
              caloric needs:
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900">
                  3.1 Harris–Benedict Equation (Revised)
                </h3>
                <p>Classic method for calculating BMR.</p>
                <p>
                  <strong>For Men:</strong> 88.362 + (13.397 × weight in kg) + (4.799
                  × height in cm) − (5.677 × age in years)
                </p>
                <p>
                  <strong>For Women:</strong> 447.593 + (9.247 × weight in kg) +
                  (3.098 × height in cm) − (4.330 × age in years)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900">3.2 Mifflin–St Jeor Equation</h3>
                <p>More accurate for modern lifestyles.</p>
                <p>
                  <strong>For Men:</strong> (10 × weight in kg) + (6.25 × height in
                  cm) − (5 × age in years) + 5
                </p>
                <p>
                  <strong>For Women:</strong> (10 × weight in kg) + (6.25 × height in
                  cm) − (5 × age in years) − 161
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900">3.3 Katch–McArdle Formula</h3>
                <p>Ideal for people with known body fat percentage.</p>
                <p>
                  <strong>Formula:</strong> BMR = 370 + (21.6 × Lean Body Mass in kg)
                </p>
                <p>
                  <strong>Where:</strong> Lean Body Mass = (1 − Body Fat %) × Weight
                  in kg
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-6 mb-2">
              4. Summary Table
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm text-left mt-2">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="border px-3 py-2">Formula</th>
                    <th className="border px-3 py-2">Best For</th>
                    <th className="border px-3 py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Harris–Benedict</td>
                    <td className="border px-3 py-2">General population</td>
                    <td className="border px-3 py-2">Classic and easy to use</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Mifflin–St Jeor</td>
                    <td className="border px-3 py-2">Modern standard</td>
                    <td className="border px-3 py-2">Most accurate for adults</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Katch–McArdle</td>
                    <td className="border px-3 py-2">Fitness enthusiasts</td>
                    <td className="border px-3 py-2">
                      Ideal for those tracking body fat %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 5 */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-6 mb-2">
              5. Macronutrient Table
            </h2>
            <p>
              Below is a detailed table showing protein, carbohydrate, and fat content
              in common foods.
            </p>

            {/* Macronutrient Table */}
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="border px-3 py-2">Food Item</th>
                    <th className="border px-3 py-2">Protein (g)</th>
                    <th className="border px-3 py-2">Carbohydrates (g)</th>
                    <th className="border px-3 py-2">Fat (g)</th>
                    <th className="border px-3 py-2">Calories (kcal)</th>
                    <th className="border px-3 py-2">Remarks / Nutritional Note</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Chicken Breast (Skinless, Cooked)", 31, 0, 3.6, 165, "Excellent lean protein source"],
                    ["Egg (Whole, Boiled)", 13, 1.1, 11, 155, "Balanced protein and healthy fats"],
                    ["Egg White (Boiled)", 11, 0.7, 0.2, 52, "High protein, almost no fat"],
                    ["Beef (Lean, Grilled)", 26, 0, 15, 250, "High in iron and vitamin B12"],
                    ["Salmon (Grilled)", 20, 0, 13, 208, "High in omega-3 fatty acids"],
                    ["Tuna (Canned in Water)", 29, 0, 1, 130, "Low fat, high protein"],
                    ["Paneer (Cottage Cheese)", 18, 3.4, 20, 265, "Great vegetarian protein source"],
                    ["Tofu (Firm)", 8, 2, 4.8, 76, "Plant-based protein"],
                    ["Lentils (Cooked)", 9, 20, 0.4, 116, "High in fiber and complex carbs"],
                    ["Chickpeas (Cooked)", 8.9, 27, 2.6, 164, "Good source of plant-based protein"],
                    ["Kidney Beans (Cooked)", 8.7, 22, 0.5, 127, "High fiber, low fat"],
                    ["Brown Rice (Cooked)", 2.6, 23, 0.9, 111, "Complex carbohydrate source"],
                    ["White Rice (Cooked)", 2.4, 28, 0.3, 130, "Quick energy source"],
                    ["Oats (Raw)", 13, 68, 7, 379, "Excellent breakfast carb source"],
                    ["Whole Wheat Bread", 9, 49, 4.2, 247, "Rich in fiber and B-vitamins"],
                    ["Banana", 1.1, 23, 0.3, 96, "Good pre-workout carb source"],
                    ["Apple (Raw)", 0.3, 14, 0.2, 52, "Rich in antioxidants and fiber"],
                    ["Sweet Potato (Boiled)", 1.6, 20, 0.1, 86, "Complex carbs with vitamins"],
                    ["Avocado", 2, 9, 15, 160, "Healthy monounsaturated fat"],
                    ["Almonds", 21, 22, 50, 579, "Nutrient-dense, good fat source"],
                    ["Peanuts", 25, 16, 49, 567, "High in protein and healthy fats"],
                    ["Walnuts", 15, 14, 65, 654, "High in omega-3 fats"],
                    ["Olive Oil", 0, 0, 100, 884, "100% fat — excellent for cooking"],
                    ["Butter", 0.8, 0, 81, 717, "High saturated fat; use sparingly"],
                    ["Milk (Whole)", 3.4, 5, 3.3, 61, "Balanced macro beverage"],
                    ["Greek Yogurt (Plain, Low Fat)", 10, 3.6, 0.4, 59, "Great source of probiotics"],
                    ["Cheddar Cheese", 25, 1.3, 33, 403, "High fat and calcium"],
                    ["Protein Shake (Whey)", 80, 5, 4, 400, "Supplemented protein source (per 100g powder)"],
                    ["Quinoa (Cooked)", 4.1, 21, 1.9, 120, "Complete plant protein"],
                    ["Broccoli (Boiled)", 2.8, 7, 0.4, 35, "Low-calorie, high micronutrient food"],
                  ].map((item, i) => (
                    <tr key={i}>
                      {item.map((val, j) => (
                        <td key={j} className="border px-3 py-2">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Facts */}
            <h3 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
              5.2 Macronutrient Quick Facts
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="border px-3 py-2">Macronutrient</th>
                    <th className="border px-3 py-2">Calories per Gram</th>
                    <th className="border px-3 py-2">Main Function</th>
                    <th className="border px-3 py-2">Ideal Daily Range (% of Total Calories)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Protein</td>
                    <td className="border px-3 py-2">4 kcal</td>
                    <td className="border px-3 py-2">Builds and repairs tissues</td>
                    <td className="border px-3 py-2">10–35%</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Carbohydrates</td>
                    <td className="border px-3 py-2">4 kcal</td>
                    <td className="border px-3 py-2">Primary energy source</td>
                    <td className="border px-3 py-2">45–65%</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Fat</td>
                    <td className="border px-3 py-2">9 kcal</td>
                    <td className="border px-3 py-2">
                      Supports hormones, absorption, and energy storage
                    </td>
                    <td className="border px-3 py-2">20–35%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* How to Use Table */}
            <h3 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
              5.3 How to Use This Table
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>For Weight Loss:</strong> Choose foods high in protein and
                fiber but low in calories and fat (e.g., chicken breast, lentils, egg
                whites).
              </li>
              <li>
                <strong>For Weight Gain:</strong> Include calorie-dense, healthy fats
                (e.g., nuts, peanut butter, whole milk).
              </li>
              <li>
                <strong>For Balanced Maintenance:</strong> Combine lean proteins,
                whole grains, fruits, and healthy fats proportionally.
              </li>
            </ul>
          </div>
          <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        What Are Advanced Dietary Strategies?
      </h1>

      <p className="mb-4">
        <strong>Advanced Dietary Strategies</strong> are structured, science-based
        approaches to nutrition that go beyond simple “calories in vs. calories out.”
        These methods focus not only on how much you eat, but also on what, when, and
        how you eat — helping you achieve specific physiological and psychological
        goals.
      </p>

      <p className="mb-4">
        Think of it like this:
        <br />
        <strong>Basic Dieting:</strong> Driving a car with just an accelerator and brake
        (calories).
        <br />
        <strong>Advanced Dieting:</strong> Driving a manual transmission car, where you
        strategically use gears and timing (nutrient cycling, fasting, meal timing) for
        better performance and efficiency.
      </p>

      {/* Core Principles */}
      <h2 className="text-2xl font-semibold text-blue-900 mb-3">
        Core Principles of Advanced Strategies
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Metabolic Manipulation:</strong> Preventing or reversing the slowdown
          in metabolism that often occurs with long-term calorie restriction.
        </li>
        <li>
          <strong>Hormonal Optimization:</strong> Regulating key hormones like insulin,
          leptin, and cortisol to improve fat-burning and energy balance.
        </li>
        <li>
          <strong>Nutrient Timing:</strong> Placing carbohydrates and proteins
          strategically around workouts for better recovery and performance.
        </li>
        <li>
          <strong>Psychological Sustainability:</strong> Including planned breaks or
          refeeds to maintain motivation and prevent diet burnout.
        </li>
        <li>
          <strong>Nutrient Partitioning:</strong> Directing nutrients (especially
          carbohydrates) toward muscle recovery instead of fat storage.
        </li>
      </ul>

      {/* Key Characteristics Table */}
      <h2 className="text-2xl font-semibold text-blue-900 mb-3">
        Key Characteristics
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="border px-4 py-2">Sl#</th>
              <th className="border px-4 py-2">Feature</th>
              <th className="border px-4 py-2">Basic Dieting</th>
              <th className="border px-4 py-2">Advanced Dieting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Focus</td>
              <td className="border px-4 py-2">Total Daily Calorie Intake</td>
              <td className="border px-4 py-2">
                Calories, Macronutrients, Timing, Cycling
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">Complexity</td>
              <td className="border px-4 py-2">Simple, static targets</td>
              <td className="border px-4 py-2">
                Dynamic, requires planning & tracking
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">Goal</td>
              <td className="border px-4 py-2">
                Create a consistent calorie deficit/surplus
              </td>
              <td className="border px-4 py-2">
                Optimize metabolism, hormones, and performance
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4</td>
              <td className="border px-4 py-2">Best For</td>
              <td className="border px-4 py-2">
                Beginners, simple weight management
              </td>
              <td className="border px-4 py-2">
                Athletes, bodybuilders, experienced dieters
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      

          </div>        
          <div className="p-6 max-w-5xl mx-auto text-gray-800 leading-relaxed">
            {/* Main Header */}
            <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Advanced Dietary Strategies Tools of Nutrition
            </h1>

            {/* Sub Header */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              1. Zigzag Calorie Cycling
            </h2>

            <p className="mb-4">
              <strong>Zigzag Calorie Cycling</strong> (also called Calorie Zigzagging
              or Caloric Rotation) is a flexible dieting method where you alternate
              your daily calorie intake—some days are higher in calories, and some
              days are lower. The goal is to support fat loss, muscle gain, and
              metabolic health while avoiding the plateaus and fatigue that often come
              with eating the same number of calories every day.
            </p>

            <p className="mb-6">
              In essence, it’s about changing daily calories while maintaining the
              same weekly average — giving your body and mind a break from consistent
              restriction.
            </p>

            {/* Detailed Explanation */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Detailed Explanation
            </h3>
            <p className="mb-4">
              When you eat the exact same number of calories every day, your body
              adapts. Over time, metabolism slows, fat loss stalls, and energy levels
              drop. Zigzag calorie cycling interrupts this adaptation by varying
              calorie intake from day to day — keeping your metabolism responsive and
              your motivation higher.
            </p>

            <ul className="list-disc list-inside mb-6">
              <li>Weight loss programs (to prevent metabolic slowdown)</li>
              <li>Body recomposition phases (to lose fat and maintain/gain muscle)</li>
              <li>
                Athlete performance programs (to match calorie intake to training
                intensity)
              </li>
            </ul>

            {/* How It Works */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">How It Works</h3>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>
                <strong>Determine your weekly maintenance calories:</strong>  
                Example: Maintenance = 2,400 kcal/day → 16,800 kcal/week (2,400 × 7).
              </li>
              <li>
                <strong>Create a weekly plan with high and low days:</strong>  
                The total for the week stays around 16,800 kcal, but daily intake varies.
              </li>
            </ol>

            {/* Table Example 1 */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border px-3 py-2">Day</th>
                    <th className="border px-3 py-2">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Monday</td>
                    <td className="border px-3 py-2">1,800 (Low)</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Tuesday</td>
                    <td className="border px-3 py-2">2,300 (Medium)</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Wednesday</td>
                    <td className="border px-3 py-2">1,900 (Low)</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Thursday</td>
                    <td className="border px-3 py-2">2,400 (High)</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Friday</td>
                    <td className="border px-3 py-2">1,800 (Low)</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Saturday</td>
                    <td className="border px-3 py-2">2,600 (High/Refuel)</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Sunday</td>
                    <td className="border px-3 py-2">2,000 (Medium)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6">
              Weekly Total = 14,800 kcal (avg 2,114/day) → moderate calorie deficit
              but metabolism stays active.
            </p>

            {/* Scientific Principle */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Scientific Principle Behind It
            </h3>
            <ul className="list-disc list-inside mb-6">
              <li>
                Constant calorie restriction can suppress leptin (hunger hormone) and
                slow down metabolism.
              </li>
              <li>
                Occasional high-calorie days help boost leptin, improving fat-burning
                efficiency.
              </li>
              <li>
                Alternating calories prevents adaptation to low intake, reducing
                plateaus.
              </li>
              <li>
                Aligns with training periodization — matching nutrition to intensity.
              </li>
            </ul>

            {/* Merits */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Merits</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Prevents metabolic slowdown</li>
              <li>Better adherence and flexibility</li>
              <li>Improved muscle retention and energy for training</li>
              <li>Supports hormonal balance and long-term sustainability</li>
            </ul>

            {/* Demerits */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Demerits</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Complex to plan and track</li>
              <li>Risk of overeating on high-calorie days</li>
              <li>Progress depends on total weekly intake</li>
              <li>May cause stress for some individuals</li>
            </ul>

            {/* Summary Table */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Summary Table</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border px-3 py-2">Aspect</th>
                    <th className="border px-3 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Definition</td>
                    <td className="border px-3 py-2">
                      Alternating daily calorie intake while maintaining weekly average
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Primary Goal</td>
                    <td className="border px-3 py-2">
                      Prevent metabolic slowdown, support fat loss while preserving muscle
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Best For</td>
                    <td className="border px-3 py-2">
                      Intermediate/advanced dieters, athletes, bodybuilders
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Key Benefit</td>
                    <td className="border px-3 py-2">
                      Avoids plateaus and keeps metabolism active
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Main Drawback</td>
                    <td className="border px-3 py-2">
                      Planning complexity and potential for overeating
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Practical Example */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Practical Example (Simple Plan for 2000 kcal average goal)
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border px-3 py-2">Day</th>
                    <th className="border px-3 py-2">Goal</th>
                    <th className="border px-3 py-2">Calories</th>
                    <th className="border px-3 py-2">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Monday</td>
                    <td className="border px-3 py-2">Low</td>
                    <td className="border px-3 py-2">1600</td>
                    <td className="border px-3 py-2">High protein, low carb</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Tuesday</td>
                    <td className="border px-3 py-2">High</td>
                    <td className="border px-3 py-2">2400</td>
                    <td className="border px-3 py-2">Training day, more carbs</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Wednesday</td>
                    <td className="border px-3 py-2">Medium</td>
                    <td className="border px-3 py-2">2000</td>
                    <td className="border px-3 py-2">Balanced intake</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Thursday</td>
                    <td className="border px-3 py-2">Low</td>
                    <td className="border px-3 py-2">1700</td>
                    <td className="border px-3 py-2">Active rest</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Friday</td>
                    <td className="border px-3 py-2">High</td>
                    <td className="border px-3 py-2">2500</td>
                    <td className="border px-3 py-2">Heavy workout</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Saturday</td>
                    <td className="border px-3 py-2">Medium</td>
                    <td className="border px-3 py-2">2000</td>
                    <td className="border px-3 py-2">Balanced</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Sunday</td>
                    <td className="border px-3 py-2">Low</td>
                    <td className="border px-3 py-2">1600</td>
                    <td className="border px-3 py-2">Rest day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6">
              Weekly total = 13,800 kcal (average = 1,971 kcal/day) → still a deficit,
              but your metabolism stays active.
            </p>

            {/* Conclusion */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Conclusion</h3>
            <p>
              <strong>Zigzag Calorie Cycling</strong> is a smart, adaptable nutrition
              strategy that alternates calorie intake to keep your metabolism active,
              improve adherence, and support long-term fat loss. It’s not magic —
              overall weekly calorie balance still determines results — but it can
              make the process more effective and sustainable by matching food intake
              to activity levels and psychological needs.
            </p>
          </div>
          <div className="p-6 max-w-5xl mx-auto text-gray-800 leading-relaxed">
            {/* Sub Header */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              2. Carb Cycling
            </h2>

            <p className="mb-4">
              <strong>Carb Cycling</strong> is a dietary strategy where you alternate
              your carbohydrate intake on different days — typically switching between
              high-carb, low-carb, and sometimes no-carb days. The main goal is to
              optimize the benefits of carbohydrates (such as energy and muscle
              growth) while minimizing their potential downsides (like fat storage or
              insulin resistance).
            </p>

            <p className="mb-4">
              Carb Cycling is a planned manipulation of carbohydrate intake based on
              your training intensity, body composition goals, or metabolic needs. It
              is often used by athletes, bodybuilders, and fitness enthusiasts to:
            </p>

            <ul className="list-disc list-inside mb-4">
              <li>Maximize fat loss</li>
              <li>Preserve lean muscle mass</li>
              <li>Improve training performance</li>
            </ul>

            <p className="mb-6">
              Instead of consuming the same number of carbs every day, you adjust your
              intake to fit your energy expenditure.
            </p>

            <ul className="list-disc list-inside mb-6">
              <li>
                <strong>High-Carb Days →</strong> On intense workout or training days
              </li>
              <li>
                <strong>Low-Carb Days →</strong> On rest or light activity days
              </li>
              <li>
                <strong>Moderate-Carb Days →</strong> On medium-intensity training
                days
              </li>
            </ul>

            {/* How It Works */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              How Carb Cycling Works
            </h3>
            <p className="mb-4">
              Carbohydrates are the body’s primary source of energy. When you eat
              carbs, your body releases insulin, a hormone that helps store glucose
              (from carbs) as energy in muscles or fat cells.
            </p>

            <p className="mb-4">
              By cycling carbs:
              <br />• On high-carb days, you refill muscle glycogen stores → improving
              workout performance and recovery.
              <br />• On low-carb days, your body is encouraged to use stored fat for
              energy → aiding fat loss.
            </p>

            <p className="mb-6">
              This cycle aims to balance fat burning and muscle building depending on
              your goals.
            </p>

            {/* Example Weekly Carb Cycling Plan */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Example Weekly Carb Cycling Plan
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border px-3 py-2">Day</th>
                    <th className="border px-3 py-2">Carb Level</th>
                    <th className="border px-3 py-2">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Monday</td>
                    <td className="border px-3 py-2">High-Carb</td>
                    <td className="border px-3 py-2">Leg workout (intense day)</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Tuesday</td>
                    <td className="border px-3 py-2">Low-Carb</td>
                    <td className="border px-3 py-2">Rest day</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Wednesday</td>
                    <td className="border px-3 py-2">Moderate-Carb</td>
                    <td className="border px-3 py-2">Upper body workout</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Thursday</td>
                    <td className="border px-3 py-2">Low-Carb</td>
                    <td className="border px-3 py-2">Light cardio</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Friday</td>
                    <td className="border px-3 py-2">High-Carb</td>
                    <td className="border px-3 py-2">
                      Full-body strength training
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Saturday</td>
                    <td className="border px-3 py-2">Moderate-Carb</td>
                    <td className="border px-3 py-2">Active recovery</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Sunday</td>
                    <td className="border px-3 py-2">Low-Carb</td>
                    <td className="border px-3 py-2">Rest day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Macronutrient Ratio Table */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Typical Macronutrient Ratio per Day
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border px-3 py-2">Type of Day</th>
                    <th className="border px-3 py-2">Carbs</th>
                    <th className="border px-3 py-2">Protein</th>
                    <th className="border px-3 py-2">Fat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">High-Carb</td>
                    <td className="border px-3 py-2">50–60%</td>
                    <td className="border px-3 py-2">25–30%</td>
                    <td className="border px-3 py-2">15–20%</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Moderate-Carb</td>
                    <td className="border px-3 py-2">35–45%</td>
                    <td className="border px-3 py-2">30–35%</td>
                    <td className="border px-3 py-2">25–30%</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Low-Carb</td>
                    <td className="border px-3 py-2">10–20%</td>
                    <td className="border px-3 py-2">40–50%</td>
                    <td className="border px-3 py-2">30–40%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Merits */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Merits (Advantages) of Carb Cycling
            </h3>
            <ul className="list-decimal list-inside mb-6 space-y-1">
              <li>
                <strong>Enhanced Fat Loss:</strong> Low-carb days reduce insulin and
                boost fat oxidation.
              </li>
              <li>
                <strong>Muscle Preservation:</strong> High-carb days replenish glycogen
                and protect muscle mass.
              </li>
              <li>
                <strong>Improved Metabolic Flexibility:</strong> Trains the body to
                efficiently switch between fat and carbs.
              </li>
              <li>
                <strong>Better Workout Performance:</strong> High-carb days fuel
                strength and endurance.
              </li>
              <li>
                <strong>Hormonal Balance:</strong> Maintains leptin and thyroid
                function.
              </li>
              <li>
                <strong>Mental Relief:</strong> Allows psychological flexibility and
                enjoyment of carbs.
              </li>
            </ul>

            {/* Demerits */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Demerits (Disadvantages) of Carb Cycling
            </h3>
            <ul className="list-decimal list-inside mb-6 space-y-1">
              <li>Complex to plan and track carbs accurately</li>
              <li>Energy fluctuations and fatigue on low-carb days</li>
              <li>Risk of overeating on high-carb days</li>
              <li>Hard to sustain long-term due to strict structure</li>
              <li>Potential hormonal stress if misused</li>
              <li>Not suitable for individuals with blood sugar issues</li>
            </ul>

            {/* Who Can Benefit */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Who Can Benefit from Carb Cycling
            </h3>
            <ul className="list-disc list-inside mb-6">
              <li>Athletes or bodybuilders in cutting/bulking cycles</li>
              <li>People experienced with tracking macros</li>
              <li>Those hitting fat-loss plateaus</li>
            </ul>

            <p className="mb-6">
              Not ideal for beginners, individuals with eating disorders, or those with
              blood sugar problems.
            </p>

            {/* Sample Foods Table */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Sample Foods for Each Carb Day
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border px-3 py-2">Carb Day</th>
                    <th className="border px-3 py-2">Food Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">High-Carb</td>
                    <td className="border px-3 py-2">
                      Brown rice, quinoa, oats, sweet potatoes, fruits, whole grains
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Moderate-Carb</td>
                    <td className="border px-3 py-2">
                      Beans, lentils, starchy vegetables, yogurt
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Low-Carb</td>
                    <td className="border px-3 py-2">
                      Leafy greens, eggs, fish, avocados, nuts, olive oil
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary Table */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Summary</h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border px-3 py-2">Aspect</th>
                    <th className="border px-3 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Concept</td>
                    <td className="border px-3 py-2">
                      Alternating carb intake based on activity level
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Goal</td>
                    <td className="border px-3 py-2">
                      Maximize fat loss and muscle gain while maintaining energy
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Key Benefit</td>
                    <td className="border px-3 py-2">
                      Flexibility, improved metabolism, and performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Key Drawback</td>
                    <td className="border px-3 py-2">
                      Complex tracking and potential inconsistency
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-6 space-y-6 text-gray-800">
            {/* Main Header */}
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              3. Intermittent Fasting (IF)
            </h1>

            {/* Intro */}
            <p>
              <strong>Intermittent Fasting (IF)</strong> is a structured eating pattern that alternates
              between periods of eating and fasting. Unlike traditional diets that focus on
              <em> what to eat</em>, intermittent fasting focuses on <em>when to eat</em>. It’s not about
              starving yourself — rather, it’s about giving your body scheduled breaks from food to
              improve metabolism, fat burning, and cellular repair.
            </p>

            <p>
              During fasting, your body:
              <ul className="list-disc list-inside ml-4">
                <li>Reduces insulin levels</li>
                <li>Uses stored body fat for energy</li>
                <li>Activates autophagy — a natural process of cellular repair</li>
              </ul>
            </p>

            <p>
              IF doesn’t prescribe specific foods — instead, it focuses on timing your meals to optimize
              body function and metabolism.
            </p>

            {/* Subheader */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Popular Intermittent Fasting Methods
            </h2>

            {/* Table 1 */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-3 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border px-4 py-2 text-left">IF Method</th>
                    <th className="border px-4 py-2 text-left">Fasting : Eating Window</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["16/8 Method", "16 hours fast, 8 hours eat", "Most common; eat from 12 pm – 8 pm"],
                    ["14/10 Method", "14 hours fast, 10 hours eat", "Beginner-friendly"],
                    ["18/6 Method", "18 hours fast, 6 hours eat", "For experienced fasters; more intense"],
                    ["5:2 Diet", "5 days normal eating, 2 days low-calorie (500–600 kcal)", "Popular among dieters"],
                    ["Eat-Stop-Eat", "24-hour fast once or twice a week", "Full-day fasting method"],
                    ["Alternate-Day Fasting", "Eat normally one day, restrict next", "More aggressive approach"],
                    ["OMAD", "23-hour fast, 1-hour eat", "Advanced fasting form"],
                  ].map(([method, window, desc], i) => (
                    <tr key={i}>
                      <td className="border px-4 py-2">{method}</td>
                      <td className="border px-4 py-2">{window}</td>
                      <td className="border px-4 py-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* How it Works */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              How Intermittent Fasting Works
            </h2>
            <p>
              When you eat, your body uses glucose (from carbs) as its main energy source. During fasting:
            </p>
            <ol className="list-decimal list-inside ml-4">
              <li>Insulin levels drop → fat stores are unlocked.</li>
              <li>Growth hormone increases → helps preserve muscle and burn fat.</li>
              <li>Cells begin repair (autophagy) → removing old or damaged components.</li>
              <li>Fat oxidation increases → body burns fat for energy instead of glucose.</li>
            </ol>

            {/* Table 2 */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Physiological Effects of IF
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-3 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border px-4 py-2 text-left">Effect</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["↓ Insulin Resistance", "Improves blood sugar control"],
                    ["↑ Growth Hormone", "Enhances fat metabolism and muscle retention"],
                    ["↑ Autophagy", "Promotes cell repair and longevity"],
                    ["↓ Inflammation", "Reduces oxidative stress"],
                    ["↑ Ketone Production", "Provides alternative fuel for the brain"],
                  ].map(([effect, desc], i) => (
                    <tr key={i}>
                      <td className="border px-4 py-2">{effect}</td>
                      <td className="border px-4 py-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Example Schedule */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Example: 16/8 IF Daily Schedule
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-3 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border px-4 py-2 text-left">Time</th>
                    <th className="border px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["8:00 PM", "Finish dinner (begin fasting)"],
                    ["8:00 PM – 12:00 PM", "Fasting period (black coffee, tea, or water allowed)"],
                    ["12:00 PM", "Break fast with balanced meal (protein + carbs + fat)"],
                    ["3:30 PM", "Light snack (fruit or nuts)"],
                    ["7:30 PM", "Dinner (lean protein + vegetables)"],
                    ["8:00 PM", "Start fasting again"],
                  ].map(([time, action], i) => (
                    <tr key={i}>
                      <td className="border px-4 py-2">{time}</td>
                      <td className="border px-4 py-2">{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Foods */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              What to Eat During Eating Window
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Protein:</strong> Chicken, fish, eggs, Greek yogurt</li>
              <li><strong>Healthy fats:</strong> Avocado, olive oil, nuts, seeds</li>
              <li><strong>Complex carbs:</strong> Quinoa, oats, sweet potatoes, whole grains</li>
              <li><strong>Fruits & veggies:</strong> High-fiber, antioxidant-rich foods</li>
              <li><strong>Hydration:</strong> Water, black coffee, green tea</li>
            </ul>

            {/* Merits */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Merits (Advantages) of Intermittent Fasting
            </h2>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Promotes Fat Loss</li>
              <li>Improves Insulin Sensitivity</li>
              <li>Supports Cellular Repair (Autophagy)</li>
              <li>Enhances Brain Health</li>
              <li>May Extend Lifespan</li>
              <li>Simplifies Dieting</li>
              <li>Boosts Energy and Mental Clarity</li>
            </ol>

            {/* Demerits */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Demerits (Disadvantages) of Intermittent Fasting
            </h2>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Initial Hunger and Irritability</li>
              <li>Overeating During Eating Window</li>
              <li>May Affect Hormonal Balance (in Women)</li>
              <li>Not Suitable for Everyone</li>
              <li>Possible Muscle Loss (if protein is low)</li>
              <li>Social Inconvenience</li>
            </ol>

            {/* Summary */}
            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Summary Table
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-3 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border px-4 py-2 text-left">Aspect</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Definition", "Eating pattern alternating fasting and eating periods"],
                    ["Goal", "Weight loss, metabolic health, longevity"],
                    ["Key Benefit", "Fat burning, improved insulin sensitivity, cellular repair"],
                    ["Key Drawback", "Hunger, social difficulty, not ideal for everyone"],
                    ["Popular Type", "16/8 Method"],
                    ["Suitable For", "Intermediate or advanced dieters, not beginners"],
                  ].map(([aspect, desc], i) => (
                    <tr key={i}>
                      <td className="border px-4 py-2">{aspect}</td>
                      <td className="border px-4 py-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="max-w-4xl mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">4. Refeed Days</h1>

            <p className="mb-4">
              A <strong>Refeed Day</strong> is a planned, temporary increase in calorie
              (mainly carbohydrate) intake after several days or weeks of eating in a
              calorie deficit. It’s not a cheat day. The purpose is strategic — to:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Replenish glycogen stores (muscle energy)</li>
              <li>Restore hormonal balance, especially leptin and thyroid hormones</li>
              <li>Boost metabolism temporarily</li>
              <li>Provide mental and physical relief from dieting fatigue</li>
            </ul>

            <p className="mb-4 font-medium text-blue-900">
              In short: A refeed day helps your body and mind recover from continuous
              calorie restriction.
            </p>

            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              How Refeed Days Work
            </h2>
            <p className="mb-4">
              When you’re in a calorie deficit (eating less than you burn), your body
              loses fat but also slows down metabolism over time:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Leptin (hunger-regulating hormone) drops</li>
              <li>Thyroid hormones (T3/T4) reduce, slowing fat burning</li>
              <li>Glycogen levels decrease, causing fatigue</li>
              <li>Cortisol (stress hormone) may rise</li>
            </ul>

            <p className="mb-4">
              By temporarily raising carbs and calories, you signal to your body:{" "}
              <strong>“Food is available — you can safely keep burning fat.”</strong>
              <br />
              This helps maintain metabolism and performance without undoing fat loss
              progress.
            </p>

            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              Key Difference: Refeed Day vs Cheat Day
            </h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border p-2">Aspect</th>
                    <th className="border p-2">Refeed Day</th>
                    <th className="border p-2">Cheat Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Purpose</td>
                    <td className="border p-2">Hormonal & metabolic reset</td>
                    <td className="border p-2">Indulgence or break from diet</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Focus</td>
                    <td className="border p-2">Controlled carb increase</td>
                    <td className="border p-2">Uncontrolled food intake</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Calorie Control</td>
                    <td className="border p-2">Slight surplus (~10–30%)</td>
                    <td className="border p-2">
                      Often large surplus (can double maintenance)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Food Quality</td>
                    <td className="border p-2">Clean, complex carbs</td>
                    <td className="border p-2">Junk, high-fat, processed foods</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Goal</td>
                    <td className="border p-2">Support long-term fat loss</td>
                    <td className="border p-2">
                      Psychological relief, often leads to guilt
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6">
              A refeed is planned, calculated, and clean, while a cheat day is
              impulsive and often counterproductive.
            </p>

            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              How to Implement a Refeed Day
            </h2>

            <h3 className="text-xl font-semibold text-blue-900 mt-4 mb-2">1. Frequency</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Every 7–14 days for moderate calorie deficits</li>
              <li>Every 2–3 weeks for smaller deficits</li>
              <li>Athletes or lean individuals may need it weekly</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              2. Macronutrient Adjustments
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Carbs: Increase by 50–100% (primary energy source)</li>
              <li>Protein: Keep the same (muscle protection)</li>
              <li>Fats: Keep low to moderate (to avoid excessive calories)</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              3. Calorie Increase Example
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border p-2">Type</th>
                    <th className="border p-2">Normal Day</th>
                    <th className="border p-2">Refeed Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Calories</td>
                    <td className="border p-2">1,800 kcal</td>
                    <td className="border p-2">2,200–2,400 kcal</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Carbs</td>
                    <td className="border p-2">150 g</td>
                    <td className="border p-2">250–300 g</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Protein</td>
                    <td className="border p-2">150 g</td>
                    <td className="border p-2">150 g</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Fat</td>
                    <td className="border p-2">60 g</td>
                    <td className="border p-2">50 g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Sample Refeed Day Foods
            </h2>

            <p className="mb-2">Focus on complex, low-fat carbohydrates to refill glycogen without excessive fat gain:</p>
            <p className="font-semibold mb-1">Good Choices:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Brown rice, quinoa, oats</li>
              <li>Sweet potatoes, whole-grain pasta</li>
              <li>Fruits (bananas, apples, berries)</li>
              <li>Whole-grain bread</li>
              <li>Lentils and beans</li>
            </ul>

            <p className="font-semibold mb-1">Avoid:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fried foods</li>
              <li>Sugary desserts</li>
              <li>Alcohol</li>
              <li>High-fat junk (pizza, burgers, etc.)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Merits (Advantages) of Refeed Days
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Restores leptin levels and reduces hunger</li>
              <li>Prevents metabolic slowdown</li>
              <li>Replenishes muscle glycogen</li>
              <li>Boosts mood and motivation</li>
              <li>Supports hormonal balance</li>
              <li>Reduces plateau risk</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Demerits (Disadvantages) of Refeed Days
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Can lead to overeating if not tracked properly</li>
              <li>May cause temporary water weight gain</li>
              <li>Requires discipline and control</li>
              <li>Not necessary for beginners</li>
              <li>Can cause digestive discomfort from sudden carb increase</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Who Should Use Refeed Days
            </h2>
            <p className="font-semibold mb-1">Best For:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>People dieting for fat loss over 6+ weeks</li>
              <li>Athletes, bodybuilders, or intense trainers</li>
              <li>Leaner individuals (&lt;15% body fat for men, &lt;25% for women)</li>
            </ul>

            <p className="font-semibold mb-1">Avoid / Not Needed If:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>You’re new to dieting or early in fat loss</li>
              <li>You’re not in a calorie deficit</li>
              <li>You struggle with portion control</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              Summary Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border p-2">Aspect</th>
                    <th className="border p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Definition</td>
                    <td className="border p-2">
                      Planned increase in carbs/calories to restore metabolism and hormones
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Goal</td>
                    <td className="border p-2">
                      Prevent fat loss plateau, support performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Main Nutrient Increased</td>
                    <td className="border p-2">Carbohydrates</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Frequency</td>
                    <td className="border p-2">
                      Every 1–2 weeks (based on activity and leanness)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Key Benefits</td>
                    <td className="border p-2">
                      Boosts metabolism, leptin, mood, and training energy
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Key Drawbacks</td>
                    <td className="border p-2">
                      Risk of overeating, water gain, requires discipline
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Ideal For</td>
                    <td className="border p-2">
                      Experienced dieters or athletes under calorie restriction
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="max-w-5xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          5. Protein Sparing Modified Fast (PSMF)
        </h1>

        <p className="mb-4">
          The <strong>Protein Sparing Modified Fast (PSMF)</strong> is a very
          low-calorie, high-protein, low-carbohydrate, and low-fat diet designed
          to maximize fat loss while preserving lean muscle mass. The concept is
          simple:
          <span className="italic block text-blue-900 mt-1">
            “Lose fat fast, but spare your muscle.”
          </span>
        </p>

        <p className="mb-4">
          It is not a permanent diet — typically used for short-term, medically
          supervised rapid fat loss phases (often 2–12 weeks). Originally developed
          in the 1970s for obese patients, it’s now popular among advanced fitness
          individuals and athletes before competitions.
        </p>

        {/* How it works */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          How PSMF Works
        </h2>
        <p className="mb-4">
          When you drastically cut calories, your body tends to burn muscle along
          with fat for energy. PSMF prevents muscle loss by supplying adequate
          protein while restricting carbs and fats to push the body into
          fat-burning mode.
        </p>

        <p className="font-semibold mb-2">Mechanism:</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>Low carbs → deplete glycogen → promote fat oxidation (fat burning).</li>
          <li>Low fat intake → forces body to use stored fat for energy.</li>
          <li>High protein → preserves lean muscle and supports recovery.</li>
          <li>Calorie deficit → leads to rapid fat loss.</li>
        </ol>

        <p className="mb-6">
          It’s essentially a scientifically controlled fasting protocol that
          provides just enough nutrients to sustain vital functions.
        </p>

        {/* Macronutrient Table */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Typical Macronutrient Ratios
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border p-2">Nutrient</th>
                <th className="border p-2">Approximate % of Calories</th>
                <th className="border p-2">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Protein</td>
                <td className="border p-2">60–70%</td>
                <td className="border p-2">Muscle preservation</td>
              </tr>
              <tr>
                <td className="border p-2">Carbohydrates</td>
                <td className="border p-2">5–10%</td>
                <td className="border p-2">Minimal for metabolism</td>
              </tr>
              <tr>
                <td className="border p-2">Fat</td>
                <td className="border p-2">10–20%</td>
                <td className="border p-2">Only from lean protein sources</td>
              </tr>
              <tr>
                <td className="border p-2">Calories</td>
                <td className="border p-2">600–1,000 kcal/day (approx.)</td>
                <td className="border p-2">Deep caloric deficit</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Protein Requirement */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          Protein Requirement
        </h2>
        <p className="mb-4">
          Protein intake is based on <strong>lean body mass (LBM)</strong> — not
          total weight. Recommended intake:
        </p>
        <p className="mb-4">
          👉 <strong>1.2–1.5 grams of protein per pound of lean body mass (LBM)</strong>
        </p>
        <p className="mb-4">
          Example: If a person has 150 lb LBM, daily protein = <strong>180–225 g</strong>.
          Protein sources should be very lean to minimize fat intake.
        </p>

        {/* Typical Foods */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Typical Foods Allowed on PSMF
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border p-2">Category</th>
                <th className="border p-2">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Lean Proteins</td>
                <td className="border p-2">
                  Chicken breast, turkey, white fish (cod, tilapia), shrimp, egg whites
                </td>
              </tr>
              <tr>
                <td className="border p-2">Low-Fat Dairy (optional)</td>
                <td className="border p-2">Non-fat Greek yogurt, cottage cheese</td>
              </tr>
              <tr>
                <td className="border p-2">Low-Carb Vegetables</td>
                <td className="border p-2">
                  Spinach, lettuce, cucumber, broccoli, cauliflower, zucchini
                </td>
              </tr>
              <tr>
                <td className="border p-2">Drinks</td>
                <td className="border p-2">Water, green tea, black coffee</td>
              </tr>
              <tr>
                <td className="border p-2">Supplements</td>
                <td className="border p-2">
                  Multivitamin, potassium, sodium, magnesium, fish oil
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-semibold mb-1">Avoid:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>All grains, fruits, and starchy vegetables</li>
          <li>Dairy with fat</li>
          <li>Oils, butter, nuts, seeds, sugary drinks, alcohol</li>
        </ul>

        {/* Phases */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">Phases of PSMF</h2>
        <p className="font-semibold">Rapid Fat Loss Phase (Active Phase)</p>
        <ul className="list-disc pl-6 mb-4">
          <li>2–6 weeks (up to 12 weeks under supervision)</li>
          <li>Strict adherence to protein + vegetables only</li>
        </ul>

        <p className="font-semibold">Refeed / Transition Phase</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Gradual reintroduction of carbohydrates and fats</li>
          <li>Prevents rebound weight gain</li>
          <li>Typically lasts 2–4 weeks</li>
        </ul>

        {/* Physiological Effects */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Physiological Effects
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border p-2">Effect</th>
                <th className="border p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Fat Loss</td>
                <td className="border p-2">Rapid due to severe calorie deficit</td>
              </tr>
              <tr>
                <td className="border p-2">Muscle Preservation</td>
                <td className="border p-2">
                  Maintained through high protein intake
                </td>
              </tr>
              <tr>
                <td className="border p-2">Insulin Reduction</td>
                <td className="border p-2">
                  Stabilizes blood sugar and promotes fat metabolism
                </td>
              </tr>
              <tr>
                <td className="border p-2">Glycogen Depletion</td>
                <td className="border p-2">Encourages stored fat use</td>
              </tr>
              <tr>
                <td className="border p-2">Ketosis (partial)</td>
                <td className="border p-2">
                  Some individuals may enter mild ketosis
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Merits */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          Merits (Advantages) of PSMF
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Extremely rapid fat loss (1.5–2.5 kg per week in early phases)</li>
          <li>Preserves muscle mass</li>
          <li>Improves insulin sensitivity and glucose control</li>
          <li>Reduces appetite due to high protein and mild ketosis</li>
          <li>Quick visible results boost motivation</li>
          <li>Clinically beneficial for obesity management</li>
        </ul>

        {/* Demerits */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          Demerits (Disadvantages) of PSMF
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Nutrient deficiency risk — requires supplements for vitamins and minerals
          </li>
          <li>Difficult to sustain long-term</li>
          <li>May cause fatigue, dizziness, and energy crashes</li>
          <li>Potential hormonal disruption if used too long</li>
          <li>Rebound weight gain if transition is mishandled</li>
          <li>Not suitable for individuals with certain medical conditions</li>
        </ul>

        {/* Who Should Use */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          Who Should Use PSMF
        </h2>
        <p className="font-semibold mb-1">Ideal Candidates:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Severely overweight or obese individuals needing fast results</li>
          <li>Athletes or bodybuilders before competition</li>
          <li>People under professional or medical supervision</li>
        </ul>

        <p className="font-semibold mb-1">Not Suitable For:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Children or pregnant/breastfeeding women</li>
          <li>Individuals with kidney, liver, or heart conditions</li>
          <li>Those prone to eating disorders</li>
          <li>Anyone unable to maintain strict dietary adherence</li>
        </ul>

        {/* Summary Table */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Summary Table
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border p-2">Aspect</th>
                <th className="border p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Definition</td>
                <td className="border p-2">
                  High-protein, very-low-calorie, low-carb, low-fat diet for rapid fat loss
                </td>
              </tr>
              <tr>
                <td className="border p-2">Main Goal</td>
                <td className="border p-2">
                  Preserve muscle while losing fat quickly
                </td>
              </tr>
              <tr>
                <td className="border p-2">Calories/day</td>
                <td className="border p-2">600–1,000 kcal</td>
              </tr>
              <tr>
                <td className="border p-2">Protein Intake</td>
                <td className="border p-2">1.2–1.5 g/lb of lean mass</td>
              </tr>
              <tr>
                <td className="border p-2">Duration</td>
                <td className="border p-2">2–12 weeks (short term)</td>
              </tr>
              <tr>
                <td className="border p-2">Key Benefits</td>
                <td className="border p-2">
                  Rapid fat loss, muscle preservation, improved metabolic health
                </td>
              </tr>
              <tr>
                <td className="border p-2">Key Drawbacks</td>
                <td className="border p-2">
                  Nutrient deficiency, energy crash, hard to sustain, rebound risk
                </td>
              </tr>
              <tr>
                <td className="border p-2">Supervision Needed</td>
                <td className="border p-2">
                  Yes — ideally medical or professional
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          In Simple Terms
        </h2>
        <p>
          Think of PSMF as:{" "}
          <span className="italic text-blue-900">
            “A scientifically controlled crash diet that keeps your muscles safe
            while aggressively burning fat.”
          </span>{" "}
          It’s highly effective but should be followed only short-term with a
          structured exit plan.
        </p>
          </div>
          <div className="p-6 text-gray-800">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              6. Calorie/Carb Backloading
            </h2>

            <p className="mb-4">
              <strong>Calorie/Carb Backloading</strong> is a nutritional strategy
              designed to optimize energy use, fat loss, and muscle gain by consuming
              the majority of daily carbohydrates and/or calories later in the day,
              often after exercise. The idea is to align nutrient intake with the
              body’s circadian rhythm and insulin sensitivity patterns, allowing for
              better energy partitioning — meaning your body uses nutrients more
              efficiently.
            </p>

            <p className="mb-4">
              In traditional diets, people are advised to eat balanced meals
              throughout the day, including carbohydrates at breakfast for energy.
              However, Calorie or Carb Backloading challenges this by suggesting that
              eating more carbs and calories in the evening — particularly after
              resistance training — can improve body composition and energy
              utilization.
            </p>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Typical Daily Pattern
            </h3>

            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Morning to Afternoon (Low Carb/Low Calorie Phase):</strong>{" "}
                Focus on protein and fats; very few or no carbs. Keeps insulin levels
                low, promoting fat burning during the first half of the day.
              </li>
              <li>
                <strong>Evening (High Carb/High Calorie Phase):</strong> Consume the
                majority of carbs and calories after a workout. Muscles are more
                insulin-sensitive, storing carbs as glycogen instead of fat.
              </li>
              <li>
                <strong>Nighttime:</strong> Higher carb intake can enhance serotonin
                production, improving sleep quality.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Scientific Basis
            </h3>

            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Insulin Sensitivity:</strong> Muscles are more
                insulin-sensitive post-exercise, meaning carbs eaten then are less
                likely stored as fat.
              </li>
              <li>
                <strong>Circadian Rhythm:</strong> Insulin sensitivity is highest
                post-workout; backloading leverages this temporary window.
              </li>
              <li>
                <strong>Hormonal Advantage:</strong> Low-carb mornings promote fat
                oxidation and growth hormone release, while evening carbs help reduce
                cortisol and improve recovery.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Merits (Advantages)</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Enhanced fat burning through low-carb mornings.</li>
              <li>Improved glycogen replenishment and muscle recovery post-workout.</li>
              <li>Better energy timing — carbs used for repair, not fat storage.</li>
              <li>Evening carbs enhance serotonin and melatonin, improving sleep.</li>
              <li>Simple routine — easier to manage meal timing.</li>
              <li>Reduced hunger and cravings throughout the day.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Demerits (Disadvantages)
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Not suitable for morning exercisers — relies on evening workouts.</li>
              <li>Possible daytime fatigue due to low-carb mornings.</li>
              <li>Risk of overeating at night if portions are uncontrolled.</li>
              <li>May affect hormonal balance if used for extended periods.</li>
              <li>Less effective for people with insulin resistance or diabetes.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Who Can Benefit Most
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Individuals training in the late afternoon or evening.</li>
              <li>Those focused on fat loss while maintaining muscle mass.</li>
              <li>People who prefer larger dinners and smaller breakfasts.</li>
              <li>Those comfortable with intermittent fasting or delayed meals.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Summary Table
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100 text-blue-900">
                  <tr>
                    <th className="border px-4 py-2 text-left">Aspect</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Concept</td>
                    <td className="border px-4 py-2">
                      Eating most carbs/calories in the evening, post-workout
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Goal</td>
                    <td className="border px-4 py-2">
                      Maximize fat burning and muscle gain
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Best For</td>
                    <td className="border px-4 py-2">
                      Evening exercisers, fat loss, and body recomposition
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Main Advantage</td>
                    <td className="border px-4 py-2">
                      Better nutrient partitioning (carbs → muscles, not fat)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Main Disadvantage</td>
                    <td className="border px-4 py-2">
                      Low energy during the day; not ideal for morning workouts
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Scientific Support</td>
                    <td className="border px-4 py-2">
                      Moderate — backed by insulin sensitivity and hormonal studies
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Sustainability</td>
                    <td className="border px-4 py-2">
                      Moderate — requires timing discipline
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="italic text-gray-700">
              In summary, Calorie/Carb Backloading can be a powerful method to improve
              fat metabolism and muscle recovery — especially for evening exercisers
              — but it requires mindful timing and portion control to be effective.
            </p>
          </div>
          <div className="p-6 text-gray-800 leading-relaxed">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">7. Reverse Dieting</h2>

            <p className="mb-4">
              <strong>Reverse dieting</strong> is the deliberate, gradual increase of calorie
              intake after a period of dieting or restriction. The goal is to restore
              your metabolic rate, normalize hormones and appetite, and transition
              back to a sustainable maintenance calorie level — all while minimizing
              fat regain. Think of it as a carefully controlled exit from a diet
              rather than an immediate return to pre-diet eating habits.
            </p>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">How It Works</h3>
            <ul className="list-disc list-inside mb-4">
              <li>During dieting, metabolism slows, appetite hormones shift, and glycogen stores drop.</li>
              <li>
                Reverse dieting adds small calorie increments (usually weekly) to help
                metabolism and hormones recover gradually.
              </li>
              <li>
                Progress is monitored by tracking body weight, energy, and composition
                to restore balance with minimal fat gain.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Typical Protocol
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Assess current intake, body weight trend, and activity level.</li>
              <li>
                Add small calorie increments weekly — usually +50 to +100 kcal per
                week.
              </li>
              <li>
                Add calories primarily from <strong>carbohydrates</strong>, with small
                increases in fat if needed. Keep protein steady to protect muscle.
              </li>
              <li>
                Monitor weekly averages of weight, clothing fit, energy, and gym
                performance.
              </li>
              <li>
                Adjust pace — pause if weight rises too fast; continue if energy improves
                and weight is stable.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Example</h3>
            <p className="mb-4">
              <strong>Current intake:</strong> 1,400 kcal/day  
              <br />
              <strong>Maintenance goal:</strong> 2,000 kcal/day (difference: 600 kcal)
            </p>

            <ul className="list-disc list-inside mb-4">
              <li>+50 kcal/week → ~12 weeks to reach 2,000 kcal</li>
              <li>+100 kcal/week → ~6 weeks to reach 2,000 kcal</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Example Target Macros (at 2,000 kcal)
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100 text-blue-900">
                  <tr>
                    <th className="border px-4 py-2 text-left">Macronutrient</th>
                    <th className="border px-4 py-2 text-left">Percentage</th>
                    <th className="border px-4 py-2 text-left">Calories</th>
                    <th className="border px-4 py-2 text-left">Grams</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Protein</td>
                    <td className="border px-4 py-2">30%</td>
                    <td className="border px-4 py-2">600 kcal</td>
                    <td className="border px-4 py-2">150 g</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Fat</td>
                    <td className="border px-4 py-2">25%</td>
                    <td className="border px-4 py-2">500 kcal</td>
                    <td className="border px-4 py-2">~55.6 g</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Carbohydrates</td>
                    <td className="border px-4 py-2">45%</td>
                    <td className="border px-4 py-2">900 kcal</td>
                    <td className="border px-4 py-2">225 g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Why People Use Reverse Dieting
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Recover from metabolic adaptation and restore energy levels.</li>
              <li>Reduce extreme hunger and food cravings.</li>
              <li>Improve training performance and recovery.</li>
              <li>Stabilize hormones like leptin and thyroid function.</li>
              <li>Transition to maintenance calories without bingeing.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Merits (Advantages)
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Smoother metabolic recovery with gradual increases.</li>
              <li>Better control of fat regain and improved energy.</li>
              <li>Enhanced training and recovery from added carbs.</li>
              <li>Psychological benefits — less restrictive yet structured.</li>
              <li>Helps establish sustainable maintenance eating habits.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Demerits (Disadvantages)
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Slow process — takes weeks or months to complete.</li>
              <li>May not fully “reset” metabolism for everyone.</li>
              <li>Requires consistent tracking and discipline.</li>
              <li>Can trigger overeating for those with past disordered eating.</li>
              <li>Results vary by individual body response.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Who It’s Best For
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>People finishing a long or steep diet.</li>
              <li>Fitness competitors or those recovering from restriction.</li>
              <li>Anyone patient and comfortable tracking progress.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Be Cautious / Consult a Professional If:
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>You have a history of eating disorders.</li>
              <li>You have metabolic illnesses like diabetes.</li>
              <li>You are pregnant or breastfeeding.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Monitoring & Success Tips
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Use weekly weight averages for accuracy.</li>
              <li>Track training, sleep, energy, and hunger.</li>
              <li>If weight jumps greater than 1% per week, slow or pause increases.</li>
              <li>Continue increments if energy improves and weight is stable.</li>
              <li>Accept minor fat gain if performance improves.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Quick FAQ</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Will reverse dieting make me gain fat?</strong>  
                Some initial gain (water + glycogen) is normal, but fat gain is
                minimal with proper pacing.
              </li>
              <li>
                <strong>How long does it take?</strong>  
                Usually 6–12 weeks depending on how deep the calorie deficit was.
              </li>
              <li>
                <strong>Is it necessary for everyone?</strong>  
                Not always. It’s most useful after prolonged or aggressive dieting.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Final Practical Tips
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Increase calories slowly (+50–100 kcal/week).</li>
              <li>Keep protein stable to protect muscle.</li>
              <li>Prioritize carbs for recovery and hormonal support.</li>
              <li>Be patient — gradual progress is key.</li>
              <li>Seek guidance if you have medical or eating-related conditions.</li>
            </ul>

            <p className="italic text-gray-700">
              In summary, reverse dieting helps restore metabolic health after calorie
              restriction by reintroducing food in a controlled, gradual manner —
              making it a smart, sustainable way to exit a fat-loss phase.
            </p>
          </div>
          <div className="p-6 text-gray-800 leading-relaxed">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              8. Calorie/Carb Backloading
            </h2>

            <p className="mb-4">
              <strong>Calorie/Carb Backloading</strong> is a strategic eating approach
              where you consume most of your daily calories — especially carbohydrates
              — later in the day, typically after your workout. It’s based on the idea
              that your body handles carbohydrates more efficiently after physical
              activity, allowing better muscle recovery, glycogen replenishment, and
              less fat storage.
            </p>

            <p className="mb-4 italic text-gray-700">
              “Eat lighter in the morning, train in the afternoon or evening, and eat
              heavier (especially carbs) at night.”
            </p>

            <p className="mb-6">
              It’s the opposite of traditional diet advice that says “eat breakfast
              like a king and dinner like a beggar.”
            </p>

            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              How It Works (Mechanism)
            </h3>

            <h4 className="text-xl font-semibold text-blue-900 mb-2">
              1. Insulin Sensitivity and Timing:
            </h4>
            <ul className="list-disc ml-6 mb-4">
              <li>After resistance training, your muscles become highly insulin-sensitive.</li>
              <li>
                This means they absorb glucose more efficiently, storing it as muscle
                glycogen rather than fat.
              </li>
              <li>
                Consuming most of your carbs post-workout therefore reduces fat
                storage and enhances recovery.
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-900 mb-2">
              2. Circadian Rhythm and Hormone Response:
            </h4>
            <ul className="list-disc ml-6 mb-6">
              <li>
                Early in the day, cortisol (a stress hormone) is high, promoting fat
                burning.
              </li>
              <li>
                By delaying carb intake until cortisol levels drop, you extend your
                fat-burning window.
              </li>
              <li>
                Eating carbs at night boosts serotonin and melatonin, improving sleep
                and recovery.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Typical Daily Pattern
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border px-4 py-2">Time of Day</th>
                    <th className="border px-4 py-2">Meal Type</th>
                    <th className="border px-4 py-2">Composition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Morning</td>
                    <td className="border px-4 py-2">Light</td>
                    <td className="border px-4 py-2">
                      Protein + Fat (e.g., eggs, avocado, nuts, coffee) — few or no
                      carbs
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Midday</td>
                    <td className="border px-4 py-2">Moderate</td>
                    <td className="border px-4 py-2">
                      Protein + Veggies (low-carb)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Afternoon/Evening (After Workout)</td>
                    <td className="border px-4 py-2">Heavy</td>
                    <td className="border px-4 py-2">
                      Protein + High Carbs (rice, potatoes, pasta, fruits, etc.)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Night</td>
                    <td className="border px-4 py-2">Optional Snack</td>
                    <td className="border px-4 py-2">
                      Carbs + Protein to improve sleep and recovery
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Scientific Rationale
            </h3>
            <ul className="list-disc ml-6 mb-6">
              <li>
                <strong>Insulin Sensitivity:</strong> Exercise boosts insulin
                sensitivity, making post-workout carbs more likely to replenish
                glycogen than store as fat.
              </li>
              <li>
                <strong>Hormonal Advantage:</strong> Low-carb mornings help maintain
                fat oxidation and growth hormone output; evening carbs reduce cortisol
                and aid recovery.
              </li>
              <li>
                <strong>Energy Partitioning:</strong> Calories consumed post-workout
                are more likely used for muscle repair than stored as fat.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Merits (Advantages)
            </h3>
            <ul className="list-disc ml-6 mb-6">
              <li>Optimized fat burning during low-carb mornings.</li>
              <li>Better nutrient partitioning and muscle glycogen restoration.</li>
              <li>Improved recovery and muscle growth post-workout.</li>
              <li>Enhanced sleep quality due to serotonin and melatonin boost.</li>
              <li>Balanced energy throughout the day.</li>
              <li>Flexibility for larger evening meals.</li>
              <li>Reduced hunger and cravings.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Demerits (Disadvantages)
            </h3>
            <ul className="list-disc ml-6 mb-6">
              <li>Low energy in the morning for some individuals.</li>
              <li>Not suitable for morning exercisers.</li>
              <li>Challenging for certain lifestyles or work schedules.</li>
              <li>Potential for overeating at night if not portioned.</li>
              <li>Requires strict timing and discipline.</li>
              <li>Limited evidence for sedentary individuals.</li>
              <li>Possible sleep issues from large meals late at night.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Summary Table
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border px-4 py-2">Aspect</th>
                    <th className="border px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Concept</td>
                    <td className="border px-4 py-2">
                      Eat fewer calories and carbs early, most carbs later (after training)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Goal</td>
                    <td className="border px-4 py-2">
                      Maximize fat loss, muscle gain, and recovery
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Ideal For</td>
                    <td className="border px-4 py-2">
                      Evening exercisers, strength trainers, body recomposition
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Mechanism</td>
                    <td className="border px-4 py-2">
                      Uses post-workout insulin sensitivity for better nutrient partitioning
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Main Advantage</td>
                    <td className="border px-4 py-2">
                      Promotes fat burning and better sleep
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Main Disadvantage</td>
                    <td className="border px-4 py-2">
                      Poor fit for morning workouts; possible overeating
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Scientific Support</td>
                    <td className="border px-4 py-2">
                      Moderate — supports insulin timing and glycogen replenishment
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Sustainability</td>
                    <td className="border px-4 py-2">
                      Moderate to high (for those who prefer large dinners)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Practical Example (2,000 kcal Plan)
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border px-4 py-2">Meal</th>
                    <th className="border px-4 py-2">Time</th>
                    <th className="border px-4 py-2">Macros (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Breakfast</td>
                    <td className="border px-4 py-2">8:00 AM</td>
                    <td className="border px-4 py-2">300 kcal — 25g P, 15g F, 5g C</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Lunch</td>
                    <td className="border px-4 py-2">1:00 PM</td>
                    <td className="border px-4 py-2">400 kcal — 30g P, 20g F, 10g C</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Workout</td>
                    <td className="border px-4 py-2">6:00 PM</td>
                    <td className="border px-4 py-2">—</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Dinner (Post-Workout)</td>
                    <td className="border px-4 py-2">7:00 PM</td>
                    <td className="border px-4 py-2">
                      900 kcal — 40g P, 20g F, 120g C
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Snack</td>
                    <td className="border px-4 py-2">9:30 PM</td>
                    <td className="border px-4 py-2">
                      400 kcal — 25g P, 10g F, 60g C
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Key Takeaways
            </h3>
            <ul className="list-disc ml-6">
              <li>Stay low-carb in the morning to promote fat burning.</li>
              <li>
                Eat most calories and carbs in the evening for recovery and sleep.
              </li>
              <li>
                Total calories still determine results — timing enhances performance
                and composition.
              </li>
              <li>
                Ideal for evening exercisers; less effective for early morning
                workouts.
              </li>
            </ul>
          </div>
        
        </div>
      </div>

        {/* Sidebar */}
        <div className="w-3/10 bg-white p-4 shadow-lg rounded-xl md:pt-[100px]">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden p-4 gap-4">
        {/* Heading */}
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold text-blue-900">
            Calorie Calculator
          </h1>
        </div>

        {/* Row 1: Calculator */}
        <div className="bg-white p-2 shadow-lg rounded-xl border-4 border-blue-50">
          <CalorieCalculator/>
        </div>

        {/* Row 2: Text Section */}
        <div className="bg-white p-2 shadow-lg rounded-xl space-y-4">
          
          <div className="max-w-6xl mx-auto  text-gray-800 leading-relaxed">
            {/* Header */}
            <h1 className="text-xl font-bold text-blue-900 mb-4">
              Calorie Calculator: Understanding Your Daily Energy Needs
            </h1>

            {/* Section 1 */}
            <h2 className="text-xl  text-blue-900 mt-3 mb-1">
              1. What Is a Calorie?
            </h2>
            <p className="text-sm" >
              A calorie is a unit of energy that measures how much energy food and
              drinks provide to your body. Every activity you perform — from breathing
              and sleeping to walking and exercising — requires calories.
            </p>
            <p className="text-sm">
              In nutrition, we actually refer to{" "}
              <strong>kilocalories (kcal)</strong>, where 1 kilocalorie = 1,000
              calories.
            </p>
            <p className="text-sm">
              Your daily calorie requirement depends on several factors including age,
              gender, weight, height, and physical activity level. Consuming more
              calories than your body needs leads to weight gain, while consuming
              fewer calories leads to weight loss.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl  text-blue-900 mt-3 ">
              2. Understanding Activity Levels
            </h2>
            <p className="text-sm">
              Your daily calorie expenditure includes both your{" "}
              <strong>Basal Metabolic Rate (BMR)</strong> and your{" "}
              <strong>Activity Level</strong>.
            </p>
            <p className="text-sm">
              The BMR represents the calories your body burns at rest — just to
              maintain vital functions like breathing, heart rate, and temperature
              regulation. The Activity Level accounts for calories burned during
              physical movement and exercise.
            </p>

            <div className="mt-3 space-y-1 text-sm">
              {[
                {
                  title: "2.1 Basal Metabolic Rate (BMR)",
                  desc: "Minimum calories your body requires at complete rest to sustain essential bodily functions such as breathing, circulation, and cell production.",
                },
                {
                  title: "2.2 Sedentary (Little or No Exercise)",
                  desc: "Applies to people with minimal physical activity or desk jobs.",
                  mult: "BMR × 1.2",
                },
                {
                  title: "2.3 Lightly Active (Exercise 1–3 Times/Week)",
                  desc: "Includes light workouts or casual walking.",
                  mult: "BMR × 1.375",
                },
                {
                  title: "2.4 Moderately Active (Exercise 4–5 Times/Week)",
                  desc: "Regular exercise or moderately active jobs.",
                  mult: "BMR × 1.55",
                },
                {
                  title: "2.5 Active (Daily or Intense Exercise)",
                  desc: "Training daily or participating in moderately intense physical activities.",
                  mult: "BMR × 1.725",
                },
                {
                  title: "2.6 Very Active (Intense Exercise 6–7 Times/Week)",
                  desc: "Applies to athletes or heavy laborers.",
                  mult: "BMR × 1.9",
                },
                {
                  title: "2.7 Extra Active (Very Intense Exercise or Physical Job)",
                  desc: "For extreme physical training or manual labor jobs.",
                  mult: "BMR × 2.0",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-blue-900">{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.mult && (
                    <p>
                      👉 <strong>Multiplier:</strong> {item.mult}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Section 3 */}
            <h2 className="text-xl  text-blue-900 mt-3 ">
              3. Common Formulas for Calculating Calories
            </h2>
            <p className="text-sm">
              Here are three popular scientific methods to estimate your daily
              caloric needs:
            </p >

            <div className="mt-3 space-y-2">
              <div>
                <h3 className="font-semibold text-blue-900">
                  3.1 Harris–Benedict Equation (Revised)
                </h3>
                <p className="text-sm">Classic method for calculating BMR.</p>
                <p className="text-sm">
                  <strong>For Men:</strong> 88.362 + (13.397 × weight in kg) + (4.799
                  × height in cm) − (5.677 × age in years)
                </p>
                <p className="text-sm">
                  <strong>For Women:</strong> 447.593 + (9.247 × weight in kg) +
                  (3.098 × height in cm) − (4.330 × age in years)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900">3.2 Mifflin–St Jeor Equation</h3>
                <p className="text-sm">More accurate for modern lifestyles.</p>
                <p className="text-sm">
                  <strong>For Men:</strong> (10 × weight in kg) + (6.25 × height in
                  cm) − (5 × age in years) + 5
                </p>
                <p className="text-sm">
                  <strong>For Women:</strong> (10 × weight in kg) + (6.25 × height in
                  cm) − (5 × age in years) − 161
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900">3.3 Katch–McArdle Formula</h3>
                <p className="text-sm">Ideal for people with known body fat percentage.</p>
                <p className="text-sm">
                  <strong>Formula:</strong> BMR = 370 + (21.6 × Lean Body Mass in kg)
                </p>
                <p className="text-sm">
                  <strong>Where:</strong> Lean Body Mass = (1 − Body Fat %) × Weight
                  in kg
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-blue-900 mt-3 ">
              4. Summary Table
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm text-left mt-2">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="border px-3 py-2">Formula</th>
                    <th className="border px-3 py-2">Best For</th>
                    <th className="border px-3 py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Harris–Benedict</td>
                    <td className="border px-3 py-2">General population</td>
                    <td className="border px-3 py-2">Classic and easy to use</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Mifflin–St Jeor</td>
                    <td className="border px-3 py-2">Modern standard</td>
                    <td className="border px-3 py-2">Most accurate for adults</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Katch–McArdle</td>
                    <td className="border px-3 py-2">Fitness enthusiasts</td>
                    <td className="border px-3 py-2">
                      Ideal for those tracking body fat %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
              5. Macronutrient Table
            </h2>
            <p className="text-sm">
              Below is a detailed table showing protein, carbohydrate, and fat content
              in common foods.
            </p>

            {/* Macronutrient Table */}
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="border px-1 py-2">Food Item</th>
                    <th className="border px-1 py-2">Protein (g)</th>
                    <th className="border px-1 py-2">Carbs (g)</th>
                    <th className="border px-1 py-2">Fat (g)</th>
                    <th className="border px-1 py-2">Calories (kcal)</th>
                    <th className="border px-1 py-2">Remarks / Nutritional Note</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Chicken Breast (Skinless, Cooked)", 31, 0, 3.6, 165, "Excellent lean protein source"],
                    ["Egg (Whole, Boiled)", 13, 1.1, 11, 155, "Balanced protein and healthy fats"],
                    ["Egg White (Boiled)", 11, 0.7, 0.2, 52, "High protein, almost no fat"],
                    ["Beef (Lean, Grilled)", 26, 0, 15, 250, "High in iron and vitamin B12"],
                    ["Salmon (Grilled)", 20, 0, 13, 208, "High in omega-3 fatty acids"],
                    ["Tuna (Canned in Water)", 29, 0, 1, 130, "Low fat, high protein"],
                    ["Paneer (Cottage Cheese)", 18, 3.4, 20, 265, "Great vegetarian protein source"],
                    ["Tofu (Firm)", 8, 2, 4.8, 76, "Plant-based protein"],
                    ["Lentils (Cooked)", 9, 20, 0.4, 116, "High in fiber and complex carbs"],
                    ["Chickpeas (Cooked)", 8.9, 27, 2.6, 164, "Good source of plant-based protein"],
                    ["Kidney Beans (Cooked)", 8.7, 22, 0.5, 127, "High fiber, low fat"],
                    ["Brown Rice (Cooked)", 2.6, 23, 0.9, 111, "Complex carbohydrate source"],
                    ["White Rice (Cooked)", 2.4, 28, 0.3, 130, "Quick energy source"],
                    ["Oats (Raw)", 13, 68, 7, 379, "Excellent breakfast carb source"],
                    ["Whole Wheat Bread", 9, 49, 4.2, 247, "Rich in fiber and B-vitamins"],
                    ["Banana", 1.1, 23, 0.3, 96, "Good pre-workout carb source"],
                    ["Apple (Raw)", 0.3, 14, 0.2, 52, "Rich in antioxidants and fiber"],
                    ["Sweet Potato (Boiled)", 1.6, 20, 0.1, 86, "Complex carbs with vitamins"],
                    ["Avocado", 2, 9, 15, 160, "Healthy monounsaturated fat"],
                    ["Almonds", 21, 22, 50, 579, "Nutrient-dense, good fat source"],
                    ["Peanuts", 25, 16, 49, 567, "High in protein and healthy fats"],
                    ["Walnuts", 15, 14, 65, 654, "High in omega-3 fats"],
                    ["Olive Oil", 0, 0, 100, 884, "100% fat — excellent for cooking"],
                    ["Butter", 0.8, 0, 81, 717, "High saturated fat; use sparingly"],
                    ["Milk (Whole)", 3.4, 5, 3.3, 61, "Balanced macro beverage"],
                    ["Greek Yogurt (Plain, Low Fat)", 10, 3.6, 0.4, 59, "Great source of probiotics"],
                    ["Cheddar Cheese", 25, 1.3, 33, 403, "High fat and calcium"],
                    ["Protein Shake (Whey)", 80, 5, 4, 400, "Supplemented protein source (per 100g powder)"],
                    ["Quinoa (Cooked)", 4.1, 21, 1.9, 120, "Complete plant protein"],
                    ["Broccoli (Boiled)", 2.8, 7, 0.4, 35, "Low-calorie, high micronutrient food"],
                  ].map((item, i) => (
                    <tr key={i}>
                      {item.map((val, j) => (
                        <td key={j} className="border px-3 py-2">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Facts */}
            <h3 className="text-xl font-semibold text-blue-900 mt-3 mb-2">
              5.2 Macronutrient Quick Facts
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="border px-1 py-2">Macro- nutrient</th>
                    <th className="border px-1 py-2">Calories per Gram</th>
                    <th className="border px-1 py-2">Main Function</th>
                    <th className="border px-1 py-2">Ideal Daily Range </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Protein</td>
                    <td className="border px-3 py-2">4 kcal</td>
                    <td className="border px-3 py-2">Builds and repairs tissues</td>
                    <td className="border px-3 py-2">10–35%</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Carbs</td>
                    <td className="border px-3 py-2">4 kcal</td>
                    <td className="border px-3 py-2">Primary energy source</td>
                    <td className="border px-3 py-2">45–65%</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Fat</td>
                    <td className="border px-3 py-2">9 kcal</td>
                    <td className="border px-3 py-2">
                      Supports hormones, absorption, and energy storage
                    </td>
                    <td className="border px-3 py-2">20–35%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* How to Use Table */}
            <h3 className="text-xl font-semibold text-blue-900 mt-3 mb-2">
              5.3 How to Use This Table
            </h3>
            <ul className="text-sm list-disc ml-3 space-y-1">
              <li>
                <strong>For Weight Loss:</strong> Choose foods high in protein and
                fiber but low in calories and fat (e.g., chicken breast, lentils, egg
                whites).
              </li>
              <li>
                <strong>For Weight Gain:</strong> Include calorie-dense, healthy fats
                (e.g., nuts, peanut butter, whole milk).
              </li>
              <li>
                <strong>For Balanced Maintenance:</strong> Combine lean proteins,
                whole grains, fruits, and healthy fats proportionally.
              </li>
            </ul>
          </div>
          <div className="max-w-5xl mx-auto px-3 py-4 text-gray-800">
            {/* Header Section */}
            <h1 className="text-xl font-bold text-blue-900 mb-2">
              What Are Advanced Dietary Strategies?
            </h1>

            <p className="mb-2 text-sm">
              <strong>Advanced Dietary Strategies</strong> are structured, science-based
              approaches to nutrition that go beyond simple “calories in vs. calories out.”
              These methods focus not only on how much you eat, but also on what, when, and
              how you eat — helping you achieve specific physiological and psychological
              goals.
            </p>

            <p className="mb-2 text-sm">
              Think of it like this:
              <br />
              <strong>Basic Dieting:</strong> Driving a car with just an accelerator and brake
              (calories).
              <br />
              <strong>Advanced Dieting:</strong> Driving a manual transmission car, where you
              strategically use gears and timing (nutrient cycling, fasting, meal timing) for
              better performance and efficiency.
            </p>

            {/* Core Principles */}
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Core Principles of Advanced Strategies
            </h2>
            <ul className="text-sm list-disc pl-3 space-y-2 mb-2">
              <li>
                <strong>Metabolic Manipulation:</strong> Preventing or reversing the slowdown
                in metabolism that often occurs with long-term calorie restriction.
              </li>
              <li>
                <strong>Hormonal Optimization:</strong> Regulating key hormones like insulin,
                leptin, and cortisol to improve fat-burning and energy balance.
              </li>
              <li>
                <strong>Nutrient Timing:</strong> Placing carbohydrates and proteins
                strategically around workouts for better recovery and performance.
              </li>
              <li>
                <strong>Psychological Sustainability:</strong> Including planned breaks or
                refeeds to maintain motivation and prevent diet burnout.
              </li>
              <li>
                <strong>Nutrient Partitioning:</strong> Directing nutrients (especially
                carbohydrates) toward muscle recovery instead of fat storage.
              </li>
            </ul>

            {/* Key Characteristics Table */}
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Key Characteristics
            </h2>
            <div className="overflow-x-auto mb-2">
              <table className="min-w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border px-1 py-1">Sl#</th>
                    <th className="border px-1 py-1">Feature</th>
                    <th className="border px-1 py-1">Basic Dieting</th>
                    <th className="border px-1 py-1">Advanced Dieting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">1</td>
                    <td className="border p-1">Focus</td>
                    <td className="border p-1">Total Daily Calorie Intake</td>
                    <td className="border p-1">
                      Calories, Macronutrients, Timing, Cycling
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">2</td>
                    <td className="border p-1">Complexity</td>
                    <td className="border p-1">Simple, static targets</td>
                    <td className="border p-1">
                      Dynamic, requires planning & tracking
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">3</td>
                    <td className="border p-1">Goal</td>
                    <td className="border p-1">
                      Create a consistent calorie deficit/surplus
                    </td>
                    <td className="border p-1">
                      Optimize metabolism, hormones, and performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">4</td>
                    <td className="border p-1">Best For</td>
                    <td className="border p-1">
                      Beginners, simple weight management
                    </td>
                    <td className="border p-1">
                      Athletes, bodybuilders, experienced dieters
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>        
          
          <div className="px-3 max-w-5xl mx-auto text-gray-800 leading-relaxed">
            {/* Main Header */}
            <h1 className="text-xl font-bold text-blue-900 mb-2 ">
              Advanced Dietary Strategies Tools of Nutrition
            </h1>

            {/* Sub Header */}
            <h2 className="text-xl  text-blue-900 mb-2">
              1. Zigzag Calorie Cycling
            </h2>

            <p className="mb-2 text-sm">
              <strong>Zigzag Calorie Cycling</strong> (also called Calorie Zigzagging
              or Caloric Rotation) is a flexible dieting method where you alternate
              your daily calorie intake—some days are higher in calories, and some
              days are lower. The goal is to support fat loss, muscle gain, and
              metabolic health while avoiding the plateaus and fatigue that often come
              with eating the same number of calories every day.
            </p>

            <p className="mb-2 text-sm">
              In essence, it’s about changing daily calories while maintaining the
              same weekly average — giving your body and mind a break from consistent
              restriction.
            </p>

            {/* Detailed Explanation */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Detailed Explanation
            </h3>
            <p className="mb-2 text-sm">
              When you eat the exact same number of calories every day, your body
              adapts. Over time, metabolism slows, fat loss stalls, and energy levels
              drop. Zigzag calorie cycling interrupts this adaptation by varying
              calorie intake from day to day — keeping your metabolism responsive and
              your motivation higher.
            </p>

            <ul className="text-sm list-disc list-inside mb-2">
              <li>Weight loss programs (to prevent metabolic slowdown)</li>
              <li>Body recomposition phases (to lose fat and maintain/gain muscle)</li>
              <li>
                Athlete performance programs (to match calorie intake to training
                intensity)
              </li>
            </ul>

            {/* How It Works */}
            <h3 className="text-xl font-semibold text-blue-900 mb-3">How It Works</h3>
            <ol className="list-decimal list-inside mb-2 text-sm space-y-2">
              <li>
                <strong>Determine your weekly maintenance calories:</strong>  
                Example: Maintenance = 2,400 kcal/day → 16,800 kcal/week (2,400 × 7).
              </li>
              <li>
                <strong>Create a weekly plan with high and low days:</strong>  
                The total for the week stays around 16,800 kcal, but daily intake varies.
              </li>
            </ol>

            {/* Table Example 1 */}
            <div className="overflow-x-auto mb-2">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-1">Day</th>
                    <th className="border p-1">alories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Monday</td>
                    <td className="border p-1">1,800 (Low)</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Tuesday</td>
                    <td className="border p-1">2,300 (Medium)</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Wednesday</td>
                    <td className="border p-1">1,900 (Low)</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Thursday</td>
                    <td className="border p-1">2,400 (High)</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Friday</td>
                    <td className="border p-1">1,800 (Low)</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Saturday</td>
                    <td className="border p-1">2,600 (High/Refuel)</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Sunday</td>
                    <td className="border p-1">2,000 (Medium)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm mb-2">
              Weekly Total = 14,800 kcal (avg 2,114/day) → moderate calorie deficit
              but metabolism stays active.
            </p>

            {/* Scientific Principle */}
            <h3 className="text-xl  text-blue-900 mb-2">
              Scientific Principle Behind It
            </h3>
            <ul className="text-sm list-disc list-inside mb-2">
              <li>
                Constant calorie restriction can suppress leptin (hunger hormone) and
                slow down metabolism.
              </li>
              <li>
                Occasional high-calorie days help boost leptin, improving fat-burning
                efficiency.
              </li>
              <li>
                Alternating calories prevents adaptation to low intake, reducing
                plateaus.
              </li>
              <li>
                Aligns with training periodization — matching nutrition to intensity.
              </li>
            </ul>

            {/* Merits */}
            <h3 className="text-xl  text-blue-900 mb-3">Merits</h3>
            <ul className="text-sm list-disc list-inside mb-2">
              <li>Prevents metabolic slowdown</li>
              <li>Better adherence and flexibility</li>
              <li>Improved muscle retention and energy for training</li>
              <li>Supports hormonal balance and long-term sustainability</li>
            </ul>

            {/* Demerits */}
            <h3 className="text-xl  text-blue-900 mb-3">Demerits</h3>
            <ul className="text-sm list-disc list-inside mb-2">
              <li>Complex to plan and track</li>
              <li>Risk of overeating on high-calorie days</li>
              <li>Progress depends on total weekly intake</li>
              <li>May cause stress for some individuals</li>
            </ul>

            {/* Summary Table */}
            <h3 className="text-xl  text-blue-900 mb-3">Summary Table</h3>
            <div className="overflow-x-auto mb-2">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-1">Aspect</th>
                    <th className="border p-1">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Definition</td>
                    <td className="border p-1">
                      Alternating daily calorie intake while maintaining weekly average
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Primary Goal</td>
                    <td className="border p-1">
                      Prevent metabolic slowdown, support fat loss while preserving muscle
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Best For</td>
                    <td className="border p-1">
                      Intermediate/advanced dieters, athletes, bodybuilders
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Key Benefit</td>
                    <td className="border p-1">
                      Avoids plateaus and keeps metabolism active
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Main Drawback</td>
                    <td className="border p-1">
                      Planning complexity and potential for overeating
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Practical Example */}
            <h3 className="text-xl  text-blue-900 mb-3">
              Practical Example (Simple Plan for 2000 kcal average goal)
            </h3>

            <div className="overflow-x-auto mb-2">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-1">Day</th>
                    <th className="border p-1">Goal</th>
                    <th className="border p-1">Calories</th>
                    <th className="border p-1">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Monday</td>
                    <td className="border p-1">Low</td>
                    <td className="border p-1">1600</td>
                    <td className="border p-1">High protein, low carb</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Tuesday</td>
                    <td className="border p-1">High</td>
                    <td className="border p-1">2400</td>
                    <td className="border p-1">Training day, more carbs</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Wednesday</td>
                    <td className="border p-1">Medium</td>
                    <td className="border p-1">2000</td>
                    <td className="border p-1">Balanced intake</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Thursday</td>
                    <td className="border p-1">Low</td>
                    <td className="border p-1">1700</td>
                    <td className="border p-1">Active rest</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Friday</td>
                    <td className="border p-1">High</td>
                    <td className="border p-1">2500</td>
                    <td className="border p-1">Heavy workout</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Saturday</td>
                    <td className="border p-1">Medium</td>
                    <td className="border p-1">2000</td>
                    <td className="border p-1">Balanced</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Sunday</td>
                    <td className="border p-1">Low</td>
                    <td className="border p-1">1600</td>
                    <td className="border p-1">Rest day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm mb-3">
              Weekly total = 13,800 kcal (average = 1,971 kcal/day) → still a deficit,
              but your metabolism stays active.
            </p>

            {/* Conclusion */}
            <h3 className="text-xl  text-blue-900 mb-3">Conclusion</h3>
            <p className="text-sm"> 
              <strong>Zigzag Calorie Cycling</strong> is a smart, adaptable nutrition
              strategy that alternates calorie intake to keep your metabolism active,
              improve adherence, and support long-term fat loss. It’s not magic —
              overall weekly calorie balance still determines results — but it can
              make the process more effective and sustainable by matching food intake
              to activity levels and psychological needs.
            </p>
          </div>
          <div className="px-3 max-w-5xl mx-auto text-gray-800 leading-relaxed">
            {/* Sub Header */}
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              2. Carb Cycling
            </h2>

            <p className="text-sm mb-2">
              <strong>Carb Cycling</strong> is a dietary strategy where you alternate
              your carbohydrate intake on different days — typically switching between
              high-carb, low-carb, and sometimes no-carb days. The main goal is to
              optimize the benefits of carbohydrates (such as energy and muscle
              growth) while minimizing their potential downsides (like fat storage or
              insulin resistance).
            </p>

            <p className="text-sm mb-2">
              Carb Cycling is a planned manipulation of carbohydrate intake based on
              your training intensity, body composition goals, or metabolic needs. It
              is often used by athletes, bodybuilders, and fitness enthusiasts to:
            </p>

            <ul className="text-sm list-disc list-inside mb-2">
              <li>Maximize fat loss</li>
              <li>Preserve lean muscle mass</li>
              <li>Improve training performance</li>
            </ul>

            <p className="text-sm mb-2">
              Instead of consuming the same number of carbs every day, you adjust your
              intake to fit your energy expenditure.
            </p>

            <ul className="text-sm list-disc list-inside mb-2">
              <li>
                <strong>High-Carb Days →</strong> On intense workout or training days
              </li>
              <li>
                <strong>Low-Carb Days →</strong> On rest or light activity days
              </li>
              <li>
                <strong>Moderate-Carb Days →</strong> On medium-intensity training
                days
              </li>
            </ul>

            {/* How It Works */}
            <h3 className="text-xl  text-blue-900 mb-3">
              How Carb Cycling Works
            </h3>
            <p className="text-sm mb-2">
              Carbohydrates are the body’s primary source of energy. When you eat
              carbs, your body releases insulin, a hormone that helps store glucose
              (from carbs) as energy in muscles or fat cells.
            </p>

            <p className="text-sm mb-2">
              By cycling carbs:
              <br />• On high-carb days, you refill muscle glycogen stores → improving
              workout performance and recovery.
              <br />• On low-carb days, your body is encouraged to use stored fat for
              energy → aiding fat loss.
            </p>

            <p className="text-sm mb-2">
              This cycle aims to balance fat burning and muscle building depending on
              your goals.
            </p>

            {/* Example Weekly Carb Cycling Plan */}
            <h3 className="text-xl  text-blue-900 mb-3">
              Example Weekly Carb Cycling Plan
            </h3>

            <div className="overflow-x-auto mb-2">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-1">Day</th>
                    <th className="border p-1">Carb Level</th>
                    <th className="border p-1">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Monday</td>
                    <td className="border p-1">High-Carb</td>
                    <td className="border p-1">Leg workout (intense day)</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Tuesday</td>
                    <td className="border p-1">Low-Carb</td>
                    <td className="border p-1">Rest day</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Wednesday</td>
                    <td className="border p-1">Moderate-Carb</td>
                    <td className="border p-1">Upper body workout</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Thursday</td>
                    <td className="border p-1">Low-Carb</td>
                    <td className="border p-1">Light cardio</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Friday</td>
                    <td className="border p-1">High-Carb</td>
                    <td className="border p-1">
                      Full-body strength training
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Saturday</td>
                    <td className="border p-1">Moderate-Carb</td>
                    <td className="border p-1">Active recovery</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Sunday</td>
                    <td className="border p-1">Low-Carb</td>
                    <td className="border p-1">Rest day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Macronutrient Ratio Table */}
            <h3 className="text-xl  text-blue-900 mb-3">
              Typical Macronutrient Ratio per Day
            </h3>

            <div className="overflow-x-auto mb-3">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-1">Type of Day</th>
                    <th className="border p-1">Carbs</th>
                    <th className="border p-1">Protein</th>
                    <th className="border p-1">Fat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">High-Carb</td>
                    <td className="border p-1">50–60%</td>
                    <td className="border p-1">25–30%</td>
                    <td className="border p-1">15–20%</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Moderate-Carb</td>
                    <td className="border p-1">35–45%</td>
                    <td className="border p-1">30–35%</td>
                    <td className="border p-1">25–30%</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Low-Carb</td>
                    <td className="border p-1">10–20%</td>
                    <td className="border p-1">40–50%</td>
                    <td className="border p-1">30–40%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Merits */}
            <h3 className="text-xl  text-blue-900 mb-3">
              Merits (Advantages) of Carb Cycling
            </h3>
            <ul className="text-sm list-decimal list-inside mb-3 space-y-1">
              <li>
                <strong>Enhanced Fat Loss:</strong> Low-carb days reduce insulin and
                boost fat oxidation.
              </li>
              <li>
                <strong>Muscle Preservation:</strong> High-carb days replenish glycogen
                and protect muscle mass.
              </li>
              <li>
                <strong>Improved Metabolic Flexibility:</strong> Trains the body to
                efficiently switch between fat and carbs.
              </li>
              <li>
                <strong>Better Workout Performance:</strong> High-carb days fuel
                strength and endurance.
              </li>
              <li>
                <strong>Hormonal Balance:</strong> Maintains leptin and thyroid
                function.
              </li>
              <li>
                <strong>Mental Relief:</strong> Allows psychological flexibility and
                enjoyment of carbs.
              </li>
            </ul>

            {/* Demerits */}
            <h3 className="text-xl  text-blue-900 mb-3">
              Demerits (Disadvantages) of Carb Cycling
            </h3>
            <ul className="text-sm list-decimal list-inside mb-3 space-y-1">
              <li>Complex to plan and track carbs accurately</li>
              <li>Energy fluctuations and fatigue on low-carb days</li>
              <li>Risk of overeating on high-carb days</li>
              <li>Hard to sustain long-term due to strict structure</li>
              <li>Potential hormonal stress if misused</li>
              <li>Not suitable for individuals with blood sugar issues</li>
            </ul>

            {/* Who Can Benefit */}
            <h3 className="text-xl  text-blue-900 mb-3">
              Who Can Benefit from Carb Cycling
            </h3>
            <ul className="text-sm list-disc list-inside mb-3 ">
              <li>Athletes or bodybuilders in cutting/bulking cycles</li>
              <li>People experienced with tracking macros</li>
              <li>Those hitting fat-loss plateaus</li>
            </ul>

            <p className="text-sm mb-3">
              Not ideal for beginners, individuals with eating disorders, or those with
              blood sugar problems.
            </p>

            {/* Sample Foods Table */}
            <h3 className="text-xl  text-blue-900 mb-3">
              Sample Foods for Each Carb Day
            </h3>

            <div className="overflow-x-auto mb-3">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-1">Carb Day</th>
                    <th className="border p-1">Food Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">High-Carb</td>
                    <td className="border p-1">
                      Brown rice, quinoa, oats, sweet potatoes, fruits, whole grains
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Moderate-Carb</td>
                    <td className="border p-1">
                      Beans, lentils, starchy vegetables, yogurt
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Low-Carb</td>
                    <td className="border p-1">
                      Leafy greens, eggs, fish, avocados, nuts, olive oil
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary Table */}
            <h3 className="text-xl  text-blue-900 mb-3">Summary</h3>

            <div className="overflow-x-auto mb-3">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-1">Aspect</th>
                    <th className="border p-1">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Concept</td>
                    <td className="border p-1">
                      Alternating carb intake based on activity level
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Goal</td>
                    <td className="border p-1">
                      Maximize fat loss and muscle gain while maintaining energy
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Key Benefit</td>
                    <td className="border p-1">
                      Flexibility, improved metabolism, and performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Key Drawback</td>
                    <td className="border p-1">
                      Complex tracking and potential inconsistency
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-2 space-y-2 text-gray-800">
            {/* Main Header */}
            <h1 className="text-xl font-bold text-blue-900 mb-2">
              3. Intermittent Fasting (IF)
            </h1>

            {/* Intro */}
            <p className="text-sm">
              <strong>Intermittent Fasting (IF)</strong> is a structured eating pattern that alternates
              between periods of eating and fasting. Unlike traditional diets that focus on
              <em> what to eat</em>, intermittent fasting focuses on <em>when to eat</em>. It’s not about
              starving yourself — rather, it’s about giving your body scheduled breaks from food to
              improve metabolism, fat burning, and cellular repair.
            </p>

            <p className="text-sm">
              During fasting, your body:
              <ul className="text-sm list-disc list-inside ml-3">
                <li>Reduces insulin levels</li>
                <li>Uses stored body fat for energy</li>
                <li>Activates autophagy — a natural process of cellular repair</li>
              </ul>
            </p>

            <p className="text-sm">
              IF doesn’t prescribe specific foods — instead, it focuses on timing your meals to optimize
              body function and metabolism.
            </p>

            {/* Subheader */}
            <h2 className="text-xl  text-blue-900 mt-2">
              Popular Intermittent Fasting Methods
            </h2>

            {/* Table 1 */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-2 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border p-1 text-left">IF Method</th>
                    <th className="border p-1 text-left">Fasting : Eating Window</th>
                    <th className="border p-1 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["16/8 Method", "16 hours fast, 8 hours eat", "Most common; eat from 12 pm – 8 pm"],
                    ["14/10 Method", "14 hours fast, 10 hours eat", "Beginner-friendly"],
                    ["18/6 Method", "18 hours fast, 6 hours eat", "For experienced fasters; more intense"],
                    ["5:2 Diet", "5 days normal eating, 2 days low-calorie (500–600 kcal)", "Popular among dieters"],
                    ["Eat-Stop-Eat", "24-hour fast once or twice a week", "Full-day fasting method"],
                    ["Alternate-Day Fasting", "Eat normally one day, restrict next", "More aggressive approach"],
                    ["OMAD", "23-hour fast, 1-hour eat", "Advanced fasting form"],
                  ].map(([method, window, desc], i) => (
                    <tr key={i}>
                      <td className="border p-1">{method}</td>
                      <td className="border p-1">{window}</td>
                      <td className="border p-1">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* How it Works */}
            <h2 className="text-xl text-blue-900 mt-3">
              How Intermittent Fasting Works
            </h2>
            <p>
              When you eat, your body uses glucose (from carbs) as its main energy source. During fasting:
            </p>
            <ol className="text-sm list-decimal list-inside ml-3">
              <li>Insulin levels drop → fat stores are unlocked.</li>
              <li>Growth hormone increases → helps preserve muscle and burn fat.</li>
              <li>Cells begin repair (autophagy) → removing old or damaged components.</li>
              <li>Fat oxidation increases → body burns fat for energy instead of glucose.</li>
            </ol>

            {/* Table 2 */}
            <h2 className="text-xl  text-blue-900 mt-3">
              Physiological Effects of IF
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-3 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border p-1 text-left">Effect</th>
                    <th className="border p-1 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["↓ Insulin Resistance", "Improves blood sugar control"],
                    ["↑ Growth Hormone", "Enhances fat metabolism and muscle retention"],
                    ["↑ Autophagy", "Promotes cell repair and longevity"],
                    ["↓ Inflammation", "Reduces oxidative stress"],
                    ["↑ Ketone Production", "Provides alternative fuel for the brain"],
                  ].map(([effect, desc], i) => (
                    <tr key={i}>
                      <td className="border p-1">{effect}</td>
                      <td className="border p-1">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Example Schedule */}
            <h2 className="text-xl  text-blue-900 mt-3">
              Example: 16/8 IF Daily Schedule
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-3 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border p-1 text-left">Time</th>
                    <th className="border p-1 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["8:00 PM", "Finish dinner (begin fasting)"],
                    ["8:00 PM – 12:00 PM", "Fasting period (black coffee, tea, or water allowed)"],
                    ["12:00 PM", "Break fast with balanced meal (protein + carbs + fat)"],
                    ["3:30 PM", "Light snack (fruit or nuts)"],
                    ["7:30 PM", "Dinner (lean protein + vegetables)"],
                    ["8:00 PM", "Start fasting again"],
                  ].map(([time, action], i) => (
                    <tr key={i}>
                      <td className="border p-1">{time}</td>
                      <td className="border p-1">{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Foods */}
            <h2 className="text-xl font-semibold text-blue-900 mt-3">
              What to Eat During Eating Window
            </h2>
            <ul className="text-sm list-disc list-inside ml-3">
              <li><strong>Protein:</strong> Chicken, fish, eggs, Greek yogurt</li>
              <li><strong>Healthy fats:</strong> Avocado, olive oil, nuts, seeds</li>
              <li><strong>Complex carbs:</strong> Quinoa, oats, sweet potatoes, whole grains</li>
              <li><strong>Fruits & veggies:</strong> High-fiber, antioxidant-rich foods</li>
              <li><strong>Hydration:</strong> Water, black coffee, green tea</li>
            </ul>

            {/* Merits */}
            <h2 className="text-xl  text-blue-900 mt-3">
              Merits (Advantages) of Intermittent Fasting
            </h2>
            <ol className="text-sm list-decimal list-inside ml-3 space-y-1">
              <li>Promotes Fat Loss</li>
              <li>Improves Insulin Sensitivity</li>
              <li>Supports Cellular Repair (Autophagy)</li>
              <li>Enhances Brain Health</li>
              <li>May Extend Lifespan</li>
              <li>Simplifies Dieting</li>
              <li>Boosts Energy and Mental Clarity</li>
            </ol>

            {/* Demerits */}
            <h2 className="text-xl text-blue-900 mt-4">
              Demerits (Disadvantages) of Intermittent Fasting
            </h2>
            <ol className="text-sm list-decimal list-inside ml-3 space-y-1">
              <li>Initial Hunger and Irritability</li>
              <li>Overeating During Eating Window</li>
              <li>May Affect Hormonal Balance (in Women)</li>
              <li>Not Suitable for Everyone</li>
              <li>Possible Muscle Loss (if protein is low)</li>
              <li>Social Inconvenience</li>
            </ol>

            {/* Summary */}
            <h2 className="text-xl  text-blue-900 mt-4">
              Summary Table
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mt-3 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border p-1 text-left">Aspect</th>
                    <th className="border p-1 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Definition", "Eating pattern alternating fasting and eating periods"],
                    ["Goal", "Weight loss, metabolic health, longevity"],
                    ["Key Benefit", "Fat burning, improved insulin sensitivity, cellular repair"],
                    ["Key Drawback", "Hunger, social difficulty, not ideal for everyone"],
                    ["Popular Type", "16/8 Method"],
                    ["Suitable For", "Intermediate or advanced dieters, not beginners"],
                  ].map(([aspect, desc], i) => (
                    <tr key={i}>
                      <td className="border p-1">{aspect}</td>
                      <td className="border p-1">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="max-w-4xl mx-auto p-6 text-gray-800">
            <h1 className="text-2xl font-bold text-blue-900 mb-3">4. Refeed Days</h1>

            <p className="text-sm mb-3">
              A <strong>Refeed Day</strong> is a planned, temporary increase in calorie
              (mainly carbohydrate) intake after several days or weeks of eating in a
              calorie deficit. It’s not a cheat day. The purpose is strategic — to:
            </p>

            <ul className="text-sm list-disc pl-3 mb-3">
              <li>Replenish glycogen stores (muscle energy)</li>
              <li>Restore hormonal balance, especially leptin and thyroid hormones</li>
              <li>Boost metabolism temporarily</li>
              <li>Provide mental and physical relief from dieting fatigue</li>
            </ul>

            <p className="text-sm mb-3 font-medium text-blue-900">
              In short: A refeed day helps your body and mind recover from continuous
              calorie restriction.
            </p>

            <h2 className="text-xl text-blue-900 mb-2">
              How Refeed Days Work
            </h2>
            <p className="text-sm mb-3">
              When you’re in a calorie deficit (eating less than you burn), your body
              loses fat but also slows down metabolism over time:
            </p>

            <ul className="text-sm list-disc pl-3 mb-3">
              <li>Leptin (hunger-regulating hormone) drops</li>
              <li>Thyroid hormones (T3/T4) reduce, slowing fat burning</li>
              <li>Glycogen levels decrease, causing fatigue</li>
              <li>Cortisol (stress hormone) may rise</li>
            </ul>

            <p className="text-sm mb-3">
              By temporarily raising carbs and calories, you signal to your body:{" "}
              <strong>“Food is available — you can safely keep burning fat.”</strong>
              <br />
              This helps maintain metabolism and performance without undoing fat loss
              progress.
            </p>

            <h2 className="text-xl  text-blue-900 mb-3">
              Key Difference: Refeed Day vs Cheat Day
            </h2>

            <div className="overflow-x-auto mb-3">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border p-1">Aspect</th>
                    <th className="border p-1">Refeed Day</th>
                    <th className="border p-1">Cheat Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Purpose</td>
                    <td className="border p-1">Hormonal & metabolic reset</td>
                    <td className="border p-1">Indulgence or break from diet</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Focus</td>
                    <td className="border p-1">Controlled carb increase</td>
                    <td className="border p-1">Uncontrolled food intake</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Calorie Control</td>
                    <td className="border p-1">Slight surplus (~10–30%)</td>
                    <td className="border p-1">
                      Often large surplus (can double maintenance)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Food Quality</td>
                    <td className="border p-1">Clean, complex carbs</td>
                    <td className="border p-1">Junk, high-fat, processed foods</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Goal</td>
                    <td className="border p-1">Support long-term fat loss</td>
                    <td className="border p-1">
                      Psychological relief, often leads to guilt
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm mb-3">
              A refeed is planned, calculated, and clean, while a cheat day is
              impulsive and often counterproductive.
            </p>

            <h2 className="text-xl  text-blue-900 mb-2">
              How to Implement a Refeed Day
            </h2>

            <h3 className="text-xl  text-blue-900 mt-4 mb-2">1. Frequency</h3>
            <ul className="text-sm list-disc pl-3 mb-3">
              <li>Every 7–14 days for moderate calorie deficits</li>
              <li>Every 2–3 weeks for smaller deficits</li>
              <li>Athletes or lean individuals may need it weekly</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              2. Macronutrient Adjustments
            </h3>
            <ul className="text-sm list-disc pl-3 mb-3">
              <li>Carbs: Increase by 50–100% (primary energy source)</li>
              <li>Protein: Keep the same (muscle protection)</li>
              <li>Fats: Keep low to moderate (to avoid excessive calories)</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              3. Calorie Increase Example
            </h3>
            <div className="overflow-x-auto mb-3">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border p-1">Type</th>
                    <th className="border p-1">Normal Day</th>
                    <th className="border p-1">Refeed Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Calories</td>
                    <td className="border p-1">1,800 kcal</td>
                    <td className="border p-1">2,200–2,400 kcal</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Carbs</td>
                    <td className="border p-1">150 g</td>
                    <td className="border p-1">250–300 g</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Protein</td>
                    <td className="border p-1">150 g</td>
                    <td className="border p-1">150 g</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Fat</td>
                    <td className="border p-1">60 g</td>
                    <td className="border p-1">50 g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl text-blue-900 mb-2">
              Sample Refeed Day Foods
            </h2>

            <p className="text-sm mb-2">Focus on complex, low-fat carbohydrates to refill glycogen without excessive fat gain:</p>
            <p className="text-sm font-semibold mb-1">Good Choices:</p>
            <ul className="list-disc pl-3 mb-3 text-sm">
              <li>Brown rice, quinoa, oats</li>
              <li>Sweet potatoes, whole-grain pasta</li>
              <li>Fruits (bananas, apples, berries)</li>
              <li>Whole-grain bread</li>
              <li>Lentils and beans</li>
            </ul>

            <p className="text-sm font-semibold mb-1">Avoid:</p>
            <ul className="list-disc pl-3 mb-3 text-sm">
              <li>Fried foods</li>
              <li>Sugary desserts</li>
              <li>Alcohol</li>
              <li>High-fat junk (pizza, burgers, etc.)</li>
            </ul>

            <h2 className="text-xl  text-blue-900 mb-2">
              Merits (Advantages) of Refeed Days
            </h2>
            <ul className="list-disc pl-3 mb-3 text-sm">
              <li>Restores leptin levels and reduces hunger</li>
              <li>Prevents metabolic slowdown</li>
              <li>Replenishes muscle glycogen</li>
              <li>Boosts mood and motivation</li>
              <li>Supports hormonal balance</li>
              <li>Reduces plateau risk</li>
            </ul>

            <h2 className="text-xl  text-blue-900 mb-2">
              Demerits (Disadvantages) of Refeed Days
            </h2>
            <ul className="list-disc pl-3 mb-3 text-sm">
              <li>Can lead to overeating if not tracked properly</li>
              <li>May cause temporary water weight gain</li>
              <li>Requires discipline and control</li>
              <li>Not necessary for beginners</li>
              <li>Can cause digestive discomfort from sudden carb increase</li>
            </ul>

            <h2 className="text-xl  text-blue-900 mb-2">
              Who Should Use Refeed Days
            </h2>
            <p className="text-sm font-semibold mb-1">Best For:</p>
            <ul className="list-disc pl-3 mb-3 text-sm">
              <li>People dieting for fat loss over 6+ weeks</li>
              <li>Athletes, bodybuilders, or intense trainers</li>
              <li>Leaner individuals (&lt;15% body fat for men, &lt;25% for women)</li>
            </ul>

            <p className="text-sm font-semibold mb-1">Avoid / Not Needed If:</p>
            <ul className="list-disc pl-3 mb-3 text-sm">
              <li>You’re new to dieting or early in fat loss</li>
              <li>You’re not in a calorie deficit</li>
              <li>You struggle with portion control</li>
            </ul>

            <h2 className="text-xl  text-blue-900 mb-3">
              Summary Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border p-1">Aspect</th>
                    <th className="border p-1">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Definition</td>
                    <td className="border p-1">
                      Planned increase in carbs/calories to restore metabolism and hormones
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Goal</td>
                    <td className="border p-1">
                      Prevent fat loss plateau, support performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Main Nutrient Increased</td>
                    <td className="border p-1">Carbohydrates</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Frequency</td>
                    <td className="border p-1">
                      Every 1–2 weeks (based on activity and leanness)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Key Benefits</td>
                    <td className="border p-1">
                      Boosts metabolism, leptin, mood, and training energy
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Key Drawbacks</td>
                    <td className="border p-1">
                      Risk of overeating, water gain, requires discipline
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Ideal For</td>
                    <td className="border p-1">
                      Experienced dieters or athletes under calorie restriction
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="max-w-5xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-xl font-bold text-blue-900 mb-3">
          5. Protein Sparing Modified Fast (PSMF)
        </h1>

        <p className="text-sm mb-3">
          The <strong>Protein Sparing Modified Fast (PSMF)</strong> is a very
          low-calorie, high-protein, low-carbohydrate, and low-fat diet designed
          to maximize fat loss while preserving lean muscle mass. The concept is
          simple:
          <span className="text-sm italic block text-blue-900 mt-1">
            “Lose fat fast, but spare your muscle.”
          </span>
        </p>

        <p className="text-sm mb-3">
          It is not a permanent diet — typically used for short-term, medically
          supervised rapid fat loss phases (often 2–12 weeks). Originally developed
          in the 1970s for obese patients, it’s now popular among advanced fitness
          individuals and athletes before competitions.
        </p>

        {/* How it works */}
        <h2 className="text-xl  text-blue-900 mb-2">
          How PSMF Works
        </h2>
        <p className="text-sm mb-3">
          When you drastically cut calories, your body tends to burn muscle along
          with fat for energy. PSMF prevents muscle loss by supplying adequate
          protein while restricting carbs and fats to push the body into
          fat-burning mode.
        </p>

        <p className="text-sm font-semibold mb-2">Mechanism:</p>
        <ol className="list-decimal pl-3 mb-3 text-sm">
          <li>Low carbs → deplete glycogen → promote fat oxidation (fat burning).</li>
          <li>Low fat intake → forces body to use stored fat for energy.</li>
          <li>High protein → preserves lean muscle and supports recovery.</li>
          <li>Calorie deficit → leads to rapid fat loss.</li>
        </ol>

        <p className="text-sm mb-3">
          It’s essentially a scientifically controlled fasting protocol that
          provides just enough nutrients to sustain vital functions.
        </p>

        {/* Macronutrient Table */}
        <h2 className="text-xl  text-blue-900 mb-3">
          Typical Macronutrient Ratios
        </h2>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border p-1">Nutrient</th>
                <th className="border p-1">Appr. % of Calories</th>
                <th className="border p-1">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">Protein</td>
                <td className="border p-1">60–70%</td>
                <td className="border p-1">Muscle preservation</td>
              </tr>
              <tr>
                <td className="border p-1">Carbohydrates</td>
                <td className="border p-1">5–10%</td>
                <td className="border p-1">Minimal for metabolism</td>
              </tr>
              <tr>
                <td className="border p-1">Fat</td>
                <td className="border p-1">10–20%</td>
                <td className="border p-1">Only from lean protein sources</td>
              </tr>
              <tr>
                <td className="border p-1">Calories</td>
                <td className="border p-1">600–1,000 kcal/day (approx.)</td>
                <td className="border p-1">Deep caloric deficit</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Protein Requirement */}
        <h2 className="text-xl  text-blue-900 mb-2">
          Protein Requirement
        </h2>
        <p className="text-sm mb-3">
          Protein intake is based on <strong>lean body mass (LBM)</strong> — not
          total weight. Recommended intake:
        </p>
        <p className="text-sm mb-3">
          👉 <strong>1.2–1.5 grams of protein per pound of lean body mass (LBM)</strong>
        </p>
        <p className="text-sm mb-3">
          Example: If a person has 150 lb LBM, daily protein = <strong>180–225 g</strong>.
          Protein sources should be very lean to minimize fat intake.
        </p>

        {/* Typical Foods */}
        <h2 className="text-xl  text-blue-900 mb-3">
          Typical Foods Allowed on PSMF
        </h2>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border p-1">Category</th>
                <th className="border p-1">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">Lean Proteins</td>
                <td className="border p-1">
                  Chicken breast, turkey, white fish (cod, tilapia), shrimp, egg whites
                </td>
              </tr>
              <tr>
                <td className="border p-1">Low-Fat Dairy (optional)</td>
                <td className="border p-1">Non-fat Greek yogurt, cottage cheese</td>
              </tr>
              <tr>
                <td className="border p-1">Low-Carb Vegetables</td>
                <td className="border p-1">
                  Spinach, lettuce, cucumber, broccoli, cauliflower, zucchini
                </td>
              </tr>
              <tr>
                <td className="border p-1">Drinks</td>
                <td className="border p-1">Water, green tea, black coffee</td>
              </tr>
              <tr>
                <td className="border p-1">Supplements</td>
                <td className="border p-1">
                  Multivitamin, potassium, sodium, magnesium, fish oil
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm font-semibold mb-1">Avoid:</p>
        <ul className="list-disc pl-3 mb-3 text-sm">
          <li>All grains, fruits, and starchy vegetables</li>
          <li>Dairy with fat</li>
          <li>Oils, butter, nuts, seeds, sugary drinks, alcohol</li>
        </ul>

        {/* Phases */}
        <h2 className="text-xl  text-blue-900 mb-2">Phases of PSMF</h2>
        <p className="text-sm font-semibold">Rapid Fat Loss Phase (Active Phase)</p>
        <ul className="list-disc pl-3 mb-3 text-sm">
          <li>2–6 weeks (up to 12 weeks under supervision)</li>
          <li>Strict adherence to protein + vegetables only</li>
        </ul>

        <p className="text-sm font-semibold">Refeed / Transition Phase</p>
        <ul className="list-disc pl-3 mb-3 text-sm">
          <li>Gradual reintroduction of carbohydrates and fats</li>
          <li>Prevents rebound weight gain</li>
          <li>Typically lasts 2–4 weeks</li>
        </ul>

        {/* Physiological Effects */}
        <h2 className="text-xl  text-blue-900 mb-3">
          Physiological Effects
        </h2>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border p-1">Effect</th>
                <th className="border p-1">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">Fat Loss</td>
                <td className="border p-1">Rapid due to severe calorie deficit</td>
              </tr>
              <tr>
                <td className="border p-1">Muscle Preservation</td>
                <td className="border p-1">
                  Maintained through high protein intake
                </td>
              </tr>
              <tr>
                <td className="border p-1">Insulin Reduction</td>
                <td className="border p-1">
                  Stabilizes blood sugar and promotes fat metabolism
                </td>
              </tr>
              <tr>
                <td className="border p-1">Glycogen Depletion</td>
                <td className="border p-1">Encourages stored fat use</td>
              </tr>
              <tr>
                <td className="border p-1">Ketosis (partial)</td>
                <td className="border p-1">
                  Some individuals may enter mild ketosis
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Merits */}
        <h2 className="text-xl  text-blue-900 mb-2">
          Merits (Advantages) of PSMF
        </h2>
        <ul className="list-disc pl-3 mb-3 text-sm">
          <li>Extremely rapid fat loss (1.5–2.5 kg per week in early phases)</li>
          <li>Preserves muscle mass</li>
          <li>Improves insulin sensitivity and glucose control</li>
          <li>Reduces appetite due to high protein and mild ketosis</li>
          <li>Quick visible results boost motivation</li>
          <li>Clinically beneficial for obesity management</li>
        </ul>

        {/* Demerits */}
        <h2 className="text-xl  text-blue-900 mb-2">
          Demerits (Disadvantages) of PSMF
        </h2>
        <ul className="list-disc pl-3 mb-3 text-sm">
          <li>
            Nutrient deficiency risk — requires supplements for vitamins and minerals
          </li>
          <li>Difficult to sustain long-term</li>
          <li>May cause fatigue, dizziness, and energy crashes</li>
          <li>Potential hormonal disruption if used too long</li>
          <li>Rebound weight gain if transition is mishandled</li>
          <li>Not suitable for individuals with certain medical conditions</li>
        </ul>

        {/* Who Should Use */}
        <h2 className="text-xl  text-blue-900 mb-2">
          Who Should Use PSMF
        </h2>
        <p className="text-sm font-semibold mb-1">Ideal Candidates:</p>
        <ul className="list-disc pl-3 mb-3 text-sm">
          <li>Severely overweight or obese individuals needing fast results</li>
          <li>Athletes or bodybuilders before competition</li>
          <li>People under professional or medical supervision</li>
        </ul>

        <p className="text-sm font-semibold mb-1">Not Suitable For:</p>
        <ul className="list-disc pl-3 mb-3 text-sm">
          <li>Children or pregnant/breastfeeding women</li>
          <li>Individuals with kidney, liver, or heart conditions</li>
          <li>Those prone to eating disorders</li>
          <li>Anyone unable to maintain strict dietary adherence</li>
        </ul>

        {/* Summary Table */}
        <h2 className="text-xl  text-blue-900 mb-3">
          Summary Table
        </h2>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border p-1">Aspect</th>
                <th className="border p-1">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">Definition</td>
                <td className="border p-1">
                  High-protein, very-low-calorie, low-carb, low-fat diet for rapid fat loss
                </td>
              </tr>
              <tr>
                <td className="border p-1">Main Goal</td>
                <td className="border p-1">
                  Preserve muscle while losing fat quickly
                </td>
              </tr>
              <tr>
                <td className="border p-1">Calories/day</td>
                <td className="border p-1">600–1,000 kcal</td>
              </tr>
              <tr>
                <td className="border p-1">Protein Intake</td>
                <td className="border p-1">1.2–1.5 g/lb of lean mass</td>
              </tr>
              <tr>
                <td className="border p-1">Duration</td>
                <td className="border p-1">2–12 weeks (short term)</td>
              </tr>
              <tr>
                <td className="border p-1">Key Benefits</td>
                <td className="border p-1">
                  Rapid fat loss, muscle preservation, improved metabolic health
                </td>
              </tr>
              <tr>
                <td className="border p-1">Key Drawbacks</td>
                <td className="border p-1">
                  Nutrient deficiency, energy crash, hard to sustain, rebound risk
                </td>
              </tr>
              <tr>
                <td className="border p-1">Supervision Needed</td>
                <td className="border p-1">
                  Yes — ideally medical or professional
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <h2 className="text-xl  text-blue-900 mb-2">
          In Simple Terms
        </h2>
        <p className="text-sm">
          Think of PSMF as:{" "}
          <span className="italic text-blue-900">
            “A scientifically controlled crash diet that keeps your muscles safe
            while aggressively burning fat.”
          </span>{" "}
          It’s highly effective but should be followed only short-term with a
          structured exit plan.
        </p>
          </div>
          <div className="px-3 text-gray-800">
            <h2 className="text-xl font-bold text-blue-900 mb-3">
              6. Calorie/Carb Backloading
            </h2>

            <p className="text-sm mb-3">
              <strong>Calorie/Carb Backloading</strong> is a nutritional strategy
              designed to optimize energy use, fat loss, and muscle gain by consuming
              the majority of daily carbohydrates and/or calories later in the day,
              often after exercise. The idea is to align nutrient intake with the
              body’s circadian rhythm and insulin sensitivity patterns, allowing for
              better energy partitioning — meaning your body uses nutrients more
              efficiently.
            </p>

            <p className="text-sm mb-3">
              In traditional diets, people are advised to eat balanced meals
              throughout the day, including carbohydrates at breakfast for energy.
              However, Calorie or Carb Backloading challenges this by suggesting that
              eating more carbs and calories in the evening — particularly after
              resistance training — can improve body composition and energy
              utilization.
            </p>

            <h3 className="text-xl  text-blue-900 mb-2">
              Typical Daily Pattern
            </h3>

            <ul className="list-disc list-inside mb-3 text-sm ">
              <li>
                <strong>Morning to Afternoon (Low Carb/Low Calorie Phase):</strong>{" "}
                Focus on protein and fats; very few or no carbs. Keeps insulin levels
                low, promoting fat burning during the first half of the day.
              </li>
              <li>
                <strong>Evening (High Carb/High Calorie Phase):</strong> Consume the
                majority of carbs and calories after a workout. Muscles are more
                insulin-sensitive, storing carbs as glycogen instead of fat.
              </li>
              <li>
                <strong>Nighttime:</strong> Higher carb intake can enhance serotonin
                production, improving sleep quality.
              </li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Scientific Basis
            </h3>

            <ul className="list-disc list-inside mb-3 text-sm">
              <li>
                <strong>Insulin Sensitivity:</strong> Muscles are more
                insulin-sensitive post-exercise, meaning carbs eaten then are less
                likely stored as fat.
              </li>
              <li>
                <strong>Circadian Rhythm:</strong> Insulin sensitivity is highest
                post-workout; backloading leverages this temporary window.
              </li>
              <li>
                <strong>Hormonal Advantage:</strong> Low-carb mornings promote fat
                oxidation and growth hormone release, while evening carbs help reduce
                cortisol and improve recovery.
              </li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">Merits (Advantages)</h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>Enhanced fat burning through low-carb mornings.</li>
              <li>Improved glycogen replenishment and muscle recovery post-workout.</li>
              <li>Better energy timing — carbs used for repair, not fat storage.</li>
              <li>Evening carbs enhance serotonin and melatonin, improving sleep.</li>
              <li>Simple routine — easier to manage meal timing.</li>
              <li>Reduced hunger and cravings throughout the day.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Demerits (Disadvantages)
            </h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>Not suitable for morning exercisers — relies on evening workouts.</li>
              <li>Possible daytime fatigue due to low-carb mornings.</li>
              <li>Risk of overeating at night if portions are uncontrolled.</li>
              <li>May affect hormonal balance if used for extended periods.</li>
              <li>Less effective for people with insulin resistance or diabetes.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Who Can Benefit Most
            </h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>Individuals training in the late afternoon or evening.</li>
              <li>Those focused on fat loss while maintaining muscle mass.</li>
              <li>People who prefer larger dinners and smaller breakfasts.</li>
              <li>Those comfortable with intermittent fasting or delayed meals.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Summary Table
            </h3>

            <div className="overflow-x-auto mb-3">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100 text-blue-900">
                  <tr>
                    <th className="border p-1 text-left">Aspect</th>
                    <th className="border p-1 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1font-medium">Concept</td>
                    <td className="border p-1">
                      Eating most carbs/calories in the evening, post-workout
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1 font-medium">Goal</td>
                    <td className="border p-1">
                      Maximize fat burning and muscle gain
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1 font-medium">Best For</td>
                    <td className="border p-1">
                      Evening exercisers, fat loss, and body recomposition
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1 font-medium">Main Advantage</td>
                    <td className="border p-1">
                      Better nutrient partitioning (carbs → muscles, not fat)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1 font-medium">Main Disadvantage</td>
                    <td className="border p-1">
                      Low energy during the day; not ideal for morning workouts
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1 font-medium">Scientific Support</td>
                    <td className="border p-1">
                      Moderate — backed by insulin sensitivity and hormonal studies
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1 font-medium">Sustainability</td>
                    <td className="border p-1">
                      Moderate — requires timing discipline
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="italic text-gray-700 text-sm">
              In summary, Calorie/Carb Backloading can be a powerful method to improve
              fat metabolism and muscle recovery — especially for evening exercisers
              — but it requires mindful timing and portion control to be effective.
            </p>
          </div>
          <div className="px-3 text-gray-800 leading-relaxed">
            <h2 className="text-xl  text-blue-900 mb-3">7. Reverse Dieting</h2>

            <p className="text-sm mb-3">
              <strong>Reverse dieting</strong> is the deliberate, gradual increase of calorie
              intake after a period of dieting or restriction. The goal is to restore
              your metabolic rate, normalize hormones and appetite, and transition
              back to a sustainable maintenance calorie level — all while minimizing
              fat regain. Think of it as a carefully controlled exit from a diet
              rather than an immediate return to pre-diet eating habits.
            </p>

            <h3 className="text-xl  text-blue-900 mb-2">How It Works</h3>
            <ul className="list-disc list-inside text-sm mb-3">
              <li>During dieting, metabolism slows, appetite hormones shift, and glycogen stores drop.</li>
              <li>
                Reverse dieting adds small calorie increments (usually weekly) to help
                metabolism and hormones recover gradually.
              </li>
              <li>
                Progress is monitored by tracking body weight, energy, and composition
                to restore balance with minimal fat gain.
              </li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Typical Protocol
            </h3>
            <ul className="list-disc list-inside text-sm mb-3">
              <li>Assess current intake, body weight trend, and activity level.</li>
              <li>
                Add small calorie increments weekly — usually +50 to +100 kcal per
                week.
              </li>
              <li>
                Add calories primarily from <strong>carbohydrates</strong>, with small
                increases in fat if needed. Keep protein steady to protect muscle.
              </li>
              <li>
                Monitor weekly averages of weight, clothing fit, energy, and gym
                performance.
              </li>
              <li>
                Adjust pace — pause if weight rises too fast; continue if energy improves
                and weight is stable.
              </li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">Example</h3>
            <p className="text-sm mb-3">
              <strong>Current intake:</strong> 1,400 kcal/day  
              <br />
              <strong>Maintenance goal:</strong> 2,000 kcal/day (difference: 600 kcal)
            </p>

            <ul className="list-disc list-inside text-sm mb-3">
              <li>+50 kcal/week → ~12 weeks to reach 2,000 kcal</li>
              <li>+100 kcal/week → ~6 weeks to reach 2,000 kcal</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Example Target Macros (at 2,000 kcal)
            </h3>
            <div className="overflow-x-auto mb-3">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100 text-blue-900">
                  <tr>
                    <th className="border p-1 text-left">Macronutrient</th>
                    <th className="border p-1 text-left">Percentage</th>
                    <th className="border p-1  text-left">Calories</th>
                    <th className="border p-1  text-left">Grams</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1  font-medium">Protein</td>
                    <td className="border p-1 ">30%</td>
                    <td className="border p-1 ">600 kcal</td>
                    <td className="border p-1 ">150 g</td>
                  </tr>
                  <tr>
                    <td className="border p-1  font-medium">Fat</td>
                    <td className="border p-1 ">25%</td>
                    <td className="border p-1 ">500 kcal</td>
                    <td className="border p-1 ">~55.6 g</td>
                  </tr>
                  <tr>
                    <td className="border p-1  font-medium">Carbohydrates</td>
                    <td className="border p-1 ">45%</td>
                    <td className="border p-1 ">900 kcal</td>
                    <td className="border p-1 ">225 g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl  text-blue-900 mb-2">
              Why People Use Reverse Dieting
            </h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>Recover from metabolic adaptation and restore energy levels.</li>
              <li>Reduce extreme hunger and food cravings.</li>
              <li>Improve training performance and recovery.</li>
              <li>Stabilize hormones like leptin and thyroid function.</li>
              <li>Transition to maintenance calories without bingeing.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Merits (Advantages)
            </h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>Smoother metabolic recovery with gradual increases.</li>
              <li>Better control of fat regain and improved energy.</li>
              <li>Enhanced training and recovery from added carbs.</li>
              <li>Psychological benefits — less restrictive yet structured.</li>
              <li>Helps establish sustainable maintenance eating habits.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Demerits (Disadvantages)
            </h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>Slow process — takes weeks or months to complete.</li>
              <li>May not fully “reset” metabolism for everyone.</li>
              <li>Requires consistent tracking and discipline.</li>
              <li>Can trigger overeating for those with past disordered eating.</li>
              <li>Results vary by individual body response.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Who It’s Best For
            </h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>People finishing a long or steep diet.</li>
              <li>Fitness competitors or those recovering from restriction.</li>
              <li>Anyone patient and comfortable tracking progress.</li>
            </ul>

            <h3 className="text-xl text-blue-900 mb-2">
              Be Cautious / Consult a Professional If:
            </h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>You have a history of eating disorders.</li>
              <li>You have metabolic illnesses like diabetes.</li>
              <li>You are pregnant or breastfeeding.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Monitoring & Success Tips
            </h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>Use weekly weight averages for accuracy.</li>
              <li>Track training, sleep, energy, and hunger.</li>
              <li>If weight jumps  greater than 1% per week, slow or pause increases.</li>
              <li>Continue increments if energy improves and weight is stable.</li>
              <li>Accept minor fat gain if performance improves.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">Quick FAQ</h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>
                <strong>Will reverse dieting make me gain fat?</strong>  
                Some initial gain (water + glycogen) is normal, but fat gain is
                minimal with proper pacing.
              </li>
              <li>
                <strong>How long does it take?</strong>  
                Usually 6–12 weeks depending on how deep the calorie deficit was.
              </li>
              <li>
                <strong>Is it necessary for everyone?</strong>  
                Not always. It’s most useful after prolonged or aggressive dieting.
              </li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-2">
              Final Practical Tips
            </h3>
            <ul className="list-disc list-inside mb-3 text-sm">
              <li>Increase calories slowly (+50–100 kcal/week).</li>
              <li>Keep protein stable to protect muscle.</li>
              <li>Prioritize carbs for recovery and hormonal support.</li>
              <li>Be patient — gradual progress is key.</li>
              <li>Seek guidance if you have medical or eating-related conditions.</li>
            </ul>

            <p className="italic text-gray-700 mb-3 text-sm" >
              In summary, reverse dieting helps restore metabolic health after calorie
              restriction by reintroducing food in a controlled, gradual manner —
              making it a smart, sustainable way to exit a fat-loss phase.
            </p>
          </div>
          <div className="p-6 text-gray-800 leading-relaxed">
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              8. Calorie/Carb Backloading
            </h2>

            <p className="mb-3 text-sm">
              <strong>Calorie/Carb Backloading</strong> is a strategic eating approach
              where you consume most of your daily calories — especially carbohydrates
              — later in the day, typically after your workout. It’s based on the idea
              that your body handles carbohydrates more efficiently after physical
              activity, allowing better muscle recovery, glycogen replenishment, and
              less fat storage.
            </p>

            <p className="mb-3 text-sm italic text-gray-700">
              “Eat lighter in the morning, train in the afternoon or evening, and eat
              heavier (especially carbs) at night.”
            </p>

            <p className="mb-3 text-sm">
              It’s the opposite of traditional diet advice that says “eat breakfast
              like a king and dinner like a beggar.”
            </p>

            <h3 className="text-xl  text-blue-900 mb-3">
              How It Works (Mechanism)
            </h3>

            <h4 className="text-xl  text-blue-900 mb-2">
              1. Insulin Sensitivity and Timing:
            </h4>
            <ul className="list-disc ml-3 mb-3 text-sm">
              <li>After resistance training, your muscles become highly insulin-sensitive.</li>
              <li>
                This means they absorb glucose more efficiently, storing it as muscle
                glycogen rather than fat.
              </li>
              <li>
                Consuming most of your carbs post-workout therefore reduces fat
                storage and enhances recovery.
              </li>
            </ul>

            <h4 className="text-xl  text-blue-900 mb-2">
              2. Circadian Rhythm and Hormone Response:
            </h4>
            <ul className="list-disc ml-3 mb-3 text-sm">
              <li>
                Early in the day, cortisol (a stress hormone) is high, promoting fat
                burning.
              </li>
              <li>
                By delaying carb intake until cortisol levels drop, you extend your
                fat-burning window.
              </li>
              <li>
                Eating carbs at night boosts serotonin and melatonin, improving sleep
                and recovery.
              </li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-3">
              Typical Daily Pattern
            </h3>

            <div className="overflow-x-auto mb-3">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border p-1">Time of Day</th>
                    <th className="border p-1">Meal Type</th>
                    <th className="border p-1">Composition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Morning</td>
                    <td className="border p-1">Light</td>
                    <td className="border p-1">
                      Protein + Fat (e.g., eggs, avocado, nuts, coffee) — few or no
                      carbs
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Midday</td>
                    <td className="border p-1">Moderate</td>
                    <td className="border p-1">
                      Protein + Veggies (low-carb)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Afternoon/Evening (After Workout)</td>
                    <td className="border p-1">Heavy</td>
                    <td className="border p-1">
                      Protein + High Carbs (rice, potatoes, pasta, fruits, etc.)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Night</td>
                    <td className="border p-1">Optional Snack</td>
                    <td className="border p-1">
                      Carbs + Protein to improve sleep and recovery
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl f text-blue-900 mb-3">
              Scientific Rationale
            </h3>
            <ul className="list-disc ml-3 mb-3 text-sm">
              <li>
                <strong>Insulin Sensitivity:</strong> Exercise boosts insulin
                sensitivity, making post-workout carbs more likely to replenish
                glycogen than store as fat.
              </li>
              <li>
                <strong>Hormonal Advantage:</strong> Low-carb mornings help maintain
                fat oxidation and growth hormone output; evening carbs reduce cortisol
                and aid recovery.
              </li>
              <li>
                <strong>Energy Partitioning:</strong> Calories consumed post-workout
                are more likely used for muscle repair than stored as fat.
              </li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-3">
              Merits (Advantages)
            </h3>
            <ul className="list-disc ml-3 mb-3 text-sm">
              <li>Optimized fat burning during low-carb mornings.</li>
              <li>Better nutrient partitioning and muscle glycogen restoration.</li>
              <li>Improved recovery and muscle growth post-workout.</li>
              <li>Enhanced sleep quality due to serotonin and melatonin boost.</li>
              <li>Balanced energy throughout the day.</li>
              <li>Flexibility for larger evening meals.</li>
              <li>Reduced hunger and cravings.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-3">
              Demerits (Disadvantages)
            </h3>
            <ul className="list-disc ml-3 mb-3 text-sm">
              <li>Low energy in the morning for some individuals.</li>
              <li>Not suitable for morning exercisers.</li>
              <li>Challenging for certain lifestyles or work schedules.</li>
              <li>Potential for overeating at night if not portioned.</li>
              <li>Requires strict timing and discipline.</li>
              <li>Limited evidence for sedentary individuals.</li>
              <li>Possible sleep issues from large meals late at night.</li>
            </ul>

            <h3 className="text-xl  text-blue-900 mb-3">
              Summary Table
            </h3>

            <div className="overflow-x-auto mb-3">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border p-1">Aspect</th>
                    <th className="border p-1">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Concept</td>
                    <td className="border p-1">
                      Eat fewer calories and carbs early, most carbs later (after training)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Goal</td>
                    <td className="border p-1">
                      Maximize fat loss, muscle gain, and recovery
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Ideal For</td>
                    <td className="border p-1">
                      Evening exercisers, strength trainers, body recomposition
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Mechanism</td>
                    <td className="border p-1">
                      Uses post-workout insulin sensitivity for better nutrient partitioning
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Main Advantage</td>
                    <td className="border p-1">
                      Promotes fat burning and better sleep
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Main Disadvantage</td>
                    <td className="border p-1">
                      Poor fit for morning workouts; possible overeating
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Scientific Support</td>
                    <td className="border p-1">
                      Moderate — supports insulin timing and glycogen replenishment
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Sustainability</td>
                    <td className="border p-1">
                      Moderate to high (for those who prefer large dinners)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl  text-blue-900 mb-3">
              Practical Example (2,000 kcal Plan)
            </h3>

            <div className="overflow-x-auto mb-3">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-50 text-blue-900">
                  <tr>
                    <th className="border p-1">Meal</th>
                    <th className="border p-1">Time</th>
                    <th className="border p-1">Macros (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">Breakfast</td>
                    <td className="border p-1">8:00 AM</td>
                    <td className="border p-1">300 kcal — 25g P, 15g F, 5g C</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Lunch</td>
                    <td className="border p-1">1:00 PM</td>
                    <td className="border p-1">400 kcal — 30g P, 20g F, 10g C</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Workout</td>
                    <td className="border p-1">6:00 PM</td>
                    <td className="border p-1">—</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Dinner (Post-Workout)</td>
                    <td className="border p-1">7:00 PM</td>
                    <td className="border p-1">
                      900 kcal — 40g P, 20g F, 120g C
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-1">Snack</td>
                    <td className="border p-1">9:30 PM</td>
                    <td className="border p-1">
                      400 kcal — 25g P, 10g F, 60g C
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl  text-blue-900 mb-3">
              Key Takeaways
            </h3>
            <ul className="list-disc ml-3 text-sm">
              <li>Stay low-carb in the morning to promote fat burning.</li>
              <li>
                Eat most calories and carbs in the evening for recovery and sleep.
              </li>
              <li>
                Total calories still determine results — timing enhances performance
                and composition.
              </li>
              <li>
                Ideal for evening exercisers; less effective for early morning
                workouts.
              </li>
            </ul>
          </div>         
          
        </div>

        {/* Sidebar below */}
        <div className="bg-white shadow-lg rounded-xl">
          <Sidebar />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
