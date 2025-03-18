import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
//import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.1.png';
//import hero3 from '../../assets/hero3.png';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        
        <img src={hero2} alt="Juice 2" className="hero-bg-image image-2" />
        
      </div>
      <div className="hero-content">
        <h1>Fuel Your Day with<br></br> <span className="natures">Nature's</span> Goodness</h1>
        <p>Juices, smoothies, protein shakes, and salads—crafted with 100% real ingredients<br></br>
for a healthier lifestyle. Build your perfect blend or choose from<br></br>
our best-selling favorites!</p>
        <div className="cta-container">
          <button className="primary-cta">Explore Menu</button>
          <button className="secondary-cta">Build Your Own</button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        ↓
      </div>
      {/* WhatsApp Container */}
      <div className="whatsapp-container">
        <div className="whatsapp-text">
          <p>Need Help?</p>
          <p>Chat with our WhatsApp</p>
        </div>
        <div className="whatsapp-icon">
          <FaWhatsapp />
        </div>
      </div>
      {/* Social Media Icons */}
            <div className="social-media-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </a>  
              </div>
    </section>
  );
}

export default Hero;