import React, { useState, forwardRef } from "react";
import { FaTimes, FaUser, FaLock, FaEnvelope, FaUserAlt } from "react-icons/fa";
import "./LoginPopup.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { createClient } from "@supabase/supabase-js";
import Signout from "./Signout";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);

const LoginPopup = forwardRef(({ onClose }, ref) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    Pass: "",
    country: "",
    phone: "",
    image: null,
  });
  const [errors, setErrors] = useState({});

  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };
  const handleImageChange = (e) => {
    var file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      console.log("Logging in with:", formData.email, formData.password);
      fetch("http://localhost:8080/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(async (result) => {
          if (result.sess === null) toast.success(result.message);
          else {
            localStorage.setItem("auth.session", JSON.stringify(result.sess));
            console.log(result.sess);
            const { data, error } = await supabase.auth.setSession({
              access_token: result.sess.access_token,
              refresh_token: result.sess.refresh_token,
            });
            if (data) {
              localStorage.setItem("user.image", result.message);
              window.location.reload();
            } else toast.success(error.message);
          }
        })
        .catch((error) => {
          console.log("Error-> ", error);
          toast.success("internal problem");
        });
    } else {
      formData.phone = value;
      fetch("http://localhost:8080/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success(result.message);
        })
        .catch((error) => {
          toast.success("Internal Error");

          console.log("Error->  ", error);
        });
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setErrors({});
  };

  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling to overlay
  };

  return (
    <div className="login-popup-overlay" onClick={onClose}>
      {localStorage.getItem("user.image") ? (
        <div
          className="login-popup-container"
          ref={ref}
          onClick={handlePopupClick}
        >
          <Signout />
        </div>
      ) : (
        <div
          className="login-popup-container"
          ref={ref}
          onClick={handlePopupClick}
        >
          <div className="login-popup">
            <button className="close-button" onClick={onClose}>
              <FaTimes />
            </button>

            <div className="popup-header">
              <h2>{isLoginView ? "Sign In" : "Sign Up"}</h2>
              <p>
                {isLoginView ? "Access your account" : "Create a new account"}
              </p>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              {!isLoginView && (
                <>
                  <div className="input-group">
                    <FaUserAlt className="input-icon" />
                    <input
                      type="text"
                      name="username"
                      placeholder="Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={errors.firstName ? "error" : ""}
                    />
                    {errors.firstName && (
                      <span className="error-message">{errors.username}</span>
                    )}
                  </div>
                </>
              )}

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? "error" : ""}
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              {!isLoginView && (
                <>
                  <div className="input-group">
                    <FaLock className="input-icon" />
                    <input
                      type="password"
                      name="Pass"
                      placeholder="Re-enter Password"
                      value={formData.Pass}
                      onChange={handleInputChange}
                      className={errors.Pass ? "error" : ""}
                    />
                    {errors.Pass && (
                      <span className="error-message">{errors.Pass}</span>
                    )}
                  </div>
                  <div>
                    <label>Country:</label>
                    <input
                      required
                      type="text"
                      id="country"
                      name="country"
                      onChange={handleInputChange}
                    />
                    <br></br>

                    <label>Contact:</label>
                    <PhoneInput
                      required
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number."
                      value={value}
                      onChange={setValue}
                    />
                    <br></br>

                    <input
                      type="file"
                      accept="image/*"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                    />
                  </div>
                </>
              )}

              {isLoginView && (
                <div className="form-options">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="/Update">Forgot password?</a>
                </div>
              )}

              <button type="submit" className="submit-btn">
                {isLoginView ? "Sign In" : "Sign Up"}
              </button>
            </form>

            {isLoginView && (
              <div className="social-login">
                <p>Or continue with</p>
                <div className="social-icons">
                  <GoogleAuth />
                  <FacebookAuth />
                </div>
              </div>
            )}

            <div className="register-cta">
              {isLoginView
                ? "Don't have an account? "
                : "Already have an account? "}
              <button className="toggle-button" onClick={toggleView}>
                {isLoginView ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
});

LoginPopup.displayName = "LoginPopup";

export default LoginPopup;
