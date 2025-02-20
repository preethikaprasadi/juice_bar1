import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp'; // Import the logo
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="FreshPress Logo" className="logo-image" />
        </Link>
        <div className="nav-links">
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/locations" className="nav-link">Locations</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <button className="nav-cta">Order Online</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;