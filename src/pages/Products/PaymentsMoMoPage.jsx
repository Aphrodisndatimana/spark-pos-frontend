import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

// Removed { Navbar, Footer } from the function arguments
export default function PaymentsMoMoPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Payment Workflow &amp; Settlement Guide
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              How Payments &amp; Transactions Work in <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">SparkPOS</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Learn how our system seamlessly handles Mobile Money payments from the customer’s phone straight into your store ledger, and how transactions are tracked and reconciled automatically.
            </p>
          </div>
        </section>

        {/* SECTION 1: HOW USERS PAY */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Step-by-Step Payment Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How Customers Pay</h2>
            <p className="text-sm text-slate-400 mt-1">No manual dialing or reading SMS confirmation codes out loud.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl relative">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-sm mb-4">
                1
              </div>
              <h3 className="font-bold text-white text-base mb-2">Prompt Initiated at Checkout</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                When an item is scanned at the register, the cashier selects the customer’s preferred payment method (MTN MoMo, Airtel Money, Cash, or Card) and enters their phone number.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl relative">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-sm mb-4">
                2
              </div>
              <h3 className="font-bold text-white text-base mb-2">Instant USSD Notification</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A secure USSD pop-up prompt appears automatically on the customer's mobile phone asking them to confirm the exact store name and transaction amount.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl relative">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-sm mb-4">
                3
              </div>
              <h3 className="font-bold text-white text-base mb-2">PIN Authorization &amp; Receipt</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The customer enters their PIN to authorize the transfer. Once authorized, the POS screen instantly marks the sale as paid and generates an electronic receipt via SMS or email.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: HOW TRANSACTIONS ARE MANAGED */}
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Behind The Scenes</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How Transactions Are Managed</h2>
              <p className="text-sm text-slate-400 mt-1">Full control, fraud reduction, and automated bookkeeping for managers and accountants.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Automated Ledger Reconciliation</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Every incoming payment is linked directly to the scanned product ID and unique transaction code. This eliminates fake SMS scams, mismatched store balances, and cash count discrepancies.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Split Payment Capability</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Allow customers to split large bills across multiple payment modes—such as paying part of a device purchase in Cash and the remainder via MTN Mobile Money or Airtel Money.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Real-Time Branch Auditing</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Business owners can monitor live revenue streams across multiple store locations in Kigali from any web browser or phone dashboard, categorized by channel (MoMo vs. Cash).
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">One-Click Financial Export</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Export daily or monthly transaction histories with full carrier reference codes directly to Excel or accounting software for hassle-free tax filing and end-of-month reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: USER BENEFIT SUMMARY */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Streamline your cashier desks today</h3>
              <p className="text-xs text-slate-400 mt-1">Get instant mobile payments integrated with your inventory and register logs.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link to="#login" className="flex-1 sm:flex-none text-center px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition">
                Log In
              </Link>
              <Link to="#register" className="flex-1 sm:flex-none text-center px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Added Footer Component */}
      <Footer />
    </div>
  );
}