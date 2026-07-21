import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesData = [
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      title: "Connect Your Shop to All of Kigali",
      desc: "List your inventory instantly on our unified marketplace. Let customers find your electronics effortlessly without jumping across multiple websites."
    },
    {
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      title: "Real-Time Multi-Shop Stock Transfers",
      desc: "Running low on stock in one branch? Seamlessly transfer serials, IMEIs, and accessories between your electronics stores with full transparency."
    },
    {
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      title: "Smart Repairs & Warranty Tracking",
      desc: "Keep your customers happy. Track electronics repairs from diagnosis to pickup, and easily manage serial-number-linked warranties in one click."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5s feels slightly less rushed for reading text
    return () => clearInterval(interval);
  }, [slidesData.length]);

  return (
    <div className="flex w-full min-h-screen font-sans antialiased text-gray-900 bg-white">
      
      {/* LEFT SIDE: Form */}
      <div className="flex flex-col justify-center w-full px-6 py-10 md:w-1/2 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-md mx-auto">
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Login</h2>
          <p className="mb-8 text-sm text-gray-500 sm:text-base">Welcome back! Please enter your details</p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 pr-12 text-base transition border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                />
                <span className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2 opacity-60">
                  <img src="/images/mail (1).png" alt="email icon" className="object-contain w-5 h-5" />
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 text-base transition border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                />
                <span className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2 opacity-60">
                  <img src="/images/padlock.png" alt="lock icon" className="object-contain w-5 h-5" />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-xs sm:text-sm">
              <label className="flex items-center space-x-2 cursor-pointer select-none">
                <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded cursor-pointer focus:ring-purple-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="font-medium text-purple-600 hover:underline">Forgot Password</Link>
            </div>

            <button type="submit" className="w-full py-3 px-4 bg-gray-950 text-white font-semibold rounded-lg hover:bg-gray-800 active:scale-[0.99] transition shadow-sm text-base mt-2">
              Login
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <span className="relative px-3 text-sm font-medium text-gray-400 bg-white">OR</span>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 active:scale-[0.99] transition text-base">
            <img src="/images/google.png" alt="google logo" className="object-contain w-5 h-5" />
            <span>Login with Google</span>
          </button>

          <p className="mt-8 text-sm text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-purple-600 hover:underline decoration-2">
              Create account
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Sliding Track Carousel */}
      <div className="relative hidden overflow-hidden md:block md:w-1/2 bg-gray-950">
        <div
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slidesData.map((slide, index) => (
            <div key={index} className="relative flex-shrink-0 w-full h-full">
              <img src={slide.img} alt={`carousel-${index}`} className="object-cover w-full h-full" />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              
              {/* Integrated Text: Glides seamlessly with the sliding image track */}
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

        {/* Dynamic Carousel Navigation Indicator Dots */}
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

    </div>
  );
}