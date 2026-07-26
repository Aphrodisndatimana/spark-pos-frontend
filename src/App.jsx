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
import PaymentsMoMoPage from './pages/Products/PaymentsMoMoPage'
import DigitalReceiptPage from './pages/Products/DigitalReceiptPage'
import ImeiSerialTrackingPage from './pages/Products/ImeiSerialTrackingPage'
import InterShopTransfersPage from './pages/Products/InterShopTransfersPage'
import RepairsPage from './pages/Products/RepairsPage'
import WarrantyManagerPage from './pages/Products/WarrantyManagerPage'
import ProductLookupPage from './pages/Products/ProductLookupPage'
import ElectronicsRepairSolution from './pages/Solutions/ElectronicsRepairPage'
import ComputerRetailerSolution from './pages/Solutions/ComputerRetailerPage'
import AboutUs from './pages/AboutPage'
import HelpCenter from './pages/HelpPage'
import MultiBranchChainSolution from './pages/Solutions/MultiBranchChainPage'
import Partner from './pages/PartnerPage'
import MobileMoneyAgentSolution from './pages/Solutions/MobileMoneyAgentPage'
import WholesaleDistributorSolution from './pages/Solutions/WholesaleDistributorPage'
import UserManualGuides from './pages/Resources/UserManualGuides'
import CustomerCaseStudies from './pages/Resources/CustomerCaseStudies'
import HardwareSetupGuides from './pages/Resources/HardwareSetupGuides'
import LiveSystemStatus from './pages/Resources/LiveSystemStatus'
import RetailGrowthBlog from './pages/Resources/RetailGrowthBlog'


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
  <Route path='/pos' element={<PointOfSalePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/payments-momo' element={<PaymentsMoMoPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/digital-receipts' element={<DigitalReceiptPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/imei-tracking' element={<ImeiSerialTrackingPage />}></Route>
  <Route path='/inter-shop-transfers' element={<InterShopTransfersPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/repair-tickets' element={<RepairsPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/warranty-manager' element={<WarrantyManagerPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/product-lookup' element={<ProductLookupPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>

    {/* Solutions dropdownLink Pages */}
  <Route path='/electronics-repair' element={<ElectronicsRepairSolution isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/computer-retailer' element={<ComputerRetailerSolution isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/multi-branch-chain' element={<MultiBranchChainSolution isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
  <Route path='/mobile-money-agents' element={<MobileMoneyAgentSolution isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}  />}></Route>
   <Route path='/whole-sale' element={<WholesaleDistributorSolution />}></Route>

    {/* Resources dropdownLink Pages */}
  <Route path='/user-manual-guide' element={<UserManualGuides />}></Route>
  <Route path='/customer-case-studies' element={<CustomerCaseStudies />}></Route>
  <Route path='/hardware-setup-guide' element={<HardwareSetupGuides />}></Route>
  <Route path='/live-system-status' element={<LiveSystemStatus />}></Route>
  <Route path='/retail-growth-blog' element={<RetailGrowthBlog />}></Route>

  <Route path='*' element={<PageNotFound />}></Route>
  </Routes>
  </Router>
    </>
  )
}

export default App
