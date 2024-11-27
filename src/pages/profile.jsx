import React from 'react';
import styles from '../styles/profile.module.css';

const Profile = () => {
    const userName = "John Doe"; // Example name
    const orders = ["Order #1 - Laptop", "Order #2 - Phone"];
    const reviews = [
        { product: "Laptop", rating: 4, review: "Great product!" },
        { product: "Phone", rating: 5, review: "Loved it!" }
    ];

    return (
        <div className={styles.container}>
            

                {/* User Profile Section */}
                <div className={styles.profileSection}>
                    {/* User Name */}
                    <div className={styles.userName}>
                        <h1>{userName}</h1>
                    </div>

                    {/* Orders and Reviews */}
                    <div className={styles.userInfo}>
                        {/* Orders */}
                        <div className={styles.orders}>
                            <h2>Orders</h2>
                            <ul>
                                {orders.map((order, index) => (
                                    <li key={index}>{order}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Reviews */}
                        <div className={styles.reviews}>
                            <h2>Ratings and Reviews</h2>
                            <ul>
                                {reviews.map((review, index) => (
                                    <li key={index}>
                                        <strong>{review.product}:</strong> {review.rating}/5 - {review.review}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
          
        </div>
    );
};

export default Profile;
