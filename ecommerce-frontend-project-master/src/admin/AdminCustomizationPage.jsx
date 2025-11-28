import React, { useEffect, useState } from 'react';

const AdminCustomizationPage = () => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    // Mock data instead of fetch
    const mockData = [
      {
        name: 'Alice Johnson',
        designName: 'Modern Living Room',
        category: 'Interior',
        color: '#e3b041',
        description: 'A sleek and cozy design for modern homes.',
        image: '', // Add base64 image string if needed
      },
      {
        name: 'Bob Smith',
        designName: 'Minimalist Website',
        category: 'Web Design',
        color: '#4caf50',
        description: 'Clean layout with a focus on usability.',
        image: '',
      },
      {
        name: 'Clara Lee',
        designName: 'Fashion Brand Logo',
        category: 'Graphic Design',
        color: '#ff4081',
        description: 'Trendy and vibrant logo for fashion industry.',
        image: '',
      },
    ];

    setDesigns(mockData);
  }, []);

  return (
    <div className="admin-custom-page">
      <h2>Submitted Customizations</h2>
      {designs.length === 0 ? (
        <p>No customizations submitted yet.</p>
      ) : (
        <div className="design-list">
          {designs.map((design, index) => (
            <div className="design-card" key={index}>
              <h3>{design.designName}</h3>
              <p><strong>Customer Name:</strong> {design.name}</p>
              <p><strong>Category:</strong> {design.category}</p>
              <p>
                <strong>Color:</strong>{' '}
                <span
                  style={{
                    backgroundColor: design.color,
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    marginRight: '10px',
                  }}
                ></span>
                {design.color}
              </p>
              <p><strong>Description:</strong> {design.description}</p>
              {design.image && (
                <img
                  src={`data:image/jpeg;base64,${design.image}`}
                  alt="Design Sample"
                  className="design-image"
                  style={{ maxWidth: '300px', marginTop: '10px' }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminCustomizationPage;