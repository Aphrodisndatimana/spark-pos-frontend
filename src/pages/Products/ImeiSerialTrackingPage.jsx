import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function ImeiSerialTrackingPage() {
  // State for the free live lookup sandbox
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Sample mock data for free test lookup
  const sampleData = {
    '358921109482012': {
      device: 'Samsung Galaxy A54 5G',
      storage: '128GB - Awesome Graphite',
      status: 'In Stock (Branch: Remera Store)',
      supplier: 'Kigali Tech Importers',
      costPrice: '380,000 RWF',
      sellingPrice: '420,000 RWF',
      dateAdded: 'Jul 15, 2026',
    },
    '354892019284710': {
      device: 'iPhone 15 Pro Max',
      storage: '256GB - Natural Titanium',
      status: 'Sold (Receipt #REC-2026-84920)',
      customer: '+250 788 123 456',
      soldBy: 'Cashier Jean (Kigali Heights)',
      dateSold: 'Jul 22, 2026',
    },
    'SPK-MAC-2026-99': {
      device: 'MacBook Air M2',
      storage: '8GB / 256GB - Space Gray',
      status: 'Under Repair / Service Log #882',
      technician: 'Tech Lab 2',
      dateIn: 'Jul 18, 2026',
    }
  };

  const handleLookup = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchResult(null);

    setTimeout(() => {
      const cleanQuery = searchQuery.trim();
      const found = sampleData[cleanQuery];

      if (found) {
        setSearchResult({ success: true, data: found, queried: cleanQuery });
      } else {
        setSearchResult({
          success: false,
          queried: cleanQuery,
          message: 'Device not found in current active database. Check the IMEI/Serial format or add it during Stock In.'
        });
      }
      setIsSearching(false);
    }, 600);
  };

  const fillSample = (code) => {
    setSearchQuery(code);
    setSearchResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              SparkPOS Inventory Module
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              IMEI &amp; Serial Number <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tracking System</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Track every unique smartphone, laptop, or electronic device in SparkPOS from stock-in to customer handoff. Eliminate lost inventory, prevent theft, and maintain total branch accountability.
            </p>
          </div>
        </section>

        {/* FREE IMEI CHECK DEMO SANDBOX */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

            <div className="text-center sm:text-left mb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                Try It Free
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">Free Instant SparkPOS IMEI Lookup</h2>
              <p className="text-xs text-slate-400 mt-1">
                Test how cashiers and store managers can search any 15-digit IMEI or Serial number instantly.
              </p>
            </div>

            {/* Quick Sample Selector */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500">Try sample IMEIs:</span>
              <button 
                type="button" 
                onClick={() => fillSample('358921109482012')}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-mono text-[11px] rounded-lg border border-slate-700 transition"
              >
                358921109482012 (Galaxy A54)
              </button>
              <button 
                type="button" 
                onClick={() => fillSample('354892019284710')}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-mono text-[11px] rounded-lg border border-slate-700 transition"
              >
                354892019284710 (iPhone 15)
              </button>
              <button 
                type="button" 
                onClick={() => fillSample('SPK-MAC-2026-99')}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-mono text-[11px] rounded-lg border border-slate-700 transition"
              >
                SPK-MAC-2026-99 (MacBook)
              </button>
            </div>

            {/* Search Input Form */}
            <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter 15-digit IMEI or Serial Number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition font-mono"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSearching ? 'Searching...' : 'Check IMEI Free'}
              </button>
            </form>

            {/* Search Result Display Box */}
            {searchResult && (
              <div className="mt-6 pt-6 border-t border-slate-800">
                {searchResult.success ? (
                  <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-5 space-y-3">
                    <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Device Found</span>
                        <h3 className="text-base font-extrabold text-white">{searchResult.data.device}</h3>
                        <p className="text-xs text-slate-400">{searchResult.data.storage}</p>
                      </div>
                      <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[11px] rounded-full">
                        {searchResult.data.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
                      <div>
                        <span className="text-slate-500 block text-[10px]">IMEI / Serial</span>
                        <span className="text-slate-200 font-mono">{searchResult.queried}</span>
                      </div>
                      {searchResult.data.supplier && (
                        <div>
                          <span className="text-slate-500 block text-[10px]">Supplier</span>
                          <span className="text-slate-200">{searchResult.data.supplier}</span>
                        </div>
                      )}
                      {searchResult.data.customer && (
                        <div>
                          <span className="text-slate-500 block text-[10px]">Purchaser</span>
                          <span className="text-slate-200">{searchResult.data.customer}</span>
                        </div>
                      )}
                      {searchResult.data.sellingPrice && (
                        <div>
                          <span className="text-slate-500 block text-[10px]">Listed Price</span>
                          <span className="text-emerald-400 font-bold">{searchResult.data.sellingPrice}</span>
                        </div>
                      )}
                      {searchResult.data.soldBy && (
                        <div>
                          <span className="text-slate-500 block text-[10px]">Processed By</span>
                          <span className="text-slate-200">{searchResult.data.soldBy}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-5 text-center sm:text-left">
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">No Direct Match</span>
                    <p className="text-xs text-slate-300 mt-1">{searchResult.message}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* SECTION 1: HOW IMEI & SERIAL SCANNING WORKS IN SPARKPOS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Step-by-Step Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How SparkPOS Serial Tracking Works</h2>
            <p className="text-sm text-slate-400 mt-1">Effortlessly bind individual product units to your inventory ledger.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl relative">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-extrabold flex items-center justify-center text-sm mb-4">
                1
              </div>
              <h3 className="font-bold text-white text-base mb-2">Ingress &amp; Stock In Intake</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                When new stock arrives, cashiers or managers scan device barcode labels (IMEI 1, IMEI 2, or Serial) directly into the SparkPOS register.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl relative">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-extrabold flex items-center justify-center text-sm mb-4">
                2
              </div>
              <h3 className="font-bold text-white text-base mb-2">Unit Status &amp; Location Lock</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Each unit receives an active status (In-Stock, Reserved, Sold, or Under Repair) and is assigned to a specific branch store or warehouse shelf in SparkPOS.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/60 border border-slate-700/70 p-6 rounded-2xl relative">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-extrabold flex items-center justify-center text-sm mb-4">
                3
              </div>
              <h3 className="font-bold text-white text-base mb-2">Checkout Verification</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                At sale time, scanning the specific IMEI instantly deducts that exact physical unit from stock, preventing cashiers from misidentifying similar models.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: HOW IMEIs ARE MANAGED IN SPARKPOS */}
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Inventory Controls</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How IMEI &amp; Serial Data is Managed in SparkPOS</h2>
              <p className="text-sm text-slate-400 mt-1">Advanced management features designed specifically for phone and tech shops.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Instant Single-Device Search</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Type or scan any 15-digit IMEI or serial number into SparkPOS to instantly view its entire lifecycle: date purchased, supplier cost, selling price, customer details, and sales staff ID.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Duplicate &amp; Fraud Alerts</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Prevent accidental double-entries and fraudulent inventory manipulation. SparkPOS automatically rejects duplicate IMEIs during stock intake or store-to-store transfers.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Multi-Branch Stock Transfer Audit</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Transfer specific devices between stores in Kigali. Receivers must scan incoming IMEIs to acknowledge delivery, ensuring zero units get lost in transit.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-4">
                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl h-fit">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Batch Uploads &amp; Barcode Scanning</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Upload bulk shipments containing hundreds of serial numbers via CSV file or use a handheld standard USB/Bluetooth barcode scanner directly with SparkPOS.
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
              <h3 className="text-xl font-bold text-white">Take complete control with SparkPOS</h3>
              <p className="text-xs text-slate-400 mt-1">Start tracking device serial numbers and IMEI codes accurately today.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link to="/login" className="flex-1 sm:flex-none text-center px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition">
                Log In
              </Link>
              <Link href="/register" className="flex-1 sm:flex-none text-center px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}