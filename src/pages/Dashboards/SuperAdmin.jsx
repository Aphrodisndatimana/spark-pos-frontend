import React, { useState } from 'react';

export default function SuperAdminDashboard() {
  const [timeRange, setTimeRange] = useState('6 Month');

  // Mock statistics matching your SRS needs
  const stats = [
    { label: "Total Platform GMV", value: "32,450,600 RWF", change: "+12.4%", isPositive: true },
    { label: "Active Tenant Shops", value: "142 Shops", change: "+4.2%", isPositive: true },
    { label: "Total Active Devices", value: "8,920 Units", change: "+8.1%", isPositive: true },
    { label: "Pending System Repairs", value: "34 Tickets", change: "-2.1%", isPositive: false }
  ];

  return (
    <div className="min-h-screen bg-[#0B0C14] text-slate-200 font-sans p-6 flex flex-col justify-between">
      
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between mb-8 bg-[#131522] p-4 rounded-2xl border border-slate-800/40">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 text-xl font-bold text-white bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-xl">
            E
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">ElecPOS</h1>
            <p className="text-xs text-slate-400">Super Admin Control Engine</p>
          </div>
        </div>

        {/* Global Search */}
        <div className="relative hidden w-96 md:block">
          <input 
            type="text" 
            placeholder="Search tenant shops, transactions, logs... (⌘K)" 
            className="w-full bg-[#1A1D30] border border-slate-800 rounded-xl py-2 px-4 text-sm text-slate-300 focus:outline-none focus:border-purple-500 transition-all"
          />
        </div>

        {/* Admin Profile Action Area */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 bg-[#1A1D30] rounded-xl text-slate-400 hover:text-white transition">
            <span className="absolute w-2 h-2 bg-purple-500 rounded-full top-1 right-1"></span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
          <div className="flex items-center gap-2 pl-4 border-l border-slate-800">
            <div className="flex items-center justify-center overflow-hidden text-sm font-bold text-white bg-purple-600 rounded-full w-9 h-9">
              SA
            </div>
            <div className="hidden text-left lg:block">
              <p className="text-sm font-medium leading-none text-white">Super User</p>
              <p className="mt-1 text-xs text-purple-400">Platform Master</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-4 grow">
        
        {/* Left Side: Sidebar Navigation inside Dashboard frame */}
        <aside className="bg-[#131522] p-5 rounded-2xl border border-slate-800/40 space-y-2 lg:col-span-1">
          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 px-3 mb-2">Core Overview</p>
          <button className="flex items-center w-full gap-3 px-4 py-3 font-medium text-white transition-all border-l-4 border-purple-500 bg-gradient-to-r from-purple-900/40 to-indigo-900/20 rounded-xl">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" /></svg>
            System Console
          </button>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:bg-[#1A1D30] hover:text-white py-3 px-4 rounded-xl transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            Manage Shops (Tenants)
          </button>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:bg-[#1A1D30] hover:text-white py-3 px-4 rounded-xl transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Security & Audit Logs
          </button>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:bg-[#1A1D30] hover:text-white py-3 px-4 rounded-xl transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Global Subscriptions
          </button>

          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 px-3 pt-4 mb-2">Platform Control</p>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:bg-[#1A1D30] hover:text-white py-3 px-4 rounded-xl transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            System Settings
          </button>
        </aside>

        {/* Center Complex: Metrics, Platform Chart, and Shop Growth Analytics */}
        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3">
          
          {/* Top Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#131522] p-4 rounded-2xl border border-slate-800/40 relative overflow-hidden">
                <span className="block mb-1 text-xs text-slate-400">{stat.label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold tracking-tight text-white">{stat.value}</span>
                  <span className={`text-xs font-semibold ${stat.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${stat.isPositive ? 'bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-rose-500/30 to-transparent'}`} />
              </div>
            ))}
          </div>

          {/* Central Analytics Performance Chart Container */}
          <div className="bg-[#131522] p-6 rounded-3xl border border-slate-800/40 md:col-span-2 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-white">Platform GMV & Performance Flow</h3>
                <p className="text-xs text-slate-400">Aggregated revenue flow across Kigali branches</p>
              </div>
              <div className="bg-[#1A1D30] p-1 rounded-xl flex gap-1 text-xs">
                {['1 Month', '3 Month', '6 Month'].map((range) => (
                  <button 
                    key={range} 
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${timeRange === range ? 'bg-purple-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom SVG Line Chart replacing ApexCharts structure dynamically */}
            <div className="relative w-full my-2 h-44">
              <svg className="w-full h-full drop-shadow-[0_4px_12px_rgba(147,51,234,0.15)]" viewBox="0 0 600 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.0"/>
                  </linearGradient>
                </defs>
                <path d="M0,130 Q75,120 150,90 T300,50 T450,110 T600,40" fill="none" stroke="url(#chartGradient)" strokeWidth="0" />
                <path d="M0,130 Q75,120 150,90 T300,50 T450,110 T600,40 L600,160 L0,160 Z" fill="url(#chartGradient)" />
                <path d="M0,130 Q75,120 150,90 T300,50 T450,110 T600,40" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="300" cy="50" r="5" fill="rgb(168, 85, 247)" stroke="#131522" strokeWidth="2" />
              </svg>
              <div className="absolute top-[32px] left-[51%] transform -translate-x-1/2 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-[10px] text-white font-mono shadow-xl">
                12 July: 1.8M RWF
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono pt-2 border-t border-slate-800/60">
              <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul (Current)</span>
            </div>
          </div>

          {/* Bottom Left Content Block: Top Performing Shops */}
          <div className="bg-[#131522] p-5 rounded-3xl border border-slate-800/40 flex flex-col justify-between">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Top Performing Shops</h3>
              <div className="space-y-3">
                {[
                  { name: "Kacyiru Electronics Ltd", sales: "8.4M RWF", color: "bg-purple-500" },
                  { name: "Downtown Kigali Phone Hub", sales: "6.2M RWF", color: "bg-indigo-500" },
                  { name: "Kimironko Gadgets Express", sales: "4.9M RWF", color: "bg-blue-500" }
                ].map((shop, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${shop.color}`} />
                      <span className="text-xs font-medium text-slate-300 truncate max-w-[150px]">{shop.name}</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-white">{shop.sales}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full mt-4 bg-[#1A1D30] hover:bg-[#22263F] text-slate-300 text-xs py-2 rounded-xl border border-slate-800 transition">
              View All 142 Shops
            </button>
          </div>

          {/* Bottom Right Content Block: System Audit Trail & Logs */}
          <div className="bg-[#131522] p-5 rounded-3xl border border-slate-800/40">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white">Live Platform Logs</h3>
              <span className="text-[10px] bg-purple-950 text-purple-400 font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">Live</span>
            </div>
            <div className="space-y-3.5 max-h-[160px] overflow-y-auto pr-1">
              {[
                { text: "Inter-shop transfer approved (Kimironko -> Chic)", time: "2 mins ago", type: "transfer" },
                { text: "New registration request: 'Nyarugenge Smart Tech'", time: "14 mins ago", type: "system" },
                { text: "Database optimization checkpoint execution completed", time: "1 hr ago", type: "db" }
              ].map((log, i) => (
                <div key={i} className="flex items-start justify-between pb-2 text-xs border-b border-slate-900 last:border-none">
                  <div>
                    <p className="font-normal leading-snug text-slate-300">{log.text}</p>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">{log.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      {/* Footer Branding Area */}
      <footer className="flex flex-col items-center justify-between gap-2 pt-4 mt-8 text-xs border-t sm:flex-row text-slate-600 border-slate-900">
        <p>&copy; 2026 Finova-Inspired ElecPOS Architecture. All Rights Reserved.</p>
        <div className="flex gap-4 font-medium">
          <a href="#privacy" className="transition hover:text-slate-400">System Integrity</a>
          <a href="#terms" className="transition hover:text-slate-400">PostgreSQL Backups</a>
        </div>
      </footer>
    </div>
  );
}