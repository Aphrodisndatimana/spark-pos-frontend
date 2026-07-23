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


function App() {
  return (
    <>
  <Router>
  <Routes>
  <Route path='/' element={<HomePage />}></Route>
  <Route path='/register' element={<RegisterPage />}></Route>
  <Route path='/login' element={<LoginPage />}></Route>
  <Route path='/forgot-password' element={<ForgotPassword />}></Route>
  <Route path='/super-admin-dashboard' element={<SuperAdminDashboard />}></Route>
  <Route path='/shop-owner-dashboard' element={<ShopOwnerDashboard />}></Route>
  <Route path='/branch-manager-dashboard' element={<BranchManagerDashboard />}></Route>
  <Route path='/seller-dashboard' element={<SellerDashboard />}></Route>
  <Route path='/repair-tech-dashboard' element={<RepairTechDashboard />}></Route>
  <Route path='/pos' element={<PointOfSalePage />}></Route>
  <Route path='/payments-momo' element={<PaymentsMoMoPage />}></Route>
  <Route path='/digital-receipts' element={<DigitalReceiptPage />}></Route>
  <Route path='/imei-tracking' element={<ImeiSerialTrackingPage />}></Route>
  <Route path='/inter-shop-transfers' element={<InterShopTransfersPage />}></Route>
  <Route path='/repair-tickets' element={<RepairsPage />}></Route>
  <Route path='/warranty-manager' element={<WarrantyManagerPage />}></Route>
  <Route path='/product-lookup' element={<ProductLookupPage />}></Route>
  <Route path='*' element={<PageNotFound />}></Route>
  </Routes>
  </Router>
    </>
  )
}

export default App
