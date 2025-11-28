import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UPIPayment = () => {
  const [upiId, setUpiId] = useState('');
  const navigate = useNavigate();

  const handleUPISubmit = () => {
    if (!upiId.includes('@')) {
      alert('Enter a valid UPI ID');
      return;
    }
    alert(`Payment successful with UPI ID: ${upiId}`);
    localStorage.removeItem('cart');
    navigate('/customerhome');
  };

  return (
    <div className="container mt-4 text-center">
      <h2>UPI Payment</h2>
      <input
        type="text"
        placeholder="Enter UPI ID"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        className="form-control my-3"
      />
      <button className="btn btn-primary" onClick={handleUPISubmit}>
        Pay with UPI
      </button>
    </div>
  );
};

export default UPIPayment;