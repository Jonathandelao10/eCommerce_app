import React, { useState, useEffect } from 'react';

function DatabaseView() {
  const [products, setProducts] = useState([]);

  // Function to get products from the server
  function getProducts() {
    fetch('http://localhost:3001')
      .then(response => response.json()) // assuming the response is in JSON format
      .then(data => {
        setProducts(data); // store the fetched products in state
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }

  // Fetch products when the component mounts
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.p_productid}>{product.p_name}</li> // Display product name (adjust based on your data structure)
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default DatabaseView;
