import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Featured from '../../components/Featured/Featured';
import DailyDose from '../../components/DailyDose/DailyDose';
import Testimonials from '../../components/Testimonials/Testimonials';
import Customize from '../../components/Customize/Customize';
import Health from '../../components/Health/Health'
import Fresh from '../../components/Fresh/Fresh';
import Insta from '../../components/Insta/Insta';
import Footer from '../../components/Footer/Footer';
import Bottom from '../../components/Bottom/Bottom';

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Featured />
      <DailyDose/>
      <Customize/>
      <Health/>
      <Fresh/>
      <Insta/>
      <Testimonials/>
      <Footer/>
      <Bottom/>
      
      
    </div>
  );
}

export default Home;