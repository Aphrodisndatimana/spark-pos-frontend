import React, { useState } from 'react';

export default function ShopOwnerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Core metrics tailored to a multi-branch electronics store owner
  const businessMetrics = [
    { label: "Net Revenue (All Branches)", value: "14,850,200 RWF", change: "+0.4% vs last month", isPositive: true },
    { label: "Total Inventory Value", value: "85,400,000 RWF", change: "+12% vs last quarter", isPositive: true },
    { label: "Repair Desk Success Rate", value: "94.2%", change: "Target: 95%", isPositive: true },
    { label: "Active Low-Stock Alerts", value: "12 Items", change: "Requires Reorder", isPositive: false }
  ];

  return (
    <div className="min-h-screen bg-[#0E1111] text-[#A3AED0] font-sans p-6 flex flex-col justify-between">
      
      {/* Top Header / Profile Bar */}
      <header className="flex items-center justify-between mb-6 bg-[#161B1B] p-4 rounded-2xl border border-slate-800/40">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold bg-[#B5FF3D] text-black px-2.5 py-1 rounded-md uppercase tracking-wide">
            Owner Mode
          </span>
          <h1 className="hidden font-bold text-white text-md sm:block">Kacyiru Electronics HQ</h1>
        </div>

        {/* Global Action Bar */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search serials, IMEIs, invoices..." 
              className="bg-[#1E2525] text-xs text-white rounded-xl pl-4 pr-10 py-2 w-64 border border-transparent focus:outline-none focus:border-[#B5FF3D] transition"
            />
          </div>
          
          {/* Action Ring Utility */}
          <div className="flex items-center gap-2 text-slate-400">
            <button className="p-2 hover:bg-[#1E2525] rounded-xl transition text-[#B5FF3D]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
          </div>

          {/* User Signpost */}
          <div className="flex items-center gap-3 pl-2 border-l border-slate-850">
            <div className="w-8 h-8 rounded-full bg-[#1E2525] border border-[#B5FF3D] flex items-center justify-center font-bold text-xs text-[#B5FF3D]">
              GH
            </div>
          </div>
        </div>
      </header>

      {/* Primary Layout Engine */}
      <div className="grid items-start grid-cols-1 gap-6 xl:grid-cols-5 grow">
        
        {/* Left Side Sidebar / Navigation Container */}
        <aside className="bg-[#161B1B] p-4 rounded-2xl border border-slate-800/40 space-y-1 xl:col-span-1">
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest px-3 mb-2">Dashboards</p>
          
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${activeTab === 'overview' ? 'bg-[#B5FF3D] text-black' : 'text-slate-400 hover:bg-[#1E2525] hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" /></svg>
            Overview Matrix
          </button>

          <button 
            onClick={() => setActiveTab('transfers')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${activeTab === 'transfers' ? 'bg-[#B5FF3D] text-black' : 'text-slate-400 hover:bg-[#1E2525] hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            Inter-Shop Logic
          </button>

          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest px-3 pt-4 mb-2">Management</p>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:bg-[#1E2525] hover:text-white py-2.5 px-3 rounded-xl text-xs transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            Inventory Vault
          </button>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:bg-[#1E2525] hover:text-white py-2.5 px-3 rounded-xl text-xs transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
            Store Configuration
          </button>
        </aside>

        {/* Workspace Panels */}
        <main className="space-y-6 xl:col-span-4">
          
          {/* Top Numeric Metric Blocks */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessMetrics.map((m, idx) => (
              <div key={idx} className="bg-[#161B1B] p-4 rounded-2xl border border-slate-800/30">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">{m.label}</span>
                <p className="mt-1 font-mono text-lg font-bold text-white">{m.value}</p>
                <span className={`text-[10px] font-semibold block mt-0.5 ${m.isPositive ? 'text-[#B5FF3D]' : 'text-rose-400'}`}>
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* DYNAMIC VIEW 1: OVERVIEW COMPLEX */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              
              {/* Sales Overview Component with SVG Donut Chart */}
              <div className="bg-[#161B1B] p-5 rounded-3xl border border-slate-800/40 lg:col-span-2 flex flex-col justify-between">
                <div>
                  <h3 className="mb-4 text-sm font-bold text-white">Stock Value Breakdown By Category</h3>
                  <div className="flex flex-col items-center justify-around gap-8 p-2 sm:flex-row">
                    {/* Raw SVG Donut Component */}
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#222A2A" strokeWidth="3.5" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#B5FF3D" strokeWidth="3.5" strokeDasharray="55 100" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3DFFDF" strokeWidth="3.5" strokeDasharray="25 100" strokeDashoffset="-55" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#A855F7" strokeWidth="3.5" strokeDasharray="20 100" strokeDashoffset="-80" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-mono font-bold text-white text-md">85.4M</span>
                        <span className="text-[9px] text-slate-500 tracking-wider">Total RWF</span>
                      </div>
                    </div>
                    
                    {/* Legend Metrics */}
                    <div className="space-y-2 text-xs w-full max-w-[200px]">
                      <div className="flex items-center justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#B5FF3D]" />Smartphones</span><span className="font-mono text-white">55%</span></div>
                      <div className="flex items-center justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#3DFFDF]" />Computing</span><span className="font-mono text-white">25%</span></div>
                      <div className="flex items-center justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#A855F7]" />Accessories</span><span className="font-mono text-white">20%</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Revenue Flow Tracker */}
              <div className="bg-[#161B1B] p-5 rounded-3xl border border-slate-800/40 flex flex-col justify-between">
                <div>
                  <h3 className="mb-3 text-sm font-bold text-white">Branch Performance</h3>
                  <div className="space-y-4">
                    {[
                      { location: "Kacyiru Main Hub", target: "75%", vol: "8.2M RWF", color: "bg-[#B5FF3D]" },
                      { location: "Downtown Branch", target: "42%", vol: "4.5M RWF", color: "bg-[#3DFFDF]" },
                      { location: "CHIC Showroom", target: "20%", vol: "2.1M RWF", color: "bg-purple-500" }
                    ].map((b, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-300">{b.location}</span>
                          <span className="font-mono text-white">{b.vol}</span>
                        </div>
                        <div className="w-full bg-[#222A2A] h-2 rounded-full overflow-hidden">
                          <div className={`h-full ${b.color}`} style={{ width: b.target }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outstanding Credit Risk Profiles */}
              <div className="bg-[#161B1B] p-5 rounded-3xl border border-slate-800/40 lg:col-span-3">
                <h3 className="mb-3 text-sm font-bold text-white">Critical Lending & Outstanding Balances</h3>
                <div className="overflow-x-auto rounded-xl">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1E2525] text-slate-400 font-medium">
                        <th className="p-3">Client / B2B Account</th>
                        <th className="p-3">Originating Branch</th>
                        <th className="p-3">Terms Due</th>
                        <th className="p-3 text-right">Outstanding Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/30">
                      <tr className="text-slate-300 hover:bg-[#1C2222]">
                        <td className="p-3 font-semibold text-white">Musa Tech Supplies</td>
                        <td className="p-3">Kacyiru Main Hub</td>
                        <td className="p-3 font-medium text-rose-400">Overdue (5 Days)</td>
                        <td className="p-3 font-mono text-right text-white">1,450,000 RWF</td>
                      </tr>
                      <tr className="text-slate-300 hover:bg-[#1C2222]">
                        <td className="p-3 font-semibold text-white">Kagame & Sons Retail</td>
                        <td className="p-3">CHIC Showroom</td>
                        <td className="p-3 text-[#B5FF3D]">Due in 12 Days</td>
                        <td className="p-3 font-mono text-right text-white">850,000 RWF</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* DYNAMIC VIEW 2: INTER-SHOP STOCK TRANSFERS */}
          {activeTab === 'transfers' && (
            <div className="bg-[#161B1B] p-6 rounded-3xl border border-slate-800/40 space-y-6">
              <div>
                <h3 className="font-bold text-white text-md">Inter-Shop Stock Transfer Engine</h3>
                <p className="text-xs text-slate-400">Track and approve high-value electronics assets traveling between branches.</p>
              </div>

              <div className="overflow-x-auto border rounded-xl border-slate-800/40">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1E2525] text-slate-400 font-medium">
                      <th className="p-3">Item Variant (IMEI/Serial)</th>
                      <th className="p-3">Route Vector</th>
                      <th className="p-3">Dispatcher / Requestor</th>
                      <th className="p-3">Verification Hash</th>
                      <th className="p-3 text-right">Status State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/30 text-slate-300">
                    <tr className="hover:bg-[#1C2222]">
                      <td className="p-3 font-mono font-bold text-white">iPhone 15 Pro (IMEI-90123)</td>
                      <td className="p-3">Kacyiru ➔ CHIC Showroom</td>
                      <td className="p-3 text-slate-400">Manager Alpha</td>
                      <td className="p-3 font-mono">TRF-9022-X</td>
                      <td className="p-3 text-right"><span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 font-bold uppercase text-[9px]">Transit Verification</span></td>
                    </tr>
                    <tr className="hover:bg-[#1C2222]">
                      <td className="p-3 font-mono font-bold text-white">MacBook Pro M3 (SN-LL382)</td>
                      <td className="p-3">Downtown ➔ Kacyiru HQ</td>
                      <td className="p-3 text-slate-400">Cashier Center</td>
                      <td className="p-3 font-mono">TRF-8110-A</td>
                      <td className="p-3 text-right"><span className="px-2.5 py-1 rounded-full bg-[#B5FF3D]/10 text-[#B5FF3D] font-bold uppercase text-[9px]">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Audit & Legal Base Footer */}
      <footer className="flex flex-col justify-between gap-2 pt-4 mt-8 text-xs border-t border-slate-800/60 sm:flex-row text-slate-600">
        <p>&copy; 2026 ElecPOS Merchant Subsystem. PostgreSQL Session Security Active.</p>
        <p className="font-mono">Branch Sync Node: KGL-MAIN-01</p>
      </footer>
    </div>
  );
}