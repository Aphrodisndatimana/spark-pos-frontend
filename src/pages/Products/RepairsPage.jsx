import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

export default function RepairsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Device Repair &amp; Service Management
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Repairs &amp; Service <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Ticket System</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Track customer device repair jobs from intake to technician repair and final handover. Keep customers updated with SMS notifications while managing spare parts inventory seamlessly.
            </p>
          </div>
        </section>

        {/* WORKFLOW STEPS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Lifecycle Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How Repair Tickets Work in SparkPOS</h2>
            <p className="text-sm text-slate-400 mt-1">Clear accountability for cashiers, technicians, and customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-xs mb-4">
                01
              </div>
              <h3 className="font-bold text-white text-sm mb-1">Ticket Intake</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Log the customer’s device details, IMEI/Serial number, reported issue, deposit paid, and physical condition.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-xs mb-4">
                02
              </div>
              <h3 className="font-bold text-white text-xs sm:text-sm font-bold mb-1">Diagnosis &amp; Quote</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Assign ticket to a technician. Input estimated cost for spare parts and labor, then request customer approval.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-xs mb-4">
                03
              </div>
              <h3 className="font-bold text-white text-sm mb-1">Parts &amp; Labor Tracking</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Technicians deduct replacement screens or batteries directly from stock and mark status updates in real time.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-xs mb-4">
                04
              </div>
              <h3 className="font-bold text-white text-sm mb-1">Collection &amp; Receipt</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Notify customer via SMS. Upon pickup, collect remaining balance and print an itemized repair receipt.
              </p>
            </div>
          </div>
        </section>

        {/* REPAIR FEATURES */}
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Core Features</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Built for Tech Labs &amp; Repair Shops</h2>
              <p className="text-sm text-slate-400 mt-1">Everything needed to run a professional repair desk.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">SMS Customer Notifications</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Automatically text customers when their repair is diagnosed, ready for pickup, or awaiting parts approval.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Spare Parts Auto-Deduction</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Link repair tickets directly to spare parts inventory so stock counts stay accurate after every repair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Start tracking repair tickets today</h3>
              <p className="text-xs text-slate-400 mt-1">Manage service jobs and parts inventory smoothly in SparkPOS.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link to="/login" className="flex-1 sm:flex-none text-center px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition">
                Log In
              </Link>
              <Link to="/register" className="flex-1 sm:flex-none text-center px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition">
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