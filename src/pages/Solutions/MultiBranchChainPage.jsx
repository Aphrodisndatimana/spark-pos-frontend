import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

// SVG Icons tailored for Multi-Branch Chains
const BuildingStoreIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const TransferIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 012 2h2a2 2 0 002-2z" />
  </svg>
);

const UsersShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CentralCatalogIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
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

export default function MultiBranchChainSolution() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-28 sm:pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
              Built for Multi-Location Retail & Franchise Networks
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Control All Your <span className="text-blue-400">Branches</span> from One Command Center.
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Whether you operate branches in CHIC, UTC, Remera, or Downtown Kigali, SparkPos gives you complete real-time visibility over inventory, staff performance, and branch sales—wherever you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/register'  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
               Get Started<ArrowRightIcon />
              </Link>
              <Link ot='/login' className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg border border-slate-600 transition-all">
                Login
              </Link>
            </div>
          </div>

          {/* Hero Image Showcase - Warehouse Logistics & Electronics Stock Transfer */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 blur-lg"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80" 
                alt="Multi-Branch Inventory and Stock Distribution" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/1000x800/0f172a/38bdf8?text=Multi-Branch+Inventory+Sync";
                }}
                className="w-full h-80 object-cover opacity-85"
              />
              <div className="p-6 bg-slate-900/90 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-blue-400">INTER-BRANCH STOCK EXCHANGE</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">4 Outlets Synced</span>
                </div>
                <h4 className="font-semibold text-white">Central Warehouse & Outlet Distribution</h4>
                <p className="text-xs text-slate-400 mt-1">Real-time stock transfers between CHIC • UTC • Remera • Downtown</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BEFORE VS AFTER --- */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Scalability Without the Headache</h2>
          <p className="text-slate-600">Stop running between stores to check stock or waiting until end-of-day for paper sales reports.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-red-50/50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-red-100 rounded-lg text-red-600"><CrossIcon /></span>
              The Fragmented Chain Approach
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Isolated store records lead to missing stock and inventory discrepancies.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>No clear record of item transfers between locations, resulting in lost stock.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Calling store managers individually to compile daily sales totals.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Inconsistent pricing and promotion rules applied differently per branch.</span>
              </li>
            </ul>
          </div>

          {/* SparkPos Way */}
          <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-blue-100 rounded-lg text-blue-600"><CheckIcon /></span>
              The SparkPos Multi-Branch System
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Central dashboard displaying real-time stock levels across every outlet.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Track stock transfers with dispatch approval and branch receipt confirmations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Instant sales reports broken down by branch, cashier, or product category.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Push updates for products, prices, and discounts across all stores in one click.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SPECIFIC FEATURES GRID --- */}
      <section className="py-16 bg-white border-t border-slate-200 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Features Engineered for Multi-Store Growth</h2>
            <p className="text-slate-600 mt-2">Tools that keep your operational workflows consistent across every store location.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BuildingStoreIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Centralized Inventory Control</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Monitor global inventory levels while letting each store manager view and manage their local store allocation.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <TransferIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inter-Branch Stock Transfers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Seamlessly transfer fast-selling items between outlets to prevent stockouts and balance inventory across locations.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <AnalyticsIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consolidated & Branch Analytics</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Compare store revenue side-by-side, analyze profit margins per location, and identify top-performing outlets instantly.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <UsersShieldIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Role-Based User Permissions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Assign specific access levels to cashiers, store managers, and regional supervisors to maintain data security.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CentralCatalogIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unified Product Catalog</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Update prices, SKUs, or barcodes in one place and sync changes automatically to every terminal across all stores.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <GlobeIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Remote Mobile Monitoring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Access your dashboard from your smartphone or tablet anywhere to review live sales numbers and branch operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Multi-Branch Retail Business?</h2>
          <p className="text-blue-100 mb-8">Join growing retail chains that rely on SparkPos to manage multiple store locations seamlessly.</p>
          <Link to='/register' className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-100 transition-all">
            Get Started Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}