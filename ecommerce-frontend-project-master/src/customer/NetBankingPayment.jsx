import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NetBankingPayment = () => {
  const [bankName, setBankName] = useState('');
  const navigate = useNavigate();

  const handleNetBanking = () => {
    if (!bankName) {
      alert('Please enter your bank name');
      return;
    }
    alert(`Payment initiated through ${bankName}`);
    localStorage.removeItem('cart');
    navigate('/customerhome');
  };

  return (
    <div className="container mt-4 text-center">
      <h2>Net Banking Payment</h2>
      <input
        type="text"
        placeholder="Enter Bank Name"
        value={bankName}
        onChange={(e) => setBankName(e.target.value)}
        className="form-control my-3"
      />
      <button className="btn btn-primary" onClick={handleNetBanking}>
        Pay with Net Banking
      </button>
    </div>
  );
};

export default NetBankingPayment;