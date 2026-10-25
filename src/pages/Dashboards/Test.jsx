import React, { useState } from 'react';

// --- Modern SVG Icons ---
const Icons = {
  Dashboard: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
  ),
  Shops: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  ),
  Chat: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
  ),
  HelpDesk: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ),
  Subscriptions: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  User: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  ),
  ChevronDown: () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
  ),
  Search: () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  ),
  Bell: () => (
    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  ),
  Plus: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
  ),
  Send: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
  ),
  Logout: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
  )
};

export default function TestSuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddShopModalOpen, setIsAddShopModalOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // --- SAMPLE SHOPS LIST ---
  const [shops, setShops] = useState([
    { id: 1, name: 'Kigali Tech Hub Store', owner: 'Jean Bosco', location: 'Nyabugogo', plan: 'Enterprise', status: 'Active', revenue: 'RWF 4,250,000' },
    { id: 2, name: 'Remera Gadgets Ltd', owner: 'Alice Uwase', location: 'Remera (Giporoso)', plan: 'Standard', status: 'Active', revenue: 'RWF 2,100,000' },
    { id: 3, name: 'City Center Electronics', owner: 'Eric Mugisha', location: 'KN 2 Ave, Kigali', plan: 'Enterprise', status: 'Suspended', revenue: 'RWF 5,800,000' },
    { id: 4, name: 'Kimironko Phone Clinic', owner: 'Diane Ingabire', location: 'Kimironko Market', plan: 'Basic', status: 'Active', revenue: 'RWF 950,000' },
  ]);

  // --- HELP & SUPPORT TICKETS ---
  const [helpTickets] = useState([
    {
      id: 'TCK-101',
      sender: 'Emmanuel K. (Inventory Manager)',
      shop: 'Kigali Tech Hub Store',
      role: 'Inventory Manager',
      issue: 'Where can I manage and approve stock transfers from Shop A to Shop B?',
      status: 'Open',
      time: '10 mins ago'
    },
    {
      id: 'TCK-102',
      sender: 'Claude M. (Technician)',
      shop: 'Kimironko Phone Clinic',
      role: 'Technician',
      issue: 'How do I issue a 6-month repair warranty status to a customer after replacing an LCD?',
      status: 'In Progress',
      time: '45 mins ago'
    },
  ]);

  // --- CHAT STATE ---
  const [selectedShopChat, setSelectedShopChat] = useState(shops[0]);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'shop', text: 'Hello Super Admin! We are having trouble printing receipts from our cashier terminal.', time: '10:30 AM' },
    { sender: 'admin', text: 'Hello Jean Bosco! Please check your POS printer settings in the shop settings tab.', time: '10:32 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleShopStatus = (id) => {
    setShops(shops.map(shop => shop.id === id ? { ...shop, status: shop.status === 'Active' ? 'Suspended' : 'Active' } : shop));
  };

  const deleteShop = (id) => {
    setShops(shops.filter(shop => shop.id !== id));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setChatMessages([...chatMessages, { sender: 'admin', text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setNewMessage('');
  };

  return (
    <div className="flex h-screen overflow-hidden font-sans text-gray-900 bg-gray-50">
      
      {/* --- SIDEBAR (WHITE BACKGROUND WITH ORIGINAL COLOR ACCENTS) --- */}
      <aside className="flex flex-col justify-between hidden w-64 text-gray-700 bg-white border-r border-gray-200 shadow-xs md:flex">
        <div>
          {/* Logo Area */}
          <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
            <div className="p-2 text-white bg-indigo-600 shadow-md rounded-xl">
              <Icons.Shield />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-gray-900">KigaliPOS Admin</h1>
              <p className="text-xs font-semibold text-indigo-600">Super Admin Portal</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: <Icons.Dashboard /> },
              { id: 'shops', label: 'Registered Shops', icon: <Icons.Shops /> },
              { id: 'support', label: 'Help Requests', icon: <Icons.HelpDesk />, badge: helpTickets.filter(t=>t.status==='Open').length },
              { id: 'chat', label: 'Shop Direct Chat', icon: <Icons.Chat /> },
              { id: 'subscriptions', label: 'Subscriptions & Billing', icon: <Icons.Subscriptions /> },
              { id: 'profile', label: 'Edit Profile', icon: <Icons.User /> },
              { id: 'settings', label: 'Global Settings', icon: <Icons.Settings /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.label}
                </div>
                {item.badge ? (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                ) : null}
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 m-4 text-center border-t border-gray-100 bg-gray-50 rounded-xl">
          <p className="text-xs font-medium text-gray-500">Kigali Cloud System v2.0</p>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        
        {/* --- HEADER --- */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 shadow-xs">
          
          {/* Left Side: Profile Info (Moved from Sidebar) & Search Bar */}
          <div className="flex items-center gap-6">
            
            {/* Admin Profile Info Card on Left Side */}
            <div className="relative">
              <div 
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center gap-3 cursor-pointer p-1.5 rounded-xl hover:bg-gray-100 transition-all border border-gray-200 bg-gray-50/50"
              >
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                  alt="Admin Profile" 
                  className="object-cover border-2 border-indigo-600 rounded-full shadow-xs w-9 h-9"
                />
                <div className="text-left">
                  <p className="text-sm font-bold leading-tight text-gray-900">Gatera Mugisha</p>
                  <p className="text-xs text-gray-500">admin@kigalipos.rw</p>
                </div>
                {/* Dropdown Icon right next to profile info */}
                <Icons.ChevronDown />
              </div>

              {/* Interactive Dropdown Menu */}
              {isUserDropdownOpen && (
                <div className="absolute left-0 z-30 py-2 mt-2 text-sm bg-white border border-gray-100 shadow-xl w-52 rounded-2xl">
                  <button 
                    onClick={() => { setActiveTab('profile'); setIsUserDropdownOpen(false); }} 
                    className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 flex items-center gap-2.5 font-medium transition-colors"
                  >
                    <Icons.User /> Edit Profile
                  </button>
                  <button 
                    onClick={() => { alert('Logged out successfully.'); setIsUserDropdownOpen(false); }} 
                    className="w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-50 flex items-center gap-2.5 font-medium border-t border-gray-100 transition-colors"
                  >
                    <Icons.Logout /> Logout
                  </button>
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative w-64 lg:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icons.Search />
              </span>
              <input
                type="text"
                placeholder="Search shops, owners, locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-sm transition-all bg-gray-100 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Right Side: Notifications */}
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 relative transition-colors">
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-2 right-2 animate-pulse"></span>
              <Icons.Bell />
            </button>
          </div>
        </header>

        {/* --- DYNAMIC VIEWS --- */}
        <main className="w-full p-8 mx-auto space-y-8 max-w-7xl">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <>
              {/* Quick Metrics */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { title: 'Total Registered Shops', value: '38 Shops', change: 'Nyabugogo, Remera, Downtown' },
                  { title: 'Help Requests Received', value: `${helpTickets.length} Tickets`, change: 'Roles: Admin, Inventory, Tech' },
                  { title: 'Total Active Users', value: '242 Users', change: 'Sellers, Cashiers & Managers' },
                  { title: 'Monthly Revenue', value: 'RWF 1.4M', change: 'Subscription renewals' },
                ].map((stat, idx) => (
                  <div key={idx} className="p-6 transition-shadow bg-white border border-gray-100 shadow-xs rounded-2xl hover:shadow-md">
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="mt-2 text-2xl font-black text-gray-900">{stat.value}</p>
                    <p className="mt-1 text-xs text-gray-400">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Recent Shops List */}
              <div className="overflow-hidden bg-white border border-gray-100 shadow-xs rounded-2xl">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">Electronics Shops Directory</h3>
                  <button onClick={() => setActiveTab('shops')} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                    Manage All Shops &rarr;
                  </button>
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs font-semibold text-gray-400 uppercase bg-gray-50">
                      <th className="py-3.5 px-6">Shop Name</th>
                      <th className="py-3.5 px-6">Owner</th>
                      <th className="py-3.5 px-6">Location</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Quick Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {shops.map((shop) => (
                      <tr key={shop.id} className="transition-colors hover:bg-gray-50/50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{shop.name}</td>
                        <td className="px-6 py-4 text-gray-600">{shop.owner}</td>
                        <td className="px-6 py-4 text-gray-500">{shop.location}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${shop.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                            {shop.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => { setSelectedShopChat(shop); setActiveTab('chat'); }}
                            className="px-3.5 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl text-xs font-bold transition-colors"
                          >
                            Chat with Shop
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* TAB 2: REGISTERED SHOPS (With Onboard Shop Button on Header) */}
          {activeTab === 'shops' && (
            <div className="p-6 space-y-6 bg-white border border-gray-100 shadow-xs rounded-2xl">
              <div className="flex flex-col items-start justify-between gap-4 pb-4 border-b border-gray-100 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Shops & Tenancy Management</h3>
                  <p className="mt-1 text-sm text-gray-500">Activate, suspend, or configure access for shops across Kigali.</p>
                </div>
                <button 
                  onClick={() => setIsAddShopModalOpen(true)}
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all"
                >
                  <Icons.Plus />
                  <span>+ Onboard New Shop</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs font-semibold text-gray-400 uppercase bg-gray-50">
                      <th className="py-3.5 px-6">Shop Name</th>
                      <th className="py-3.5 px-6">Owner</th>
                      <th className="py-3.5 px-6">Location</th>
                      <th className="py-3.5 px-6">Plan</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Super Admin Controls</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {shops.map((shop) => (
                      <tr key={shop.id} className="transition-colors hover:bg-gray-50/50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{shop.name}</td>
                        <td className="px-6 py-4 text-gray-600">{shop.owner}</td>
                        <td className="px-6 py-4 text-gray-500">{shop.location}</td>
                        <td className="px-6 py-4"><span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold">{shop.plan}</span></td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${shop.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                            {shop.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 space-x-2 text-right">
                          <button 
                            onClick={() => toggleShopStatus(shop.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${shop.status === 'Active' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'}`}
                          >
                            {shop.status === 'Active' ? 'Suspend' : 'Activate'}
                          </button>
                          <button 
                            onClick={() => deleteShop(shop.id)}
                            className="px-3 py-1.5 bg-red-100 text-red-800 hover:bg-red-200 rounded-lg text-xs font-semibold transition-colors"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: HELP REQUESTS */}
          {activeTab === 'support' && (
            <div className="space-y-6">
              <div className="p-6 bg-white border border-gray-100 shadow-xs rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900">User Help Requests</h3>
                <p className="mt-1 text-sm text-gray-500">Assist users across roles with system questions.</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {helpTickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between p-6 bg-white border border-gray-100 shadow-xs rounded-2xl">
                    <div>
                      <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-md">{ticket.role}</span>
                      <h4 className="mt-2 text-base font-bold text-gray-900">{ticket.issue}</h4>
                      <p className="mt-1 text-xs text-gray-500">Submitted by {ticket.sender} ({ticket.shop})</p>
                    </div>
                    <button onClick={() => { setSelectedShopChat(shops[0]); setActiveTab('chat'); }} className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 shadow-md rounded-xl shadow-indigo-600/20 hover:bg-indigo-700">
                      Reply & Assist
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SHOP DIRECT CHAT */}
          {activeTab === 'chat' && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xs h-[600px] flex overflow-hidden">
              <div className="flex flex-col w-1/3 border-r border-gray-100 bg-gray-50/50">
                <div className="p-4 text-base font-bold text-gray-800 border-b border-gray-100">
                  Active Shops & Managers
                </div>
                <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
                  {shops.map((s) => (
                    <div 
                      key={s.id}
                      onClick={() => setSelectedShopChat(s)}
                      className={`p-4 cursor-pointer transition-colors ${selectedShopChat.id === s.id ? 'bg-white border-l-4 border-indigo-600' : 'hover:bg-gray-100/50'}`}
                    >
                      <p className="text-base font-bold text-gray-900">{s.name}</p>
                      <p className="text-sm text-gray-500">{s.owner} ({s.location})</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col flex-1 bg-white">
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">{selectedShopChat.name}</h4>
                    <p className="text-sm font-semibold text-emerald-600">● Connected (Owner: {selectedShopChat.owner})</p>
                  </div>
                </div>

                <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-gray-50/30">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-md p-4 rounded-2xl text-base leading-relaxed ${
                        msg.sender === 'admin' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-xs'
                      }`}>
                        <p>{msg.text}</p>
                        <span className={`block text-xs mt-2 ${msg.sender === 'admin' ? 'text-indigo-200 text-right' : 'text-gray-400'}`}>{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-3 p-4 bg-white border-t border-gray-100">
                  <input
                    type="text"
                    placeholder={`Message ${selectedShopChat.name}...`}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 px-4 py-3 text-base bg-gray-100 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-indigo-500"
                  />
                  <button type="submit" className="flex items-center gap-2 px-5 py-3 text-base font-bold text-white bg-indigo-600 shadow-md hover:bg-indigo-700 rounded-xl shadow-indigo-600/20">
                    <Icons.Send /> Send
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 5: EDIT PROFILE */}
          {activeTab === 'profile' && (
            <div className="max-w-xl p-8 mx-auto space-y-6 bg-white border border-gray-100 shadow-xs rounded-2xl">
              <h3 className="pb-4 text-xl font-bold text-gray-900 border-b border-gray-100">Edit Profile</h3>
              
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                  alt="Avatar" 
                  className="object-cover w-20 h-20 border-2 border-indigo-600 rounded-full"
                />
                <button className="px-4 py-2 text-sm font-bold text-indigo-700 transition-colors bg-indigo-50 hover:bg-indigo-100 rounded-xl">
                  Change Photo
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
                  <input type="text" defaultValue="Gatera Mugisha" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Email Address</label>
                  <input type="email" defaultValue="admin@kigalipos.rw" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Phone Number</label>
                  <input type="text" defaultValue="+250 788 123 456" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500" />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button onClick={() => alert('Profile updated!')} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-md shadow-indigo-600/20">
                  Save Profile Changes
                </button>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* --- ONBOARD SHOP MODAL --- */}
      {isAddShopModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-md p-6 space-y-6 bg-white shadow-2xl rounded-3xl">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Onboard New Electronics Shop</h3>
              <button onClick={() => setIsAddShopModalOpen(false)} className="font-bold text-gray-400 hover:text-gray-600">✕</button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-xs font-semibold text-gray-600">Shop Name</label>
                <input type="text" placeholder="e.g., Nyabugogo Tech Center" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block mb-1 text-xs font-semibold text-gray-600">Owner Full Name</label>
                <input type="text" placeholder="e.g., Patrick Habimana" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block mb-1 text-xs font-semibold text-gray-600">Kigali Location / Branch</label>
                <input type="text" placeholder="e.g., UTC Building, Nyarugenge" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block mb-1 text-xs font-semibold text-gray-600">Subscription Plan</label>
                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500">
                  <option>Standard (RWF 35,000 / mo)</option>
                  <option>Enterprise (RWF 75,000 / mo)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button 
                onClick={() => setIsAddShopModalOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  alert('Shop successfully onboarded!');
                  setIsAddShopModalOpen(false);
                }}
                className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 shadow-md hover:bg-indigo-700 rounded-xl shadow-indigo-600/30"
              >
                Save & Activate Shop
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}