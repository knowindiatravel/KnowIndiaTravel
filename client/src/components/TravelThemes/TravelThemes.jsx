import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./TravelThemes.css";

const TravelThemes = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const carouselRef = useRef(null);

  const themes = [
    {
      text: "Fairs & Festivals",
      imgSrc:
        "https://images.unsplash.com/photo-1691075220591-035b2a9a06f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "India Wildlife",
      imgSrc:
        "https://images.unsplash.com/photo-1618471840051-483f7b11251c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlYWNvY2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      text: "Hill Stations",
      imgSrc:
        "https://images.unsplash.com/photo-1652544711458-9f02faa399db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "Pilgrimages",
      imgSrc:
        "https://images.unsplash.com/photo-1678182997702-132931f7bbf1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "Yoga & Ayurveda",
      imgSrc:
        "https://images.unsplash.com/photo-1726146198281-750e8308f785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "Himalayas",
      imgSrc:
        "https://images.unsplash.com/photo-1642474620284-8aae4f907068?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Clone first and last items for seamless transition
  const carouselItems = [
    themes[themes.length - 1], // clone of last item
    ...themes,
    themes[0], // clone of first item
  ];

  const itemWidth = 100 / 3; // 3 items visible at a time
  const totalItems = carouselItems.length;

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalItems - 2);
      }, 500);
    } else if (currentIndex === totalItems - 1) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(1);
      }, 500);
    }
  }, [currentIndex, totalItems]);

  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  }, [transitionEnabled]);

  const goToPrevious = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (currentIndex >= totalItems - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="travel-themes-section">
      <div className="travel-themes-container">
        <div className="travel-themes-header">
          <h2>Explore India's Diverse Travel Themes</h2>
          <p>Discover unique experiences across our incredible country</p>
        </div>

        <div className="theme-carousel-wrapper" ref={carouselRef}>
          <button
            onClick={goToPrevious}
            className="carousel-nav-button prev-button"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="theme-carousel">
            <div
              className="theme-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * itemWidth}%)`,
                transition: transitionEnabled ? "transform 0.5s ease" : "none",
              }}
            >
              {carouselItems.map((theme, index) => (
                <div
                  key={index}
                  className="theme-card"
                  style={{ width: `${itemWidth}%` }}
                >
                  <a href={theme.href} className="theme-card-link">
                    <div className="theme-image-container">
                      <img
                        src={theme.imgSrc}
                        alt={theme.text}
                        className="theme-image"
                        loading="lazy"
                      />
                      <div className="theme-overlay"></div>
                    </div>
                    <h3 className="theme-title">{theme.text}</h3>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToNext}
            className="carousel-nav-button next-button"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="view-all-button-container">
          <a
            className="cta-button view-all-button"
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
                // Fallback action if Tawk.to isn't loaded
                window.open("/contact", "_blank"); // Opens contact page in new tab
              }
            }}
          >
            Know About All Themes
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TravelThemes;
