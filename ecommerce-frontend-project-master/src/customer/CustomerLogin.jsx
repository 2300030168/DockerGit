import { useState } from 'react';
import './customer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext'; 
import ReCAPTCHA from "react-google-recaptcha";

export default function CustomerLogin() {
  const onChange = () => {};

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setIsCustomerLoggedIn } = useAuth(); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/customer/checkcustomerlogin`, formData);
      
      if (response.status === 200) {
        const customerData = response.data;
        localStorage.setItem("customer", JSON.stringify(customerData));
        setIsCustomerLoggedIn && setIsCustomerLoggedIn(true);
        navigate("/customerprofile");
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleForgotPassword = () => {
    navigate("/customer/forgot-password");
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Customer Login</h3>
      {message ? (
        <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p>
      ) : (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>

        {/* Forgot Password link */}
        <p
          style={{ color: "blue", cursor: "pointer", marginBottom: "10px", textAlign: "right", marginRight: "10px" }}
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </p>

        <ReCAPTCHA
          sitekey="6LeBfjQrAAAAAJWfUG84SFiA8cHi9Onc63DQm0r4"
          onChange={onChange}
        />
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
