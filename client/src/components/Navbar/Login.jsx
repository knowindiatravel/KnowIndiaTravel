import { React, useState } from "react";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Login = ({ onClick, isMobile }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(localStorage.getItem("user.image"));
  }, []);

  return (
    <div className={`login ${isMobile ? "mobile" : ""}`} onClick={onClick}>
      {imageUrl ? (
        <img src={imageUrl} alt="user" className="login-image" />
      ) : (
        <FaUser className={`login-icon ${isMobile ? "mobile" : ""}`} />
      )}
    </div>
  );
};

export default Login;
