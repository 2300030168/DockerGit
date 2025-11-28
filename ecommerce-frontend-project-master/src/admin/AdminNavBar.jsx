import { Routes, Route, Link } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import Addseller from './AddSeller';
import Viewsellers from './ViewSellers';
import ViewCustomers from './ViewCustomers';
import logo from '../assets/logo.png'; 
import AdminCustomizationPage from './AdminCustomizationPage';

import AdminLogin from './AdminLogin';
import { useAuth } from '../contextapi/AuthContext';
import AddProduct from './AddProduct';
import ViewAllProducts from './ViewAllProducts';
import DisplayProducts from './DisplayProducts';

export default function AdminNavBar() 
{
  const { setIsAdminLoggedIn } = useAuth(); 

  const handleLogout = () => 
  {
    setIsAdminLoggedIn(false); 
  };

  return (
    <div>
      <nav className="navbar">
 <div className="logo">
          <img src={logo} alt="Trend Mart Logo" className="logo-img" />
          TREND MART
        </div>     
          <ul className="nav-links">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/additemseller">Add Item Sellers</Link></li>
          <li><Link to="/viewsellers">View Item Sellers</Link></li>
          <li><Link to="/viewallcustomers">View All Customers</Link></li>
          <li><Link to="/admin/customizations">Customizations</Link></li>
          
          <li className="dropdown">
            <span>Product▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/addproduct">Add</Link></li>
              <li><Link to="/viewallproducts">View All</Link></li>
              <li><Link to="/displayproducts">Display</Link></li>
              
            </ul>
          </li>

          <li><Link to="/adminlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/additemseller" element={<Addseller />} exact />
        <Route path="/viewsellers" element={<Viewsellers />} exact />
        <Route path="/viewallcustomers" element={<ViewCustomers />} exact />
        <Route path="/addproduct" element={<AddProduct />} exact />
        <Route path="/viewallproducts" element={<ViewAllProducts />} exact />
        <Route path="/displayproducts" element={<DisplayProducts />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/admin/customizations" element={<AdminCustomizationPage />} />
      </Routes>
    </div>
  );
}