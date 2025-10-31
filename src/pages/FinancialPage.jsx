import React from "react";
import {Title, Meta} from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import FinancialCalculator from "../components/financial/FinancialCalculator";




export default function FinancialPage() {
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
          <li className="text-gray-800 font-semibold">Finance Calculator</li>
        </ol>
      </nav>
      {/* Meta SEO */}
            <Title>Financial Calculator Online | MyCalSuite</Title>
            <Meta
              name="description"
              content="Use our to calculate free online Finance Calculator to easily calculate Future Value (FV), Present Value (PV), Payment (PMT), Interest Rate (I/Y), and Number of Periods (N). Get instant results with detailed breakdowns of total payments and interest"
            />

      {/* Main layout: content + sidebar */}

  <main className="flex flex-1 flex-col md:flex-row gap-6 px-4 md:px-12 md:ml-[80px] md:pt-[50px]">
  {/* Main Portion */}
  <div className="w-full md:w-3/5 flex flex-col gap-10">
    
    {/* Heading */}
    <h1 className="text-2xl md:text-3xl font-bold text-blue-900  md:ml-[50px] mt-3">
      Financial Calculator
    </h1>
    <p>Finance calculator simplifies the solution of most time value of money problem. 
      It is simple to calculate the Future Value (FV), Present Value (PV), Interest Rate (I/Y), 
      Periodic Payment (PMT), and Number of Compounding Periods (N). 
      Each of the tabs is formatted to assist you in obtaining the precise value that you require
      with mere clicks. It operates the same way as well-known financial calculators 
      like the BA II Plus or HP 12CP, but in a more convenient and quicker online version.
    </p>
    
           {/* First Row: Calculator + Info */}
    <div className="flex flex-col md:flex-row gap-6 ">
            
            {/* Calculator (50%) */}
            <div className="flex-1 bg-white p-4 shadow-md rounded-2xl border border-gray-200">
              <FinancialCalculator />
            </div>

            
    </div>

          {/* Second Row */}
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      
      {/* Main Heading */}
      <h1 className="text-2xl font-bold text-blue-900 mb-4">
        Finance Calculator Guide
      </h1>

      {/* 1. Introduction */}
      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
      Introduction
      </h2>
      <p className="text-gray-700 mb-2">
        A Finance Calculator helps you solve the time value of money (TVM)
        problems by calculating <strong>Future Value (FV)</strong>,{" "}
        <strong>Present Value (PV)</strong>, <strong>Payment (PMT)</strong>,{" "}
        <strong>Interest Rate (I/Y)</strong>, and{" "}
        <strong>Number of Periods (N)</strong>.
      </p>
      <p className="text-gray-700 mb-2">People use it in real-life applications such as:</p>
      <ul className="list-disc list-inside text-gray-700 mb-2">
        <li>Investment planning (e.g., future value of savings)</li>
        <li>Loan amortization (monthly installments and interest cost)</li>
        <li>Retirement planning (how much to save every month)</li>
        <li>Business valuation (discounted cash flows, present value)</li>
      </ul>
      <p className="text-gray-700">📖 Reference: Investopedia – Time Value of Money</p>

      {/* 2. How it Works */}
      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
      How the Finance Calculator Works
      </h2>
      <p className="text-gray-700 mb-3">The calculator uses the time value of money (TVM) formulas:</p>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>
          <strong>Future Value (FV):</strong>{" "}
          <code>FV = PV × (1 + r)^n + PMT × ((1 + r)^n - 1) / r</code>
        </li>
        <li>
          <strong>Present Value (PV):</strong>{" "}
          <code>PV = FV / (1 + r)^n - PMT × (1 - (1 + r)^(-n)) / r</code>
        </li>
        <li>
          <strong>Payment (PMT):</strong>{" "}
          <code>PMT = ((FV - PV × (1 + r)^n) × r) / ((1 + r)^n - 1)</code>
        </li>
        <li>
          <strong>Interest Rate (I/Y or r):</strong> No closed form — solved
          iteratively (e.g., Newton-Raphson).
        </li>
        <li>
          <strong>Number of Periods (N):</strong>{" "}
          <code>
            n = ln((FV × r + PMT) / (PV × r + PMT)) / ln(1 + r)
          </code>
        </li>
      </ol>
      <p className="text-gray-700 mt-2">📖 Reference: CFA Institute – TVM Formulas</p>

      {/* 3. Step by Step */}
      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
        Step-by-Step Guide
      </h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-1">
        <li>Choose which value you want to calculate (FV, PV, PMT, I/Y, or N).</li>
        <li>Enter known inputs (e.g., interest rate, periods, payments).</li>
        <li>Click “Calculate”.</li>
        <li>View results instantly, including total payments and total interest.</li>
      </ol>

      {/* 4. Examples */}
      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
        Examples
      </h2>
      <div className="space-y-4 text-gray-700">
        <div>
          <h3 className="font-semibold text-blue-900">Example 1 – Future Value (FV)</h3>
          <p>
            You invest $5,000 (PV) for 5 years (n) at 6% annual interest (I/Y)
            compounded annually, with no periodic payments (PMT=0).
          </p>
          <p>
            <code>FV = 5000 × (1 + 0.06)^5 = 5000 × 1.3382 = 6691.00</code>
          </p>
          <p>✅ Future Value = $6,691.00</p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-900">Example 2 – Present Value (PV)</h3>
          <p>
            You want $20,000 (FV) after 10 years (n) with 5% annual interest
            (I/Y) and no additional payments (PMT=0).
          </p>
          <p>
            <code>PV = 20000 / (1 + 0.05)^10 = 20000 / 1.6289 = 12,289.00</code>
          </p>
          <p>✅ Present Value = $12,289.00</p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-900">Example 3 – Payment (PMT)</h3>
          <p>
            You borrow $10,000 (PV) for 4 years (n=48 months) at 8% annual
            interest (0.08/12 = 0.0067 monthly).
          </p>
          <p>
            <code>
              PMT = (10000 × 0.0067) / (1 - (1 + 0.0067)^(-48)) = 244.13
            </code>
          </p>
          <p>✅ Monthly Payment = $244.13</p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-900">Example 4 – Interest Rate (I/Y)</h3>
          <p>
            You invest $2,000 (PV) for 8 years (n), and it grows to $3,500 (FV)
            with no payments.
          </p>
          <p>
            <code>r = (3500 / 2000)^(1/8) - 1 = 0.0601</code>
          </p>
          <p>✅ Annual Interest Rate ≈ 6.01%</p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-900">Example 5 – Number of Periods (N)</h3>
          <p>
            You want your $5,000 (PV) investment to grow to $10,000 (FV) at 7%
            annual interest (I/Y).
          </p>
          <p>
            <code>n = ln(10000 / 5000) / ln(1.07) = 10.24</code>
          </p>
          <p>✅ Number of Years ≈ 10.2 years</p>
        </div>
      </div>
      <p className="text-gray-700 mt-2">📖 Reference: Investopedia – Annuity Formula</p>

      {/* 5. Applications */}
      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
        Applications in Real Life
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-2">
        <li>Loans & Mortgages → monthly installments, interest costs.</li>
        <li>Investments → estimate savings growth.</li>
        <li>Retirement Planning → required contributions for target wealth.</li>
        <li>Corporate Finance → project evaluation, discounted cash flows.</li>
      </ul>
      <p className="text-gray-700">📖 Reference: Corporate Finance Institute – TVM Applications</p>

      {/* 6. FAQ */}
      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
      Frequently Asked Questions (FAQ)
      </h2>
      <div className="space-y-3 text-gray-700">
        <details className="border rounded p-2">
          <summary className="font-semibold cursor-pointer">
            What is the most common use of a Finance Calculator?
          </summary>
          Mainly for loan amortization and investment growth calculations.
        </details>
        <details className="border rounded p-2">
          <summary className="font-semibold cursor-pointer">
            Can this calculator handle monthly compounding?
          </summary>
          Yes, just divide annual interest by 12 and multiply years by 12.
        </details>
        <details className="border rounded p-2">
          <summary className="font-semibold cursor-pointer">
            What is the difference between PV and FV?
          </summary>
          PV is today’s value of money, while FV is its worth in the future after interest.
        </details>
        <details className="border rounded p-2">
          <summary className="font-semibold cursor-pointer">
            Why is the interest rate (I/Y) harder to calculate?
          </summary>
          It requires trial-and-error or iterative methods because there is no direct algebraic formula.
        </details>
        <details className="border rounded p-2">
          <summary className="font-semibold cursor-pointer">
            Can I use this for retirement savings?
          </summary>
          Yes, it helps estimate how much to save monthly to reach your retirement goal.
        </details>
      </div>

      {/* 7. Conclusion */}
      <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">
      Conclusion / Call to Action
      </h2>
      <p className="text-gray-700 mb-2">
        The Finance Calculator is an essential tool for anyone managing loans,
        savings, or investments. It ensures accuracy, saves time, and provides
        instant insights into payments, total interest, and returns.
      </p>
      <p className="text-gray-700 font-semibold">
        👉 Try the calculator now and take control of your financial future!
      </p>
    
    </div>
  </div>
        

        {/* Sidebar */}
        <div className="w-full md:w-2/5 pt-[70px]">
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <Sidebar />
          </div>
        </div>
      </main>
    
      {/* Footer */}
      <Footer />
    </div>
  );
}
