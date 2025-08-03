import React from "react";
import "./TermsOfUse.css";

const TermsOfUse = () => {
  return (
    <div className="terms-container">
      <div className="terms-hero">
        <h1>Terms of Use</h1>
        <p>Last updated: July 9, 2025</p>
      </div>

      <section className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our travel platform, you agree to comply with and be bound by these Terms of Use.
          If you do not agree, you may not access the website or use any of our services.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. Use of Services</h2>
        <p>
          Our services are intended for personal, non-commercial use only. You agree not to misuse the platform
          or attempt to interfere with its functionality.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Content Ownership</h2>
        <p>
          All content including images, text, and logos are the property of our platform or licensed sources.
          You may not copy, reproduce, or distribute any materials without permission.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. User Responsibilities</h2>
        <p>
          You agree to use the platform lawfully and refrain from submitting false, harmful, or misleading
          information. We reserve the right to suspend access for violation of terms.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Changes to Terms</h2>
        <p>
          We may revise these Terms at any time. Continued use of the platform after updates constitutes
          acceptance of the new terms.
        </p>
      </section>

      <section className="terms-footer">
        <p>
          For questions about these Terms, contact us at: <a href="mailto:support@yourtravelapp.com">support@yourtravelapp.com</a>
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
