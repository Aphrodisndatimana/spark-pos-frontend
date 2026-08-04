import React, { useState } from 'react';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPassword from './pages/ForgotPasswordPage'
import SuperAdminDashboard from './pages/Dashboards/SuperAdmin'
import ShopOwnerDashboard from './pages/Dashboards/ShopOwner'
import BranchManagerDashboard from './pages/Dashboards/BranchManager'
import SellerDashboard from './pages/Dashboards/Seller'
import RepairTechDashboard from './pages/Dashboards/RepairTech'
import CustomerPortal from './pages/CustomerPortalPage'
import PageNotFound from './pages/404Page'
import PointOfSalePage from './pages/Products/PointSale'
import InterShopTransfersPage from './pages/Products/InterShopTransfersPage'
import WarrantyManagerPage from './pages/Products/WarrantyManagerPage'
import ProductLookupPage from './pages/Products/ProductLookupPage'
import AboutUs from './pages/AboutPage'
import HelpCenter from './pages/HelpPage'
import Partner from './pages/PartnerPage'
import RepairsPage from './pages/Resources/Repairs';
import ImeiCheckPage from './pages/Resources/ImeiSerialTrackingPage';
import ProductCatalog from './pages/Products/ProductCatalog';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
  <Router>
  <Routes>
  <Route path='/' element={<HomePage />}></Route>
  <Route path='/register' element={<RegisterPage />}></Route>
  <Route path='/login' element={<LoginPage />}></Route>
  <Route path='/forgot-password' element={<ForgotPassword />}></Route>
  <Route path='/about' element={<AboutUs isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/help' element={<HelpCenter isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/partners' element={<Partner isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>

  {/* Dashboards Pages */}
  <Route path='/super-admin-dashboard' element={<SuperAdminDashboard />}></Route>
  <Route path='/shop-owner-dashboard' element={<ShopOwnerDashboard />}></Route>
  <Route path='/branch-manager-dashboard' element={<BranchManagerDashboard />}></Route>
  <Route path='/seller-dashboard' element={<SellerDashboard />}></Route>
  <Route path='/repair-tech-dashboard' element={<RepairTechDashboard />}></Route>

   {/* Products dropdownLink Pages */}
  <Route path='/products/mobile devices & wearables/smartphones' element={<ProductCatalog />} ></Route>
  <Route path='/pos' element={<PointOfSalePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/inter-shop-transfers' element={<InterShopTransfersPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/warranty-manager' element={<WarrantyManagerPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/product-lookup' element={<ProductLookupPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>

    {/* Resources dropdownLink Pages */}
  <Route path='/resources/repairs' element={<RepairsPage />}></Route>
  <Route path='/resources/imei-tracking' element={<ImeiCheckPage />}></Route>

  <Route path='*' element={<PageNotFound />}></Route>
  </Routes>
  </Router>
    </>
  )
}

export default App
