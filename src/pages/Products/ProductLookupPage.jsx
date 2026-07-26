import React, { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

// Sample product database
const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max (256GB)',
    category: 'Smartphones',
    brand: 'Apple',
    price: 1350000, // RWF
    stock: 8,
    branch: 'Remera Main Branch',
    condition: 'Brand New',
    imeiTracked: true,
    image: '📱'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Smartphones',
    brand: 'Samsung',
    price: 1280000,
    stock: 5,
    branch: 'Kigali Heights Shop',
    condition: 'Brand New',
    imeiTracked: true,
    image: '📱'
  },
  {
    id: 3,
    name: 'MacBook Pro 14" M3 Chip',
    category: 'Laptops',
    brand: 'Apple',
    price: 2100000,
    stock: 3,
    branch: 'Downtown Central Warehouse',
    condition: 'Brand New',
    imeiTracked: true,
    image: '💻'
  },
  {
    id: 4,
    name: 'Dell XPS 15 i7 16GB RAM',
    category: 'Laptops',
    brand: 'Dell',
    price: 1650000,
    stock: 0, // Out of stock
    branch: 'Remera Main Branch',
    condition: 'Refurbished',
    imeiTracked: true,
    image: '💻'
  },
  {
    id: 5,
    name: 'AirPods Pro 2nd Gen (USB-C)',
    category: 'Accessories',
    brand: 'Apple',
    price: 320000,
    stock: 14,
    branch: 'Kigali Heights Shop',
    condition: 'Brand New',
    imeiTracked: false,
    image: '🎧'
  },
  {
    id: 6,
    name: 'Original iPhone 15 Pro OLED Screen Replacement',
    category: 'Repair Parts',
    brand: 'Apple',
    price: 180000,
    stock: 12,
    branch: 'Remera Main Branch',
    condition: 'Spare Part',
    imeiTracked: false,
    image: '⚙️'
  }
];

export default function ProductLookupPage({ isDarkMode, setIsDarkMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(2500000);

  const categories = ['All', 'Smartphones', 'Laptops', 'Accessories', 'Repair Parts'];
  const brands = ['All', 'Apple', 'Samsung', 'Dell'];

  // Dynamic filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesStock = !inStockOnly || product.stock > 0;
      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesBrand && matchesStock && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedBrand, inStockOnly, maxPrice]);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 flex flex-col justify-between ${
        isDarkMode
          ? 'bg-[#111827] text-slate-100 selection:bg-cyan-500 selection:text-white'
          : 'bg-slate-50 text-slate-800 selection:bg-cyan-500 selection:text-white'
      }`}
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="flex-grow pt-16">
        {/* HERO HEADER */}
        <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border ${
                isDarkMode
                  ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                  : 'bg-cyan-50 border-cyan-200 text-cyan-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Live Multi-Branch Inventory Catalog
            </div>

            <h1
              className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Electronic Product{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                Lookup
              </span>
            </h1>

            <p
              className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Search device specifications, check real-time stock levels across Kigali store outlets, and filter by brand, price, or condition.
            </p>
          </div>
        </section>

        {/* SEARCH & FILTER CONTROLS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* SIDEBAR FILTERS */}
            <div
              className={`p-6 rounded-3xl h-fit space-y-6 border transition-colors ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div
                className={`flex justify-between items-center border-b pb-4 ${
                  isDarkMode ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                <h3 className={`font-bold text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Filter Catalog</h3>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedBrand('All');
                    setInStockOnly(false);
                    setMaxPrice(2500000);
                  }}
                  className="text-xs text-cyan-500 font-semibold hover:underline"
                >
                  Reset All
                </button>
              </div>

              {/* Brand Filter */}
              <div>
                <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Select Brand
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className={`w-full rounded-xl px-3 py-2 text-xs border focus:outline-none focus:border-cyan-500 transition-colors ${
                    isDarkMode
                      ? 'bg-[#111827] border-slate-700 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-800'
                  }`}
                >
                  {brands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* In-Stock Toggle */}
              <div className="flex items-center justify-between">
                <label className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  In-Stock Only
                </label>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-500 focus:ring-cyan-500 accent-cyan-500 cursor-pointer"
                />
              </div>

              {/* Max Price Slider */}
              <div>
                <div className={`flex justify-between text-xs font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span>Max Price</span>
                  <span className="text-cyan-500 font-bold">{maxPrice.toLocaleString()} RWF</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={2500000}
                  step={50000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className={`w-full accent-cyan-500 rounded-lg cursor-pointer ${
                    isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
                  }`}
                />
              </div>
            </div>

            {/* MAIN CATALOG AREA */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by product name, model, category, or brand..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full rounded-2xl pl-12 pr-4 py-3.5 text-xs sm:text-sm border focus:outline-none focus:border-cyan-500 transition shadow-md ${
                    isDarkMode
                      ? 'bg-[#1f2937] border-slate-800 text-white placeholder-slate-500'
                      : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
                  }`}
                />
                <svg
                  className={`w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 ${
                    isDarkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : isDarkMode
                        ? 'bg-[#1f2937] border border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Results Summary */}
              <div className={`text-xs flex justify-between items-center ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                <span>Showing <strong className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>{filteredProducts.length}</strong> products</span>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      className={`border rounded-2xl p-5 transition flex flex-col justify-between ${
                        isDarkMode
                          ? 'bg-[#1f2937] border-slate-800 hover:border-cyan-500/50'
                          : 'bg-white border-slate-200 shadow-sm hover:border-cyan-500/50 hover:shadow-md'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-3xl">{p.image}</span>
                          <span
                            className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${
                              p.stock > 0
                                ? isDarkMode
                                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                  : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                : isDarkMode
                                ? 'bg-red-500/10 border-red-500/20 text-red-400'
                                : 'bg-red-50 border-red-200 text-red-700'
                            }`}
                          >
                            {p.stock > 0 ? `${p.stock} Units Available` : 'Out of Stock'}
                          </span>
                        </div>

                        <span className="text-[10px] uppercase font-bold text-cyan-500">{p.brand} • {p.category}</span>
                        <h4 className={`font-bold text-sm mt-0.5 mb-2 leading-snug ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                          {p.name}
                        </h4>

                        <div className={`space-y-1 text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          <p>📍 Location: <span className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>{p.branch}</span></p>
                          <p>🏷️ Condition: <span className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>{p.condition}</span></p>
                          {p.imeiTracked && (
                            <p className="text-cyan-500 font-mono text-[10px] font-semibold">✓ IMEI Tracked Unit</p>
                          )}
                        </div>
                      </div>

                      <div
                        className={`mt-4 pt-4 border-t flex justify-between items-center ${
                          isDarkMode ? 'border-slate-800' : 'border-slate-100'
                        }`}
                      >
                        <span className={`text-sm font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                          {p.price.toLocaleString()} RWF
                        </span>
                        <button
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                            isDarkMode
                              ? 'bg-neutral-800 hover:bg-neutral-700 text-slate-200 border-slate-700'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                          }`}
                        >
                          View Specs
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={`border rounded-2xl p-8 text-center ${
                    isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    No products match your search filters.
                  </p>
                </div>
              )}
            </div>

          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}