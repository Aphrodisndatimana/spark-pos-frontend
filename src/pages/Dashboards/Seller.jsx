import React, { useState } from 'react';

export default function SellerDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Product');

  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-800 font-sans">
      
      {/* ================= MOBILE OVERLAY ================= */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out md:static md:translate-x-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo Section */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-md shadow-blue-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-gray-900 leading-tight">Shop Center</h1>
                <span className="text-xs text-gray-400 font-medium">Seller Center</span>
              </div>
            </div>
            {/* Close button for mobile */}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          {/* Navigation Categories (Removed flex-1 to eliminate bottom dead space) */}
          <div className="px-4 py-4 space-y-4">
            
            {/* Menu Category */}
            <div>
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Menu</p>
              <nav className="space-y-1">
                <a href="#dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white bg-blue-600 shadow-md shadow-blue-200 font-medium text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                  Dashboard
                </a>
                <a href="#products" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                  Products
                </a>
                <a href="#orders" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                  Orders
                </a>
                <a href="#customers" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                  Customers
                </a>
                <a href="#promotions" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 16h14"/></svg>
                  Promotions
                </a>
                <a href="#marketing" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>
                  Marketing
                </a>
                <a href="#analytics" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                  Analytics
                </a>
              </nav>
            </div>

            {/* Account / General Category */}
            <div>
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account & General</p>
              <nav className="space-y-1">
                <a href="#finance" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Finance
                </a>
                <a href="#help" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Get Help
                </a>
                <a href="#settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Settings
                </a>
              </nav>

              {/* Logout with controllable margin-top */}
              <div className="mt-6 pt-2 border-t border-gray-100">
                <a href="#logout" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                  Logout
                </a>
              </div>
            </div>

          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-600 bg-gray-50 rounded-xl hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
            <div>
              <p className="text-xs text-gray-500">Good morning, Aphro</p>
              <h2 className="text-sm sm:text-lg font-bold text-gray-900">Welcome to Shop Center</h2>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search Box */}
            <div className="relative hidden lg:block w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search Anything" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>

            {/* Notification Bell */}
            <button className="relative p-2.5 text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
            </button>

            {/* Profile Dropdown */}
            <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
              <img 
                src="/images/barthel-joseph-BVjRSascVEs-unsplash.jpg" 
                alt="A. Ndatimana" 
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-bold text-gray-900 leading-tight">A. Ndatimana</p>
                <span className="text-xs text-gray-400">aphrodisndatimana123@gmail.com</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Main Content Body */}
        <main className="p-4 sm:p-8 space-y-6">
          
          {/* Dashboard Title Banner with Tabs & Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-black text-gray-900">My Dashboard</h1>
              <p className="text-xs sm:text-sm text-gray-400">Your recent transactions activity and all</p>
              
              {/* Product / Customer Tabs */}
              <div className="flex gap-6 pt-3 border-b border-gray-100">
                <button 
                  onClick={() => setActiveTab('Product')}
                  className={`pb-2 text-sm font-bold relative transition-colors ${activeTab === 'Product' ? 'text-purple-900' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Product
                  {activeTab === 'Product' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-900 rounded-t-full"></span>}
                </button>
                <button 
                  onClick={() => setActiveTab('Customer')}
                  className={`pb-2 text-sm font-bold relative transition-colors ${activeTab === 'Customer' ? 'text-purple-900' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Customer
                  {activeTab === 'Customer' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-900 rounded-t-full"></span>}
                </button>
              </div>
            </div>

            {/* Date Selector & Filter Buttons */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl text-xs font-semibold text-gray-700">
                📅 January 23 <span>▼</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl text-xs font-semibold text-gray-700">
                🎛️ Filter
              </div>
            </div>
          </div>

          {/* Top Metric Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Total Products */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-500">Total Products</span>
                <h3 className="text-2xl font-black text-gray-900">8,98,879</h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  + 1500 New Added
                </span>
              </div>
              <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
            </div>

            {/* Card 2: Total Sales */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-500">Total Sales</span>
                <h3 className="text-2xl font-black text-gray-900">$32,000.89</h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  📈 7.8% Growth
                </span>
              </div>
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              </div>
            </div>

            {/* Card 3: Total Profit */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-500">Total Profit</span>
                <h3 className="text-2xl font-black text-gray-900">$5000.15</h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  ↑ 5.4% Increase
                </span>
              </div>
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
            </div>

          </div>

          {/* Middle Row Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Revenue Statements Bar Chart */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm lg:col-span-1 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900">Revenue Statements</h4>
                <button className="text-gray-400 hover:text-gray-600 font-bold">...</button>
              </div>
              <div className="h-44 flex items-end justify-between gap-2 pt-4 px-2 border-b border-gray-100">
                {[45, 60, 50, 75, 85, 90, 45, 30, 65, 40, 70, 35].map((val, idx) => (
                  <div key={idx} className="w-full bg-purple-100 rounded-t-md relative h-full flex items-end">
                    <div style={{ height: `${val}%` }} className="w-full bg-purple-800 rounded-t-md"></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 px-1">
                {['Ja', 'Fb', 'Mr', 'Ap', 'My', 'Jn', 'Jl', 'Ag', 'Sp', 'Oc', 'Nv', 'Dc'].map(m => <span key={m}>{m}</span>)}
              </div>
            </div>

            {/* Analytics Donut Chart */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-between">
              <div className="w-full flex items-center justify-between">
                <h4 className="font-bold text-gray-900">Analytics</h4>
                <button className="text-gray-400 hover:text-gray-600 font-bold">...</button>
              </div>
              
              <div className="relative w-36 h-36 rounded-full border-8 border-purple-100 flex items-center justify-center my-2">
                <div className="absolute inset-0 rounded-full border-8 border-purple-900 border-t-transparent -rotate-45"></div>
                <span className="text-xl font-black text-gray-900">80%</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-purple-900 rounded-full"></span> Buy</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-purple-100 rounded-full"></span> Sell</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-gray-800 rounded-full"></span> Overlap</span>
              </div>
            </div>

            {/* Access Request Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">David asked for the edit access of products</h4>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">📅 12 Jan 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button className="flex-1 bg-purple-900 hover:bg-purple-800 text-white font-medium py-2 rounded-xl text-xs transition-colors shadow-md shadow-purple-200">
                  Grant Access
                </button>
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2 rounded-xl text-xs border border-gray-200 transition-colors">
                  Cancel
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Row Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Team Members List */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <h4 className="font-bold text-gray-900">Team</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Lottie" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-sm text-gray-900">Lottie</p>
                      <span className="text-[11px] text-gray-400">laboanovskiy@gmail.com</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 bg-purple-900 text-white rounded-xl flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                  </button>
                </div>

                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Adam" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-sm text-gray-900">Adam</p>
                      <span className="text-[11px] text-gray-400">uixsantusdatta@gmail.com</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 bg-purple-900 text-white rounded-xl flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Add a Product Call-to-Action Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-14 h-14 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900">Add a Product?</h4>
                <p className="text-xs text-gray-400 px-4">Add products to your store and start selling to see orders here.</p>
              </div>
              <button className="bg-purple-900 hover:bg-purple-800 text-white font-medium px-6 py-2.5 rounded-xl text-xs transition-colors shadow-md shadow-purple-200 flex items-center gap-2">
                <span className="text-base leading-none">+</span> New Product
              </button>
            </div>

            {/* Recent Orders Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900">Recent Orders</h4>
                <div className="flex gap-1">
                  <button className="p-1 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs">&lt;</button>
                  <button className="p-1 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 text-xs">&gt;</button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg p-1 border border-gray-200 flex items-center justify-center">
                      <span className="text-[10px] font-bold">📱</span>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-gray-900">iPhone 14 Pro Max</p>
                      <span className="text-[11px] text-gray-500">$2400 X 3</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 block mb-1">12 Dec 2022</span>
                    <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Pending</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg p-1 border border-gray-200 flex items-center justify-center">
                      <span className="text-[10px] font-bold">🎧</span>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-gray-900">Airdot</p>
                      <span className="text-[11px] text-gray-500">$49 X 1</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 block mb-1">10 Dec 2022</span>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Completed</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg p-1 border border-gray-200 flex items-center justify-center">
                      <span className="text-[10px] font-bold">🎧</span>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-gray-900">Headphone</p>
                      <span className="text-[11px] text-gray-500">$153 X 2</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 block mb-1">09 Dec 2022</span>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Completed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>

    </div>
  );
}