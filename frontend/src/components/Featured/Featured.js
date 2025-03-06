import React from 'react';
import './Featured.css';
//import { FaHeart } from "react-icons/fa";

import ColdPressedJuices from '../../assets/Cold-Pressed Juices.png';
import FreshSalads from '../../assets/FreshSalads.png';
import SmoothieBowls from '../../assets/Smoothie Bowls.png';
//import Discount from '../../assets/image 35.png';
import Product1 from '../../assets/Product1.png';
import Product2 from '../../assets/Product2.png';
import Product3 from '../../assets/Product3.png';


const Featured = () => {
  // Array of background colors and images for each product card
  const productStyles = [
    { backgroundColor: '#FCF0D3', backgroundImage: `url(${Product1})` }, // Light Orange
    { backgroundColor: '#BEF2C4', backgroundImage: `url(${Product2})` }, // Light Blue
    { backgroundColor: '#D3DDFF', backgroundImage: `url(${Product1})` }, // Light Pink
    { backgroundColor: '#FFBDBE', backgroundImage: `url(${Product2})` }, // Light Green
    { backgroundColor: '#FDE59F', backgroundImage: `url(${Product3})` }, // Light Gray
  ];

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
            <h5>Tropical Glow</h5>
            <p className="category-description">Freshly squeezed juices packed with nutrients.</p>
          </div>
          <div className="category-card2">
            <img src={FreshSalads} alt="Fresh Salads" />
            <div className="category-label">Fresh Salads</div>
            <h5>Tropical Glow</h5>
            <p className="category-description">Healthy salads made with the freshest ingredients.</p>
          </div>
          <div className="category-card3">
            <img src={SmoothieBowls} alt="Smoothie Bowls" />
            <div className="category-label">Smoothie Bowls</div>
            <h5>Tropical Glow</h5>
            <p className="category-description">Delicious and refreshing smoothie bowls.</p>
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
    
      

        
      {/* Products Section */}
      <div className="products-section">
        <div className="products-header">
          <h2 className="products-topic">Top Juice Products</h2>
          <div className="navigation-arrows">
            <button className="arrow-button">←</button>
            <button className="arrow-button">→</button>
          </div>
        </div>
        <div className="products-grid">
          {[1, 2, 3, 4, 5].map((product, index) => (
            <div key={product}>
              {/* Product Card */}
              <div className="product-card" style={{
                  backgroundColor: productStyles[index].backgroundColor,
                  backgroundImage: productStyles[index].backgroundImage,
                  backgroundSize: '70%',
                  backgroundPosition: 'center',
                }} >
                {/* Heart Icon */}
                <div className="heart-icon"></div>

                {/* Product Image */}
                {/*<img src={Product1} alt="Product" className="product-image" />*/}

                {/* Customer Ratings */}
                <div className="customer-ratings">
                  <span className="stars">★★★★☆</span>
                  <span className="rating">4.5</span>
                </div>
              </div>

              {/* Product Details Outside the Card */}
              <div className="product-details">
                <h3 className="product-name">Tropical Glow</h3>
                <div className="description-price-container">
                  <p className="product-description">A refreshing blend of tropical fruits.</p>
                  <p className="product-price">$5.99</p>
                </div>
                <button className="details-button">See Details</button>
                <button className="add">+</button>
              </div>
            </div>
            
          ))}
        </div>
        
      </div>
    </div>
  );
};




export default Featured;