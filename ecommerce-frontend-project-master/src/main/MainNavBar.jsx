import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './style.css';
import CustomerLogin from './../customer/CustomerLogin';
import CustomerRegistration from './../customer/CustomerRegistration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import NotFound from './NotFound';
import SellerLogin from './../seller/SellerLogin';
import logo from '../assets/logo.png'; 
export default function MainNavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Trend Mart Logo" className="logo-img" />
          TREND MART
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/customerregistration">Register</Link></li>

          <li className="dropdown">
            <span>Login ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/customerlogin">Customer</Link></li>
              <li><Link to="/sellerlogin">Seller</Link></li>
              <li><Link to="/adminlogin">Admin</Link></li>
            </ul>
          </li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customerregistration" element={<CustomerRegistration />} />
        <Route path="/customerlogin" element={<CustomerLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/sellerlogin" element={<SellerLogin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
