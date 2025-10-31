import React from "react";
import {Title, Meta} from "react-head";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BodyMassIndex from "../components/health/BodyMassIndex";

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
          <li className="text-gray-800 font-semibold">BMI Calculator</li>
        </ol>
      </nav>
      {/* Meta SEO */}
            <Title>BMI Calculator Online | MyCalSuite</Title>
            <Meta
              name="description"
              content="Use our free BMI Calculator to find out if you are underweight, normal, overweight, or obese. Quick, accurate, and mobile-friendly BMI calculation tool."
            />
             <Meta
              name="keyword"
              content="BMI calculator, body mass index, calculate BMI online, BMI chart, healthy weight calculator, ideal weight, BMI for men, BMI for women, BMI by age, BMI categories, BMI formula, BMI scale, body fat index, ponderal index, BMI gauge meter, weight status calculator, BMI health assessment, BMI metric units, BMI US units, BMI for adults, BMI for children and teens, WHO BMI standards"
            />
      {/* Main layout: content + sidebar */}

  <main className="flex flex-1 flex-col md:flex-row gap-6 px-4 md:px-12 md:ml-[80px] md:pt-[50px]">
  {/* Main Portion */}
  <div className="w-full md:w-2/3 flex flex-col gap-6">
    
    {/* Heading */}
    <h1 className="text-2xl md:text-3xl text-center font-bold text-blue-900  md:ml-[50px] ">
      BMI Calculator
    </h1>
    <p className="text-sm text-start">The Body Mass Index (BMI) Calculator helps you quickly determine your BMI value and understand your corresponding weight status, taking your age into account. You can use the “Metric Units” tab for the International System of Units or switch to the “Other Units” tab to easily convert between US and metric units. In addition to BMI, this calculator also provides your Ponderal Index, offering a deeper insight into your overall body composition and health status.</p>


          {/* First Row: Calculator + Info */}
          <div className="flex flex-col md:flex-row gap-6 ">
            
            {/* Calculator (50%) */}
            <div className="flex-1 bg-white p-4 shadow-md rounded-2xl border border-gray-200">
              <BodyMassIndex />
            </div>

            {/* Text (50%) 
            <div className="bg-white shadow-md rounded-2xl p-6 flex-1 border border-gray-200">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">BMI Info</h2>
              <p className="text-gray-700 leading-relaxed">
                
              </p>
            </div> */}
          </div>

          {/* Second Row */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            
              {/* Title */}
      <h1 className="text-3xl font-bold text-center text-blue-900 py-4">
        Introduction to BMI (Body Mass Index)
      </h1>

      {/* Intro */}
      <p>
        Body Mass Index (BMI) is a widely used screening tool that helps to
        determine whether a person has a healthy body weight for a given height.
        It provides a simple numerical measure to categorize individuals as
        underweight, normal weight, overweight, or obese. BMI is not a direct
        measure of body fat but is strongly correlated with more direct methods
        of measuring body fat, such as skinfold thickness, bioelectrical
        impedance, or DEXA scans.
      </p>
       {/* Why BMI is important */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 py-4">
          Why BMI is Important
        </h2>
        <p>
          BMI is an easy and quick tool to assess whether a person is at risk
          for health problems associated with body weight. Being underweight,
          overweight, or obese can increase the risk of:
        </p>
        <ul className="list-disc ml-6">
          <li>Heart disease and high blood pressure</li>
          <li>Type 2 diabetes</li>
          <li>Certain types of cancer</li>
          <li>Sleep apnea and breathing problems</li>
          <li>Joint problems like osteoarthritis</li>
        </ul>
      </section>

      {/* BMI Table for Adults */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 py-4">
          BMI Table for Adults (Age ≥ 20)
        </h2>
        <p className="mb-3">World Health Oorganizaton recommended BMI table for adults</p>
        <table className="w-full border border-gray-300 text-sm sm:text-base">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-2">BMI (kg/m²)</th>
              <th className="border p-2">Classification</th>
              <th className="border p-2">Health Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">&lt; 16</td><td className="border p-2">Severe Thinness</td><td className="border p-2">Very High</td></tr>
            <tr><td className="border p-2">16 – 16.9</td><td className="border p-2">Moderate Thinness</td><td className="border p-2">High</td></tr>
            <tr><td className="border p-2">17 – 18.4</td><td className="border p-2">Mild Thinness</td><td className="border p-2">Moderate</td></tr>
            <tr><td className="border p-2">18.5 – 24.9</td><td className="border p-2">Normal</td><td className="border p-2">Low</td></tr>
            <tr><td className="border p-2">25 – 29.9</td><td className="border p-2">Overweight</td><td className="border p-2">Increased</td></tr>
            <tr><td className="border p-2">30 – 34.9</td><td className="border p-2">Obese Class I</td><td className="border p-2">Moderate to High</td></tr>
            <tr><td className="border p-2">35 – 39.9</td><td className="border p-2">Obese Class II</td><td className="border p-2">High</td></tr>
            <tr><td className="border p-2">≥ 40</td><td className="border p-2">Obese Class III</td><td className="border p-2">Very High</td></tr>
          </tbody>
        </table>
      </section>

      {/* BMI Table for Children */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 py-4">
          BMI Table for Children & Adolescents (2–20 years)
        </h2>
        <p className="mb-3">World Health Oorganizaton recommended BMI table for Children & Adolescents</p>
        <table className="w-full border border-gray-300 text-sm sm:text-base">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-2">BMI-for-age (Z-score / SD)</th>
              <th className="border p-2">Classification</th>
              <th className="border p-2">Health Risk / Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">&lt; -3 SD</td><td className="border p-2">Severe Thinness</td><td className="border p-2">Very high risk of undernutrition</td></tr>
            <tr><td className="border p-2">-3 SD to &lt; -2 SD</td><td className="border p-2">Moderate Thinness</td><td className="border p-2">Moderate risk of undernutrition</td></tr>
            <tr><td className="border p-2">-2 SD to +1 SD</td><td className="border p-2">Normal</td><td className="border p-2">Healthy weight</td></tr>
            <tr><td className="border p-2">&gt; +1 SD to +2 SD</td><td className="border p-2">Overweight</td><td className="border p-2">Increased risk</td></tr>
            <tr><td className="border p-2">&gt; +2 SD to +3 SD</td><td className="border p-2">Obese</td><td className="border p-2">High risk</td></tr>
            <tr><td className="border p-2">&gt; +3 SD</td><td className="border p-2">Severe Obesity</td><td className="border p-2">Very high risk</td></tr>
          </tbody>
        </table>
      </section>

      {/* Risks Overweight */}
      <section>
        <h2 className="text-2xl py-4 font-semibold text-blue-800">
          Risks Associated with Being Overweight
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Cardiovascular Diseases (heart disease, hypertension, stroke)</li>
          <li>Type 2 Diabetes (insulin resistance, high blood sugar)</li>
          <li>Metabolic Syndrome (cluster of high BP, cholesterol, abdominal fat)</li>
          <li>Certain Cancers (breast, colorectal, kidney, pancreas)</li>
          <li>Respiratory Problems (sleep apnea, asthma)</li>
          <li>Musculoskeletal Disorders (osteoarthritis, gout)</li>
          <li>Digestive Disorders (gallstones, GERD, fatty liver disease)</li>
          <li>Reproductive & Hormonal Issues (infertility, irregular cycles)</li>
          <li>Mental Health Risks (depression, anxiety, low self-esteem)</li>
          <li>Reduced Life Expectancy</li>
        </ul>
      </section>

      {/* Risks Underweight */}
      <section>
        <h2 className="text-2xl py-4 font-semibold text-blue-800">
          Risks Associated with Being Underweight
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Nutritional deficiencies (iron, calcium, vitamin D, etc.)</li>
          <li>Weakened immune system (higher infections)</li>
          <li>Fragile bones (osteoporosis & fractures)</li>
          <li>Fertility issues (irregular cycles, infertility)</li>
          <li>Growth & development problems in children</li>
          <li>Muscle weakness & fatigue</li>
          <li>Higher risk of surgical complications</li>
          <li>Anemia (iron, folate, B12 deficiency)</li>
          <li>Heart problems (low BP, weak heart)</li>
          <li>Mental health risks (depression, eating disorders)</li>
        </ul>
      </section>

      {/* Limitations */}
      <section>
        <h2 className="text-2xl py-4 font-semibold text-blue-800">
          Limitations of BMI
        </h2>
        <h3 className="text-xl font-semibold">In Adults (≥20 years)</h3>
        <ul className="list-disc ml-6">
          <li>Doesn’t differentiate fat vs. muscle (athletes may be misclassified)</li>
          <li>Doesn’t show fat distribution (visceral vs. subcutaneous)</li>
          <li>Doesn’t account for bone density or body frame</li>
          <li>No adjustment for age/gender differences</li>
          <li>Doesn’t consider ethnic differences</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">In Children & Adolescents (2–20 years)</h3>
        <ul className="list-disc ml-6">
          <li>Growth variations during development</li>
          <li>Age- and sex-dependence (requires WHO charts)</li>
          <li>Doesn’t measure fat vs. muscle mass</li>
          <li>Puberty effects alter fat distribution</li>
          <li>Ethnic & genetic differences affect accuracy</li>
        </ul>
      </section>

      {/* BMI Formula */}
      <section>
        <h2 className="text-2xl text-center py-5 font-semibold text-blue-800">BMI Formula</h2>
        <h3 className="text-xl font-semibold">Metric Formula</h3>
        <pre className="bg-gray-100 p-1 rounded text-sm">
          BMI = weight (kg) / height (m)²
          {"\n"}Example:70kg/(1.75m × 1.75m)≈22.9
        </pre>

        <h3 className="text-xl font-semibold mt-4">Imperial Formula</h3>
        <pre className="bg-gray-100 p-1 rounded text-sm">
          BMI=(weight(lb) × 703)/height(in)²
          {"\n"}Example: (154 × 703)/68² ≈ 23.4
        </pre>
      </section>
        





          </div>







        </div>





        {/* Sidebar */}
        <div className="w-full md:w-1/3 pt-[60px]">
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
