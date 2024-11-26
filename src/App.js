import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Profile from './pages/profile';
import Product from './pages/product';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for the application */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} /> {/* Home route */}
      </Routes>
    </Router>
  );
}

export default App;
