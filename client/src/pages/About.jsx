import React from "react";
import "./Home.css";

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <section className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                We are a team of dedicated professionals engaged in tourism
                since the year 2000. KnowIndiaTravel specializes in India travel
                and we continuously update our expertise to serve both
                first-time visitors and returning travelers.
              </p>
              <p>
                Based in New Delhi, the capital of India, we tailor our services
                to meet the unique needs of each traveler. Our mission is to
                help you experience India's incredible culture through
                authentic, immersive journeys.
              </p>
              <p>
                With over two decades of experience, we've perfected the art of
                creating memorable travel experiences that showcase India's rich
                heritage, vibrant traditions, and breathtaking landscapes.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1680759112857-b32352d36785?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwZ3VpZGUlMjB0ZWFtJTIwaW5kaWFufGVufDB8fDB8fHww"
                alt="Our Team"
              />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        className="cta-section"
        style={{
          background: "linear-gradient(135deg, #0a4da3, #00b4b4)",
          marginBottom: "-1rem",
        }}
      >
        <div className="section-container">
          <h2
            style={{
              color: "white",
            }}
          >
            Ready for Your Indian Adventure?
          </h2>
          <p
            style={{
              color: "white",
            }}
          >
            Contact us to start planning your personalized journey through India
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
                alert("Chat widget not loaded yet.");
              }
            }}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
