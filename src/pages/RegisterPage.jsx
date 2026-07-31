import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesData = [
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      title: "Track Sales & Inventory on the Cloud",
      desc: "Manage your electronics shop inventory in real-time, generate professional receipts, and track profits seamlessly from anywhere in Kigali."
    },
    {
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      title: "A Centralized Marketplace Experience",
      desc: "Allow tech customers across Rwanda to find your exact electronic models and device specifications instantly without checking individual websites."
    },
    {
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      title: "Streamlined Employee & Role Controls",
      desc: "Assign customized security permissions for your shop managers, cashiers, and repair technicians to protect your underlying business metrics."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesData.length]);

  return (
    <div className="flex min-h-screen w-full bg-[#121212] font-sans antialiased text-white">
      
      {/* LEFT SIDE: Sliding Track Carousel */}
      <div className="relative hidden overflow-hidden md:block md:w-1/2 bg-gray-950">
        <div
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slidesData.map((slide, index) => (
            <div key={index} className="relative flex-shrink-0 w-full h-full">
              <img src={slide.img} alt={`carousel-${index}`} className="object-cover w-full h-full" />
              {/* Gradient overlay for better dark mode readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
              
              {/* Integrated Text */}
              <div className="absolute max-w-xl text-white bottom-1/4 left-8 right-8 lg:left-16 lg:right-16">
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-white lg:text-3xl xl:text-4xl drop-shadow-md">
                  {slide.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-200 lg:text-base xl:text-lg drop-shadow-sm">
                  {slide.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Navigation Indicator Dots */}
        <div className="absolute z-20 flex justify-center w-full gap-3 bottom-10">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white w-8" : "bg-white/40 w-2.5 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Dark Mode Registration Form */}
      <div className="flex flex-col justify-center w-full px-6 py-10 md:w-1/2 sm:px-12 md:px-16 lg:px-24 xl:px-32 bg-[#121212]">
        <div className="w-full max-w-md mx-auto">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Create an account</h2>
          <p className="mb-8 text-sm text-gray-400 sm:text-base">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-400 hover:underline">Login</Link>
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            
            {/* 1. NAME FIELD */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#252525] transition text-base pr-12 placeholder-gray-500"
                required
              />
              <span className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
            </div>

            {/* 2. EMAIL FIELD */}
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#252525] transition text-base pr-12 placeholder-gray-500"
                required
              />
              <span className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </div>

            {/* 3. PASSWORD FIELD */}
            <div className="relative flex items-center">
              <input
                type="password"
                placeholder="Create Password"
                className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#252525] transition text-base pr-12 placeholder-gray-500"
                required
              />
              <span className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
            </div>

            {/* 4. ACCOUNT TYPE FIELD */}
            <div className="relative flex items-center">
              <select
                className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#252525] transition text-base pr-12 appearance-none cursor-pointer text-gray-400 focus:text-white"
                required
                defaultValue=""
              >
                <option value="" disabled hidden>Account Type</option>
                <option value="shop_owner" className="bg-[#1e1e1e] text-white">Shop Owner / Retailer</option>
                <option value="customer" className="bg-[#1e1e1e] text-white">General Customer (Buyer)</option>
              </select>
              
              {/* Dropdown Arrow Icon ONLY */}
              <span className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2">
                <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            {/* TERMS & CONDITIONS CHECKBOX */}
            <div className="flex items-center pt-2 space-x-2 select-none">
              <input type="checkbox" id="terms" className="w-4 h-4 rounded text-blue-500 border-gray-600 bg-[#1e1e1e] focus:ring-blue-500 cursor-pointer" required />
              <label htmlFor="terms" className="text-xs text-gray-400 cursor-pointer sm:text-sm">
                I agree With <Link to="#terms" className="text-blue-400 hover:underline">Terms & Conditions</Link>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="w-full py-3 px-4 bg-[#0091ff] hover:bg-blue-600 text-white font-semibold rounded-lg active:scale-[0.99] transition shadow-sm text-base mt-4">
              Create Account
            </button>
          </form>

          {/* DIVIDER */}
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
            <span className="relative bg-[#121212] px-3 text-sm text-gray-500 font-medium">Register With</span>
          </div>

          {/* GOOGLE REGISTER BUTTON */}
          <button type="button" className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-700 bg-transparent rounded-lg font-medium hover:bg-gray-900 active:scale-[0.99] transition text-base text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Google</span>
          </button>
        </div>
      </div>

    </div>
  );
}