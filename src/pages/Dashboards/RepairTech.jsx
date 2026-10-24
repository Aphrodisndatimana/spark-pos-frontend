import React, { useState } from 'react';

// Define the navigation items as a constant array
const NAVIGATION_ITEMS = [
  { name: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { name: 'Repair Jobs', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  { name: 'POS', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
  { name: 'Invoices', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { name: 'Inventory', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { name: 'Customers', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { name: 'Suppliers', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' },
  { name: 'Expenses', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
  { name: 'Reports', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { name: 'Staff', icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.654 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
];

export default function RepairDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      
      {/* MOBILE SIDEBAR OVERLAY */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 text-gray-300 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div>
          {/* Brand */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg">Hartley Repairs</span>
            </div>
            {/* Close button for mobile */}
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Map - Scrollable but with scrollbars hidden using custom inline style/classes */}
          <div className="px-3 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-140px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-900'
                      : 'text-gray-400 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Logout Button */}
        <div className="px-4 border-t border-zinc-800 py-4 bg-zinc-900">
          <button 
            onClick={() => alert('Logging out...')}
            className="flex items-center gap-3 w-full px-4 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition py-2.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-y-auto flex flex-col w-full">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8 py-4 sm:py-6 bg-white border-b border-gray-200 gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{activeTab} Overview</h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Thursday, 12 March</p>
            </div>
            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 border border-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 shadow-sm">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              New sale
            </button>
            <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              New repair job
            </button>
          </div>
        </div>

        {/* Dynamic Body Content */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 flex-1">
          {activeTab === 'Dashboard' ? (
            <>
              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-gray-500">Open repair jobs</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">18</h3>
                  <p className="text-xs text-gray-500 mt-1">5 due today</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-gray-500">Ready for pickup</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">6</h3>
                  <p className="text-xs text-gray-500 mt-1">2 waiting since Monday</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-gray-500">Today’s revenue</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">$1,284.50</h3>
                  <p className="text-xs text-gray-500 mt-1">Repairs $940 · POS $344.50</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-gray-500">Low stock</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mt-2">4 items</h3>
                  <p className="text-xs text-gray-500 mt-1">Below reorder level</p>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                
                {/* Repair Jobs Table */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                    <h2 className="font-bold text-gray-900 text-base">Repair jobs</h2>
                    <button onClick={() => setActiveTab('Repair Jobs')} className="text-sm font-medium text-emerald-600 hover:underline">View all</button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <thead>
                        <tr className="border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase">
                          <th className="py-3 px-6">Job</th>
                          <th className="py-3 px-6">Item</th>
                          <th className="py-3 px-6">Customer</th>
                          <th className="py-3 px-6">Status</th>
                          <th className="py-3 px-6">Due</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium text-gray-900">RJ-2041</td>
                          <td className="py-4 px-6">
                            <div className="font-medium text-gray-900">Galaxy S23</div>
                            <div className="text-xs text-gray-400">Screen + battery</div>
                          </td>
                          <td className="py-4 px-6 text-gray-600">Amara Okafor</td>
                          <td className="py-4 px-6"><span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-100 text-amber-800">In process</span></td>
                          <td className="py-4 px-6 text-gray-600">Today</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium text-gray-900">RJ-2044</td>
                          <td className="py-4 px-6">
                            <div className="font-medium text-gray-900">Bosch washer</div>
                            <div className="text-xs text-gray-400">Drum bearing</div>
                          </td>
                          <td className="py-4 px-6 text-gray-600">Daniel Price</td>
                          <td className="py-4 px-6"><span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-100 text-blue-800">Submitted</span></td>
                          <td className="py-4 px-6 text-gray-600">14 Mar</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium text-gray-900">RJ-2042</td>
                          <td className="py-4 px-6">
                            <div className="font-medium text-gray-900">ThinkPad T14</div>
                            <div className="text-xs text-gray-400">No power</div>
                          </td>
                          <td className="py-4 px-6 text-gray-600">Leila Haddad</td>
                          <td className="py-4 px-6"><span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800">Ready</span></td>
                          <td className="py-4 px-6 text-gray-600">Today</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Column: Inventory Alerts & Recent Activity */}
                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h2 className="font-bold text-gray-900 text-base mb-4">Inventory alerts</h2>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between"><span className="text-gray-700">USB-C charging port</span><span className="text-red-600 font-semibold text-xs">2 left</span></div>
                      <div className="flex justify-between"><span className="text-gray-700">6205 drum bearing</span><span className="text-red-600 font-semibold text-xs">1 left</span></div>
                      <div className="flex justify-between"><span className="text-gray-700">Thermal paste 4g</span><span className="text-red-600 font-semibold text-xs">3 left</span></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h2 className="font-bold text-gray-900 text-base mb-4">Recent activity</h2>
                    <div className="text-sm text-gray-600 flex items-start gap-3">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                      <p><strong className="text-gray-900">Ravi</strong> marked RJ-2042 as Ready</p>
                    </div>
                  </div>
                </div>

              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12 text-center shadow-sm">
              <h2 className="text-xl font-bold text-gray-800">{activeTab} Management</h2>
              <p className="text-gray-500 mt-2">Content and details for the {activeTab} section will appear here.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}