import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Length from "../components/units/Length";
import Temperature from "../components/units/Temperature";
import Time from "../components/units/Time";
import Area from "../components/units/Area";
import Volume from "../components/units/Volume";
import Weight from "../components/units/Weight";

function Layout() {
  const [activeTab, setActiveTab] = useState("Length");

  const renderComponent = () => {
    switch (activeTab) {
      case "Length":
        return <Length />;
      case "Temperature":
        return <Temperature />;
      case "Time":
        return <Time />;
      case "Area":
        return <Area />;
      case "Volume":
        return <Volume />;
      case "Weight":
        return <Weight />;
      default:
        return <Length />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row p-6 gap-6">
        {/* Main Portion */}
        <div className="w-3/5 bg-white p-6 shadow-lg rounded-xl mx-[100px]">
          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-2xl font-bold text-gray-900">
              Smart Unit Conversion at Your Fingertips
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="flex gap-1">
            {["Length", "Temperature", "Time", "Area", "Volume", "Weight"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-fit px-2 py-2 text-sm font-medium text-center transition rounded ${
                    activeTab === item
                      ? "bg-gray-200 text-black"
                      : "bg-blue-900 text-white hover:bg-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>


          {/* Box Content */}
          <div className="rounded-lg border-4 border-gray-200 shadow-md p-2">
            {renderComponent()}
          </div>

          
          
        </div>

        {/* Sidebar */}
        <div className="w-2/5 bg-white p-1 shadow-lg rounded-xl md:pt-[100px]">
          
            <Sidebar/>
          
          
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden p-4">
        {/* Box */}
        <div className="border rounded-lg shadow-md bg-white">
          {/* Heading */}
          <div className="text-center p-4 border-b">
            <h1 className=" font-bold text-gray-900">
              Smart Unit Conversion at Your Fingertips
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-2 rounded"></div>
          </div>

          {/* Mobile Menu */}
          <div className="flex border-b">
            {["Length", "Temperature", "Time", "Area", "Volume", "Weight"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`flex-1 px-2 py-2 text-xs font-medium text-center transition ${
                    activeTab === item
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-200 hover:text-blue-900"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
            

          {/* Content */}
          <div className="p-4">{renderComponent()}</div>

          {/* Intro + Explanations (Mobile) */}
          <div className="mt-6 p-4 bg-gray-50 border rounded-lg">
            <h2 className="text-lg font-semibold mb-2">About This Calculator</h2>
            <p className="text-gray-700">
              Our all-in-one unit converter helps you quickly and accurately convert
              Length, Temperature, Time, Area, Volume, and Weight in one place.
            </p>
          </div>

          {/* Definitions + Q&A simplified for mobile */}
          <div className="mt-6 space-y-4 text-sm">
            <p><strong>Length:</strong> Distance between two points. Useful in daily measurements.</p>
            <p><strong>Temperature:</strong> Hotness or coldness. Commonly converted between Celsius and Fahrenheit.</p>
            <p><strong>Time:</strong> Sequence of events. Conversions help in scheduling and planning.</p>
            <p><strong>Area:</strong> Space inside shapes. Used in construction and land measurement.</p>
            <p><strong>Volume:</strong> Space an object occupies. Helpful in liquids and packaging.</p>
            <p><strong>Weight:</strong> Force of gravity on mass. Common in trade and health.</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="mt-4 bg-white p-6 shadow-lg rounded-xl">
          <Sidebar/>
            
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
