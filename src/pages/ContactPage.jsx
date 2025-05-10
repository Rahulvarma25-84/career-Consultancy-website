import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css';
import Footer from '../components/Footer';

export default function ContactPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get in touch with you shortly.');
  };

  return (
    <div className='contact-container'>
    <div className="contact-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <textarea placeholder="Your message..." rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p>📞 Phone: +91-8125951004</p>
        <p>✉️ Email: support@educonsult.in</p>
        <p>
          💬 WhatsApp:{' '}
          <a
            href="https://wa.me/918125951004"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with Us
          </a>
        </p>
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );
}
