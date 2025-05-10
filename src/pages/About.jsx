import React from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import './About.css';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <AboutSection />

        <section className="more-about">
          <h2>Why Choose EduConsult?</h2>
          <p>
            At EduConsult, we’re committed to helping students discover the right career path
            through trusted guidance and partnerships with top colleges across India.
          </p>
          <ul>
            <li>✓ Verified College Listings</li>
            <li>✓ Personalized Counseling</li>
            <li>✓ Scholarship Assistance</li>
            <li>✓ Fast Application Process</li>
            <li>✓ Expert Career Advice</li>
          </ul>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <p>
            Our team consists of experienced counselors, education experts, and technologists
            who are passionate about guiding students to achieve their academic dreams.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
