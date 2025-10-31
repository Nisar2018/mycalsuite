import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import FractionCalculator from "../components/math/FractionCalculator";

export default function ScientificCalulatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row p-6 gap-6">
        {/* Main Portion */}
        <div className="w-3/5 bg-white p-6 shadow-lg rounded-xl mx-[100px] flex flex-col gap-6">
          {/* Heading */}
          <div className="text-center ">
            <h1 className="text-2xl font-bold text-blue-900">
              
            </h1>
          </div>

          {/* Row 1: Calculator */}
          <div className="rounded-lg border-4 border-blue-50 shadow-md ">
            <FractionCalculator />
          </div>

          {/* Row 2: Text Section */}
         <div className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
         </div>
      </div>

        {/* Sidebar */}
        <div className="w-2/5 bg-white p-1 shadow-lg rounded-xl md:pt-[100px]">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden p-4 gap-4">
        {/* Heading */}
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold text-blue-900">
            
          </h1>
        </div>

        {/* Row 1: Calculator */}
        <div className="bg-white p-4 shadow-lg rounded-xl border-4 border-blue-50">
          <FractionCalculator />
        </div>

        {/* Row 2: Text Section */}
        <div className="bg-white p-4 shadow-lg rounded-xl space-y-4">
          

          
        
    
        
       
    
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
