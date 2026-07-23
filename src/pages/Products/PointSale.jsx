import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function PointOfSalePage() {
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
     <Navbar />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          High-Speed Electronics POS
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
          Accelerate Sales Desk Operations in <span className="text-blue-600">Kigali</span>
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-all shadow-sm"
          >
            Log In to Account
          </Link>
        </div>
      </section>

      {/* Interactive Barcode Simulator Section */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Try Live Barcode Scanning</h2>
              <p className="text-sm text-slate-500">Test how quickly items, prices, and warranties load into the cart.</p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-slate-500 font-medium">Click a test barcode:</span>
            <button
              onClick={() => triggerSampleScan('890123456789')}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded border border-slate-300 font-mono transition"
            >
              890123456789 (Phone)
            </button>
            <button
              onClick={() => triggerSampleScan('123456789012')}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded border border-slate-300 font-mono transition"
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
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900 outline-none font-mono text-sm transition"
              />
              <svg className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-xl transition-all">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-200 text-blue-800">
                    {scannedProduct.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{scannedProduct.name}</h3>
                  <p className="text-xs text-slate-600 font-mono mt-0.5">IMEI / Serial: {scannedProduct.imei}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-slate-900">{scannedProduct.price}</span>
                  <p className="text-xs text-emerald-600 font-medium">Warranty: {scannedProduct.warranty}</p>
                </div>
              </div>

              {/* Dynamic Call to Action Prompt */}
              <div className="mt-5 pt-4 border-t border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-600">
                  ⚡ Ready to charge this transaction and print a digital receipt?
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <a
                    href="#login"
                    className="flex-1 sm:flex-none text-center px-4 py-2 bg-white text-slate-700 hover:bg-slate-100 font-medium text-xs rounded-lg border border-slate-300 transition"
                  >
                    Log In to Checkout
                  </a>
                  <a
                    href="#register"
                    className="flex-1 sm:flex-none text-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium text-xs rounded-lg transition"
                  >
                    Get Started Free
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Role-Based Value Proposition Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 border-t border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">How SparkPos Fits Every Role in Your Business</h2>
          <p className="text-slate-600 mt-2">Tailored workflows designed to solve daily operational challenges for everyone on your team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cashiers / Sellers */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                  👤
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">For Cashiers & Sellers</h3>
                  <span className="text-xs text-blue-600 font-medium">Front-Desk Efficiency</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>Zero Queue Delays:</strong> Rapid scanning reduces checkout times to seconds during peak hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>Error Prevention:</strong> Scanning unique IMEIs ensures the exact scanned unit matches the receipt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>No Manual Math:</strong> Automatic discounts, taxes, and Mobile Money prompts eliminate mistakes.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a href="#login" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                Log in as Cashier &rarr;
              </a>
            </div>
          </div>

          {/* Shop Owners & Branch Managers */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
                  👔
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">For Shop Owners</h3>
                  <span className="text-xs text-indigo-600 font-medium">Full Business Control</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span><strong>Real-Time Sales Audit:</strong> Monitor branch register activity live from your phone anywhere in Kigali.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span><strong>Loss Prevention:</strong> Serial tracking prevents employee stock swaps or unregistered cash sales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span><strong>Multi-Branch Visibility:</strong> Check stock availability across branches to direct customers instantly.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a href="#register" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                Start Free Business Trial &rarr;
              </a>
            </div>
          </div>

          {/* Inventory Managers */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">
                  📦
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">For Inventory Managers</h3>
                  <span className="text-xs text-emerald-600 font-medium">Accurate Stock Sync</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong>Instant Stock Deductions:</strong> Items are automatically marked as sold in central inventory immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong>Low Stock Alerts:</strong> Get notified before high-demand accessories or devices run completely out.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong>Seamless Stock Movements:</strong> Track items moved between main store displays and storage backrooms.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a href="#login" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                Access Inventory Desk &rarr;
              </a>
            </div>
          </div>

          {/* Customers */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg">
                  🛍️
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">For Electronics Buyers</h3>
                  <span className="text-xs text-purple-600 font-medium">Peace of Mind</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span><strong>Digital Receipts:</strong> Instant proof of purchase sent via SMS or email—no paper receipts to lose.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span><strong>Hassle-Free Warranties:</strong> Device serial number is linked directly to warranty expiration alerts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span><strong>Flexible Payments:</strong> Choose cash, card, or instant MTN MoMo and Airtel Money payments.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a href="#register" className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1">
                Explore Customer Portal &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Breakdown Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white border-t border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Built Specifically for Electronics Retailers</h2>
          <p className="text-slate-600 mt-2">Every feature is optimized for shop efficiency and fast customer service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">IMEI & Serial Number Capture</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every phone, laptop, or accessory with a unique serial number is linked directly to the receipt at scan time for immediate warranty logging.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:shadow-md transition">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m2.828 2.828a5 5 0 017.072 0m-7.072 7.072a5 5 0 010-7.072" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Offline-First Technology</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Never halt sales when internet drops. POS continues ringing sales locally and automatically syncs with your database when reconnected.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">MoMo & Split Checkout</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Accept MTN MoMo, Airtel Money, cash, or split payments easily across multiple payment methods in one transaction.
            </p>
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
              to="#register"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 font-semibold rounded-xl transition shadow-lg"
            >
              Get Started for Free
            </Link>
            <Link
              to="#login"
              className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition"
            >
              Sign In to Your Account
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}