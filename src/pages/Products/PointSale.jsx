import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';

export default function PointOfSalePage({ isDarkMode, setIsDarkMode }) {
  const [scannedCode, setScannedCode] = useState('');
  const [scannedProduct, setScannedProduct] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  // Simulated barcode database
  const sampleProducts = {
    '890123456789': {
      name: 'Samsung Galaxy A54 5G (256GB)',
      imei: '358921109482012',
      price: '420,000 RWF',
      warranty: '12 Months Official',
      category: 'Smartphones',
    },
    '123456789012': {
      name: 'MacBook Air M2 (8GB / 256GB)',
      imei: 'C02G1234MD6M',
      price: '1,350,000 RWF',
      warranty: '24 Months Premium',
      category: 'Laptops',
    },
  };

  const handleBarcodeSubmit = (e) => {
    e.preventDefault();
    if (!scannedCode.trim()) return;

    setIsScanning(true);
    setTimeout(() => {
      const found = sampleProducts[scannedCode.trim()] || {
        name: 'Generic Electronics Item',
        imei: 'IMEI-849201940123',
        price: '85,000 RWF',
        warranty: '6 Months Shop Warranty',
        category: 'Accessories',
      };
      setScannedProduct(found);
      setIsScanning(false);
    }, 400);
  };

  const triggerSampleScan = (code) => {
    setScannedCode(code);
    setIsScanning(true);
    setTimeout(() => {
      setScannedProduct(sampleProducts[code]);
      setIsScanning(false);
    }, 300);
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDarkMode ? 'bg-[#111827] text-gray-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Pass theme props to Navbar so toggling works everywhere */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border ${
            isDarkMode
              ? 'bg-blue-950/60 border-blue-800 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          High-Speed Electronics POS
        </div>
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Accelerate Sales Desk Operations in <span className="text-blue-500">Kigali</span>
        </h1>
        <p
          className={`mt-5 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-slate-600'
          }`}
        >
          Engineered specifically for electronics shops. Handle continuous offline checkout, hardware barcode scanning, automated IMEI registration, and local Mobile Money integration seamlessly.
        </p>

        {/* Hero CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
          >
            Get Started Free
          </Link>
          <Link
            to="/login"
            className={`w-full sm:w-auto px-8 py-3.5 font-semibold rounded-xl border transition-all shadow-sm ${
              isDarkMode
                ? 'bg-neutral-800 hover:bg-neutral-700 text-gray-200 border-neutral-700'
                : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            Log In to Account
          </Link>
        </div>
      </section>

      {/* Interactive Barcode Simulator Section */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div
          className={`rounded-2xl shadow-xl border p-6 sm:p-8 relative overflow-hidden transition-colors ${
            isDarkMode
              ? 'bg-[#1f2937] border-neutral-800'
              : 'bg-white border-slate-200/80'
          }`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-6">
            <div
              className={`p-2.5 rounded-lg ${
                isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Try Live Barcode Scanning
              </h2>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                Test how quickly items, prices, and warranties load into the cart.
              </p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
              Click a test barcode:
            </span>
            <button
              onClick={() => triggerSampleScan('890123456789')}
              className={`text-xs px-2.5 py-1 rounded border font-mono transition ${
                isDarkMode
                  ? 'bg-neutral-800 hover:bg-neutral-700 text-gray-300 border-neutral-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              890123456789 (Phone)
            </button>
            <button
              onClick={() => triggerSampleScan('123456789012')}
              className={`text-xs px-2.5 py-1 rounded border font-mono transition ${
                isDarkMode
                  ? 'bg-neutral-800 hover:bg-neutral-700 text-gray-300 border-neutral-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              123456789012 (Laptop)
            </button>
          </div>

          {/* Scan Input */}
          <form onSubmit={handleBarcodeSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Scan or type barcode number here..."
                value={scannedCode}
                onChange={(e) => setScannedCode(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border outline-none font-mono text-sm transition ${
                  isDarkMode
                    ? 'bg-neutral-900 border-neutral-700 text-white focus:ring-2 focus:ring-blue-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:bg-white'
                }`}
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h2v16H3V4zm4 0h1v16H7V4zm3 0h2v16h-2V4zm4 0h1v16h-1V4zm3 0h3v16h-3V4z" />
              </svg>
            </div>
            <button
              type="submit"
              disabled={isScanning}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition flex items-center justify-center gap-2"
            >
              {isScanning ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                'Scan'
              )}
            </button>
          </form>

          {/* Scan Result Output */}
          {scannedProduct && (
            <div
              className={`p-5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'bg-blue-950/40 border-blue-900/60'
                  : 'bg-blue-50/70 border-blue-200'
              }`}
            >
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-200 text-blue-900">
                    {scannedProduct.category}
                  </span>
                  <h3 className={`text-lg font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {scannedProduct.name}
                  </h3>
                  <p className={`text-xs font-mono mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    IMEI / Serial: {scannedProduct.imei}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {scannedProduct.price}
                  </span>
                  <p className="text-xs text-emerald-500 font-medium">Warranty: {scannedProduct.warranty}</p>
                </div>
              </div>

              {/* Dynamic Call to Action Prompt */}
              <div className={`mt-5 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
                isDarkMode ? 'border-blue-900/50' : 'border-blue-200/80'
              }`}>
                <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  ⚡ Ready to charge this transaction and print a digital receipt?
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Link
                    to="/login"
                    className={`flex-1 sm:flex-none text-center px-4 py-2 font-medium text-xs rounded-lg border transition ${
                      isDarkMode
                        ? 'bg-neutral-800 hover:bg-neutral-700 text-gray-200 border-neutral-700'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                    }`}
                  >
                    Log In to Checkout
                  </Link>
                  <Link
                    to="/register"
                    className="flex-1 sm:flex-none text-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium text-xs rounded-lg transition"
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Role-Based Value Proposition Section */}
      <section className={`py-16 border-t transition-colors ${
        isDarkMode ? 'bg-[#111827] border-neutral-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              How SparkPos Fits Every Role in Your Business
            </h2>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              Tailored workflows designed to solve daily operational challenges for everyone on your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cashiers / Sellers */}
            <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between transition-colors ${
              isDarkMode ? 'bg-[#1f2937] border-neutral-800' : 'bg-white border-slate-200'
            }`}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                    👤
                  </div>
                  <div>
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      For Cashiers & Sellers
                    </h3>
                    <span className="text-xs text-blue-500 font-medium">Front-Desk Efficiency</span>
                  </div>
                </div>
                <ul className={`space-y-2.5 text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Zero Queue Delays:</strong> Rapid scanning reduces checkout times during peak hours.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Error Prevention:</strong> Unique IMEIs match receipt records automatically.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>No Manual Math:</strong> Automatic discounts and MoMo prompts prevent mistakes.</span>
                  </li>
                </ul>
              </div>
              <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-neutral-800' : 'border-slate-100'}`}>
                <Link to="/login" className="text-xs font-semibold text-blue-500 hover:text-blue-400 flex items-center gap-1">
                  Log in as Cashier &rarr;
                </Link>
              </div>
            </div>

            {/* Shop Owners & Branch Managers */}
            <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between transition-colors ${
              isDarkMode ? 'bg-[#1f2937] border-neutral-800' : 'bg-white border-slate-200'
            }`}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
                    👔
                  </div>
                  <div>
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      For Shop Owners
                    </h3>
                    <span className="text-xs text-indigo-500 font-medium">Full Business Control</span>
                  </div>
                </div>
                <ul className={`space-y-2.5 text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>Real-Time Sales Audit:</strong> Monitor branch activity live from your phone anywhere.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>Loss Prevention:</strong> Serial tracking prevents unregistered cash sales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>Multi-Branch Visibility:</strong> Check stock availability across branches instantly.</span>
                  </li>
                </ul>
              </div>
              <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-neutral-800' : 'border-slate-100'}`}>
                <Link to="/register" className="text-xs font-semibold text-indigo-500 hover:text-indigo-400 flex items-center gap-1">
                  Start Free Business Trial &rarr;
                </Link>
              </div>
            </div>

            {/* Inventory Managers */}
            <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between transition-colors ${
              isDarkMode ? 'bg-[#1f2937] border-neutral-800' : 'bg-white border-slate-200'
            }`}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
                    📦
                  </div>
                  <div>
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      For Inventory Managers
                    </h3>
                    <span className="text-xs text-emerald-500 font-medium">Accurate Stock Sync</span>
                  </div>
                </div>
                <ul className={`space-y-2.5 text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span><strong>Instant Stock Deductions:</strong> Sold items clear immediately from central stock.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span><strong>Low Stock Alerts:</strong> Get notified before high-demand items run out.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span><strong>Seamless Stock Movements:</strong> Track items moved between display and backroom.</span>
                  </li>
                </ul>
              </div>
              <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-neutral-800' : 'border-slate-100'}`}>
                <Link to="/login" className="text-xs font-semibold text-emerald-500 hover:text-emerald-400 flex items-center gap-1">
                  Access Inventory Desk &rarr;
                </Link>
              </div>
            </div>

            {/* Customers */}
            <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between transition-colors ${
              isDarkMode ? 'bg-[#1f2937] border-neutral-800' : 'bg-white border-slate-200'
            }`}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
                    🛍️
                  </div>
                  <div>
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      For Electronics Buyers
                    </h3>
                    <span className="text-xs text-purple-500 font-medium">Peace of Mind</span>
                  </div>
                </div>
                <ul className={`space-y-2.5 text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span><strong>Digital Receipts:</strong> Instant proof of purchase via SMS or email.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span><strong>Hassle-Free Warranties:</strong> Serial numbers link directly to warranty expiration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span><strong>Flexible Payments:</strong> Cash, card, or instant MTN MoMo and Airtel Money.</span>
                  </li>
                </ul>
              </div>
              <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-neutral-800' : 'border-slate-100'}`}>
                <Link to="/register" className="text-xs font-semibold text-purple-500 hover:text-purple-400 flex items-center gap-1">
                  Explore Customer Portal &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Breakdown Grid */}
      <section className={`py-16 border-t transition-colors ${
        isDarkMode ? 'bg-[#111827] border-neutral-800' : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Built Specifically for Electronics Retailers
            </h2>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              Every feature is optimized for shop efficiency and fast customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-2xl border transition ${
              isDarkMode
                ? 'bg-[#1f2937] border-neutral-800'
                : 'bg-slate-50 border-slate-200/80'
            }`}>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                IMEI & Serial Number Capture
              </h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Every phone, laptop, or accessory with a unique serial number is linked directly to the receipt at scan time.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition ${
              isDarkMode
                ? 'bg-[#1f2937] border-neutral-800'
                : 'bg-slate-50 border-slate-200/80'
            }`}>
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m2.828 2.828a5 5 0 017.072 0m-7.072 7.072a5 5 0 010-7.072" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Offline-First Technology
              </h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Never halt sales when internet drops. POS continues ringing sales locally and syncs automatically when online.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition ${
              isDarkMode
                ? 'bg-[#1f2937] border-neutral-800'
                : 'bg-slate-50 border-slate-200/80'
            }`}>
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                MoMo & Split Checkout
              </h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Accept MTN MoMo, Airtel Money, cash, or split payments easily across multiple methods in one transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight">Ready to transform your sales counter?</h2>
          <p className="mt-3 text-slate-400 text-base">
            Start issuing instant digital receipts and tracking high-value devices in Kigali today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 font-semibold rounded-xl transition shadow-lg"
            >
              Get Started for Free
            </Link>
            <Link
              to="/login"
              className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition"
            >
              Sign In to Your Account
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
}