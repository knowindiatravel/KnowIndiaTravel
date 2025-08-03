import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLock, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import "./AdminLogin.css"; // Create this CSS file

const AdminLogin = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    admin_email: "",
    admin_password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/AdminLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.message === "Wrong credentials") {
        toast.error("Invalid credentials. Please try again.");
      } else if (Object.keys(result).length === 0) {
        toast.error("Access denied. Admin privileges required.");
      } else {
        localStorage.setItem("admin.email", JSON.stringify(result.message));
        nav("/AdminPanel");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="login-header">
          <h2>Admin Portal</h2>
          <p>Enter your credentials to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="admin_email" className="form-label">
              <FaEnvelope className="input-icon" />
              Email Address
            </label>
            <input
              type="email"
              id="admin_email"
              name="admin_email"
              value={form.admin_email}
              onChange={handleChange}
              placeholder="     admin@example.com"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="admin_password" className="form-label">
              <FaLock className="input-icon" />
              Password
            </label>
            <input
              type="password"
              id="admin_password"
              name="admin_password"
              value={form.admin_password}
              onChange={handleChange}
              placeholder="     ••••••••"
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              <span className="spinner"></span>
            ) : (
              <>
                <FaSignInAlt className="button-icon" />
                Sign In
              </>
            )}
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default AdminLogin;
