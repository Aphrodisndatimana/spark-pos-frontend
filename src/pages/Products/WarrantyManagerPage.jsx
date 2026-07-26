import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

export default function WarrantyManagerPage({ isDarkMode, setIsDarkMode }) {
  // State for free public warranty lookup
  const [searchImei, setSearchImei] = useState('');
  const [warrantyResult, setWarrantyResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Sample mock data for public warranty checks
  const sampleWarranties = {
    '358921109482012': {
      device: 'Samsung Galaxy A54 5G',
      serial: '358921109482012',
      purchaseDate: 'Jan 15, 2026',
      warrantyPeriod: '12 Months Store Warranty',
      expiryDate: 'Jan 15, 2027',
      status: 'Valid / Active',
      covered: 'Hardware Defect, Screen Lines, Motherboard Failure',
      purchasedAt: 'Remera Store'
    },
    '354892019284710': {
      device: 'iPhone 15 Pro Max',
      serial: '354892019284710',
      purchaseDate: 'Jul 10, 2025',
      warrantyPeriod: '6 Months Limited Warranty',
      expiryDate: 'Jan 10, 2026',
      status: 'Expired',
      covered: 'Factory Defect Only',
      purchasedAt: 'Kigali Heights Shop'
    }
  };

  const handleLookup = (e) => {
    e.preventDefault();
    if (!searchImei.trim()) return;

    setIsSearching(true);
    setWarrantyResult(null);

    setTimeout(() => {
      const cleanImei = searchImei.trim();
      const found = sampleWarranties[cleanImei];

      if (found) {
        setWarrantyResult({ success: true, data: found });
      } else {
        setWarrantyResult({
          success: false,
          message: 'No active warranty record found for this IMEI/Serial number. Please verify the code on your receipt.'
        });
      }
      setIsSearching(false);
    }, 600);
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 flex flex-col justify-between ${
        isDarkMode
          ? 'bg-[#111827] text-slate-100 selection:bg-emerald-500 selection:text-white'
          : 'bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white'
      }`}
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow pt-16">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border ${
                isDarkMode
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Automated Device Warranty Manager
            </div>

            <h1
              className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Warranty &amp; RMA{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Management System
              </span>
            </h1>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Track customer store warranties, manufacturer guarantees, and supplier RMA returns in SparkPOS. Prevent fraudulent claims and let customers check active warranty status online for free.
            </p>
          </div>
        </section>

        {/* FREE PUBLIC WARRANTY CHECKER TOOL */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div
            className={`border rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition ${
              isDarkMode
                ? 'bg-[#1f2937] border-slate-800'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>

            <div className="text-center sm:text-left mb-6">
              <span
                className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${
                  isDarkMode
                    ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                    : 'text-emerald-700 bg-emerald-50 border-emerald-200'
                }`}
              >
                Free Customer Self-Service
              </span>
              <h2
                className={`text-xl sm:text-2xl font-bold mt-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Check Device Warranty Validity
              </h2>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Enter your device IMEI or Serial number to check if your product warranty is currently active.
              </p>
            </div>

            {/* Quick Sample Selector */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
                Try sample IMEIs:
              </span>
              <button
                type="button"
                onClick={() => { setSearchImei('358921109482012'); setWarrantyResult(null); }}
                className={`px-2.5 py-1 font-mono text-[11px] rounded-lg border transition ${
                  isDarkMode
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-emerald-400 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-emerald-700 border-slate-300'
                }`}
              >
                358921109482012 (Active)
              </button>
              <button
                type="button"
                onClick={() => { setSearchImei('354892019284710'); setWarrantyResult(null); }}
                className={`px-2.5 py-1 font-mono text-[11px] rounded-lg border transition ${
                  isDarkMode
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-emerald-400 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-emerald-700 border-slate-300'
                }`}
              >
                354892019284710 (Expired)
              </button>
            </div>

            {/* Lookup Form */}
            <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter 15-digit IMEI or Serial number..."
                value={searchImei}
                onChange={(e) => setSearchImei(e.target.value)}
                className={`flex-grow rounded-xl px-4 py-3 text-xs font-mono transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isDarkMode
                    ? 'bg-[#111827] border border-slate-700 text-white placeholder-slate-500'
                    : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              />
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm"
              >
                {isSearching ? 'Verifying...' : 'Check Warranty'}
              </button>
            </form>

            {/* Warranty Result Box */}
            {warrantyResult && (
              <div
                className={`mt-6 pt-6 border-t ${
                  isDarkMode ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                {warrantyResult.success ? (
                  <div
                    className={`border rounded-2xl p-5 space-y-3 ${
                      isDarkMode
                        ? 'bg-[#111827] border-emerald-500/30'
                        : 'bg-emerald-50/50 border-emerald-200'
                    }`}
                  >
                    <div
                      className={`flex justify-between items-start border-b pb-3 ${
                        isDarkMode ? 'border-slate-800' : 'border-slate-200'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">
                          Device Found
                        </span>
                        <h3
                          className={`text-base font-extrabold ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {warrantyResult.data.device}
                        </h3>
                        <p
                          className={`text-xs font-mono ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        >
                          IMEI: {warrantyResult.data.serial}
                        </p>
                      </div>
                      <span
                        className={`px-2.5 py-1 font-bold text-[10px] rounded-full border ${
                          warrantyResult.data.status === 'Valid / Active'
                            ? isDarkMode
                              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                              : 'bg-emerald-100 border-emerald-300 text-emerald-800'
                            : isDarkMode
                            ? 'bg-red-500/10 border-red-500/20 text-red-400'
                            : 'bg-red-100 border-red-300 text-red-800'
                        }`}
                      >
                        {warrantyResult.data.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
                      <div>
                        <span
                          className={`block text-[10px] ${
                            isDarkMode ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          Purchase Date
                        </span>
                        <span className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>
                          {warrantyResult.data.purchaseDate}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`block text-[10px] ${
                            isDarkMode ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          Warranty Expiry Date
                        </span>
                        <span
                          className={`font-bold ${
                            warrantyResult.data.status === 'Valid / Active'
                              ? 'text-emerald-500'
                              : 'text-red-500'
                          }`}
                        >
                          {warrantyResult.data.expiryDate}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`block text-[10px] ${
                            isDarkMode ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          Store Outlet
                        </span>
                        <span className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>
                          {warrantyResult.data.purchasedAt}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`border rounded-2xl p-5 text-center sm:text-left ${
                      isDarkMode
                        ? 'bg-[#111827] border-amber-500/30'
                        : 'bg-amber-50/50 border-amber-200'
                    }`}
                  >
                    <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">
                      Not Found
                    </span>
                    <p
                      className={`text-xs mt-1 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {warrantyResult.message}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* SYSTEM WORKFLOW */}
        <section
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t ${
            isDarkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
              Automated Control
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              How Warranty Management Works
            </h2>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Complete protection from receipt printing to supplier replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                01
              </div>
              <h3
                className={`font-bold text-base mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Automatic Activation at Sale
              </h3>
              <p
                className={`text-xs leading-relaxed ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                When a device is sold, SparkPOS automatically attaches the warranty policy to the unit's IMEI code on the receipt.
              </p>
            </div>

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
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                02
              </div>
              <h3
                className={`font-bold text-base mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Instant Claim Verification
              </h3>
              <p
                className={`text-xs leading-relaxed ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                When a customer returns a faulty device, scan its IMEI to instantly check valid coverage dates and purchase history.
              </p>
            </div>

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
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                03
              </div>
              <h3
                className={`font-bold text-base mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Supplier RMA Return Tracking
              </h3>
              <p
                className={`text-xs leading-relaxed ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                If the defect is covered under supplier warranty, initiate an RMA claim in SparkPOS to track replacement units.
              </p>
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
              <h3
                className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Protect your shop with SparkPOS Warranty Management
              </h3>
              <p
                className={`text-xs mt-1 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Start tracking warranties and supplier RMAs accurately today.
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
                className="flex-1 sm:flex-none text-center px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition shadow-sm"
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