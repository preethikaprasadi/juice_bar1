import React from 'react';
import './Featured.css';
//import { FaHeart } from "react-icons/fa";

import ColdPressedJuices from '../../assets/Cold-Pressed Juices.png';
import FreshSalads from '../../assets/FreshSalads.png';
import SmoothieBowls from '../../assets/Smoothie Bowls.png';
//import Discount from '../../assets/image 35.png';
import Product1 from '../../assets/Product1.png';


const Featured = () => {
  return (
    <div className="featured-page">
      {/* Header Section */}
      <header className="header-section">
        <h1>
          Juice Bar’s Top Picks,<br></br> Your Next Favorite is <span className="highlight">'Here!</span>
        </h1>
        <p className="tagline">Discover the freshest and most delicious options for your healthy lifestyle.<br></br>
        Check out the most popular sips, smoothies, and bowls taking over<br></br>
        right now. Don’t miss out on our limited-time specials!</p>
      </header>

      <h3>Top Picks/ Categorises </h3>

      {/* Main Content Section */}
      <div className="main-content">
        {/* Categories Section */}
        <div className="categories-section">
          <div className="category-card1">
            <img src={ColdPressedJuices} alt="Cold-Pressed Juices" />
            <div className="category-label">Cold-Pressed Juices</div>
          </div>
          <div className="category-card2">
            <img src={FreshSalads} alt="Fresh Salads" />
            <div className="category-label">Fresh Salads</div>
          </div>
          <div className="category-card3">
            <img src={SmoothieBowls} alt="Smoothie Bowls" />
            <div className="category-label">Smoothie Bowls</div>
          </div>
        </div>

        {/* Discount Banner Section */}
        <div className="discount-banner">
          <div className="discount-content">
            <h2 className="discount-text">20% Off</h2>
            <p className="discount-description">
            LIMITED-TIME OFFERS<br></br>
            GRAB YOURS NOW!
            </p>
            <button className="claim-button">Claim Your Deal</button>
          </div>
          {/*<img src={Discount} alt="Discount Banner" className="discount-image" />*/}
        </div>
      </div>
      <div className="navigation-arrows">
          <button className="arrow-button">←</button>
          <button className="arrow-button">→</button>
        </div>
      {/* Products Section */}
      <div className="products-section">
        <div className="products-grid">
          {[1, 2, 3, 4, 5].map((product) => (
            <div className="product-card" key={product}>
              <div className="heart-icon">❤️</div>
              <img src={Product1} alt="Product" />
              <h3 className="product-name">Tropical Glow</h3>
              <p className="product-price">$5.99</p>
              <button className="details-button">See Details</button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};




export default Featured;