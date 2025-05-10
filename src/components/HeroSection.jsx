import React from 'react';
import './HeroSection.css';
import heroVideo from '../assets/homebgm.mp4';

function HeroSection() {
  return (
    <div className="hero">
      <video autoPlay muted loop className="video-bg">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Welcome to Campus Connect</h1>
        <p>Your gateway to top colleges</p>
        <a
          href="https://wa.me/918125951004" // Replace with your WhatsApp number
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
