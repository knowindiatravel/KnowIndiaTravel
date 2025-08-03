import React from "react";
import { Link } from "react-router-dom";
import { FaBlog, FaImages, FaEnvelope, FaArrowRight } from "react-icons/fa";
import "./Popup.css";

const AboutUsPopup = ({ onClose }) => {
  const handleLinkClick = () => {
    // Close the popup when a link is clicked
    onClose();
  };

  return (
    <div className="about-us-popup">
      <h3 className="popup-section-title">About Us</h3>
      <ul className="popup-link-list">
        <li>
          <Link to="/blogs" className="popup-link" onClick={handleLinkClick}>
            <FaBlog className="link-icon" />
            <span>Our Blogs</span>
            <FaArrowRight className="arrow-icon" />
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="popup-link" onClick={handleLinkClick}>
            <FaImages className="link-icon" />
            <span>Gallery</span>
            <FaArrowRight className="arrow-icon" />
          </Link>
        </li>
        <li>
          <Link to="/contact" className="popup-link" onClick={handleLinkClick}>
            <FaEnvelope className="link-icon" />
            <span>Contact</span>
            <FaArrowRight className="arrow-icon" />
          </Link>
        </li>
      </ul>

      <div className="about-description">
        <p>
          We are dedicated to providing the best travel experiences with
          sustainable tourism practices.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPopup;
