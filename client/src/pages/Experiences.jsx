import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Experiences.css";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("/data/experiences.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Failed to load experiences:", error));
  }, []);

  const totalPages = Math.ceil(experiences.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = experiences.slice(startIdx, startIdx + itemsPerPage);

  const handlePageChange = (newPage) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setCurrentPage(newPage);
      setFadeClass("fade-in");
    }, 400);
  };

  return (
    <div className="attractions-container">
      <h2 className="page-title">
        Popular <span>Experiences</span>
      </h2>
      <div className={`grid ${fadeClass}`}>
        {currentItems.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="card-info">
              <h4>{item.name}</h4>
              <p className="location">
                <FaMapMarkerAlt className="location-icon" /> {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ◀ Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default Experiences;
