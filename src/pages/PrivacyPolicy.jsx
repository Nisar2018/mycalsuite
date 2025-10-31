import React from "react";
import {Title, Meta } from "react-head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    
    
    <div className="container mx-auto px-4 py-8 text-gray-800">
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
                  <li className="text-gray-800 font-semibold">Privacy Policy</li>
                </ol>
              </nav>
              {/* Meta SEO */}
                    <Title>PrivacyPolicy | MyCalSuite</Title>
                    <Meta
                      name="description"
                      content="Read our Privacy Policy to learn how we collect, use, and protect your personal information. We value your trust and ensure transparency in data handling to keep your information safe and secure."
                    />
      <div>
      
      <h1 className="text-3xl font-bold p-4 text-center text-blue-900 md:mt-[50px] md:mb-[40px]">Privacy Policy</h1>
      
      <p className="mb-6 py-5">
        At <strong>MyCalSuite.com</strong> (“Website,” “we,” “our,” or “us”),
        your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information when you visit or use our
        Website. By using our Website, you agree to the practices described
        here.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-2">We may collect the following types of information:</p>
      <h3 className="font-semibold mt-4 mb-1">a) Personal Information</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>We do not require registration or personal accounts for using our calculators.</li>
        <li>If you voluntarily contact us via email, we may collect your name and email address.</li>
      </ul>
      <h3 className="font-semibold mt-4 mb-1">b) Non-Personal Information</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>IP addresses</li>
        <li>Browser type and version</li>
        <li>Device type</li>
        <li>Pages visited on the Website</li>
        <li>Date and time of access</li>
      </ul>
      <p className="mb-6">
        This information is used for analytics, website improvement, and
        security purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Information</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Improve and maintain the Website</li>
        <li>Analyze user trends and usage patterns</li>
        <li>Respond to user inquiries</li>
        <li>Prevent unauthorized access or misuse of the Website</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Cookies and Tracking Technologies
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>We may use cookies and similar technologies to enhance user experience, remember preferences, and monitor traffic.</li>
        <li>Cookies do not collect personally identifiable information.</li>
        <li>You can disable cookies in your browser, but some features of the Website may not function properly.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing of Information</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>We do not sell, rent, or trade your personal information to third parties.</li>
        <li>We may share non-personal, aggregated data with third parties for analytics or reporting purposes.</li>
        <li>We may disclose information if required by law or to protect our rights.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>The Website may contain links to external websites.</li>
        <li>We are not responsible for the privacy practices or content of these external sites.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Security</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>We take reasonable measures to protect your data from unauthorized access or misuse.</li>
        <li>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Children’s Privacy</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>MyCalSuite.com is not intended for children under 13.</li>
        <li>We do not knowingly collect personal information from children.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Privacy Policy</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>We may update this Privacy Policy from time to time.</li>
        <li>Changes will be posted on this page with an updated “Effective Date.”</li>
        <li>Continued use of the Website after changes indicates acceptance of the updated policy.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Your Rights</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>You may request access to, correction, or deletion of your personal data by contacting us.</li>
        <li>Even if you contact us, we may retain certain data as required by law or for legitimate business purposes.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p className="mb-2">If you have questions or concerns about this Privacy Policy, please contact us:</p>
      <p>📧mycalsuite@gmail.com</p>
      <p>🌐 <a href="https://www.mycalsuite.com" className="text-blue-600 underline">https://www.mycalsuite.com</a></p>
    
    </div>
    {/* Footer */}
          <Footer />
</div>    
    );
};

export default PrivacyPolicy;
