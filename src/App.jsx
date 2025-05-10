import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CategoryPage from './pages/CategoryPage';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:type" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
