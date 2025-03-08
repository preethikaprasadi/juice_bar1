import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah L.',
    review: 'The best juices I’ve ever had! Fresh, delicious, and always made with love.',
    image: 'https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'John D.',
    review: 'I’m hooked! The Green Detox is my go-to every morning.',
    image: 'https://plus.unsplash.com/premium_photo-1671305003832-a7ee00826651?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Emily R.',
    review: 'Amazing flavors and great service. Highly recommend!',
    image: 'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Michael T.',
    review: 'The perfect blend of taste and health. Love it!',
    image: 'https://media.istockphoto.com/id/1303206644/photo/portrait-of-smiling-caucasian-man-pose-in-office.jpg?s=2048x2048&w=is&k=20&c=WGpSdCJgQMisICuTSmfhVp9dRISw7N4NbUWKgVmP7oM=',
  },
  {
    id: 5,
    name: 'Anna K.',
    review: 'Amazing flavors and great service. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getTestimonialPosition = (index) => {
    const totalTestimonials = testimonials.length;
    const position = (index - activeIndex + totalTestimonials) % totalTestimonials;

    switch (position) {
      case 0:
        return 'left';
      case 1:
        return 'middle';
      case 2:
        return 'right';
      default:
        return 'hidden';
    }
  };

  return (
    <section className="testimonials">
      <h2>Real experiences from our  happy customers.
See why they keep coming back for more!
</h2>
      <div className="testimonials-carousel">
        {/* Left Arrow */}
        <button className="carousel-arrow left-arrow" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Testimonials */}
        {testimonials.map((testimonial, index) => {
          const position = getTestimonialPosition(index);
          return (
            <div
              key={testimonial.id}
              className={`testimonial-card ${position}`}
            >
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.review}</p>
            </div>
          );
        })}

        {/* Right Arrow */}
        <button className="carousel-arrow right-arrow" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Dots Navigation */}
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