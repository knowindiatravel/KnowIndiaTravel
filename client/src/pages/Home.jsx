import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ background: "linear-gradient(135deg, #0a4da3, #00b4b4)" }}
      >
        <div className="hero-content">
          <h1>Welcome to KnowIndiaTravel</h1>
          <p
            className="hero-subtitle"
            style={{
              color: "white",
              marginLeft: "3rem",
              margin: 20,
            }}
          >
            Discover the Soul of Incredible India
          </p>
          <button
            className="cta-button"
            style={{
              background: "white",
              color: "#0a4da3",
              border: "none",
              padding: "12px 30px",
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: "30px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              fontFamily: "inherit",
            }}
            onClick={() => {
              if (window.Tawk_API) {
                window.Tawk_API.maximize();
              } else {
                window.open("/contact", "_blank");
              }
            }}
          >
            Explore Journeys
          </button>
        </div>
      </section>

      {/* Rest of your existing code remains the same */}
      {/* Introduction Section */}
      <section
        className="intro-section"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,77,163,0.1), rgba(0,180,180,0.1))",
        }}
      >
        <div className="section-container">
          <h2 className="section-title">Why Choose KnowIndiaTravel?</h2>
          <div className="intro-content">
            <div className="intro-card">
              <div className="card-icon">✈️</div>
              <h3>Nationwide Coverage</h3>
              <p>
                We operate across all regions of India with local experts in
                every major historical city.
              </p>
            </div>
            <div className="intro-card">
              <div className="card-icon">🏛️</div>
              <h3>Cultural Expertise</h3>
              <p>
                Our specialists provide deep insights into India's UNESCO World
                Heritage Sites.
              </p>
            </div>
            <div className="intro-card">
              <div className="card-icon">🤝</div>
              <h3>Personalized Service</h3>
              <p>
                Tailored itineraries designed around your interests and
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="regions-section">
        <div className="section-container">
          <h2 className="section-title">Explore India's Regions</h2>
          <div className="regions-grid">
            <Link to="/north-india" className="region-card">
              <img
                src="https://images.unsplash.com/photo-1681018756175-da11bf6f06ac"
                alt="Northern India"
              />
              <div className="region-info">
                <h3>Northern India</h3>
                <p>Majestic Himalayas, Golden Triangle & spiritual centers</p>
              </div>
            </Link>

            <Link to="/west-india" className="region-card">
              <img
                src="https://plus.unsplash.com/premium_photo-1721661499905-c48969b52376"
                alt="Western India"
              />
              <div className="region-info">
                <h3>Western India</h3>
                <p>Desert landscapes, vibrant cities & coastal beauty</p>
              </div>
            </Link>

            <Link to="/south-india" className="region-card">
              <img
                src="https://images.unsplash.com/photo-1695981152719-3fc012dc3da4"
                alt="Southern India"
              />
              <div className="region-info">
                <h3>Southern India</h3>
                <p>Ancient temples, backwaters & lush plantations</p>
              </div>
            </Link>

            <Link to="/east-india" className="region-card">
              <img
                src="https://images.unsplash.com/photo-1695901742314-a739cdce691b"
                alt="Eastern India"
              />
              <div className="region-info">
                <h3>Eastern India</h3>
                <p>Tribal culture, tea gardens & Buddhist heritage</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
