import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Sample cart items structured to match the data model and design specs
const INITIAL_CART_ITEMS = [
  {
    cartItemId: '2-128GB',
    id: 2,
    name: 'iPhone 17 pro',
    price: 450000,
    currency: 'RFW',
    quantity: 1,
    image: '/images/products/iphones/i phone pro 17.jpg',
    specs: {
      storage: '128GB',
      battery: 'Up to 24 hours video playback',
      camera: 'Pro camera system (48MP Main, 48MP Ultra Wide, Telephoto)',
    },
  },
  {
    cartItemId: '1-256GB',
    id: 1,
    name: 'iPhone 15',
    price: 320000,
    currency: 'RFW',
    quantity: 1,
    image: '/images/products/iphones/i phone 15.jpg',
    specs: {
      storage: '256GB',
      battery: 'Up to 20 hours video playback',
      camera: 'Advanced dual-camera system (48MP Main, 12MP Ultra Wide)',
    },
  },
];

export default function Cart({ isDarkMode, setIsDarkMode }) {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);

  // Fixed extra costs matching summary breakdown
  const TAX_AMOUNT = 6000;
  const SHIPPING_FEES = 5000;

  // Quantity controllers
  const handleQuantityChange = (cartItemId, type) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          const newQty =
            type === 'increase'
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  // Remove item handler
  const handleRemoveItem = (cartItemId) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  // Calculations
  const itemsTotalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const grandTotal = itemsTotalPrice > 0 ? itemsTotalPrice + TAX_AMOUNT + SHIPPING_FEES : 0;

  return (
    <div
      className={`flex flex-col min-h-screen antialiased transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0b132b] text-white' : 'bg-[#f4f7fe] text-slate-800'
      }`}
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full shadow-sm">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>

      {/* Main Container */}
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 pb-8 sm:pb-12 mx-auto max-w-7xl">
        {/* Header Title */}
        <h1
          className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-6 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Shopping Cart({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </h1>

        {cartItems.length === 0 ? (
          <div
            className={`p-10 text-center rounded-lg border shadow-sm ${
              isDarkMode
                ? 'bg-[#1c2541] border-slate-800'
                : 'bg-white border-slate-200/80'
            }`}
          >
            <p className="text-base font-medium text-slate-400 mb-6">
              Your shopping cart is empty.
            </p>
            <Link
              to="/catalog"
              className="inline-block px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          /* Updated Grid Ratio: 8 Cols (Items) / 4 Cols (Summary) for extra summary width */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: Items List (8 Columns) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className={`relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-5 sm:p-6 rounded-xl border transition-all duration-200 shadow-sm hover:shadow-md ${
                    isDarkMode
                      ? 'bg-[#1c2541] border-slate-800/80'
                      : 'bg-white border-slate-200/70'
                  }`}
                >
                  {/* Delete Option */}
                  <button
                    onClick={() => handleRemoveItem(item.cartItemId)}
                    title="Remove Item"
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 transition-colors rounded-full"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Item Image */}
                  <div className="w-full sm:w-52 h-64 sm:h-60 flex-shrink-0 flex items-center justify-center p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain max-h-full max-w-full drop-shadow-sm"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 w-full flex flex-col justify-between h-full pt-1">
                    <div>
                      <h2
                        className={`text-lg sm:text-xl font-extrabold tracking-tight leading-tight ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.name}
                      </h2>

                      <div className="mt-3 space-y-1 text-xs sm:text-sm leading-snug">
                        <p className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                          <span className="font-medium text-slate-400">
                            Storage Capacity:{' '}
                          </span>
                          <span className="font-semibold">{item.specs.storage}</span>
                        </p>
                        <p className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                          <span className="font-medium text-slate-400">Battery: </span>
                          <span className="font-semibold">{item.specs.battery}</span>
                        </p>
                        <p className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                          <span className="font-medium text-slate-400">Camera: </span>
                          <span className="font-semibold">{item.specs.camera}</span>
                        </p>
                      </div>

                      <button
                        className={`inline-flex items-center gap-1 mt-2.5 text-xs font-bold ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        } hover:text-sky-500 transition-colors`}
                      >
                        <span>Delivery Information</span>
                        <span className="text-xs">&gt;</span>
                      </button>
                    </div>

                    {/* Bottom Row */}
                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-between gap-4 pt-2">
                      {/* Fixed Unit Price (Does not multiply by quantity here) */}
                      <span className="text-lg sm:text-xl font-black text-[#10b09d] dark:text-sky-400 tracking-tight">
                        {item.price.toLocaleString()} {item.currency}
                      </span>

                      <div
                        className={`flex items-center justify-between border rounded-[4px] px-2.5 py-1 min-w-[110px] ${
                          isDarkMode
                            ? 'bg-slate-900/60 border-slate-700'
                            : 'bg-white border-slate-300'
                        }`}
                      >
                        <button
                          onClick={() => handleQuantityChange(item.cartItemId, 'decrease')}
                          className="w-6 h-6 flex items-center justify-center text-base font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors"
                        >
                          -
                        </button>
                        <span
                          className={`text-xs font-bold px-2 ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.cartItemId, 'increase')}
                          className="w-6 h-6 flex items-center justify-center text-base font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Summary Sidebar Panel (4 Columns for wider appearance) */}
            <div className="lg:col-span-4 sticky top-28">
              <div
                className={`p-5 sm:p-6 rounded-2xl border shadow-sm min-h-[400px] flex flex-col justify-between ${
                  isDarkMode
                    ? 'bg-[#1c2541] border-slate-800'
                    : 'bg-white border-slate-200/80'
                }`}
              >
                <div>
                  <h2
                    className={`text-lg font-bold tracking-tight mb-4 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Summary
                  </h2>

                  <div className="space-y-3 text-xs sm:text-sm">
                    {/* Items Total */}
                    <div className="flex justify-between items-center gap-2">
                      <span className="font-bold text-slate-600 dark:text-slate-300">
                        Items total
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {itemsTotalPrice.toLocaleString()} RFW
                      </span>
                    </div>

                    {/* Tax */}
                    <div className="flex justify-between items-center gap-2">
                      <span className="font-bold text-slate-600 dark:text-slate-300">
                        Tax
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {TAX_AMOUNT.toLocaleString()} RFW
                      </span>
                    </div>

                    {/* Shipping Fees */}
                    <div className="flex justify-between items-center gap-2">
                      <span className="font-bold text-slate-600 dark:text-slate-300">
                        Shipping
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {SHIPPING_FEES.toLocaleString()} RFW
                      </span>
                    </div>

                    <hr className="my-4 border-slate-200 dark:border-slate-800" />

                    {/* Grand Total */}
                    <div className="flex justify-between items-center pt-1">
                      <span
                        className={`text-xs font-black ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        } tracking-wide uppercase`}
                      >
                        TOTAL
                      </span>
                      <span
                        className={`text-base sm:text-lg font-black ${
                          isDarkMode ? 'text-sky-400' : 'text-slate-900'
                        }`}
                      >
                        {grandTotal.toLocaleString()} RFW
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3">
                  <button className="w-full py-3 bg-[#14b8a6] hover:bg-[#0d9488] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-[4px] transition-all shadow-md">
                    Proceed to checkout
                  </button>

                  <Link
                    to="/catalog"
                    className="w-full py-2.5 text-center border-2 border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6]/10 active:scale-[0.98] font-bold text-xs sm:text-sm rounded-[4px] transition-all"
                  >
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}