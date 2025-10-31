import React from "react";
import {Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import IdealWeightCalculator from "../components/health/IdealWeightCalculator";

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
                  <li className="text-gray-800 font-semibold">Ideal Weight Calculator</li>
                </ol>
              </nav>
              {/* Meta SEO */}
                    <Title>Ideal Weight Calculator Online | MyCalSuite</Title>
                    <Meta
                      name="description"
                      content="Find your ideal weight easily with our free Ideal Weight Calculator. Calculate your healthy body weight using 4 trusted formulas — Robinson, Miller, Devine, and Hamwi — in both US and Metric units. Discover your perfect weight range and maintain a balanced, healthy lifestyle."
                    />
                    <meta name="keywords" content="ideal weight calculator, healthy weight calculator, body weight calculator, Robinson formula, Miller formula, Devine formula, Hamwi formula, weight calculator in kg, weight calculator in lbs, BMI healthy weight range, ideal body weight chart, ideal weight for men and women, fitness calculator, online weight calculator"></meta>
   

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row p-6 gap-6">
        {/* Main Portion */}
        <div className="w-7/10 bg-white p-6 shadow-lg rounded-xl  flex flex-col gap-2">
          {/* Heading */}
             

          <div className="text-center ">
            <h1 className="text-3xl mb-3 font-bold text-blue-900">
              Ideal Weight Calculator
            </h1>
            <p className="text-start text-sm">The Ideal Weight Calculator helps you determine your Ideal Body Weight (IBW) based on your height, gender, and age. Over the years, health and fitness experts have developed various formulas to estimate ideal weight accurately. The calculator compares the most trusted formulas—Robinson, Miller, Devine, and Hamwi—side by side, allowing you to find the weight range that best supports your healthy lifestyle.</p>
          </div>

          {/* Row 1: Calculator */}
          <div className="rounded-lg border-4 border-blue-50 shadow-md ">
            <IdealWeightCalculator />
          </div>

          {/* Row 2: Text Section */}
         <div className="max-w-4xl mx-auto px-4 mt-6 space-y-6">

          
          <div className="p-6 max-w-5xl mx-auto text-gray-800 leading-relaxed">
            {/* --- Header Section --- */}
            <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
              What Is Ideal Weight?
            </h1>

            <p className="mb-4">
              <strong>Ideal weight</strong> refers to the healthiest weight range a person
              should maintain based on their <strong>height, gender, and age</strong>. It
              represents the balance where your body performs at its best, reducing the
              risk of health issues like <strong>heart disease, diabetes, and obesity</strong>.
              Rather than a single fixed number, ideal weight is usually expressed as a{" "}
              <strong>range</strong> that supports overall wellness, energy, and longevity.
            </p>

            <p className="mb-8">
              Our <strong>Ideal Weight Calculator</strong> uses four trusted formulas —
              <strong> Robinson, Miller, Devine, and Hamwi</strong> — to help you estimate your
              healthiest weight. By comparing results from multiple methods, you can better
              understand your ideal body weight and set realistic fitness or health goals.
            </p>

            {/* --- Ideal Weight Formulas --- */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Ideal Weight Formulas
            </h2>

            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Understanding the Four Trusted Ideal Weight Formulas
            </h3>

            <p className="mb-4">
              When it comes to determining your <strong>ideal body weight (IBW)</strong>,
              several expert-developed formulas have stood the test of time. These formulas
              consider your height and gender to estimate a weight range that aligns with
              optimal health and performance.
            </p>

            {/* --- Table of Formulas --- */}
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-blue-100 shadow-md rounded-lg">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="p-3 text-left">Formula</th>
                    <th className="p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t border-blue-100">
                    <td className="p-3 font-semibold text-blue-900">Robinson Formula (1983)</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside">
                        <li>Men: 52 kg + 1.9 kg per inch over 5 feet</li>
                        <li>Women: 49 kg + 1.7 kg per inch over 5 feet</li>
                        <li>
                          <strong>Key Insight:</strong> Provides slightly lower weight ranges,
                          ideal for lean body goals.
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="border-t border-blue-100">
                    <td className="p-3 font-semibold text-blue-900">Miller Formula (1983)</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside">
                        <li>Men: 56.2 kg + 1.41 kg per inch over 5 feet</li>
                        <li>Women: 53.1 kg + 1.36 kg per inch over 5 feet</li>
                        <li>
                          <strong>Key Insight:</strong> Produces slightly higher weights, suited
                          for medium to large body frames.
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="border-t border-blue-100">
                    <td className="p-3 font-semibold text-blue-900">Devine Formula (1974)</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside">
                        <li>Men: 50 kg + 2.3 kg per inch over 5 feet</li>
                        <li>Women: 45.5 kg + 2.3 kg per inch over 5 feet</li>
                        <li>
                          <strong>Key Insight:</strong> A medical standard, though may slightly
                          underestimate taller individuals.
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="border-t border-blue-100">
                    <td className="p-3 font-semibold text-blue-900">Hamwi Formula (1964)</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside">
                        <li>Men: 48.0 kg + 2.7 kg per inch over 5 feet</li>
                        <li>Women: 45.5 kg + 2.2 kg per inch over 5 feet</li>
                        <li>
                          <strong>Key Insight:</strong> Conservative and ideal for leaner
                          physique estimations.
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Accuracy Section --- */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              Which Formula Is the Most Accurate?
            </h2>
            <p className="mb-4">
              There’s no single “perfect” formula — each provides a slightly different estimate
              based on its assumptions about body composition. The best approach is to use all
              four as reference points and consider your <strong>body frame, muscle mass,</strong>{" "}
              and <strong>fitness level</strong> when evaluating results.
            </p>
            <ul className="list-disc list-inside mb-6">
              <li><strong>Robinson:</strong> Best for modern, average builds.</li>
              <li><strong>Miller:</strong> Ideal for larger body frames.</li>
              <li><strong>Devine:</strong> Common in clinical and medical contexts.</li>
              <li><strong>Hamwi:</strong> Suitable for leaner physiques.</li>
            </ul>

            {/* --- BMI Range --- */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">Healthy BMI Range</h2>
            <p className="mb-8">
              While formulas provide useful estimates, maintaining a{" "}
              <strong>Body Mass Index (BMI)</strong> between <strong>18.5 and 24.9</strong> is
              considered healthy for most adults. Use this range alongside your calculated
              ideal weights to set realistic health and fitness goals.
            </p>

            {/* --- FAQ Section --- */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  1. Why do ideal weight formulas differ?
                </h3>
                <p>
                  Each formula is based on different population data and body composition
                  assumptions. Some prioritize lean mass, while others focus on overall
                  proportions, resulting in slightly different outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  2. Does age affect ideal weight?
                </h3>
                <p>
                  Age influences muscle mass and fat distribution, but most formulas focus on
                  height and gender. Older adults may have slightly higher fat and lower muscle
                  levels even at a healthy weight.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  3. What is the best formula for women?
                </h3>
                <p>
                  The <strong>Robinson</strong> and <strong>Miller</strong> formulas are
                  preferred for women, reflecting modern body standards and balanced estimates.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  4. What is the best formula for men?
                </h3>
                <p>
                  The <strong>Devine</strong> formula is commonly used in medical settings,
                  while <strong>Miller</strong> and <strong>Hamwi</strong> are great for
                  general fitness or nutrition analysis.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  5. Can I use this calculator for children or teens?
                </h3>
                <p>
                  No. These formulas are designed for adults only. Children and teenagers
                  require separate growth and BMI charts based on their age and development.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  6. How accurate are these results?
                </h3>
                <p>
                  These calculations provide a theoretical estimate, not an exact target.
                  Factors like <strong>muscle mass, body fat percentage,</strong> and{" "}
                  <strong>bone density</strong> also play important roles in your healthy weight.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  7. What’s the difference between Ideal Weight and BMI?
                </h3>
                <p>
                  <strong>BMI</strong> measures general weight status, while{" "}
                  <strong>Ideal Weight</strong> offers a more detailed estimate tailored to
                  gender and frame size. Both are useful tools for evaluating overall health.
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
         <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
        Ideal Weight Calculator
      </h1>
        </div>

        {/* Row 1: Calculator */}
        <div className="bg-white p-4 shadow-lg rounded-xl border-4 border-blue-50">
          <IdealWeightCalculator />
        </div>

        {/* Row 2: Text Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl space-y-4">
          
            <div className="p-6 max-w-5xl mx-auto text-gray-800 leading-relaxed">
            {/* --- Header Section --- */}
            <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
              What Is Ideal Weight?
            </h1>

            <p className="mb-4">
              <strong>Ideal weight</strong> refers to the healthiest weight range a person
              should maintain based on their <strong>height, gender, and age</strong>. It
              represents the balance where your body performs at its best, reducing the
              risk of health issues like <strong>heart disease, diabetes, and obesity</strong>.
              Rather than a single fixed number, ideal weight is usually expressed as a{" "}
              <strong>range</strong> that supports overall wellness, energy, and longevity.
            </p>

            <p className="mb-8">
              Our <strong>Ideal Weight Calculator</strong> uses four trusted formulas —
              <strong> Robinson, Miller, Devine, and Hamwi</strong> — to help you estimate your
              healthiest weight. By comparing results from multiple methods, you can better
              understand your ideal body weight and set realistic fitness or health goals.
            </p>

            {/* --- Ideal Weight Formulas --- */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Ideal Weight Formulas
            </h2>

            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Understanding the Four Trusted Ideal Weight Formulas
            </h3>

            <p className="mb-4">
              When it comes to determining your <strong>ideal body weight (IBW)</strong>,
              several expert-developed formulas have stood the test of time. These formulas
              consider your height and gender to estimate a weight range that aligns with
              optimal health and performance.
            </p>

            {/* --- Table of Formulas --- */}
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-blue-100 shadow-md rounded-lg">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="p-3 text-left">Formula</th>
                    <th className="p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t border-blue-100">
                    <td className="p-3 font-semibold text-blue-900">Robinson Formula (1983)</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside">
                        <li>Men: 52 kg + 1.9 kg per inch over 5 feet</li>
                        <li>Women: 49 kg + 1.7 kg per inch over 5 feet</li>
                        <li>
                          <strong>Key Insight:</strong> Provides slightly lower weight ranges,
                          ideal for lean body goals.
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="border-t border-blue-100">
                    <td className="p-3 font-semibold text-blue-900">Miller Formula (1983)</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside">
                        <li>Men: 56.2 kg + 1.41 kg per inch over 5 feet</li>
                        <li>Women: 53.1 kg + 1.36 kg per inch over 5 feet</li>
                        <li>
                          <strong>Key Insight:</strong> Produces slightly higher weights, suited
                          for medium to large body frames.
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="border-t border-blue-100">
                    <td className="p-3 font-semibold text-blue-900">Devine Formula (1974)</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside">
                        <li>Men: 50 kg + 2.3 kg per inch over 5 feet</li>
                        <li>Women: 45.5 kg + 2.3 kg per inch over 5 feet</li>
                        <li>
                          <strong>Key Insight:</strong> A medical standard, though may slightly
                          underestimate taller individuals.
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="border-t border-blue-100">
                    <td className="p-3 font-semibold text-blue-900">Hamwi Formula (1964)</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside">
                        <li>Men: 48.0 kg + 2.7 kg per inch over 5 feet</li>
                        <li>Women: 45.5 kg + 2.2 kg per inch over 5 feet</li>
                        <li>
                          <strong>Key Insight:</strong> Conservative and ideal for leaner
                          physique estimations.
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* --- Accuracy Section --- */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              Which Formula Is the Most Accurate?
            </h2>
            <p className="mb-4">
              There’s no single “perfect” formula — each provides a slightly different estimate
              based on its assumptions about body composition. The best approach is to use all
              four as reference points and consider your <strong>body frame, muscle mass,</strong>{" "}
              and <strong>fitness level</strong> when evaluating results.
            </p>
            <ul className="list-disc list-inside mb-6">
              <li><strong>Robinson:</strong> Best for modern, average builds.</li>
              <li><strong>Miller:</strong> Ideal for larger body frames.</li>
              <li><strong>Devine:</strong> Common in clinical and medical contexts.</li>
              <li><strong>Hamwi:</strong> Suitable for leaner physiques.</li>
            </ul>

            {/* --- BMI Range --- */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">Healthy BMI Range</h2>
            <p className="mb-8">
              While formulas provide useful estimates, maintaining a{" "}
              <strong>Body Mass Index (BMI)</strong> between <strong>18.5 and 24.9</strong> is
              considered healthy for most adults. Use this range alongside your calculated
              ideal weights to set realistic health and fitness goals.
            </p>

            {/* --- FAQ Section --- */}
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  1. Why do ideal weight formulas differ?
                </h3>
                <p>
                  Each formula is based on different population data and body composition
                  assumptions. Some prioritize lean mass, while others focus on overall
                  proportions, resulting in slightly different outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  2. Does age affect ideal weight?
                </h3>
                <p>
                  Age influences muscle mass and fat distribution, but most formulas focus on
                  height and gender. Older adults may have slightly higher fat and lower muscle
                  levels even at a healthy weight.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  3. What is the best formula for women?
                </h3>
                <p>
                  The <strong>Robinson</strong> and <strong>Miller</strong> formulas are
                  preferred for women, reflecting modern body standards and balanced estimates.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  4. What is the best formula for men?
                </h3>
                <p>
                  The <strong>Devine</strong> formula is commonly used in medical settings,
                  while <strong>Miller</strong> and <strong>Hamwi</strong> are great for
                  general fitness or nutrition analysis.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  5. Can I use this calculator for children or teens?
                </h3>
                <p>
                  No. These formulas are designed for adults only. Children and teenagers
                  require separate growth and BMI charts based on their age and development.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  6. How accurate are these results?
                </h3>
                <p>
                  These calculations provide a theoretical estimate, not an exact target.
                  Factors like <strong>muscle mass, body fat percentage,</strong> and{" "}
                  <strong>bone density</strong> also play important roles in your healthy weight.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  7. What’s the difference between Ideal Weight and BMI?
                </h3>
                <p>
                  <strong>BMI</strong> measures general weight status, while{" "}
                  <strong>Ideal Weight</strong> offers a more detailed estimate tailored to
                  gender and frame size. Both are useful tools for evaluating overall health.
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
