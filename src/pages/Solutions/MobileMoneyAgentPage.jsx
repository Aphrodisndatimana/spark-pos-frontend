import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

// SVG Icons tailored for Mobile Money & Agent Banking
const SmartphonePaymentIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const BalanceScaleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const PercentCommissionIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10H9m3-10v10M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const CashTransferIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ReceiptListIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
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

export default function MobileMoneyAgentSolution() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-28 sm:pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
              Tailored for Mobile Money Agents & Agent Banking Outlets
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Track <span className="text-emerald-400">Float</span>, Cash-In/Out & Commissions with Zero Discrepancies.
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Designed for MoMo agents and financial kiosks in Kigali. Effortlessly monitor digital float vs. physical cash, log MTN MoMo, Airtel Money, and bank agent transactions, and automate end-of-day reconciliation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/register' className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2">
               Get Started<ArrowRightIcon />
              </Link>
              <Link to='/login' className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg border border-slate-600 transition-all">
                Login
              </Link>
            </div>
          </div>

          {/* Hero Image Showcase with Fail-safe handling */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-30 blur-lg"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1000&q=80" 
                alt="Mobile Money Payment and Agent Transaction" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/1000x800/0f172a/10b981?text=Mobile+Money+Agent+Sync";
                }}
                className="w-full h-80 object-cover opacity-85"
              />
              <div className="p-6 bg-slate-900/90 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-emerald-400">FLOAT BALANCES LIVE</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Reconciled</span>
                </div>
                <h4 className="font-semibold text-white">MTN MoMo: 2,450,000 RWF | Cash in Drawer: 1,120,000 RWF</h4>
                <p className="text-xs text-slate-400 mt-1">Today's Estimated Commission: 48,500 RWF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BEFORE VS AFTER --- */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Eliminate Cash & Float Discrepancies</h2>
          <p className="text-slate-600">Replace lost paper logbooks and manual calculations with an automated digital ledger.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-red-50/50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-red-100 rounded-lg text-red-600"><CrossIcon /></span>
              The Manual Agent Workflow
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Recording Cash-In and Cash-Out transactions manually in paper logbooks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>End-of-day cash and float balancing errors causing unexplained money losses.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>Inability to accurately forecast expected commissions from telecom operators.</span>
              </li>
              <li className="flex items-start gap-3">
                <CrossIcon />
                <span>No visibility over cash drawer balances when running multiple kiosks or staff.</span>
              </li>
            </ul>
          </div>

          {/* SparkPos Way */}
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><CheckIcon /></span>
              The SparkPos Agent System
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Instant digital logging for Cash-In, Cash-Out, and bill payments in 2 taps.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Automatic live matching between physical cash and digital SIM float balances.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Automated commission tracking per operator tier (MTN, Airtel, I&M, BK Yacu).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Real-time shift closing logs with audit trails for every operator agent.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SPECIFIC FEATURES GRID --- */}
      <section className="py-16 bg-white border-t border-slate-200 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Tailored Features for Mobile Money & Banking Agents</h2>
            <p className="text-slate-600 mt-2">Purpose-built tools to simplify daily float management and financial auditing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <BalanceScaleIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Float vs Cash Sync</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automatically balance digital float drops against physical cash increases during cash-in and cash-out transactions.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <CashTransferIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Operator Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Manage MTN Mobile Money, Airtel Money, BK Yacu, and Equity Agent floats seamlessly on a single terminal.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <PercentCommissionIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Commission Ledger</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Calculate expected agent commissions in real time based on transaction volume tiers set by service providers.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ReceiptListIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Shift Reconciliation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generate end-of-day audit receipts detailing physical cash counted, total float remaining, and net agent profit.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ShieldCheckIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transaction ID & Audit Trails</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Attach reference SMS or transaction IDs to every record to instantly resolve customer payment disputes.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <SmartphonePaymentIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Kiosk Monitoring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Owners managing multiple agent locations across Kigali can view live float levels and prevent agent downtime remotely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-16 px-6 text-center bg-emerald-600 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Streamline Your Agent Kiosk Operations Today</h2>
          <p className="text-emerald-100 mb-8">Join leading Mobile Money agents and agent banking outlets using SparkPos to secure their float and cash flow.</p>
          <Link to='/register' className="bg-white text-emerald-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-100 transition-all">
            Get Started Free
          </Link>
        </div>
      </section>
    <ScrollToTop />
      <Footer />
    </div>
  );
}