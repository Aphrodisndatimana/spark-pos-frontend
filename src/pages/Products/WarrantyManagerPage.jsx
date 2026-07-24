import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

export default function WarrantyManagerPage() {
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
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Automated Device Warranty Manager
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Warranty &amp; RMA <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Management System</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Track customer store warranties, manufacturer guarantees, and supplier RMA returns in SparkPOS. Prevent fraudulent claims and let customers check active warranty status online for free.
            </p>
          </div>
        </section>

        {/* FREE PUBLIC WARRANTY CHECKER TOOL */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>

            <div className="text-center sm:text-left mb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                Free Customer Self-Service
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">Check Device Warranty Validity</h2>
              <p className="text-xs text-slate-400 mt-1">
                Enter your device IMEI or Serial number to check if your product warranty is currently active.
              </p>
            </div>

            {/* Quick Sample Selector */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500">Try sample IMEIs:</span>
              <button 
                type="button" 
                onClick={() => { setSearchImei('358921109482012'); setWarrantyResult(null); }}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-mono text-[11px] rounded-lg border border-slate-700 transition"
              >
                358921109482012 (Active)
              </button>
              <button 
                type="button" 
                onClick={() => { setSearchImei('354892019284710'); setWarrantyResult(null); }}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-mono text-[11px] rounded-lg border border-slate-700 transition"
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
                className="flex-grow bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSearching ? 'Verifying...' : 'Check Warranty'}
              </button>
            </form>

            {/* Warranty Result Box */}
            {warrantyResult && (
              <div className="mt-6 pt-6 border-t border-slate-800">
                {warrantyResult.success ? (
                  <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
                    <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Device Found</span>
                        <h3 className="text-base font-extrabold text-white">{warrantyResult.data.device}</h3>
                        <p className="text-xs text-slate-400 font-mono">IMEI: {warrantyResult.data.serial}</p>
                      </div>
                      <span className={`px-2.5 py-1 font-bold text-[10px] rounded-full border ${
                        warrantyResult.data.status === 'Valid / Active'
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                          : 'bg-red-500/10 border-red-500/20 text-red-400'
                      }`}>
                        {warrantyResult.data.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
                      <div>
                        <span className="text-slate-500 block text-[10px]">Purchase Date</span>
                        <span className="text-slate-200">{warrantyResult.data.purchaseDate}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Warranty Expiry Date</span>
                        <span className={`font-bold ${warrantyResult.data.status === 'Valid / Active' ? 'text-emerald-400' : 'text-red-400'}`}>
                          {warrantyResult.data.expiryDate}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Store Outlet</span>
                        <span className="text-slate-200">{warrantyResult.data.purchasedAt}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-5 text-center sm:text-left">
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Not Found</span>
                    <p className="text-xs text-slate-300 mt-1">{warrantyResult.message}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* SYSTEM WORKFLOW */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Automated Control</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How Warranty Management Works</h2>
            <p className="text-sm text-slate-400 mt-1">Complete protection from receipt printing to supplier replacement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center text-xs mb-4">
                01
              </div>
              <h3 className="font-bold text-white text-base mb-2">Automatic Activation at Sale</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                When a device is sold, SparkPOS automatically attaches the warranty policy to the unit's IMEI code on the receipt.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center text-xs mb-4">
                02
              </div>
              <h3 className="font-bold text-white text-base mb-2">Instant Claim Verification</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                When a customer returns a faulty device, scan its IMEI to instantly check valid coverage dates and purchase history.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center text-xs mb-4">
                03
              </div>
              <h3 className="font-bold text-white text-base mb-2">Supplier RMA Return Tracking</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                If the defect is covered under supplier warranty, initiate an RMA claim in SparkPOS to track replacement units.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Protect your shop with SparkPOS Warranty Management</h3>
              <p className="text-xs text-slate-400 mt-1">Start tracking warranties and supplier RMAs accurately today.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link to="/login" className="flex-1 sm:flex-none text-center px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition">
                Log In
              </Link>
              <Link to="/register" className="flex-1 sm:flex-none text-center px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition">
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