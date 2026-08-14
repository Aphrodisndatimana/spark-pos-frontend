import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function RepairsPage({ isDarkMode, setIsDarkMode }) {
  return (
    <div className={`flex flex-col min-h-screen font-sans transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#0f172a] text-slate-100' 
        : 'bg-[#F8F9FA] text-slate-800'
    }`}>

      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section className="px-2 pb-12 pt-28 sm:pt-36 lg:pt-40 sm:pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className={`inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 ${
              isDarkMode ? 'bg-blue-950/80 text-blue-400' : 'bg-blue-100 text-[#1A62FF]'
            }`}>
              Repairs
            </span>

            <h1 className={`flex flex-col mb-4 text-3xl font-semibold tracking-tight gap-y-2 sm:gap-y-3 sm:text-4xl md:text-5xl lg:text-5xl sm:mb-6 sm:tracking-wide ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <span>Manage Repairs Easily and</span>
              <span className={isDarkMode ? 'text-blue-500' : 'text-[#1A62FF]'}>
                Work Better Together
              </span>
            </h1>

            <p className={`max-w-2xl mb-6 text-base leading-relaxed sm:text-lg md:text-xl sm:mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-slate-600'
            }`}>
              Track broken devices, chat with your repair techs, keep customers happy, and organize your shop — all in one place.
            </p>

            <Link 
              to="/register" 
              className="group inline-flex items-center justify-center gap-2 bg-[#1A62FF] hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              <span>Get Started For Free</span>
              <svg 
                className="w-5 h-5 stroke-white fill-none stroke-[2] transition-transform duration-200 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-8 mb-12 space-y-12 sm:space-y-16 md:space-y-24 sm:py-12 sm:mb-20">
          <h2 className={`mb-8 text-2xl font-bold sm:text-3xl md:text-4xl sm:mb-12 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            How SparkPos Helps You Fix And Track Broken Devices Faster
          </h2>

          {/* FEATURE 1 */}
          <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 sm:gap-10">
            <div className={`overflow-hidden border shadow-sm rounded-2xl ${
              isDarkMode ? 'bg-neutral-800 border-neutral-800' : 'bg-slate-200 border-slate-200'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80" 
                alt="Easy Device Tracking" 
                className="object-cover w-full h-56 sm:h-72 lg:h-80"
              />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className={`text-xl font-bold sm:text-2xl ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                1. Easy Device Tracking
              </h3>
              <ul className={`space-y-2.5 sm:space-y-3 text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-slate-600'
              }`}>
                <li className="flex items-start gap-2">
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#1A62FF]'}`}>•</span>
                  <span>Log broken items quickly when customers bring them in.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#1A62FF]'}`}>•</span>
                  <span>Know exactly where every device is: <strong className={isDarkMode ? 'text-gray-100' : 'text-slate-800'}>Pending, In Progress, Waiting for Parts, or Ready for Pickup.</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#1A62FF]'}`}>•</span>
                  <span>Never lose track of a repair job again.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FEATURE 2 */}
          <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 sm:gap-10">
            <div className="order-2 space-y-3 md:order-1 sm:space-y-4">
              <h3 className={`text-xl font-bold sm:text-2xl ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                2. Chat Directly on the Job
              </h3>
              <ul className={`space-y-2.5 sm:space-y-3 text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-slate-600'
              }`}>
                <li className="flex items-start gap-2">
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#1A62FF]'}`}>•</span>
                  <span>Talk to your technicians right inside the repair ticket.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#1A62FF]'}`}>•</span>
                  <span>Ask questions, send updates, and approve parts without leaving the app.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#1A62FF]'}`}>•</span>
                  <span>Keep all messages and notes tied to the exact device being fixed.</span>
                </li>
              </ul>
            </div>
            <div className={`order-1 overflow-hidden border shadow-sm md:order-2 rounded-2xl ${
              isDarkMode ? 'bg-neutral-800 border-neutral-800' : 'bg-slate-200 border-slate-200'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80" 
                alt="Chat Directly on the Job" 
                className="object-cover w-full h-56 sm:h-72 lg:h-80"
              />
            </div>
          </div>

          {/* FEATURE 3 */}
          <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 sm:gap-10">
            <div className={`overflow-hidden border shadow-sm rounded-2xl ${
              isDarkMode ? 'bg-neutral-800 border-neutral-800' : 'bg-slate-200 border-slate-200'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80" 
                alt="Simple & Secure Tech Accounts" 
                className="object-cover w-full h-56 sm:h-72 lg:h-80"
              />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className={`text-xl font-bold sm:text-2xl ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                3. Simple & Secure Tech Accounts
              </h3>
              <ul className={`space-y-2.5 sm:space-y-3 text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-slate-600'
              }`}>
                <li className="flex items-start gap-2">
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#1A62FF]'}`}>•</span>
                  <span>Shop owners can create account logins for their technicians in seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#1A62FF]'}`}>•</span>
                  <span>Techs can log in, update their passwords, and manage their own profile safely.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#1A62FF]'}`}>•</span>
                  <span>Keeps your shop's data secure while giving techs the access they need.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION CARD */}
        <section className={`flex flex-col items-start justify-between gap-6 p-6 mb-12 transition-colors border shadow-sm rounded-2xl sm:p-8 md:p-10 md:flex-row md:items-center sm:mb-16 ${
          isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-200'
        }`}>
          <div>
            <h3 className={`mb-1 text-lg font-bold sm:text-xl md:text-2xl sm:mb-2 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to speed up your repair business?
            </h3>
            <p className={`text-xs sm:text-sm md:text-base ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Start managing your devices and working with your repair team the smart way today!
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-3 sm:flex-row md:w-auto">
            <Link 
              to="/login" 
              className={`w-full px-6 py-3 text-sm font-semibold text-center transition-colors border sm:w-auto rounded-xl ${
                isDarkMode 
                  ? 'border-neutral-700 text-gray-200 hover:bg-neutral-800' 
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Log In
            </Link>
            <Link 
              to="/register"  
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#1A62FF] hover:bg-blue-700 text-white font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}