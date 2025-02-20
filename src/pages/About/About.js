import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHeart, faSeedling, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>Our Juice Journey</h1>
        <p>From farm to bottle - crafting nature's goodness since 2015</p>
      </div>

      {/* Story Section */}
      <section className="our-story">
        <div className="story-content">
          <h2>Fresh Beginnings</h2>
          <p>
            What started as a small farmers' market stand has blossomed into 
            a passion project serving fresh, organic juices to health-conscious 
            communities across the state.
          </p>
          <button className="story-cta">Discover Our Roots →</button>
        </div>
        <div className="story-image"></div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Squeeze Crew</h2>
        <div className="team-grid">
          {[1, 2, 3].map((member) => (
            <div key={member} className="team-member">
              <div className="member-image"></div>
              <h3>John Doe</h3>
              <p>Master Juicer</p>
              <div className="social-links">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FontAwesomeIcon icon={faLeaf} className="value-icon" />
            <h3>100% Organic</h3>
            <p>Locally sourced ingredients from trusted farms</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faHeart} className="value-icon" />
            <h3>No Compromises</h3>
            <p>No added sugars or artificial preservatives</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faSeedling} className="value-icon" />
            <h3>Sustainable</h3>
            <p>Eco-friendly packaging and processes</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faUsers} className="value-icon" />
            <h3>Community</h3>
            <p>Supporting local growers and businesses</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;