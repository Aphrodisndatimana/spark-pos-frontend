import React, { useState } from 'react';

export default function InventoryManagerDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Local inventory analytics blocks
  const inventoryStats = [
    { label: "Total Unique Products", value: "5,483 Items", style: "border-slate-200" },
    { label: "Pending Purchase Orders", value: "2,859 Orders", style: "border-slate-200" },
    { label: "Total Physical Stock Count", value: "148,920 Units", style: "border-slate-200" },
    { label: "Critical Out of Stock / Low", value: "38 Variants", style: "bg-orange-50 border-orange-200 text-orange-800" }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7F9] text-slate-700 font-sans p-6 flex flex-col justify-between">
      
      {/* Top Header Section */}
      <header className="flex flex-col justify-between gap-4 p-5 mb-6 bg-white border shadow-sm sm:flex-row sm:items-center rounded-xl border-slate-100">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Welcome, Nirmal Kumar !</h1>
          <p className="text-xs text-slate-500">Central Electronics Inventory Control Unit</p>
        </div>

        {/* Global Stock Search bar */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Scan Barcode or Search IMEI/Serial..." 
              className="bg-slate-50 text-xs text-slate-800 rounded-lg pl-4 pr-10 py-2.5 w-72 border border-slate-200 focus:outline-none focus:border-cyan-600 transition"
            />
          </div>
          
          <div className="flex items-center justify-center w-10 h-10 overflow-hidden text-xs font-bold border-2 rounded-full border-cyan-600 bg-slate-100 text-slate-700">
            NK
          </div>
        </div>
      </header>

      {/* Main Framework Grid Split */}
      <div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-4 xl:grid-cols-5 grow">
        
        {/* Navigation Control Panel */}
        <aside className="bg-[#1E3A47] text-slate-300 p-4 rounded-xl shadow-sm space-y-1 lg:col-span-1">
          <div className="p-2 mb-4 border-b border-slate-700/50">
            <p className="text-xs font-bold tracking-wide text-white">Stock Management</p>
          </div>
          
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${activeTab === 'dashboard' ? 'bg-[#2B5263] text-white shadow-inner' : 'hover:bg-[#254655] hover:text-white'}`}
          >
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" /></svg>
            Dashboard Matrix
          </button>

          <button 
            onClick={() => setActiveTab('tracking')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${activeTab === 'tracking' ? 'bg-[#2B5263] text-white shadow-inner' : 'hover:bg-[#254655] hover:text-white'}`}
          >
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            IMEI & Serial Registers
          </button>

          <div className="p-2 pt-4 mt-4 border-t border-slate-700/50">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Logs</p>
          </div>
          
          <button className="w-full flex items-center gap-3 py-2.5 px-3 rounded-lg text-xs font-semibold hover:bg-[#254655] hover:text-white transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            Stock Movement History
          </button>
        </aside>

        {/* Primary Workspace Panel */}
        <main className="space-y-6 lg:col-span-3 xl:col-span-4">
          
          {/* Top Quick Overview Information Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {inventoryStats.map((stat, idx) => (
              <div key={idx} className={`bg-white p-4 rounded-xl border shadow-sm ${stat.style}`}>
                <span className="block text-xs font-semibold text-slate-400">{stat.label}</span>
                <p className="mt-1 font-mono text-xl font-bold text-slate-800">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* TAB 1: DASHBOARD MATRIX */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              
              {/* Left Side Chart Panel Mix */}
              <div className="p-5 space-y-6 bg-white border shadow-sm rounded-xl border-slate-200 xl:col-span-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-800">Inventory Allocation Mix</h3>
                  <span className="text-xs font-medium text-slate-400">Monthly Update</span>
                </div>
                
                <div className="flex flex-col items-center justify-around gap-4 sm:flex-row">
                  {/* Embedded Custom SVG Pie Chart to replace external charting tools */}
                  <div className="relative w-28 h-28">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="14" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                      <circle cx="16" cy="16" r="14" fill="none" stroke="#477890" strokeWidth="4" strokeDasharray="68 100" />
                      <circle cx="16" cy="16" r="14" fill="none" stroke="#90A8B3" strokeWidth="4" strokeDasharray="32 100" strokeDashoffset="-68" />
                    </svg>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#477890]" /><span>Available Units (68%)</span></div>
                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#90A8B3]" /><span>Sold / Dispatched Units (32%)</span></div>
                  </div>
                </div>
              </div>

              {/* Top Stores by Asset Sales */}
              <div className="flex flex-col justify-between p-5 bg-white border shadow-sm rounded-xl border-slate-200">
                <div>
                  <h3 className="mb-4 text-sm font-bold text-slate-800">Top Branches by Inventory Volume</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Kacyiru Store Hub", percentage: "85%", count: "42k units" },
                      { name: "Downtown Showroom", percentage: "62%", count: "28k units" },
                      { name: "CHIC Storage Depot", percentage: "45%", count: "19k units" }
                    ].map((branch, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-600">{branch.name}</span>
                          <span className="font-mono text-slate-400">{branch.count}</span>
                        </div>
                        <div className="w-full h-2 overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full bg-[#477890]" style={{ width: branch.percentage }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: IMEI & SERIAL REGISTERS */}
          {activeTab === 'tracking' && (
            <div className="p-5 space-y-4 bg-white border shadow-sm rounded-xl border-slate-200">
              <div>
                <h3 className="text-sm font-bold text-slate-800">High-Value Device Traceability Matrix</h3>
                <p className="text-xs text-slate-500">Live operational mapping of components requiring strict registration compliance.</p>
              </div>

              <div className="overflow-x-auto border rounded-lg border-slate-200">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="font-semibold border-b bg-slate-50 text-slate-500 border-slate-200">
                      <th className="p-3">Model Reference</th>
                      <th className="p-3">Tracking Hash (IMEI / SN)</th>
                      <th className="p-3">Current Node Vault</th>
                      <th className="p-3 text-right">Status State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 font-semibold text-slate-800">Samsung Galaxy S24 Ultra</td>
                      <td className="p-3 font-mono">IMEI-358921109481102</td>
                      <td className="p-3 text-slate-500">Kacyiru Warehouse Bin-A3</td>
                      <td className="p-3 text-right"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">In Stock</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 font-semibold text-slate-800">Apple MacBook Pro 14" M3</td>
                      <td className="p-3 font-mono">SN-C02FX481Q05D</td>
                      <td className="p-3 text-slate-500">Downtown Retail Counter</td>
                      <td className="p-3 text-right"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">Transferred</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Ground Footer Infrastructure Logs */}
      <footer className="flex justify-between pt-4 mt-8 text-xs border-t border-slate-200 text-slate-400">
        <p>&copy; 2026 Central Inventory Platform. Data tracking verified with transaction logs in PostgreSQL.</p>
        <p className="font-mono">Node ID: INV-MAIN-KGL</p>
      </footer>
    </div>
  );
}