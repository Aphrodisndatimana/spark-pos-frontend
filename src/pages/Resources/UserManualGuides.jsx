import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BookOpenIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const VideoPlayIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export default function UserManualGuides() {
  const [searchTerm, setSearchTerm] = useState('');

  const guides = [
    {
      category: 'Getting Started',
      title: 'SparkPos Quick Start & Initial Setup',
      duration: '5 min read',
      description: 'Learn how to register your store, create staff accounts, and configure tax/currency settings.',
      type: 'Guide',
    },
    {
      category: 'Inventory Management',
      title: 'Managing Products, Barcodes & Serial Numbers',
      duration: '8 min watch',
      description: 'Step-by-step video on importing CSV product lists, printing barcode labels, and tracking IMEI/Serials.',
      type: 'Video',
      videoUrl: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Sales & Checkout',
      title: 'POS Terminal Operations & Mobile Money Cashiering',
      duration: '6 min watch',
      description: 'How cashiers complete sales, process MTN MoMo / Airtel Money, and split payments.',
      type: 'Video',
      videoUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Multi-Branch',
      title: 'Inter-Branch Stock Transfers & Approvals',
      duration: '7 min read',
      description: 'Dispatching stock from central warehouses, issuing transfer slips, and branch receipt confirmation.',
      type: 'Guide',
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="px-6 pb-16 text-white bg-slate-900 pt-28 sm:pt-32 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-400 border rounded-full bg-blue-500/20 border-blue-500/30">
            Documentation & Tutorials
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            User Manuals & Video Walkthroughs
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-base text-slate-300 sm:text-lg">
            Everything you need to master SparkPos—from setting up thermal receipt printers to managing multi-branch stock transfers.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search guides (e.g. IMEI tracking, MoMo float, e-tax invoice)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all text-sm"
            />
          </div>
        </div>
      </section>

      {/* --- QUICK ACTION BANNER --- */}
      <section className="px-6 py-6 text-white bg-blue-600">
        <div className="flex flex-col items-center justify-between gap-4 mx-auto max-w-7xl sm:flex-row">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 bg-white/10 rounded-lg hidden sm:block">
              <BookOpenIcon />
            </div>
            <div>
              <h3 className="text-base font-semibold">Download Full Offline Manual (PDF)</h3>
              <p className="text-xs text-blue-100">Complete 45-page operator manual for store managers and cashiers.</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 hover:bg-slate-100 px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md">
            <DownloadIcon /> Download PDF (8.4 MB)
          </button>
        </div>
      </section>

      {/* --- GUIDES & VIDEO TUTORIALS GRID --- */}
      <section className="px-6 py-16 mx-auto sm:px-12 max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">Popular Video Walkthroughs & Manuals</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {guides.map((item, idx) => (
            <div key={idx} className="overflow-hidden transition-shadow bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md">
              {item.videoUrl && (
                <div className="relative h-48 bg-slate-900">
                  <img 
                    src={item.videoUrl} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/800x450/0f172a/38bdf8?text=SparkPos+Video+Tutorial";
                    }}
                    className="object-cover w-full h-full opacity-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="flex items-center justify-center text-white transition-transform bg-blue-600 rounded-full shadow-lg w-14 h-14 hover:bg-blue-700 hover:scale-105">
                      <VideoPlayIcon />
                    </button>
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs text-slate-400">{item.duration}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <a href="#read" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Read Full Step-by-Step Guide →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}