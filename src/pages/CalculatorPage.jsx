import React from "react";
import {Title, Meta } from "react-head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Calculator from "../components/math/Calculator";
import { Link } from "react-router-dom";

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
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
          <li className="text-gray-800 font-semibold">Basic Calculator</li>
        </ol>
      </nav>
      {/* Meta SEO */}
            <Title>Basic Calculator Online | MyCalSuite</Title>
            <Meta
              name="description"
              content="Use our free online basic calculator to perform addition, subtraction, multiplication, division, percentages, square roots, exponents, and memory functions easily."
            />

      {/* Main layout: content + sidebar */}
      <main className="flex flex-1 flex-col md:flex-row gap-6 px-4 md:px-8 mt-5">
        {/* Main Portion */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {/* Page Heading */}
          <h1 className="text-2xl font-bold text-blue-900 underline underline-offset-4 pb-1 md:ml-[100px]">
            Basic Calculator
          </h1>

          {/* First Row: Calculator + Definition */}
          <div className="flex flex-col md:flex-row gap-6 md:ml-[60px]">
            {/* Calculator (50%) */}
            <div className="flex-1 bg-white shadow-md rounded-2xl p-4 border border-gray-200">
              <Calculator />
            </div>

            {/* Calculator Definition (50%) */}
            <div className="bg-white shadow-md rounded-2xl p-6 flex-1 border border-gray-200">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                What is a Basic Calculator?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A basic calculator is a simple tool that allows you to perform
                fundamental mathematical operations such as addition, subtraction,
                multiplication, and division. It also includes features like memory
                functions, rounding, exponents, percentages, and constants such as π (pi).
                This makes it useful for solving everyday math problems quickly and efficiently.
              </p>
            </div>
          </div>

          {/* Second Row: Detailed Explanation */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 md:ml-[60px]">
            <h2 className="text-lg font-semibold text-blue-800 mb-4">
              What Are the Functions on the Calculator?
            </h2>

            {/* Operators Table */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 shadow-md rounded-2xl text-sm md:text-base">
                <thead>
                  <tr className="bg-blue-50 text-blue-900">
                    <th className="border px-3 py-2 text-left">Operator</th>
                    <th className="border px-3 py-2 text-left">Function</th>
                    <th className="border px-3 py-2 text-left">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">÷</td>
                    <td className="border px-3 py-2">Division</td>
                    <td className="border px-3 py-2">100 ÷ 4 = <b>25</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">×</td>
                    <td className="border px-3 py-2">Multiplication</td>
                    <td className="border px-3 py-2">12 × 5 = <b>60</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">+</td>
                    <td className="border px-3 py-2">Addition</td>
                    <td className="border px-3 py-2">25 + 15 = <b>40</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">−</td>
                    <td className="border px-3 py-2">Subtraction</td>
                    <td className="border px-3 py-2">50 − 20 = <b>30</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">=</td>
                    <td className="border px-3 py-2">Calculate Result</td>
                    <td className="border px-3 py-2">8 + 2 = <b>10</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">+/-</td>
                    <td className="border px-3 py-2">Toggle sign</td>
                    <td className="border px-3 py-2">5 → <b>-5</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">mc / mr / m- / m+</td>
                    <td className="border px-3 py-2">Memory functions</td>
                    <td className="border px-3 py-2">Store & recall values</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">CE / AC</td>
                    <td className="border px-3 py-2">Clear entry / All clear</td>
                    <td className="border px-3 py-2">Reset calculator</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">√x</td>
                    <td className="border px-3 py-2">Square root</td>
                    <td className="border px-3 py-2">√81 = <b>9</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">%</td>
                    <td className="border px-3 py-2">Percentage</td>
                    <td className="border px-3 py-2">200 × 10% = <b>20</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">π</td>
                    <td className="border px-3 py-2">Pi</td>
                    <td className="border px-3 py-2">π ≈ <b>3.1416</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">xy</td>
                    <td className="border px-3 py-2">Exponent</td>
                    <td className="border px-3 py-2">3<sup>4</sup> = <b>81</b></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">R2 / R0</td>
                    <td className="border px-3 py-2">Rounding</td>
                    <td className="border px-3 py-2">12.678 → R2 = <b>12.68</b>, R0 = <b>13</b></td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 flex flex-col md:mt-[70px]">
          <Sidebar />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
