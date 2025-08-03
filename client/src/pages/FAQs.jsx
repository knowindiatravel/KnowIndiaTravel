import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    icon: "https://img.icons8.com/fluency/48/globe.png",
    question: "How can I find festivals near my travel destination?",
    answer:
      "Use our location-based filter to explore festivals happening around your destination. You can also browse by city or country.",
  },
  {
    icon: "https://img.icons8.com/fluency/48/ticket.png",
    question: "Can I book tickets through your website?",
    answer:
      "We currently don’t offer direct bookings, but we provide links to official event pages where you can purchase tickets.",
  },
  {
    icon: "https://img.icons8.com/fluency/48/calendar.png",
    question: "Are the festival dates accurate?",
    answer:
      "We regularly update all festival dates with verified sources. Always check the official event site before booking travel.",
  },
  {
    icon: "https://img.icons8.com/fluency/48/submit-for-approval.png",
    question: "Can I submit a festival?",
    answer:
      "Yes! We welcome community submissions. Head to our contact page and share the event details with us.",
  },
  {
    icon: "https://img.icons8.com/fluency/48/smartphone-tablet.png",
    question: "Is there a mobile app available?",
    answer:
      "Our mobile app is in development! Until then, enjoy our fully responsive site on any device.",
  },
];

const weatherUpdates = [
  {
    city: "Tokyo",
    temp: "28°C",
    icon: "https://img.icons8.com/color/48/summer.png",
    desc: "Sunny & Humid",
  },
  {
    city: "Amsterdam",
    temp: "18°C",
    icon: "https://img.icons8.com/color/48/cloud.png",
    desc: "Cloudy",
  },
  {
    city: "Cape Town",
    temp: "22°C",
    icon: "https://img.icons8.com/color/48/windy-weather.png",
    desc: "Windy",
  },
];

const latestNews = [
  {
    title: "Rio Carnival 2025 Lineup Announced!",
    img: "https://images.unsplash.com/photo-1582478194709-3ca44ad9c191?auto=format&fit=crop&w=800&q=80",
    summary:
      "Brazil's biggest event just revealed its performer list and it's stunning.",
  },
  {
    title: "Glastonbury Ticket Prices Rise Slightly",
    img: "https://images.unsplash.com/photo-1532919205293-e4f1d87f3de0?auto=format&fit=crop&w=800&q=80",
    summary: "Festival fans react to the updated ticket pricing for 2025.",
  },
  {
    title: "Cherry Blossom Festival to Return in 2026",
    img: "https://images.unsplash.com/photo-1496055401924-5ecfa98b11fc?auto=format&fit=crop&w=800&q=80",
    summary: "Japan’s famous spring event is confirmed after a 3-year break.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(index === activeIndex ? null : index);

  return (
    <div className="faq-page">
      {/* Hero */}
      <div className="faq-hero">
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1920&q=80"
          alt="FAQs Hero"
          className="faq-hero-img"
        />
        <div className="faq-hero-text">
          <h1>Explore. Discover. Understand.</h1>
          <p>Your questions about global festivals, answered.</p>
        </div>
      </div>

      {/* FAQs */}
      <div className="faq-container">
        <h2 className="faq-title">Travel & Festival FAQs</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <div className="faq-question-icon">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="faq-question-text">{item.question}</div>
                <div className="faq-toggle">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Section */}
      <div className="weather-section">
        <h2>🌤️ Global Weather Snapshots</h2>
        <div className="weather-cards">
          {weatherUpdates.map((w, i) => (
            <div className="weather-card" key={i}>
              <img src={w.icon} alt="weather icon" />
              <h4>{w.city}</h4>
              <p>{w.temp}</p>
              <span>{w.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="news-section">
        <h2>📰 Latest Festival News</h2>
        <div className="news-cards">
          {latestNews.map((news, i) => (
            <div className="news-card" key={i}>
              <img src={news.img} alt={news.title} />
              <div>
                <h4>{news.title}</h4>
                <p>{news.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
