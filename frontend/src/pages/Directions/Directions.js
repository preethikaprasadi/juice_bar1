import React from 'react';
import { useParams } from 'react-router-dom';
import './Directions.css';

function Directions() {
  const { locationId } = useParams();

  // Mock data for directions
  const directionsData = {
    downtown: {
      name: 'Downtown Juice Bar',
      address: '123 Fresh Street, Downtown',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153166!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2e7d30c0b6c!2s123%20Fresh%20St%2C%20Downtown!5e0!3m2!1sen!2sus!4v1633023226784!5m2!1sen!2sus',
      phone: '(555) 123-4567',
      hours: 'Mon-Sat: 7AM - 9PM\nSun: 8AM - 8PM',
      description: 'Located in the heart of downtown, our flagship store offers a cozy atmosphere and a wide range of fresh juices.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
    },
    uptown: {
      name: 'Uptown Wellness Hub',
      address: '456 Green Avenue, Uptown',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153166!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2e7d30c0b6c!2s456%20Green%20Ave%2C%20Uptown!5e0!3m2!1sen!2sus!4v1633023226784!5m2!1sen!2sus',
      phone: '(555) 987-6543',
      hours: 'Mon-Fri: 8AM - 8PM\nSat-Sun: 9AM - 7PM',
      description: 'Our Uptown location is a wellness hub, offering fresh juices, smoothies, and healthy snacks in a modern setting.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5'
    },
    riverfront: {
      name: 'Riverfront Refresh',
      address: '789 Organic Lane, Riverside',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153166!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2e7d30c0b6c!2s789%20Organic%20Ln%2C%20Riverside!5e0!3m2!1sen!2sus!4v1633023226784!5m2!1sen!2sus',
      phone: '(555) 456-7890',
      hours: 'Daily: 7:30AM - 9:30PM',
      description: 'Enjoy our riverside location with stunning views, perfect for relaxing with a refreshing juice.',
      image: 'https://images.unsplash.com/photo-1504754524776-8f4f37789ca5'
    }
  };

  const location = directionsData[locationId];

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div className="directions-container">
      <div className="directions-hero" style={{ backgroundImage: `url(${location.image})` }}>
        <div className="hero-overlay">
          <h1>Directions to {location.name}</h1>
          <p>{location.address}</p>
        </div>
      </div>

      <div className="directions-content">
        <div className="map-container">
          <iframe
            title="Location Map"
            src={location.mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="location-details">
          <h2>About {location.name}</h2>
          <p>{location.description}</p>

          <div className="details-grid">
            <div className="detail-item">
              <span className="icon">📍</span>
              <p>{location.address}</p>
            </div>
            <div className="detail-item">
              <span className="icon">📞</span>
              <p>{location.phone}</p>
            </div>
            <div className="detail-item">
              <span className="icon">⏰</span>
              <p className="hours-text">{location.hours}</p>
            </div>
          </div>

          <button className="back-button" onClick={() => window.history.back()}>
            ← Back to Locations
          </button>
        </div>
      </div>
    </div>
  );
}

export default Directions;