import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function InterShopTransfersPage({ isDarkMode, setIsDarkMode }) {
  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 flex flex-col justify-between ${
        isDarkMode
          ? 'bg-[#0f172a] text-slate-100 selection:bg-blue-500 selection:text-white'
          : 'bg-[#F8F9FA] text-slate-800 selection:bg-blue-500 selection:text-white'
      }`}
    >
      {/* Pass Theme State to Navbar */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow pt-16">
        {/* HERO SECTION */}
        <section className="relative px-4 pt-20 pb-16 overflow-hidden text-center sm:px-6 lg:px-8">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border ${
                isDarkMode
                  ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                  : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Shop-to-Shop Network &amp; Deals
            </div>

            <h1
              className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Connect Shops,{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Buy &amp; Borrow Products
              </span>
            </h1>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Communicate easily with other shop owners. Buy items from them or borrow products temporarily to serve your customers and share stock without any stress.
            </p>
          </div>
        </section>

        {/* SECTION 1: TWO CORE MOVEMENT TYPES */}
        <section
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t transition-colors ${
            isDarkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
              Shop Connections
            </span>
            <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              How Shop Owners Trade in SparkPOS
            </h2>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Talk to other shop owners to buy products directly or borrow items when you run short.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1: Buy Products */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border relative flex flex-col justify-between transition-colors ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-6 text-blue-600 border rounded-2xl bg-blue-500/20 border-blue-500/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                  Direct Buying
                </span>
                <h3 className={`text-xl font-bold mt-3 mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Buy Products from Other Shops
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Message another shop owner and buy products or devices straight from their inventory to restock your store.
                </p>

                <ul className={`space-y-3 text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">✓</span>
                    <span><strong>Shop-to-Shop Deals:</strong> Send purchase requests directly to other shop owners in the network.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">✓</span>
                    <span><strong>Scan Upon Delivery:</strong> Scan item barcodes when they arrive to confirm everything was delivered.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">✓</span>
                    <span><strong>Automatic Ownership Shift:</strong> Purchased items transfer completely to your shop’s inventory.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Borrow Products */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border relative flex flex-col justify-between transition-colors ${
                isDarkMode
                  ? 'bg-[#1f2937] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-6 text-blue-600 border rounded-2xl bg-blue-500/20 border-blue-500/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                  Temporary Borrowing
                </span>
                <h3 className={`text-xl font-bold mt-3 mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Borrow Products for Quick Sales
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Ask a neighboring shop owner to lend you a product to make a fast sale or show a customer without buying full stock.
                </p>

                <ul className={`space-y-3 text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">✓</span>
                    <span><strong>Clear Borrow Tag:</strong> Borrowed items are tracked so both owners know who holds the product.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">✓</span>
                    <span><strong>Automatic Money Settlement:</strong> When sold, your shop keeps the profit and pays the item cost back to the owner.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">✓</span>
                    <span><strong>Easy Unsold Return:</strong> If the customer doesn't buy, simply return the product back to the original shop owner.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: STEP-BY-STEP WORKFLOW */}
        <section
          className={`py-16 border-t transition-colors ${
            isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-slate-100/70 border-slate-200'
          }`}
        >
          <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:text-left">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                Simple Steps
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                How Owners Connect &amp; Trade
              </h2>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                How you communicate and swap products with other shop owners safely.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {/* Step 1 */}
              <div
                className={`p-6 rounded-2xl border transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8 mb-4 text-xs font-extrabold text-blue-600 rounded-full bg-blue-500/20">
                  01
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Send Request
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Select another shop in the system and send a request to buy or borrow specific products.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className={`p-6 rounded-2xl border transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8 mb-4 text-xs font-extrabold text-blue-600 rounded-full bg-blue-500/20">
                  02
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Owner Approves
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  The other shop owner approves the deal. The items get marked "In Delivery".
                </p>
              </div>

              {/* Step 3 */}
              <div
                className={`p-6 rounded-2xl border transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8 mb-4 text-xs font-extrabold text-blue-600 rounded-full bg-blue-500/20">
                  03
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Scan &amp; Receive
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Scan the item barcode when handed over to confirm you got the right product.
                </p>
              </div>

              {/* Step 4 */}
              <div
                className={`p-6 rounded-2xl border transition-colors ${
                  isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8 mb-4 text-xs font-extrabold text-blue-600 rounded-full bg-blue-500/20">
                  04
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Instant Settle
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  SparkPOS records who owes what, updates inventory, and keeps accurate account logs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY SYSTEM ADVANTAGES */}
        <section className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:text-left">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
              Trust &amp; Communication
            </span>
            <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Built for Shop Owners
            </h2>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Communicate clearly and prevent missing items or unpaid deals between shops.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div
              className={`p-6 rounded-2xl border flex gap-4 transition-colors ${
                isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="p-3 text-blue-600 bg-blue-500/10 rounded-xl h-fit">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Missing Item Alerts
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  If another owner sends 3 items but you only receive 2, SparkPOS immediately alerts both owners to resolve it.
                </p>
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl border flex gap-4 transition-colors ${
                isDarkMode ? 'bg-[#1f2937] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="p-3 text-blue-600 bg-blue-500/10 rounded-xl h-fit">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Shop Network History
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Keep track of all active deals, bought items, and borrowed products with partner shop owners on one simple dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: BOTTOM CTA */}
        <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div
            className={`rounded-3xl p-8 border text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6 transition-colors ${
              isDarkMode
                ? 'bg-[#1f2937] border-slate-800'
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Ready to trade with other shop owners?
              </h3>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Connect shops, buy, and borrow products smoothly with SparkPOS.
              </p>
            </div>
            <div className="flex w-full gap-3 sm:w-auto">
              <Link
                to="/login"
                className={`flex-1 sm:flex-none text-center px-5 py-3 font-semibold text-xs rounded-xl border transition ${
                  isDarkMode
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-slate-200 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="flex-1 px-5 py-3 text-xs font-bold text-center text-white transition bg-blue-600 shadow-md sm:flex-none hover:bg-blue-500 rounded-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}