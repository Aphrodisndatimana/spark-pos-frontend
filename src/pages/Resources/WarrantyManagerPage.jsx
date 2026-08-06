import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function WarrantyManagementPage({ isDarkMode, setIsDarkMode }) {
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

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow pt-16">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border ${
                isDarkMode
                  ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                  : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Safe Product &amp; Warranty Protection
            </div>

            <h1
              className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Protect Your Store with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Serial Code &amp; IMEI Tracking
              </span>
            </h1>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Every device has a unique identity. Scan serial or IMEI numbers on sale and return to verify valid warranties, block fraudulent claims, and track service history seamlessly.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-blue-500/20"
              >
                Get Started Now
              </Link>
              <a
                href="#how-it-works"
                className={`px-6 py-3 font-semibold text-sm rounded-xl border transition ${
                  isDarkMode
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                }`}
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 1: CORE VALUE PROPOSITION (2 COLUMNS) */}
        <section
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t transition-colors ${
            isDarkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Complete Protection
            </span>
            <h2 className={`text-3xl font-extrabold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Built for Shop Owners &amp; Designed for Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: For Shop Owners */}
            <div
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800 hover:border-blue-500/40'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                  For Retail &amp; Repair Shops
                </span>
                <h3 className={`text-2xl font-bold mt-4 mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Eliminate Fraud &amp; Track Every Item
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Scan the device barcode or IMEI code during checkout or repair intake to instantly pull up complete item records.
                </p>

                <ul className="space-y-3.5 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-600 font-bold flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                      <strong>Unique Primary Key:</strong> Treat each product serial or IMEI as a unique unit—never mix up stock.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-600 font-bold flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                      <strong>Stop Fraudulent Returns:</strong> Block fake receipts or products purchased from external stores.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-600 font-bold flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                      <strong>Stolen Item Protection:</strong> Instantly blacklist lost or stolen devices across your store network.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: For Customers */}
            <div
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800 hover:border-blue-500/40'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                  For Buyers &amp; Device Owners
                </span>
                <h3 className={`text-2xl font-bold mt-4 mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Seamless &amp; Paperless Warranty Experience
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Give your customers peace of mind. Warranty information is attached digitally directly to their device.
                </p>

                <ul className="space-y-3.5 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-500 font-bold flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                      <strong>No Paper Needed:</strong> Customers simply bring the device; staff scan the IMEI code to verify coverage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-500 font-bold flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                      <strong>Real-Time Status:</strong> Instantly check remaining warranty days, repair eligibility, and terms.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-500 font-bold flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                      <strong>Transparent Repairs:</strong> Complete history of previous repairs and replaced parts logged safely.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: 4-STEP WORKFLOW */}
        <section
          id="how-it-works"
          className={`py-16 border-t transition-colors ${
            isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-slate-100/70 border-slate-200'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Simple Workflow
              </span>
              <h2 className={`text-3xl font-extrabold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                How IMEI Warranty Scanning Works
              </h2>
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Four simple steps to register, track, and service items securely.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div
                className={`p-6 rounded-2xl border relative transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-sm mb-4 shadow-md shadow-blue-500/20">
                  01
                </div>
                <h3 className={`font-bold text-base mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Register Code
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Scan product IMEI or serial number during inventory intake or checkout to bind it to the purchase.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className={`p-6 rounded-2xl border relative transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-sm mb-4 shadow-md shadow-blue-500/20">
                  02
                </div>
                <h3 className={`font-bold text-base mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Scan on Return
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  When a customer brings an item back, scan the device barcode directly from the item casing.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className={`p-6 rounded-2xl border relative transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-sm mb-4 shadow-md shadow-blue-500/20">
                  03
                </div>
                <h3 className={`font-bold text-base mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Instant Validity Check
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  SparkPOS checks if warranty is active, expired, or flagged as stolen/blacklisted.
                </p>
              </div>

              {/* Step 4 */}
              <div
                className={`p-6 rounded-2xl border relative transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-sm mb-4 shadow-md shadow-blue-500/20">
                  04
                </div>
                <h3 className={`font-bold text-base mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Process Claim
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Approve repairs, generate job cards, or issue replacements with full history logged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY PROTECTION FEATURES */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Security &amp; Safety
            </span>
            <h2 className={`text-3xl font-extrabold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Built-In Fraud Prevention Tools
            </h2>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Protect your revenue and maintain inventory accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`p-6 rounded-2xl border flex items-start gap-4 transition-colors ${
                isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl h-fit">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Fake Serial Number Warnings
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  If a scanned IMEI code does not match existing inventory logs, the system blocks the repair request instantly and flags suspicious activity.
                </p>
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl border flex items-start gap-4 transition-colors ${
                isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl h-fit">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div>
                <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Stolen Device Blacklisting
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Flag lost or stolen devices in your database. When scanned by technicians, immediate alerts prevent servicing stolen goods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CALL TO ACTION */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`rounded-3xl p-8 sm:p-10 border text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6 transition-colors ${
              isDarkMode
                ? 'bg-[#1f2937] border-slate-800'
                : 'bg-white border-slate-200 shadow-lg'
            }`}
          >
            <div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Ready to make your warranty tracking fraud-free?
              </h3>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Track product IMEI codes, eliminate fake returns, and gain customer trust with SparkPOS.
              </p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link
                to="/login"
                className={`flex-1 sm:flex-none text-center px-6 py-3 font-semibold text-xs rounded-xl border transition ${
                  isDarkMode
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="flex-1 sm:flex-none text-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition shadow-md shadow-blue-500/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}