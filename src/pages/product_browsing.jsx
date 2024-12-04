import React from 'react';
import styles from '../styles/product_browsing.module.css';

const BrowsingPage = () => {
    const products = [
        { id: 1, image: '../assets/headphones.png', isClickable: true },
        { id: 2, image: '../assets/keyboard.png', isClickable: false },
        { id: 3, image: '../assets/console.png', isClickable: false },
        { id: 4, image: '../assets/mouse.png', isClickable: false },
        { id: 5, image: '../assets/tv.png', isClickable: false },
        { id: 6, image: '../assets/laptop.png', isClickable: false },
    ];

    return (
        <div>
            <div className={styles.container}>
                <h1>Electronic Products</h1>
                <div className={styles.gridContainer}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.productItem}>
                            <img src={product.image} alt={`Product ${product.id}`} />
                            <button
                                onClick={() => {
                                    if (product.isClickable) {
                                        window.location.href = '/product';
                                    }
                                }}
                                className={`${styles.productButton} ${!product.isClickable ? styles.disabledButton : ''}`}
                            >
                                View Product
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowsingPage;
