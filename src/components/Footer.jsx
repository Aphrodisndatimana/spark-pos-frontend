import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-black font-sans text-neutral-400 border-t border-neutral-900 pt-20 pb-10 selection:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        
        {/* Profile Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* SITE LOGO PLACEHOLDER */}
            <div className="flex items-center justify-center flex-shrink-0 relative">
              <img 
                src="/images/logo.jpg" 
                alt="SparkPos Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { 
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback circle if image path is empty or broken */}
              <div className="hidden w-10 h-10 rounded-xl bg-blue-600 items-center justify-center text-white text-lg font-black shadow-lg shadow-blue-600/20">
                S
              </div>
            </div>
            <span className="text-2xl font-black text-white tracking-tight bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent">
              SparkPos
            </span>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400 font-normal max-w-sm">
            Our purpose is to provide a reliable, lightning-fast way to manage your electronics stores while instantly connecting with other business storefronts — A multi-tenant space to manage and find electronics.
          </p>
        </div>

        {/* Info Column */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-neutral-900 pb-2">
            Contact Info
          </h4>
          <ul className="space-y-4 text-sm font-normal">
            <li className="flex items-start gap-3.5 group">
              {/* Pin Map SVG */}
              <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-pink-500 group-hover:text-pink-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span className="group-hover:text-neutral-300 transition-colors pt-1">Makuza - Kigali - Rwanda</span>
            </li>
            <li className="flex items-center gap-3.5 group">
              {/* Phone SVG */}
              <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-pink-500 group-hover:text-pink-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.019a14.967 14.967 0 0 1-6.579-6.579l2.019-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <span className="group-hover:text-neutral-300 transition-colors">+250 785 215 049</span>
            </li>
          </ul>
        </div>

        {/* Links Column */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-neutral-900 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm font-normal">
            {['About US', 'Help Center', 'Resources', 'Partner Shop', 'Sign in', 'Sign up'].map((link) => (
              <li key={link}>
                <Link to="#" className="hover:text-white transition-all duration-200 transform hover:translate-x-1 block">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Stacked Layout Social Section */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-neutral-900 pb-2">
            Social Matrix
          </h4>
          <div className="grid grid-cols-2 gap-3 text-sm font-normal -ml-20">
            
            {/* Instagram */}
            <Link to="#" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-pink-500/30 hover:bg-neutral-900/50 hover:text-white transition-all duration-200 group text-center">
              <div className="p-2 rounded-lg bg-neutral-900 text-pink-500 border border-neutral-800 group-hover:bg-pink-500 group-hover:text-white transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <span className="text-xs font-medium">Instagram</span>
            </Link>

            {/* Twitter / X */}
            <Link to="#" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-500/30 hover:bg-neutral-900/50 hover:text-white transition-all duration-200 group text-center">
              <div className="p-2 rounded-lg bg-neutral-900 text-white border border-neutral-800 group-hover:bg-white group-hover:text-black transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="text-xs font-medium">Twitter / X</span>
            </Link>

            {/* Facebook */}
            <Link to="#" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-blue-500/30 hover:bg-neutral-900/50 hover:text-white transition-all duration-200 group text-center">
              <div className="p-2 rounded-lg bg-neutral-900 text-blue-500 border border-neutral-800 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </div>
              <span className="text-xs font-medium">Facebook</span>
            </Link>

            {/* Whatsapp */}
            <Link to="#" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-green-500/30 hover:bg-neutral-900/50 hover:text-white transition-all duration-200 group text-center">
              <div className="p-2 rounded-lg bg-neutral-900 text-green-500 border border-neutral-800 group-hover:bg-green-500 group-hover:text-white transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053 .953 11.424.951 5.99 .951 1.566 5.323 1.563 10.753c-.001 1.706.452 3.369 1.311 4.842l-.994 3.63 3.767-.971z" />
                </svg>
              </div>
              <span className="text-xs font-medium">WhatsApp</span>
            </Link>

          </div>
        </div>
      </div>

      {/* Lower Copyright Row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 border-t border-neutral-950 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4 font-normal">
        <p>© Spark pos. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-neutral-300 transition-colors">Terms & Condition</Link>
          <Link to="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}