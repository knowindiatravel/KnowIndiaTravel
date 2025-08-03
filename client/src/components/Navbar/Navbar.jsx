import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import Login from "./Login";
//import { useLocation } from "react-router-dom";
import MenuBar from "./MenuBar";
import Clock from "../Clock/Clock";
import Popup from "../Popup/Popup";
import MenuBarPopup from "../Popup/MenuBarPopup";
import DestinationsPopup from "../Popup/DestinationsPopup";
import AboutUsPopup from "../Popup/AboutUsPopup";
import PlanYourTripPopup from "../Popup/PlanYourTripPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [shouldReopenMenuBar, setShouldReopenMenuBar] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const popupRefs = useRef({});
  const dropdownButtonsRef = useRef([]);
  const loginButtonRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    // In your Navbar component
    const handleClickOutside = (event) => {
      // If no popups are open, do nothing
      if (!activePopup && !isLoginPopupOpen) return;

      // Check if click is inside any popup
      const clickedInsidePopup = Object.values(popupRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      );

      // Check if click is on any dropdown button (including login)
      const clickedOnDropdownButton = dropdownButtonsRef.current.some(
        (button) => button && button.contains(event.target)
      );

      // Check if click is on the login button specifically
      const clickedOnLoginButton =
        loginButtonRef.current && loginButtonRef.current.contains(event.target);

      // Only close if clicking outside all popups AND not on a dropdown button
      if (
        !clickedInsidePopup &&
        !clickedOnDropdownButton &&
        !clickedOnLoginButton
      ) {
        if (isLoginPopupOpen) {
          closeLoginPopup();
        } else if (activePopup) {
          closePopup();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePopup, isLoginPopupOpen]);

  const openPopup = (popupName) => {
    // Close login popup if opening another popup
    if (isLoginPopupOpen) closeLoginPopup();
    setActivePopup(popupName);
  };

  const closePopup = () => {
    if (isMobile && shouldReopenMenuBar) {
      setActivePopup("MenuBar");
      setShouldReopenMenuBar(false);
    } else {
      setActivePopup(null);
    }
  };

  const handleDropdownClick = (popupName) => {
    if (isMobile) setShouldReopenMenuBar(true);
    openPopup(popupName);
  };

  const openLoginPopup = () => {
    // Close any other popup when opening login
    if (activePopup) closePopup();
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initialize dropdown buttons refs
    dropdownButtonsRef.current = Array.from(
      document.querySelectorAll(
        ".dropdown-button, .menu-bar-button, .login-button"
      )
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to set ref for each popup
  const setPopupRef = (name, ref) => {
    if (ref) popupRefs.current[name] = ref;
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-link">
            <span className="logo" style={{ textDecoration: "none" }}>
              {isMobile ? (
                <>
                  <span className="logo-highlight">Know</span>IndiaTravel
                </>
              ) : (
                <>
                  <span className="logo-highlight">Know</span>IndiaTravel
                </>
              )}
            </span>
          </Link>
        </div>

        {!isMobile && (
          <div className="navbar-middle">
            <Dropdown
              title="Destinations"
              isOpen={activePopup === "Destinations"}
              onOpen={() => openPopup("Destinations")}
              onClose={closePopup}
              ref={(ref) => (dropdownButtonsRef.current[0] = ref)}
            />
            <Dropdown
              title="About Us"
              isOpen={activePopup === "AboutUs"}
              onOpen={() => openPopup("AboutUs")}
              onClose={closePopup}
              ref={(ref) => (dropdownButtonsRef.current[1] = ref)}
            />
            <Dropdown
              title="Plan Your Trip"
              isOpen={activePopup === "Plan Your Trip"}
              onOpen={() => openPopup("Plan Your Trip")}
              onClose={closePopup}
              ref={(ref) => (dropdownButtonsRef.current[2] = ref)}
            />
          </div>
        )}

        <div className="navbar-right">
          {!isMobile && <Clock />}
          <SearchBar isMobile={isMobile} />
          <Login
            onClick={openLoginPopup}
            isMobile={isMobile}
            ref={(ref) => {
              dropdownButtonsRef.current[3] = ref;
              loginButtonRef.current = ref;
            }}
          />
          <MenuBar
            onOpen={() => openPopup("MenuBar")}
            ref={(ref) => (dropdownButtonsRef.current[4] = ref)}
          />
          {!isMobile && (
            <Link to="/AdminLogin" className="admin-link">
              <span className="admin-icon">⚙️</span>
              <span className="admin-text">Admin</span>
            </Link>
          )}
        </div>
      </div>

      {/* Popups */}
      {activePopup === "MenuBar" && (
        <Popup
          title="Menu"
          onClose={closePopup}
          ref={(ref) => setPopupRef("MenuBar", ref)}
        >
          <MenuBarPopup
            isMobile={isMobile}
            onOpenDestinations={() => handleDropdownClick("Destinations")}
            onOpenAboutUs={() => handleDropdownClick("AboutUs")}
            onOpenPlanYourTrip={() => handleDropdownClick("Plan Your Trip")}
            onOpenLogin={openLoginPopup}
          />
        </Popup>
      )}

      {activePopup === "Destinations" && (
        <Popup
          title="Destinations"
          onClose={closePopup}
          ref={(ref) => setPopupRef("Destinations", ref)}
          className="wide-popup"
        >
          <DestinationsPopup onClose={closePopup} />
        </Popup>
      )}

      {activePopup === "AboutUs" && (
        <Popup
          title="About Us"
          onClose={closePopup}
          ref={(ref) => setPopupRef("AboutUs", ref)}
        >
          <AboutUsPopup onClose={closePopup} />
        </Popup>
      )}

      {activePopup === "Plan Your Trip" && (
        <Popup
          title="Plan Your Trip"
          onClose={closePopup}
          ref={(ref) => setPopupRef("PlanYourTrip", ref)}
          className="extra-wide-popup"
        >
          <PlanYourTripPopup />
        </Popup>
      )}

      {isLoginPopupOpen && (
        <LoginPopup
          onClose={closeLoginPopup}
          ref={(ref) => setPopupRef("LoginPopup", ref)}
        />
      )}
    </nav>
  );
};

export default Navbar;
