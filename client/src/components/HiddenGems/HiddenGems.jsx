import React, { useState, useEffect, useRef } from "react";
import "./HiddenGems.css";

const HiddenGems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const carouselRef = useRef(null);
  const itemWidth = 100; // Percentage width for each item (100% for full width slides)

  const hiddenGems = [
    {
      imgSrc:
        "https://s7ap1.scene7.com/is/image/incredibleindia/dawar-jammu-and-kashmir-rural-hero?qlt=82&ts=1726643529094",
      title: "Dawar",
      description: "The ancient capital of the Dards",
      location: "Jammu and Kashmir",
    },
    {
      imgSrc:
        "https://s7ap1.scene7.com/is/image/incredibleindia/pithoragarh-rural-hero?qlt=82&ts=1726643529094",
      title: "Sarmoli",
      description: "The enchanting Himalayan haven",
      location: "Uttarakhand",
    },
    {
      imgSrc:
        "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-hero?qlt=82&ts=1727162177885",
      title: "Reiek",
      description: "The home of majestic misty mountains!",
      location: "Mizoram",
    },
    {
      imgSrc:
        "https://s7ap1.scene7.com/is/image/incredibleindia/kanthalloor-village-kerala-rural-hero?qlt=82&ts=1726643529094",
      title: "Kanthalloor",
      description: "Kashmir of Kerala",
      location: "Kerala",
    },
    {
      imgSrc:
        "https://s7ap1.scene7.com/is/image/incredibleindia/madla-village-mp-rural-hero?qlt=82&ts=1726643529094",
      title: "Madla",
      description: "A gateway to nature's abode",
      location: "Madhya Pradesh",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? hiddenGems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === hiddenGems.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="hidden-gems-container">
      <div className="background-container">
        <div className="content-wrapper">
          <div className="header-section">
            <h3>Uncover India's</h3>
            <h2>Hidden Gems</h2>
            <div className="header-decoration"></div>
          </div>

          <div className="theme-carousel" ref={carouselRef}>
            <button onClick={goToPrevious} className="nav-button prev-button">
              ❮
            </button>
            <div
              className="theme-wrapper"
              style={{
                transform: `translateX(-${currentIndex * itemWidth}%)`,
                transition: transitionEnabled ? "transform 0.5s ease" : "none",
              }}
            >
              {hiddenGems.map((gem, index) => (
                <div
                  key={index}
                  className="theme-card"
                  style={{ width: `${itemWidth}%` }}
                >
                  <a href={gem.href} className="gem-card">
                    <div className="image-container">
                      <img src={gem.imgSrc} alt={gem.title} />
                      <div className="text-overlay">
                        <div className="location-info">
                          <i className="bi bi-geo-alt-fill"></i>
                          <span>{gem.location}</span>
                        </div>
                        <div className="title-info">
                          <h3>{gem.title}</h3>
                          <p>{gem.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <button onClick={goToNext} className="nav-button next-button">
              ❯
            </button>
          </div>

          {/* <div className="discover-more">
            <a href="#" className="discover-button">
              Make a Plan Your Trip
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HiddenGems;
