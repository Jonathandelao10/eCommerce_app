import React, { useState, useEffect } from 'react';
import styles from '../styles/product_browsing.module.css';

const BrowsingPage = () => {
  const [productsData, setProductsData] = useState([]);

  // Function to get products from the server
  function getProductsData() {
    fetch('http://localhost:3001') // Replace with the actual endpoint
      .then((response) => response.json()) // assuming the response is in JSON format
      .then((data) => {
        setProductsData(data); // store the fetched products in state
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  // Fetch products when the component mounts
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <h1>Electronic Products</h1>
        <div className={styles.gridContainer}>
          {productsData.map((product) => (
            <div key={product.p_productid} className={styles.productItem}>
              {/* Replace the image with a default or fetched image URL */}
              <img src={`../assets/${product.p_name}.png`} alt={product.p_name} />
              <button
                onClick={() => {
                  // Redirect only if the product is clickable (if needed)
                  window.location.href = '/product';
                }}
                className={styles.productButton}
              >
                {product.p_name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsingPage;
