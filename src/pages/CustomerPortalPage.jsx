import React, { useState } from 'react';

export default function CustomerPortal() {
  const [activeTab, setActiveTab] = useState('overview');

  // Customer profile metrics
  const loyaltyPoints = 450;
  const currentTier = "Gold Member";

  const customerOrders = [
    { id: "INV-2026-891", item: "iPhone 15 Pro Max (256GB)", date: "May 12, 2026", price: "1,450,000 RWF", status: "Delivered" },
    { id: "INV-2026-904", item: "Anker PowerCore 20k mAh", date: "July 04, 2026", price: "65,000 RWF", status: "Processing" }
  ];

  const ongoingRepairs = [
    { id: "REP-8840", device: "MacBook Pro 14\"", fault: "Liquid damage / Board short circuit", status: "In Diagnostics", progress: 25 },
    { id: "REP-9102", device: "Samsung Galaxy S24 Ultra", fault: "Battery Replacement", status: "Ready for Pickup", progress: 100 }
  ];

  return (
    <div className="min-h-screen bg-[#090A10] text-[#A3AED0] font-sans p-6 flex flex-col justify-between">
      
      {/* Top Banner & Customer Greeting */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 bg-[#111322] p-6 rounded-2xl border border-slate-800/60 gap-4">
        <div>
          <h1 className="text-xl font-bold text-white">Mugisha Emmanuel</h1>
          <p className="text-xs font-medium text-purple-400">{currentTier} • {loyaltyPoints} Active Rewards Points</p>
        </div>

        {/* Quick Search for Receipts or Repairs */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Track ticket ID or Invoice #..." 
              className="bg-[#181A2A] border border-slate-800 rounded-xl py-2 px-4 text-xs text-slate-200 focus:outline-none focus:border-purple-500 transition-all w-64"
            />
          </div>
          <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white rounded-full shadow-md bg-gradient-to-tr from-purple-600 to-indigo-600">
            ME
          </div>
        </div>
      </header>

      {/* Main Grid Split */}
      <div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-4 grow">
        
        {/* Navigation Sidebar */}
        <aside className="bg-[#111322] p-4 rounded-2xl border border-slate-800/60 space-y-1 lg:col-span-1">
          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 px-3 mb-2">My Account</p>
          
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${activeTab === 'overview' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:bg-[#181A2A] hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Dashboard Overview
          </button>

          <button 
            onClick={() => setActiveTab('history')}
            className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${activeTab === 'history' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:bg-[#181A2A] hover:text-white'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            Purchase History
          </button>
        </aside>

        {/* Workspace Display */}
        <main className="space-y-6 lg:col-span-3">
          
          {/* TAB 1: OVERVIEW BLOCK */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Active Repairs / Tickets Track Row */}
              <div className="bg-[#111322] p-5 rounded-2xl border border-slate-800/60 space-y-4">
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-white uppercase">My Active Device Repairs</h3>
                  <p className="text-[11px] text-slate-500">Live technical progress updates from the workbench floor</p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {ongoingRepairs.map((repair) => (
                    <div key={repair.id} className="p-4 bg-[#181A2A] rounded-xl border border-slate-800/40 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="block font-mono text-xs font-bold text-purple-400">{repair.id}</span>
                          <span className="text-sm font-bold text-white mt-0.5 block">{repair.device}</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${repair.progress === 100 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                          {repair.status}
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-400">{repair.fault}</p>
                      
                      {/* Step Progress Line */}
                      <div className="space-y-1">
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="h-full transition-all bg-purple-500" style={{ width: `${repair.progress}%` }} />
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono flex justify-end">{repair.progress}% Completed</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Loyalty Status Widget */}
              <div className="flex flex-col items-center justify-between gap-4 p-5 border bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-2xl border-purple-500/10 sm:flex-row">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-white">Unlock next reward tier at 500 points!</h4>
                  <p className="text-xs text-purple-300">Earn 10 points for every 10,000 RWF spent on retail accessories or hardware upgrades.</p>
                </div>
                <div className="bg-[#111322] py-2 px-4 rounded-xl border border-purple-500/20 font-mono font-bold text-white text-md">
                  {loyaltyPoints} / 500
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PURCHASE HISTORY TABLE */}
          {activeTab === 'history' && (
            <div className="bg-[#111322] p-5 rounded-2xl border border-slate-800/60 space-y-4">
              <h3 className="text-xs font-bold tracking-wider text-white uppercase">Invoices & Store Purchases</h3>
              
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-[#181A2A] text-slate-400 font-semibold">
                      <th className="p-3">Invoice Number</th>
                      <th className="p-3">Purchased Model Reference</th>
                      <th className="p-3">Checkout Date</th>
                      <th className="p-3">Paid Amount</th>
                      <th className="p-3 text-right">Fulfillment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40 text-slate-300">
                    {customerOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-[#141625]">
                        <td className="p-3 font-mono font-bold text-white">{order.id}</td>
                        <td className="p-3">{order.item}</td>
                        <td className="p-3 text-slate-400">{order.date}</td>
                        <td className="p-3 font-mono text-purple-300">{order.price}</td>
                        <td className="p-3 text-right">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${order.status === 'Delivered' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Footer Ecosystem Branding */}
      <footer className="mt-8 pt-4 border-t border-slate-900 flex justify-between text-[11px] text-slate-600 font-mono">
        <span>Verified Store Customer Portal Connection</span>
        <span>Secure Session Instance</span>
      </footer>
    </div>
  );
}