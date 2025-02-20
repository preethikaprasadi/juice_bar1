import React, { useEffect, useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah L.',
    review: 'The best juices I’ve ever had! Fresh, delicious, and always made with love.',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'John D.',
    review: 'I’m hooked! The Green Detox is my go-to every morning.',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Emily R.',
    review: 'Amazing flavors and great service. Highly recommend!',
    image: 'https://via.placeholder.com/100',
  },
  // Add more testimonials as needed
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 1000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
  {testimonials.map((_, index) => (
    <button
      key={index}
      className={`dot ${index === activeIndex ? 'active' : ''}`}
      onClick={() => setActiveIndex(index)}
    />
  ))}
</div>
    </section>
  );
}

export default Testimonials;