import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    
    <footer className="footer">
      {/* Brand Section */}
      <div className="footer-section brand-section">
        <h2 className="brand-name">Juice Bliss</h2>
        <p className="tagline">Fresh, healthy, and delicious juices made with love. Visit us for a refreshing experience!</p>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://youtube.com" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="footer-section contact-info">
        <h3>Contact Us</h3>
        <p>123 Juice Street, Fresh City</p>
        <p>Email: info@juicebliss.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>

      {/* Categories */}
      <div className="footer-section categories">
        <h3>Categories</h3>
        <ul>
          <li>Fruit Juices</li>
          <li>Vegetable Juices</li>
          <li>Detox Juices</li>
          <li>Energy Boosts</li>
        </ul>
      </div>

      {/* Useful Links */}
      <div className="footer-section useful-links">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/menu">Our Menu</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="footer-section newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get the latest updates and exclusive offers!</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
    
  );
};

export default Footer;