import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

// Modern SVG Icons for Electronics & Repair Shops
const BarcodeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h2v16H4V4zm4 0h1v16H8V4zm3 0h2v16h-2V4zm5 0h1v16h-1V4zm3 0h1v16h-1V4z" />
  </svg>
);

const WrenchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 6.6a1 1 0 00-1.6 0l-1 1a1 1 0 000 1.6l5.333 5.333a1 1 0 001.6 0zM12.8 11.933a1 1 0 001.6 0l5.333-5.333a1 1 0 000-1.6l-1-1a1 1 0 00-1.6 0l-5.333 5.333a1 1 0 000 1.6zM21 12.8l-5.333 5.333a1 1 0 01-1.6 0l-5.333-5.333a1 1 0 010-1.6L14.067 5.8a1 1 0 011.6 0zM12 11h.01" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const StoreIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CrossCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

export default function ElectronicsRepairSolution() {
  const [activeTab, setActiveTab] = useState('imei');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      {/* --- HERO SECTION (pt-28 sm:pt-32 prevents Navbar overlapping) --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-28 sm:pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
              Tailored Solution for Kigali Electronics Shops
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Never Lose Track of an <span className="text-blue-400">IMEI</span> or a <span className="text-blue-400">Repair Ticket</span> Again.
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              SparkPos transforms traditional Kigali tech stalls into digitized powerhouses. Streamline phone repairs, serial tracking, warranty claims, and connect directly to buyers looking for stock across the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/register'  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
                Get Started<ArrowRightIcon />
              </Link>
              <Link to='/login'  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg border border-slate-600 transition-all">
                Login
              </Link>
            </div>
          </div>

          {/* Hero Image / Dashboard Preview */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 blur-lg"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80" 
                alt="Electronics technician repairing hardware" 
                className="w-full h-80 object-cover opacity-80"
              />
              <div className="p-6 bg-slate-900/90 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-blue-400">REPAIR TICKET #TK-8042</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">In Progress</span>
                </div>
                <h4 className="font-semibold text-white">iPhone 13 Pro - Screen Replacement</h4>
                <p className="text-xs text-slate-400 mt-1">IMEI: 356789101112131 • Assigned to: Tech Olivier</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BEFORE vs AFTER (PROBLEM & SOLUTION) --- */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How SparkPos Changes Your Business</h2>
          <p className="text-slate-600">Stop relying on paper logbooks, lost receipts, and manual calls to tell customers their phone is ready.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Way */}
          <div className="bg-red-50/50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg text-red-600">
                <ClockIcon />
              </div>
              <h3 className="text-xl font-bold text-red-900">The Old, Paper-Based Way</h3>
            </div>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold"><CrossCircleIcon /></span>
                <span>Writing repairs in paper books leads to lost devices and disputes with clients.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold"><CrossCircleIcon /></span>
                <span>Accidentally selling duplicate or stolen laptops due to lack of serial/IMEI checks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold"><CrossCircleIcon /></span>
                <span>Customers constantly calling your shop asking, "Is my device fixed yet?"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold"><CrossCircleIcon /></span>
                <span>Losing potential buyers because they can't find your store's inventory online.</span>
              </li>
            </ul>
          </div>

          {/* SparkPos Way */}
          <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <CheckCircleIcon />
              </div>
              <h3 className="text-xl font-bold text-blue-900">The SparkPos Digital Way</h3>
            </div>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold"><CheckCircleIcon /></span>
                <span>Digital repair ticketing with instant tracking numbers printed or sent via SMS.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold"><CheckCircleIcon /></span>
                <span>Unique IMEI & Serial Number tracking for every item bought, sold, or returned.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold"><CheckCircleIcon /></span>
                <span>Automated SMS alerts sent to customers the moment technician marks device "Fixed".</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold"><CheckCircleIcon /></span>
                <span>Auto-list your available stock on the central Kigali Customer Portal automatically.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- CORE FEATURES GRID --- */}
      <section className="py-16 bg-white border-t border-slate-200 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Built Specific to Electronics & Hardware</h2>
            <p className="text-slate-600 mt-2">Tools tailored to solve the real daily headaches of Kigali tech vendors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BarcodeIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">IMEI & Serial Number Tracking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Assign specific serial numbers or IMEIs to smartphones, laptops, and tablets during intake or purchase. Prevent fraudulent returns effortlessly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <WrenchIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Repair & Technician Portal</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Log diagnostic notes, record used spare parts (like screens or batteries), and assign jobs to specific technicians inside your workshop.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MessageIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated SMS Notifications</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Send automatic SMS updates to your customers in Kinyarwanda or English when their repair status updates or is ready for pickup.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty Claim Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Issue digital warranty cards (e.g., 3-month store warranty). Look up warranty validity instantly using the customer's phone number or IMEI.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <SearchIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Public Marketplace Integration</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Items in your store automatically become searchable on the SparkPos customer directory, helping shoppers around Kigali locate and hold products from your store.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <StoreIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Location Stock Transfer</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Got stalls in CHIC, UTC, or Downtown? Easily transfer phone parts and accessories between your branches without stock discrepancies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISUAL SHOWCASE / WORKFLOW --- */}
      <section className="py-20 bg-slate-900 text-white px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Designed for Real Hardware Shop Workflows</h2>
            <p className="text-slate-400 mb-8">
              Whether you are managing incoming shipments of spare screens, assigning motherboard repairs to technicians, or checking warranty statuses—SparkPos keeps every department connected.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <SmartphoneIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Intake & Inspection</h4>
                  <p className="text-xs text-slate-400">Record customer lock codes, scratches, and initial fault diagnosis.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <CpuIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Spare Parts Deduction</h4>
                  <p className="text-xs text-slate-400">Inventory automatically deducts screens or batteries used during repairs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80" 
              alt="Computer parts" 
              className="rounded-xl shadow-lg border border-slate-700 h-64 object-cover relative z-10"
            />
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80" 
              alt="POS Dashboard analysis" 
              className="rounded-xl shadow-lg border border-slate-700 h-64 object-cover mt-8 relative z-10"
            />
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Electronics Shop in Kigali?</h2>
          <p className="text-blue-100 mb-8">Join tech stores across the city using SparkPos to track stock, repairs, and boost sales.</p>
          <Link to='/register' className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-100 transition-all">
            Get Started Free
          </Link>
        </div>
      </section>
    <ScrollToTop />
      <Footer />
    </div>
  );
}