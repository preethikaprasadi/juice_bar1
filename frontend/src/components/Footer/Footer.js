import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.webp';
import Visa from "../../assets/Visa.png";
import Master from "../../assets/Master.png";
import AmericanExpress from "../../assets/AmericanExpress.png";
import Paypal from "../../assets/Paypal.png";
import Payoneer from "../../assets/Payoneer.png";
import Express from "../../assets/Express.png";
import GooglePay from "../../assets/GooglePay.png";
import IPay from "../../assets/IPay.png";
import NoName from "../../assets/NoName.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="brand-section">
          <img src={logo} alt='logo' className='logo'></img>
          <h2 className="brand-name">Juice Bliss</h2>
          <p className="tagline">
            Fresh, healthy, and delicious juices made <br></br>with love. Visit us for a refreshing experience!
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://youtube.com" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="contact-info">
            <p>123 Juice Street, Bliss City</p>
            <p>Email: info@juicebliss.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Categories */}
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li><a href="/fresh-juices">Fresh Juices</a></li>
            <li><a href="/smoothies">Smoothies</a></li>
            <li><a href="/protein-shakes">Protein Shakes</a></li>
            <li><a href="/fruit-bowls">Fruit Bowls</a></li>
            <li><a href="/detox-drinks">Detox Drinks</a></li>
            <li><a href="/cold-pressed-juices">Cold-Pressed Juices</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Menu">Our Menu</a></li>
            <li><a href="/OrderOnline">Order Online</a></li>
            <li><a href="/rewards-program">Rewards Program</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/Contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="newsletter">
          <h3>Join Our Community</h3>
          <p>
            Subscribe to get the latest updates, special offers, and exclusive recipes!
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2025 Juice Bliss. All Rights Reserved.</p>
          <div className="legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms & Conditions</a>
            <a href="/careers">Careers</a>
          </div>
          <div className="payment-icons">
             <img src={Visa} alt="Visa" className="payment-icon" />
             <img src={Master} alt="MasterCard" className="payment-icon" />
             <img src={AmericanExpress} alt="PayPal" className="payment-icon" />
             <img src={Paypal} alt="Apple Pay" className="payment-icon" />
             <img src={Payoneer} alt="Visa" className="payment-icon" />
             <img src={Express} alt="Visa" className="payment-icon" />
             <img src={GooglePay} alt="Visa" className="payment-icon" />
             <img src={IPay} alt="Visa" className="payment-icon" />
             <img src={NoName} alt="Visa" className="payment-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;