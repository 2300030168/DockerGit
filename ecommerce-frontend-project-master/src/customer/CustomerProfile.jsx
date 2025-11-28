import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'; // ✅ added useLocation
import config from '../config';
import './customer.css';

export default function CustomerProfile() {
  const [customer, setCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('profile');
  const [orders, setOrders] = useState([]); // ✅ orders state
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();
  const location = useLocation(); // ✅

  useEffect(() => {
    const storedCustomer = localStorage.getItem('customer');
    if (storedCustomer) {
      const parsed = JSON.parse(storedCustomer);
      setCustomer(parsed);
      setFormData(parsed);
      setSupportForm({
        name: parsed.name || '',
        email: parsed.email || '',
        message: '',
      });
    } else {
      navigate('/customer/login');
    }

    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [navigate, location.search]);

  useEffect(() => {
    if (activeTab === 'orders') {
      const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      setOrders(savedOrders);
    }
  }, [activeTab]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${config.url}/customer/update`, formData);
      if (response.status === 200) {
        alert('Profile updated successfully');
        setCustomer(formData);
        localStorage.setItem('customer', JSON.stringify(formData));
        setIsEditing(false);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to update profile');
    }
  };

  const handleSupportChange = (e) => {
    setSupportForm({ ...supportForm, [e.target.name]: e.target.value });
  };

  const handleSupportSubmit = async () => {
    if (!supportForm.message.trim()) {
      alert('Please enter a message.');
      return;
    }

    try {
      await axios.post(`${config.url}/customer/support`, supportForm);
      alert('Support request submitted successfully.');
      setSupportForm({ ...supportForm, message: '' });
    } catch (error) {
      console.error('Support submission failed', error);
      alert('Failed to submit support request.');
    }
  };

  const editableFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'gender', label: 'Gender', type: 'text' },
    { name: 'dob', label: 'Date of Birth', type: 'date' },
    { name: 'mobileno', label: 'Mobile No', type: 'tel' },
    { name: 'location', label: 'Location', type: 'text' },
  ];

  const nonEditableFields = [
    { name: 'username', label: 'Username' },
    { name: 'email', label: 'Email' },
  ];

  return (
    <div className="profile-container">
      <aside className="sidebar">
        <h3>My Account</h3>
        <ul>
          <li onClick={() => setActiveTab('profile')}>Profile</li>
          <li onClick={() => setActiveTab('orders')}>Orders</li>
          <li onClick={() => setActiveTab('saved')}>Saved Items</li>
          <li onClick={() => setActiveTab('support')}>Support</li>
        </ul>
      </aside>

      <main className="main-profile">
        {activeTab === 'profile' && (
          <>
            <h2> Profile</h2>
            {customer ? (
              <div className="profile-details">
                {editableFields.map(({ name, label, type }) => (
                  <p key={name}>
                    <strong>{label}:</strong>{' '}
                    {isEditing ? (
                      <input
                        type={type}
                        name={name}
                        value={formData[name] || ''}
                        onChange={handleChange}
                      />
                    ) : (
                      customer[name]
                    )}
                  </p>
                ))}

                {nonEditableFields.map(({ name, label }) => (
                  <p key={name}>
                    <strong>{label}:</strong> {customer[name]}
                  </p>
                ))}

                <div className="profile-buttons">
                  <button onClick={handleEditToggle} className="button">
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </button>
                  {isEditing && (
                    <button
                      onClick={handleUpdate}
                      className="button update-btn"
                    >
                      Update
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <p>Loading profile...</p>
            )}
          </>
        )}

        {activeTab === 'orders' && (
          <div>
            <h2>🛒 Orders</h2>
            {orders.length === 0 ? (
              <p>You have no orders yet.</p>
            ) : (
              <ul className="order-list">
                {orders.map((order, index) => (
                  <li key={index} className="order-item">
                    <strong>{order.name}</strong> - ₹{order.price} × {order.quantity}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {activeTab === 'saved' && (
          <div>
            <h2>💾 Saved Items</h2>
            <p>Your saved items will be listed here.</p>
          </div>
        )}

        {activeTab === 'support' && (
          <>
            <h2>📞 Contact Support</h2>
            <div className="support-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={supportForm.name}
                onChange={handleSupportChange}
                readOnly
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={supportForm.email}
                onChange={handleSupportChange}
                readOnly
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={supportForm.message}
                onChange={handleSupportChange}
              />
              <button onClick={handleSupportSubmit}>Submit</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
