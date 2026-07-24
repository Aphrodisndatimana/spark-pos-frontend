import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from '../components/ScrollToTop';

const Partner = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    partnerType: "Retail Shop",
    branchCount: "1",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle partner application submission logic here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Container - pt-20 sm:pt-24 prevents fixed navbar overlap */}
      <main className="flex-grow pt-20 sm:pt-24">
        
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-200 px-4 sm:px-6 py-12 sm:py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-700 uppercase bg-indigo-50 rounded-full">
              Grow Your Business With Us
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3D6D] tracking-tight mb-4">
              Partner With Our Marketplace & POS Network
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              Connect your shop inventory to thousands of active tech buyers, digitize your branch sales, and share stock seamlessly across our seller ecosystem.
            </p>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-[#1A3D6D] mb-8">
            Why Partner With Our Platform?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg mb-4">
                  🚀
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-2">
                  Gain Direct Customer Exposure
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Put your products directly in front of buyers searching for phones, laptops, and accessories—without building or maintaining your own standalone website.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg mb-4">
                  🔄
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-2">
                  Inter-Shop Stock Sharing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Never lose a customer sale again. Request or lend stock to other verified shops in the partner network with automated IMEI and transfer tracking.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg mb-4">
                  💻
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-2">
                  Complete Store Management
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Get full access to cloud POS, thermal receipt printing, Mobile Money (MoMo) support, serial/IMEI tracking, and repair ticket management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3D6D] mb-2 text-center">
              Apply for Partnership
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 text-center mb-8">
              Fill out the details below and our onboarding team will reach out to set up your shop account.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-1">
                  Application Received!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Thank you for applying. A business partnership manager will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Business / Shop Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Kigali Electronics Hub"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="e.g. Jean Paul"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+250 788 000 000"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Partner Category
                    </label>
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    >
                      <option value="Retail Shop">Retail Electronics Shop</option>
                      <option value="Wholesaler">Wholesaler / Distributor</option>
                      <option value="Repair Center">Device Repair Center</option>
                      <option value="Individual Seller">Independent Technician</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Number of Branches
                    </label>
                    <select
                      name="branchCount"
                      value={formData.branchCount}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    >
                      <option value="1">1 Location</option>
                      <option value="2-5">2 to 5 Locations</option>
                      <option value="5+">More than 5 Locations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Additional Details / Questions
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the products you sell or any specific requirements..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A3D6D] hover:bg-[#1A3D6D]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-xs sm:text-sm shadow-sm"
                >
                  Submit Partner Application
                </button>
              </form>
            )}
          </div>
        </section>

      </main>
    <ScrollToTop />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Partner;