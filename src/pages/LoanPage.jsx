import React from "react";
import {Title, Meta} from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import LoanCalculator from "../components/financial/LoanCalculator";




export default function LoanPage() {
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
          <li className="text-gray-800 font-semibold ">Loan Calculator</li>
        </ol>
      </nav>
      {/* Meta SEO */}
            <Title>Loan Calculator Online | MyCalSuite</Title>
            <Meta
              name="description"
              content="Use our free online Loan Calculator to estimate monthly payments, total interest, and payoff schedules for amortized loans, deferred payment loans, and bonds. Compare repayment options, view schedules, and make smarter financial decisions."
            />

      {/* Main layout: content + sidebar */}

  <main className="flex flex-1 flex-col md:flex-row gap-6 px-4 md:px-12 md:ml-[80px] md:pt-[50px]">
  {/* Main Portion */}
  <div className="w-full md:w-2/3 flex flex-col gap-6">
    
    {/* Heading */}
    <h1 className="text-2xl md:text-3xl text-center font-bold text-blue-900  md:ml-[50px] mt-3">
      Loan Calculator
    </h1>
    <div>
    <p>A loan is a financial agreement  between a lender and a borrower, 
      where the borrower is given a sum of money—the principal—and must pay it back over time. 
      Loans are among the most popular methods people and companies borrow money, 
      and they are typically classified into three general categories: </p>
      <p className="mt-2"><strong className="text-xl text-blue-900">An amortized loan </strong> is a loan that you repay with set, regular payments until the loan matures.</p>
      <p className="mt-2"><strong className="text-xl text-blue-900">A deferred payment loan </strong> makes no payments over the term of the loan but is repaid with one lump sum at maturity. </p>
      <p className="mt-2"><strong className="text-xl text-blue-900">Bonds </strong> are handled differently—they guarantee a set lump sum, the face value or par value, to be paid to the bondholder at maturity. </p>
     </div> 
          {/* First Row: Calculator + Info */}
          <div className="flex flex-col md:flex-row gap-6 ">
           
            
            {/* Calculator (50%) */}
            <div className="flex-1 bg-white p-2 shadow-md rounded-2xl border border-gray-200">
              <LoanCalculator />
            </div>

            
          </div>

          {/* Second Row */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">

              <article className="prose lg:prose-xl max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                  <header>
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Amortized Loan Calculator – Understand Your Payments Clearly</h1>
                  </header>

                  <section className="mt-4 mb-5" >
                    <h2 className="text-xl font-semibold text-blue-900 mb-5">Introduction</h2>
                    <p>
                      An <strong>Amortized Loan</strong> is one of the most common types of loans, where borrowers pay back the loan in equal
                      installments over time. Each payment you make is split into two parts:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li><strong>Principal</strong> (the amount you borrowed)</li>
                      <li><strong>Interest</strong> (the cost of borrowing)</li>
                    </ul>
                    <p className="mt-2">
                      This type of loan is widely used for <em>mortgages, car loans, and personal loans</em> because it gives predictable monthly
                      payments, helping borrowers plan their finances with confidence.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-blue-900 mb-5">How Amortized Loans Work</h2>
                    <p>
                      Amortization means the loan is gradually paid down with regular payments until the balance reaches zero.
                    </p>

                    <p className="mt-3 font-medium">The formula for calculating the monthly payment is:</p>

                    <div className="bg-gray-50 border border-gray-100 p-4 rounded-md my-3">
                      {/* Render the formula as plain LaTeX-like text */}
                      <pre className="whitespace-pre-wrap">
                        {`M = (P × r × (1 + r)^n) / ((1 + r)^n − 1)`}

                        Where:
                        • M = Monthly Payment
                        • P = Loan Amount (Principal)
                        • r = Monthly Interest Rate (Annual Rate ÷ 12)
                        • n = Total Number of Payments (Loan Term in Months)

                      </pre>
                    </div>

                    <p>
                      <strong>Tip:</strong> With each payment, the interest portion decreases while the principal portion increases. By the end of the
                      loan term, most of your payments go toward principal instead of interest.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-blue-900 mb-5 mt-5">Step-by-Step Guide to Using the Amortized Loan Calculator</h2>
                    <ol className="list-decimal ml-6 mt-3 space-y-2">
                      <li><strong>Enter Loan Amount</strong> – Input how much you want to borrow.</li>
                      <li><strong>Select Loan Term</strong> – Choose years and months for repayment.</li>
                      <li><strong>Enter Interest Rate</strong> – Provide the annual percentage rate (APR).</li>
                      <li><strong>Choose Compounding</strong> – Options like monthly, quarterly, or annually.</li>
                      <li><strong>Pick Payback Frequency</strong> – Monthly, weekly, or yearly payments.</li>
                      <li><strong>Click Calculate</strong> – Instantly see your installment, total payment, and interest.</li>
                      <li><strong>View Schedule Table</strong> – Check annual or monthly breakdown of payments.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-5">Worked-Out Examples</h2>

                    <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h3 className="font-semibold">Example 1: Mortgage Loan</h3>
                      <ul className="list-disc ml-6 mt-2">
                        <li><strong>Loan Amount:</strong> $300,000</li>
                        <li><strong>Term:</strong> 30 years</li>
                        <li><strong>Interest Rate:</strong> 6% annually</li>
                        <li><strong>Payment Frequency:</strong> Monthly</li>
                      </ul>
                      <p className="mt-2"><strong>Result:</strong></p>
                      <ul className="list-disc ml-6">
                        <li>Monthly Payment ≈ <strong>$1,799</strong></li>
                        <li>Total Payments ≈ <strong>$647,514</strong></li>
                        <li>Total Interest ≈ <strong>$347,514</strong></li>
                      </ul>
                      <p className="mt-2">👉 You end up paying more in interest than the original loan amount because of the long repayment term.</p>
                    </div>

                    <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h3 className="font-semibold">Example 2: Car Loan</h3>
                      <ul className="list-disc ml-6 mt-2">
                        <li><strong>Loan Amount:</strong> $20,000</li>
                        <li><strong>Term:</strong> 5 years</li>
                        <li><strong>Interest Rate:</strong> 5% annually</li>
                        <li><strong>Payment Frequency:</strong> Monthly</li>
                      </ul>
                      <p className="mt-2"><strong>Result:</strong></p>
                      <ul className="list-disc ml-6">
                        <li>Monthly Payment ≈ <strong>$377</strong></li>
                        <li>Total Payments ≈ <strong>$22,620</strong></li>
                        <li>Total Interest ≈ <strong>$2,620</strong></li>
                      </ul>
                      <p className="mt-2">👉 Shorter loan terms reduce total interest significantly.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-5 ">Applications in Real Life</h2>
                    <ul className="list-disc ml-6 mt-3 space-y-2">
                      <li><strong>Home Loans:</strong> Amortized mortgages allow homeowners to plan stable monthly budgets.</li>
                      <li><strong>Car Loans:</strong> Equal installments make car ownership easier without large upfront costs.</li>
                      <li><strong>Personal Loans:</strong> Useful for debt consolidation, education, or medical expenses.</li>
                      <li><strong>Business Loans:</strong> Small businesses often use amortized loans for predictable repayment planning.</li>
                    </ul>
                  </section>

                  <section className="faq">
                    <h2 className="text-2xl font-semibold text-blue-900 mt-5 mb-5">Frequently Asked Questions (FAQ)</h2>

                    <div className="mt-3 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">What is an amortized loan?</h3>
                        <p>An amortized loan is a loan repaid through regular installments that cover both principal and interest until it is fully paid off.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">Why does the interest portion decrease over time?</h3>
                        <p>Because interest is calculated on the remaining balance, as the principal reduces, less interest is charged.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">Are all mortgages amortized loans?</h3>
                        <p>Yes, most fixed-rate mortgages are amortized, meaning equal monthly payments over the term. However, some loans like interest-only mortgages are not amortized in the early years.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">Is it better to choose a shorter amortization period?</h3>
                        <p>Yes. A shorter term means higher monthly payments but much less total interest paid over the life of the loan.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">Can I pay off an amortized loan early?</h3>
                        <p>Yes. Making extra payments reduces the principal faster, lowering interest costs and shortening the loan term.</p>
                      </div>
                    </div>
                  </section>

                  

                  <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mt-5 mb-5">Conclusion</h2>
                    <p>
                      The <strong>Amortized Loan Calculator</strong> helps you clearly see your monthly payments, total interest, and repayment schedule.
                      Whether it’s a home, car, or personal loan, understanding amortization ensures smarter borrowing decisions.
                    </p>
                  </section>
              </article>


          </div>


          {/* Third Row */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">

           
            <article className="prose lg:prose-xl max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
              <header>
                <h1 className="text-3xl font-bold text-center text-blue-900">
                  Deferred Payment Loan – Paying Back a Lump Sum at Maturity
                </h1>
              </header>
 
              <section className="mt-4">
                <h2 className="text-xl font-semibold text-blue-900 mb-5 mt-5">Introduction</h2>
                <p>
                  A <strong>Deferred Payment Loan</strong> allows the borrower to delay
                  all payments until the end of the loan term. Instead of making regular
                  installments, the borrower repays a <em>lump sum</em> that includes
                  both the original loan amount and the accumulated interest at
                  maturity.{" "}
                </p>
                <p>
                  This type of loan is often used in{" "}
                  <em>short-term financing, education loans, or special investment
                  products</em> where repayment flexibility is needed.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-900 mb-5 mt-5">
                  How Deferred Payment Loans Work
                </h2>
                <p>
                  Since no payments are made until maturity, the loan balance grows due
                  to compounding interest. At the end of the loan term, the borrower
                  pays back the entire balance in one payment.
                </p>

                <p className="mt-2 font-medium">The formula for the lump sum is:</p>

                <div className="bg-gray-50 border border-gray-100 px-4 rounded-md my-2">
                  <pre className="whitespace-pre-wrap">
        {`A = P × (1 + r/n)^(n × t)`}

        Where:
        • A = Amount due at maturity
        • P = Loan Amount (Principal)
        • r = Annual Interest Rate
        • n = Number of compounding periods per year
        • t = Loan Term in years
        
                  </pre>
                </div>

                <p>
                  👉 The borrower benefits from deferred payments during the loan term,
                  but the final repayment is usually much larger because of accumulated
                  interest.
                </p>
              </section>

             <section>
                <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-5">
                  Step-by-Step Guide to Using the Deferred Loan Calculator
                </h2>
                <ol className="list-decimal ml-6 mt-3 space-y-2">
                  <li><strong>Enter Loan Amount</strong> – How much you want to borrow.</li>
                  <li><strong>Select Loan Term</strong> – Choose years and months until repayment.</li>
                  <li><strong>Enter Interest Rate</strong> – Annual percentage rate (APR).</li>
                  <li><strong>Choose Compounding</strong> – Annually, semi-annually, monthly, etc.</li>
                  <li><strong>Click Calculate</strong> – Instantly see the lump sum due at maturity.</li>
                  <li><strong>View Schedule Table</strong> – Breakdown of interest growth over time.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-3">Worked-Out Examples</h2>

                <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <h3 className="font-semibold">Example 1: Education Loan</h3>
                  <ul className="list-disc ml-6 mt-2">
                    <li><strong>Loan Amount:</strong> $10,000</li>
                    <li><strong>Term:</strong> 4 years</li>
                    <li><strong>Interest Rate:</strong> 5% annually</li>
                    <li><strong>Compounding:</strong> Annually</li>
                  </ul>
                  <p className="mt-2"><strong>Result:</strong></p>
                  <ul className="list-disc ml-6">
                    <li>Total Due at Maturity ≈ <strong>$12,155</strong></li>
                    <li>Total Interest ≈ <strong>$2,155</strong></li>
                  </ul>
                  <p className="mt-2">
                    👉 No payments are made during the 4 years. At maturity, the student owes a lump sum of
                    $12,155.
                  </p>
                </div>

                <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <h3 className="font-semibold">Example 2: Short-Term Business Loan</h3>
                  <ul className="list-disc ml-6 mt-2">
                    <li><strong>Loan Amount:</strong> $50,000</li>
                    <li><strong>Term:</strong> 2 years</li>
                    <li><strong>Interest Rate:</strong> 8% annually</li>
                    <li><strong>Compounding:</strong> Quarterly</li>
                  </ul>
                  <p className="mt-2"><strong>Result:</strong></p>
                  <ul className="list-disc ml-6">
                    <li>Total Due at Maturity ≈ <strong>$58,659</strong></li>
                    <li>Total Interest ≈ <strong>$8,659</strong></li>
                  </ul>
                  <p className="mt-2">
                    👉 The company enjoys 2 years of cash flow flexibility but faces a
                    large lump-sum repayment.
                  </p>
                </div>
              </section>

             <section>
                <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-5">Applications in Real Life</h2>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                  <li><strong>Education Loans:</strong> Students can focus on studies and pay back after graduation.</li>
                  <li><strong>Business Financing:</strong> Helps businesses invest now and pay back when profits arrive.</li>
                  <li><strong>Investment Loans:</strong> Used in real estate or securities where returns are expected later.</li>
                  <li><strong>Special Agreements:</strong> Applied in contracts where deferred payment flexibility is needed.</li>
                </ul>
              </section>

              <section className="faq">
                <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-5">Frequently Asked Questions (FAQ)</h2>

                <div className="mt-3 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">What is a deferred payment loan?</h3>
                    <p>
                      It is a loan where no payments are made during the loan term, and the borrower repays a lump sum (principal + interest) at maturity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold ">Do I save money with deferred loans?</h3>
                    <p>
                      Not usually. While they provide flexibility, deferred loans typically cost more in total interest compared to amortized loans.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Are deferred loans risky?</h3>
                    <p>
                      Yes, because the lump sum can be large. Borrowers must plan carefully to ensure they can repay at maturity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Where are deferred loans commonly used?</h3>
                    <p>
                      In student loans, real estate investments, and short-term business loans where immediate repayment is not feasible.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-3">Conclusion</h2>
                <p>
                  The <strong>Deferred Payment Loan Calculator</strong> helps you
                  understand how your balance grows and how much you’ll owe at maturity.
                  It’s a useful tool for planning education, business, or investment
                  loans — but always consider whether you’ll be able to handle the final
                  lump sum payment.
                </p>
              </section>
            </article>








          </div>

            {/* Fourth Row */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">

                 {/* Title */}
            <h1 className="text-3xl font-bold text-center text-blue-900">
              Bond Loan Calculator – Paying Back a Predetermined Amount at Maturity
            </h1>

            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-3">Introduction</h2>
              <p className="mt-2 text-gray-700">
                A Bond Loan, or a loan with a predetermined due amount, is structured
                so that the borrower repays a lump sum at maturity instead of making
                equal installments over time. These types of loans are often used in
                bonds, zero-coupon bonds, and corporate debt financing, where the
                investor or lender receives the full repayment along with interest at
                the end of the loan term.
              </p>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-3">How Bond Loans Work</h2>
              <p className="mt-2 text-gray-700">
                Unlike amortized or deferred loans, bond loans don’t require monthly
                payments. Instead, the borrower agrees to pay back a predetermined
                amount (the maturity value) at the end of the term. The present value
                of the loan is calculated based on interest rate and compounding.
              </p>
              <p className="mt-2 text-gray-700">The formula is:</p>
              <p className="italic mt-2 text-gray-700">
                P = F ÷ (1 + r)<sup>n</sup>
              </p>
              <p className="mt-2 text-gray-700">
                Where: <br />
                P = Present Value (Loan Amount) <br />
                F = Future Value (Predetermined Due Amount at maturity) <br />
                r = Interest Rate per period <br />
                n = Number of compounding periods
              </p>
            </section>

            {/* Step-by-Step Guide */}
            <section>
              <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-3">
                Step-by-Step Guide to Using the Bond Loan Calculator
              </h2>
              <ol className="list-decimal list-inside mt-2 text-gray-700 space-y-1">
                <li>Enter Predetermined Due Amount – The maturity value (future value).</li>
                <li>Select Loan Term – Number of years and months until maturity.</li>
                <li>Enter Interest Rate – Annual percentage rate (APR).</li>
                <li>Choose Compounding Frequency – Annual, semi-annual, monthly, etc.</li>
                <li>Click Calculate – Instantly see the present value (loan amount).</li>
                <li>View Schedule Table – See annual or monthly growth of loan balance.</li>
              </ol>
            </section>

            {/* Examples */}
            <section>
              <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-3">Worked-Out Examples</h2>

              <div className="mt-2">
                <h3 className="font-semibold ">
                  Example 1: Zero-Coupon Bond
                </h3>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Future Value: $10,000</li>
                  <li>Term: 10 years</li>
                  <li>Interest Rate: 5% annually</li>
                  <li>Compounding: Annual</li>
                </ul>
                <p className="mt-2 text-gray-700">
                  Present Value ≈ $6,139. Borrower receives $6,139 today and repays
                  $10,000 at maturity.
                </p>
              </div>

              <div className="mt-2">
                <h3 className="font-semibold ">
                  Example 2: Corporate Bond
                </h3>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Future Value: $50,000</li>
                  <li>Term: 5 years</li>
                  <li>Interest Rate: 7% annually</li>
                  <li>Compounding: Semi-annual</li>
                </ul>
                <p className="mt-2 text-gray-700">
                  Present Value ≈ $35,622. Investor lends $35,622 and receives $50,000
                  after 5 years.
                </p>
              </div>
            </section>

            {/* Applications */}
            <section>
              <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-3">
                Applications in Real Life
              </h2>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Government Bonds – Zero-coupon bonds with lump sum repayment.</li>
                <li>Corporate Bonds – Businesses raise capital with fixed maturity payouts.</li>
                <li>Education or Investment Loans – Predetermined repayment for planning.</li>
                <li>Retirement Investments – Bonds as low-risk options for long-term savings.</li>
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-xl font-semibold text-blue-900 mt-5 mb-3">Frequently Asked Questions (FAQ)</h2>

              <div className="mt-3">
                <h3 className="font-semibold">
                  What is a bond loan with predetermined due amount?
                </h3>
                <p className="text-gray-700">
                  It is a loan where the borrower pays a lump sum (future value) at
                  maturity instead of regular installments.
                </p>
              </div>

              <div className="mt-3">
                <h3 className="font-semibold">
                  How is the loan amount calculated?
                </h3>
                <p className="text-gray-700">
                  The loan amount (present value) is determined using the future
                  repayment value, interest rate, and compounding frequency.
                </p>
              </div>

              <div className="mt-3">
                <h3 className="font-semibold">
                  Do bond loans have monthly payments?
                </h3>
                <p className="text-gray-700">
                  No, payments are made as a lump sum at maturity, not in installments.
                </p>
              </div>

              <div className="mt-3">
                <h3 className="font-semibold">
                  Are bond loans risk-free?
                </h3>
                <p className="text-gray-700">
                  Government bonds are generally safe, but corporate bonds may carry
                  credit risk depending on the issuer.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section>
              <h2 className="text-xl font-semibold text-blue-900 mb-3 mt-5">Conclusion</h2>
              <p className=" text-gray-700">
                The Bond Loan Calculator helps you evaluate how much money you receive
                today and how much you owe at maturity. This is especially useful for
                understanding bonds, zero-coupon investments, and corporate financing.
                Whether investing or borrowing, knowing the present and future values
                ensures smarter decisions.
              </p>
            </section>









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
