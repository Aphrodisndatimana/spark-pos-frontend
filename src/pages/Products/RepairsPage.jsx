import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

export default function RepairsPage({ isDarkMode, setIsDarkMode }) {
  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 flex flex-col justify-between ${
        isDarkMode
          ? 'bg-[#111827] text-slate-100 selection:bg-amber-500 selection:text-white'
          : 'bg-slate-50 text-slate-800 selection:bg-amber-500 selection:text-white'
      }`}
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow pt-16">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border ${
                isDarkMode
                  ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                  : 'bg-amber-50 border-amber-200 text-amber-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Device Repair &amp; Service Management
            </div>

            <h1
              className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Repairs &amp; Service{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Ticket System
              </span>
            </h1>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Track customer device repair jobs from intake to technician repair and final handover. Keep customers updated with SMS notifications while managing spare parts inventory seamlessly.
            </p>
          </div>
        </section>

        {/* WORKFLOW STEPS */}
        <section
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t ${
            isDarkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Lifecycle Workflow
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              How Repair Tickets Work in SparkPOS
            </h2>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Clear accountability for cashiers, technicians, and customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div
              className={`p-6 rounded-2xl border transition ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full font-extrabold flex items-center justify-center text-xs mb-4 ${
                  isDarkMode
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                01
              </div>
              <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Ticket Intake
              </h3>
              <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Log the customer’s device details, IMEI/Serial number, reported issue, deposit paid, and physical condition.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className={`p-6 rounded-2xl border transition ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full font-extrabold flex items-center justify-center text-xs mb-4 ${
                  isDarkMode
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                02
              </div>
              <h3 className={`font-bold text-xs sm:text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Diagnosis &amp; Quote
              </h3>
              <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Assign ticket to a technician. Input estimated cost for spare parts and labor, then request customer approval.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className={`p-6 rounded-2xl border transition ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full font-extrabold flex items-center justify-center text-xs mb-4 ${
                  isDarkMode
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                03
              </div>
              <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Parts &amp; Labor Tracking
              </h3>
              <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Technicians deduct replacement screens or batteries directly from stock and mark status updates in real time.
              </p>
            </div>

            {/* Step 4 */}
            <div
              className={`p-6 rounded-2xl border transition ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full font-extrabold flex items-center justify-center text-xs mb-4 ${
                  isDarkMode
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                04
              </div>
              <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Collection &amp; Receipt
              </h3>
              <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Notify customer via SMS. Upon pickup, collect remaining balance and print an itemized repair receipt.
              </p>
            </div>
          </div>
        </section>

        {/* REPAIR FEATURES */}
        <section
          className={`py-16 border-t ${
            isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-slate-100/70 border-slate-200'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Core Features
              </span>
              <h2
                className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Built for Tech Labs &amp; Repair Shops
              </h2>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Everything needed to run a professional repair desk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div
                className={`p-6 rounded-2xl border flex gap-4 transition ${
                  isDarkMode
                    ? 'bg-[#1f2937] border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    SMS Customer Notifications
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Automatically text customers when their repair is diagnosed, ready for pickup, or awaiting parts approval.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div
                className={`p-6 rounded-2xl border flex gap-4 transition ${
                  isDarkMode
                    ? 'bg-[#1f2937] border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Spare Parts Auto-Deduction
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Link repair tickets directly to spare parts inventory so stock counts stay accurate after every repair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`border rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6 ${
              isDarkMode
                ? 'bg-[#1f2937] border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Start tracking repair tickets today
              </h3>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Manage service jobs and parts inventory smoothly in SparkPOS.
              </p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link
                to="/login"
                className={`flex-1 sm:flex-none text-center px-5 py-3 font-semibold text-xs rounded-xl border transition ${
                  isDarkMode
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-slate-200 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="flex-1 sm:flex-none text-center px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}