import React, { useState } from 'react';
import axios from 'axios';

const SellerAddProduct = () => {
  const [product, setProduct] = useState({
    category: '',
    name: '',
    description: '',
    cost: '',
    url: ''
  });
  const [productImage, setProductImage] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sellerId = 1; // Replace with actual seller ID after login

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productimage', productImage);
    formData.append('category', product.category);
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('cost', product.cost);
    formData.append('url', product.url);
    formData.append('sellerId', sellerId); // Send seller ID

    try {
      const response = await axios.post(
        'http://localhost:2004/product/addproduct',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      );

      setMessage(response.data);
      setError('');
      setProduct({
        category: '',
        name: '',
        description: '',
        cost: '',
        url: ''
      });
      setProductImage(null);
    } catch (error) {
      setError(error.message);
      setMessage('');
    }
  };

  return (
    <div className="container mt-4">
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Add Product</h3>
      {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label>Category:</label>
          <select className="form-control" name="category" value={product.category} onChange={handleChange} required>
            <option value="">-- Select Category --</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Books">Books</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Description:</label>
          <textarea className="form-control" name="description" value={product.description} onChange={handleChange} rows="3" required></textarea>
        </div>

        <div className="mb-3">
          <label>Cost:</label>
          <input type="number" className="form-control" name="cost" value={product.cost} onChange={handleChange} step="0.01" required />
        </div>

        <div className="mb-3">
          <label>Product URL:</label>
          <input type="text" className="form-control" name="url" value={product.url} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Product Image:</label>
          <input type="file" className="form-control" onChange={handleImageChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default SellerAddProduct;
