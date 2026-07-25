import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// SVG Icons
const CalendarIcon = () => (
  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TagIcon = () => (
  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default function RetailGrowthBlog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Store Operations', 'Multi-Branch Growth', 'Electronics & Repair', 'Mobile Money', 'Inventory Control'];

  const articles = [
    {
      id: 1,
      title: '5 Ways Kigali Electronics Shops Can Stop Stock Leakage and IMEI Losses',
      category: 'Electronics & Repair',
      date: 'July 18, 2026',
      readTime: '6 min read',
      author: 'SparkPos Retail Team',
      excerpt: 'High-value smartphones, laptops, and spare parts are prone to untracked losses. Learn how barcode tracking and strict IMEI logs save profit margins.',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
      featured: true,
    },
    {
      id: 2,
      title: 'How to Manage Float and Cash Flow Across Multiple MoMo Agent Kiosks',
      category: 'Mobile Money',
      date: 'July 12, 2026',
      readTime: '4 min read',
      author: 'Financial Operations Team',
      excerpt: 'Reconciling daily digital float against cash drawers in busy commercial centers without losing money or time.',
      image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: 3,
      title: 'Expanding from 1 Store to 4 Outlets: The Multi-Branch Retail Playbook',
      category: 'Multi-Branch Growth',
      date: 'June 28, 2026',
      readTime: '8 min read',
      author: 'Strategy Desk',
      excerpt: 'Practical advice on centralizing pricing, dispatching warehouse stock transfers, and keeping cashier accountability high.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: 4,
      title: 'First-Expiry, First-Out (FEFO): Essential Stock Rotation Tactics for Wholesale',
      category: 'Inventory Control',
      date: 'June 15, 2026',
      readTime: '5 min read',
      author: 'Supply Chain Insights',
      excerpt: 'Prevent expired batch waste in FMCG warehouses using automated batch lot tracking and dispatch alerts.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: 5,
      title: 'Optimizing Repair Ticket Workflows in Computer & Phone Service Shops',
      category: 'Store Operations',
      date: 'May 30, 2026',
      readTime: '7 min read',
      author: 'Tech Services Group',
      excerpt: 'Keep customers informed with automatic SMS status updates when technicians complete repairs or diagnose issues.',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find((art) => art.featured);

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="px-6 pb-16 text-white bg-slate-900 pt-28 sm:pt-32 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-400 border rounded-full bg-blue-500/20 border-blue-500/30">
            Insights & Retail Strategies
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Retail Growth & Operations Blog
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-base text-slate-300 sm:text-lg">
            Actionable strategies, inventory tips, and technology guides to help independent retailers, wholesalers, and multi-branch chains scale efficiently.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, stock management, repair workflows..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all text-sm"
            />
          </div>
        </div>
      </section>

      {/* --- CATEGORY FILTERS --- */}
      <section className="sticky z-10 bg-white border-b shadow-sm border-slate-200 top-16">
        <div className="px-6 mx-auto overflow-x-auto max-w-7xl">
          <div className="flex py-4 space-x-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED ARTICLE HERO CARD --- */}
      {selectedCategory === 'All' && !searchQuery && featuredArticle && (
        <section className="px-6 py-12 mx-auto sm:px-12 max-w-7xl">
          <div className="grid grid-cols-1 overflow-hidden transition-shadow bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto bg-slate-900">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/800x600/0f172a/38bdf8?text=Featured+Retail+Article';
                }}
                className="object-cover w-full h-full opacity-90"
              />
              <span className="absolute px-3 py-1 text-xs font-bold tracking-wider text-white uppercase bg-blue-600 rounded-full top-4 left-4">
                Featured Story
              </span>
            </div>

            <div className="flex flex-col justify-between p-8">
              <div>
                <div className="flex items-center gap-4 mb-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><TagIcon /> {featuredArticle.category}</span>
                  <span className="flex items-center gap-1"><CalendarIcon /> {featuredArticle.date}</span>
                  <span className="flex items-center gap-1"><ClockIcon /> {featuredArticle.readTime}</span>
                </div>
                <h2 className="mb-4 text-2xl font-bold transition-colors cursor-pointer text-slate-900 hover:text-blue-600">
                  {featuredArticle.title}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-500">By {featuredArticle.author}</span>
                <a href={`#read-${featuredArticle.id}`} className="text-sm font-bold text-blue-600 hover:text-blue-700">
                  Read Article →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- ARTICLES GRID --- */}
      <section className="px-6 py-12 mx-auto sm:px-12 max-w-7xl">
        <h3 className="mb-6 text-xl font-bold text-slate-900">
          {selectedCategory === 'All' ? 'Latest Growth Articles' : `${selectedCategory} Articles`}
        </h3>

        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center bg-white border rounded-2xl border-slate-200">
            <p className="text-sm text-slate-500">No articles match your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((art) => (
              <article key={art.id} className="flex flex-col justify-between overflow-hidden transition-shadow bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md">
                <div>
                  <div className="h-48 overflow-hidden bg-slate-900">
                    <img
                      src={art.image}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/600x400/0f172a/38bdf8?text=SparkPos+Blog';
                      }}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2 text-xs text-slate-400">
                      <span className="font-semibold text-blue-600">{art.category}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h4 className="mb-2 text-lg font-bold transition-colors text-slate-900 hover:text-blue-600 line-clamp-2">
                      {art.title}
                    </h4>
                    <p className="mb-4 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between px-6 pt-0 pb-6 text-xs border-t border-slate-50">
                  <span className="text-slate-400">{art.date}</span>
                  <a href={`#read-${art.id}`} className="font-bold text-blue-600 hover:text-blue-700">
                    Read →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* --- NEWSLETTER SUBSCRIPTION --- */}
      <section className="px-6 py-16 mt-12 text-white bg-blue-600 sm:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-3 text-3xl font-bold">Get Weekly Retail & Growth Tips</h2>
          <p className="mb-8 text-sm text-blue-100">
            Join 1,200+ Kigali store owners receiving trade tactics, tax update guides, and retail optimization strategies directly in their inbox.
          </p>
          <form className="flex flex-col max-w-md gap-3 mx-auto sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-sm rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none"
              required
            />
            <button type="submit" className="px-6 py-3 text-sm font-bold text-white transition-colors rounded-lg bg-slate-900 hover:bg-slate-800">
              Subscribe Free
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}