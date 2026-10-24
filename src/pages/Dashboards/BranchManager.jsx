import React, { useState } from 'react';

export default function BranchDashboard() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [openSubmenu, setOpenSubmenu] = useState('');

  const toggleSubmenu = (menuKey) => {
    setOpenSubmenu(openSubmenu === menuKey ? null : menuKey);
    setActiveMenu(menuKey);
  };

  const menuItems = [
    {
      id: 'Associates',
      label: 'Associates',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      subItems: [
        { id: 'Associate Attendance', label: 'Associate Attendance' },
        { id: 'Associate Performance', label: 'Associate Performance' }
      ]
    },
    {
      id: 'Stock Transfer Requests',
      label: 'Stock Transfer Requests',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: 'Customers',
      label: 'Customers',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 'Sales',
      label: 'Sales',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'Inventory',
      label: 'Inventory',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 'Repair',
      label: 'Repair',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: 'Reports',
      label: 'Reports',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 'Analytics',
      label: 'Analytics',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-screen h-screen bg-[#008162] font-sans flex flex-col md:flex-row overflow-hidden">
      
      {/* SIDEBAR (Width increased to md:w-72 for wider text like Stock Transfer Requests) */}
      <aside className="w-full md:w-72 bg-[#008162] text-white flex flex-col justify-between p-4 flex-shrink-0 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 px-3 py-4 mb-2">
            <div className="w-9 h-9 bg-white text-[#008162] rounded-full flex items-center justify-center font-bold shadow-md p-1.5 flex-shrink-0">
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <span className="flex items-center gap-1 text-lg font-bold tracking-tight text-white whitespace-nowrap">
              Sentinel<span className="font-normal text-emerald-200">Software</span>
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1.5">
            {/* Dashboard Link */}
            <button
              onClick={() => setActiveMenu('Dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeMenu === 'Dashboard'
                  ? 'bg-white text-[#008162] shadow-md font-bold'
                  : 'text-emerald-100 hover:bg-[#007055]'
              }`}
            >
              <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Dashboard</span>
            </button>

            {menuItems.map((item) => {
              const isActive = activeMenu === item.id;
              const isOpen = openSubmenu === item.id;

              if (item.subItems) {
                return (
                  <div key={item.id} className="w-full">
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-white text-[#008162] shadow-md font-bold'
                          : 'text-emerald-100 hover:bg-[#007055]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      <svg
                        className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Submenu Dropdown List */}
                    {isOpen && (
                      <div className="pl-3 my-1 mt-1 ml-4 space-y-1 border-l-2 border-emerald-400/50">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => setActiveMenu(sub.id)}
                            className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors whitespace-nowrap ${
                              activeMenu === sub.id
                                ? 'bg-emerald-800 text-white font-semibold'
                                : 'text-emerald-100 hover:text-white hover:bg-[#007055]'
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.id} className="w-full">
                  <button
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-white text-[#008162] shadow-md font-bold'
                        : 'text-emerald-100 hover:bg-[#007055]'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Footer Support & Logout */}
        <div className="mt-6 space-y-3">
          <div className="pt-2 border-t border-emerald-700/60">
            <button
              onClick={() => setActiveMenu('Logout')}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeMenu === 'Logout'
                  ? 'bg-white text-[#008162] font-bold shadow-md'
                  : 'text-emerald-200 hover:bg-[#007055]'
              }`}
            >
              <svg className="flex-shrink-0 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>

          <div className="bg-[#006e53] rounded-xl p-3 relative text-center text-white border border-emerald-600/40">
            <p className="text-xs font-semibold text-emerald-100">Need Support ?</p>
            <p className="text-[10px] text-emerald-300 mt-0.5 cursor-pointer hover:underline">Contact us</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex flex-col justify-between flex-1 p-6 overflow-y-auto bg-white md:p-8">
        <div>
          {/* Top Bar */}
          <div className="flex flex-col items-start justify-between gap-4 pb-6 border-b border-gray-100 lg:flex-row lg:items-center">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Welcome back, <span className="text-blue-600">Alex!</span>
              </h1>
              <p className="text-sm font-normal text-slate-400 mt-0.5">
                Here is how your store is performing today
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between w-full gap-4 lg:w-auto lg:justify-end">
              <div className="relative flex-1 sm:flex-initial sm:w-72">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search item, receipt, IMEI..."
                  className="w-full bg-[#F3F4F7] text-slate-600 text-xs rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition placeholder-slate-400"
                />
              </div>

              <div className="flex items-center gap-4">
                <button className="relative p-2 transition text-slate-600 hover:text-slate-800">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>

                <div className="h-7 w-[1px] bg-slate-200"></div>

                <div className="flex items-center gap-3 cursor-pointer group">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Alex Rivera"
                    className="object-cover border rounded-full shadow-sm w-9 h-9 border-slate-200"
                  />
                  <span className="text-sm font-semibold transition text-slate-800 group-hover:text-blue-600">
                    Alex Rivera
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Header */}
          <div className="flex items-center justify-between my-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Store Main Overview</h2>
              <p className="text-xs text-gray-400 mt-0.5">Downtown Store Branch #4092</p>
            </div>
          </div>

          {/* Top Priority Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col px-6 bg-white border rounded-lg shadow-sm py-7 gap-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-500">Today's Total Sales</span>
                <div>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-800">$18,240</p>
                <span className="text-[10px] font-medium text-emerald-600 mt-1 block">72% of $25k daily target</span>
              </div>
            </div>

            <div className="flex flex-col px-6 bg-white border rounded-lg shadow-sm py-7 gap-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-500">Visitors Who Bought</span>
                <div>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-800">22.4%</p>
                <span className="text-[10px] font-medium text-gray-400 mt-1 block">70 buyers / 312 visitors</span>
              </div>
            </div>

            <div className="flex flex-col px-6 bg-white border rounded-lg shadow-sm py-7 gap-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-500">Warranties Sold</span>
                <div>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-800">41.8%</p>
                <span className="text-[10px] font-medium text-emerald-600 mt-1 block">Good extra income</span>
              </div>
            </div>

            <div className="flex flex-col px-6 bg-white border rounded-lg shadow-sm py-7 gap-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-500">Out of Stock Alert</span>
                <div>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-red-500">5 Products</p>
                <span className="text-[10px] font-medium text-red-500 mt-1 block">Need fast re-order</span>
              </div>
            </div>

            <div className="flex flex-col px-6 bg-white border rounded-lg shadow-sm py-7 gap-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-500">Discount Approvals</span>
                <div className="bg-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-[#f48200]">3 Pending</p>
                <span className="text-[10px] font-medium text-[#fc9826] mt-1 block">Needs manager review</span>
              </div>
            </div>
          </div>

          {/* Line Graph & Inventory Double-Check */}
          <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-3">
            <div className="flex flex-col justify-between p-5 bg-white border border-gray-100 shadow-sm lg:col-span-2 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">When Is The Store Busiest Today?</h3>
                  <p className="text-[12px] text-gray-400">Green Line = Money Made | Blue Line = People Walking In</p>
                </div>
              </div>

              <div className="relative w-full h-40 my-2">
                <svg className="w-full h-full" viewBox="0 0 500 150">
                  <line x1="0" y1="30" x2="500" y2="30" stroke="#f1f5f9" strokeDasharray="4" />
                  <line x1="0" y1="75" x2="500" y2="75" stroke="#f1f5f9" strokeDasharray="4" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeDasharray="4" />

                  <path d="M 0 110 Q 80 90, 160 50 T 320 40 T 500 90" fill="none" stroke="#60a5fa" strokeWidth="3" />
                  <path d="M 0 130 Q 80 100, 160 70 T 320 20 T 500 80" fill="none" stroke="#008162" strokeWidth="3.5" />
                  <circle cx="320" cy="20" r="5" fill="#008162" />
                </svg>

                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>9 AM</span>
                  <span>11 AM</span>
                  <span>1 PM</span>
                  <span>3 PM (Peak Time)</span>
                  <span>5 PM</span>
                  <span>7 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 bg-white border border-gray-100 shadow-sm rounded-2xl">
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-800">Weekly Stock Double-Check</h3>
                <p className="text-[11px] text-gray-400">Inventory progress check</p>
              </div>

              <div className="my-2 text-center">
                <span className="text-3xl font-black text-[#008162]">75%</span>
                <p className="text-[10px] text-gray-400 font-semibold">Counted So Far</p>
              </div>

              <div className="pt-3 space-y-2 text-xs border-t border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-400">Cash in Till Registers:</span>
                  <span className="font-bold text-gray-800">$4,850.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">High-Value Items Check:</span>
                  <span className="font-bold text-emerald-600">100% Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="p-5 bg-white border border-gray-100 shadow-sm lg:col-span-2 rounded-2xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800">Things Needing Your Attention Right Now</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-gray-400 border-b border-gray-100">
                      <th className="pb-2">Code</th>
                      <th className="pb-2">Product Name</th>
                      <th className="pb-2">Reason</th>
                      <th className="pb-2 text-right">Action Needed</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y divide-gray-50">
                    <tr>
                      <td className="py-2.5 font-medium text-gray-800">SKU-10335</td>
                      <td>iPhone 15 Pro 128GB</td>
                      <td>Out of Stock</td>
                      <td className="text-right">
                        <span className="text-red-600 font-bold text-[10px] px-2 py-0.5 rounded">Order More</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-gray-800">REQ-8841</td>
                      <td>Dell XPS 13 Laptop</td>
                      <td>15% Discount Request</td>
                      <td className="text-right">
                        <span className="text-amber-600 font-bold text-[10px] px-2 py-0.5 rounded">Approve Discount</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-gray-800">RMA-0412</td>
                      <td>Sony WH-1000XM5</td>
                      <td>Customer Refund Request</td>
                      <td className="text-right">
                        <span className="text-blue-600 font-bold text-[10px] px-2 py-0.5 rounded">Inspect Returned Item</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-2xl">
              <h3 className="mb-3 text-sm font-bold text-gray-800">Top Staff Working Today</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 text-xs border-b border-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 font-bold rounded-full flex items-center justify-center text-[10px]">1</span>
                    <span className="font-medium text-gray-700">Sarah C.</span>
                  </div>
                  <span className="font-bold text-gray-800">$6,420 Sold</span>
                </div>

                <div className="flex items-center justify-between pb-2 text-xs border-b border-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 font-bold rounded-full flex items-center justify-center text-[10px]">2</span>
                    <span className="font-medium text-gray-700">Marcus T.</span>
                  </div>
                  <span className="font-bold text-gray-800">$4,810 Sold</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 font-bold rounded-full flex items-center justify-center text-[10px]">3</span>
                    <span className="font-medium text-gray-700">David K.</span>
                  </div>
                  <span className="font-bold text-gray-800">$3,250 Sold</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-gray-100 mt-6 flex flex-col sm:flex-row justify-between text-[11px] text-gray-400 gap-2">
          <span>Sentinel Software © 2026 - Branch Management Suite</span>
          <span>Connected to Store #4092</span>
        </div>
      </main>
    </div>
  );
}