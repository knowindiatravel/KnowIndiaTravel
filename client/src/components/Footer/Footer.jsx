import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">KnowIndiaTravel</h3>
          <p className="footer-description">
            Your gateway to incredible experiences in India. Discover the rich
            culture, heritage, and beauty of this magnificent country.
          </p>
          <div className="footer-legal">
            <a href="/terms">Terms of Use</a>
            <span>•</span>
            <a href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/attractions">Attractions</a>
            </li>
            <li>
              <a href="/experiences">Experiences</a>
            </li>
            <li>
              <a href="/festivals">Festivals & Events</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
          <div className="newsletter">
            <p>Subscribe to our newsletter</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} KnowIndiaTravel. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
