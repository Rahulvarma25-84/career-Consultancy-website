import React from 'react';
import { useNavigate } from 'react-router-dom';
import collegeData from '../data/colleges.json';
import './CategoryCards.css';

const grouped = {
  btech: collegeData.filter(c => c.type === 'btech'),
  agriculture: collegeData.filter(c => c.type === 'agriculture'),
  mba: collegeData.filter(c => c.type === 'mba'),
};

function CategoryCards() {
  const navigate = useNavigate();

  return (
    <div className="category-container">
      {Object.entries(grouped).map(([type, colleges]) => (
        <div key={type} className="category-card" onClick={() => navigate(`/category/${type}`)}>
          <h3>{type.replace('_', ' ').toUpperCase()}</h3>
          {colleges.map(college => (
            <div key={college.id} className="college-info">
              <h4>{college.name}</h4>
              <p>{college.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CategoryCards;
