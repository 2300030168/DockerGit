import React from 'react';
import './style.css';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShopNowClick = () => {
    navigate('/customerlogin'); // Navigate to the CustomerLogin page
  };

  const handleAddToCartClick = () => {
    navigate('/customerlogin'); // Navigate to the CustomerLogin page
  };

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Trend Mart</h1>
        <p>Your one-stop shop for trending products and services.</p>
        <button className="cta-button" onClick={handleShopNowClick}>Shop Now</button> {/* Add onClick handler */}
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={product1} alt="Product 1" />
            <h4>Wireless Headphones</h4>
            <p>₹2000.00</p>
            <button onClick={handleAddToCartClick}>Add to Cart</button> {/* Add onClick handler */}
          </div>

          <div className="product-card">
            <img src={product2} alt="Product 2" />
            <h4>Smart Watch</h4>
            <p>₹1999.00</p>
            <button onClick={handleAddToCartClick}>Add to Cart</button> {/* Add onClick handler */}
          </div>

          <div className="product-card">
            <img src={product3} alt="Product 3" />
            <h4>Bluetooth Speaker</h4>
            <p>₹9339.99</p>
            <button onClick={handleAddToCartClick}>Add to Cart</button> {/* Add onClick handler */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Trend Mart. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </footer>

    </div>
  );
}