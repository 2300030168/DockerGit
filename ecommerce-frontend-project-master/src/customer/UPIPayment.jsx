import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const method = location.state?.method || 'Card';

  const handleCardPayment = () => {
    if (cardNumber.length !== 16 || cvv.length !== 3 || !expiry) {
      alert('Enter valid card details');
      return;
    }
    alert(`Payment successful using ${method}`);
    localStorage.removeItem('cart');
    navigate('/customerhome');
  };

  return (
    <div className="container mt-4 text-center">
      <h2>{method} Payment</h2>
      <input
        type="text"
        placeholder="Card Number"
        maxLength={16}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        className="form-control my-2"
      />
      <input
        type="text"
        placeholder="Expiry Date (MM/YY)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        className="form-control my-2"
      />
      <input
        type="password"
        placeholder="CVV"
        maxLength={3}
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        className="form-control my-2"
      />
      <button className="btn btn-success" onClick={handleCardPayment}>
        Pay with {method}
      </button>
    </div>
  );
};

export default CardPayment;