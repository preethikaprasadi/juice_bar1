import React from 'react';
import './Menu.css';

const menuItems = [
  {
    id: 1,
    name: 'Tropical Sunrise',
    description: 'Mango, pineapple, orange, and passion fruit blend',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1622302791628-d7a8d0e73b75'
  },
  {
    id: 2,
    name: 'Green Detox',
    description: 'Kale, spinach, apple, lemon, and ginger',
    price: '$7.50',
    image: 'https://images.unsplash.com/photo-1622302791628-d7a8d0e73b75'
  },
  {
    id: 3,
    name: 'Berry Blast',
    description: 'Strawberry, blueberry, raspberry, and mint',
    price: '$7.25',
    image: 'https://images.unsplash.com/photo-1622302791628-d7a8d0e73b75'
  },
  // Add more items as needed
];

function Menu() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Fresh Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="item-footer">
                <span className="price">{item.price}</span>
                <button className="add-to-cart">Add to Cart +</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;