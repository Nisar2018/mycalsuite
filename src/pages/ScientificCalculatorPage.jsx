import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ScientificCalculator from "../components/math/ScientificCalculator";

export default function ScientificCalulatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row p-6 gap-6">
        {/* Main Portion */}
        <div className="w-3/5 bg-white p-6 shadow-lg rounded-xl mx-[100px] flex flex-col gap-6">
          {/* Heading */}
          <div className="text-center ">
            <h1 className="text-2xl font-bold text-blue-900">
              Scientific Calculator
            </h1>
          </div>

          {/* Row 1: Calculator */}
          <div className="rounded-lg border-4 border-blue-50 shadow-md ">
            <ScientificCalculator />
          </div>

          {/* Row 2: Text Section */}
         <div className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
            <h2 className="text-xl font-bold text-blue-900 text-center">
              What is a Scientific Calculator?
            </h2>
            <p className="text-gray-700 leading-relaxed">
    A <span className="font-semibold">scientific calculator</span> is an advanced type of calculator 
    that can perform not only basic arithmetic (addition, subtraction, multiplication, division) 
    but also more complex mathematical operations such as exponents, logarithms, trigonometry, roots, 
    and statistical functions. It is widely used by students, engineers, scientists, teachers, and 
    financial professionals for solving equations that would be time-consuming to calculate manually.
            </p>

            {/* Key Functions */}
            <h2 className="text-xl font-semibold text-blue-900 mt-6">Key Functions of a Scientific Calculator</h2>

            {/* 1. Arithmetic */}
            <h3 className="text-lg font-semibold text-blue-900">1. Basic Arithmetic (+, –, ×, ÷)</h3>
            <p className="text-gray-700">Used for fundamental calculations.</p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>25 × 4 = 100</li>
              <li>75 ÷ 5 = 15</li>
            </ul>
            <p className="text-gray-600 italic">Application: shopping bills, budgeting, or simple math problems.</p>

            {/* 2. Exponents */}
            <h3 className="text-lg font-semibold text-blue-900">2. Exponents and Powers (x², xʸ, eˣ, 10ˣ)</h3>
            <p className="text-gray-700">Used to calculate squares, powers, and exponential growth.</p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>2⁵ = 32</li>
              <li>10³ = 1000</li>
            </ul>
            <p className="text-gray-600 italic">Application: physics, interest rates, population growth studies.</p>

            {/* 3. Roots */}
            <h3 className="text-lg font-semibold text-blue-900">3. Roots (√x, ³√x, y√x)</h3>
            <p className="text-gray-700">Used to find square roots, cube roots, and nth roots.</p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>√49 = 7</li>
              <li>³√27 = 3</li>
            </ul>
            <p className="text-gray-600 italic">Application: engineering, architecture, daily math estimates.</p>

            {/* 4. Trigonometry */}
            <h3 className="text-lg font-semibold text-blue-900">4. Trigonometric Functions (sin, cos, tan)</h3>
            <p className="text-gray-700">Calculate angle relations in triangles.</p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>sin(30°) = 0.5</li>
              <li>cos(60°) = 0.5</li>
            </ul>
            <p className="text-gray-600 italic">Application: navigation, construction, measuring heights.</p>

            {/* 5. Logarithms */}
            <h3 className="text-lg font-semibold text-blue-900">5. Logarithmic Functions (log, ln)</h3>
            <p className="text-gray-700">Inverse of exponentiation, useful for compressing large numbers.</p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>log10(1000) = 3</li>
              <li>ln(e²) = 2</li>
            </ul>
            <p className="text-gray-600 italic">Application: Richter scale, decibels, financial growth modeling.</p>

            {/* Real-life Applications */}
            <h2 className="text-xl font-semibold text-blue-900 mt-6">Real-Life Applications</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li><span className="font-semibold">Education</span> – Solving algebra, calculus, and physics problems.</li>
              <li><span className="font-semibold">Engineering & Architecture</span> – Designing, measuring forces, solving equations.</li>
              <li><span className="font-semibold">Finance</span> – Interest rates, loan payments, investment analysis.</li>
              <li><span className="font-semibold">Science & Research</span> – Statistical analysis and data modeling.</li>
              <li><span className="font-semibold">Everyday Use</span> – Unit conversion, budgeting, percentages.</li>
            </ul>
            
            {/* Q&A Section */}
            <h2 className="text-xl font-semibold text-blue-900 mt-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900">Q1: What is the difference between a normal calculator and a scientific calculator?</h3>
                <p className="text-gray-700">A normal calculator performs basic arithmetic, while a scientific calculator handles advanced functions like logarithms, trigonometry, exponents, and statistical calculations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900">Q2: Do I need a scientific calculator for school?</h3>
                <p className="text-gray-700">Yes, most high school and college courses in math, physics, and engineering require a scientific calculator for solving advanced problems.</p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900">Q3: Can a scientific calculator replace a computer?</h3>
                <p className="text-gray-700">No, a scientific calculator is useful for quick computations but cannot replace the processing power and versatility of a computer.</p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900">Q4: What is the use of logarithm and antilog buttons?</h3>
                <p className="text-gray-700">Logarithms simplify multiplication/division of large numbers, while antilog finds the original value from a logarithm. Useful in science, engineering, and finance.</p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900">Q5: Is a scientific calculator allowed in exams?</h3>
                <p className="text-gray-700">In most exams, a non-programmable scientific calculator is allowed, but programmable or graphing calculators may be restricted. Always check exam guidelines.</p>
              </div>
          </div>

         </div>
      </div>

        {/* Sidebar */}
        <div className="w-2/5 bg-white p-1 shadow-lg rounded-xl md:pt-[100px]">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden p-4 gap-4">
        {/* Heading */}
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold text-blue-900">
            Scientific Calculator
          </h1>
        </div>

        {/* Row 1: Calculator */}
        <div className="bg-white p-4 shadow-lg rounded-xl border-4 border-blue-50">
          <ScientificCalculator />
        </div>

        {/* Row 2: Text Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl space-y-4">
          <h2 className="text-lg font-bold text-blue-900 text-center">
            What is a Scientific Calculator?
          </h2>
          <p className="text-gray-700 leading-relaxed">
    A <span className="font-semibold">scientific calculator</span> is an advanced type of calculator 
    that can perform not only basic arithmetic (addition, subtraction, multiplication, division) 
    but also more complex mathematical operations such as exponents, logarithms, trigonometry, roots, 
    and statistical functions. It is widely used by students, engineers, scientists, teachers, and 
    financial professionals for solving equations that would be time-consuming to calculate manually.
          </p>

          {/* Key Functions */}
          <h2 className="text-xl font-semibold text-blue-900 mt-6">Key Functions of a Scientific Calculator</h2>

          {/* 1. Arithmetic */}
          <h3 className="text-lg font-semibold text-blue-900">1. Basic Arithmetic (+, –, ×, ÷)</h3>
          <p className="text-gray-700">Used for fundamental calculations.</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>25 × 4 = 100</li>
            <li>75 ÷ 5 = 15</li>
          </ul>
          <p className="text-gray-600 italic">Application: shopping bills, budgeting, or simple math problems.</p>

          {/* 2. Exponents */}
          <h3 className="text-lg font-semibold text-blue-900">2. Exponents and Powers (x², xʸ, eˣ, 10ˣ)</h3>
          <p className="text-gray-700">Used to calculate squares, powers, and exponential growth.</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>2⁵ = 32</li>
            <li>10³ = 1000</li>
          </ul>
          <p className="text-gray-600 italic">Application: physics, interest rates, population growth studies.</p>

          {/* 3. Roots */}
          <h3 className="text-lg font-semibold text-blue-900">3. Roots (√x, ³√x, y√x)</h3>
          <p className="text-gray-700">Used to find square roots, cube roots, and nth roots.</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>√49 = 7</li>
            <li>³√27 = 3</li>
          </ul>
          <p className="text-gray-600 italic">Application: engineering, architecture, daily math estimates.</p>

          {/* 4. Trigonometry */}
        <h3 className="text-lg font-semibold text-blue-900">4. Trigonometric Functions (sin, cos, tan)</h3>
        <p className="text-gray-700">Calculate angle relations in triangles.</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>sin(30°) = 0.5</li>
          <li>cos(60°) = 0.5</li>
        </ul>
        <p className="text-gray-600 italic">Application: navigation, construction, measuring heights.</p>

        {/* 5. Logarithms */}
        <h3 className="text-lg font-semibold text-blue-900">5. Logarithmic Functions (log, ln)</h3>
        <p className="text-gray-700">Inverse of exponentiation, useful for compressing large numbers.</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>log10(1000) = 3</li>
          <li>ln(e²) = 2</li>
        </ul>
        <p className="text-gray-600 italic">Application: Richter scale, decibels, financial growth modeling.</p>

        {/* Real-life Applications */}
        <h2 className="text-xl font-semibold text-blue-900 mt-6">Real-Life Applications</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li><span className="font-semibold">Education</span> – Solving algebra, calculus, and physics problems.</li>
          <li><span className="font-semibold">Engineering & Architecture</span> – Designing, measuring forces, solving equations.</li>
          <li><span className="font-semibold">Finance</span> – Interest rates, loan payments, investment analysis.</li>
          <li><span className="font-semibold">Science & Research</span> – Statistical analysis and data modeling.</li>
          <li><span className="font-semibold">Everyday Use</span> – Unit conversion, budgeting, percentages.</li>
        </ul>
    
        {/* Q&A Section */}
        <h2 className="text-xl font-semibold text-blue-900 mt-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-blue-900">Q1: What is the difference between a normal calculator and a scientific calculator?</h3>
            <p className="text-gray-700">A normal calculator performs basic arithmetic, while a scientific calculator handles advanced functions like logarithms, trigonometry, exponents, and statistical calculations.</p>
          </div>

          <div>
            <h3 className="font-semibold text-blue-900">Q2: Do I need a scientific calculator for school?</h3>
            <p className="text-gray-700">Yes, most high school and college courses in math, physics, and engineering require a scientific calculator for solving advanced problems.</p>
          </div>

          <div>
            <h3 className="font-semibold text-blue-900">Q3: Can a scientific calculator replace a computer?</h3>
            <p className="text-gray-700">No, a scientific calculator is useful for quick computations but cannot replace the processing power and versatility of a computer.</p>
          </div>

          <div>
            <h3 className="font-semibold text-blue-900">Q4: What is the use of logarithm and antilog buttons?</h3>
            <p className="text-gray-700">Logarithms simplify multiplication/division of large numbers, while antilog finds the original value from a logarithm. Useful in science, engineering, and finance.</p>
          </div>

          <div>
            <h3 className="font-semibold text-blue-900">Q5: Is a scientific calculator allowed in exams?</h3>
            <p className="text-gray-700">In most exams, a non-programmable scientific calculator is allowed, but programmable or graphing calculators may be restricted. Always check exam guidelines.</p>
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
