import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatSupportWidget from '../components/ChatSupportWidget';
import { Link } from 'react-router-dom';

export default function HomePage() {
  // Theme Toggle State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Structural Section Tab States
  const [activeCustomerTab, setActiveCustomerTab] = useState('smart-search');
  const [activeBusinessTab, setActiveBusinessTab] = useState('inventory-tracking');
  const [activeFaqTab, setActiveFaqTab] = useState('getting-started');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Dynamic Content Mappings for Customer Experience
  const customerTabData = {
    'smart-search': {
      title: "Find Any Device Instantly",
      desc: "You make passing search workflows quick across multiple locations. Key product updates deliver direct visibility indexes straight down onto active consumer layouts securely.",
      img: 'images/Smart Product Search.jpg'
    },
    'price-comparison': {
      title: "Instant Price Comparison Matrix",
      desc: "Analyze matching electronic product items across separate vendor inventories instantly. Spot lower prices across town straight from the aggregated portal interface.",
      img: 'images/price-comparison.png'
    },
    'warranty-tracking': {
      title: "Digital Warranty Tracking Index",
      desc: "Monitor individual device coverage periods directly inside your profile space. No more tracking fragile physical receipts when running component claims workflows.",
      img: 'images/digital-wattant.jpg'
    },
    'secure-checkout': {
      title: "Frictionless Checkout Gateways",
      desc: "Lock down target item allocations using localized transaction networks seamlessly straight into integrated supplier point-of-sale environments.",
      img: 'images/secure-local-checkout.jpg'
    }
  };

  // Dynamic Content Mappings for Business Operations
  const businessTabData = {
    'inventory-tracking': {
      title: "Serialized Batch Tracking System",
      desc: "Link dynamic serial parameters right down onto store items lists to lock down precision parameters instantly across your cross-branch retail networks.",
      img: '/images/inventory&imei tracking.jpg'
    },
    'repair-workflow': {
      title: "Granular Repair Status Pipeline",
      desc: "Log broken electronic intake cycles, assign repairs tasks to technical staff elements, and trigger operational client text message updates smoothly.",
      img: '/images/repair.jpg'
    },
    'warranty-management': {
      title: "Automated Warranty Manager",
      desc: "No more paper cards or warranty agreements. Just a click to sign out. The software database hooks customer profiles data metrics together accurately. Check product coverage periods instantly in the panel.",
      img: '/images/warrant.jpg'
    },
    'stock-transfers': {
      title: "Multi-Branch Stock Synchronization",
      desc: "Balance catalog items positions seamlessly across independent warehouse storefront points with verified cryptographic internal transaction logs.",
      img: '/images/intershop.jpg'
    }
  };

  // FAQ Array Matrices
  const faqData = {
    'getting-started': [
      {
        q: "1. What is Spark POS and who is it built for?",
        a: "SparkPos is an advanced, multi-tenant cloud POS and inventory management ecosystem built explicitly for electronics retail shops, repair technicians, and consumer search navigation across Kigali City."
      },
      {
        q: "2. How do I setup my first local storefront account?",
        a: "Simply tap register inside the global console workspace headers to immediately open and initialize multi-tenant database systems configurations seamlessly."
      },
      {
        q: "3. Does the application interface link multiple independent managers?",
        a: "Yes. All authenticated branches sync securely underneath custom organizational accounts while separating private administrative data profiles entirely."
      }
    ],
    'features-setup': [
      {
        q: "1. How does dynamic IMEI tracking operationalize inside checkout?",
        a: "During processing workflows, unique hardware tags sync live into customer invoices to guarantee seamless lookup capabilities."
      }
    ],
    'translation-background': [
      {
        q: "1. Is localized currency calculation configured by default?",
        a: "Yes. All operational balances, tax configurations, and sale ledgers scale dynamically inside native Rwandan Franc (RWF) formatting."
      }
    ]
  };

  return (
    <div className={`min-h-screen font-sans antialiased pt-16 md:pt-20 transition-colors duration-300 selection:bg-[#e800c7] selection:text-white relative overflow-x-hidden ${
      isDarkMode ? 'bg-[#111827] text-white' : 'bg-[#f3f4f6] text-black'
    }`}>
      {/* Navbar Component */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* --- HERO SECTION --- */}
      <section className={`relative w-full border-b px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#1f2937] border-neutral-800' : 'bg-[#f4f3ef] border-gray-200'
      }`}>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 text-center sm:space-y-6">
          
          {/* Top Feature Tagline Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-[#2563eb]">
            <span className="w-4 sm:w-6 h-[2px] bg-[#2563eb] inline-block"></span>
            <span>POS</span>
            <span>•</span>
            <span>IMEI Tracking</span>
            <span>•</span>
            <span>Repairs &amp; Warranties</span>
            <span>•</span>
            <span>Multi-Shop</span>
          </div>

          {/* Main Headline */}
          <h1 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl sm:leading-tight'>
            Shop Fast. Sell More. Operate Easily <br className="hidden sm:inline" />
            <span className='text-2xl sm:text-3xl lg:text-4xl text-[#2563eb] font-bold block sm:inline mt-1 sm:mt-0'> Get Started For Free. Forever</span>
          </h1>

          {/* Body Paragraph */}
          <p className={`text-xs sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            The all-in-one platform for Shops, Repairs, and Smart shopping. Everything you need to manage your shop, track stock by serial number, and reach thousands of local buyers online.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center w-full max-w-md gap-3 pt-2 mx-auto sm:flex-row sm:gap-4 sm:pt-4 sm:max-w-none">
            <Link 
              to="/register" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#0066ff] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md transition-all text-center"
            >
              Get Started
            </Link>
            <Link 
              to="/products/mobile-devices-and-wearables/smartphones" 
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base border shadow-sm transition-all text-center ${
                isDarkMode 
                  ? 'bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700' 
                  : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
            >
              Browse Marketplace
            </Link>
          </div>

          {/* Feature Badges */}
          <div className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 sm:pt-6 text-xs sm:text-sm font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>100% Free Trial</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>Works on any smart device</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION: FOR CUSTOMERS --- */}
      <section className="w-full px-4 py-12 text-white bg-black sm:px-6 lg:px-8 sm:py-20 lg:py-24">
        <div className="grid items-center grid-cols-1 gap-8 mx-auto lg:gap-12 max-w-7xl lg:grid-cols-2">
          <div className="relative flex items-center justify-center w-full overflow-hidden border shadow-2xl rounded-xl border-neutral-800 aspect-video bg-neutral-900">
            <img src="/images/user strugling.jpg" alt="customer struggling" className="object-cover w-full h-full" />
          </div>

          <div className="space-y-3 sm:space-y-5">
            <span className="text-xs sm:text-sm font-black text-[#2563eb] tracking-widest block uppercase">— For Customers</span>
            <h2 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              All of Kigali's Electronics Shops, Right in Your Hands.
            </h2>
            <p className="max-w-xl text-xs font-light leading-relaxed text-gray-400 sm:text-base lg:text-lg">
              Stop wasting hours checking different catalogs or websites from shop to shop. Find all items right here in one place. Save time, lock down availability information, and locate matching variant choices without the stress.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION: SEE HOW SHOPPING IS EASY --- */}
      <section className="w-full px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-20 lg:py-24 max-w-7xl">
        <div className="mb-6 space-y-2 sm:mb-10 sm:space-y-3">
          <span className="text-[#2563eb] text-xs sm:text-sm font-extrabold tracking-wider uppercase block">— Built for your convenience</span>
          <h2 className={`text-xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            See how <span className="text-[#e800c7]">SparkPos</span> makes shopping easy
          </h2>
          <p className="text-xs font-normal text-gray-400 sm:text-sm lg:text-base">
            Find what you need immediately, examine alternative item choices, lock down your payments securely.
          </p>
        </div>

        {/* Scrollable Tab Filters Group */}
        <div className={`flex overflow-x-auto gap-4 sm:gap-8 border-b mb-6 sm:mb-10 w-full pb-1 scrollbar-none ${isDarkMode ? 'border-neutral-800' : 'border-gray-200'}`}>
          {[
            { id: 'smart-search', label: 'Smart Product Search' },
            { id: 'price-comparison', label: 'Instant Price Comparison' },
            { id: 'warranty-tracking', label: 'Digital Warranty Tracking' },
            { id: 'secure-checkout', label: 'Secure Local Checkout' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCustomerTab(tab.id)}
              className={`pb-3 sm:pb-4 text-xs sm:text-sm lg:text-base font-bold tracking-tight transition-all relative whitespace-nowrap cursor-pointer flex-shrink-0 ${
                activeCustomerTab === tab.id ? 'text-[#e800c7] font-black' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label}
              {activeCustomerTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#e800c7]" />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Inner Panel Card Component */}
        <div className={`rounded-2xl border p-5 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center shadow-sm w-full transition-colors duration-300 ${
          isDarkMode ? 'bg-[#1f2937] border-neutral-800' : 'bg-white border-gray-200'
        }`}>
          <div className={`relative rounded-xl overflow-hidden aspect-video w-full lg:col-span-7 border flex items-center justify-center ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-gray-50 border-gray-200'
          }`}>
            <img src={customerTabData[activeCustomerTab].img} alt={customerTabData[activeCustomerTab].title} className="object-cover w-full h-full"/>
          </div>

          <div className="flex flex-col justify-center h-full space-y-3 sm:space-y-5 lg:col-span-5">
            <h3 className={`text-lg sm:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {customerTabData[activeCustomerTab].title}
            </h3>
            <p className={`text-xs sm:text-base lg:text-lg leading-relaxed font-normal ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {customerTabData[activeCustomerTab].desc}
            </p>
            <Link to="/register" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#2563eb] hover:underline pt-1 sm:pt-2">
              <span>Explore Marketplace</span>
              <img src="/images/arrow.png" className='object-contain w-5 h-5 sm:w-6 sm:h-6' alt="arrow icon"/>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION: FOR STORE OWNERS --- */}
      <section className="w-full px-4 py-12 text-white bg-black sm:px-6 lg:px-8 sm:py-20 lg:py-24">
        <div className="grid items-center grid-cols-1 gap-8 mx-auto lg:gap-12 max-w-7xl lg:grid-cols-2">
          <div className="order-2 space-y-3 lg:order-1 sm:space-y-5">
            <span className="text-xs sm:text-sm font-black text-[#2563eb] tracking-widest block uppercase">— For Shop Owners</span>
            <h2 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Stop Losing Money to Manual Paperwork
            </h2>
            <p className="max-w-xl text-xs font-light leading-relaxed text-gray-400 sm:text-base lg:text-lg">
              Track multi-shop business parameters inside one beautiful dashboard space. Manage dynamic inventory stock levels, repairs logs, structural items processing workflows, and multi-branch transfer transactions automatically.
            </p>
          </div>
          
          <div className="relative flex items-center justify-center order-1 w-full overflow-hidden border shadow-2xl rounded-xl border-neutral-800 aspect-video bg-neutral-900 lg:order-2">
            <img src='/images/ShopOwner frustrating.jpg' alt='Frustrated Shop Owner' className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* --- SECTION: SEE HOW IT WORKS ON BUSINESSES --- */}
      <section className="w-full px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-20 lg:py-24 max-w-7xl">
        <div className="mb-6 space-y-2 sm:mb-10 sm:space-y-3">
          <span className="text-[#2563eb] text-xs sm:text-sm font-extrabold tracking-wider uppercase block">— Built for your creation</span>
          <h2 className={`text-xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            See how <span className="text-[#2563eb]">SparkPos</span> works for Businesses
          </h2>
          <p className="text-xs font-normal text-gray-400 sm:text-sm lg:text-base">
            Track components, run repair jobs pipelines, and map cross branch item adjustments cleanly.
          </p>
        </div>

        {/* Scrollable Tab Filters Group */}
        <div className={`flex overflow-x-auto gap-4 sm:gap-8 border-b mb-6 sm:mb-10 w-full pb-1 scrollbar-none ${isDarkMode ? 'border-neutral-800' : 'border-gray-200'}`}>
          {[
            { id: 'inventory-tracking', label: 'Inventory & IMEI Tracking' },
            { id: 'repair-workflow', label: 'Repair Workflow' },
            { id: 'warranty-management', label: 'Warranty Management' },
            { id: 'stock-transfers', label: 'Inter-Shops Stock Transfers' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveBusinessTab(tab.id)}
              className={`pb-3 sm:pb-4 text-xs sm:text-sm lg:text-base font-bold tracking-tight transition-all relative whitespace-nowrap cursor-pointer flex-shrink-0 ${
                activeBusinessTab === tab.id ? 'text-[#2563eb] font-black' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label}
              {activeBusinessTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2563eb]" />
              )}
            </button>
          ))}
        </div>

        {/* Business Grid Framework Container */}
        <div className={`rounded-2xl border p-5 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center shadow-sm w-full transition-colors duration-300 ${
          isDarkMode ? 'bg-[#1f2937] border-neutral-800' : 'bg-white border-gray-200'
        }`}>
          <div className="flex flex-col justify-center order-2 h-full space-y-3 lg:order-1 sm:space-y-5 lg:col-span-5">
            <h3 className={`text-lg sm:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {businessTabData[activeBusinessTab].title}
            </h3>
            <p className={`text-xs sm:text-base lg:text-lg leading-relaxed font-normal ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {businessTabData[activeBusinessTab].desc}
            </p>
            <Link to="/register" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#2563eb] hover:underline pt-1 sm:pt-2">
              <span>Get In Touch</span>
              <img src="/images/arrow.png" className='object-contain w-5 h-5 sm:w-6 sm:h-6' alt="arrow icon"/>
            </Link>
          </div>

          <div className={`relative rounded-xl overflow-hidden aspect-video w-full lg:col-span-7 border flex items-center justify-center order-1 lg:order-2 ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-gray-50 border-gray-200'
          }`}>
            <img src={businessTabData[activeBusinessTab].img} alt={businessTabData[activeBusinessTab].title} className="object-cover w-full h-full"/>
          </div>
        </div>
      </section>

      {/* --- SECTION: FAQ ACCORDION PANEL --- */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#0a0f19] text-white w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-8 space-y-2 text-center sm:mb-12 sm:space-y-3">
            <h2 className="text-xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">Frequently Asked Questions</h2>
            <p className="max-w-md mx-auto text-xs font-light sm:text-sm lg:text-base text-neutral-400">
              Everything you need to know matching system deployment data matrices and user tracking functions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center w-full gap-2 mb-6 sm:mb-10">
            {[
              { id: 'getting-started', label: 'Getting Started' },
              { id: 'features-setup', label: 'Features & Setup' },
              { id: 'translation-background', label: 'Translation & Background' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFaqTab(tab.id);
                  setOpenFaqIndex(0);
                }}
                className={`px-3.5 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                  activeFaqTab === tab.id 
                    ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-md' 
                    : 'bg-neutral-900 text-zinc-400 border-neutral-800 hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="w-full space-y-3">
            {faqData[activeFaqTab]?.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="w-full overflow-hidden transition-all border bg-neutral-900 border-neutral-800 rounded-xl">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="flex items-center justify-between w-full gap-3 px-4 py-3.5 sm:px-6 sm:py-4 text-left cursor-pointer hover:bg-neutral-850"
                  >
                    <span className="text-xs font-bold tracking-tight text-white sm:text-base">{item.q}</span>
                    <span className="text-xs sm:text-sm text-[#2563eb] flex-shrink-0">{isOpen ? '▲' : '▼'}</span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pt-2 pb-4 text-xs leading-relaxed border-t sm:text-sm bg-black/20 border-neutral-800/40 text-neutral-400">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- BRAND ACTION TARGET CONSOLE HOOK --- */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#040c1e] text-center text-white px-4 sm:px-6 lg:px-8 w-full border-t border-neutral-900">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-6">
          <h2 className="text-xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
            Shop, Manage and Collaborate With SparkPos
          </h2>
          <p className="text-[#e800c7] font-black text-lg sm:text-2xl lg:text-3xl tracking-wider">
            Starting at RWF0, today
          </p>
          <p className="max-w-xl mx-auto text-xs leading-relaxed sm:text-sm lg:text-base text-blue-200/70">
            Join 4,000+ Kigali Shops Leaving Paper Behind to Connect, Sell and Shop Smarter.
          </p>
          <div className="flex flex-col items-center justify-center w-full max-w-sm gap-3 pt-3 mx-auto sm:flex-row sm:gap-4 sm:pt-6 sm:max-w-none">
            <Link to='/register' className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-[#e800c7] hover:bg-[#d000b2] text-white font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer text-center">
              Start Free Now
            </Link>
            <Link to='/login' className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-black text-black transition-all bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 text-center">
              Log In
            </Link>
          </div>
        </div>
      </section>

      {/* --- SUB PANEL EMAIL INPUT GATE --- */}
      <section className={`py-8 sm:py-12 border-t px-4 sm:px-6 lg:px-8 w-full transition-colors duration-300 ${
        isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-gray-100 border-gray-200'
      }`}>
        <div className="flex flex-col items-center justify-between gap-4 mx-auto lg:flex-row sm:gap-6 max-w-7xl">
          <div className="text-center lg:text-left">
            <h4 className={`font-black text-sm sm:text-base lg:text-lg tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Get live updates notification for SparkPos — free
            </h4>
            <p className="mt-0.5 text-xs sm:text-sm text-gray-400">Join 3,500+ shop owners getting weekly updates lines.</p>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} className={`w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-lg border shadow-sm ${
            isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-300'
          }`}>
            <input 
              type="email" 
              required
              placeholder="Your Email Address" 
              className={`bg-transparent text-xs sm:text-sm px-3.5 py-2.5 outline-none w-full sm:w-64 lg:w-72 placeholder-gray-400 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            />
            <button type="submit" className="w-full sm:w-auto bg-[#2563eb] hover:bg-blue-700 text-white font-black text-xs sm:text-sm px-5 py-2.5 rounded-md cursor-pointer transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* --- REUSABLE CHAT WIDGET --- */}
      <ChatSupportWidget isDarkMode={isDarkMode} />

      <Footer />
    </div>
  );
}