import React, { useEffect, useState } from 'react';
import './customer.css';
import { useNavigate } from 'react-router-dom';

const CustomerCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartData);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && (item.quantity || 1) > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.cost * (item.quantity || 1)),
    0
  );

  const handleContinueToPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div className="product-card" key={item.id}>
            <img
              src={`http://localhost:2004/product/displayproductimage?id=${item.id}`}
              alt={item.name}
            />
            <h5>{item.name}</h5>
            <p>₹{item.cost}</p>
            <div className="quantity-control">
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span>{item.quantity || 1}</span>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
            <button onClick={() => handleRemoveItem(item.id)} className="remove-btn">Remove</button>
          </div>
        ))
      )}
      <h4 className="text-center mt-3">Total: ₹{totalAmount}</h4>
      {cartItems.length > 0 && (
        <div className="text-center">
          <button className="payment-btn" onClick={handleContinueToPayment}>Continue to Payment</button>
        </div>
      )}
    </div>
  );
};

export default CustomerCart;