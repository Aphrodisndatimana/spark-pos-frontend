import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const langMenuRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
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
    <nav className="fixed top-0 left-0 z-50 w-full font-sans text-black transition-colors duration-300 bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand Layout */}
          <div className="flex items-center flex-shrink-0 gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white overflow-hidden shadow-sm">
              <img
                src="/images/logo2.jpg"
                className="object-cover w-full h-full"
                alt="logo"
              />
            </div>
            <Link
              to="/"
              className="font-sans text-xl font-black tracking-tight text-black sm:text-2xl"
            >
              SparkPos
            </Link>
          </div>

          {/* Center Links Layout (Desktop Full Screen-Width Dropdowns) */}
          <div className="items-center hidden gap-6 font-sans xl:gap-8 lg:flex">
            
            <div className="group">
              <Link
                to="/"
                className="text-base xl:text-[17px] font-semibold flex items-center gap-1.5 transition-colors py-6 border-b-2 border-transparent group-hover:border-[#2563eb] text-gray-700 group-hover:text-[#2563eb]"
              >
                <span>Home</span>
              </Link>
            </div>

            {/* 1. PRODUCTS FULL-WIDTH MEGA DROPDOWN */}
            <div
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              className="relative group"
            >
              <button
                type="button"
                className="text-base xl:text-[17px] font-semibold flex items-center gap-1.5 transition-colors py-6 border-b-2 border-transparent group-hover:border-[#2563eb] text-gray-700 group-hover:text-[#2563eb]"
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

              {isProductsOpen && (
                <div className="fixed left-0 top-[72px] w-screen bg-white border-t border-gray-200 shadow-xl z-40 transition-all duration-200 font-sans">
                  <div className="max-w-7xl mx-auto px-8 py-8 max-h-[calc(100vh-72px)] overflow-y-auto">
                    <div className="grid grid-cols-4 gap-8">

                      {/* Column 1: Mobile Devices & Wearables */}
                      <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                          Mobile Devices & Wearables
                        </h3>
                        <div className="space-y-3">
                          <Link to="/products/mobile devices & wearables/smartphones" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Smartphones
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Top flagship & budget models
                              </p>
                            </div>
                          </Link>

                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Tablets
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Portable tech for work & play
                              </p>
                            </div>
                          </Link>

                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Smartwatches
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Track fitness & stay connected
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Computers & Office Tech */}
                      <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                          Computers & Office Tech
                        </h3>
                        <div className="space-y-3">
                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Laptops & Desktops
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                High performance computers
                              </p>
                            </div>
                          </Link>

                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Peripherals & Accessories
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Essential gear for workflow
                              </p>
                            </div>
                          </Link>

                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Printers & Scanners
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Reliable document printing
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Power, Cables & Networking */}
                      <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                          Power, Cables & Networking
                        </h3>
                        <div className="space-y-3">
                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Power Supplies
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Power banks & surge adapters
                              </p>
                            </div>
                          </Link>

                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Networking Equipment
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Fast routers, MiFi & switches
                              </p>
                            </div>
                          </Link>

                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Cables & Converters
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Heavy-duty cords & adapters
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 4: Security & Specialty Electronics */}
                      <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                          Security & Specialty Electronics
                        </h3>
                        <div className="space-y-3">
                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                CCTV & Security
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Smart surveillance systems
                              </p>
                            </div>
                          </Link>

                          <Link to="#" className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Cameras & Audio Gear
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Professional capture & sound
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. RESOURCES FULL-WIDTH MEGA DROPDOWN */}
            <div
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
              className="relative group"
            >
              <button
                type="button"
                className="text-base xl:text-[17px] font-semibold flex items-center gap-1.5 transition-colors py-6 border-b-2 border-transparent group-hover:border-[#2563eb] text-gray-700 group-hover:text-[#2563eb]"
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

              {isResourcesOpen && (
                <div className="fixed left-0 top-[72px] w-screen bg-white border-t border-gray-200 shadow-xl z-40 transition-all duration-200 font-sans">
                  <div className="max-w-7xl mx-auto px-8 py-8 max-h-[calc(100vh-72px)] overflow-y-auto">
                    <div className="grid grid-cols-3 gap-12">

                      {/* Column 1: Stock & Inventory */}
                      <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                          Stock & Inventory
                        </h3>
                        <div className="space-y-4">
                          <Link to="/resources/imei-tracking" className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                IMEI & Serial Tracking
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Track high-value devices from intake to sale
                              </p>
                            </div>
                          </Link>

                          <Link to="#" className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Inter-shop Transfer
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Move inventory between branches with logs
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Repairs & Support */}
                      <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                          Repairs & Support
                        </h3>
                        <div className="space-y-4">
                          <Link to="/resources/repairs" className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5a2 2 0 10-4 0v1H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-2V5a2 2 0 10-4 0v1h-2V5zM9 5h6v1H9V5z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Repairs
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Assign technicians & Pickup SMS alerts
                              </p>
                            </div>
                          </Link>

                          <Link to="#" className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Warranty Manager
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Device claim records & expiry Warning
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Learning */}
                      <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                          Learning Center
                        </h3>
                        <div className="space-y-4">
                          <Link to="/help" className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                Help Center
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Searchable how tos & FAQS
                              </p>
                            </div>
                          </Link>

                          <Link to="/about" className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-black">
                                About Us
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 font-jakarta">
                                Get more information about our site
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Language Selector Dropdown Button */}
            <div className="relative font-sans" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-base xl:text-[17px] font-semibold flex items-center gap-1 border border-transparent pl-1 pr-3 py-3 rounded-xl transition-all cursor-pointer text-gray-700 hover:bg-gray-100 hover:border-gray-200 hover:text-black"
              >
                <img
                  src="/images/globe (1).png"
                  className="object-contain transition-all w-7 h-7"
                  alt="Global Icon"
                />
                <span>{selectedLang}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 opacity-70 ${
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
                <div className="absolute z-50 py-2 mt-2 text-gray-800 -translate-x-1/2 bg-white border border-gray-200 shadow-xl left-1/2 w-44 rounded-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.name)}
                      className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                        selectedLang === lang.name
                          ? 'text-[#2563eb] font-extrabold bg-blue-50/50'
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
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1px] h-6 bg-gray-300 ml-1 mr-2" />

          {/* Action Buttons (Desktop only) */}
          <div className="items-center hidden gap-3 font-sans lg:flex">
            <Link
              to="/login"
              target="_blank"
              className="text-sm xl:text-base font-semibold border px-5 xl:px-8 py-2 xl:py-2.5 rounded-full transition-all text-center bg-white border-gray-300 text-blue-700 hover:bg-gray-50 hover:text-black"
            >
              Login
            </Link>

            <Link
              to="/register"
              target="_blank"
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-5 xl:px-7 py-2 xl:py-2.5 rounded-full text-sm xl:text-base font-semibold shadow-sm transition-all text-center whitespace-nowrap"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white font-sans px-4 pt-4 pb-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 text-base font-bold text-gray-800 hover:bg-gray-100 rounded-lg tracking-tight"
          >
            Home
          </Link>

          {/* Mobile Accordion - Products */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileAccordion('products')}
              className="w-full flex items-center justify-between px-3 py-2.5 text-base font-bold text-gray-800 hover:bg-gray-100 rounded-lg tracking-tight"
            >
              <span>Products</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeMobileMenu === 'products' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeMobileMenu === 'products' && (
              <div className="p-3 mt-2 space-y-4 border border-gray-100 bg-gray-50 rounded-xl">
                
                {/* Mobile Devices & Wearables */}
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                    Mobile Devices & Wearables
                  </p>
                  <div className="space-y-3">
                    <Link to="/products/mobile devices & wearables/smartphones" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Smartphones</div>
                        <p className="text-xs text-gray-500 font-jakarta">Top flagship & budget models</p>
                      </div>
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Tablets</div>
                        <p className="text-xs text-gray-500 font-jakarta">Portable tech for work & play</p>
                      </div>
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Smartwatches</div>
                        <p className="text-xs text-gray-500 font-jakarta">Track fitness & stay connected</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Computers & Office Tech */}
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                    Computers & Office Tech
                  </p>
                  <div className="space-y-3">
                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Laptops & Desktops</div>
                        <p className="text-xs text-gray-500 font-jakarta">High performance computers</p>
                      </div>
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Peripherals & Accessories</div>
                        <p className="text-xs text-gray-500 font-jakarta">Essential gear for workflow</p>
                      </div>
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Printers & Scanners</div>
                        <p className="text-xs text-gray-500 font-jakarta">Reliable document printing</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Power, Cables & Networking */}
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                    Power, Cables & Networking
                  </p>
                  <div className="space-y-3">
                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Power Supplies</div>
                        <p className="text-xs text-gray-500 font-jakarta">Power banks & surge adapters</p>
                      </div>
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Networking Equipment</div>
                        <p className="text-xs text-gray-500 font-jakarta">Fast routers, MiFi & switches</p>
                      </div>
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Cables & Converters</div>
                        <p className="text-xs text-gray-500 font-jakarta">Heavy-duty cords & adapters</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Security & Specialty Electronics */}
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                    Security & Specialty Electronics
                  </p>
                  <div className="space-y-3">
                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">CCTV & Security</div>
                        <p className="text-xs text-gray-500 font-jakarta">Smart surveillance systems</p>
                      </div>
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors">
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Cameras & Audio Gear</div>
                        <p className="text-xs text-gray-500 font-jakarta">Professional capture & sound</p>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Mobile Accordion - Resources */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileAccordion('resources')}
              className="w-full flex items-center justify-between px-3 py-2.5 text-base font-bold text-gray-800 hover:bg-gray-100 rounded-lg tracking-tight"
            >
              <span>Resources</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeMobileMenu === 'resources' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeMobileMenu === 'resources' && (
              <div className="p-3 mt-2 space-y-4 border border-gray-100 bg-gray-50 rounded-xl">
                
                {/* Stock & Inventory */}
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                    Stock & Inventory
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="/resources/imei-tracking"
                      onClick={() => setIsOpen(false)}
                      className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">IMEI & Serial Tracking</div>
                        <p className="text-xs text-gray-500 font-jakarta">Track high-value devices from intake to sale</p>
                      </div>
                    </Link>

                    <Link
                      to="#"
                      onClick={() => setIsOpen(false)}
                      className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Inter-shop Transfer</div>
                        <p className="text-xs text-gray-500 font-jakarta">Move inventory between branches with logs</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Repairs & Support */}
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                    Repairs & Support
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="/resources/repairs"
                      onClick={() => setIsOpen(false)}
                      className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5a2 2 0 10-4 0v1H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-2V5a2 2 0 10-4 0v1h-2V5zM9 5h6v1H9V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Repairs</div>
                        <p className="text-xs text-gray-500 font-jakarta">Assign technicians & Pickup SMS alerts</p>
                      </div>
                    </Link>

                    <Link
                      to="#"
                      onClick={() => setIsOpen(false)}
                      className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Warranty Manager</div>
                        <p className="text-xs text-gray-500 font-jakarta">Device claim records & expiry Warning</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Learning */}
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wider text-blue-600 uppercase font-jakarta">
                    Learning
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="#"
                      onClick={() => setIsOpen(false)}
                      className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Help Center</div>
                        <p className="text-xs text-gray-500 font-jakarta">Searchable how tos & FAQS</p>
                      </div>
                    </Link>

                    <Link
                      to="#"
                      onClick={() => setIsOpen(false)}
                      className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="flex-shrink-0 p-2 text-blue-600 rounded-lg bg-blue-50">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">About Us</div>
                        <p className="text-xs text-gray-500 font-jakarta">Get more information about our site</p>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Mobile Language Selector */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileAccordion('lang')}
              className="w-full flex items-center justify-between px-3 py-2.5 text-base font-bold text-gray-800 hover:bg-gray-100 rounded-lg tracking-tight"
            >
              <div className="flex items-center gap-2">
                <img src="/images/globe (1).png" className="w-5 h-5" alt="Global Icon" />
                <span>Language : {selectedLang}</span>
              </div>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeMobileMenu === 'lang' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeMobileMenu === 'lang' && (
              <div className="py-2 pl-4 pr-2 mt-1 space-y-1 rounded-lg bg-gray-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLangSelect(lang.name);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left py-1.5 text-sm font-semibold ${
                      selectedLang === lang.name ? 'text-[#2563eb]' : 'text-gray-700'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 pt-4 font-sans border-t border-gray-200">
            <Link
              to="/login"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 text-center text-sm font-bold border border-gray-300 rounded-full text-gray-700 bg-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 text-center text-sm font-bold bg-[#2563eb] text-white rounded-full"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}