import React from "react";
import { FaBars } from "react-icons/fa";

const MenuBar = ({ onOpen }) => {
  return (
    <div className="menu-bar mobile" onClick={onOpen}>
      <FaBars className="menu-icon mobile" />
    </div>
  );
};

export default MenuBar;
