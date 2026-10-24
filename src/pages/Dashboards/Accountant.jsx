import React, { useState } from 'react';

// --- MODERN SVG ICONS ---
const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const TransactionIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const ExpensesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4M8 16H4m16-8H4m12 8h4m-4-8h4" />
  </svg>
);

const SalesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CashflowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PayrollIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ReportsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const TaxesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
  </svg>
);

const SalesReturnIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

export default function AccountantDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: DashboardIcon },
    { name: 'Transaction', icon: TransactionIcon },
    { name: 'Expenses', icon: ExpensesIcon },
    { name: 'Sales', icon: SalesIcon },
    { name: 'Cashflow', icon: CashflowIcon },
    { name: 'Payroll', icon: PayrollIcon },
    { name: 'Reports', icon: ReportsIcon },
    { name: 'Taxes', icon: TaxesIcon },
    { name: 'Sales return', icon: SalesReturnIcon },
  ];

  const bottomNavItems = [
    { name: 'Settings', icon: SettingsIcon },
    { name: 'Logout', icon: LogoutIcon },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
      
      {/* Inline style to hide scrollbar while preserving scroll functionality */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-100 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Logo Section */}
        <div className="flex items-center justify-between h-20 px-6 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-lg tracking-wider shadow-md shadow-orange-500/20">
              p
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              panze<span className="text-orange-500 text-xs align-super">studio</span>
            </span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-slate-600">
            ✕
          </button>
        </div>

        {/* Scrollable Navigation List (Scrollbar hidden via no-scrollbar) */}
        <div className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-150 ${
                  isActive 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon />
                <span className="truncate text-sm">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-slate-100 space-y-1.5 shrink-0">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-150 ${
                  isActive 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon />
                <span className="text-sm">{item.name}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col md:ml-64 h-full overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 lg:px-10 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="md:hidden text-slate-500 hover:text-slate-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
              <p className="text-sm text-slate-500">29 April, 2024</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden sm:flex items-center bg-slate-50 border border-slate-200/80 rounded-full px-4 py-2.5 w-72 focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:border-orange-500 transition-all">
              <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search sales operations" 
                className="bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none w-full" 
              />
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-[11px] font-bold text-white flex items-center justify-center ring-2 ring-white">
                5
              </span>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border border-slate-200" 
              />
              <div className="hidden lg:block text-left">
                <h4 className="text-sm font-bold text-slate-800">Rakibul</h4>
                <p className="text-xs text-slate-500">Sales Administrator</p>
              </div>
              <svg className="w-4 h-4 text-slate-400 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </header>

        {/* Dashboard Main Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">
          
          {/* Top Row Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Sales Overview Chart Section */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-base font-bold text-slate-800">Sales Overview</h3>
                  <div className="text-3xl font-bold text-slate-900 mt-1">$134,65.92</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-slate-50 p-1 rounded-xl flex text-xs font-medium border border-slate-200/60">
                    <button className="px-3.5 py-1.5 bg-orange-500 text-white rounded-lg shadow-sm text-xs font-semibold">12 Months</button>
                    <button className="px-3.5 py-1.5 text-slate-600 hover:text-slate-900 text-xs font-medium">30 days</button>
                    <button className="px-3.5 py-1.5 text-slate-600 hover:text-slate-900 text-xs font-medium">7 days</button>
                  </div>
                </div>
              </div>

              {/* Simulated Bar Graph */}
              <div className="h-56 flex items-end justify-between gap-2 pt-6 px-2 border-b border-slate-100">
                {[
                  { m: 'Jan', i: 60, e: 40 },
                  { m: 'Feb', i: 75, e: 55 },
                  { m: 'Mar', i: 70, e: 60 },
                  { m: 'Apr', i: 85, e: 70 },
                  { m: 'May', i: 95, e: 60 },
                  { m: 'Jun', i: 70, e: 45 },
                  { m: 'Jul', i: 90, e: 75 },
                  { m: 'Aug', i: 65, e: 50 },
                  { m: 'Sep', i: 90, e: 85 },
                  { m: 'Oct', i: 75, e: 80 },
                  { m: 'Nov', i: 100, e: 35 },
                  { m: 'Dec', i: 95, e: 40 },
                ].map((col, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="w-full flex items-end justify-center gap-1 h-full">
                      <div style={{ height: `${col.i}%` }} className="w-2.5 bg-indigo-500 rounded-t-full transition-all duration-300 group-hover:opacity-80"></div>
                      <div style={{ height: `${col.e}%` }} className="w-2.5 bg-pink-400 rounded-t-full transition-all duration-300 group-hover:opacity-80"></div>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{col.m}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block"></span> Income
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-3 h-3 rounded-full bg-pink-400 inline-block"></span> Expense
                </div>
              </div>
            </div>

            {/* Metric Summary Cards Grid (Increased height / smaller radius rounded-2xl) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Total Sales</p>
                  <h4 className="text-2xl font-bold text-slate-900 mt-1.5">$936</h4>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-500 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Total Purchases</p>
                  <h4 className="text-2xl font-bold text-slate-900 mt-1.5">$67789</h4>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 text-fuchsia-500 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Sales Return</p>
                  <h4 className="text-2xl font-bold text-slate-900 mt-1.5">123</h4>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Purchases Returns</p>
                  <h4 className="text-2xl font-bold text-slate-900 mt-1.5">225</h4>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Row Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Top Selling Products Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-slate-800">Top Selling Products</h3>
                <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">Today (29 April)</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      <th className="pb-3 font-semibold">Product Name</th>
                      <th className="pb-3 font-semibold">Total Sold</th>
                      <th className="pb-3 font-semibold">Total Revenue</th>
                      <th className="pb-3 font-semibold">Store</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-sm">
                    {[
                      { name: 'Zen Vibe', desc: 'Switch own discussions an pro...', sold: '3542', rev: '$6549.38', store: 'Moa Market', color: 'bg-amber-100 text-amber-600' },
                      { name: 'Pixel Perfume', desc: 'Switch own discussions an pro...', sold: '3542', rev: '$6549.38', store: 'Super Shop', color: 'bg-orange-100 text-orange-600' },
                      { name: 'Apollo Grip', desc: 'Switch own discussions an pro...', sold: '3542', rev: '$6549.38', store: 'Poly Shop', color: 'bg-emerald-100 text-emerald-600' },
                      { name: 'Pure Zest', desc: 'Switch own discussions an pro...', sold: '3542', rev: '$6549.38', store: 'Amazon', color: 'bg-rose-100 text-rose-600' },
                    ].map((item, idx) => (
                      <tr key={idx} className="group hover:bg-slate-50/50 transition">
                        <td className="py-4 flex items-center gap-3.5">
                          <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center font-bold text-sm`}>
                            {item.name[0]}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                            <p className="text-xs text-slate-400">{item.desc}</p>
                          </div>
                        </td>
                        <td className="py-4 font-medium text-slate-800">{item.sold}</td>
                        <td className="py-4 font-medium text-slate-800">{item.rev}</td>
                        <td className="py-4 text-slate-600 font-medium">{item.store}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sales & Purchase Location Breakdowns */}
            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col justify-between space-y-6">
              <h3 className="text-base font-bold text-slate-800">Sales & Purchase Of This Week</h3>

              {/* Sales Store Location */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-600">Sales by Store Location</p>
                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-200" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-indigo-500" strokeDasharray="75, 100" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-xs font-bold text-slate-800">75%</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-xs text-slate-500 font-medium">Total Sales</p>
                    <p className="text-base font-bold text-slate-900">$12,354</p>
                    <div className="flex flex-col text-xs text-slate-600 gap-0.5 mt-1 font-medium">
                      <span className="flex items-center justify-end gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Town City</span>
                      <span className="flex items-center justify-end gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-300"></span> Down Town</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Store Location */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-600">Purchase by Store Location</p>
                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-200" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-pink-400" strokeDasharray="60, 100" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-xs font-bold text-slate-800">60%</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-xs text-slate-500 font-medium">Total Purchase</p>
                    <p className="text-base font-bold text-slate-900">$32,654</p>
                    <div className="flex flex-col text-xs text-slate-600 gap-0.5 mt-1 font-medium">
                      <span className="flex items-center justify-end gap-1.5"><span className="w-2 h-2 rounded-full bg-pink-500"></span> Town City</span>
                      <span className="flex items-center justify-end gap-1.5"><span className="w-2 h-2 rounded-full bg-pink-300"></span> Down Town</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}