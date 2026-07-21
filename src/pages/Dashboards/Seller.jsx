import React, { useState } from 'react';

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState('report');
  const [timeRange, setTimeRange] = useState('Today');

  // Daily Cashier Personal KPIs mapped precisely to the prototype card layout
  const performanceKPIs = [
    { label: "Total Sales", value: "612,917 RWF", desc: "Products vs last month", change: "+2.08%", isPositive: true, bg: "bg-[#4361EE] text-white" },
    { label: "Total Orders", value: "34,760", desc: "Orders vs last month", change: "+12.4%", isPositive: true, bg: "bg-white text-slate-800" },
    { label: "Visitor Sign-ins", value: "14,987", desc: "Users vs last month", change: "-2.08%", isPositive: false, bg: "bg-white text-slate-800" },
    { label: "Total Sold Products", value: "12,987", desc: "Products vs last month", change: "+12.1%", isPositive: true, bg: "bg-white text-slate-800" }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-[#6C7A9C] font-sans p-6 flex flex-col justify-between">
      
      {/* Top Main Navigation Header */}
      <header className="flex items-center justify-between px-6 py-3 mb-6 bg-white border shadow-sm rounded-2xl border-slate-100">
        <div>
          <h1 className="text-lg font-bold text-[#1B2559]">Sales Report</h1>
          <p className="text-xs text-slate-400">Friday, December 15, 2026</p>
        </div>

        {/* Global Terminal Search */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search sales logs, receipts, customers..." 
              className="bg-[#F4F7FA] text-xs text-slate-700 rounded-xl pl-4 pr-10 py-2.5 w-64 border border-transparent focus:outline-none focus:border-[#4361EE] transition"
            />
          </div>

          {/* Quick Action Profile Cluster */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
            <div className="flex items-center justify-center w-8 h-8 overflow-hidden text-xs font-bold border rounded-full border-slate-200 bg-slate-100 text-slate-700">
              FA
            </div>
            <div className="hidden text-left lg:block">
              <p className="text-xs font-bold text-[#1B2559]">Ferra Alexandra</p>
              <p className="text-[10px] text-slate-400">Admin Store Agent</p>
            </div>
          </div>
        </div>
      </header>

      {/* Core Dynamic Content Hub Layout Split */}
      <div className="grid items-start grid-cols-1 gap-6 xl:grid-cols-5 grow">
        
        {/* Left Side Application Sidebar */}
        <aside className="p-4 space-y-1 bg-white border shadow-sm rounded-2xl border-slate-100 xl:col-span-1">
          <div className="flex items-center gap-2 px-3 py-4 mb-4 border-b border-slate-50">
            <div className="w-6 h-6 bg-[#4361EE] rounded-lg flex items-center justify-center text-white font-bold text-xs">D</div>
            <span className="text-sm font-black text-[#1B2559] tracking-tight">DealDeck</span>
          </div>

          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider px-3 mb-2">Menu</p>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z' },
            { id: 'report', label: 'Report Logs', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { id: 'products', label: 'Products Map', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${activeTab === item.id ? 'bg-[#4361EE] text-white shadow-md shadow-blue-500/10' : 'text-slate-400 hover:bg-slate-50 hover:text-[#1B2559]'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
              {item.label}
            </button>
          ))}

          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider px-3 pt-6 mb-2">Financial</p>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:bg-slate-50 hover:text-[#1B2559] py-2.5 px-4 rounded-xl text-xs font-bold transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Active Invoices
          </button>
        </aside>

        {/* Primary Data Grid Mainboard Content Area */}
        <main className="space-y-6 xl:col-span-4">
          
          {/* Top Performance Analytics Matrix (4 Column Setup) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {performanceKPIs.map((kpi, idx) => (
              <div key={idx} className={`p-4 rounded-2xl border border-slate-100 shadow-sm transition-all ${kpi.bg}`}>
                <div className="flex items-start justify-between">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${idx === 0 ? 'text-blue-100' : 'text-slate-400'}`}>{kpi.label}</span>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${kpi.isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {kpi.change}
                  </span>
                </div>
                <p className="mt-2 font-mono text-xl font-bold tracking-tight">{kpi.value}</p>
                <p className={`text-[10px] mt-1 ${idx === 0 ? 'text-blue-200' : 'text-slate-400'}`}>{kpi.desc}</p>
              </div>
            ))}
          </div>

          {/* TAB 1: REPORT LOGS WORKSPACE */}
          {activeTab === 'report' && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              
              {/* Customer Buying Habits Component with Stacked Activity Analytics */}
              <div className="p-5 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-100 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[#1B2559] uppercase tracking-wider">Customer Habits Matrix</h3>
                    <p className="text-[10px] text-slate-400">Track client interaction vs finalized floor checkouts</p>
                  </div>
                  <select className="bg-[#F4F7FA] text-[11px] font-bold text-slate-600 px-2 py-1 rounded-lg border-transparent focus:outline-none">
                    <option>This Year</option>
                  </select>
                </div>

                {/* Simulated Custom Vertical Chart Vector */}
                <div className="flex items-end justify-between h-40 px-2 pt-4 border-b border-slate-50">
                  {[35, 65, 45, 85, 55, 95, 70].map((h, i) => (
                    <div key={i} className="w-6 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-2.5 bg-[#4361EE] rounded-t-full transition-all" style={{ height: `${h}%` }} />
                      <div className="w-2.5 bg-[#CBD5E1] rounded-t-full transition-all -mt-1" style={{ height: `${h * 0.6}%` }} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase font-mono px-1">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                </div>
              </div>

              {/* Product Statistics Layer with Multi-Ring Visual Simulation */}
              <div className="p-5 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-[#1B2559] uppercase tracking-wider">Product Category Mix</h3>
                  <span className="text-[10px] text-slate-400 font-bold">Today</span>
                </div>

                <div className="flex justify-center py-2">
                  <div className="relative w-28 h-28">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#F1F5F9" strokeWidth="2.5" />
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#4361EE" strokeWidth="2.5" strokeDasharray="55 100" />
                      <circle cx="18" cy="18" r="13.5" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="30 100" />
                      <circle cx="18" cy="18" r="11" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="15 100" />
                    </svg>
                  </div>
                </div>

                {/* Color Block Legends */}
                <div className="space-y-1.5 text-[11px] font-bold">
                  <div className="flex items-center justify-between"><span>Smartphones</span><span className="text-[#4361EE] font-mono">2,487 units</span></div>
                  <div className="flex items-center justify-between"><span>Laptops & Computing</span><span className="font-mono text-red-500">1,828 units</span></div>
                  <div className="flex items-center justify-between"><span>Accessories</span><span className="font-mono text-sky-400">1,463 units</span></div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ACTIVE PRODUCT AVAILABILITY DATA TABLE */}
          {activeTab === 'products' && (
            <div className="p-5 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-100">
              <h3 className="text-xs font-bold text-[#1B2559] uppercase tracking-wider">Immediate Warehouse Stocks</h3>
              <div className="overflow-x-auto border rounded-xl border-slate-100">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F4F7FA] text-slate-400 font-bold border-b border-slate-100">
                      <th className="p-3">Item Descriptor</th>
                      <th className="p-3">Floor Stock SKU</th>
                      <th className="p-3">Selling Retail Value</th>
                      <th className="p-3 text-right">Status Flag</th>
                    </tr>
                  </thead>
                  <tbody className="font-medium divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-[#1B2559]">iPhone 15 Pro Max 256GB</td>
                      <td className="p-3 font-mono">SKU-9012-APL</td>
                      <td className="p-3 font-mono">1,450,000 RWF</td>
                      <td className="p-3 text-right"><span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 font-bold">Available</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Operations Footing Identity Log */}
      <footer className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between text-[11px] text-slate-400 gap-2">
        <p>&copy; 2026 DealDeck Engine Subsystem. Session operations secured with transaction logging.</p>
        <p className="font-mono">Node Terminal Terminal: KGL-RETAIL-04</p>
      </footer>
    </div>
  );
}