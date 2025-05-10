import React from 'react';
import './CollegeModal.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CollegeModal = ({ college, onClose }) => {
  if (!college) return null;

  const fields = [
    { label: 'Name', key: 'Name' },
    { label: 'Type', key: 'Type' },
    { label: 'Ranking', key: 'Ranking' },
    { label: 'Location', key: 'Location' },
    { label: 'Courses Offered', key: 'CoursesAvailable' },
    { label: 'Branches Offered', key: 'BranchesOffered' },
    { label: 'Placement %', key: 'PlacementPercentage' },
    { label: 'Highest CTC', key: 'HighestCTC' },
    { label: 'Description', key: 'Description' },
    { label: 'Year Established', key: 'YearEstablished' },
    { label: 'Campuses', key: 'Campuses' },
    { label: 'Accreditations', key: 'Accreditations' },
    { label: 'Top Recruiters', key: 'Companies' },
    { label: 'Highlights', key: 'Highlights' },
    { label: 'Website', key: 'Website' },
    { label: 'Contact Email', key: 'ContactEmail' },
    { label: 'Contact Number', key: 'ContactNumber' }
  ];

  // Filter out empty image URLs
  const validImages = college.ImageURLs?.filter(url => url && url.trim() !== '') || [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>

        {/* College Logo */}
        {college.Logo && (
          <div className="college-logo-container">
            <img 
              src={college.Logo} 
              alt={`${college.Name} logo`} 
              className="college-logo-modal"
            />
          </div>
        )}

        {/* Image Carousel */}
        {validImages.length > 0 && (
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            className="image-carousel"
          >
            {validImages.map((url, index) => (
              <div key={index} className="carousel-image-container">
                <img 
                  src={url} 
                  alt={`College ${index + 1}`} 
                  className="carousel-image"
                />
              </div>
            ))}
          </Carousel>
        )}

        {/* College Details */}
        <div className="modal-details">
          {fields.map(field => {
            const value = college[field.key];
            if (!value || (Array.isArray(value) && value.length === 0)) return null;
            
            return (
              <div key={field.key} className="modal-section">
                <h3>{field.label}</h3>
                <p>
                  {Array.isArray(value) 
                    ? value.join(', ') 
                    : typeof value === 'object'
                      ? JSON.stringify(value)
                      : value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="modal-cta">
          <p>If you want to know about the college fees structure, contact us through WhatsApp.</p>
          <a href="https://wa.me/918125951004" target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-btn">Contact on WhatsApp</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollegeModal;