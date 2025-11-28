import React, { useState } from 'react';
import './customer.css';

const Customize = () => {
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('#000000');
  const [designName, setDesignName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const designData = {
      category,
      color,
      designName,
      description,
      image,
    };

    console.log("Submitted Design:", designData);
    alert("Design submitted! You can add backend API integration here.");
  };

  return (
    <div className="customize-container">
      <h2 className="customize-title">Customize Your Fashion Item</h2>
      <form onSubmit={handleSubmit} className="customize-form">
        <div className="form-group">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select</option>
            <option value="Clothing">Clothing</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="form-group">
          <label>Design Name:</label>
          <input
            type="text"
            value={designName}
            onChange={(e) => setDesignName(e.target.value)}
            placeholder="Enter design name"
            required
          />
        </div>

        <div className="form-group">
          <label>Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your design"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label>Upload Sample Design:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && <img src={preview} alt="Preview" className="preview-image" />}
        </div>

        <button type="submit" className="button">Submit Design</button>
      </form>
    </div>
  );
};

export default Customize;