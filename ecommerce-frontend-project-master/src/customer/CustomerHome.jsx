import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './customer.css';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const CustomerHome = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:2004/product/viewallproducts')
      .then((response) => setProducts(response.data))
      .catch((err) => {
        setError('Failed to load products');
        console.error(err);
      });
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const isAlreadyAdded = cartItems.find((item) => item.id === product.id);
    if (!isAlreadyAdded) {
      cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      alert(`Added "${product.name}" to cart!`);
    } else {
      alert(`"${product.name}" is already in cart!`);
    }
    navigate('/customercart');
  };

  const handleAddToWishlist = (product) => {
    const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isAlreadyAdded = existing.find((item) => item.id === product.id);
    if (!isAlreadyAdded) {
      existing.push(product);
      localStorage.setItem('wishlist', JSON.stringify(existing));
      alert(`"${product.name}" added to wishlist!`);
      navigate('/customerwishlist');
    } else {
      alert(`"${product.name}" is already in wishlist!`);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Customer Home</h2>
      {error && <p className="text-danger text-center">{error}</p>}

      <div className="product-scroll-container">
        {products.length === 0 ? (
          <p className="text-center">No products available</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={`http://localhost:2004/product/displayproductimage?id=${product.id}`}
                alt={product.name}
              />
              <h5 className="product-title">{product.name}</h5>
              <p className="product-subtext">₹{product.cost}</p>
              <div className="product-buttons">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
                <FaHeart
                  className="wishlist-icon"
                  onClick={() => handleAddToWishlist(product)}
                  title="Add to Wishlist"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CustomerHome;