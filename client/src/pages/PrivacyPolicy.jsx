import React, { useState } from "react";
import "./PrivacyPolicy.css";

const sections = [
  {
    title: "Scope",
    content: `In this privacy policy ‘we’, ‘us’, and ‘our’ refers to the Ministry of Tourism, Government of India. Please read this carefully as it applies to your use of our websites (e.g., incredibleindia.gov.in), mobile apps, and platforms. Your continued use implies your consent to our practices outlined below.`
  },
  {
    title: "Personal Information Collected",
    content: `We may collect your name, email, preferences, contact details, and travel interests depending on your interaction—whether you're a tourist, travel agent, or business associate. For general visitors, we may gather technical data like IP address, browser type, and device information to improve user experience.`
  },
  {
    title: "Online Privacy Issues",
    content: `We use cookies and session tools for personalization, analytics, and improvement. We do not track individuals unless legally required. IPs and logs are only used for trends, security, or compliance with IT Act (2000) and its amendments.`
  }
];

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <img
        src="https://images.unsplash.com/photo-1558449028-8a1c53c6b9a8?auto=format&fit=crop&w=1350&q=80"
        alt="Privacy Banner"
        className="privacy-banner"
      />

      <div className="policy-sections">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`policy-section ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleSection(index)}
          >
            <div className="section-header">{section.title}</div>
            <div className="section-content">
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
