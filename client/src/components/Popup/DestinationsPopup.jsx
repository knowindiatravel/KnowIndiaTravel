import React from "react";
import { Link } from "react-router-dom";
import "./DestinationsPopup.css";

const destinationsData = [
  {
    region: "North India",
    path: "/north-india",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/North?qlt=82",
    states: [
      "Delhi",
      "Haryana",
      "Punjab",
      "Uttarakhand",
      "Uttar Pradesh",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Ladakh",
      "Chandigarh",
    ],
  },
  {
    region: "West India",
    path: "/west-india",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/West?qlt=82",
    states: [
      "Rajasthan",
      "Gujarat",
      "Maharashtra",
      "Goa",
      "Dadra and Nagar Haveli and Daman and Diu",
    ],
  },
  {
    region: "South India",
    path: "/south-india",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/South?qlt=82",
    states: [
      "Andhra Pradesh",
      "Karnataka",
      "Kerala",
      "Tamil Nadu",
      "Telangana",
      "Puducherry",
      "Lakshadweep",
    ],
  },
  {
    region: "East India",
    path: "/east-india",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/East?qlt=82",
    states: [
      "West Bengal",
      "Bihar",
      "Jharkhand",
      "Odisha",
      "Andaman and Nicobar Islands",
      "Sikkim",
      "Arunachal Pradesh",
      "Assam",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Tripura",
    ],
  },
];

const DestinationsPopup = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose(); // Close the popup when any link is clicked
  };

  return (
    <div className="destination-popup-container" onClick={handleLinkClick}>
      {destinationsData.map((region, index) => (
        <Link to={region.path} className="region-link" key={index}>
          <div className="region-card">
            <img
              className="region-map"
              src={region.image}
              alt={region.region}
              title={region.region}
            />
            <h3 className="region-title">{region.region}</h3>
            <ul className="state-list">
              {region.states.map((state, idx) => (
                <li key={idx} className="state-name">
                  {state}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DestinationsPopup;
