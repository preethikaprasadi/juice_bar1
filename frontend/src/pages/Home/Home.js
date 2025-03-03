import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Featured from '../../components/Featured/Featured';
import DailyDose from '../../components/DailyDose/DailyDose';
import Testimonials from '../../components/Testimonials/Testimonials';
import Customize from '../../components/Customize/Customize';

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Featured />
      <DailyDose/>
      <Customize/>
      <Testimonials />
      
      
    </div>
  );
}

export default Home;