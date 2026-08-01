import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function RepairsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-800 font-sans">

      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* HERO SECTION */}
        <section className="pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-2 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-100 text-[#1A62FF] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Repairs
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6 flex flex-col gap-y-2 sm:gap-y-3 tracking-tight sm:tracking-wide">
              <span>Manage Repairs Easily and</span>
              <span className="text-[#1A62FF]">Work Better Together</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              Track broken devices, chat with your repair techs, keep customers happy, and organize your shop — all in one place.
            </p>

            {/* GET STARTED BUTTON WITH MODERN SVG ARROW */}
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
        <section className="space-y-12 sm:space-y-16 md:space-y-24 py-8 sm:py-12 mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8 sm:mb-12">
            How SparkPos Helps You Fix And Track Broken Devices Faster
          </h2>

          {/* FEATURE 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div className="overflow-hidden rounded-2xl bg-slate-200 shadow-sm border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80" 
                alt="Easy Device Tracking" 
                className="w-full h-56 sm:h-72 lg:h-80 object-cover"
              />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">1. Easy Device Tracking</h3>
              <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#1A62FF] font-bold">•</span>
                  <span>Log broken items quickly when customers bring them in.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1A62FF] font-bold">•</span>
                  <span>Know exactly where every device is: <strong>Pending, In Progress, Waiting for Parts, or Ready for Pickup.</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1A62FF] font-bold">•</span>
                  <span>Never lose track of a repair job again.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FEATURE 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div className="order-2 md:order-1 space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">2. Chat Directly on the Job</h3>
              <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#1A62FF] font-bold">•</span>
                  <span>Talk to your technicians right inside the repair ticket.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1A62FF] font-bold">•</span>
                  <span>Ask questions, send updates, and approve parts without leaving the app.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1A62FF] font-bold">•</span>
                  <span>Keep all messages and notes tied to the exact device being fixed.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 overflow-hidden rounded-2xl bg-slate-200 shadow-sm border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80" 
                alt="Chat Directly on the Job" 
                className="w-full h-56 sm:h-72 lg:h-80 object-cover"
              />
            </div>
          </div>

          {/* FEATURE 3: Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div className="overflow-hidden rounded-2xl bg-slate-200 shadow-sm border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80" 
                alt="Simple & Secure Tech Accounts" 
                className="w-full h-56 sm:h-72 lg:h-80 object-cover"
              />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">3. Simple & Secure Tech Accounts</h3>
              <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#1A62FF] font-bold">•</span>
                  <span>Shop owners can create account logins for their technicians in seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1A62FF] font-bold">•</span>
                  <span>Techs can log in, update their passwords, and manage their own profile safely.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1A62FF] font-bold">•</span>
                  <span>Keeps your shop's data secure while giving techs the access they need.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION CARD */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">
              Ready to speed up your repair business?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              Start managing your devices and working with your repair team the smart way today!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link 
              to="/login" 
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
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