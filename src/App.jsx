import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPassword from './pages/ForgotPasswordPage';
import SuperAdminDashboard from './pages/Dashboards/SuperAdmin';
import ShopOwnerDashboard from './pages/Dashboards/ShopOwner';
import BranchManagerDashboard from './pages/Dashboards/BranchManager';
import SellerDashboard from './pages/Dashboards/Seller';
import RepairTechDashboard from './pages/Dashboards/RepairTech';
import CustomerPortal from './pages/CustomerPortalPage';
import PageNotFound from './pages/404Page';
import InterShopTransfersPage from './pages/Resources/InterShopTransfersPage';
import WarrantyManagerPage from './pages/Resources/WarrantyManagerPage';
import AboutUs from './pages/AboutPage';
import HelpCenter from './pages/HelpPage';
import Partner from './pages/PartnerPage';
import RepairsPage from './pages/Resources/Repairs';
import ImeiCheckPage from './pages/Resources/ImeiSerialTrackingPage';
import ProductCatalog from './pages/Products/ProductCatalog';
import ProductDetail from './pages/Products/ProductDetail';
import Cart from './pages/Products/ShoppingCart';

function App() {
  // First load defaults to Light Mode (false) unless stored as dark in localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Keep html 'dark' class and localStorage in sync across the entire application
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/register" element={<RegisterPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/login" element={<LoginPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/forgot-password" element={<ForgotPassword isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/about" element={<AboutUs isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/help" element={<HelpCenter isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/partners" element={<Partner isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />

        {/* Dashboards Pages */}
        <Route path="/super-admin-dashboard" element={<SuperAdminDashboard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/shop-owner-dashboard" element={<ShopOwnerDashboard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/branch-manager-dashboard" element={<BranchManagerDashboard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/seller-dashboard" element={<SellerDashboard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/repair-tech-dashboard" element={<RepairTechDashboard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />

        {/* Products dropdownLink Pages */}
        <Route path="/products/mobile-devices-and-wearables/smartphones" element={<ProductCatalog isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/products/mobile-devices-and-wearables/smartphones/productdetail/:id" element={<ProductDetail isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>} />
        <Route path="/products/cart" element={<Cart isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>} />

        {/* Resources dropdownLink Pages */}
        <Route 
          path="/resources/repairs" 
          element={<RepairsPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} 
        />
        <Route path="/resources/imei-tracking" element={<ImeiCheckPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/resources/inter-shop-transfers" element={<InterShopTransfersPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/resources/warranty-manager" element={<WarrantyManagerPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />

        <Route path="*" element={<PageNotFound isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;