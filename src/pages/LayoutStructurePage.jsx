import React from "react";
import { Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

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
          <li className="text-gray-800 font-semibold">Body Fat Calculator</li>
        </ol>
      </nav>

      {/* Meta SEO */}
      <Title>Body Fat Calculator Online | MyCalSuite</Title>
      <Meta
        name="description"
        content="Calculate your body fat percentage instantly using our online Body Fat Calculator. Compare results with the U.S. Navy and BMI methods to find your ideal body composition and fitness level."
      />
      <meta
        name="keywords"
        content="body fat calculator online, body fat percentage calculator, us navy body fat calculator, bmi body fat calculator, calculate body fat, ideal body fat, fitness calculator, lean body mass calculator, healthy body fat range, body composition calculator"
      />

      {/* ===== Desktop Layout ===== */}
      <div className="hidden md:flex flex-row p-6 gap-2">
        {/* Main Content */}
        <div className="w-7/10 bg-white p-6 shadow-lg rounded-xl flex flex-col gap-2">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-900">
              Layout Structure
            </h1>
          </div>

          {/* Calculator Section */}
          <div className="rounded-lg border-4 border-blue-50 shadow-md"></div>

          {/* Text Section */}
          <div className="max-w-4xl mx-auto px-4 mt-6 space-y-6"></div>
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
          <h1 className="text-xl font-bold text-blue-900">Layout Structure</h1>
        </div>

        {/* Calculator Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl border-4 border-blue-50"></div>

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
