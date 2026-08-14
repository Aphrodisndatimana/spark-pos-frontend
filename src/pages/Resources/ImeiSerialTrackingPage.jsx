import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

// Simple reusable fade-in component for scroll animations
const ScrollReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default function ImeiCheckPage({ isDarkMode, setIsDarkMode }) {
  const handleCheckSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 flex flex-col justify-between ${
        isDarkMode
          ? 'bg-[#0f172a] text-slate-100 selection:bg-blue-500 selection:text-white'
          : 'bg-[#F8F9FA] text-slate-800 selection:bg-blue-500 selection:text-white'
      }`}
    >
      {/* Pass Theme State to Navbar */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[100vh] flex items-center justify-center bg-cover bg-center px-4 py-16 sm:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 7, 36, 0.75), rgba(0, 7, 36, 0.85)), url('/images/IMEI Checker.jpg')`,
        }}
      >
        <div className="w-full max-w-4xl pt-12 mt-20 space-y-4 text-center text-white sm:pt-16 sm:space-y-6">
          <h1 className="px-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Don't Get Scammed. Check Any Device's IMEI or Serial Number for Free
          </h1>
          <p className="max-w-2xl px-4 mx-auto text-xs text-gray-300 sm:text-base md:text-lg">
            Get Model, Blacklist status and other details for any devices
          </p>

          {/* INPUT FORM CONTAINER */}
          <form onSubmit={handleCheckSubmit} className="max-w-3xl px-2 pt-4 mx-auto sm:px-4">
            <div
              className={`flex flex-col items-center w-full gap-2 p-2 transition-colors border shadow-lg sm:flex-row rounded-2xl sm:rounded-full focus-within:ring-2 focus-within:ring-blue-500 ${
                isDarkMode
                  ? 'bg-slate-800/90 border-slate-700 text-white'
                  : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              <input
                type="text"
                placeholder="e.g., 351234567890123 (IMEI) or LQX7D2M9JW (Serial)"
                className={`w-full px-4 py-3 text-xs bg-transparent sm:text-sm rounded-xl focus:outline-none ${
                  isDarkMode
                    ? 'text-white placeholder-slate-400'
                    : 'text-gray-900 placeholder-gray-400'
                }`}
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 sm:py-3.5 font-semibold text-white bg-blue-600 rounded-xl sm:rounded-full whitespace-nowrap shadow-md hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-in-out cursor-pointer"
              >
                Check
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="max-w-5xl px-4 py-12 mx-auto space-y-16 sm:py-20 sm:space-y-24">
        
        {/* Intro Header */}
        <ScrollReveal>
          <div className="px-2 space-y-3 text-center sm:space-y-4">
            <h2 className={`text-xl font-bold tracking-tight sm:text-3xl md:text-4xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Get Started with <span className="text-blue-500">SparkPos</span> in Easy Steps
            </h2>
            <p className={`max-w-3xl mx-auto text-xs leading-relaxed sm:text-base ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Upgrade your experience with SparkPOS. Shop owners track and manage stock and warranties without the stress. Customers instantly verify device details via IMEI or serial number.
            </p>
          </div>
        </ScrollReveal>

        {/* Step 1 */}
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 sm:gap-10 md:flex-row md:gap-16">
            <div className="flex justify-center w-full max-w-xs sm:max-w-sm md:w-1/2">
              <img
                src="/images/createAccount01.png"
                alt="create account visual"
                className="object-contain w-auto max-h-64 sm:max-h-80"
              />
            </div>
            <div className="w-full space-y-2 text-center md:text-left sm:space-y-3 md:w-1/2">
              <span className={`block text-4xl font-extrabold sm:text-6xl md:text-7xl ${
                isDarkMode ? 'text-slate-800' : 'text-slate-200'
              }`}>
                01
              </span>
              <h3 className={`text-lg font-bold sm:text-xl md:text-2xl ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Create Your Account
              </h3>
              <p className={`text-xs sm:text-base ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                To get started we need few information about you
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 2 */}
        <ScrollReveal>
          <div className="flex flex-col-reverse items-center gap-6 sm:gap-10 md:flex-row md:gap-16">
            <div className="w-full space-y-2 text-center md:text-left sm:space-y-3 md:w-1/2">
              <span className={`block text-4xl font-extrabold sm:text-6xl md:text-7xl ${
                isDarkMode ? 'text-slate-800' : 'text-slate-200'
              }`}>
                02
              </span>
              <h3 className={`text-lg font-bold sm:text-xl md:text-2xl ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Select Your Account Type
              </h3>
              <p className={`text-xs sm:text-base ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Just for distinguish your dashboard from others
              </p>
            </div>
            <div className="flex justify-center w-full max-w-xs sm:max-w-sm md:w-1/2">
              <img
                src="/images/createAccount02.png"
                alt="select account type visual"
                className="object-contain w-auto max-h-64 sm:max-h-80"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Step 3 */}
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 sm:gap-10 md:flex-row md:gap-16">
            <div className={`w-full max-w-xs sm:max-w-sm md:w-1/2 aspect-[4/3] rounded-2xl shadow-lg border flex items-center justify-center overflow-hidden p-2 transition-colors ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <img
                src="/images/dashboard03.webp"
                alt="user dashboard preview"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full space-y-2 text-center md:text-left sm:space-y-3 md:w-1/2">
              <span className={`block text-4xl font-extrabold sm:text-6xl md:text-7xl ${
                isDarkMode ? 'text-slate-800' : 'text-slate-200'
              }`}>
                03
              </span>
              <h3 className={`text-lg font-bold sm:text-xl md:text-2xl ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Explore Your Dashboard
              </h3>
              <p className={`text-xs leading-relaxed sm:text-base ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Your setup is complete. Just click create account, verify email and login with your credentials to start exploring a lot on SparkPos with that dashboard
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Call To Action Block */}
        <ScrollReveal>
          <div className={`flex flex-col w-full gap-4 p-6 text-center border shadow-sm sm:gap-6 sm:p-10 rounded-2xl sm:text-left sm:flex-row sm:items-center sm:justify-between transition-colors ${
            isDarkMode
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-slate-200 shadow-lg'
          }`}>
            <div className="space-y-2">
              <h4 className={`text-sm font-bold sm:text-base md:text-lg ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                SparkPOS makes buying and selling electronics faster and easier.
              </h4>
              <p className={`text-xs sm:text-sm ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                What are you waiting for?{' '}
                <Link to="/register" className="inline-block font-semibold text-blue-500 hover:underline">
                  Get started now.
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

      </section>

      <Footer />
    </div>
  );
}