import React from 'react';
import './Customize.css';
import Customize1 from '../../assets/Customize.png';
import Left from '../../assets/Left.png';
import Apple from '../../assets/Apple.png';
import Mango from '../../assets/Mango.png';
import Pineapple from '../../assets/Pineapple.png';
import Bawl from '../../assets/Bawl.png'

function Customize() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="ellipses1">
          <div className="ellipse red"></div>
          <div className="ellipse yellow"></div>
          <div className="ellipse green"></div>
          <p>Craft Your Perfect Blend, Your Way!
          </p>
        </div>
        <p className="tagline1">From fresh fruits to protein-packed add-ons,<br></br> customize your drink just the way you like it!</p>
        <div className="buttons">
          <button className="btn-filled">Start Building</button>
          <button className="btn-outlined">Discover Flavors</button>
        </div>
      </header>

      {/* Main Image Section */}
      <div className="main-image">
        <img src={Customize1} alt="Woman holding pineapples" />
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Enter your favorite fruit!" />
        </div>
      </div>

      {/* Left Widget */}
      <div className="widget left-widget">
        <div className="icon">
          <img src={Left} alt='left'/>
        </div>
        <h3>Save Your Signature Blend!</h3>
        <p>Lock in your perfect mix and order it with just one tap. Freshly made, every time!</p>
        <button className="btn-filled3">Subscribe & Sip</button>
      </div>

      {/* Right Widget */}
      <div className="widget right-widget">
        <h5>Featured Items</h5>
        <h3>Trending Custom Creations!</h3>
        <p>Check out the top custom blends loved by juice lovers like you!</p>
        <div className="fruit-icons">
        <img src={Apple} alt="Apple" className="fruit-icon1" />
          
          <img src={Mango} alt="Mango" className="fruit-icon2" />
          <img src={Pineapple} alt="Pineapple" className="fruit-icon3" />
          <div className="fruit-icon4-wrapper">
          <img src={Bawl} alt="Bawl" className='fruit-icon4' />
          <span className='plus-text'>20+</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Customize;