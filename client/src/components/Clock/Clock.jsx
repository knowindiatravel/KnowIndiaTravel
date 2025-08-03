import React, { useState, useEffect } from "react";
import "./Clock.css";

const countryToTimezone = {
  "🇮🇳 India": "Asia/Kolkata",
  "🇺🇸 USA (NY)": "America/New_York",
  "🇬🇧 UK": "Europe/London",
  "🇦🇺 Australia": "Australia/Sydney",
  "🇯🇵 Japan": "Asia/Tokyo",
  "🇨🇳 China": "Asia/Shanghai",
  "🇩🇪 Germany": "Europe/Berlin",
  "🇫🇷 France": "Europe/Paris",
  "🇨🇦 Canada": "America/Toronto",
  "🇸🇬 Singapore": "Asia/Singapore",
  "🇦🇪 UAE": "Asia/Dubai",
  "🇿🇦 South Africa": "Africa/Johannesburg",
  "🇧🇷 Brazil": "America/Sao_Paulo",
  "🇲🇽 Mexico": "America/Mexico_City",
  "🇮🇹 Italy": "Europe/Rome",
  "🇪🇸 Spain": "Europe/Madrid",
  "🇳🇱 Netherlands": "Europe/Amsterdam",
  "🇸🇪 Sweden": "Europe/Stockholm",
  "🇨🇭 Switzerland": "Europe/Zurich",
  "🇷🇺 Russia": "Europe/Moscow",
};

const Clock = () => {
  const [selectedCountry, setSelectedCountry] = useState("🇮🇳 India");
  const [time, setTime] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const timeZone = countryToTimezone[selectedCountry] || "UTC";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleString("en-US", { timeZone });
      setTime(new Date(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  const formatTime = (value) => value.toString().padStart(2, "0");
  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="clock-container">
      <div className="time-display">
        <div className="country-selector">
          <button
            className="country-trigger"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCountry.split(" ")[0]}{" "}
            {/* Show only flag and country code */}
          </button>

          {isDropdownOpen && (
            <div className="country-dropdown">
              {Object.keys(countryToTimezone).map((country) => (
                <div
                  key={country}
                  className={`country-option ${
                    selectedCountry === country ? "selected" : ""
                  }`}
                  onClick={() => handleCountryChange(country)}
                >
                  {country}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="time">
          <span className="time-part">{hours}</span>
          <span className="time-separator">:</span>
          <span className="time-part">{minutes}</span>
          <span className="time-separator">:</span>
          <span className="time-part">{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
