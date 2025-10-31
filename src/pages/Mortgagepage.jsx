import React, { useState } from "react";   // ✅ added useState import
import { Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import MortgageCalculator from "../components/financial/mortgagecalculator";

export default function MortgagePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Is a mortgage calculator accurate?",
      a: "Yes, it provides a reliable estimate based on your inputs. However, actual payments may vary slightly due to taxes, insurance, or lender fees."
    },
    {
      q: "Can I use it for refinancing?",
      a: "Absolutely. A mortgage calculator can help you compare your current mortgage with a new loan option to see potential savings."
    },
    {
      q: "Does it include property taxes and insurance?",
      a: "Most basic calculators do not include taxes or insurance. They focus on principal and interest. For complete costs, you may need an advanced calculator."
    },
    {
      q: "Is a 15-year mortgage better than a 30-year mortgage?",
      a: "It depends on your goals. A 15-year mortgage has higher monthly payments but saves you significant interest in the long run. A 30-year mortgage has smaller payments but higher overall cost."
    },
    {
      q: "How can I pay off my mortgage faster?",
      a: "Making extra principal payments, refinancing to a shorter term, or rounding up your monthly payments can help reduce your mortgage term and interest costs."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
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
          <li className="text-gray-800 font-semibold">Mortgage Calculator</li>
        </ol>
      </nav>

      {/* Meta SEO */}
      <Title>Mortgage Calculator Online | MyCalSuite</Title>
      <Meta
        name="description"
        content="Use our free Mortgage Calculator to estimate your monthly payments, interest, principal, and amortization schedule. Compare annual and monthly breakdowns with an interactive chart to plan your home loan with confidence."
      />

      {/* Main layout: content + sidebar */}
      <main className="flex flex-1 flex-col md:flex-row gap-6 px-4 md:px-12 md:ml-[80px] md:pt-[50px]">
        {/* Main Portion */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 md:ml-[50px] mt-3">
            Mortgage Calculator
          </h1>
          <p>
            A mortgage calculator is a simple yet powerful online tool that helps you
            estimate your monthly loan payments, interest costs, and the overall cost of
            buying a home. By entering details such as loan amount, interest rate,
            tenure, and repayment type, you can get a clear breakdown of your mortgage
            in seconds. This allows you to plan your budget, compare loan options, and
            make smarter financial decisions when purchasing a property.
          </p>

          {/* First Row: Calculator */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-white p-4 shadow-md rounded-2xl border border-gray-200">
              <MortgageCalculator />
            </div>
          </div>

          {/* Second Row: Info */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <div className="space-y-6 text-gray-700">
              {/* Definition */}
              <h2 className="text-2xl font-bold text-blue-900">What Is a Mortgage Calculator?</h2>
              <p>
                A mortgage calculator is a digital financial planning tool that provides a
                quick estimate of your loan repayment schedule. It calculates your monthly
                payments based on the loan principal, interest rate, and repayment term. The
                calculator can also show an amortization table, which splits each payment
                into interest and principal portions, helping you understand how your loan
                balance decreases over time.
              </p>

              {/* Formula */}
              <h2 className="text-2xl font-bold text-blue-900">Mortgage Payment Formula</h2>
              <p>The formula used to calculate a fixed-rate mortgage payment is:</p>
              <p className="bg-gray-100 p-3 rounded font-mono">
                M = P × [ r(1 + r)<sup>n</sup> ] ÷ [ (1 + r)<sup>n</sup> – 1 ]
              </p>
              <p>Where:</p>
              <ul className="list-disc pl-6">
                <li><strong>M</strong> = Monthly payment</li>
                <li><strong>P</strong> = Loan principal (amount borrowed)</li>
                <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12)</li>
                <li><strong>n</strong> = Total number of monthly payments (loan term × 12)</li>
              </ul>

              {/* Example 1 */}
              <h2 className="text-2xl font-bold text-blue-900">Mortgage Calculation Example – 30-Year Loan</h2>
              <p>
                Suppose you take out a home loan of <strong>$200,000</strong> with a fixed
                annual interest rate of <strong>6%</strong> for <strong>30 years</strong>.
              </p>
              <ul className="list-disc pl-6">
                <li>Loan amount (P) = $200,000</li>
                <li>Annual interest rate = 6% → Monthly rate (r) = 0.06 ÷ 12 = 0.005</li>
                <li>Loan term = 30 years → n = 30 × 12 = 360 months</li>
              </ul>
              <p className="bg-gray-100 p-3 rounded font-mono">
                M = 200,000 × [0.005(1 + 0.005)<sup>360</sup>] ÷ [(1 + 0.005)<sup>360</sup> – 1]
              </p>
              <p>
                Result: The monthly payment is approximately <strong>$1,199.10</strong>.
                Over 30 years, you will pay about <strong>$431,676</strong>, of which
                <strong> $231,676 </strong> is interest.
              </p>

              {/* Example 2 */}
              <h2 className="text-2xl font-bold text-blue-900">Mortgage Calculation Example – 15-Year Loan</h2>
              <p>
                Now, let’s compare the same loan of <strong>$200,000</strong> at
                <strong> 6% interest </strong> but for a shorter term of <strong>15 years</strong>.
              </p>
              <ul className="list-disc pl-6">
                <li>Loan amount (P) = $200,000</li>
                <li>Monthly rate (r) = 0.06 ÷ 12 = 0.005</li>
                <li>Loan term = 15 years → n = 15 × 12 = 180 months</li>
              </ul>
              <p className="bg-gray-100 p-3 rounded font-mono">
                M = 200,000 × [0.005(1 + 0.005)<sup>180</sup>] ÷ [(1 + 0.005)<sup>180</sup> – 1]
              </p>
              <p>
                Result: The monthly payment is approximately <strong>$1,687.71</strong>.
                Over 15 years, you will pay about <strong>$303,788</strong>, of which
                only <strong>$103,788</strong> is interest.
              </p>

              {/* Benefits */}
              <h2 className="text-2xl font-bold text-blue-900">Why Use a Mortgage Calculator?</h2>
              <ul className="list-disc pl-6">
                <li>Plan your home loan repayment effectively.</li>
                <li>Compare different loan terms and interest rates.</li>
                <li>Understand how extra payments affect your loan payoff.</li>
                <li>Get a clear picture of your monthly financial commitments.</li>
              </ul>

              {/* FAQs */}
              <h2 className="text-2xl font-bold text-blue-900">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center p-3 font-semibold text-left text-blue-900"
                    >
                      {faq.q}
                      <span>{openIndex === index ? "−" : "+"}</span>
                    </button>
                    {openIndex === index && (
                      <div className="p-3 border-t text-gray-700">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Conclusion</h2>
              <p>
                A mortgage calculator is more than just a tool—it’s a guide that helps you make 
                informed financial decisions before committing to a home loan. By clearly breaking 
                down your monthly payments, interest costs, and amortization schedule, it empowers 
                you to compare different loan terms, plan your budget wisely, and save money in the 
                long run. Whether you are buying your first home, refinancing, or exploring loan 
                options, using a mortgage calculator ensures that you stay financially prepared and 
                confident in your journey toward homeownership.
              </p>

              <p className="mt-4 font-semibold ">
                👉 Try our free Mortgage Calculator today and plan your loan with clarity and confidence!
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 pt-[70px]">
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
