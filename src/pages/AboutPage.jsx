import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#111827] text-slate-100 selection:bg-indigo-500 selection:text-white'
          : 'bg-slate-50 text-slate-800 selection:bg-indigo-500 selection:text-white'
      }`}
    >
      {/* Navigation Bar */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Container - pt-20 sm:pt-24 handles fixed navbar offset */}
      <main className="flex-grow pt-20 sm:pt-24">
        {/* Hero Section */}
        <section
          className={`px-4 sm:px-6 py-12 sm:py-16 text-center border-b ${
            isDarkMode
              ? 'bg-[#111827] border-slate-800'
              : 'bg-white border-slate-200'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <span
              className={`inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full ${
                isDarkMode
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                  : 'bg-indigo-50 text-indigo-700'
              }`}
            >
              Unified Electronics Retail &amp; Customer Marketplace
            </span>
            <h1
              className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
                isDarkMode ? 'text-white' : 'text-[#1A3D6D]'
              }`}
            >
              Connecting Shoppers &amp; Tech Merchants in One Place
            </h1>
            <p
              className={`max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              We eliminate the hassle for customers searching across dozens of different shop websites. Our platform unifies shop inventories into a single marketplace while giving retailers powerful POS, inventory, and repair management tools.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl px-4 py-8 mx-auto space-y-8 sm:px-6 sm:py-12 sm:space-y-12">
          
          {/* Mission & Customer Value */}
          <div
            className={`p-6 sm:p-8 rounded-2xl border transition ${
              isDarkMode
                ? 'bg-[#1f2937] border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h2
              className={`text-xl sm:text-2xl font-bold mb-4 border-b pb-3 ${
                isDarkMode
                  ? 'text-white border-slate-700'
                  : 'text-[#1A3D6D] border-slate-100'
              }`}
            >
              Built for Both Customers and Store Owners
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed mb-4 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Shopping for specific smartphones, laptops, or original accessories shouldn't require visiting multiple store websites or physically walking shop-to-shop. 
            </p>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Our platform allows customers to search live product availability, check real-time store stock, compare prices, and order directly from local shop owners in one unified destination—backed by verified serial/IMEI tracking and authentic warranty protection.
            </p>
          </div>

          {/* Key Benefits for Customers & Merchants */}
          <div
            className={`p-6 sm:p-8 rounded-2xl border transition ${
              isDarkMode
                ? 'bg-[#1f2937] border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h2
              className={`text-xl sm:text-2xl font-bold mb-6 border-b pb-3 ${
                isDarkMode
                  ? 'text-white border-slate-700'
                  : 'text-[#1A3D6D] border-slate-100'
              }`}
            >
              How We Solve Shopping &amp; Retail Frustrations
            </h2>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                    isDarkMode
                      ? 'bg-indigo-500/20 text-indigo-400'
                      : 'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  1
                </div>
                <div>
                  <h3
                    className={`font-bold text-base sm:text-lg mb-1 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    One Search, All Local Shops
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Instead of navigating separate website links or messaging different vendors, customers can find exact device models, compare branch prices, and confirm instant in-store availability instantly.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                    isDarkMode
                      ? 'bg-indigo-500/20 text-indigo-400'
                      : 'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  2
                </div>
                <div>
                  <h3
                    className={`font-bold text-base sm:text-lg mb-1 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    IMEI &amp; Genuine Product Verification
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Shoppers receive unique serial/IMEI receipts with every transaction, giving them 100% confidence against counterfeit devices or lost warranty records.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                    isDarkMode
                      ? 'bg-indigo-500/20 text-indigo-400'
                      : 'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  3
                </div>
                <div>
                  <h3
                    className={`font-bold text-base sm:text-lg mb-1 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    Inter-Shop Stock Sharing &amp; Quick Dispatch
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    If a customer’s chosen shop is temporarily out of stock, shop owners can instantly request the item from partner outlets in the network so the buyer never leaves empty-handed.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                    isDarkMode
                      ? 'bg-indigo-500/20 text-indigo-400'
                      : 'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  4
                </div>
                <div>
                  <h3
                    className={`font-bold text-base sm:text-lg mb-1 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    Transparent Repair Tracking for Owners
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Customers who drop off devices for repair receive automated status updates via SMS and email from intake to completion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div
            className={`p-6 sm:p-8 rounded-2xl border transition ${
              isDarkMode
                ? 'bg-[#1f2937] border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h2
              className={`text-xl sm:text-2xl font-bold mb-6 border-b pb-3 ${
                isDarkMode
                  ? 'text-white border-slate-700'
                  : 'text-[#1A3D6D] border-slate-100'
              }`}
            >
              What Our System Offers
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6">
              <div
                className={`p-4 rounded-xl border ${
                  isDarkMode
                    ? 'bg-[#111827] border-slate-700'
                    : 'bg-slate-50 border-slate-100'
                }`}
              >
                <h4
                  className={`font-bold mb-2 text-sm sm:text-base ${
                    isDarkMode ? 'text-indigo-400' : 'text-[#1A3D6D]'
                  }`}
                >
                  🛍️ Unified Customer Discovery
                </h4>
                <p
                  className={`text-xs sm:text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Customers easily locate electronics without jumping across individual store sites or calling multiple merchants.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isDarkMode
                    ? 'bg-[#111827] border-slate-700'
                    : 'bg-slate-50 border-slate-100'
                }`}
              >
                <h4
                  className={`font-bold mb-2 text-sm sm:text-base ${
                    isDarkMode ? 'text-indigo-400' : 'text-[#1A3D6D]'
                  }`}
                >
                  ⚡ Fast POS &amp; Split Payments
                </h4>
                <p
                  className={`text-xs sm:text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Smooth in-person and online checkout supporting Mobile Money (MoMo), cards, and digital receipts.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isDarkMode
                    ? 'bg-[#111827] border-slate-700'
                    : 'bg-slate-50 border-slate-100'
                }`}
              >
                <h4
                  className={`font-bold mb-2 text-sm sm:text-base ${
                    isDarkMode ? 'text-indigo-400' : 'text-[#1A3D6D]'
                  }`}
                >
                  📜 Digital Warranty Passports
                </h4>
                <p
                  className={`text-xs sm:text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Customers store digital proof of purchase and warranty periods right on their phone or email.
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isDarkMode
                    ? 'bg-[#111827] border-slate-700'
                    : 'bg-slate-50 border-slate-100'
                }`}
              >
                <h4
                  className={`font-bold mb-2 text-sm sm:text-base ${
                    isDarkMode ? 'text-indigo-400' : 'text-[#1A3D6D]'
                  }`}
                >
                  🌐 Multi-Branch Inventory Ledger
                </h4>
                <p
                  className={`text-xs sm:text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Merchants synchronize live inventory, serial numbers, and inter-shop lending across all branches effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1A3D6D] to-indigo-900 text-white text-center shadow-lg">
            <h3 className="mb-2 text-xl font-bold sm:text-2xl">Looking for Products or Managing a Store?</h3>
            <p className="max-w-xl mx-auto mb-6 text-xs text-indigo-200 sm:text-sm">
              Find the gadgets you need from verified local sellers or bring your store inventory onto our platform today.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link 
                to="/help" 
                className="w-full sm:w-auto px-6 py-2.5 bg-white text-[#1A3D6D] hover:bg-slate-100 font-semibold rounded-lg transition-colors text-xs sm:text-sm shadow-sm"
              >
                Go to Help Center
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;