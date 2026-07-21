import React, { useState } from 'react';

export default function BranchManagerDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Real-time branch specific tracking aggregates
  const operationalMetrics = [
    { label: "Today's Cash Drawer", value: "1,250,000 RWF", change: "6.8% vs yesterday", type: "up" },
    { label: "Daily Sales Volume", value: "4,820,500 RWF", change: "12 units sold today", type: "neutral" },
    { label: "Active Counter Expenses", value: "125,000 RWF", change: "Transport & utilities", type: "down" }
  ];

  return (
    <div className="min-h-screen bg-[#0F1015] text-[#8A92A6] font-sans p-6 flex flex-col justify-between">
      
      {/* Upper Navigation Header Grid */}
      <header className="flex items-center justify-between mb-8 bg-[#151722] p-4 rounded-2xl border border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white shadow-lg bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl shadow-blue-500/10">
            B
          </div>
          <div>
            <h1 className="font-bold leading-tight text-white text-md">Downtown Kigali Hub</h1>
            <p className="text-[11px] text-blue-400 font-medium">Branch Operations Engine</p>
          </div>
        </div>

        {/* Local Scope Search Bar */}
        <div className="relative hidden w-80 md:block">
          <input 
            type="text" 
            placeholder="Search current cashiers, active repairs..." 
            className="w-full bg-[#1C1F30] border border-slate-800 rounded-xl py-2 px-4 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        {/* Manager ID Block */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 border-r border-slate-800 pr-4">
            <div className="w-8 h-8 rounded-full bg-[#2463EB] flex items-center justify-center font-bold text-xs text-white">
              EH
            </div>
            <div className="hidden text-left lg:block">
              <p className="text-xs font-semibold text-white">Esther Howard</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Branch Manager</p>
            </div>
          </div>
          <button className="p-2 bg-[#1C1F30] rounded-xl text-slate-400 hover:text-white transition relative">
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
        </div>
      </header>

      {/* Main Structural Column System */}
      <div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-4 xl:grid-cols-5 grow">
        
        {/* Left Side Navigation Columns */}
        <aside className="bg-[#151722] p-4 rounded-2xl border border-slate-800/50 space-y-1 lg:col-span-1">
          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-600 px-3 mb-2">Branch Control</p>
          
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${activeTab === 'dashboard' ? 'bg-[#2463EB] text-white' : 'text-slate-400 hover:bg-[#1C1F30] hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" /></svg>
            Operational Hub
          </button>

          <button 
            onClick={() => setActiveTab('repairs')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${activeTab === 'repairs' ? 'bg-[#2463EB] text-white' : 'text-slate-400 hover:bg-[#1C1F30] hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
            Local Repair Desk
          </button>
        </aside>

        {/* Dynamic Workspace Container */}
        <main className="space-y-6 lg:col-span-3 xl:col-span-4">
          
          {/* TAB 1: OPERATIONAL HUB */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              
              {/* Three Upper Summary Widgets */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:col-span-3">
                {operationalMetrics.map((card, i) => (
                  <div key={i} className="bg-[#151722] p-4 rounded-2xl border border-slate-800/40">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">{card.label}</span>
                    <p className="mt-1 font-mono font-bold text-white text-md">{card.value}</p>
                    <span className="text-[9px] text-blue-400 mt-0.5 block font-medium">{card.change}</span>
                  </div>
                ))}
              </div>

              {/* Center Content Block: Hourly Sales Target Indicators */}
              <div className="bg-[#151722] p-5 rounded-3xl border border-slate-800/40 xl:col-span-2 space-y-4">
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-white uppercase">Hourly Transaction Inflows</h3>
                  <p className="text-[11px] text-slate-500">Live transaction history logs for the current day shift</p>
                </div>
                
                {/* Horizontal Graphic Chart Simulation */}
                <div className="flex items-end justify-between px-2 pt-4 h-28">
                  {[45, 80, 55, 90, 65, 100, 75].map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 w-7">
                      <div className="w-full bg-[#1C1F30] h-20 rounded-t-lg relative overflow-hidden flex items-end">
                        <div className="w-full bg-blue-600 rounded-t-md" style={{ height: `${val}%` }} />
                      </div>
                      <span className="text-[9px] font-mono text-slate-600">H{idx+1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Content Block: Stock Move Analytics Ring */}
              <div className="bg-[#151722] p-5 rounded-3xl border border-slate-800/40 flex flex-col justify-between">
                <div>
                  <h3 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">Stock Movement Mix</h3>
                  <div className="flex justify-center my-2">
                    <div className="relative w-24 h-24">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#1C1F30" strokeWidth="4" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#2463EB" strokeWidth="4" strokeDasharray="60 100" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="40 100" strokeDashoffset="-60" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-xs font-bold text-white">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5 text-[11px] font-medium pt-2 border-t border-slate-800/60">
                  <div className="flex justify-between"><span>Stock-In Flow</span><span className="font-mono text-blue-500">60%</span></div>
                  <div className="flex justify-between"><span>Stock-Out Claims</span><span className="font-mono text-amber-500">40%</span></div>
                </div>
              </div>

              {/* Daily Shift Logs (Cashier Performance Vectors) */}
              <div className="bg-[#151722] p-5 rounded-3xl border border-slate-800/40 xl:col-span-3">
                <h3 className="mb-3 text-xs font-bold tracking-wider text-white uppercase">Active Duty Shift Cashiers</h3>
                <div className="space-y-2.5">
                  {[
                    { staff: "Darrell Steward", sales: "2,450,000 RWF", status: "Active Shift", color: "bg-emerald-500" },
                    { staff: "Leslie Alexander", sales: "1,820,500 RWF", status: "Active Shift", color: "bg-emerald-500" },
                    { staff: "Kathryn Murphy", sales: "550,000 RWF", status: "On Break", color: "bg-amber-500" }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-xs bg-[#1C1F30]/40 p-3 rounded-xl border border-slate-800/30">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${row.color}`} />
                        <span className="font-semibold text-white">{row.staff}</span>
                      </div>
                      <div className="flex items-center gap-6 font-mono">
                        <span className="text-slate-400">{row.status}</span>
                        <span className="font-bold text-white">{row.sales}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: LOCAL REPAIR DESK MANAGEMENT */}
          {activeTab === 'repairs' && (
            <div className="bg-[#151722] p-6 rounded-3xl border border-slate-800/50 space-y-6">
              <div>
                <h3 className="text-xs font-bold tracking-wider text-white uppercase">Local Diagnostics & Device Repairs</h3>
                <p className="text-[11px] text-slate-500">Track current repair queues assigned to branch technicians</p>
              </div>

              <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1C1F30] text-slate-400 font-semibold">
                      <th className="p-3">Asset Serial/IMEI</th>
                      <th className="p-3">Diagnosed Problem</th>
                      <th className="p-3">Assigned Technician</th>
                      <th className="p-3 text-right">Job Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40 text-slate-300">
                    <tr className="hover:bg-[#1A1C29]">
                      <td className="p-3 font-mono font-bold text-white">HP-ELITE-89210</td>
                      <td className="p-3">Motherboard short-circuit repair</td>
                      <td className="p-3 text-slate-400">Tech Mutoni</td>
                      <td className="p-3 text-right"><span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-bold text-[9px] uppercase tracking-wider">In Progress</span></td>
                    </tr>
                    <tr className="hover:bg-[#1A1C29]">
                      <td className="p-3 font-mono font-bold text-white">GAL-S24-90211</td>
                      <td className="p-3">Cracked AMOLED display swap</td>
                      <td className="p-3 text-slate-400">Tech Ntwari</td>
                      <td className="p-3 text-right"><span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-[9px] uppercase tracking-wider">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Operational Footer Parameters */}
      <footer className="mt-8 pt-4 border-t border-slate-800/40 flex justify-between text-[11px] text-slate-600">
        <p>&copy; 2026 ElecPOS Node. Local cache instance synced with central PostgreSQL database.</p>
        <p className="font-mono">DT-KGL-03</p>
      </footer>
    </div>
  );
}