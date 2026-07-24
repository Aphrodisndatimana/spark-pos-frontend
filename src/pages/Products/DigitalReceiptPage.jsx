import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';


export default function DigitalReceiptPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
      <Navbar />
      
      {/* MAIN CONTENT AREA */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Paperless &amp; Instant Proof of Purchase
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Smart Digital Receipts for <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Electronics Retailers</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Replace lost paper receipts with instant SMS, WhatsApp, and Email digital receipts. Keep permanent transaction records tied directly to your sales ledger and customer history.
            </p>
          </div>
        </section>

        {/* SECTION 1: VISUAL RECEIPT PREVIEW & HOW IT WORKS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Interactive / Visual Receipt Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl shadow-emerald-500/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 to-teal-400"></div>
                
                {/* Receipt Header */}
                <div className="text-center pb-4 border-b border-dashed border-slate-800">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">SparkPOS Kigali</span>
                  <h3 className="text-lg font-extrabold text-white mt-0.5">Electronics Store</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Receipt #REC-2026-84920</p>
                  <p className="text-[11px] text-slate-500">Jul 23, 2026 • 10:15 AM</p>
                </div>

                {/* Purchased Items */}
                <div className="py-4 space-y-3 text-xs border-b border-dashed border-slate-800">
                  <div>
                    <div className="flex justify-between text-slate-200 font-semibold">
                      <span>Samsung Galaxy A54 5G</span>
                      <span>420,000 RWF</span>
                    </div>
                    <p className="text-[10px] font-mono text-slate-500 mt-0.5">IMEI: 358921109482012</p>
                    <p className="text-[10px] text-emerald-400 mt-0.5">✓ Instant E-Receipt Sent</p>
                  </div>
                </div>

                {/* Totals */}
                <div className="py-3 text-xs space-y-1.5 border-b border-dashed border-slate-800">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>420,000 RWF</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Payment Mode</span>
                    <span className="text-amber-400 font-mono">MTN MoMo</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-sm pt-1">
                    <span>Total Paid</span>
                    <span className="text-emerald-400">420,000 RWF</span>
                  </div>
                </div>

                {/* Footer Message */}
                <div className="pt-4 text-center">
                  <p className="text-[10px] text-slate-500">Sent via SMS to +250 788 *** 123</p>
                  <p className="text-[10px] text-slate-600 mt-1">Thank you for shopping with us!</p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Delivery Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Delivery Channels</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How Digital Receipts Are Delivered</h2>
                <p className="text-sm text-slate-400 mt-1">Zero extra hardware or paper rolls needed at your store desk.</p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800/60 border border-slate-700/70 p-5 rounded-2xl flex items-start gap-4">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Instant SMS / WhatsApp Link</h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      As soon as a transaction closes, an SMS containing a secure link to the digital receipt is delivered directly to the buyer's phone.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/70 p-5 rounded-2xl flex items-start gap-4">
                  <div className="p-2.5 bg-teal-500/10 text-teal-400 rounded-xl">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">E-mail Invoice &amp; PDF Export</h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      For corporate or high-value laptop purchases, full PDF invoices with tax breakdown and official store stamps are automatically emailed to the customer.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/70 p-5 rounded-2xl flex items-start gap-4">
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Optional Bluetooth Thermal Printing</h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Need paper? You can still connect any portable thermal receipt printer via Bluetooth or USB for instant physical printouts alongside digital delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: HOW RECEIPTS ARE MANAGED IN THE SYSTEM */}
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">System Management</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How Digital Receipts Are Managed</h2>
              <p className="text-sm text-slate-400 mt-1">Complete control over store history, audit logs, and customer purchasing records.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Instant Receipt Retrieval</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Search past sales by customer phone number, transaction ID, or date range to pull up the original receipt in seconds whenever needed.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Tax &amp; Financial Compliance Logs</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    All digital receipts automatically calculate standard taxes and store structured line items for straightforward financial reporting and internal audits.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z me-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Customer History &amp; CRM</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Build a database of repeat buyers automatically. View every receipt issued to a specific customer to offer personalized loyalty discounts or upgrades.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Tamper-Proof Audit Trail</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Issued receipts cannot be modified or deleted without authorized manager credentials, preventing fraud, unauthorized refunds, and inventory theft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BOTTOM CTA */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Ready to go paperless at your store?</h3>
              <p className="text-xs text-slate-400 mt-1">Start issuing digital receipts and streamlining sales in Kigali today.</p>
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