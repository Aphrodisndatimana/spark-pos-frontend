import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  // Read local theme setup or default to dark mode accent values
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 text-center transition-colors duration-300 font-sans antialiased selection:bg-[#e800c7] selection:text-white ${
      isDarkMode ? 'bg-[#111827] text-white' : 'bg-[#f3f4f6] text-black'
    }`}>
      
      {/* Visual Element: A Stylized 404 Accent Frame */}
      <div className="relative">
        <h1 className={`text-[10rem] sm:text-[14rem] font-black leading-none select-none tracking-tighter transition-colors duration-300 ${
          isDarkMode ? 'text-neutral-800/60' : 'text-gray-200/80'
        }`}>
          404
        </h1>
        <p className={`absolute inset-0 flex items-center justify-center mt-6 text-2xl sm:text-4xl font-black uppercase tracking-wider ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Page Not Found
        </p>
      </div>

      {/* Message Area */}
      <div className="max-w-md mt-2 space-y-3">
        <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${
          isDarkMode ? 'text-gray-100' : 'text-gray-800'
        }`}>
          Oops! You've drifted into space.
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed font-normal transition-colors duration-300 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back to the platform to explore more setup features.
        </p>
      </div>

      {/* Action Buttons Interface */}
      <div className="flex flex-col justify-center w-full max-w-xs gap-4 mt-8 sm:flex-row sm:max-w-none">
        <Link
          to="/"
          className="px-8 py-4 text-sm font-black text-white transition-all duration-200 bg-[#e800c7] hover:bg-[#d000b2] rounded-xl shadow-lg shadow-[#e800c7]/20 hover:-translate-y-0.5 text-center"
        >
          Return to Home
        </Link>
        
        <button 
          onClick={() => window.history.back()}
          className={`px-8 py-4 text-sm font-bold rounded-xl transition-all duration-200 border cursor-pointer ${
            isDarkMode 
              ? 'bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800' 
              : 'bg-white border-gray-300 text-black hover:bg-gray-50'
          }`}
        >
          Go Back
        </button>
      </div>

      {/* Footer Branding Token */}
      <div className="mt-20 text-xs font-black tracking-widest text-[#2563eb] uppercase">
        SparkPos Ecosystem
      </div>

    </div> 
  );
};

export default PageNotFound;