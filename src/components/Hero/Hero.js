import React from 'react';
import './Hero.css';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import hero3 from '../../assets/hero3.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={hero1} alt="Juice 1" className="hero-bg-image image-1" />
        <img src={hero2} alt="Juice 2" className="hero-bg-image image-2" />
        <img src={hero3} alt="Juice 3" className="hero-bg-image image-3" />
      </div>
      <div className="hero-content">
        <h1>Fuel Your Day with Nature's Goodness</h1>
        <p>Cold-pressed, organic juices made fresh daily</p>
        <div className="cta-container">
          <button className="primary-cta">Explore Menu</button>
          <button className="secondary-cta">Watch Video ▶</button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        ↓
      </div>
    </section>
  );
}

export default Hero;