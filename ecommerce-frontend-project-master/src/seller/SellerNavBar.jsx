import { Routes, Route, Link } from 'react-router-dom';
import './seller.css';

import SellerProfile from './SellerProfile';
import { useAuth } from '../contextapi/AuthContext';
import SellerHome from './SellerHome';
import SellerLogin from './SellerLogin';
import SellerAddProduct from './SellerAddProduct';
import logo from '../assets/logo.png'; 
import ViewAllProducts from './ViewAllProducts';


export default function SellerNavBar() 
{
  const { setIsSellerLoggedIn } = useAuth(); 

  const handleLogout = () => 
 {
  setIsSellerLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar">
<div className="logo">
          <img src={logo} alt="Trend Mart Logo" className="logo-img" />
          TREND MART
        </div>        <ul className="nav-links">
          <li><Link to="/sellerhome">Home</Link></li>
          <li><Link to="/sellerprofile">Seller Profile</Link></li>
          <li><Link to="/selleraddproduct">Seller Add Product</Link></li>
          <li><Link to="/viewallproducts">View All Products</Link></li>
          <li><Link to="/sellerlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/sellerhome" element={<SellerHome />} exact />
        <Route path="/sellerprofile" element={<SellerProfile/>} exact />
        <Route path="/sellerlogin" element={<SellerLogin/>} exact />
        <Route path="/sellerAddProduct" element={<SellerAddProduct/>} exact />
        <Route path="/viewallProducts" element={<ViewAllProducts/>} exact />
      </Routes>
    </div>
  )
}