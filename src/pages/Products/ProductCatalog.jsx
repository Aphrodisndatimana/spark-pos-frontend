import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// --- Sample Product Data ---
const PRODUCTS = [
  {
    id: 1,
    name: 'iPhone 15',
    price: '320000 RFW',
    rating: 5,
    brand: 'apple',
    image: '/images/products/iphones/i phone 15.jpg',
  },
  {
    id: 2,
    name: 'iPhone 17 pro',
    price: '450000 RFW',
    rating: 0,
    brand: 'apple',
    image: '/images/products/iphones/i phone pro 17.jpg',
  },
  {
    id: 3,
    name: 'Samsung Galaxy s26 ultra',
    price: '520000 RFW',
    rating: 5,
    brand: 'android',
    image: '/images/products/samsung/samsung galaxy s26 ultra.jpg',
  },
  {
    id: 4,
    name: 'Samsung s24',
    price: '278000 RFW',
    rating: 0,
    brand: 'android',
    image: '/images/products/samsung/samsung galaxy s26 ultra.jpg',
  },
  {
    id: 5,
    name: 'Google Pixel 10',
    price: '345000 RFW',
    rating: 5,
    brand: 'google',
    image: '/images/products/google/Google Pixel 10.jpg',
  },
  {
    id: 6,
    name: 'Google Pixel 9 Pro',
    price: '120000 RFW',
    rating: 0,
    brand: 'google',
    image: '/images/products/google/Google Pixel 9 Pro.jpg',
  },
];

// --- High-Quality Brand Logo SVG Component ---
const BrandLogo = ({ brand }) => {
  switch (brand) {
    case 'apple':
      return (
        <svg 
          className="fill-current w-7 h-7 text-slate-900" 
          viewBox="0 0 24 24" 
          aria-label="Apple logo"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.3c.63-.78 1.07-1.85.95-2.92-.92.04-2.07.62-2.73 1.39-.59.68-1.1 1.77-.96 2.82 1.03.08 2.11-.51 2.74-1.29z" />
        </svg>
      );

    case 'android':
    case 'samsung':
      return (
        <svg 
          className="fill-current w-7 h-7 text-slate-900" 
          viewBox="0 0 24 24" 
          aria-label="Android logo"
        >
          <path d="M17.5 12a.5.5 0 110-1 .5.5 0 010 1zm-11 0a.5.5 0 110-1 .5.5 0 010 1zm10.93-4.88l1.41-2.44a.42.42 0 00-.15-.57.42.42 0 00-.57.15l-1.44 2.49A9.12 9.12 0 0012 5.5a9.12 9.12 0 00-5.18 1.25L5.38 4.26a.42.42 0 00-.57-.15.42.42 0 00-.15.57l1.41 2.44C3.82 8.58 2.25 11.14 2 14.1h20c-.25-2.96-1.82-5.52-4.57-6.98z" />
        </svg>
      );

    case 'google':
      return (
        <svg 
          className="fill-current w-7 h-7 text-slate-900" 
          viewBox="0 0 24 24" 
          aria-label="Google logo"
        >
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      );

    default:
      return null;
  }
};

// --- Main Product Catalog Component ---
export default function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div 
      className="flex flex-col min-h-screen antialiased bg-white text-slate-800"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      
      {/* 1. Navbar Container with Sticky positioning to prevent hiding content */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <Navbar />
      </header>

      {/* 2. Promotional Banner (UNCHANGED) */}
      <div className="w-full py-5 mt-20 text-sm font-semibold tracking-widest text-center text-white uppercase bg-black sm:text-base">
        THE UP-TO-30%-OFF EDIT
      </div>

      {/* 3. Main Catalog Area */}
      <main className="flex-grow w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation - Increased text to text-base */}
        <nav className="flex items-center mb-6 space-x-2 text-base text-slate-600">
          <a href="#home" className="hover:underline">Home</a>
          <span className="text-slate-400">&gt;</span>
          <a href="#products" className="hover:underline">Products</a>
          <span className="text-slate-400">&gt;</span>
          <a href="#mobile" className="hover:underline">Mobile Device & Wearable</a>
          <span className="text-slate-400">&gt;</span>
          <span className="font-semibold text-slate-900">Smart Phones</span>
        </nav>

        {/* Filter & Search Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          
          {/* Sort Button */}
          <button className="flex items-center justify-center gap-3 px-6 py-3 text-base font-medium transition-colors bg-white border rounded-md text-slate-700 border-slate-200 hover:bg-slate-50">
            <span>Sort</span>
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>

          {/* Filter Button */}
          <button className="flex items-center justify-center gap-3 px-6 py-3 text-base font-medium transition-colors bg-white border rounded-md text-slate-700 border-slate-200 hover:bg-slate-50">
            <span>Filter</span>
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>

          {/* Expanded Search Box Container */}
          <div className="flex flex-1 min-w-[320px] sm:max-w-3xl border border-slate-200 rounded-lg overflow-hidden bg-slate-100/70">
            <select className="px-4 py-3 text-base font-medium bg-transparent border-r outline-none cursor-pointer text-slate-600 border-slate-200">
              <option>All Products</option>
              <option>Smartphones</option>
            </select>
            
            <div className="relative flex items-center flex-grow">
              <input
                type="text"
                placeholder="Search for items and brands"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 text-base bg-transparent outline-none text-slate-800 placeholder-slate-400"
              />
              <button className="pr-4 transition-colors text-slate-700 hover:text-slate-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Icons: Wishlist & Cart */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Heart / Wishlist Icon */}
            <button className="p-2 transition-colors text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50" aria-label="Wishlist">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            </button>

            {/* Shopping Bag / Cart Icon */}
            <button className="p-2 transition-colors text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50" aria-label="Cart">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between p-6 transition-shadow bg-white border border-blue-200 rounded-lg hover:shadow-md"
            >
              {/* Product Image Container */}
              <div className="flex items-center justify-center w-full p-2 mb-4 h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain max-w-full max-h-full"
                  loading="lazy"
                />
              </div>

              {/* Product Information */}
              <div className="flex flex-col items-center text-center">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>

                {/* Rating Stars */}
                {product.rating > 0 && (
                  <div className="flex items-center mb-3 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                {/* Price and Brand Logo */}
                <div className="flex items-center justify-between w-full px-1 my-3">
                  <span className="text-base font-bold text-sky-500">
                    {product.price}
                  </span>
                  <BrandLogo brand={product.brand} />
                </div>

                {/* Shop Now Action Button */}
                <button className="w-full mt-2 bg-[#007BFF] hover:bg-blue-600 text-white text-base font-medium py-4 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <span>Shop Now</span>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Pagination Section */}
        <div className="flex flex-col items-center justify-center mb-10 space-y-3">
          <p className="text-base text-slate-600">
            You've viewed <span className="font-semibold text-slate-800">72</span> of <span className="font-semibold text-slate-800">3,907</span> products
          </p>
          <div className="w-56 h-1.5 overflow-hidden rounded-full bg-slate-200">
            <div className="w-1/6 h-full bg-blue-500"></div>
          </div>
          
          <button className="px-20 py-4 mt-2 text-base font-medium tracking-wider transition-colors bg-white border rounded border-slate-300 text-slate-800 hover:bg-slate-50">
            Load More
          </button>
        </div>

      </main>

      {/* 4. Imported Footer Component */}
      <Footer />

    </div>
  );
}