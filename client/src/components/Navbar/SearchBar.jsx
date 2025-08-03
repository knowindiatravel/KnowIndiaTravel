import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        if (searchQuery === "") {
          setIsExpanded(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    if (!isExpanded) setIsExpanded(true);
  };

  return (
    <div
      className={`search-bar ${isExpanded ? "expanded" : ""}`}
      onClick={() => !isExpanded && setIsExpanded(true)}
      ref={searchRef}
    >
      <FaSearch className="search-icon" />
      {isExpanded && (
        <>
          <input
            type="text"
            placeholder="Search destinations.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-button" onClick={clearSearch}>
              <FaTimes />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default SearchBar;
