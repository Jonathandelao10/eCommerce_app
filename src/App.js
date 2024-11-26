import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Profile from './pages/profile';
import Product from './pages/product';
import NavigationBar from './components/navigation-bar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<Product />} /> {/* Default route */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
