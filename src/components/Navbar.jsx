import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
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

  // Close language dropdown if user clicks outside
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

          {/* Center Links Layout (Desktop only - 1024px and above) */}
          <div className="items-center hidden gap-6 xl:gap-8 lg:flex">
            <Link
              to="/"
              className={`text-base xl:text-lg font-bold flex items-center gap-1.5 transition-colors px-2 py-1 rounded-md border border-transparent ${
                isDarkMode
                  ? 'text-gray-300 hover:text-[#2563eb]'
                  : 'text-gray-600 hover:text-[#2563eb]'
              }`}
            >
              <span>Features</span>
              <img
                src="/images/down-arrow (1).png"
                className={`w-3.5 h-3.5 object-contain transition-all ${
                  isDarkMode ? 'invert brightness-200' : 'opacity-70'
                }`}
                alt="DropDown Icon"
              />
            </Link>

            <Link
              to="/"
              className={`text-base xl:text-lg font-bold flex items-center gap-1.5 transition-colors px-2 py-1 rounded-md border border-transparent ${
                isDarkMode
                  ? 'text-gray-300 hover:text-[#2563eb]'
                  : 'text-gray-600 hover:text-[#2563eb]'
              }`}
            >
              <span>Solutions</span>
              <img
                src="/images/down-arrow (1).png"
                className={`w-3.5 h-3.5 object-contain transition-all ${
                  isDarkMode ? 'invert brightness-200' : 'opacity-70'
                }`}
                alt="DropDown Icon"
              />
            </Link>

            <Link
              to="#"
              className={`text-base xl:text-lg font-bold flex items-center gap-1.5 transition-colors px-2 py-1 rounded-md border border-transparent ${
                isDarkMode
                  ? 'text-gray-300 hover:text-[#2563eb]'
                  : 'text-gray-600 hover:text-[#2563eb]'
              }`}
            >
              <span>Resources</span>
              <img
                src="/images/down-arrow (1).png"
                className={`w-3.5 h-3.5 object-contain transition-all ${
                  isDarkMode ? 'invert brightness-200' : 'opacity-70'
                }`}
                alt="DropDown Icon"
              />
            </Link>

            {/* Language Selector Dropdown Button */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`text-base xl:text-lg font-bold flex items-center gap-2 border border-transparent px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  isDarkMode
                    ? 'text-gray-300 hover:bg-neutral-800 hover:border-neutral-700 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:border-gray-200 hover:text-black'
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
                <img
                  src="/images/down-arrow (1).png"
                  className={`w-3.5 h-3.5 object-contain transition-all duration-200 ${
                    isDarkMode ? 'invert brightness-200' : 'opacity-70'
                  } ${isLangOpen ? 'rotate-180' : ''}`}
                  alt="DropDown Icon"
                />
              </button>

              {/* Dropdown Menu */}
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
              title={
                isDarkMode ? 'Switch to Light Mode' : 'Switch to Night Mode'
              }
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m0 13.5V21M4.22 4.22l1.591 1.591M16.636 16.636l1.591 1.591M21 12h-2.25m-13.5 0H3m16.545-7.78l-1.591 1.591M6.136 16.636l-1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Action Buttons (Desktop only - 1024px and above) */}
          <div className="items-center hidden gap-3 lg:flex">
            <Link
              to="/login"
              target="_blank"
              className={`text-sm xl:text-base font-bold border px-5 xl:px-8 py-2 xl:py-2.5 rounded-full transition-all text-center ${
                isDarkMode
                  ? 'bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700 hover:text-white'
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-black'
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

          {/* Mobile & Tablet Hamburger Toggle (Shows on screens under 1024px) */}
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
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Drawer (Shows under 1024px) */}
      {isOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-4 shadow-xl ${
            isDarkMode
              ? 'bg-[#1f2937] border-neutral-800 text-white'
              : 'bg-white border-gray-200 text-black'
          }`}
        >
          <Link to="#" className="block py-2 text-base font-bold hover:text-[#2563eb]">
            Features
          </Link>
          <Link to="#" className="block py-2 text-base font-bold hover:text-[#2563eb]">
            Solutions
          </Link>
          <Link to="#" className="block py-2 text-base font-bold hover:text-[#2563eb]">
            Resources
          </Link>

          {/* Mobile & Tablet Language Selector Grid */}
          <div className="pt-2 border-t border-gray-200 dark:border-neutral-800">
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