// Popup.jsx
import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Popup.css";

const Popup = React.forwardRef(
  ({ title, onClose, children, className = "" }, ref) => {
    const handlePopupClick = (e) => {
      e.stopPropagation(); // Prevent click from reaching the overlay
    };

    return (
      <div className="popup-overlay" onClick={onClose}>
        <div
          className={`popup ${className}`}
          ref={ref}
          onClick={handlePopupClick}
        >
          <div className="popup-content">
            <div className="popup-header">
              <h2 className="popup-title">{title}</h2>
              <button className="close-button" onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            <div className="popup-body">{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

Popup.displayName = "Popup";

export default Popup;
