import React from 'react';
import styles from '../styles/product.module.css';
const homeIcon = process.env.PUBLIC_URL + '/assets/homepageIcon.png';

const Product = () => {
    const product = {
        id: "P12345",
        seller: "TechWorld",
        rating: 4.5,
        review: "This is an amazing product. Highly recommend!",
        image: "https://via.placeholder.com/150" // Example placeholder image URL
    };

    return (
        <div className={styles.container}>
            

            {/* Product Section */}
            <div className={styles.productSection}>
                {/* Product Image */}
                <div className={styles.productImage}>
                    <img src={product.image} alt="Product" />
                </div>

                {/* Product Details */}
                <div className={styles.productDetails}>
                    <h2>Product ID: {product.id}</h2>
                    <p><strong>Seller:</strong> {product.seller}</p>
                    <p><strong>Rating:</strong> {product.rating} / 5</p>
                    <p><strong>Review:</strong> {product.review}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
