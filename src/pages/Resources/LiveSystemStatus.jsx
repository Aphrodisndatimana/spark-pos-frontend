import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// SVG Icons
const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ExclamationIcon = () => (
  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function LiveSystemStatus() {
  const [subscribed, setSubscribed] = useState(false);

  const services = [
    { name: 'Core POS Cashier API', status: 'Operational', latency: '42 ms', uptime: '99.99%' },
    { name: 'MTN Mobile Money Gateway', status: 'Operational', latency: '120 ms', uptime: '99.95%' },
    { name: 'Airtel Money Integration', status: 'Operational', latency: '135 ms', uptime: '99.91%' },
    { name: 'RRA E-Tax Invoicing Sync', status: 'Operational', latency: '88 ms', uptime: '99.98%' },
    { name: 'Multi-Branch Inventory Sync', status: 'Operational', latency: '55 ms', uptime: '100%' },
    { name: 'Web Analytics & Reports Engine', status: 'Operational', latency: '64 ms', uptime: '99.97%' },
  ];

  const incidents = [
    {
      date: 'July 21, 2026',
      title: 'Scheduled Database Index Optimization',
      status: 'Completed',
      duration: '15 mins',
      description: 'Routine database maintenance performed successfully between 02:00 CAT and 02:15 CAT. No cashier terminals were affected.',
    },
    {
      date: 'July 10, 2026',
      title: 'MTN MoMo Gateway Elevated Latency',
      status: 'Resolved',
      duration: '22 mins',
      description: 'Upstream telco network congestion caused temporary delays in payment confirmation callbacks. Traffic automatically rerouted.',
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="px-6 pb-16 text-white bg-slate-900 pt-28 sm:pt-32 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase">All Systems Operational</span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            SparkPos System Status & Health
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-base text-slate-300 sm:text-lg">
            Live infrastructure performance, API response times, and third-party gateway health across our regional data centers.
          </p>

          <div className="flex items-center justify-center gap-8 pt-6 font-mono text-xs border-t text-slate-400 border-slate-800">
            <div>
              <span className="block text-lg font-bold text-slate-200">99.98%</span>
              <span>30-Day Avg Uptime</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div>
              <span className="block text-lg font-bold text-slate-200">68 ms</span>
              <span>Global Avg Response</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div>
              <span className="block text-lg font-bold text-emerald-400">Kigali (EAF-1)</span>
              <span>Primary Data Region</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES HEALTH GRID --- */}
      <section className="max-w-5xl px-6 py-16 mx-auto sm:px-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <ServerIcon /> Core Service Status
          </h2>
          <span className="font-mono text-xs text-slate-500">Refreshed automatically every 60s</span>
        </div>

        <div className="overflow-hidden bg-white border divide-y shadow-sm rounded-2xl border-slate-200 divide-slate-100">
          {services.map((svc, idx) => (
            <div key={idx} className="flex flex-col justify-between gap-4 p-5 transition-colors sm:flex-row sm:items-center hover:bg-slate-50/50">
              <div className="flex items-center gap-3">
                <CheckCircleIcon />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{svc.name}</h3>
                  <span className="font-mono text-xs text-slate-400">Latency: {svc.latency}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 text-xs sm:justify-end">
                <span className="font-mono text-slate-500">30D Uptime: {svc.uptime}</span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 text-[11px]">
                  {svc.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PAST INCIDENTS & MAINTENANCE LOGS --- */}
      <section className="max-w-5xl px-6 py-12 mx-auto border-t sm:px-12 border-slate-200">
        <h2 className="flex items-center gap-2 mb-8 text-2xl font-bold text-slate-900">
          <ClockIcon /> Recent Incident & Maintenance Log
        </h2>

        <div className="space-y-6">
          {incidents.map((inc, idx) => (
            <div key={idx} className="p-6 bg-white border shadow-sm rounded-2xl border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-600">
                    {inc.status}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{inc.title}</h3>
                </div>
                <span className="font-mono text-xs text-slate-400">{inc.date}</span>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-slate-600">{inc.description}</p>
              <span className="font-mono text-xs text-slate-400">Duration: {inc.duration}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- SUBSCRIBE TO ALERTS --- */}
      <section className="px-6 py-16 mt-12 text-center text-white bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-3 text-2xl font-bold">Get Real-Time Incident Notifications</h2>
          <p className="mb-6 text-sm text-slate-400">
            Receive instant SMS or email notifications whenever third-party payment gateways or cloud services experience downtime.
          </p>
          
          {subscribed ? (
            <div className="max-w-md p-4 mx-auto text-sm font-semibold border bg-emerald-500/20 text-emerald-300 border-emerald-500/30 rounded-xl">
              ✓ You are subscribed to status updates.
            </div>
          ) : (
            <form className="flex flex-col max-w-md gap-3 mx-auto sm:flex-row" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
              <input
                type="email"
                placeholder="Enter merchant email"
                className="flex-1 px-4 py-3 text-sm rounded-lg text-slate-900 focus:outline-none"
                required
              />
              <button type="submit" className="px-6 py-3 text-sm font-bold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                Subscribe Updates
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}