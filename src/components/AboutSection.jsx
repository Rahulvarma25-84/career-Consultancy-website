import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AboutSection.css';
import aboutImg from '../assets/about-img.png'; // Add any placeholder image

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src={aboutImg} alt="About EduConsult" />
      </div>
      <div className="about-content">
        <h1>About Campus Connect</h1>
        <p>
        Campus Connect is your trusted education partner, connecting students with the best colleges across India. 
          Our mission is to simplify the admission process and offer transparent guidance, ensuring every student 
          finds the perfect match for their academic journey.
        </p>
        {/* Use Link component to navigate to the About Page */}
        <Link to="/about">
          <button className="learn-more-btn">Learn More</button>
        </Link>
      </div>
    </section>
  );
}

export default AboutSection;
