import React from "react";
import {Title, Meta} from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

import PercentageCalculator from "../components/math/PercentageCalculator";


export default function PercentagePage() {
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
          <li className="text-gray-800 font-semibold">Percentage Calculator</li>
        </ol>
      </nav>
      {/* Meta SEO */}
            <Title>Percentage Calculator Online | MyCalSuite</Title>
            <Meta
              name="description"
              content="A free online Percentage Calculator to quickly find percentages, percentage increase or decrease, and reverse percentages. Perfect for discounts, tax, interest rates, profit margins, grades, and everyday math problems."
            />

      {/* Main layout: content + sidebar */}

  <main className="flex flex-1 flex-col md:flex-row gap-6 px-4 md:px-12 md:ml-[80px] md:pt-[50px]">
  {/* Main Portion */}
  <div className="w-full md:w-2/3 flex flex-col gap-6">
    
    {/* Heading */}
    <h1 className="text-2xl md:text-3xl font-bold text-blue-900  md:ml-[50px] mt-3">
      Percentage Calculator
    </h1>


          {/* First Row: Calculator + Info */}
          <div className="flex flex-col md:flex-row gap-6 ">
            
            {/* Calculator (50%) */}
            <div className="flex-1 bg-white p-4 shadow-md rounded-2xl border border-gray-200">
              <PercentageCalculator />
            </div>

            
          </div>

          {/* Second Row */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">

            
              <h1 className="text-3xl font-bold text-blue-800 mb-4">
        Understanding Percentage: A Complete Guide
      </h1>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
        What is a Percentage?
      </h2>
      <p>
        A <strong>percentage</strong> is a way of expressing a number as a fraction of 100. 
        It is denoted using the <strong>% symbol</strong>. For example, 50% means 50 out of 100, 
        or simply one-half. Percentages are widely used in mathematics, finance, health, and daily life 
        to compare quantities and show proportions in a simple format.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
        Why Do We Use Percentages?
      </h2>
      <p>
        Percentages make it easier to understand <strong>ratios and comparisons</strong>. Instead of saying 
        “25 out of 200 students passed,” you can say “12.5% of students passed,” which is more concise and easier to interpret.
      </p>
      <ul className="list-disc pl-6">
        <li><strong>Shopping & Discounts</strong> – e.g., 20% off a product.</li>
        <li><strong>Finance & Banking</strong> – interest rates, tax rates, profit margins.</li>
        <li><strong>Health</strong> – body fat percentage, oxygen saturation.</li>
        <li><strong>Statistics</strong> – surveys, election results, population comparisons.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
        How to Calculate Percentages
      </h2>
      <ol className="list-decimal pl-6">
        <li className="mb-3">
          <strong>Finding X% of Y</strong><br />
          Formula: (X / 100) × Y<br />
          Example: 20% of 150 = (20/100) × 150 = 30.
        </li>
        <li className="mb-3">
          <strong>Finding What Percentage One Number is of Another</strong><br />
          Formula: (X / Y) × 100<br />
          Example: 30 is what % of 150? = (30/150) × 100 = 20%.
        </li>
        <li className="mb-3">
          <strong>Percentage Increase/Decrease</strong><br />
          Formula: (New – Old) / Old × 100<br />
          Example: Price increased from 100 to 120 → (120–100)/100 × 100 = 20% increase.
        </li>
        <li className="mb-3">
          <strong>Reverse Percentage (Finding the Original Value)</strong><br />
          Formula: Final ÷ (Percentage / 100)<br />
          Example: If 80 is 20% of a number → 80 ÷ (20/100) = 400.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
        Common Real-Life Applications of Percentages
      </h2>
      <ul className="list-disc pl-6">
        <li><strong>Grades in Education</strong>: Student scoring 450 out of 600 → 75%.</li>
        <li><strong>Loan Interest</strong>: Banks use interest rates expressed in %.</li>
        <li><strong>Nutrition Labels</strong>: Daily value percentages show nutrient contribution.</li>
        <li><strong>Profit & Loss</strong>: Businesses measure growth, margins, and expenses in %.</li>
        <li><strong>Probability & Risk</strong>: Insurance and investment sectors use % to calculate chances.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
        Frequently Asked Questions (Q&A)
      </h2>

      <div className="space-y-4">
        <div>
          <strong>1. What does 100% mean?</strong>
          <p>100% means the <strong>whole</strong> of something. For example, eating 100% of a pizza means you ate the entire pizza.</p>
        </div>

        <div>
          <strong>2. What does it mean when something is more than 100%?</strong>
          <p>More than 100% shows a value <strong>greater than the original amount</strong>. For example, 120% growth means the value has more than doubled compared to the base.</p>
        </div>

        <div>
          <strong>3. What’s the difference between percentage and percentile?</strong>
          <p>
            A <strong>percentage</strong> shows a portion out of 100, while a <strong>percentile</strong> 
            is a ranking system (e.g., being in the 90th percentile means you scored better than 90% of people).
          </p>
        </div>

        <div>
          <strong>4. How do I quickly calculate percentages in my head?</strong>
          <ul className="list-disc pl-6">
            <li>10% of a number = move decimal one place left.</li>
            <li>50% of a number = half of it.</li>
            <li>25% of a number = divide by 4.</li>
          </ul>
        </div>

        <div>
          <strong>5. What is percentage change?</strong>
          <p>
            Percentage change shows how much a value has increased or decreased compared to its original. 
            It is widely used in prices, salaries, and population statistics.
          </p>
        </div>
        </div>



            
          </div>
        </div>
        




        
        {/* Sidebar */}
                <div className="mt-4 bg-white p-4 shadow-lg rounded-xl">
                  <Sidebar/>
                    
                </div>
      </main>
    
      {/* Footer */}
      <Footer />
    </div>
  );
}
