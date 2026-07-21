import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b font-sans shadow-sm transition-colors duration-300 ${
      isDarkMode ? 'bg-[#1f2937] border-neutral-800 text-white' : 'bg-white border-gray-200 text-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Layout */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white overflow-hidden shadow-sm">
              <img src="images/logo.jpg" className="w-full h-full object-cover" alt="logo"/>
            </div>
            <span className={`text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
              SparkPos
            </span>
          </div>

          {/* Center Links Layout */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="#" className={`text-lg font-bold flex items-center gap-2 transition-colors ${
              isDarkMode ? 'text-gray-300 hover:text-[#2563eb]' : 'text-gray-500 hover:text-[#2563eb]'
            }`}>
              <span>Features</span>
              <img src="/images/down-arrow (1).png" className="w-3.5 h-3.5 object-contain opacity-70 filter invert-[0.3]" alt="DropDown Icon"/>
            </Link>

            <Link to="#" className={`text-lg font-bold flex items-center gap-2 transition-colors ${
              isDarkMode ? 'text-gray-300 hover:text-[#2563eb]' : 'text-gray-500 hover:text-[#2563eb]'
            }`}>
              <span>Solutions</span>
              <img src="/images/down-arrow (1).png" className="w-3.5 h-3.5 object-contain opacity-70 filter invert-[0.3]" alt="DropDown Icon"/>
            </Link>

            <Link to="#" className={`text-lg font-bold flex items-center gap-2 transition-colors ${
              isDarkMode ? 'text-gray-300 hover:text-[#2563eb]' : 'text-gray-500 hover:text-[#2563eb]'
            }`}>
              <span>Resources</span>
              <img src="/images/down-arrow (1).png" className="w-3.5 h-3.5 object-contain opacity-70 filter invert-[0.3]" alt="DropDown Icon"/>
            </Link>

            <Link to="#" className={`text-lg font-bold flex items-center gap-2 transition-colors ${
              isDarkMode ? 'text-gray-300 hover:text-[#2563eb]' : 'text-gray-500 hover:text-[#2563eb]'
            }`}>
              <img src="/images/globe (1).png" className="w-5 h-5 object-contain" alt="Global Icon"/>
              <span>English</span>
              <img src="/images/down-arrow (1).png" className="w-3.5 h-3.5 object-contain opacity-70 filter invert-[0.3]" alt="DropDown Icon"/>
            </Link>

            {/* Dynamic SVG Theme Toggle Button */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center hover:scale-110 ${
                isDarkMode ? 'hover:bg-neutral-700 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'
              }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Night Mode"}
            >
              {isDarkMode ? (
                /* Bright / Sun Mode SVG Icon */
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.5} 
                  stroke="currentColor" 
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.591 1.591M16.636 16.636l1.591 1.591M21 12h-2.25m-13.5 0H3m16.545-7.78l-1.591 1.591M6.136 16.636l-1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>
              ) : (
                /* Night / Moon Mode SVG Icon */
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.5} 
                  stroke="currentColor" 
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to='/login' 
              target='_blank' 
              className={`text-base font-bold border px-8 py-2.5 rounded-full transition-all text-center min-w-[125px] ${
                isDarkMode 
                  ? 'bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700 hover:text-white' 
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-black'
              }`}
            >
              Login
            </Link>
            
            <Link 
              to='/register' 
              target='_blank' 
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-7 py-3 rounded-full text-base font-black shadow-sm transition-all text-center whitespace-nowrap"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Display Hamburger Trigger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-500 hover:text-black focus:outline-none cursor-pointer">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Mobile Accordion Menu */}
      {isOpen && (
        <div className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 shadow-inner ${
          isDarkMode ? 'bg-[#1f2937] border-neutral-800' : 'bg-white border-gray-200'
        }`}>
          <Link to="#" className="block py-2 text-base font-bold">Features</Link>
          <Link to="#" className="block py-2 text-base font-bold">Solutions</Link>
          <Link to="#" className="block py-2 text-base font-bold">Resources</Link>
          
          {/* Mobile Theme Toggle Row */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className={`w-full text-left py-3 px-2 text-base font-bold flex items-center gap-3 rounded-lg transition-colors ${
              isDarkMode ? 'text-yellow-400 hover:bg-neutral-800' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {isDarkMode ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.591 1.591M16.636 16.636l1.591 1.591M21 12h-2.25m-13.5 0H3m16.545-7.78l-1.591 1.591M6.136 16.636l-1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <span>Night Mode</span>
              </>
            )}
          </button>

          <hr className={isDarkMode ? 'border-neutral-700' : 'border-gray-200'} />
          <div className="flex flex-col gap-3 pt-1">
            <Link className={`w-full text-center py-3 text-base font-bold border rounded-full ${
              isDarkMode ? 'border-neutral-700 text-white bg-neutral-800' : 'border-gray-300 text-gray-600 bg-white'
            }`} to='/login'>
              Login
            </Link>
            <Link className="w-full bg-[#2563eb] text-white text-center py-3 rounded-md text-base font-black" to='/register'>
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}