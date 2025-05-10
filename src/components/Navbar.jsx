import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle scroll event to hide the navbar when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">Campus Connect</Link>

        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <li>
    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
  </li>
  <li>
    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
  </li>
  <li>
    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
  </li>
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
