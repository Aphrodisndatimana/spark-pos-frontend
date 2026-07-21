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
    <Route path='/customer-portal' element={<CustomerPortal />}></Route>
  <Route path='*' element={<PageNotFound />}></Route>
  </Routes>
  </Router>
    </>
  )
}

export default App
