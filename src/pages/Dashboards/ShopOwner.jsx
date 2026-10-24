import React, { useState } from "react";

// --- SVG Icons Component Collection ---
const Icons = {
  Dashboard: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  Branches: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0l-3 3m3-3l3 3" />
    </svg>
  ),
  Workers: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Analytics: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  Reports: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Feedback: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  Help: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Logout: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  ChevronUp: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  ),
  Search: () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Bell: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
    </svg>
  ),
  Cart: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  ArrowUp: () => (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  ),
  MenuToggle: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};

const mostPurchasedProducts = [
  { id: 1, name: "Wireless Bluetooth Earbuds", category: "Electronics", salesCount: 1420, price: "$49.99", stock: "In Stock" },
  { id: 2, name: "Organic Cotton T-Shirt", category: "Apparel", salesCount: 980, price: "$24.50", stock: "In Stock" },
  { id: 3, name: "Stainless Steel Water Bottle", category: "Accessories", salesCount: 850, price: "$18.00", stock: "Low Stock" },
  { id: 4, name: "Smart Fitness Watch", category: "Electronics", salesCount: 620, price: "$129.99", stock: "In Stock" },
  { id: 5, name: "Ergonomic Office Chair", category: "Furniture", salesCount: 410, price: "$199.00", stock: "Out of Stock" }
];

export default function ShopOwnerDashboard() {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({ Reports: false });

  const toggleDropdown = (name) => {
    setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
    setActiveTab(name);
  };

  const menuGroups = [
    {
      title: "Menu",
      items: [
        { name: "Dashboard", Icon: Icons.Dashboard },
        { name: "Branches", Icon: Icons.Branches },
        {
          name: "Workers",
          Icon: Icons.Workers,
          subItems: ["Staff List", "Schedules", "Roles & Permissions"]
        }
      ]
    },
    {
      title: "Features",
      items: [
        { name: "Analytics", Icon: Icons.Analytics },
        {
          name: "Reports",
          Icon: Icons.Reports,
          subItems: [
            "Sales Reports",
            "Inventory Reports",
            "Branch Reports",
            "Financial Reports",
            "Repair Reports"
          ]
        }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Settings", Icon: Icons.Settings }
      ]
    },
    {
      title: "Generals",
      items: [
        { name: "Feedback", Icon: Icons.Feedback },
        { name: "Get Help", Icon: Icons.Help },
        { name: "Log out", Icon: Icons.Logout }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#DCDCDC] flex flex-col md:flex-row font-sans text-gray-800">
      {/* Mobile Top Navigation Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 md:hidden">
        <div className="flex items-center space-x-2">
          <div className="bg-[#FF8A00] text-white p-2 rounded-full font-bold">
            <Icons.Cart />
          </div>
          <span className="text-xl font-bold text-gray-900">Selesai</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-gray-600 rounded-md hover:text-gray-900 focus:outline-none"
        >
          {isSidebarOpen ? <Icons.Close /> : <Icons.MenuToggle />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col justify-between overflow-y-auto`}
      >
        <div className="p-5">
          {/* Brand Logo Header */}
          <div className="items-center hidden pb-4 mb-6 space-x-3 border-b border-gray-100 md:flex">
            <div className="bg-[#FF8A00] text-white p-2 rounded-full">
              <Icons.Cart />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">Selesai</span>
          </div>

          {/* Navigation Category Groups */}
          <nav className="space-y-6">
            {menuGroups.map((group, groupIdx) => (
              <div key={groupIdx}>
                <h3 className="px-3 mb-2 text-[16px] text-black font-medium">
                  {group.title}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const isDropdownOpen = !!openDropdowns[item.name];
                    const isActive = activeTab === item.name;

                    if (item.subItems) {
                      return (
                        <li key={item.name}>
                          {/* Parent Button: Orange ONLY if clicked/active */}
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                              isActive
                                ? "bg-[#FF8A00] text-white shadow-sm"
                                : "text-gray-500 hover:bg-gray-100"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <item.Icon />
                              <span>{item.name}</span>
                            </div>
                            {isDropdownOpen ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
                          </button>

                          {/* Expanded Dropdown List: Clean text with orange accent line */}
                          {isDropdownOpen && (
                            <ul className="pl-3 mt-1 ml-4 space-y-1 border-l-2 border-orange-400">
                              {item.subItems.map((subItem) => (
                                <li key={subItem}>
                                  <button
                                    onClick={() => {
                                      setActiveTab(subItem);
                                      setIsSidebarOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                      activeTab === subItem
                                        ? "text-orange-600 bg-orange-50"
                                        : "text-gray-700 hover:text-black hover:bg-gray-100"
                                    }`}
                                  >
                                    {subItem}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    }

                    return (
                      <li key={item.name}>
                        {/* Standard Button: Orange ONLY when clicked/active */}
                        <button
                          onClick={() => {
                            setActiveTab(item.name);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                            isActive
                              ? "bg-[#FF8A00] text-white shadow-sm"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <item.Icon />
                          <span>{item.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex flex-col flex-1 min-w-0">
        <header className="flex flex-col justify-between gap-4 px-4 py-4 bg-white border-b border-gray-200 md:px-8 md:flex-row md:items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
              Welcome back, <span className="text-blue-600">John!</span>
            </h1>
            <p className="text-sm text-gray-500">
              Here's what's happening with your shop today
            </p>
          </div>

          <div className="flex items-center space-x-3 md:space-x-5">
            <div className="relative flex-1 md:w-72">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icons.Search />
              </span>
              <input
                type="text"
                placeholder="Search............................"
                className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button className="relative p-1 text-gray-600 hover:text-gray-900">
              <Icons.Bell />
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1"></span>
            </button>
            <button className="p-1 text-gray-600 hover:text-gray-900">
              <Icons.Cart />
            </button>

            <div className="flex items-center pl-3 space-x-2 border-l border-gray-200 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80"
                alt="John Doe"
                className="object-cover border border-gray-200 rounded-full w-9 h-9"
              />
              <span className="hidden text-sm font-semibold text-gray-700 sm:inline">John Doe</span>
              <Icons.ChevronDown />
            </div>
          </div>
        </header>

        <div className="p-4 space-y-6 md:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
              <span className="text-sm font-medium text-gray-500">Total Sales</span>
              <div className="mt-3">
                <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">$4,892.45</h2>
                <div className="flex items-center text-xs font-semibold text-[#FF8A00] mt-2 space-x-1">
                  <Icons.ArrowUp />
                  <span>125.5% <span className="font-normal text-gray-500">from yesterday</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
              <span className="text-sm font-medium text-gray-500">Orders</span>
              <div className="mt-3">
                <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">128</h2>
                <div className="flex items-center text-xs font-semibold text-[#FF8A00] mt-2 space-x-1">
                  <Icons.ArrowUp />
                  <span>8.5% <span className="font-normal text-gray-500">from yesterday</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
              <span className="text-sm font-medium text-gray-500">Customer</span>
              <div className="mt-3">
                <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">287</h2>
                <div className="flex items-center text-xs font-semibold text-[#FF8A00] mt-2 space-x-1">
                  <Icons.ArrowUp />
                  <span>17.5% <span className="font-normal text-gray-500">from yesterday</span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
            <div className="flex flex-col justify-between gap-2 pb-4 border-b border-gray-100 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Most Purchased by many users</h3>
                <p className="text-sm text-gray-500">Top-performing products across all categories</p>
              </div>
              <button className="self-start text-sm font-semibold text-orange-500 hover:underline sm:self-auto">
                View All
              </button>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs font-semibold text-gray-400 uppercase border-b border-gray-100">
                    <th className="px-2 pb-3">Product</th>
                    <th className="px-2 pb-3">Category</th>
                    <th className="px-2 pb-3">Total Sold</th>
                    <th className="px-2 pb-3">Price</th>
                    <th className="px-2 pb-3">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-50">
                  {mostPurchasedProducts.map((product) => (
                    <tr key={product.id} className="transition-colors hover:bg-gray-50">
                      <td className="py-3.5 px-2 font-semibold text-gray-800">{product.name}</td>
                      <td className="py-3.5 px-2 text-gray-500">{product.category}</td>
                      <td className="py-3.5 px-2 font-medium text-gray-900">{product.salesCount.toLocaleString()} units</td>
                      <td className="py-3.5 px-2 font-medium text-gray-900">{product.price}</td>
                      <td className="py-3.5 px-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            product.stock === "In Stock"
                              ? "bg-green-100 text-green-800"
                              : product.stock === "Low Stock"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}