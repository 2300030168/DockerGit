import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import './seller.css';

const ViewAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${config.url}/product/viewallproducts`);
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch products. ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`${config.url}/product/delete`, { params: { id } });
      setProducts(products.filter(product => product.id !== id)); // remove from UI
      setError('');
    } catch (err) {
      setError('Failed to delete product. ' + err.message);
    }
  };

  return (
    <div className="product-table-container">
      <h3 className="product-heading">All Products</h3>

      <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{error}</p>

      <div className="table-responsive">
        <table className="product-table" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Cost</th>
              <th>URL</th>
              <th>Image</th>
              <th>Action</th> {/* New column */}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>₹{product.cost}</td>
                <td>
                  <a href={product.url} target="_blank" rel="noopener noreferrer">Visit</a>
                </td>
                <td>
                  <iframe
                    src={`${config.url}/product/displayproductimage?id=${product.id}`}
                    title={`Product-${product.id}`}
                    className="table-image"
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(product.id)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllProducts;
