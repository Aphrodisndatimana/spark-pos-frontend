import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 font-sans bg-black border-t text-neutral-400 border-neutral-900 selection:bg-neutral-800">
      <div className="grid grid-cols-1 gap-10 px-6 mx-auto mb-12 max-w-7xl lg:px-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
        
        {/* Company Profile Column */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center flex-shrink-0">
              <img 
                src="/images/logo.jpg" 
                alt="SparkPos Logo" 
                className="object-contain w-auto h-10 transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { 
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback circle if image fails to load */}
              <div className="items-center justify-center hidden w-10 h-10 text-lg font-black text-white bg-blue-600 shadow-lg rounded-xl shadow-blue-600/20">
                S
              </div>
            </div>
            <span className="text-2xl font-black tracking-tight text-transparent text-white bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text">
              SparkPos
            </span>
          </div>
          <p className="max-w-sm text-sm font-normal leading-relaxed text-neutral-400">
            Our purpose is to provide a reliable, lightning-fast way to manage your electronics stores while instantly connecting with other business storefronts — a multi-tenant space to manage and discover electronics.
          </p>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-5">
          <h4 className="pb-2 text-xs font-bold tracking-widest text-white uppercase border-b border-neutral-900">
            Contact Info
          </h4>
          <ul className="space-y-4 text-sm font-normal">
            <li className="flex items-start gap-3 group">
              <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-pink-500 group-hover:text-pink-400 transition-colors mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="flex-shrink-0 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span className="transition-colors group-hover:text-neutral-300">Makuza - Kigali - Rwanda</span>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-pink-500 group-hover:text-pink-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="flex-shrink-0 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.019a14.967 14.967 0 0 1-6.579-6.579l2.019-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <a href="tel:+250785215049" className="transition-colors group-hover:text-neutral-300">
                +250 785 215 049
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-5">
          <h4 className="pb-2 text-xs font-bold tracking-widest text-white uppercase border-b border-neutral-900">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm font-normal">
            {[
              { title: 'About Us', path: '/about' },
              { title: 'Help Center', path: '/help' },
              { title: 'Resources', path: '/resources' },
              { title: 'Partner Shop', path: '/partners' },
              { title: 'Sign in', path: '/login' },
              { title: 'Sign up', path: '/register' },
            ].map((link) => (
              <li key={link.title}>
                <Link 
                  to={link.path} 
                  className="inline-block transition-all duration-200 transform hover:text-white hover:translate-x-1"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Matrix Column */}
        <div className="space-y-5">
          <h4 className="pb-2 text-xs font-bold tracking-widest text-white uppercase border-b border-neutral-900">
            Social Matrix
          </h4>
          <div className="grid grid-cols-2 gap-2.5 text-sm font-normal">
            
            {/* Instagram */}
            <Link 
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-pink-500/30 hover:bg-neutral-900/50 hover:text-white transition-all duration-200 group"
            >
              <div className="p-1.5 rounded-lg bg-neutral-900 text-pink-500 border border-neutral-800 group-hover:bg-pink-500 group-hover:text-white transition-all duration-200 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <span className="text-xs font-medium truncate">Instagram</span>
            </Link>

            {/* Twitter / X */}
            <Link 
              to="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer" 
              aria-label="Twitter / X"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-500/30 hover:bg-neutral-900/50 hover:text-white transition-all duration-200 group"
            >
              <div className="p-1.5 rounded-lg bg-neutral-900 text-white border border-neutral-800 group-hover:bg-white group-hover:text-black transition-all duration-200 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="text-xs font-medium truncate">Twitter / X</span>
            </Link>

            {/* Facebook */}
            <Link 
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-blue-500/30 hover:bg-neutral-900/50 hover:text-white transition-all duration-200 group"
            >
              <div className="p-1.5 rounded-lg bg-neutral-900 text-blue-500 border border-neutral-800 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </div>
              <span className="text-xs font-medium truncate">Facebook</span>
            </Link>

            {/* WhatsApp */}
            <Link 
              to="https://web.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-green-500/30 hover:bg-neutral-900/50 hover:text-white transition-all duration-200 group"
            >
              <div className="p-1.5 rounded-lg bg-neutral-900 text-green-500 border border-neutral-800 group-hover:bg-green-500 group-hover:text-white transition-all duration-200 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053 .953 11.424.951 5.99 .951 1.566 5.323 1.563 10.753c-.001 1.706.452 3.369 1.311 4.842l-.994 3.63 3.767-.971z" />
                </svg>
              </div>
              <span className="text-xs font-medium truncate">WhatsApp</span>
            </Link>

          </div>
        </div>
      </div>

      {/* Lower Copyright Row */}
      <div className="flex flex-col items-center justify-between gap-4 px-6 pt-8 mx-auto text-xs font-normal border-t max-w-7xl lg:px-8 border-neutral-900 sm:flex-row text-neutral-500">
        <p>© {new Date().getFullYear()} SparkPos. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="transition-colors hover:text-neutral-300">Terms & Conditions</Link>
          <Link to="#" className="transition-colors hover:text-neutral-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}