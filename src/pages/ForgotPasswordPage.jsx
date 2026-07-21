import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  // Theme Toggle State (matches other pages)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle verification/reset pipeline logic here
    setIsSubmitted(true);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 font-sans antialiased transition-colors duration-300 selection:bg-[#e800c7] selection:text-white ${
      isDarkMode ? 'bg-[#111827] text-white' : 'bg-[#f3f4f6] text-black'
    }`}>
      
      {/* Structural Card Container */}
      <div className={`w-full max-w-md p-8 md:p-10 rounded-2xl border shadow-xl transition-all duration-300 ${
        isDarkMode ? 'bg-[#1f2937] border-neutral-800' : 'bg-white border-gray-200'
      }`}>
        
        {/* Header Branding / Title */}
        <div className="mb-8 space-y-2 text-center">
          <div className="text-[#2563eb] text-xs font-black tracking-widest uppercase mb-4">
            SparkPos Secure Gateway
          </div>
          <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${
            isDarkMode ? 'text-white' : 'text-neutral-900'
          }`}>
            Forgot Password?
          </h2>
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {!isSubmitted 
              ? "Enter your registered business account email, and we'll send you recovery codes instantly."
              : "Check your inbox! We've dispatched secure verification rules straight to your endpoint mapping."}
          </p>
        </div>

        {!isSubmitted ? (
          /* Input Form Layout */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className={`text-xs font-black tracking-wider uppercase block ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Business Email Address
              </label>
              <input 
                id="email"
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="owner@kigalishop.com" 
                className={`w-full text-sm px-4 py-3.5 rounded-xl border outline-none font-medium transition-all duration-200 focus:ring-2 focus:ring-[#2563eb] ${
                  isDarkMode 
                    ? 'bg-neutral-900 border-neutral-700 text-white placeholder-neutral-600 focus:border-neutral-600' 
                    : 'bg-gray-50 border-gray-300 text-black placeholder-gray-400 focus:border-gray-400'
                }`}
              />
            </div>

            {/* Core Action Button */}
            <button 
              type="submit" 
              className="w-full py-4 rounded-xl bg-[#e800c7] hover:bg-[#d000b2] text-white font-black text-sm shadow-lg transition-all cursor-pointer shadow-[#e800c7]/20 hover:-translate-y-0.5 text-center"
            >
              Send Recovery Link
            </button>
          </form>
        ) : (
          /* Success State Interface */
          <div className="space-y-6">
            <div className={`p-4 rounded-xl text-center border text-sm font-semibold ${
              isDarkMode ? 'bg-neutral-900/50 border-neutral-800 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'
            }`}>
              Sent securely to <span className="text-[#2563eb] font-black">{email}</span>
            </div>
            
            <button 
              onClick={() => setIsSubmitted(false)}
              className={`w-full py-4 text-sm font-bold rounded-xl transition-all border cursor-pointer ${
                isDarkMode 
                  ? 'bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800' 
                  : 'bg-white border-gray-300 text-black hover:bg-gray-50'
              }`}
            >
              Resend Link
            </button>
          </div>
        )}

        {/* Back navigation hooks */}
        <div className="pt-6 mt-8 text-center transition-colors duration-300 border-t border-dashed border-opacity-40 class border-neutral-800">
          <Link 
            to="/login" 
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#2563eb] hover:underline"
          >
            <span>← Return to workspace login</span>
          </Link>
        </div>

      </div>

      {/* Subtle Dev Theme Toggle Helper (Optional - you can remove this link if global Navbar handles state) */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="mt-8 text-xs font-bold text-gray-400 underline cursor-pointer hover:text-gray-500 decoration-dotted"
      >
        Toggle Preview Mode ({isDarkMode ? 'Light' : 'Dark'})
      </button>

    </div>
  );
}