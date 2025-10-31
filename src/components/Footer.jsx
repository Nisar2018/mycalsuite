import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white p-4 mt-6">
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto text-center md:text-left">
        
        {/* Left Side - Links */}
        <div className="flex space-x-6 text-sm mb-2 md:mb-0 justify-center md:justify-start">
          <Link
            to="/privacy-policy"
            className="hover:text-gray-300 underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-use"
            className="hover:text-gray-300 underline underline-offset-2"
          >
            Terms of Use
          </Link>
        </div>

        {/* Right Side - Copyright */}
        <p className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} MyCalSuite.com | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
