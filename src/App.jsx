import React from "react";
import { Routes, Route } from "react-router-dom";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UnitConvertor from "./pages/UnitConverter";

import LoanPage from "./pages/LoanPage";
import Mortgagepage from "./pages/Mortgagepage";
import PercentagePage from "./pages/PercentagePage";
import CalculatorPage from "./pages/CalculatorPage";
import FinancialPage from "./pages/FinancialPage";

import BmiPage from "./pages/BmiPage";
import CalorieCalculatorPage from "./pages/CalorieCalculatorPage";
import IdealWeightCalculatorPage from "./pages/IdealWeightCalculatorPage";
import BodyFatCalculatorPage from "./pages/BodyFatCalculatorPage"
import  BasalMetabolicRateCalculatorPage from "./pages/BasalMetabolicRateCalculatorPage";

import MacroCalculator from "./components/health/MacroCalculator";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UnitConvertor />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/terms-of-use" element={<TermsOfUse/>} />
      
      <Route path="/percentage-calculator" element={<PercentagePage/>} />
      <Route path="/calculator" element={<CalculatorPage/>} />
      <Route path="/finance-calculator" element={<FinancialPage/>} />

      <Route path="/loan-calculator" element={<LoanPage/>} />
      <Route path="/mortgage-calculator" element={<Mortgagepage/>} />

      <Route path="/bmi-calculator" element={<BmiPage />} />
      <Route path="/calorie-calculator" element={<CalorieCalculatorPage />} />
      <Route path="/body-fat-calculator" element={<BodyFatCalculatorPage />} />
      <Route path="/bmr-calculator" element={<BasalMetabolicRateCalculatorPage />} />
      <Route path="/ideal-weight-calculator" element={<IdealWeightCalculatorPage />} />
      <Route path="/ideal-weight-calculator" element={<IdealWeightCalculatorPage />} />

      <Route path="/macro-calculator" element={<MacroCalculator />} />
    </Routes>
    
    
  );
};

export default App;
