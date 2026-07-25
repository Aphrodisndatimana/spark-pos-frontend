import React, { useState } from 'react';

export default function HardwareSetupGuide() {
  const [selectedTab, setSelectedTab] = useState('all');

  const hardwareCategories = [
    {
      id: 'terminals',
      title: '1. Primary POS & Repair Terminals',
      description: 'The core computing devices used to access your cloud POS and inventory dashboard.',
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        {
          name: 'Sales Counter Terminal',
          specs: 'Desktop PC, Laptop, or Tablet (iPad/Android)',
          purpose: 'Billing, customer lookups, inventory checks, and processing cash/mobile money sales.',
          recommendation: 'Min. 4GB RAM, Core i3 or equivalent, Web Browser (Chrome/Edge).'
        },
        {
          name: 'Technician Workstation',
          specs: 'Laptop or Desktop PC',
          purpose: 'Logging repair tickets, managing device intake pictures, spare parts usage, and warranty tracking.',
          recommendation: 'Placed at the repair desk with direct USB access to barcode printers.'
        }
      ]
    },
    {
      id: 'scanners',
      title: '2. IMEI & Barcode Scanners',
      description: 'Essential for electronics shops to instantly read unique serial numbers, phone IMEIs, and product barcodes.',
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      ),
      items: [
        {
          name: '2D Wireless Barcode / IMEI Scanner',
          specs: 'Bluetooth or 2.4GHz Wireless (2D Image Sensor)',
          purpose: 'Reads phone IMEI numbers directly from device screens, original phone boxes, and small accessory tags.',
          recommendation: 'Must be 2D compatible (1D laser scanners struggle with screen scanning and QR codes).'
        },
        {
          name: 'Hands-Free Desktop Scanner (Optional)',
          specs: 'Omnidirectional USB Scanner',
          purpose: 'Fast hands-free scanning at high-volume checkout counters.',
          recommendation: 'Ideal for busy central branches.'
        }
      ]
    },
    {
      id: 'printers',
      title: '3. Thermal Printers & Labelers',
      description: 'Devices for printing physical receipts, IMEI barcode tags, and repair ticket stickers.',
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      ),
      items: [
        {
          name: '80mm Thermal Receipt Printer',
          specs: 'USB / Ethernet / Bluetooth (ESC/POS Compatible)',
          purpose: 'Prints customer receipts, payment confirmations, and warranty disclaimers.',
          recommendation: 'Look for models with an automatic cutter and an RJ11 Cash Drawer port.'
        },
        {
          name: 'Barcode & Repair Label Printer',
          specs: 'Direct Thermal Label Printer (e.g., Xprinter, Zebra)',
          purpose: 'Prints sticky barcode labels for unbranded items, IMEI stickers, and repair intake tags.',
          recommendation: 'Supports 50mm x 25mm or smaller jewelry/electronics sticker tags.'
        }
      ]
    },
    {
      id: 'cash',
      title: '4. Cash & Payment Hardware',
      description: 'Physical cash management and digital payment integration equipment.',
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        {
          name: 'Automatic Heavy-Duty Cash Drawer',
          specs: 'Standard RJ11 Keylock Drawer (24V)',
          purpose: 'Opens automatically when a cash sale is completed on the POS.',
          recommendation: 'Connects directly to the 80mm thermal receipt printer via RJ11 cable.'
        },
        {
          name: 'MTN / Airtel Mobile Money QR Stand',
          specs: 'Counter Display Stand',
          purpose: 'Allows customers in Kigali to scan and pay quickly via MoMo.',
          recommendation: 'Place prominently near the main terminal.'
        }
      ]
    },
    {
      id: 'network',
      title: '5. Network & Power Protection',
      description: 'Essential infrastructure to keep your cloud POS running uninterrupted in Kigali.',
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: [
        {
          name: '4G / 5G Dual-WAN Wi-Fi Router',
          specs: 'Router with SIM Card Slot / Failover Support',
          purpose: 'Ensures continuous connection to the cloud server if fiber/broadband drops.',
          recommendation: 'Insert an MTN or Airtel 4G SIM for automatic Internet backup.'
        },
        {
          name: 'Uninterruptible Power Supply (UPS)',
          specs: '650VA - 1200VA Line-Interactive UPS',
          purpose: 'Protects PCs, routers, and receipt printers against power spikes and sudden outages.',
          recommendation: 'Provides 15–30 minutes of backup time to complete ongoing transactions.'
        }
      ]
    }
  ];

  const filteredCategories = selectedTab === 'all' 
    ? hardwareCategories 
    : hardwareCategories.filter(cat => cat.id === selectedTab);

  return (
    <div className="min-h-screen px-4 py-10 text-gray-900 transition-colors bg-gray-50 dark:bg-neutral-900 dark:text-gray-100 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/50 text-[#2563eb] dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100 dark:border-blue-900">
            Hardware Setup Guide • Electronics Stores
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Required Hardware Setup
          </h1>
          <p className="max-w-2xl mx-auto text-sm text-gray-600 sm:text-base dark:text-gray-400">
            Complete list of recommended hardware devices needed to run sales, repair tickets, IMEI tracking, and multi-branch operations efficiently.
          </p>
        </div>

        {/* Quick Branch Checklist Banner */}
        <div className="p-6 space-y-4 text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <span>⚡</span> Standard Single-Branch Hardware Checklist
          </h2>
          <div className="grid grid-cols-2 gap-3 text-xs font-medium sm:grid-cols-3 lg:grid-cols-6 sm:text-sm">
            <div className="p-3 border bg-white/10 backdrop-blur-md rounded-xl border-white/10">
              <span className="block text-xs text-blue-200">POS Terminal</span>
              1x PC / Tablet
            </div>
            <div className="p-3 border bg-white/10 backdrop-blur-md rounded-xl border-white/10">
              <span className="block text-xs text-blue-200">IMEI Scanner</span>
              1x 2D Wireless
            </div>
            <div className="p-3 border bg-white/10 backdrop-blur-md rounded-xl border-white/10">
              <span className="block text-xs text-blue-200">Receipt Printer</span>
              1x 80mm Thermal
            </div>
            <div className="p-3 border bg-white/10 backdrop-blur-md rounded-xl border-white/10">
              <span className="block text-xs text-blue-200">Label Printer</span>
              1x Tag Printer
            </div>
            <div className="p-3 border bg-white/10 backdrop-blur-md rounded-xl border-white/10">
              <span className="block text-xs text-blue-200">Cash Drawer</span>
              1x RJ11 Drawer
            </div>
            <div className="p-3 border bg-white/10 backdrop-blur-md rounded-xl border-white/10">
              <span className="block text-xs text-blue-200">Power Backup</span>
              1x 650VA+ UPS
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 pb-2 overflow-x-auto border-b border-gray-200 dark:border-neutral-800 scrollbar-none">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg whitespace-nowrap transition-all ${
              selectedTab === 'all'
                ? 'bg-[#2563eb] text-white shadow-sm'
                : 'bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            All Categories
          </button>
          {hardwareCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedTab(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg whitespace-nowrap transition-all ${
                selectedTab === cat.id
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {cat.title.split('.')[1]}
            </button>
          ))}
        </div>

        {/* Categories & Hardware Cards */}
        <div className="space-y-8">
          {filteredCategories.map(category => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">{category.title}</h3>
                  <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {category.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col justify-between p-5 space-y-3 bg-white border border-gray-200 shadow-sm dark:bg-neutral-800 rounded-2xl dark:border-neutral-700/60"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">{item.name}</h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md">
                          Required
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#2563eb] dark:text-blue-400">
                        {item.specs}
                      </p>
                      <p className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-300">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">Usage: </span>
                        {item.purpose}
                      </p>
                    </div>

                    <div className="pt-3 text-xs text-gray-500 border-t border-gray-100 dark:border-neutral-700/50 dark:text-gray-400">
                      💡 <span className="font-medium text-gray-700 dark:text-gray-300">Recommendation:</span> {item.recommendation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Diagram / Wiring Architecture Section */}
        <div className="p-6 space-y-4 bg-white border border-gray-200 shadow-sm dark:bg-neutral-800 rounded-2xl dark:border-neutral-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            🔌 Counter Hardware Wiring Setup
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
            How all devices connect together at your sales counter:
          </p>
          
          <div className="grid grid-cols-1 gap-3 text-xs text-center sm:grid-cols-3">
            <div className="p-4 space-y-1 border border-gray-200 rounded-xl bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="font-bold text-blue-600 dark:text-blue-400">1. USB / Bluetooth</div>
              <p className="text-gray-500 dark:text-gray-400">Connect 2D Scanner & Tag Printer to PC/Tablet</p>
            </div>
            <div className="p-4 space-y-1 border border-gray-200 rounded-xl bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="font-bold text-blue-600 dark:text-blue-400">2. RJ11 Cable</div>
              <p className="text-gray-500 dark:text-gray-400">Connect Cash Drawer directly into 80mm Printer</p>
            </div>
            <div className="p-4 space-y-1 border border-gray-200 rounded-xl bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="font-bold text-blue-600 dark:text-blue-400">3. Power & Network</div>
              <p className="text-gray-500 dark:text-gray-400">Plug PC, Printer & Router into UPS battery backup</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}