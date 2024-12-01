import React from 'react';
import styles from '../styles/homepage.module.css';

const HomePage = () => {
   

    return(
        <div className={styles.productImage}>
            <div className={styles.gridContainer}>
                <button onClick={() => window.location.href = '/product_browsing'}>   
                    <img src="../assets/electronics.png" alt="Books" />
                </button>
                <img src="../assets/clothing.png" alt="Product" />
                <img src="../assets/beauty.png" alt="Product" />
                <img src="../assets/home-kitchen.png" alt="Product" />
                <img src="../assets/health-wellness.png" alt="Product" />
                <img src="../assets/sports-outdoors.png" alt="Product" />
                <img src="../assets/toys-games.png" alt="Product" />
                <img src="../assets/books.png" alt="Product" />
                <img src="../assets/music.png" alt="Product" />
                <img src="../assets/stationary.png" alt="Product" />
                <img src="../assets/movies.png" alt="Product" />
                <img src="../assets/jewlery.png" alt="Product" />
            </div>
        </div>
    );
};
export default HomePage;

