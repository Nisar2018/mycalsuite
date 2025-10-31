import React from "react";
import {Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BodyFatcalculator from "../components/health/BodyFatCalculator";


export default function BodyFatCalculatorPage() {
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
          <li className="text-gray-800 font-semibold">Body Fat Calculator</li>
        </ol>
      </nav>
      {/* Meta SEO */}
            <Title>Body Fat Calculator Online | MyCalSuite</Title>
            <Meta
              name="description"
              content="Calculate your body fat percentage instantly using our online Body Fat Calculator. Compare results with the U.S. Navy and BMI methods to find your ideal body composition and fitness level"
            />
            <meta name="keywords" content="body fat calculator online, body fat percentage calculator, us navy body fat calculator, bmi body fat calculator, calculate body fat, ideal body fat, fitness calculator, lean body mass calculator, healthy body fat range, body composition calculator"></meta>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row p-6 gap-6">
        {/* Main Portion */}
        <div className="w-7/10 bg-white p-6 shadow-lg rounded-xl flex flex-col gap-2">
          {/* Heading */}
          <div className="text-center ">
            <h1 className="text-2xl font-bold text-blue-900">
              Body Fat Calculator
            </h1>
            <p className="text-start text-sm mt-2">The Body Fat Calculator makes it easy to estimate your body fat percentage using just a few simple measurements. You can switch between Metric Units and US Units — whichever feels more comfortable. For the best accuracy, try to measure to the nearest ¼ inch (or 0.5 cm). This calculator uses the U.S. Navy body fat formula and also provides results based on the BMI method, giving you two reliable ways to understand your body composition. </p>
          </div>

          {/* Row 1: Calculator */}
          <div className="rounded-lg border-4 border-blue-50 shadow-md ">
            <BodyFatcalculator/>
          </div>

          {/* Row 2: Text Section */}
         <div className="max-w-5xl mx-auto mt-6 p-6 border border-gray-200 rounded-2xl shadow-sm bg-white overflow-hidden">
            <article className="text-gray-800 space-y-10 leading-relaxed">
              {/* Main Heading */}
              <header>
                <h1 className="text-3xl font-bold text-blue-900 text-center">
                  Understanding Body Fat, Overweight, and Obesity
                </h1>
                <p className="mt-4 text-justify">
                  Maintaining a healthy body composition is essential for overall well-being.
                  Terms like <strong>body fat</strong>, <strong>overweight</strong>, and
                  <strong> obesity</strong> are often used interchangeably, but they have
                  distinct meanings. Understanding these concepts will help you evaluate
                  your fitness level and take effective steps toward better health.
                </p>
              </header>

              {/* Body Fat Section */}
              <section>
                <h2 className="text-2xl font-semibold text-blue-900 mb-3">What Is Body Fat?</h2>
                <p className="text-justify">
                  <strong>Body fat</strong> refers to the total amount of fat tissue in your body.
                  Fat isn’t always bad — your body needs a certain amount of fat for survival and
                  healthy function.
                </p>

                <h3 className="text-xl font-medium text-blue-900 mt-5">Types of Body Fat</h3>
                <div className="mt-3 space-y-4">
                  <div>
                    <strong>1. Essential Fat</strong>
                    <p className="mt-1">
                      Essential fat is the minimum level of fat required for life and healthy body function.
                      It cushions organs, regulates hormones, supports brain function, and helps with temperature control.
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Men need around <strong>2–5%</strong> essential fat</li>
                      <li>Women need around <strong>10–13%</strong> essential fat</li>
                    </ul>
                  </div>

                  <div>
                    <strong>2. Storage Fat</strong>
                    <p className="mt-1">
                      Storage fat is held beneath the skin (subcutaneous fat) and around internal organs (visceral fat).
                      It serves as an energy reserve and helps protect the body from temperature changes.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-blue-900 mt-6">Measuring Body Fat</h3>
                <p>Body fat is expressed as a percentage of your total body weight:</p>

                <div className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                  <code>Body Fat % = (Fat Mass ÷ Total Body Weight) × 100</code>
                </div>

                <p className="mt-3">
                  Healthy body fat varies by age, gender, and activity level. The table below shows commonly used category ranges:
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 border">Category</th>
                        <th className="px-3 py-2 border">Men</th>
                        <th className="px-3 py-2 border">Women</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border">Essential Fat</td>
                        <td className="px-3 py-2 border">2–5%</td>
                        <td className="px-3 py-2 border">10–13%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Athletes</td>
                        <td className="px-3 py-2 border">6–13%</td>
                        <td className="px-3 py-2 border">14–20%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border">Fitness</td>
                        <td className="px-3 py-2 border">14–17%</td>
                        <td className="px-3 py-2 border">21–24%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Acceptable</td>
                        <td className="px-3 py-2 border">18–24%</td>
                        <td className="px-3 py-2 border">25–31%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border">Obese</td>
                        <td className="px-3 py-2 border">25%+</td>
                        <td className="px-3 py-2 border">32%+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Overweight Section */}
              <section>
                <h2 className="text-2xl font-semibold text-blue-900">What Does It Mean to Be Overweight?</h2>
                <p className="mt-3 text-justify">
                  <strong>Overweight</strong> means carrying more body weight than is considered
                  healthy for your height. It’s typically determined using the Body Mass Index (BMI),
                  a simple calculation relating weight and height.
                </p>

                <div className="bg-gray-100 p-3 rounded text-sm overflow-x-auto mt-3">
                  <code>BMI = Weight (kg) ÷ [Height (m)]²</code>
                </div>

                <h3 className="text-xl font-medium text-blue-900 mt-5">BMI Classification</h3>
                <div className="overflow-x-auto mt-3">
                  <table className="min-w-full border text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 border">Category</th>
                        <th className="px-3 py-2 border">BMI Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border">Underweight</td>
                        <td className="px-3 py-2 border">&lt; 18.5</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Normal Weight</td>
                        <td className="px-3 py-2 border">18.5 – 24.9</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border">Overweight</td>
                        <td className="px-3 py-2 border">25 – 29.9</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Obese</td>
                        <td className="px-3 py-2 border">≥ 30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Obesity Section */}
              <section>
                <h2 className="text-2xl font-semibold text-blue-900">What Is Obesity?</h2>
                <p className="mt-3 text-justify">
                  <strong>Obesity</strong> is a chronic condition characterized by excessive fat
                  accumulation that negatively affects health. It increases the risk of diabetes,
                  heart disease, and other chronic illnesses.
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 border">Classification</th>
                        <th className="px-3 py-2 border">Men</th>
                        <th className="px-3 py-2 border">Women</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border">Obese (Class I)</td>
                        <td className="px-3 py-2 border">25–31%</td>
                        <td className="px-3 py-2 border">32–38%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Obese (Class II)</td>
                        <td className="px-3 py-2 border">32–39%</td>
                        <td className="px-3 py-2 border">39–46%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border">Severely Obese (Class III)</td>
                        <td className="px-3 py-2 border">≥40%</td>
                        <td className="px-3 py-2 border">≥47%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Measuring Body Fat Percentage */}
              <section>
                <h2 className="text-2xl font-semibold text-blue-900">Measuring Body Fat Percentage</h2>
                <p className="mt-3 text-justify">
                  Two commonly used methods to estimate body fat are the
                  <strong> U.S. Navy Method</strong> and the <strong>BMI Method</strong>.
                </p>

                <h3 className="text-xl font-medium text-blue-900 mt-4">1. U.S. Navy Method</h3>
                <p className="text-justify">
                  This method uses measurements like neck, waist, and height for men, and adds hip
                  for women. It’s highly practical and reasonably accurate.
                </p>

                <div className="bg-gray-100 p-3 rounded mt-3 overflow-x-auto text-sm">
                  <p><strong>Men:</strong></p>
                  <code>Body Fat % = 495 / (1.0324 − 0.19077 × log10(waist − neck) + 0.15456 × log10(height)) − 450</code>
                  <p className="mt-2"><strong>Women:</strong></p>
                  <code>Body Fat % = 495 / (1.29579 − 0.35004 × log10(waist + hip − neck) + 0.22100 × log10(height)) − 450</code>
                </div>

                <h3 className="text-xl font-medium text-blue-900 mt-6">2. BMI Method</h3>
                <p className="text-justify">
                  The BMI Method estimates body fat percentage using height, weight, and age. It’s
                  simpler but less personalized than the Navy method.
                </p>

                <div className="bg-gray-100 p-3 rounded mt-3 overflow-x-auto text-sm">
                  <p><strong>Men:</strong> Body Fat % = 1.20 × BMI + 0.23 × Age − 16.2</p>
                  <p className="mt-2"><strong>Women:</strong> Body Fat % = 1.20 × BMI + 0.23 × Age − 5.4</p>
                </div>
              </section>
            </article>
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
            Fraction Calculator
          </h1>
          <p className="text-start text-sm mt-2">The Body Fat Calculator makes it easy to estimate your body fat percentage using just a few simple measurements. You can switch between Metric Units and US Units — whichever feels more comfortable. For the best accuracy, try to measure to the nearest ¼ inch (or 0.5 cm). This calculator uses the U.S. Navy body fat formula and also provides results based on the BMI method, giving you two reliable ways to understand your body composition. </p>
        </div>

        {/* Row 1: Calculator */}
        <div className="bg-white p-4 shadow-lg rounded-xl border-4 border-blue-50">
          <BodyFatcalculator />
        </div>

        {/* Row 2: Text Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl space-y-4">
          
          <article className="text-gray-800 space-y-10 leading-relaxed">
              {/* Main Heading */}
              <header>
                <h1 className="text-3xl font-bold text-blue-900 text-center">
                  Understanding Body Fat, Overweight, and Obesity
                </h1>
                <p className="mt-4 text-justify">
                  Maintaining a healthy body composition is essential for overall well-being.
                  Terms like <strong>body fat</strong>, <strong>overweight</strong>, and
                  <strong> obesity</strong> are often used interchangeably, but they have
                  distinct meanings. Understanding these concepts will help you evaluate
                  your fitness level and take effective steps toward better health.
                </p>
              </header>

              {/* Body Fat Section */}
              <section>
                <h2 className="text-2xl font-semibold text-blue-900 mb-3">What Is Body Fat?</h2>
                <p className="text-justify">
                  <strong>Body fat</strong> refers to the total amount of fat tissue in your body.
                  Fat isn’t always bad — your body needs a certain amount of fat for survival and
                  healthy function.
                </p>

                <h3 className="text-xl font-medium text-blue-900 mt-5">Types of Body Fat</h3>
                <div className="mt-3 space-y-4">
                  <div>
                    <strong>1. Essential Fat</strong>
                    <p className="mt-1">
                      Essential fat is the minimum level of fat required for life and healthy body function.
                      It cushions organs, regulates hormones, supports brain function, and helps with temperature control.
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Men need around <strong>2–5%</strong> essential fat</li>
                      <li>Women need around <strong>10–13%</strong> essential fat</li>
                    </ul>
                  </div>

                  <div>
                    <strong>2. Storage Fat</strong>
                    <p className="mt-1">
                      Storage fat is held beneath the skin (subcutaneous fat) and around internal organs (visceral fat).
                      It serves as an energy reserve and helps protect the body from temperature changes.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-blue-900 mt-6">Measuring Body Fat</h3>
                <p>Body fat is expressed as a percentage of your total body weight:</p>

                <div className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                  <code>Body Fat % = (Fat Mass ÷ Total Body Weight) × 100</code>
                </div>

                <p className="mt-3">
                  Healthy body fat varies by age, gender, and activity level. The table below shows commonly used category ranges:
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 border">Category</th>
                        <th className="px-3 py-2 border">Men</th>
                        <th className="px-3 py-2 border">Women</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border">Essential Fat</td>
                        <td className="px-3 py-2 border">2–5%</td>
                        <td className="px-3 py-2 border">10–13%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Athletes</td>
                        <td className="px-3 py-2 border">6–13%</td>
                        <td className="px-3 py-2 border">14–20%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border">Fitness</td>
                        <td className="px-3 py-2 border">14–17%</td>
                        <td className="px-3 py-2 border">21–24%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Acceptable</td>
                        <td className="px-3 py-2 border">18–24%</td>
                        <td className="px-3 py-2 border">25–31%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border">Obese</td>
                        <td className="px-3 py-2 border">25%+</td>
                        <td className="px-3 py-2 border">32%+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Overweight Section */}
              <section>
                <h2 className="text-2xl font-semibold text-blue-900">What Does It Mean to Be Overweight?</h2>
                <p className="mt-3 text-justify">
                  <strong>Overweight</strong> means carrying more body weight than is considered
                  healthy for your height. It’s typically determined using the Body Mass Index (BMI),
                  a simple calculation relating weight and height.
                </p>

                <div className="bg-gray-100 p-3 rounded text-sm overflow-x-auto mt-3">
                  <code>BMI = Weight (kg) ÷ [Height (m)]²</code>
                </div>

                <h3 className="text-xl font-medium text-blue-900 mt-5">BMI Classification</h3>
                <div className="overflow-x-auto mt-3">
                  <table className="min-w-full border text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 border">Category</th>
                        <th className="px-3 py-2 border">BMI Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border">Underweight</td>
                        <td className="px-3 py-2 border">&lt; 18.5</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Normal Weight</td>
                        <td className="px-3 py-2 border">18.5 – 24.9</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border">Overweight</td>
                        <td className="px-3 py-2 border">25 – 29.9</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Obese</td>
                        <td className="px-3 py-2 border">≥ 30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Obesity Section */}
              <section>
                <h2 className="text-2xl font-semibold text-blue-900">What Is Obesity?</h2>
                <p className="mt-3 text-justify">
                  <strong>Obesity</strong> is a chronic condition characterized by excessive fat
                  accumulation that negatively affects health. It increases the risk of diabetes,
                  heart disease, and other chronic illnesses.
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 border">Classification</th>
                        <th className="px-3 py-2 border">Men</th>
                        <th className="px-3 py-2 border">Women</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border">Obese (Class I)</td>
                        <td className="px-3 py-2 border">25–31%</td>
                        <td className="px-3 py-2 border">32–38%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Obese (Class II)</td>
                        <td className="px-3 py-2 border">32–39%</td>
                        <td className="px-3 py-2 border">39–46%</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border">Severely Obese (Class III)</td>
                        <td className="px-3 py-2 border">≥40%</td>
                        <td className="px-3 py-2 border">≥47%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Measuring Body Fat Percentage */}
              <section>
                <h2 className="text-2xl font-semibold text-blue-900">Measuring Body Fat Percentage</h2>
                <p className="mt-3 text-justify">
                  Two commonly used methods to estimate body fat are the
                  <strong> U.S. Navy Method</strong> and the <strong>BMI Method</strong>.
                </p>

                <h3 className="text-xl font-medium text-blue-900 mt-4">1. U.S. Navy Method</h3>
                <p className="text-justify">
                  This method uses measurements like neck, waist, and height for men, and adds hip
                  for women. It’s highly practical and reasonably accurate.
                </p>

                <div className="bg-gray-100 p-3 rounded mt-3 overflow-x-auto text-sm">
                  <p><strong>Men:</strong></p>
                  <code>Body Fat % = 495 / (1.0324 − 0.19077 × log10(waist − neck) + 0.15456 × log10(height)) − 450</code>
                  <p className="mt-2"><strong>Women:</strong></p>
                  <code>Body Fat % = 495 / (1.29579 − 0.35004 × log10(waist + hip − neck) + 0.22100 × log10(height)) − 450</code>
                </div>

                <h3 className="text-xl font-medium text-blue-900 mt-6">2. BMI Method</h3>
                <p className="text-justify">
                  The BMI Method estimates body fat percentage using height, weight, and age. It’s
                  simpler but less personalized than the Navy method.
                </p>

                <div className="bg-gray-100 p-3 rounded mt-3 overflow-x-auto text-sm">
                  <p><strong>Men:</strong> Body Fat % = 1.20 × BMI + 0.23 × Age − 16.2</p>
                  <p className="mt-2"><strong>Women:</strong> Body Fat % = 1.20 × BMI + 0.23 × Age − 5.4</p>
                </div>
              </section>
          </article>

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
