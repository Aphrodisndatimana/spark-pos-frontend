import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Expanded product database with gallery images and technical specs
const PRODUCT_DATA = {
  1: {
    id: 1,
    name: 'iPhone 15',
    price: 320000,
    currency: 'RFW',
    brand: 'apple',
    rating: 5,
    reviewsCount: 128,
    inStock: true,
    description:
      'iPhone 15 brings you Dynamic Island, a 48 MP Main camera, and USB-C, all in a durable color-infused glass and aluminum design.',
    images: [
      '/images/products/iphones/i phone 15.jpg',
      '/images/products/iphones/i phone 15-angle2.jpg',
      '/images/products/iphones/i phone 15-back.jpg',
      '/images/products/iphones/i phone 15-side.jpg',
    ],
    storageOptions: ['128GB', '256GB', '512GB'],
    specs: {
      screen: '6.1-inch Super Retina XDR display',
      processor: 'A16 Bionic chip',
      camera: 'Advanced dual-camera system (48MP Main, 12MP Ultra Wide)',
      battery: 'Up to 20 hours video playback',
      os: 'iOS 17',
      weight: '171 grams',
    },
  },
  2: {
    id: 2,
    name: 'iPhone 17 Pro',
    price: 450000,
    currency: 'RFW',
    brand: 'apple',
    rating: 5,
    reviewsCount: 84,
    inStock: true,
    description:
      'Forged in titanium with revolutionary performance, advanced camera systems, and customizable Action Button.',
    images: [
      '/images/products/iphones/i phone pro 17.jpg',
      '/images/products/iphones/i phone pro 17-back.jpg',
      '/images/products/iphones/i phone pro 17-side.jpg',
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specs: {
      screen: '6.3-inch Super Retina XDR with ProMotion',
      processor: 'A19 Pro chip',
      camera: 'Pro camera system (48MP Main, 48MP Ultra Wide, Telephoto)',
      battery: 'Up to 24 hours video playback',
      os: 'iOS 19',
      weight: '187 grams',
    },
  },
};

export default function ProductDetail({ isDarkMode, setIsDarkMode }) {
  const { id } = useParams();

  // Fetch product or fallback to default product ID 2 if not found
  const product = PRODUCT_DATA[id] || PRODUCT_DATA[2];

  // Interactive UI States
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(
    product.storageOptions[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');

  const handleQuantityChange = (type) => {
    if (type === 'decrease' && quantity > 1) setQuantity(quantity - 1);
    if (type === 'increase') setQuantity(quantity + 1);
  };

  return (
    <div
      className={`flex flex-col min-h-screen antialiased transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-slate-800'
      }`}
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <header className="sticky top-0 z-50 w-full shadow-sm">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>

      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 mx-auto max-w-7xl mt-12 sm:mt-16">
        {/* Breadcrumb Navigation */}
        <nav
          className={`flex items-center flex-wrap gap-2 mb-6 sm:mb-8 text-xs sm:text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-slate-600'
          }`}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span>&gt;</span>
          <Link to="/catalog" className="hover:underline">
            Smartphones
          </Link>
          <span>&gt;</span>
          <span
            className={`font-semibold truncate max-w-[200px] sm:max-w-none ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 items-start">
          {/* LEFT: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 w-full">
            {/* Thumbnail Selectors */}
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-y-auto max-h-none sm:max-h-[500px] py-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 overflow-hidden transition-all ${
                    selectedImage === idx
                      ? 'border-sky-500 scale-95'
                      : isDarkMode
                      ? 'border-slate-700 hover:border-slate-500'
                      : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} preview ${idx}`}
                    className="object-contain w-full h-full p-1"
                  />
                </button>
              ))}
            </div>

            {/* Main Image View */}
            <div
              className={`relative flex items-center justify-center flex-1 p-4 sm:p-6 rounded-2xl border min-h-[300px] xs:min-h-[380px] sm:min-h-[500px] w-full ${
                isDarkMode
                  ? 'bg-[#1e293b] border-slate-700'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="object-contain max-h-[300px] sm:max-h-[420px] w-full transition-all duration-300"
              />
            </div>
          </div>

          {/* RIGHT: Product Options & Actions */}
          <div className="flex flex-col w-full">
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {product.name}
            </h1>

            {/* Price & Reviews Info */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 sm:mt-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-500">
                {product.price.toLocaleString()} {product.currency}
              </span>

              <div className="flex items-center">
                <span
                  className={`text-xs sm:text-sm font-medium ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  ({product.reviewsCount} reviews)
                </span>
              </div>
            </div>

            <p
              className={`mt-4 text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {product.description}
            </p>

            <hr
              className={`my-6 ${
                isDarkMode ? 'border-slate-800' : 'border-slate-200'
              }`}
            />

            {/* Storage Option Selector */}
            <div className="mb-6">
              <label
                className={`block mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Storage Capacity
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {product.storageOptions.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`py-2.5 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
                      selectedStorage === storage
                        ? 'bg-sky-500 text-white border-sky-500 shadow-md'
                        : isDarkMode
                        ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              {/* Quantity Counter */}
              <div
                className={`flex items-center justify-between border rounded-xl px-4 py-3 sm:w-36 ${
                  isDarkMode
                    ? 'bg-slate-800 border-slate-700'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="px-2 text-xl font-bold hover:text-sky-500 transition-colors"
                >
                  -
                </button>
                <span className="text-base sm:text-lg font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="px-2 text-xl font-bold hover:text-sky-500 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex items-center justify-center flex-1 gap-2 px-6 py-3.5 sm:py-4 font-bold text-white transition-all shadow-md bg-sky-500 hover:bg-sky-600 active:scale-[0.99] rounded-xl hover:shadow-lg text-sm sm:text-base">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Specifications & Details Tabs */}
        <div className="mt-12 sm:mt-16">
          <div
            className={`flex border-b ${
              isDarkMode ? 'border-slate-800' : 'border-slate-200'
            }`}
          >
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-3 sm:py-4 px-4 sm:px-6 font-bold text-sm sm:text-base transition-colors border-b-2 ${
                activeTab === 'specs'
                  ? 'border-sky-500 text-sky-500'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Technical Specifications
            </button>
          </div>

          <div className="py-6">
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className={`flex flex-col xs:flex-row justify-between gap-1 xs:gap-4 p-3.5 sm:p-4 rounded-xl border ${
                      isDarkMode
                        ? 'bg-slate-800/50 border-slate-700'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span
                      className={`font-semibold capitalize text-xs sm:text-sm ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {key}
                    </span>
                    <span className="font-medium text-xs sm:text-sm text-left xs:text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}