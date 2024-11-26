import React from 'react';
import styles from '../styles/navbar.module.css';


const NavigationBar = () => {
    return(
        <div className={styles.navbar}>
            {/* Navbar */}
            <div className={styles.navbar}>
                <button className={styles.homeButton} onClick={() => window.location.href = '/'}>
                    <img src="../assets/homepageIcon.png" // Path to the image in the public folder
                        alt="Home" 
                        className={styles.homeImage}  />
                </button>
            </div>
        </div>
    );
};
export default NavigationBar;