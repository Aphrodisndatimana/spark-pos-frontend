import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const HelpPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do customers find products without visiting individual shop websites?",
      answer: "Customers can simply use our search bar to find any electronic device or accessory. The platform aggregates live inventory across all participating store locations, showing real-time stock, prices, and locations in one unified place."
    },
    {
      question: "How do I process a sale using an IMEI or Serial Number?",
      answer: "Scan or search for the product barcode at the POS register. The system will prompt a selection modal displaying all in-stock IMEI/Serial numbers associated with that model. Select or scan the exact physical unit you are handing to the customer before finalizing payment."
    },
    {
      question: "How do customers claim warranties on products purchased?",
      answer: "Every sale generates a digital receipt linked to the item's unique IMEI/Serial number. Customers can present their digital receipt or phone number at any participating store location to verify active warranty coverage."
    },
    {
      question: "How does inter-shop stock lending and transfer work?",
      answer: "Go to 'Inventory' -> 'Stock Transfers', click 'New Transfer Request', choose whether you are moving stock to your own branch or lending to a partner shop, select the specific IMEIs, and specify a return due date if applicable."
    },
    {
      question: "How can customers track device repair progress?",
      answer: "When a customer leaves a device at the Repair Desk, they receive a unique tracking link via SMS or email. They can check real-time technician diagnostic updates, estimated completion times, and service costs online."
    },
    {
      question: "Can customers pay using Mobile Money (MoMo)?",
      answer: "Yes! The system supports instant Mobile Money (MoMo) payments, cash, and credit cards for both in-person POS checkouts and direct customer orders."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Container - pt-20 sm:pt-24 handles fixed navbar offset */}
      <main className="flex-grow pt-20 sm:pt-24">
        {/* Banner Section */}
        <div className="px-4 py-12 sm:py-16 text-center border-b bg-slate-100 border-slate-200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A3D6D]">
            Support & Help Center
          </h1>
          <p className="max-w-xl mx-auto mt-3 text-xs sm:text-sm md:text-base font-medium text-slate-600">
            Assistance for both everyday shoppers finding electronics and shop owners operating their store inventory.
          </p>
        </div>

        <div className="max-w-4xl px-4 sm:px-6 py-8 sm:py-12 mx-auto">
          
          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8 sm:mb-12 md:grid-cols-2">
            <div className="flex flex-col justify-between p-5 sm:p-6 bg-white border shadow-sm rounded-xl border-slate-200">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A3D6D] mb-2">Customer & Merchant Support</h3>
                <p className="mb-4 text-xs sm:text-sm text-slate-600">
                  Need help finding an item, tracking an order, checking repair tickets, or troubleshooting your POS account? Contact our team.
                </p>
              </div>
              <Link 
                to="/contact" 
                className="inline-block text-center w-full bg-[#1A3D6D] hover:bg-[#1A3D6D]/90 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-xs sm:text-sm"
              >
                Contact Support Desk
              </Link>
            </div>

            <div className="flex flex-col justify-between p-5 sm:p-6 bg-white border shadow-sm rounded-xl border-slate-200">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A3D6D] mb-2">Explore Platform Guides</h3>
                <p className="mb-4 text-xs sm:text-sm text-slate-600">
                  Learn how customers order products, how store owners sync stock across branches, and how warranty tracking works.
                </p>
              </div>
              <Link 
                to="/explore" 
                className="inline-block text-center w-full border border-[#1A3D6D] text-[#1A3D6D] hover:bg-slate-50 font-semibold py-2.5 px-4 rounded-lg transition-colors text-xs sm:text-sm"
              >
                Browse System Guides
              </Link>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="p-5 sm:p-8 bg-white border shadow-sm rounded-xl border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3D6D] mb-6 border-b pb-4">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="pb-4 border-b border-slate-100 last:border-none">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left font-semibold text-xs sm:text-sm md:text-base text-slate-800 hover:text-indigo-600 transition-colors focus:outline-none py-2"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-slate-500 transform transition-transform duration-200 flex-shrink-0 ml-2 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Accordion Content */}
                  <div 
                    className={`mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pt-1">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
              <ScrollToTop />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HelpPage;