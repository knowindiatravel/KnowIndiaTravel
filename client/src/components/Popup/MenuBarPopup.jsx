// MenuBarPopup.jsx
import React from "react";
import {
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFax,
} from "react-icons/fa";
import "./MenuBarPopup.css";

const MenuBarPopup = ({
  isMobile,
  onOpenDestinations,
  onOpenAboutUs,
  onOpenPlanYourTrip,
}) => {
  return (
    <div className="menu-bar-popup">
      {isMobile && (
        <div className="mobile-menu-section">
          <h3 className="mobile-menu-header" onClick={onOpenDestinations}>
            Destinations <FaChevronRight className="chevron-icon" />
          </h3>
          <h3 className="mobile-menu-header" onClick={onOpenAboutUs}>
            About Us <FaChevronRight className="chevron-icon" />
          </h3>
          <h3 className="mobile-menu-header" onClick={onOpenPlanYourTrip}>
            Plan Your Trip <FaChevronRight className="chevron-icon" />
          </h3>
        </div>
      )}

      <div className="menu-content-grid">
        <div className="menu-links-section">
          <h3 className="section-title" style={{ fontSize: "1rem" }}>
            Explore More
          </h3>
          <ul className="menu-link-list">
            <li>
              <a href="/attractions" className="menu-link">
                Attractions
              </a>
            </li>
            <li>
              <a href="/experiences" className="menu-link">
                Experiences
              </a>
            </li>
            <li>
              <a href="/festivals" className="menu-link">
                Festivals & Events
              </a>
            </li>
            <li>
              <a href="/faqs" className="menu-link">
                FAQs
              </a>
            </li>
            <li>
              <a href="/contact" className="menu-link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy" className="menu-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="menu-link">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-info-section">
          <h3 className="section-title" style={{ fontSize: "1rem" }}>
            Head Office
          </h3>
          <div className="contact-info">
            <div className="contact-item" style={{ marginTop: "1rem" }}>
              <FaMapMarkerAlt className="contact-icon" />
              <span>
                123 Travel Plaza, Connaught Place
                <br />
                New Delhi - 110001, India
              </span>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <a href="tel:+911123456789">+91 11 2345 6789 (Office)</a>
                <br />
                <a href="tel:+919876543210">+91 98765 43210 (24/7 Helpline)</a>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <a href="mailto:info@knowindiatravel.com">
                  info@knowindiatravel.com
                </a>
                <br />
                <a href="mailto:bookings@knowindiatravel.com">
                  bookings@knowindiatravel.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaFax className="contact-icon" />
              <a href="fax:+911123456790">+91 11 2345 6790</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBarPopup;
