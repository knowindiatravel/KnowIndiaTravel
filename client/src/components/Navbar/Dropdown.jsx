import React from "react";
import Popup from "../Popup/Popup";
import DestinationsPopup from "../Popup/DestinationsPopup";
import ExperiencesPopup from "../Popup/AboutUsPopup";
import PlanYourTripPopup from "../Popup/PlanYourTripPopup";

const Dropdown = ({ title, isOpen, onOpen, onClose }) => {
  const renderPopupContent = () => {
    switch (title) {
      case "Destinations":
        return <DestinationsPopup />;
      case "About Us":
        return <ExperiencesPopup />;
      case "Plan Your Trip":
        return <PlanYourTripPopup />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="dropdown">
        <button className="dropdown-button" onClick={onOpen}>
          {title}
        </button>
      </div>

      {isOpen && (
        <Popup title={title} onClose={onClose}>
          {renderPopupContent()}
        </Popup>
      )}
    </>
  );
};

export default Dropdown;
