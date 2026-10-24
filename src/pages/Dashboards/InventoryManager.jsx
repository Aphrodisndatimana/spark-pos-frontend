import React, { useState } from 'react';

export default function InventoryDashboard() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [openSubmenus, setOpenSubmenus] = useState({
    Inventory: true,
    Purchases: false,
    'Stock Transfers': false
  });

  const toggleSubmenu = (menuKey) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const handleMenuClick = (id) => {
    setActiveMenu(id);
  };

  const menuSections = [
    {
      id: 'Inventory',
      label: 'Inventory',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      subItems: [
        { id: 'Products', label: 'Products' },
        { id: 'Categories', label: 'Categories' },
        { id: 'Brands', label: 'Brands' },
        { id: 'Stock List', label: 'Stock List' },
        { id: 'Low Stock', label: 'Low Stock' },
        { id: 'Stock Adjustments', label: 'Stock Adjustments' },
        { id: 'IMEI/Serial Tracking', label: 'IMEI/Serial Tracking' }
      ]
    },
    {
      id: 'Purchases',
      label: 'Purchases',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      subItems: [
        { id: 'Purchase Orders', label: 'Purchase Orders' },
        { id: 'Suppliers', label: 'Suppliers' },
        { id: 'Goods Received', label: 'Goods Received' },
        { id: 'Purchase Returns', label: 'Purchase Returns' }
      ]
    },
    {
      id: 'Stock Transfers',
      label: 'Stock Transfers',
      icon: (
        <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      subItems: [
        { id: 'Create Transfer', label: 'Create Transfer' },
        { id: 'Transfer Requests', label: 'Transfer Requests' },
        { id: 'Transfer History', label: 'Transfer History' }
      ]
    }
  ];

  return (
    <div className="w-screen h-screen bg-[#008162] font-sans flex flex-col md:flex-row overflow-hidden">
      
      {/* SIDEBAR */}
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
              Sentinel<span className="font-normal text-emerald-200">Inventory</span>
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1.5">
            {/* Main Dashboard Link */}
            <button
              onClick={() => handleMenuClick('Dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeMenu === 'Dashboard'
                  ? 'bg-white text-[#008162] shadow-md font-bold'
                  : 'text-emerald-100 hover:bg-[#007055]'
              }`}
            >
              <svg className="flex-shrink-0 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Dashboard Overview</span>
            </button>

            {menuSections.map((section) => {
              const isOpen = openSubmenus[section.id];
              const isSectionActive = activeMenu === section.id;

              return (
                <div key={section.id} className="w-full">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleSubmenu(section.id)}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                      isSectionActive
                        ? 'bg-white text-[#008162] shadow-md font-bold'
                        : 'text-emerald-100 hover:bg-[#007055]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {section.icon}
                      <span>{section.label}</span>
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
                      {section.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleMenuClick(sub.id)}
                          className={`w-full text-left px-3 py-2.5 text-xs rounded-lg transition-colors whitespace-nowrap ${
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
            })}
          </nav>
        </div>

        {/* Footer Support & Logout */}
        <div className="mt-6 space-y-3">
          <div className="pt-2 border-t border-emerald-700/60">
            <button
              onClick={() => handleMenuClick('Logout')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
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
            <p className="text-xs font-semibold text-emerald-100">Warehouse Support</p>
            <p className="text-[10px] text-emerald-300 mt-0.5 cursor-pointer hover:underline">Contact System Admin</p>
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
                Current View: <span className="text-blue-600">{activeMenu}</span>
              </h1>
              <p className="text-sm font-normal text-slate-400 mt-0.5">
                Central Warehouse & Stock Control Station
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
                  placeholder="Search SKU, Serial No, or Purchase Order..."
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
                    alt="Manager Profile"
                    className="object-cover border rounded-full shadow-sm w-9 h-9 border-slate-200"
                  />
                  <span className="text-sm font-semibold transition text-slate-800 group-hover:text-blue-600">
                    Inventory Lead
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4 my-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
              <span className="text-xs font-bold text-gray-400 uppercase">Total Items</span>
              <p className="mt-1 text-2xl font-extrabold text-gray-800">12,480</p>
              <span className="text-[10px] text-emerald-600 font-medium">142 Categories</span>
            </div>

            <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
              <span className="text-xs font-bold text-gray-400 uppercase">Low Stock Alert</span>
              <p className="mt-1 text-2xl font-extrabold text-red-500">18 Items</p>
              <span className="text-[10px] text-red-500 font-medium">Reorder required</span>
            </div>

            <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
              <span className="text-xs font-bold text-gray-400 uppercase">Pending POs</span>
              <p className="mt-1 text-2xl font-extrabold text-amber-500">6 Orders</p>
              <span className="text-[10px] text-amber-600 font-medium">Awaiting delivery</span>
            </div>

            <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
              <span className="text-xs font-bold text-gray-400 uppercase">Active Transfers</span>
              <p className="mt-1 text-2xl font-extrabold text-blue-600">4 In Transit</p>
              <span className="text-[10px] text-blue-600 font-medium">Branch to branch</span>
            </div>
          </div>

          {/* Recent Inventory Table */}
          <div className="p-5 my-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-800">Low Stock & Reorder Watchlist</h3>
              <button className="text-xs text-[#008162] font-semibold hover:underline">View All Low Stock</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-100">
                    <th className="pb-3">SKU</th>
                    <th className="pb-3">Product</th>
                    <th className="pb-3">Brand</th>
                    <th className="pb-3">In Stock</th>
                    <th className="pb-3">Min Threshold</th>
                    <th className="pb-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y divide-gray-50">
                  <tr>
                    <td className="py-3 font-medium text-gray-800">SKU-9921</td>
                    <td>MacBook Air M2 256GB</td>
                    <td>Apple</td>
                    <td className="font-bold text-red-600">2 units</td>
                    <td>10 units</td>
                    <td className="text-right">
                      <span className="bg-red-50 text-red-600 px-2 py-1 rounded font-semibold text-[10px]">Critical</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-800">SKU-4412</td>
                    <td>Samsung Galaxy S24 Ultra</td>
                    <td>Samsung</td>
                    <td className="font-bold text-amber-600">5 units</td>
                    <td>15 units</td>
                    <td className="text-right">
                      <span className="bg-amber-50 text-amber-600 px-2 py-1 rounded font-semibold text-[10px]">Low</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-800">SKU-8823</td>
                    <td>Logitech MX Master 3S</td>
                    <td>Logitech</td>
                    <td className="font-bold text-amber-600">4 units</td>
                    <td>12 units</td>
                    <td className="text-right">
                      <span className="bg-amber-50 text-amber-600 px-2 py-1 rounded font-semibold text-[10px]">Low</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-gray-100 mt-6 flex flex-col sm:flex-row justify-between text-[11px] text-gray-400 gap-2">
          <span>Sentinel Inventory Management System © 2026</span>
          <span>Central Stock Node #01</span>
        </div>
      </main>
    </div>
  );
}