import React from "react";
import {Title, Meta } from "react-head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link } from "react-router-dom";

const TermsOfUse = () => {
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
          <li className="text-gray-800 font-semibold">Terms Of Use</li>
        </ol>
      </nav>
      {/* Meta SEO */}
            <Title>Term Of Use | MyCalSuite</Title>
            <Meta
              name="description"
              content="Review our Terms of Use to understand the rules, rights, and responsibilities when using our website and services. Stay informed about acceptable use, limitations, and user agreements."
            />
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold p-4 text-center text-blue-900 md:mt-[50px] md:mb-[40px]">Terms of Use</h1>
      <p className="mb-6">
       {/* <strong>Effective Date:</strong> [Insert Date] */}
      </p>
      <p className="mb-6">
        Welcome to <strong>MyCalSuite.com</strong> (“Website,” “we,” “our,” or
        “us”). By accessing or using this Website, you agree to be bound by
        these Terms of Use (“Terms”). If you do not agree, please do not use
        our Website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Website</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          MyCalSuite.com provides free online calculators for educational,
          informational, and general use purposes only.
        </li>
        <li>
          You agree to use the Website only for lawful purposes and in
          compliance with these Terms.
        </li>
        <li>
          You may not use the Website in any way that could damage, disable,
          overburden, or impair the functionality of the Website.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. No Professional Advice</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          The calculators and tools provided on MyCalSuite.com are for general
          informational purposes only.
        </li>
        <li>
          They are not a substitute for professional, financial, medical,
          legal, or technical advice.
        </li>
        <li>
          You should always consult a qualified professional before making
          decisions based on calculator results.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Accuracy of Results</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          While we strive to keep our calculators accurate and up to date, we
          make no guarantees regarding the accuracy, reliability, or
          completeness of any results.
        </li>
        <li>You acknowledge that you use the calculators at your own risk.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          All content on MyCalSuite.com, including text, design, layout,
          graphics, code, and tools, is the intellectual property of
          MyCalSuite.com unless otherwise stated.
        </li>
        <li>
          You may not copy, reproduce, distribute, or modify any content without
          prior written permission.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          MyCalSuite.com, its owners, and affiliates shall not be held liable
          for any errors, inaccuracies, damages, or losses that may result from
          the use of this Website.
        </li>
        <li>
          Your use of the Website and reliance on any calculator or tool is
          entirely at your own risk.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Third-Party Links</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>The Website may contain links to third-party websites for your convenience.</li>
        <li>We are not responsible for the content, accuracy, or practices of any external sites.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Privacy</h2>
      <p className="mb-6">
        Your use of this Website is also governed by our{" "}
        <a href="/privacy-policy" className="text-blue-600 underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          We reserve the right to update or modify these Terms at any time
          without prior notice.
        </li>
        <li>
          Continued use of the Website after changes means you accept the
          updated Terms.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          These Terms shall be governed by and interpreted under the laws of{" "}
          <strong>[Insert Your Country/Region, e.g., Pakistan]</strong>, without
          regard to its conflict of law principles.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p className="mb-2">
        If you have any questions about these Terms, please contact us at:
      </p>
      <p>📧 mycalsuite@gmail.com</p>
      <p>
        🌐{" "}
        <a
          href="https://www.mycalsuite.com"
          className="text-blue-600 underline"
        >
          https://www.mycalsuite.com
        </a>
      </p>
    </div>
    {/* Footer */}
          <Footer />
</div>
  );
};

export default TermsOfUse;
