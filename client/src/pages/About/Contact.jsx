import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFax,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1 className="section-title">Contact Us</h1>
        <p className="hero-subtitle">
          We'd love to hear from you. Reach out for bookings, inquiries, or just
          to say hello!
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Information Card */}
        <div className="contact-card info-card">
          <h2 className="card-title">
            <span className="title-icon">✉️</span> Contact Details
          </h2>

          <div className="info-item">
            <div className="icon-circle">
              <FaMapMarkerAlt className="icon" />
            </div>
            <div className="info-content">
              <h3>Head Office</h3>
              <p>123 Travel Plaza, Connaught Place</p>
              <p>New Delhi - 110001, India</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FaPhone className="icon" />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+91 11 2345 6789 (Office)</p>
              <p>+91 98765 43210 (24/7 Helpline)</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FaEnvelope className="icon" />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>info@knowindiatravel.com</p>
              <p>bookings@knowindiatravel.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FaFax className="icon" />
            </div>
            <div className="info-content">
              <h3>Fax</h3>
              <p>+91 11 2345 6790</p>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-card form-card">
          <h2 className="card-title">
            <span className="title-icon">
              <FaPaperPlane />
            </span>{" "}
            Send Us a Message
          </h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Office Hours Card */}
        <div className="contact-card hours-card">
          <h2 className="card-title">
            <span className="title-icon">
              <FaClock />
            </span>{" "}
            Office Hours
          </h2>
          <div className="hours-content">
            <div className="hours-item">
              <span className="days">Monday - Friday</span>
              <span className="time">9:00 AM - 6:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="days">Saturday</span>
              <span className="time">10:00 AM - 4:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="days">Sunday</span>
              <span className="time">Closed</span>
            </div>
            <div className="emergency-contact">
              <p>24/7 Emergency Contact Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-section">
        <h2 className="social-title">Connect With Us</h2>
        <p className="social-subtitle">
          Follow our social channels for travel inspiration and updates
        </p>
        <div className="social-icons">
          <a
            href="https://facebook.com/knowindiatravel"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://twitter.com/knowindiatravel"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitter"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://instagram.com/knowindiatravel"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://youtube.com/knowindiatravel"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link youtube"
          >
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2 className="map-title">Find Us on Map</h2>
        <div className="map-container">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.366269958089!2d77.2065623150824!3d28.63290098242385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd309eebec89%3A0x25106b5b8ce18b08!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
