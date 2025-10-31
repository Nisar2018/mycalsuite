import React from "react";
import {Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BasalMetabolicRateCalculator from '../components/health/BasalMetabolicRateCalculator';

export default function ScientificCalulatorPage() {
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
                  <li className="text-gray-800 font-semibold">BMR Calculator</li>
                </ol>
              </nav>
              {/* Meta SEO */}
                    <Title>BMR Calculator – Calculate Your Basal Metabolic Rate Online | MyCalSuite</Title>
                    <Meta
                      name="description"
                      content="Calculate your Basal Metabolic Rate (BMR) instantly with our free BMR Calculator. Find out how many calories your body burns at rest and plan your diet, fitness, or weight management goals effectively."
                    />
                    <meta name="keywords" content="BMR calculator, basal metabolic rate, daily calorie calculator, calorie burn calculator, energy expenditure calculator, BMR formula, calculate BMR online, fitness calculator, diet planner, MyCalSuite BMR"></meta>
   

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row p-6 gap-6">
        {/* Main Portion */}
        <div className="w-7/10 bg-white p-6 shadow-lg rounded-xl flex flex-col gap-2">
          {/* Heading */}
             

          <div className="text-center ">
            <h1 className="text-3xl font-bold text-blue-900">
              BMR Calculator
            </h1>
            <p className="text-start text-sm mt-3">The Basal Metabolic Rate (BMR) Calculator estimates how many calories your body burns at rest to maintain essential functions like breathing and circulation. It reflects energy used in a fully rested, fasted state—helping you understand your daily calorie needs and manage your diet or fitness goals effectively. </p>
          </div>

          {/* Row 1: Calculator */}
          <div className="rounded-lg border-4 border-blue-50 shadow-md ">
            <BasalMetabolicRateCalculator />
          </div>

          {/* Row 2: Text Section */}
         <div className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
    
    
         {/* Information Section */}
          <div className="mt-10 px-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              What is BMR and How to Use It
            </h2>

            <div className="max-w-3xl mx-auto text-blue-900 space-y-4">
              <p>
                <span className="font-semibold">Basal Metabolic Rate (BMR)</span> refers to
                the minimum number of calories your body needs to perform basic life-sustaining
                functions while at rest — such as breathing, circulating blood, regulating body
                temperature, and maintaining organ function. In simple terms, your BMR represents
                the energy your body uses just to stay alive.
              </p>

              <p>
                Understanding your BMR helps you estimate your total daily energy expenditure (TDEE),
                which combines your BMR with calories burned through daily activities and exercise.
                Knowing this value allows you to better plan your nutrition goals — whether you want
                to lose weight, maintain it, or gain muscle.
              </p>

              <h3 className="text-xl font-semibold text-blue-900 mt-6">
                How to Use the BMR Calculator
              </h3>

              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold">Select your unit type:</span> Choose between{" "}
                  <em>US Units</em> (feet, inches, pounds) or <em>Metric Units</em> (centimeters,
                  kilograms).
                </li>
                <li>
                  <span className="font-semibold">Enter your details:</span> Fill in your{" "}
                  <em>age, gender, height, and weight</em>. These inputs are essential for accurate
                  calculations.
                </li>
                <li>
                  <span className="font-semibold">Choose the formula:</span> The calculator supports
                  three scientific formulas — <em>Mifflin St Jeor</em>,{" "}
                  <em>Revised Harris-Benedict</em>, and <em>Katch McArdle</em>. Each uses slightly
                  different methods to estimate your BMR.
                </li>
                <li>
                  <span className="font-semibold">Select result type:</span> You can display results
                  either in <em>Calories</em> or <em>Kilojoules</em>, depending on your preference.
                </li>
                <li>
                  <span className="font-semibold">Click “Calculate”:</span> Your BMR will be displayed
                  instantly, along with your estimated daily energy needs (EER) based on your activity
                  level — from sedentary to extra active.
                </li>
              </ol>

              <p>
                Once you have your BMR and EER values, you can adjust your calorie intake to meet
                your goals. Consuming fewer calories than your EER supports weight loss, while eating
                slightly more helps with healthy weight gain or muscle growth.
              </p>

              <h3 className="text-xl font-semibold text-blue-900 mt-6">
                Understanding Your Results
              </h3>

              <p>
                A higher BMR generally means your body burns more energy at rest — often due to greater
                muscle mass, younger age, or a more active metabolism. Conversely, a lower BMR means your
                body conserves energy more efficiently. Using your BMR as a foundation, you can make
                informed adjustments to your diet, exercise routine, and overall wellness strategy.
              </p>
            </div>
          </div>
          {/* Comparison Table Section */}
          <div className="mt-10 px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Comparison of BMR Formulas
            </h3>

            <div className="max-w-4xl mx-auto text-blue-900">
              <p className="mb-4">
                There are several methods to calculate Basal Metabolic Rate (BMR). Each uses
                slightly different parameters and constants to estimate your resting energy
                needs. Here’s a side-by-side comparison of the most commonly used formulas:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left">Formula</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Equation (Male)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Equation (Female)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">
                        Mifflin-St Jeor
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (10 × weight [kg]) + (6.25 × height [cm]) − (5 × age [years]) + 5
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (10 × weight [kg]) + (6.25 × height [cm]) − (5 × age [years]) − 161
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Considered the most accurate for modern populations; widely used by dietitians.
                      </td>
                    </tr>

                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">
                        Revised Harris-Benedict
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (13.397 × weight [kg]) + (4.799 × height [cm]) − (5.677 × age [years]) + 88.362
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (9.247 × weight [kg]) + (3.098 × height [cm]) − (4.330 × age [years]) + 447.593
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        An improved version of the original 1919 formula; slightly higher estimates than Mifflin-St Jeor.
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">
                        Katch-McArdle
                      </td>
                      <td colSpan="2" className="border border-gray-300 px-3 py-2 text-center">
                        370 + (21.6 × Lean Body Mass [kg])
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Best for individuals who know their body fat percentage. Uses lean mass instead of total body weight.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                All three formulas provide useful estimates of your resting energy needs. However,
                <span className="font-semibold"> Mifflin-St Jeor </span> is generally recommended
                for most adults because of its modern applicability and research-backed accuracy.
                <span className="font-semibold"> Katch-McArdle </span> is ideal for fitness
                enthusiasts who track body composition closely.
              </p>
            </div>
          </div>
          {/* Key Takeaways Section */}
          <div className="mt-10 px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Key Takeaways About BMR Calculation
            </h3>

            <div className="max-w-3xl mx-auto text-blue-900 space-y-4">
              <p>
                Understanding your <span className="font-semibold">Basal Metabolic Rate (BMR)</span> 
                is the first step toward creating a personalized nutrition and fitness plan. 
                Whether your goal is to lose fat, maintain weight, or build muscle, knowing 
                how your body uses energy helps you make smarter daily choices.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold">1. Mifflin-St Jeor</span> — The most accurate 
                  and widely accepted BMR formula for modern populations. Best choice for most users.
                </li>
                <li>
                  <span className="font-semibold">2. Revised Harris-Benedict</span> — Produces 
                  slightly higher calorie estimates and works well for active individuals.
                </li>
                <li>
                  <span className="font-semibold">3. Katch-McArdle</span> — Ideal for fitness 
                  enthusiasts who know their body fat percentage and want a lean mass–based estimate.
                </li>
                <li>
                  <span className="font-semibold">4. Adjust for activity level:</span> Multiply 
                  your BMR by an activity factor to estimate your Total Daily Energy Expenditure (TDEE). 
                  This helps determine how many calories you burn in a typical day.
                </li>
                <li>
                  <span className="font-semibold">5. Use your results wisely:</span> 
                  - To <em>lose weight</em>: eat slightly below your TDEE.  
                  - To <em>maintain weight</em>: match your TDEE.  
                  - To <em>gain weight or muscle</em>: eat slightly above your TDEE.
                </li>
              </ul>

              <p>
                Remember, BMR is only one piece of your overall health equation. Your sleep, stress,
                hydration, and daily movement all influence how efficiently your body burns energy.
                Use your BMR as a scientific foundation to build long-term, sustainable habits.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-900 p-4 rounded-lg mt-6">
                <p className="font-semibold text-blue-900">
                Pro Tip:
                </p>
                <p className="text-blue-900">
                  For the most accurate results, measure your weight and height using consistent units,
                  and recheck your BMR every few months — especially after major body composition or
                  lifestyle changes.
                </p>
              </div>
            </div>
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
          <h1 className="text-xl font-bold text-blue-900 ">
            BMR Calculator
          </h1>
          <p className="text-start text-sm mt-3">The Basal Metabolic Rate (BMR) Calculator estimates how many calories your body burns at rest to maintain essential functions like breathing and circulation. It reflects energy used in a fully rested, fasted state—helping you understand your daily calorie needs and manage your diet or fitness goals effectively. </p>
        </div>

        {/* Row 1: Calculator */}
        <div className="bg-white p-4 shadow-lg rounded-xl border-4 border-blue-50">
          <BasalMetabolicRateCalculator/>
        </div>

        {/* Row 2: Text Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl space-y-4">
          
           {/* Information Section */}
          <div className="mt-10 px-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              What is BMR and How to Use It
            </h2>

            <div className="max-w-3xl mx-auto text-blue-900 space-y-4">
              <p>
                <span className="font-semibold">Basal Metabolic Rate (BMR)</span> refers to
                the minimum number of calories your body needs to perform basic life-sustaining
                functions while at rest — such as breathing, circulating blood, regulating body
                temperature, and maintaining organ function. In simple terms, your BMR represents
                the energy your body uses just to stay alive.
              </p>

              <p>
                Understanding your BMR helps you estimate your total daily energy expenditure (TDEE),
                which combines your BMR with calories burned through daily activities and exercise.
                Knowing this value allows you to better plan your nutrition goals — whether you want
                to lose weight, maintain it, or gain muscle.
              </p>

              <h3 className="text-xl font-semibold text-blue-900 mt-6">
                How to Use the BMR Calculator
              </h3>

              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold">Select your unit type:</span> Choose between{" "}
                  <em>US Units</em> (feet, inches, pounds) or <em>Metric Units</em> (centimeters,
                  kilograms).
                </li>
                <li>
                  <span className="font-semibold">Enter your details:</span> Fill in your{" "}
                  <em>age, gender, height, and weight</em>. These inputs are essential for accurate
                  calculations.
                </li>
                <li>
                  <span className="font-semibold">Choose the formula:</span> The calculator supports
                  three scientific formulas — <em>Mifflin St Jeor</em>,{" "}
                  <em>Revised Harris-Benedict</em>, and <em>Katch McArdle</em>. Each uses slightly
                  different methods to estimate your BMR.
                </li>
                <li>
                  <span className="font-semibold">Select result type:</span> You can display results
                  either in <em>Calories</em> or <em>Kilojoules</em>, depending on your preference.
                </li>
                <li>
                  <span className="font-semibold">Click “Calculate”:</span> Your BMR will be displayed
                  instantly, along with your estimated daily energy needs (EER) based on your activity
                  level — from sedentary to extra active.
                </li>
              </ol>

              <p>
                Once you have your BMR and EER values, you can adjust your calorie intake to meet
                your goals. Consuming fewer calories than your EER supports weight loss, while eating
                slightly more helps with healthy weight gain or muscle growth.
              </p>

              <h3 className="text-xl font-semibold text-blue-900 mt-6">
                Understanding Your Results
              </h3>

              <p>
                A higher BMR generally means your body burns more energy at rest — often due to greater
                muscle mass, younger age, or a more active metabolism. Conversely, a lower BMR means your
                body conserves energy more efficiently. Using your BMR as a foundation, you can make
                informed adjustments to your diet, exercise routine, and overall wellness strategy.
              </p>
            </div>
          </div>
          {/* Comparison Table Section */}
          <div className="mt-10 px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Comparison of BMR Formulas
            </h3>

            <div className="max-w-4xl mx-auto text-blue-900">
              <p className="mb-4">
                There are several methods to calculate Basal Metabolic Rate (BMR). Each uses
                slightly different parameters and constants to estimate your resting energy
                needs. Here’s a side-by-side comparison of the most commonly used formulas:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left">Formula</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Equation (Male)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Equation (Female)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">
                        Mifflin-St Jeor
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (10 × weight [kg]) + (6.25 × height [cm]) − (5 × age [years]) + 5
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (10 × weight [kg]) + (6.25 × height [cm]) − (5 × age [years]) − 161
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Considered the most accurate for modern populations; widely used by dietitians.
                      </td>
                    </tr>

                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">
                        Revised Harris-Benedict
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (13.397 × weight [kg]) + (4.799 × height [cm]) − (5.677 × age [years]) + 88.362
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (9.247 × weight [kg]) + (3.098 × height [cm]) − (4.330 × age [years]) + 447.593
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        An improved version of the original 1919 formula; slightly higher estimates than Mifflin-St Jeor.
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">
                        Katch-McArdle
                      </td>
                      <td colSpan="2" className="border border-gray-300 px-3 py-2 text-center">
                        370 + (21.6 × Lean Body Mass [kg])
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Best for individuals who know their body fat percentage. Uses lean mass instead of total body weight.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                All three formulas provide useful estimates of your resting energy needs. However,
                <span className="font-semibold"> Mifflin-St Jeor </span> is generally recommended
                for most adults because of its modern applicability and research-backed accuracy.
                <span className="font-semibold"> Katch-McArdle </span> is ideal for fitness
                enthusiasts who track body composition closely.
              </p>
            </div>
          </div>
          {/* Key Takeaways Section */}
          <div className="mt-10 px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Key Takeaways About BMR Calculation
            </h3>

            <div className="max-w-3xl mx-auto text-blue-900 space-y-4">
              <p>
                Understanding your <span className="font-semibold">Basal Metabolic Rate (BMR)</span> 
                is the first step toward creating a personalized nutrition and fitness plan. 
                Whether your goal is to lose fat, maintain weight, or build muscle, knowing 
                how your body uses energy helps you make smarter daily choices.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold">1. Mifflin-St Jeor</span> — The most accurate 
                  and widely accepted BMR formula for modern populations. Best choice for most users.
                </li>
                <li>
                  <span className="font-semibold">2. Revised Harris-Benedict</span> — Produces 
                  slightly higher calorie estimates and works well for active individuals.
                </li>
                <li>
                  <span className="font-semibold">3. Katch-McArdle</span> — Ideal for fitness 
                  enthusiasts who know their body fat percentage and want a lean mass–based estimate.
                </li>
                <li>
                  <span className="font-semibold">4. Adjust for activity level:</span> Multiply 
                  your BMR by an activity factor to estimate your Total Daily Energy Expenditure (TDEE). 
                  This helps determine how many calories you burn in a typical day.
                </li>
                <li>
                  <span className="font-semibold">5. Use your results wisely:</span> 
                  - To <em>lose weight</em>: eat slightly below your TDEE.  
                  - To <em>maintain weight</em>: match your TDEE.  
                  - To <em>gain weight or muscle</em>: eat slightly above your TDEE.
                </li>
              </ul>

              <p>
                Remember, BMR is only one piece of your overall health equation. Your sleep, stress,
                hydration, and daily movement all influence how efficiently your body burns energy.
                Use your BMR as a scientific foundation to build long-term, sustainable habits.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-900 p-4 rounded-lg mt-6">
                <p className="font-semibold text-blue-900">
                Pro Tip:
                </p>
                <p className="text-blue-900">
                  For the most accurate results, measure your weight and height using consistent units,
                  and recheck your BMR every few months — especially after major body composition or
                  lifestyle changes.
                </p>
              </div>
            </div>
          </div>
             
          
        
    
        
       
    
        </div>

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
