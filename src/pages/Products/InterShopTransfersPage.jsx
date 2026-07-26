import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

export default function InterShopTransfersPage({ isDarkMode, setIsDarkMode }) {
  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 flex flex-col justify-between ${
        isDarkMode
          ? 'bg-[#111827] text-slate-100 selection:bg-indigo-500 selection:text-white'
          : 'bg-slate-50 text-slate-800 selection:bg-indigo-500 selection:text-white'
      }`}
    >
      {/* Pass Theme State to Navbar */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow pt-16">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border ${
                isDarkMode
                  ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                  : 'bg-indigo-50 border-indigo-200 text-indigo-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Multi-Branch Inventory &amp; Stock Lending System
            </div>

            <h1
              className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Inter-Shop Transfers &amp;{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Stock Lending
              </span>
            </h1>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Effortlessly move inventory permanently or lend serialized stock temporarily between store branches. Eliminate missing devices, prevent theft, and maintain full financial accountability.
            </p>
          </div>
        </section>

        {/* SECTION 1: TWO CORE MOVEMENT TYPES */}
        <section
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t transition-colors ${
            isDarkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
              Core Functionality
            </span>
            <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              How Inventory Movements Work in SparkPOS
            </h2>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Choose between permanent relocation or temporary borrowing between shop locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Permanent Transfers */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border relative flex flex-col justify-between transition-colors ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-500 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                  Permanent Relocation
                </span>
                <h3 className={`text-xl font-bold mt-3 mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Inter-Shop Stock Transfers
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Permanently moves ownership of items or serialized devices (IMEI/Serial) from Store A to Store B to rebalance inventory across stores.
                </p>

                <ul className={`space-y-3 text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span><strong>Dispatch Lock:</strong> Outgoing items are marked as "In-Transit" to prevent accidental sales during delivery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span><strong>Barcode Scan Verification:</strong> Receiving branch staff must scan incoming IMEIs to confirm arrival.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">✓</span>
                    <span><strong>Instant Stock Shift:</strong> Live stock count decreases at Store A and increases at Store B upon confirmation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Stock Lending */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border relative flex flex-col justify-between transition-colors ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-500 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-500 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                  Temporary Borrowing
                </span>
                <h3 className={`text-xl font-bold mt-3 mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Stock Lending Products
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Allows Store A to temporarily borrow a product or IMEI unit from Store B to close a walk-in sale or for display purposes without altering stock ownership permanently.
                </p>

                <ul className={`space-y-3 text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span><strong>Lending Tracking Tag:</strong> The borrowed item is tagged under "Lent Stock" assigned to the requesting store.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span><strong>Automated Cost Settlement:</strong> If Store A sells the item, SparkPOS credits sale profit to Store A while reimbursing cost price to Store B.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span><strong>Return Logging:</strong> If unsold, the item is returned to Store B and restored to active stock upon scan.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: STEP-BY-STEP WORKFLOW */}
        <section
          className={`py-16 border-t transition-colors ${
            isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-slate-100/70 border-slate-200'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                Process Breakdown
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Step-by-Step Execution Workflow
              </h2>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                How cashier and manager requests are handled seamlessly across stores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div
                className={`p-6 rounded-2xl border transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-500 font-extrabold flex items-center justify-center text-xs mb-4">
                  01
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Request &amp; Dispatch
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Store manager creates a transfer order or stock lend request selecting specific items or IMEIs from another branch.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className={`p-6 rounded-2xl border transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-500 font-extrabold flex items-center justify-center text-xs mb-4">
                  02
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Transit Status Lock
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  The owning store approves dispatch. Items enter an in-transit/borrowed status, locking them from local sales.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className={`p-6 rounded-2xl border transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-500 font-extrabold flex items-center justify-center text-xs mb-4">
                  03
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Receiving Handshake
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  The receiving branch scans barcode labels on physical arrival to acknowledge intake and verify no missing units.
                </p>
              </div>

              {/* Step 4 */}
              <div
                className={`p-6 rounded-2xl border transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-500 font-extrabold flex items-center justify-center text-xs mb-4">
                  04
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Final Settlement
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  SparkPOS updates live stock counts, reconciles revenue, and generates an audit log for store accounting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY SYSTEM ADVANTAGES */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
              Security &amp; Management
            </span>
            <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Multi-Branch Control Features
            </h2>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Protecting retail operations from inventory shrinkage and unrecorded loans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`p-6 rounded-2xl border flex gap-4 transition-colors ${
                isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl h-fit">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Discrepancy Alerts
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  If Store B sends 5 units but Store A only receives 4, SparkPOS raises an immediate missing-unit alert to store management.
                </p>
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl border flex gap-4 transition-colors ${
                isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl h-fit">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Centralized Live Dashboard
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Business owners can track all active inter-shop transfers and borrowed stock across all branch locations in real time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: BOTTOM CTA */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`rounded-3xl p-8 border text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6 transition-colors ${
              isDarkMode
                ? 'bg-[#1f2937] border-slate-800'
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Streamline multi-store stock movements
              </h3>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Manage inter-shop transfers and stock lending accurately in SparkPOS.
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
                className="flex-1 sm:flex-none text-center px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition shadow-md"
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