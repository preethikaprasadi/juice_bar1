import React from 'react';
import './Featured.css';

const juices = [
  { id: 1, name: 'Green Detox', ingredients: 'Kale, Spinach, Apple', emoji: '🥬' },
  { id: 2, name: 'Citrus Boost', ingredients: 'Orange, Lemon, Ginger', emoji: '🍊' },
  { id: 3, name: 'Berry Blast', ingredients: 'Strawberry, Blueberry, Mint', emoji: '🫐' },
];

function Featured() {
  return (
    <section className="featured">
      <h2 className="section-title">Our Signature Blends</h2>
      <div className="juice-grid">
        {juices.map((juice) => (
          <div className="juice-card" key={juice.id}>
            <div className="emoji-bg">{juice.emoji}</div>
            <h3>{juice.name}</h3>
            <p>{juice.ingredients}</p>
            <button className="card-cta">Add to Cart +</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;