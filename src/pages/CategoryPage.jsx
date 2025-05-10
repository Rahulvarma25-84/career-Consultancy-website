import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import collegeData from '../data/colleges.json';
import Footer from '../components/Footer';
import CollegeModal from '../components/CollegeModal';
import './CategoryPage.css';

function CategoryPage() {
  const { type } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const collegesPerPage = 20;

  const filteredColleges = collegeData.filter(college =>
    college.Type?.some(t => t.toLowerCase() === type.toLowerCase())
  );

  const indexOfLastCollege = currentPage * collegesPerPage;
  const indexOfFirstCollege = indexOfLastCollege - collegesPerPage;
  const currentColleges = filteredColleges.slice(indexOfFirstCollege, indexOfLastCollege);

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="category-page-container">
      <div className="category-page">
        <h1>{type.replace('_', ' ').toUpperCase()} Colleges</h1>

        {filteredColleges.length === 0 ? (
          <p>No colleges found for this category.</p>
        ) : (
          <div className="college-grid">
            {currentColleges.map((college, index) => (
              <div
                key={index}
                className="college-card"
                onClick={() => setSelectedCollege(college)}
              >
                <img
                  src={college.Logo}
                  alt={`${college.Name} logo`}
                  className="college-logo"
                />
                <div className="college-info">
                  <h2>{college.Name}</h2>
                  <p className="college-description">
                    {college.Description?.slice(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />

      {selectedCollege && (
        <CollegeModal college={selectedCollege} onClose={() => setSelectedCollege(null)} />
      )}
    </div>
  );
}

export default CategoryPage;