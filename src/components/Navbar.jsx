import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const langMenuRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'sw', name: 'Swahili' },
    { code: 'rw', name: 'Kinyarwanda' },
  ];

  const handleLangSelect = (langName) => {
    setSelectedLang(langName);
    setIsLangOpen(false);
  };

  const toggleMobileAccordion = (menu) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b font-sans shadow-sm transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#1f2937] border-neutral-800 text-white'
          : 'bg-white border-gray-200 text-black'
      }`}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand Layout */}
          <div className="flex items-center flex-shrink-0 gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white overflow-hidden shadow-sm">
              <img
                src="images/logo.jpg"
                className="object-cover w-full h-full"
                alt="logo"
              />
            </div>
            <Link
              to="/"
              className={`text-xl sm:text-2xl font-black tracking-tight ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              SparkPos
            </Link>
          </div>

          {/* Center Links Layout (Desktop Full Screen-Width Dropdowns) */}
          <div className="items-center hidden gap-6 xl:gap-8 lg:flex">
            
            {/* 1. PRODUCTS FULL-WIDTH MEGA DROPDOWN */}
            <div className="group">
              <button
                type="button"
                className={`text-base xl:text-lg font-bold flex items-center gap-1.5 transition-colors py-6 border-b-2 border-transparent group-hover:border-[#2563eb] ${
                  isDarkMode
                    ? 'text-gray-300 group-hover:text-[#2563eb]'
                    : 'text-gray-700 group-hover:text-[#2563eb]'
                }`}
              >
                <span>Products</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Full Screen-Width Dropdown Bar */}
              <div
                className={`fixed left-0 top-16 sm:top-20 w-screen max-h-[75vh] overflow-y-auto hidden group-hover:block border-b shadow-2xl z-40 transition-all ${
                  isDarkMode
                    ? 'bg-[#1f2937] border-neutral-800 text-white'
                    : 'bg-white border-gray-200 text-gray-800'
                }`}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-4 gap-8">
                    
                    {/* Column 1: Sales & Checkout */}
                    <div className="space-y-4">
                      <span className="text-xs font-black tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                        Sales & Checkout
                      </span>
                      
                      <Link to="/pos" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 transition-all group/item">
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold group-hover/item:text-[#2563eb]">Point of Sale</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Barcode scanning, fast discounts & offline mode</p>
                        </div>
                      </Link>

                      <Link to="/payments-momo" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 transition-all group/item">
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold group-hover/item:text-[#2563eb]">Payments & MoMo</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">MTN MoMo, Airtel, Cards & Split checkout</p>
                        </div>
                      </Link>

                      <Link to="/digital-receipts" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 transition-all group/item">
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold group-hover/item:text-[#2563eb]">Digital Receipts</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Instant SMS, Email, and print formatting</p>
                        </div>
                      </Link>
                    </div>

                    {/* Column 2: Stock & Inventory */}
                    <div className="space-y-4">
                      <span className="text-xs font-black tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                        Stock & Inventory
                      </span>

                      <Link to="/imei-tracking" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 transition-all group/item">
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold group-hover/item:text-[#2563eb]">IMEI & Serial Tracking</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Track high-value devices from intake to sale</p>
                        </div>
                      </Link>

                      <Link to="/inter-shop-transfers" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 transition-all group/item">
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold group-hover/item:text-[#2563eb]">Inter-Shop Transfers</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Move inventory between branches with logs</p>
                        </div>
                      </Link>

                      <Link to="/stock-lending" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 transition-all group/item">
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold group-hover/item:text-[#2563eb]">Stock Lending Desk</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Lend items across nearby shops with history</p>
                        </div>
                      </Link>
                    </div>

                    {/* Column 3: Repairs & Support */}
                    <div className="space-y-4">
                      <span className="text-xs font-black tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                        Repairs & Support
                      </span>

                      <Link to="/repair-tickets" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 transition-all group/item">
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold group-hover/item:text-[#2563eb]">Repair Tickets</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Assign technicians & send pickup SMS alerts</p>
                        </div>
                      </Link>

                      <Link to="/warranty-manager" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 transition-all group/item">
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold group-hover/item:text-[#2563eb]">Warranty Manager</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Device claim records & expiry warnings</p>
                        </div>
                      </Link>
                    </div>

                    {/* Column 4: High-Contrast Side Card for Electronic Product Search */}
                    <div className={`p-6 rounded-3xl flex flex-col justify-between border shadow-sm ${
                      isDarkMode 
                        ? 'bg-neutral-800/80 border-neutral-700' 
                        : 'bg-slate-50 border-slate-200/80'
                    }`}>
                      <div>
                        <div className="w-10 h-10 rounded-2xl bg-[#2563eb] text-white flex items-center justify-center mb-3.5 shadow-md">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <h5 className="text-base font-extrabold text-gray-900 dark:text-white">Electronic Product Lookup</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                          Quickly search electronic stock, check IMEI status, warranties, or device details across stores.
                        </p>
                      </div>

                      <Link 
                        to="/product-lookup" 
                        className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-md active:scale-95"
                      >
                        <span>Search Electronic Stock</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* 2. SOLUTIONS FULL-WIDTH MEGA DROPDOWN */}
            <div className="group">
              <button
                type="button"
                className={`text-base xl:text-lg font-bold flex items-center gap-1.5 transition-colors py-6 border-b-2 border-transparent group-hover:border-[#2563eb] ${
                  isDarkMode
                    ? 'text-gray-300 group-hover:text-[#2563eb]'
                    : 'text-gray-700 group-hover:text-[#2563eb]'
                }`}
              >
                <span>Solutions</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`fixed left-0 top-16 sm:top-20 w-screen max-h-[75vh] overflow-y-auto hidden group-hover:block border-b shadow-2xl z-40 transition-all ${
                  isDarkMode
                    ? 'bg-[#1f2937] border-neutral-800 text-white'
                    : 'bg-white border-gray-200 text-gray-800'
                }`}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="mb-6 pb-4 border-b border-gray-200 dark:border-neutral-800">
                    <h4 className="text-xs font-black tracking-wider text-blue-600 dark:text-blue-400 uppercase">Tailored Retail Solutions</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Customized POS workflows built for your business type.</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <Link to="#" className="p-4 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 border border-transparent hover:border-gray-200 dark:hover:border-neutral-700 transition-all group/item flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-bold group-hover/item:text-[#2563eb]">Electronics & Repair Shops</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Track IMEI codes, technician repair tickets & instant SMS notifications.</p>
                      </div>
                    </Link>

                    <Link to="#" className="p-4 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 border border-transparent hover:border-gray-200 dark:hover:border-neutral-700 transition-all group/item flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-bold group-hover/item:text-[#2563eb]">Multi-Branch Chains</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Manage stock transfers, approve orders & monitor central sales.</p>
                      </div>
                    </Link>

                    <Link to="#" className="p-4 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 border border-transparent hover:border-gray-200 dark:hover:border-neutral-700 transition-all group/item flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-bold group-hover/item:text-[#2563eb]">Mobile Accessories</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Fast checkout, barcode creation, serial tracking & warranty claims.</p>
                      </div>
                    </Link>

                    <Link to="#" className="p-4 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 border border-transparent hover:border-gray-200 dark:hover:border-neutral-700 transition-all group/item flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-bold group-hover/item:text-[#2563eb]">Wholesale Distributors</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Bulk pricing tiers, supplier management & purchase tracking.</p>
                      </div>
                    </Link>

                    <Link to="#" className="p-4 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 border border-transparent hover:border-gray-200 dark:hover:border-neutral-700 transition-all group/item flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-bold group-hover/item:text-[#2563eb]">Computer Retailers</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Custom build logs, part tracking, warranties & trade-ins.</p>
                      </div>
                    </Link>

                    <Link to="#" className="p-4 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-neutral-800 border border-transparent hover:border-gray-200 dark:hover:border-neutral-700 transition-all group/item flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/60 dark:border-blue-800/50 dark:text-blue-400 shrink-0 shadow-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-[#2563eb] group-hover/item:text-white group-hover/item:border-[#2563eb]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-bold group-hover/item:text-[#2563eb]">Mobile Money Agents</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">MoMo float management, agent ledger & commission reports.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. RESOURCES FULL-WIDTH MEGA DROPDOWN */}
            <div className="group">
              <button
                type="button"
                className={`text-base xl:text-lg font-bold flex items-center gap-1.5 transition-colors py-6 border-b-2 border-transparent group-hover:border-[#2563eb] ${
                  isDarkMode
                    ? 'text-gray-300 group-hover:text-[#2563eb]'
                    : 'text-gray-700 group-hover:text-[#2563eb]'
                }`}
              >
                <span>Resources</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`fixed left-0 top-16 sm:top-20 w-screen max-h-[75vh] overflow-y-auto hidden group-hover:block border-b shadow-2xl z-40 transition-all ${
                  isDarkMode
                    ? 'bg-[#1f2937] border-neutral-800 text-white'
                    : 'bg-white border-gray-200 text-gray-800'
                }`}
              >
                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <span className="text-xs font-black tracking-wider text-blue-600 dark:text-blue-400 uppercase">Documentation</span>
                    <Link to="#" className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-semibold">User Manual & Video Guides</Link>
                    <Link to="#" className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-semibold">Hardware Setup Guides</Link>
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs font-black tracking-wider text-blue-600 dark:text-blue-400 uppercase">Learning</span>
                    <Link to="#" className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-semibold">Retail Growth Blog</Link>
                    <Link to="#" className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-semibold">Customer Case Studies</Link>
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs font-black tracking-wider text-blue-600 dark:text-blue-400 uppercase">Support</span>
                    <Link to="#" className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-semibold">REST API Documentation</Link>
                    <Link to="#" className="block p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm font-semibold">Live System Status</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Language Selector Dropdown Button */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`text-base xl:text-lg font-bold flex items-center gap-2 border border-transparent px-3 py-3 rounded-xl transition-all cursor-pointer ${
                  isDarkMode
                    ? 'text-gray-300 hover:bg-neutral-800 hover:border-neutral-700 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:border-gray-200 hover:text-black'
                }`}
              >
                <img
                  src="/images/globe (1).png"
                  className={`object-contain w-5 h-5 transition-all ${
                    isDarkMode ? 'invert brightness-200' : ''
                  }`}
                  alt="Global Icon"
                />
                <span>{selectedLang}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 opacity-70 ${
                    isLangOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div
                  className={`absolute right-0 mt-2 w-44 rounded-xl shadow-xl border py-2 z-50 ${
                    isDarkMode
                      ? 'bg-[#1f2937] border-neutral-700 text-white'
                      : 'bg-white border-gray-200 text-gray-800'
                  }`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.name)}
                      className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                        selectedLang === lang.name
                          ? 'text-[#2563eb] font-extrabold bg-blue-50/50 dark:bg-blue-900/20'
                          : isDarkMode
                          ? 'hover:bg-neutral-800'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {lang.name}
                      {selectedLang === lang.name && (
                        <span className="text-[#2563eb] font-bold">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dynamic Theme Toggle Button */}
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center hover:scale-110 ${
                isDarkMode
                  ? 'hover:bg-neutral-800 text-yellow-400'
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Night Mode'}
            >
              {isDarkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v2.25m0 13.5V21M4.22 4.22l1.591 1.591M16.636 16.636l1.591 1.591M21 12h-2.25m-13.5 0H3m16.545-7.78l-1.591 1.591M6.136 16.636l-1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
          </div>

          {/* Action Buttons (Desktop only) */}
          <div className="items-center hidden gap-3 lg:flex">
            <Link
              to="/login"
              target="_blank"
              className={`text-sm xl:text-base font-bold border px-5 xl:px-8 py-2 xl:py-2.5 rounded-full transition-all text-center ${
                isDarkMode
                  ? 'bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700 hover:text-white'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-black'
              }`}
            >
              Login
            </Link>

            <Link
              to="/register"
              target="_blank"
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-5 xl:px-7 py-2 xl:py-2.5 rounded-full text-sm xl:text-base font-black shadow-sm transition-all text-center whitespace-nowrap"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode ? 'text-yellow-400' : 'text-gray-600'
              }`}
            >
              {isDarkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2.25m0 13.5V21M4.22 4.22l1.591 1.591M16.636 16.636l1.591 1.591M21 12h-2.25m-13.5 0H3m16.545-7.78l-1.591 1.591M6.136 16.636l-1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg cursor-pointer focus:outline-none ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-neutral-800'
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Accordions Drawer */}
      {isOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto ${
            isDarkMode
              ? 'bg-[#1f2937] border-neutral-800 text-white'
              : 'bg-white border-gray-200 text-black'
          }`}
        >
          {/* Mobile Accordion: Products */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileAccordion('products')}
              className="flex items-center justify-between w-full py-2 text-base font-bold text-left hover:text-[#2563eb]"
            >
              <span>Products</span>
              <svg
                className={`w-4 h-4 transition-transform ${activeMobileMenu === 'products' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeMobileMenu === 'products' && (
              <div className="pl-4 py-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <Link to="/product-lookup" className="block py-1 font-bold text-[#2563eb]">🔍 Product / IMEI Lookup</Link>
                <Link to="#" className="block py-1 hover:text-[#2563eb]">Point of Sale & Payments</Link>
                <Link to="#" className="block py-1 hover:text-[#2563eb]">IMEI & Serial Tracking</Link>
                <Link to="#" className="block py-1 hover:text-[#2563eb]">Inter-Shop Transfers</Link>
                <Link to="#" className="block py-1 hover:text-[#2563eb]">Repair Tickets</Link>
              </div>
            )}
          </div>

          {/* Mobile Accordion: Solutions */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileAccordion('solutions')}
              className="flex items-center justify-between w-full py-2 text-base font-bold text-left hover:text-[#2563eb]"
            >
              <span>Solutions</span>
              <svg
                className={`w-4 h-4 transition-transform ${activeMobileMenu === 'solutions' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeMobileMenu === 'solutions' && (
              <div className="pl-4 py-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <Link to="#" className="block py-1 hover:text-[#2563eb]">Electronics & Repairs</Link>
                <Link to="#" className="block py-1 hover:text-[#2563eb]">Multi-Branch Chains</Link>
                <Link to="#" className="block py-1 hover:text-[#2563eb]">Mobile Stores</Link>
              </div>
            )}
          </div>

          {/* Mobile Accordion: Resources */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileAccordion('resources')}
              className="flex items-center justify-between w-full py-2 text-base font-bold text-left hover:text-[#2563eb]"
            >
              <span>Resources</span>
              <svg
                className={`w-4 h-4 transition-transform ${activeMobileMenu === 'resources' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeMobileMenu === 'resources' && (
              <div className="pl-4 py-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <Link to="#" className="block py-1 hover:text-[#2563eb]">User Manual & Guides</Link>
                <Link to="#" className="block py-1 hover:text-[#2563eb]">API Docs</Link>
                <Link to="#" className="block py-1 hover:text-[#2563eb]">Case Studies</Link>
              </div>
            )}
          </div>

          {/* Mobile Language Selector Grid */}
          <div className="pt-3 border-t border-gray-200 dark:border-neutral-800">
            <span className="block mb-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
              Select Language
            </span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleLangSelect(lang.name)}
                  className={`py-2 px-3 text-sm font-bold rounded-lg border text-center transition-all ${
                    selectedLang === lang.name
                      ? 'bg-[#2563eb] text-white border-[#2563eb]'
                      : isDarkMode
                      ? 'bg-neutral-800 border-neutral-700 text-gray-300'
                      : 'bg-gray-50 border-gray-200 text-gray-700'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <hr className={isDarkMode ? 'border-neutral-800' : 'border-gray-200'} />

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <Link
              className={`w-full text-center py-3 text-base font-bold border rounded-full transition-colors ${
                isDarkMode
                  ? 'border-neutral-700 text-white bg-neutral-800 hover:bg-neutral-700'
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
              }`}
              to="/login"
            >
              Login
            </Link>
            <Link
              className="w-full bg-[#2563eb] text-white text-center py-3 rounded-full text-base font-black hover:bg-blue-700 transition-colors"
              to="/register"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}