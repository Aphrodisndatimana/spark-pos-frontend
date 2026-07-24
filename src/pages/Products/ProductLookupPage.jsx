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

export default function ProductLookupPage() {
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
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        {/* HERO HEADER */}
        <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Live Multi-Branch Inventory Catalog
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Electronic Product <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Lookup</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              Search device specifications, check real-time stock levels across Kigali store outlets, and filter by brand, price, or condition.
            </p>
          </div>
        </section>

        {/* SEARCH & FILTER CONTROLS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* SIDEBAR FILTERS */}
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-3xl h-fit space-y-6">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <h3 className="font-bold text-white text-base">Filter Catalog</h3>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedBrand('All');
                    setInStockOnly(false);
                    setMaxPrice(2500000);
                  }}
                  className="text-xs text-cyan-400 hover:underline"
                >
                  Reset All
                </button>
              </div>

              {/* Brand Filter */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Select Brand</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  {brands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* In-Stock Toggle */}
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300">In-Stock Only</label>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
              </div>

              {/* Max Price Slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span>Max Price</span>
                  <span className="text-cyan-400">{maxPrice.toLocaleString()} RWF</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={2500000}
                  step={50000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer"
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
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-xl"
                />
                <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      selectedCategory === cat
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Results Summary */}
              <div className="text-xs text-slate-400 flex justify-between items-center">
                <span>Showing <strong>{filteredProducts.length}</strong> products</span>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredProducts.map((p) => (
                    <div key={p.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-3xl">{p.image}</span>
                          <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${
                            p.stock > 0
                              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                              : 'bg-red-500/10 border-red-500/20 text-red-400'
                          }`}>
                            {p.stock > 0 ? `${p.stock} Units Available` : 'Out of Stock'}
                          </span>
                        </div>

                        <span className="text-[10px] uppercase font-bold text-cyan-400">{p.brand} • {p.category}</span>
                        <h4 className="font-bold text-white text-sm mt-0.5 mb-2 leading-snug">{p.name}</h4>

                        <div className="space-y-1 text-[11px] text-slate-400">
                          <p>📍 Location: <span className="text-slate-200">{p.branch}</span></p>
                          <p>🏷️ Condition: <span className="text-slate-200">{p.condition}</span></p>
                          {p.imeiTracked && (
                            <p className="text-cyan-400 font-mono text-[10px]">✓ IMEI Tracked Unit</p>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
                        <span className="text-sm font-extrabold text-white">{p.price.toLocaleString()} RWF</span>
                        <button className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition">
                          View Specs
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center">
                  <p className="text-sm text-slate-400">No products match your search filters.</p>
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