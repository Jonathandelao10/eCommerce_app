import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Profile from './pages/profile';
import Product from './pages/product';
import HomePage from './pages/homepage';
import BrowsingPage from './pages/product_browsing';
import NavigationBar from './components/navigation-bar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<HomePage />} /> {/* Default route */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product_browsing" element={<BrowsingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
