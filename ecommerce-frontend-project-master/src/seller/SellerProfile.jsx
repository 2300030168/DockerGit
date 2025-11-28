import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function SellerProfile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const sellerId = 1; // Replace with dynamic seller ID later

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${config.url}/seller/profile/${sellerId}`);
      setProfile(response.data);
    } catch (err) {
      console.error('Error fetching seller profile:', err);
      setError('Failed to load profile.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${config.url}/seller/updateprofile`, profile); // ✅ You'll need to create this backend API
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile.');
    }
  };

  if (error) {
    return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
  }

  if (!profile) {
    return <p style={{ textAlign: 'center' }}>Loading...</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', textDecoration: 'underline' }}>My Profile</h2>

      {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
        <p><strong>Full Name:</strong>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </p>
        <p><strong>Gender:</strong>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            disabled={!isEditing}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </p>
        <p><strong>Date of Birth:</strong>
          <input
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>Mobile No:</strong>
          <input
            type="text"
            name="mobileno"
            value={profile.mobileno}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </p>
        <p><strong>Company Name:</strong>
          <input
            type="text"
            name="company_name"
            value={profile.company_name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </p>
        <p><strong>Company Location:</strong>
          <input
            type="text"
            name="company_location"
            value={profile.company_location}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </p>

        {!isEditing ? (
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        ) : (
          <>
            <button onClick={handleUpdate} style={{ marginRight: '10px' }}>Update</button>
            <button onClick={() => { setIsEditing(false); fetchProfile(); }}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
}
