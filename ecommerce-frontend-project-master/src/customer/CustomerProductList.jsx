// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './customer.css';

// const CustomerProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:2004/customer/products')
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const addToCart = (product) => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist
//     alert("Added to cart!");
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Products</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map(prod => (
//           <div key={prod.id} className="border p-4 rounded-lg shadow">
//             <img src={`http://localhost:2004/${prod.imagePath}`} alt={prod.name} className="w-full h-48 object-cover" />
//             <h3 className="text-lg font-semibold">{prod.name}</h3>
//             <p>{prod.description}</p>
//             <p className="font-bold">₹{prod.price}</p>
//             <button onClick={() => addToCart(prod)} className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomerProductList;
