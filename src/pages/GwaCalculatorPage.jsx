import React from "react";
import { Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import GwaCalculator from "../components/math/GWACalculator";

export default function GwaCalculatorPage() {
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
          <li className="text-gray-800 font-semibold">GWA Calculator</li>
        </ol>
      </nav>

      {/* Meta SEO */}
      <Title>GWA Calculator – Free General Weighted Average Calculator | MyCalSuite</Title>
      <Meta
        name="description"
        content="Calculate your General Weighted Average (GWA) easily with MyCalSuite's free online GWA Calculator. Add subjects, input grades and units, and get your accurate weighted average instantly. Perfect for students tracking academic performance and eligibility for honors or scholarships."
      />
      <meta
        name="keywords"
        content="GWA calculator, General Weighted Average, free online GWA calculator, student grade calculator, academic average calculator, calculate GWA online, honors eligibility, GPA calculator, MyCalSuite"
      />

      {/* ===== Desktop Layout ===== */}
      <div className="hidden md:flex flex-row p-6 gap-2">
        {/* Main Content */}
        <div className="w-7/10 bg-white p-6 shadow-lg rounded-xl flex flex-col gap-2">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-900">
              Free Online GWA Calculator
            </h1>
            <p class="text-start text-gray-600 text-lg mt-3">
               Use this <strong>GWA Calculator</strong> to quickly and accurately compute your General Weighted Average. 
               Enter your grades and units for each subject, and the calculator will provide your overall academic performance instantly. 
               Perfect for students tracking their GPA or planning for honors and scholarships.
            </p>
          </div>
          {/* Calculator Section */}
          <div className="rounded-lg border-4 border-blue-50 shadow-md p-5">
            <GwaCalculator/>
          </div>

          {/* Text Section */}
          <div className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
            <div class="max-w-4xl mx-auto p-6 space-y-8">

               <h1 class="text-3xl font-bold text-center text-gray-800">
                    GWA Calculator – Free Online General Weighted Average Calculator
                </h1>
                <section class="bg-white shadow rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-3 text-gray-700">What is a GWA Calculator?</h2>
                <p class="text-gray-600 leading-relaxed mb-2">
                A <span class="font-medium">GWA Calculator</span> is an online tool that helps students calculate their <strong>General Weighted Average (GWA)</strong>, representing overall academic performance across all subjects. 
                Unlike a simple average, GWA is <span class="font-medium">weighted by the number of units</span> (credit hours) for each subject.
                </p>
                <p class="text-gray-600 leading-relaxed">
                It is widely used to:
                <ul class="list-disc list-inside mt-2 space-y-1">
                    <li>Determine eligibility for <strong>honors and scholarships</strong></li>
                    <li>Track academic performance</li>
                    <li>Monitor graduation requirements</li>
                </ul>
                </p>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">How the GWA Calculator Works</h2>
                    <p class="text-gray-600 leading-relaxed mb-2">
                        The calculator uses this formula:
                    </p>
                    <pre class="bg-gray-100 p-3 rounded text-gray-800 font-mono mb-3">
                        GWA = (Σ (Grade × Units)) / (Σ Units)
                    </pre>
                    <p class="text-gray-600 leading-relaxed mb-2">Step-by-Step Operation:</p>
                    <ol class="list-decimal list-inside space-y-1 text-gray-600">
                        <li><strong>Add Subjects:</strong> Click <span class="bg-gray-200 px-2 py-1 rounded">+ Add Subject</span> for each course.</li>
                        <li><strong>Select Field:</strong> Click <span class="bg-blue-200 px-2 py-1 rounded">Grade</span> or <span class="bg-green-200 px-2 py-1 rounded">Units</span> to enter data.</li>
                        <li><strong>Input Numbers:</strong> Use the calculator-style keypad to enter values.</li>
                        <li><strong>Clear/Correct:</strong> Press <span class="bg-red-200 px-2 py-1 rounded">C</span> to clear the field.</li>
                        <li><strong>Calculate GWA:</strong> Press <span class="bg-yellow-200 px-2 py-1 rounded">=</span>. The result appears on the top screen.</li>
                        <li><strong>Remove Subjects:</strong> Click <span class="bg-red-300 px-2 py-1 rounded">X</span> to delete a subject.</li>
                    </ol>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">Key Features of This GWA Calculator</h2>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li><strong>Calculator-Style Interface:</strong> Feels like a real TI-84 calculator.</li>
                        <li><strong>Dynamic Subjects:</strong> Add or remove subjects easily.</li>
                        <li><strong>Grade/Units Toggle:</strong> Switch between grade and units for input.</li>
                        <li><strong>Live Result:</strong> Shows GWA instantly on the calculator screen.</li>
                        <li><strong>Mobile-Friendly:</strong> Fully responsive for smartphones and tablets.</li>
                        <li><strong>Accurate Calculation:</strong> Weighted formula ensures precision for GPA tracking.</li>
                    </ul>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">Tips for Using the GWA Calculator</h2>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>Always double-check your grades and units for accuracy.</li>
                        <li>The lower the GWA, the better the performance (in some grading systems).</li>
                        <li>Use this tool to plan academic goals and monitor progress.</li>
                        <li>For multiple semesters, calculate each separately and combine results.</li>
                    </ul>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">Frequently Asked Questions (FAQ)</h2>
                    <div class="space-y-3">
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q1: What is GWA and why is it important?</h3>
                            <p class="text-gray-600">GWA stands for General Weighted Average. It measures your overall academic performance weighted by the units of each subject. It is important for scholarships, honors, and graduation eligibility.</p>
                        </div>
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q2: How is the GWA calculated?</h3>
                            <p class="text-gray-600">Multiply each subject grade by its units, sum all results, and divide by total units. This weighted formula ensures that courses with more units have a bigger impact.</p>
                        </div>
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q3: Can I use this calculator on my phone?</h3>
                            <p class="text-gray-600">Yes! The calculator is fully responsive and works on smartphones, tablets, and desktops.</p>
                        </div>
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q4: What grade scale does this calculator use?</h3>
                            <p class="text-gray-600">It supports numeric grades (1.0–5.0 or 0–100 depending on your institution). Enter the numbers according to your grading system.</p>
                        </div>
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q5: Can I calculate multiple semesters?</h3>
                            <p class="text-gray-600">Yes. Calculate each semester separately and then combine results using the same weighted formula.</p>
                        </div>
                    </div>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">Conclusion</h2>
                    <p class="text-gray-600 leading-relaxed">
                    The <span class="font-medium">MyCalSuite GWA Calculator</span> is a simple, fast, and accurate way for students to monitor academic performance. Its calculator-style interface makes it easy to use while providing precise results. Ideal for scholarship applications, honors eligibility, and personal tracking.
                    </p>
                </section>

</          div>

          </div>
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
          <h1 className="text-xl font-bold text-blue-900">Free Online GWA Calculator</h1>
        </div>

        {/* Calculator Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl border-4 border-blue-50">
            <GwaCalculator/>
        </div>

        {/* Text Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl space-y-4">
            <div class="max-w-4xl mx-auto p-6 space-y-8">

               <h1 class="text-3xl font-bold text-center text-gray-800">
                    GWA Calculator – Free Online General Weighted Average Calculator
                </h1>
                <section class="bg-white shadow rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-3 text-gray-700">What is a GWA Calculator?</h2>
                <p class="text-gray-600 leading-relaxed mb-2">
                A <span class="font-medium">GWA Calculator</span> is an online tool that helps students calculate their <strong>General Weighted Average (GWA)</strong>, representing overall academic performance across all subjects. 
                Unlike a simple average, GWA is <span class="font-medium">weighted by the number of units</span> (credit hours) for each subject.
                </p>
                <p class="text-gray-600 leading-relaxed">
                It is widely used to:
                <ul class="list-disc list-inside mt-2 space-y-1">
                    <li>Determine eligibility for <strong>honors and scholarships</strong></li>
                    <li>Track academic performance</li>
                    <li>Monitor graduation requirements</li>
                </ul>
                </p>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">How the GWA Calculator Works</h2>
                    <p class="text-gray-600 leading-relaxed mb-2">
                        The calculator uses this formula:
                    </p>
                    <pre class="bg-gray-100 p-3 rounded text-gray-800 font-mono mb-3">
                        GWA = (Σ (Grade × Units)) / (Σ Units)
                    </pre>
                    <p class="text-gray-600 leading-relaxed mb-2">Step-by-Step Operation:</p>
                    <ol class="list-decimal list-inside space-y-1 text-gray-600">
                        <li><strong>Add Subjects:</strong> Click <span class="bg-gray-200 px-2 py-1 rounded">+ Add Subject</span> for each course.</li>
                        <li><strong>Select Field:</strong> Click <span class="bg-blue-200 px-2 py-1 rounded">Grade</span> or <span class="bg-green-200 px-2 py-1 rounded">Units</span> to enter data.</li>
                        <li><strong>Input Numbers:</strong> Use the calculator-style keypad to enter values.</li>
                        <li><strong>Clear/Correct:</strong> Press <span class="bg-red-200 px-2 py-1 rounded">C</span> to clear the field.</li>
                        <li><strong>Calculate GWA:</strong> Press <span class="bg-yellow-200 px-2 py-1 rounded">=</span>. The result appears on the top screen.</li>
                        <li><strong>Remove Subjects:</strong> Click <span class="bg-red-300 px-2 py-1 rounded">X</span> to delete a subject.</li>
                    </ol>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">Key Features of This GWA Calculator</h2>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li><strong>Calculator-Style Interface:</strong> Feels like a real TI-84 calculator.</li>
                        <li><strong>Dynamic Subjects:</strong> Add or remove subjects easily.</li>
                        <li><strong>Grade/Units Toggle:</strong> Switch between grade and units for input.</li>
                        <li><strong>Live Result:</strong> Shows GWA instantly on the calculator screen.</li>
                        <li><strong>Mobile-Friendly:</strong> Fully responsive for smartphones and tablets.</li>
                        <li><strong>Accurate Calculation:</strong> Weighted formula ensures precision for GPA tracking.</li>
                    </ul>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">Tips for Using the GWA Calculator</h2>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>Always double-check your grades and units for accuracy.</li>
                        <li>The lower the GWA, the better the performance (in some grading systems).</li>
                        <li>Use this tool to plan academic goals and monitor progress.</li>
                        <li>For multiple semesters, calculate each separately and combine results.</li>
                    </ul>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">Frequently Asked Questions (FAQ)</h2>
                    <div class="space-y-3">
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q1: What is GWA and why is it important?</h3>
                            <p class="text-gray-600">GWA stands for General Weighted Average. It measures your overall academic performance weighted by the units of each subject. It is important for scholarships, honors, and graduation eligibility.</p>
                        </div>
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q2: How is the GWA calculated?</h3>
                            <p class="text-gray-600">Multiply each subject grade by its units, sum all results, and divide by total units. This weighted formula ensures that courses with more units have a bigger impact.</p>
                        </div>
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q3: Can I use this calculator on my phone?</h3>
                            <p class="text-gray-600">Yes! The calculator is fully responsive and works on smartphones, tablets, and desktops.</p>
                        </div>
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q4: What grade scale does this calculator use?</h3>
                            <p class="text-gray-600">It supports numeric grades (1.0–5.0 or 0–100 depending on your institution). Enter the numbers according to your grading system.</p>
                        </div>
                        <div class="border rounded-lg p-3">
                            <h3 class="font-medium text-gray-800 mb-1">Q5: Can I calculate multiple semesters?</h3>
                            <p class="text-gray-600">Yes. Calculate each semester separately and then combine results using the same weighted formula.</p>
                        </div>
                    </div>
                </section>
                <section class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-3 text-gray-700">Conclusion</h2>
                    <p class="text-gray-600 leading-relaxed">
                    The <span class="font-medium">MyCalSuite GWA Calculator</span> is a simple, fast, and accurate way for students to monitor academic performance. Its calculator-style interface makes it easy to use while providing precise results. Ideal for scholarship applications, honors eligibility, and personal tracking.
                    </p>
                </section>

</          div>

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
