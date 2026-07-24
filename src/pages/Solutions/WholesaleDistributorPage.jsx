import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

// SVG Icons tailored for Wholesale & Distribution
const WarehouseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const TieredPricingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

const CreditLineIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const TruckDeliveryIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
  </svg>
);

const ProformaDocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BatchExpiryIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function WholesaleDistributorSolution() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-28 sm:pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-4">
              Designed for FMCG Importers, Bulk Suppliers & Warehouses
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Streamline Bulk Orders, <span className="text-indigo-400">Customer Credit</span> & Warehousing.
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Power your distribution network across Kigali and regional hubs. Manage bulk discount matrices, track customer credit limits with aging debt reports, issue compliant proforma invoices, and control warehouse dispatch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/register' className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2">
             Get Started<ArrowRightIcon />
              </Link>
              <Link to='/login' className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg border border-slate-600 transition-all">
                Login
              </Link>
            </div>
          </div>

          {/* Hero Image Showcase - Unique Logistics/Truck Loading Image */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30 blur-lg"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1519003300449-424ad040507b?auto=format&fit=crop&w=1000&q=80" 
                alt="Wholesale Truck Logistics and Bulk Distribution" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/1000x800/0f172a/6366f1?text=Bulk+Distribution+Hub";
                }}
                className="w-full h-80 object-cover opacity-85"
              />
              <div className="p-6 bg-slate-900/90 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-indigo-400">LOGISTICS COMMAND CENTER</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Bulk Credit Line Approved</span>
                </div>
                <h4 className="font-semibold text-white">Main Warehouse • Gikondo Industrial Zone</h4>
                <p className="text-xs text-slate-400 mt-1">Active Accounts: 142 B2B Retailers | Today's Dispatch: 48,000,000 RWF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BEFORE VS AFTER --- */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Eliminate Credit Risks & Stockout Surprises</h2>
          <p className="text-slate-600">Scale your wholesale operation without losing track of receivables or inventory batches.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-red-50/50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-red-100 rounded-lg text-red-600"><CrossIcon /></span>
              The Manual Distribution Bottleneck
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Overextending credit to buyers without automatic credit line warnings or hard limits.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Manual proforma invoice creation causing billing delays for bulk orders.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Expired batch stock sitting in warehouses without automated early-warning alerts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Mismatched stock counts between central warehouse and field delivery drivers.</span>
              </li>
            </ul>
          </div>

          {/* SparkPos Way */}
          <div className="bg-indigo-50/50 border border-indigo-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><CheckIcon /></span>
              The SparkPos Wholesale Platform
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Enforce custom credit limits and aging debt blocks per account automatically.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>One-click proforma-to-invoice conversion with official e-tax compliance integration.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>First-Expiry, First-Out (FEFO) batch tracking to drastically minimize perishable waste.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Live dispatch tracking connecting warehouse loading bays directly to field sales reps.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SPECIFIC FEATURES GRID --- */}
      <section className="py-16 bg-white border-t border-slate-200 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Built for Large-Scale Distribution Management</h2>
            <p className="text-slate-600 mt-2">Tools designed specifically to handle high-volume B2B logistics and wholesale finance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <TieredPricingIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Volume-Based Tiered Pricing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Set automatic wholesale price tiers based on order quantities (e.g., carton, pallet, or container level discounts).
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <CreditLineIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">B2B Credit & Aging Debt Limits</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Assign credit caps and maximum payment terms (e.g., 30 or 60 days) to prevent orders when accounts are overdue.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <ProformaDocumentIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Proforma & B2B Invoicing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generate professional proforma invoices, delivery notes, and official tax-compliant invoices instantly.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <BatchExpiryIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Batch Lot & Expiry Date FEFO</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Track manufacturing batch numbers and expiration dates to enforce First-Expiry, First-Out picking in your warehouse.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <WarehouseIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Warehouse Multi-Zone Stock</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Separate inventory management for central warehouses, depot points, and transit vans across all regions.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <TruckDeliveryIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery Route & Dispatch Sync</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equip field sales reps and delivery drivers with mobile order creation and live delivery status updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-16 px-6 text-center bg-indigo-600 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Wholesale Network?</h2>
          <p className="text-indigo-100 mb-8">Join major distributors and bulk suppliers in Rwanda using SparkPos to grow their distribution channels.</p>
          <Link to='/register' className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-100 transition-all">
            Get Started Free
          </Link>
        </div>
      </section>
    <ScrollToTop />
      <Footer />
    </div>
  );
}