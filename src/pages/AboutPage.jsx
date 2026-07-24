import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Container - pt-20 sm:pt-24 handles fixed navbar offset */}
      <main className="flex-grow pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-200 px-4 sm:px-6 py-12 sm:py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-700 uppercase bg-indigo-50 rounded-full">
              Unified Electronics Retail & Customer Marketplace
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3D6D] tracking-tight mb-4">
              Connecting Shoppers & Tech Merchants in One Place
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              We eliminate the hassle for customers searching across dozens of different shop websites. Our platform unifies shop inventories into a single marketplace while giving retailers powerful POS, inventory, and repair management tools.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
          
          {/* Mission & Customer Value */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3D6D] mb-4 border-b border-slate-100 pb-3">
              Built for Both Customers and Store Owners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Shopping for specific smartphones, laptops, or original accessories shouldn't require visiting multiple store websites or physically walking shop-to-shop. 
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our platform allows customers to search live product availability, check real-time store stock, compare prices, and order directly from local shop owners in one unified destination—backed by verified serial/IMEI tracking and authentic warranty protection.
            </p>
          </div>

          {/* Key Benefits for Customers & Merchants */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3D6D] mb-6 border-b border-slate-100 pb-3">
              How We Solve Shopping & Retail Frustrations
            </h2>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-1">One Search, All Local Shops</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Instead of navigating separate website links or messaging different vendors, customers can find exact device models, compare branch prices, and confirm instant in-store availability instantly.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-1">IMEI & Genuine Product Verification</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Shoppers receive unique serial/IMEI receipts with every transaction, giving them 100% confidence against counterfeit devices or lost warranty records.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-1">Inter-Shop Stock Sharing & Quick Dispatch</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If a customer’s chosen shop is temporarily out of stock, shop owners can instantly request the item from partner outlets in the network so the buyer never leaves empty-handed.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-1">Transparent Repair Tracking for Owners</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Customers who drop off devices for repair receive automated status updates via SMS and email from intake to completion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3D6D] mb-6 border-b border-slate-100 pb-3">
              What Our System Offers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-[#1A3D6D] mb-2 text-sm sm:text-base">🛍️ Unified Customer Discovery</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Customers easily locate electronics without jumping across individual store sites or calling multiple merchants.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-[#1A3D6D] mb-2 text-sm sm:text-base">⚡ Fast POS & Split Payments</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Smooth in-person and online checkout supporting Mobile Money (MoMo), cards, and digital receipts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-[#1A3D6D] mb-2 text-sm sm:text-base">📜 Digital Warranty Passports</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Customers store digital proof of purchase and warranty periods right on their phone or email.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-[#1A3D6D] mb-2 text-sm sm:text-base">🌐 Multi-Branch Inventory Ledger</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Merchants synchronize live inventory, serial numbers, and inter-shop lending across all branches effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1A3D6D] to-indigo-900 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Looking for Products or Managing a Store?</h3>
            <p className="text-indigo-200 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
              Find the gadgets you need from verified local sellers or bring your store inventory onto our platform today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link 
                to="/help" 
                className="w-full sm:w-auto px-6 py-2.5 bg-white text-[#1A3D6D] hover:bg-slate-100 font-semibold rounded-lg transition-colors text-xs sm:text-sm"
              >
                Go to Help Center
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </section>
      </main>
    <ScrollToTop />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;