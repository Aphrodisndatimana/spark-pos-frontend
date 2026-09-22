import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Sample cart items passed over from cart state
const ORDER_ITEMS = [
  {
    cartItemId: '2-128GB',
    id: 2,
    name: 'iPhone 17 pro',
    price: 450000,
    currency: 'RFW',
    quantity: 1,
    image: '/images/products/iphones/i phone pro 17.jpg',
    specs: { storage: '128GB' },
  },
  {
    cartItemId: '1-256GB',
    id: 1,
    name: 'iPhone 15',
    price: 320000,
    currency: 'RFW',
    quantity: 1,
    image: '/images/products/iphones/i phone 15.jpg',
    specs: { storage: '256GB' },
  },
];

export default function Checkout({ isDarkMode, setIsDarkMode }) {
  const navigate = useNavigate();

  // Pricing values
  const TAX_AMOUNT = 6000;
  const SHIPPING_FEES = 5000;

  const itemsTotalPrice = ORDER_ITEMS.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const grandTotal = itemsTotalPrice > 0 ? itemsTotalPrice + TAX_AMOUNT + SHIPPING_FEES : 0;

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'momo', // Default to Mobile Money (RFW standard)
    momoNumber: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order placement processing
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Order placed successfully!');
      navigate('/');
    }, 1500);
  };

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
      <main className="flex-grow w-full px-4 pt-24 pb-8 mx-auto sm:px-6 lg:px-12 sm:pt-28 sm:pb-12 max-w-7xl">
        {/* Header Title & Back Link */}
        <div className="flex flex-col justify-between gap-4 mb-6 sm:flex-row sm:items-center">
          <h1
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Checkout
          </h1>
          <Link
            to="/cart"
            className="inline-flex items-center text-sm font-bold transition-colors text-lime-600 hover:text-lime-700 hover:underline dark:text-lime-400 dark:hover:text-lime-300"
          >
            &lt; Return to Cart
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-12">
            
            {/* LEFT COLUMN: Shipping & Payment Details (8 Columns) */}
            <div className="flex flex-col gap-6 lg:col-span-8">
              
              {/* Section 1: Customer & Shipping Details */}
              <div
                className={`p-5 sm:p-6 rounded-xl border transition-all duration-200 shadow-sm ${
                  isDarkMode
                    ? 'bg-[#1c2541] border-slate-800/80'
                    : 'bg-white border-slate-200/70'
                }`}
              >
                <h2
                  className={`text-lg sm:text-xl font-bold tracking-tight mb-4 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  1. Shipping & Contact Information
                </h2>

                <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 sm:text-base">
                  {/* First Name */}
                  <div>
                    <label className="block mb-1 text-xs font-semibold text-slate-400 sm:text-sm">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className={`w-full px-3.5 py-2.5 text-sm sm:text-base rounded-lg border outline-none transition-all ${
                        isDarkMode
                          ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                      }`}
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block mb-1 text-xs font-semibold text-slate-400 sm:text-sm">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className={`w-full px-3.5 py-2.5 text-sm sm:text-base rounded-lg border outline-none transition-all ${
                        isDarkMode
                          ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-1 text-xs font-semibold text-slate-400 sm:text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm sm:text-base rounded-lg border outline-none transition-all ${
                        isDarkMode
                          ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                      }`}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block mb-1 text-xs font-semibold text-slate-400 sm:text-sm">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+250 78X XXX XXX"
                      className={`w-full px-3.5 py-2.5 text-sm sm:text-base rounded-lg border outline-none transition-all ${
                        isDarkMode
                          ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                      }`}
                    />
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="block mb-1 text-xs font-semibold text-slate-400 sm:text-sm">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street Address, House/Apartment No."
                      className={`w-full px-3.5 py-2.5 text-sm sm:text-base rounded-lg border outline-none transition-all ${
                        isDarkMode
                          ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                      }`}
                    />
                  </div>

                  {/* City / Location */}
                  <div className="sm:col-span-2">
                    <label className="block mb-1 text-xs font-semibold text-slate-400 sm:text-sm">
                      City / District *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Kigali"
                      className={`w-full px-3.5 py-2.5 text-sm sm:text-base rounded-lg border outline-none transition-all ${
                        isDarkMode
                          ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Payment Method */}
              <div
                className={`p-5 sm:p-6 rounded-xl border transition-all duration-200 shadow-sm ${
                  isDarkMode
                    ? 'bg-[#1c2541] border-slate-800/80'
                    : 'bg-white border-slate-200/70'
                }`}
              >
                <h2
                  className={`text-lg sm:text-xl font-bold tracking-tight mb-4 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  2. Payment Options
                </h2>

                <div className="space-y-3">
                  {/* Option A: Mobile Money */}
                  <label
                    className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === 'momo'
                        ? 'border-lime-500 bg-lime-500/10'
                        : isDarkMode
                        ? 'border-slate-800 bg-[#0b132b]/40'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Clean Custom Radio Circle */}
                      <div className="relative flex items-center justify-center flex-shrink-0">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="momo"
                          checked={formData.paymentMethod === 'momo'}
                          onChange={handleInputChange}
                          className="sr-only peer"
                        />
                        <div className="w-4 h-4 transition-colors rounded-full border-[1.5px] border-slate-400 peer-checked:border-lime-500" />
                        <div className="absolute w-2 h-2 transition-opacity rounded-full opacity-0 bg-lime-500 peer-checked:opacity-100" />
                      </div>
                      <span className="text-sm font-bold sm:text-base">Mobile Money (MTN / Airtel)</span>
                    </div>
                    <span className="text-xs font-bold sm:text-sm text-lime-600 dark:text-lime-400">Fast Pay</span>
                  </label>

                  {/* Mobile Money Details Dynamic Input */}
                  {formData.paymentMethod === 'momo' && (
                    <div className="pt-2 pl-7">
                      <label className="block mb-1 text-xs font-semibold sm:text-sm text-slate-400">
                        Mobile Money Number *
                      </label>
                      <input
                        type="tel"
                        name="momoNumber"
                        required
                        value={formData.momoNumber}
                        onChange={handleInputChange}
                        placeholder="0788123456"
                        className={`w-full max-w-sm px-3.5 py-2.5 rounded-lg border text-sm sm:text-base outline-none ${
                          isDarkMode
                            ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                        }`}
                      />
                    </div>
                  )}

                  {/* Option B: Credit / Debit Card */}
                  <label
                    className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-lime-500 bg-lime-500/10'
                        : isDarkMode
                        ? 'border-slate-800 bg-[#0b132b]/40'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Clean Custom Radio Circle */}
                      <div className="relative flex items-center justify-center flex-shrink-0">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="sr-only peer"
                        />
                        <div className="w-4 h-4 transition-colors rounded-full border-[1.5px] border-slate-400 peer-checked:border-lime-500" />
                        <div className="absolute w-2 h-2 transition-opacity rounded-full opacity-0 bg-lime-500 peer-checked:opacity-100" />
                      </div>
                      <span className="text-sm font-bold sm:text-base">Credit or Debit Card</span>
                    </div>
                    <span className="text-xs font-medium sm:text-sm text-slate-400">Visa / Mastercard</span>
                  </label>

                  {/* Card Details Dynamic Inputs */}
                  {formData.paymentMethod === 'card' && (
                    <div className="max-w-md pt-2 space-y-3 pl-7">
                      <div>
                        <label className="block mb-1 text-xs font-semibold sm:text-sm text-slate-400">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="4000 1234 5678 9010"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm sm:text-base outline-none ${
                            isDarkMode
                              ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                          }`}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block mb-1 text-xs font-semibold sm:text-sm text-slate-400">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            required
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm sm:text-base outline-none ${
                              isDarkMode
                                ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                                : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                            }`}
                          />
                        </div>
                        <div>
                          <label className="block mb-1 text-xs font-semibold sm:text-sm text-slate-400">
                            CVC / CVV *
                          </label>
                          <input
                            type="text"
                            name="cardCvc"
                            required
                            value={formData.cardCvc}
                            onChange={handleInputChange}
                            placeholder="123"
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm sm:text-base outline-none ${
                              isDarkMode
                                ? 'bg-[#0b132b] border-slate-700 text-white focus:border-lime-500'
                                : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-lime-500'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Option C: Cash on Delivery */}
                  <label
                    className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-lime-500 bg-lime-500/10'
                        : isDarkMode
                        ? 'border-slate-800 bg-[#0b132b]/40'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Clean Custom Radio Circle */}
                      <div className="relative flex items-center justify-center flex-shrink-0">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={handleInputChange}
                          className="sr-only peer"
                        />
                        <div className="w-4 h-4 transition-colors rounded-full border-[1.5px] border-slate-400 peer-checked:border-lime-500" />
                        <div className="absolute w-2 h-2 transition-opacity rounded-full opacity-0 bg-lime-500 peer-checked:opacity-100" />
                      </div>
                      <span className="text-sm font-bold sm:text-base">Pay on Delivery</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Order Summary (4 Columns) */}
            <div className="sticky lg:col-span-4 top-28">
              <div
                className={`p-5 sm:p-6 rounded-2xl border shadow-sm flex flex-col justify-between ${
                  isDarkMode
                    ? 'bg-[#1c2541] border-slate-800'
                    : 'bg-white border-slate-200/80'
                }`}
              >
                <div>
                  <h2
                    className={`text-lg sm:text-xl font-bold tracking-tight mb-4 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Order Summary
                  </h2>

                  {/* Item mini-list */}
                  <div className="pr-1 mb-6 space-y-3 overflow-y-auto max-h-48">
                    {ORDER_ITEMS.map((item) => (
                      <div key={item.cartItemId} className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="flex-shrink-0 object-contain p-1 bg-white border rounded-lg w-11 h-11"
                          />
                          <div className="truncate">
                            <p className="text-sm font-bold truncate">{item.name}</p>
                            <p className="text-xs text-slate-400">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="flex-shrink-0 text-sm font-semibold">
                          {(item.price * item.quantity).toLocaleString()} {item.currency}
                        </span>
                      </div>
                    ))}
                  </div>

                  <hr className="my-4 border-slate-200 dark:border-slate-800" />

                  {/* Calculations */}
                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-600 dark:text-slate-300">
                        Items total
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {itemsTotalPrice.toLocaleString()} RFW
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-600 dark:text-slate-300">
                        Tax
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {TAX_AMOUNT.toLocaleString()} RFW
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-600 dark:text-slate-300">
                        Shipping
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {SHIPPING_FEES.toLocaleString()} RFW
                      </span>
                    </div>

                    <hr className="my-4 border-slate-200 dark:border-slate-800" />

                    <div className="flex items-center justify-between pt-1">
                      <span
                        className={`text-sm font-black ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        } tracking-wide uppercase`}
                      >
                        TOTAL
                      </span>
                      <span
                        className={`text-lg sm:text-xl font-black ${
                          isDarkMode ? 'text-lime-400' : 'text-lime-600'
                        }`}
                      >
                        {grandTotal.toLocaleString()} RFW
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="flex flex-col gap-3 mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-lime-500 text-white hover:bg-lime-600 active:scale-[0.98] text-sm sm:text-base rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 tracking-wide flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      'Processing Order...'
                    ) : (
                      <>
                        <span className='font-semibold text-white'>Pay</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}