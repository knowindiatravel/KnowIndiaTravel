import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Festival.css";

const Festivals = () => {
  const [festivals, setFestivals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("/data/festivals.json")
      .then((res) => res.json())
      .then((data) => setFestivals(data))
      .catch((err) => console.error("Failed to load festivals:", err));
  }, []);

  const totalPages = Math.ceil(festivals.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = festivals.slice(startIdx, startIdx + itemsPerPage);

  const handlePageChange = (newPage) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setCurrentPage(newPage);
      setFadeClass("fade-in");
    }, 400);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
  };

  return (
    <div className="festivals-container">
      <h2 className="festival-page-title">
        Festivals & <span>Events</span>
      </h2>
      <div className={`festival-grid ${fadeClass}`}>
        {currentItems.map((item, index) => (
          <div className="festival-card" key={index}>
            <div className="festival-image-wrapper">
              <img src={item.imageUrl} alt={item.name} />
              <div className="festival-date-badge">{formatDate(item.date)}</div>
            </div>
            <div className="festival-card-info">
              <h4>{item.name}</h4>
              <p className="festival-description">{item.description}</p>
              <p className="festival-location">
                <FaMapMarkerAlt className="festival-location-icon" />{" "}
                {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="festival-pagination">
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

export default Festivals;
