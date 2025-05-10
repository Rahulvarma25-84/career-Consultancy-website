import React from 'react';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import CategoryCards from '../components/CategoryCards';
import AboutSection from '../components/AboutSection';
import campusVideo from '../assets/Campus connect2.mp4';
import './HomePage.css';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className='home-container'>
      <HeroSection />
      <Carousel />
      <CategoryCards />
      <AboutSection />
      <section className="campus-connect-section">
        <div className="content-wrapper">
          <h2>What is Campus Connect?</h2>
          <p className="section-description">
            Campus Connect is our initiative to bridge the gap between students and top-tier educational institutions. 
            Learn how we empower your academic journey in the video below.
          </p>
          <div className="video-container">
            <video controls className="responsive-video">
              <source src={campusVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;