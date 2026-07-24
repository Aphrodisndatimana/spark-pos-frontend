import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

// SVG Icons tailored for Computer Retailers
const CpuChipIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const LayersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const TagPriceIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

const SerialBarcodeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-16v16M4 4v16m4-16v16m12-16v16" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function ComputerRetailerSolution() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-28 sm:pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
              Tailored Solution for Computer Stores & Hardware Dealers
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Manage <span className="text-blue-400">Custom Builds</span>, Laptops & Specs in One Central POS.
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Designed for PC stores, laptop importers, and IT vendors in Kigali. Bundle components into custom rigs, track serial numbers for RAM and GPUs, and publish live stock to buyers searching for hardware across the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/register'  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
               Get Started<ArrowRightIcon />
              </Link>
              <Link to='/login' className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg border border-slate-600 transition-all">
                Login
              </Link>
            </div>
          </div>

          {/* Hero Image Showcase - High Quality Modern Laptop */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 blur-lg"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80" 
                alt="Modern sleek laptop computer" 
                className="w-full h-80 object-cover opacity-90"
              />
              <div className="p-6 bg-slate-900/90 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-blue-400">STOCK UNIT #LP-9042</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">In Stock • 1-Year Warranty</span>
                </div>
                <h4 className="font-semibold text-white">Pro Laptop 16" - M2 Max (16GB RAM / 1TB SSD)</h4>
                <p className="text-xs text-slate-400 mt-1">Serial Tag: C02G4108Q05N • Location: CHIC Store Branch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BEFORE VS AFTER --- */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Transforming Kigali Computer Retail</h2>
          <p className="text-slate-600">Eliminate manual spec sheets, mixed-up component serial numbers, and unorganized corporate invoicing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-red-50/50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-red-100 rounded-lg text-red-600"><CrossIcon /></span>
              The Old Computer Shop Workflow
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Manually writing computer specs (RAM, SSD, GPU) on paper receipts during sales.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Losing track of individual component warranties when assembling custom desktop PCs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Struggling to provide tiered pricing for individual shoppers vs. corporate wholesale buyers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Buyers calling constantly to ask if a specific GPU or laptop model is in stock.</span>
              </li>
            </ul>
          </div>

          {/* SparkPos Way */}
          <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-blue-100 rounded-lg text-blue-600"><CheckIcon /></span>
              The SparkPos PC Retail Workflow
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Generate clean digital spec-sheets and proforma invoices formatted for Kigali businesses.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Bundle motherboards, CPUs, and GPUs into a custom PC—deducting stock in real time.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Multi-tier pricing rules for retail customers, IT contractors, and bulk buyers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>List laptop models directly on the city-wide portal so shoppers can find and reserve items.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SPECIFIC FEATURES GRID --- */}
      <section className="py-16 bg-white border-t border-slate-200 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Tailored Features for PC & Hardware Sellers</h2>
            <p className="text-slate-600 mt-2">Built for the unique complexities of selling computers and modular hardware.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <LayersIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">PC Builder & Bundling</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Combine individual items (Case, Power Supply, RAM, GPU) into a single PC build receipt while keeping track of individual part quantities.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <SerialBarcodeIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Serial Number Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Track unique serial numbers for laptops, pre-builts, and high-value components from supplier purchase orders to final retail sale.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <TagPriceIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wholesale & Retail Tiered Pricing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Set multiple price points for individual components. Switch effortlessly between walk-in retail prices and wholesale discount rates.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldCheckIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Manufacturer Warranty Tracking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Store 1-year, 2-year, or 3-year factory warranty periods on sold devices so you can process supplier RMAs with zero paperwork confusion.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CpuChipIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Tech Specifications</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Attach technical attributes (Processor, RAM size, Storage, Screen size) to products so staff can quickly filter and find the right match for clients.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <TruckIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Branch-to-Branch Transfers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Easily transfer monitors or laptops between your main store and satellite stalls across Kigali with instant stock acceptance workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Empower Your Computer Retail Business Today</h2>
          <p className="text-blue-100 mb-8">Join leading IT hardware suppliers in Kigali using SparkPos to simplify computer sales and stock.</p>
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