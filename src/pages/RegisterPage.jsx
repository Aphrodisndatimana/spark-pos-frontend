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
              
              {/* Integrated Text: Slided gracefully alongside image tracks */}
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
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#252525] transition text-base pr-12 placeholder-gray-500"
                required
              />
              <span className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2 opacity-60">
                <img src="/images/user.png" alt="UserName Icon" className="object-contain w-5 h-5" />
              </span>
            </div>

            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#252525] transition text-base pr-12 placeholder-gray-500"
                required
              />
              <span className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2 opacity-60">
                <img src="/images/email.png" alt="email Icon" className="object-contain w-5 h-5" />
              </span>
            </div>

            <div className="relative flex items-center">
              <input
                type="password"
                placeholder="Create Password"
                className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#252525] transition text-base pr-12 placeholder-gray-500"
                required
              />
              <span className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2 opacity-60">
                <img src="/images/access-control.png" alt="lock Icon" className="object-contain w-5 h-5" />
              </span>
            </div>

            <div className="relative flex items-center">
              <select
                className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#252525] transition text-base pr-12 appearance-none cursor-pointer text-gray-400 focus:text-white"
                required
                defaultValue=""
              >
                <option value="" disabled hidden>Account Type</option>
                <option value="shop_owner" className="bg-[#1e1e1e] text-white">Shop Owner / Retailer</option>
                <option value="repair_technician" className="bg-[#1e1e1e] text-white">Repair Technician</option>
                <option value="customer" className="bg-[#1e1e1e] text-white">General Customer (Buyer)</option>
              </select>
              <span className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2 opacity-60">
                <img src="/images/down-arrow (1).png" alt="dropdown Icon" className="object-contain w-4 h-4" />
              </span>
            </div>

            <div className="flex items-center pt-2 space-x-2 select-none">
              <input type="checkbox" id="terms" className="w-4 h-4 rounded text-blue-500 border-gray-600 bg-[#1e1e1e] focus:ring-blue-500 cursor-pointer" required />
              <label htmlFor="terms" className="text-xs text-gray-400 cursor-pointer sm:text-sm">
                I agree to the <a href="#terms" className="text-blue-400 hover:underline">Terms & Conditions</a>
              </label>
            </div>

            <button type="submit" className="w-full py-3 px-4 bg-[#0091ff] hover:bg-blue-600 text-white font-semibold rounded-lg active:scale-[0.99] transition shadow-sm text-base mt-4">
              Create Account
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
            <span className="relative bg-[#121212] px-3 text-sm text-gray-500 font-medium">Register With</span>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-700 bg-transparent rounded-lg font-medium hover:bg-gray-900 active:scale-[0.99] transition text-base text-white">
            <img src="/images/google.png" alt="google logo" className="object-contain w-5 h-5" />
            <span>Google</span>
          </button>
        </div>
      </div>

    </div>
  );
}