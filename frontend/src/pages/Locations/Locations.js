import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Locations.css';

const locations = [
  {
    id: 1,
    name: 'Downtown Juice Bar',
    address: '123 Fresh Street, Downtown',
    phone: '(555) 123-4567',
    hours: 'Mon-Sat: 7AM - 9PM\nSun: 8AM - 8PM',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    mapLink: '/directions/downtown' // Unique route for each location
  },
  {
    id: 2,
    name: 'Uptown Wellness Hub',
    address: '456 Green Avenue, Uptown',
    phone: '(555) 987-6543',
    hours: 'Mon-Fri: 8AM - 8PM\nSat-Sun: 9AM - 7PM',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    mapLink: '/directions/uptown' // Unique route for each location
  },
  {
    id: 3,
    name: 'Riverfront Refresh',
    address: '789 Organic Lane, Riverside',
    phone: '(555) 456-7890',
    hours: 'Daily: 7:30AM - 9:30PM',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37789ca5',
    mapLink: '/directions/riverfront' // Unique route for each location
  }
];

function Locations() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDirectionsClick = (mapLink) => {
    navigate(mapLink); // Navigate to the specified route
  };

  return (
    <div className="locations-container">
      <h1 className="locations-title">Our Locations</h1>
      <div className="locations-grid">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <div 
              className="location-image"
              style={{ backgroundImage: `url(${location.image})` }}
            >
              <div className="image-overlay"></div>
            </div>
            <div className="location-info">
              <h2>{location.name}</h2>
              <div className="location-details">
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
              <button 
                className="directions-button"
                onClick={() => handleDirectionsClick(location.mapLink)} // Pass the mapLink
              >
                Get Directions →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;



