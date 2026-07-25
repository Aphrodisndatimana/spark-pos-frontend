import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

// SVG Icons
const TrendingUpIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const BuildingStoreIcon = () => (
  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="flex-shrink-0 w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function CustomerCaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const industries = ['All', 'Electronics & Phones', 'Wholesale & Distribution', 'Mobile Money & Agent Kiosks'];

  const caseStudies = [
    {
      id: 1,
      clientName: 'Kigali Mobile World',
      industry: 'Electronics & Phones',
      location: 'Central Business District, Kigali',
      outlets: '3 Branches',
      heroImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      headline: 'Eliminated 100% of IMEI Losses & Accelerated Stock Transfers by 3x',
      quote: "Before SparkPos, tracking phone serial numbers across our 3 Kigali stores was a nightmare. Now we track every IMEI from arrival at warehouse to final customer checkout.",
      spokesperson: 'Jean-Luc Habimana',
      role: 'Operations Director',
      metrics: [
        { label: 'IMEI Discrepancies', value: '0%' },
        { label: 'Stock Transfer Speed', value: '3x Faster' },
        { label: 'Annual Revenue Loss Prevented', value: '12,500,000 RWF' }
      ],
      challenge: 'Manual logbooks led to missing phone inventory, unverified warranty claims, and slow stock transfers between stores.',
      solution: 'Deployed SparkPos Multi-Branch POS with strict barcode scanning, automated IMEI validation, and centralized inventory controls.'
    },
    {
      id: 2,
      clientName: 'Gikondo FMCG Wholesale Depot',
      industry: 'Wholesale & Distribution',
      location: 'Gikondo Industrial Zone',
      outlets: 'Central Warehouse + 12 Field Reps',
      heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      headline: 'Reduced Outstanding B2B Credit Overdues by 42% in 90 Days',
      quote: "SparkPos's credit cap limits prevent our sales team from dispatching orders to buyers with aging debts. Our cash collection velocity improved instantly.",
      spokesperson: 'Marie-Claire Uwase',
      role: 'Chief Financial Officer',
      metrics: [
        { label: 'Overdue Credit Reduction', value: '42%' },
        { label: 'Proforma Invoice Time', value: 'Under 1 Min' },
        { label: 'Warehouse Batch Waste', value: '-85%' }
      ],
      challenge: 'Uncontrolled buyer credit lines, slow proforma generation, and expired goods inventory in central warehouse storage.',
      solution: 'Implemented SparkPos Wholesale Platform with hard debt caps, automated First-Expiry First-Out (FEFO) batching, and field rep dispatch.'
    },
    {
      id: 3,
      clientName: 'Express MoMo & Agent Services',
      industry: 'Mobile Money & Agent Kiosks',
      location: 'Remera & Nyabugogo Kiosks',
      outlets: '5 Kiosks',
      heroImage: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80',
      headline: 'Saved 2+ Hours Daily in End-of-Day Float & Cash Reconciliation',
      quote: "Balancing MTN MoMo float, Airtel Money, and cash drawers used to take hours after closing. With SparkPos, agents balance shifts in under 5 minutes.",
      spokesperson: 'Emmanuel Nshimiye',
      role: 'Kiosk Network Owner',
      metrics: [
        { label: 'Daily Balancing Time', value: '< 5 Mins' },
        { label: 'Float Calculation Errors', value: 'Zero' },
        { label: 'Estimated Commission Accuracy', value: '100%' }
      ],
      challenge: 'Frequent float vs. cash discrepancies between shift changes and difficulty auditing agent commissions across multiple network operators.',
      solution: 'Integrated SparkPos Mobile Money Agent module for real-time float logging, shift closing receipts, and automated commission ledgering.'
    }
  ];

  const filteredStudies = caseStudies.filter(
    (cs) => selectedIndustry === 'All' || cs.industry === selectedIndustry
  );

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="px-6 pb-16 text-white bg-slate-900 pt-28 sm:pt-32 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold border rounded-full bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
            Proven Local Business Impact
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Customer Case Studies & Success Stories
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-base text-slate-300 sm:text-lg">
            See how leading retail shops, wholesale distributors, and mobile money agents across Rwanda run faster, smarter operations with SparkPos.
          </p>
        </div>
      </section>

      {/* --- INDUSTRY FILTER TABS --- */}
      <section className="sticky z-10 bg-white border-b shadow-sm border-slate-200 top-16">
        <div className="px-6 mx-auto overflow-x-auto max-w-7xl">
          <div className="flex py-4 space-x-3 min-w-max">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedIndustry === ind
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES LIST --- */}
      <section className="px-6 py-16 mx-auto space-y-16 sm:px-12 max-w-7xl">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="overflow-hidden transition-shadow bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Image & Snapshot */}
              <div className="lg:col-span-5 relative bg-slate-900 min-h-[280px]">
                <img
                  src={study.heroImage}
                  alt={study.clientName}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/800x600/0f172a/38bdf8?text=SparkPos+Case+Study';
                  }}
                  className="object-cover w-full h-full opacity-80"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-slate-950 via-transparent to-transparent">
                  <span className="mb-1 text-xs font-bold tracking-wider uppercase text-emerald-400">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold">{study.clientName}</h3>
                  <p className="text-xs text-slate-300">{study.location} • {study.outlets}</p>
                </div>
              </div>

              {/* Right Column: Case Details */}
              <div className="flex flex-col justify-between p-8 lg:col-span-7">
                <div>
                  <h2 className="mb-4 text-2xl font-bold leading-snug text-slate-900">
                    {study.headline}
                  </h2>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-4 mb-6 border bg-slate-50 rounded-xl border-slate-100">
                    {study.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="block text-lg font-extrabold text-blue-600 sm:text-2xl">
                          {m.value}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 leading-tight block mt-1">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quote Box */}
                  <div className="relative pl-6 mb-6 text-sm italic border-l-4 border-blue-600 text-slate-700">
                    <p>"{study.quote}"</p>
                    <span className="block mt-2 text-xs not-italic font-bold text-slate-900">
                      — {study.spokesperson}, <span className="text-slate-500">{study.role}</span>
                    </span>
                  </div>

                  {/* Challenge vs Solution */}
                  <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2 text-slate-600">
                    <div>
                      <span className="block mb-1 font-bold tracking-wider text-red-600 uppercase">The Challenge</span>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <span className="block mb-1 font-bold tracking-wider uppercase text-emerald-600">The Solution</span>
                      <p>{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-8 border-t border-slate-100">
                  <span className="text-xs text-slate-400">Verified SparkPos Customer</span>
                  <a href="#read-more" className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
                    Read Full Story →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="px-6 py-16 text-center text-white bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold">Ready for Your Business to Be Our Next Success Story?</h2>
          <p className="mb-8 text-sm text-slate-300">
            Start your 14-day free trial today. Our Kigali-based onboarding team will help import your stock and set up your terminals.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
             <Link to='/register' className="px-8 py-3 font-bold text-white transition-all bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700">
              Start For Free
            </Link>
            <Link to='/login' className="px-8 py-3 font-semibold text-white transition-all border rounded-lg bg-slate-800 hover:bg-slate-700 border-slate-700">
            Login
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}