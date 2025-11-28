// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './seller.css';

// export default function SellerHome() {
//   const [products, setProducts] = useState([]);
//   const sellerId = localStorage.getItem("sellerId"); // ✅ You must store this at login

//   useEffect(() => {
//     if (sellerId) {
//       axios.get(`http://localhost:2004/seller/products/${sellerId}`)
//         .then(res => setProducts(res.data))
//         .catch(err => console.error("Error fetching seller products:", err));
//     }
//   }, [sellerId]);

//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>Your Uploaded Products</h2>
//       <div className="product-container">
//         {products.map(product => (
//           <div className="product-card" key={product.id}>
//             <img
//               src={`http://localhost:2004${product.imagePath}`}
//               alt={product.name}
//               style={{ width: "100%", height: "150px", objectFit: "cover" }}
//             />
//             <h4>{product.name}</h4>
//             <p>{product.description}</p>
//             <p>₹{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './seller.css';

const SellerHome = () => {
  const [products, setProducts] = useState([]);
  const [totalSellers, setTotalSellers] = useState(0);
  const [pendingApprovals, setPendingApprovals] = useState(0);
  const [systemHealth, setSystemHealth] = useState("Good");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; // Display 3 products per page

  const sellerId = 1; // Replace with actual logged-in seller's ID

  const fetchProducts = (page) => {
    axios
      .get(`http://localhost:2004/seller/products/${sellerId}?page=${page}&limit=${productsPerPage}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching seller products:", err));
  };

  // Fetch Stats from API (replace with actual endpoint)
  const fetchStats = () => {
    axios
      .get(`http://localhost:2004/seller/stats`)
      .then((res) => {
        setTotalSellers(res.data.totalSellers);
        setPendingApprovals(res.data.pendingApprovals);
        setSystemHealth(res.data.systemHealth);
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
      });
  };

  useEffect(() => {
    fetchProducts(currentPage);
    fetchStats();
  }, [sellerId, currentPage]);

  const handleDelete = (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:2004/seller/deleteproduct`, {
          params: { productId },
        })
        .then(() => {
          alert("Product removed successfully");
          fetchProducts(currentPage); // Refresh product list after deletion
        })
        .catch((err) => {
          console.error("Error deleting product:", err);
          alert("Failed to delete product");
        });
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <h2 className="title">Seller Dashboard</h2>

      {/* Stats Cards */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Sales</h3>
          <p>{totalSellers}</p>
        </div>

        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>

        <div className="stat-card">
          <h3>Saled Products</h3>
          <p>{pendingApprovals}</p>
        </div>

        <div className="stat-card">
          <h3>Sales Review</h3>
          <p className={`health-status ${systemHealth.toLowerCase()}`}>{systemHealth}</p>
        </div>
      </div>

      {/* Product List */}
      <h2 className="product-title">My Products</h2>
      {products.length === 0 ? (
        <p>No products uploaded yet.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={`http://localhost:2004${product.imagePath}`}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">₹{product.price}</p>
              <button
                onClick={() => handleDelete(product.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-btn"
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="page-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SellerHome;