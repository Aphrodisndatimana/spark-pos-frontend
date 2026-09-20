import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import PRODUCTS from '../../components/reusable-js/products';

// --- High-Quality Brand Logo SVG Component ---
const BrandLogo = ({ brand, isDarkMode }) => {
  const iconClass = `fill-current w-7 h-7 ${isDarkMode ? 'text-white' : 'text-slate-900'}`;

  switch (brand) { 
    case 'apple':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-label="Apple logo">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.3c.63-.78 1.07-1.85.95-2.92-.92.04-2.07.62-2.73 1.39-.59.68-1.1 1.77-.96 2.82 1.03.08 2.11-.51 2.74-1.29z" />
        </svg>
      );

    case 'android':
    case 'samsung':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-label="Android logo">
          <path d="M17.5 12a.5.5 0 110-1 .5.5 0 010 1zm-11 0a.5.5 0 110-1 .5.5 0 010 1zm10.93-4.88l1.41-2.44a.42.42 0 00-.15-.57.42.42 0 00-.57.15l-1.44 2.49A9.12 9.12 0 0012 5.5a9.12 9.12 0 00-5.18 1.25L5.38 4.26a.42.42 0 00-.57-.15.42.42 0 00-.15.57l1.41 2.44C3.82 8.58 2.25 11.14 2 14.1h20c-.25-2.96-1.82-5.52-4.57-6.98z" />
        </svg>
      );

    case 'google':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-label="Google logo">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      );

    default:
      return null;
  }
};

// --- Main Product Catalog Component ---
export default function ProductCatalog({ isDarkMode, setIsDarkMode }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div 
      className={`flex flex-col min-h-screen antialiased transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-slate-800'
      }`}
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      
      {/* 1. Navbar Container with Sticky positioning */}
      <header className="sticky top-0 z-50 w-full shadow-sm">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>

      {/* 2. Promotional Banner */}
      <div className={`w-full py-5 mt-16 sm:mt-20 text-sm font-semibold tracking-widest text-center uppercase sm:text-base ${
        isDarkMode ? 'bg-neutral-800 text-blue-400' : 'bg-black text-white'
      }`}>
        THE UP-TO-30%-OFF EDIT
      </div>

      {/* 3. Main Catalog Area */}
      <main className="flex-grow w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className={`flex items-center mb-6 space-x-2 text-base ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
          <Link to="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          <Link to="#products" className="hover:underline">Products</Link>
          <span>&gt;</span>
          <Link to="#mobile" className="hover:underline">Mobile Device & Wearable</Link>
          <span>&gt;</span>
          <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Smart Phones</span>
        </nav>

        {/* Filter & Search Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          
          {/* Sort Button */}
          <button className={`flex items-center justify-center gap-3 px-6 py-3 text-base font-medium transition-colors border rounded-md cursor-pointer ${
            isDarkMode ? 'bg-neutral-800 border-neutral-700 text-gray-200 hover:bg-neutral-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}>
            <span>Sort</span>
            <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>

          {/* Filter Button */}
          <button className={`flex items-center justify-center gap-3 px-6 py-3 text-base font-medium transition-colors border rounded-md cursor-pointer ${
            isDarkMode ? 'bg-neutral-800 border-neutral-700 text-gray-200 hover:bg-neutral-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}>
            <span>Filter</span>
            <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>

          {/* Expanded Search Box Container */}
          <div className={`flex flex-1 min-w-[320px] sm:max-w-3xl border rounded-lg overflow-hidden ${
            isDarkMode ? 'bg-neutral-800/80 border-neutral-700' : 'bg-slate-100/70 border-slate-200'
          }`}>
            <select className={`px-4 py-3 text-base font-medium bg-transparent border-r outline-none cursor-pointer ${
              isDarkMode ? 'text-gray-300 border-neutral-700' : 'text-slate-600 border-slate-200'
            }`}>
              <option className={isDarkMode ? 'bg-neutral-900 text-white' : ''}>All Products</option>
              <option className={isDarkMode ? 'bg-neutral-900 text-white' : ''}>Smartphones</option>
            </select>
            
            <div className="relative flex items-center flex-grow">
              <input
                type="text"
                placeholder="Search for items and brands"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3 text-base bg-transparent outline-none placeholder-slate-400 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}
              />
              <button className={`pr-4 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Icons: Wishlist & Cart */}
          <div className="flex items-center gap-3 ml-auto">
            <button className={`p-2 transition-colors rounded-lg cursor-pointer ${
              isDarkMode ? 'text-gray-300 hover:text-white hover:bg-neutral-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
            }`} aria-label="Wishlist">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            </button>

            <button className={`p-2 transition-colors rounded-lg cursor-pointer ${
              isDarkMode ? 'text-gray-300 hover:text-white hover:bg-neutral-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
            }`} aria-label="Cart">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 mb-2 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              to={`/products/mobile-devices-and-wearables/smartphones/productdetail/${product.id}`}
              className={`group relative flex flex-col justify-between max-w-[360px] min-h-[430px] w-full mx-auto p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-[#1e293b] border-slate-700 hover:border-slate-500 shadow-slate-900/50' 
                  : 'bg-white border-sky-200 hover:border-sky-400 shadow-sky-100/60'
              }`}
            >
              {/* Wishlist Heart Icon */}
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Add your wishlist toggle logic here
                }}
                className={`absolute top-5 right-5 z-10 p-1.5 transition-transform duration-200 hover:scale-110 ${
                  isDarkMode ? 'text-slate-300 hover:text-red-400' : 'text-slate-700 hover:text-red-500'
                }`}
                aria-label="Add to wishlist"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
              </button>

              {/* Product Image Container */}
              <div className="flex items-center justify-center w-full h-64 my-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col items-center mt-2 text-center">
                <h3 className={`mb-4 text-lg font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {product.name}
                </h3>

                {/* Price and Brand Logo */}
                <div className="flex items-center justify-between w-full px-2 pt-2">
                  <span className="font-bold text-sky-400 text-[16px]">
                    {product.price}
                  </span>
                  <BrandLogo brand={product.brand} isDarkMode={isDarkMode} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Pagination Section */}
        <div className="flex flex-col items-center justify-center my-10 space-y-3">
          <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
            You've viewed <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>72</span> of <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>3,907</span> products
          </p>
          <div className={`w-56 h-1.5 overflow-hidden rounded-full ${isDarkMode ? 'bg-neutral-800' : 'bg-slate-200'}`}>
            <div className="w-1/6 h-full bg-blue-500"></div>
          </div>
          
          <button className={`px-20 py-4 mt-2 text-base font-medium tracking-wider transition-colors border rounded cursor-pointer ${
            isDarkMode 
              ? 'bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700' 
              : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
          }`}>
            Load More
          </button>
        </div>

      </main>

      {/* 4. Imported Footer Component */}
      <Footer />

    </div>
  );
}