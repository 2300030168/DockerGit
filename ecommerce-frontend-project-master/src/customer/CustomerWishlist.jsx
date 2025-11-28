import React, { useState, useEffect } from 'react';
import './customer.css';

const CustomerWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(items);
  }, []);

  const handleRemove = (id) => {
    const updatedItems = wishlistItems.filter((item) => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
    setWishlistItems(updatedItems);
    alert('Item removed from wishlist');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-center">Your wishlist is empty.</p>
      ) : (
        <div className="product-scroll-container">
          {wishlistItems.map((item) => (
            <div className="product-card" key={item.id}>
              <img
                src={`http://localhost:2004/product/displayproductimage?id=${item.id}`}
                alt={item.name}
              />
              <h5 className="product-title">{item.name}</h5>
              <p className="product-subtext">₹{item.cost}</p>
              <button
                className="remove-wishlist-btn"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerWishlist;