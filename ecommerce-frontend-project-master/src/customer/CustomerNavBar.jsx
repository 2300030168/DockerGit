import { Routes, Route, Link } from 'react-router-dom';
import './customer.css';
import logo from '../assets/logo.png'; 
import PaymentPage from './PaymentPage';
import CustomerHome from './CustomerHome';
import CustomerProfile from './CustomerProfile';
import CustomerLogin from './CustomerLogin';
import CustomerCart from './CustomerCart';
import CustomerWishlist from './CustomerWishlist';
import Customize from './Customize';
import { useAuth } from '../contextapi/AuthContext';

export default function CustomerNavBar() {
  const { setIsCustomerLoggedIn, isCustomerLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsCustomerLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Trend Mart Logo" className="logo-img" />
          TREND MART
        </div>

        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search for products, brands and more" />
        </div>

        <ul className="nav-links">
          <li><Link to="/customerhome">Home</Link></li>
          {isCustomerLoggedIn ? (
            <>
              <li><Link to="/customerprofile">Profile</Link></li>
              <li><Link to="/customercart">Cart</Link></li>
              <li><Link to="/customerwishlist">Wishlist</Link></li>
              <li><Link to="/customize">Customize</Link></li>
              <li><Link to="/customerlogin" onClick={handleLogout}>Logout</Link></li>
            </>
          ) : (
            <li><Link to="/customerlogin">Login</Link></li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/customerhome" element={<CustomerHome />} />
        <Route path="/customerprofile" element={<CustomerProfile />} />
        <Route path="/customerlogin" element={<CustomerLogin />} />
        <Route path="/customercart" element={<CustomerCart />} />
        <Route path="/customerwishlist" element={<CustomerWishlist />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </div>
  );
}