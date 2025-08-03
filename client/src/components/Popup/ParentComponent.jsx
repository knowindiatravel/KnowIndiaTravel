import React, { useState } from "react";
import DestinationsPopup from "./DestinationsPopup";

const ParentComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>Show Destinations</button>

      {showPopup && <DestinationsPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default ParentComponent;
