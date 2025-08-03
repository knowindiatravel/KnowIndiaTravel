import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./AdminLogin";
import Signout from "../components/LoginPopup/Signout";
import { createClient } from "@supabase/supabase-js";
import {
  FaUsers,
  FaPlane,
  FaTrash,
  FaSync,
  FaSignOutAlt,
} from "react-icons/fa";
import "./AdminPanel.css";

const AdminPanel = () => {
  const location = useLocation();
  const name = localStorage.getItem("admin.email");
  const [users, setUsers] = useState([]);
  const [trips, setTrips] = useState([]);
  const [activeTab, setActiveTab] = useState("users");
  const [isLoading, setIsLoading] = useState(false);

  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(url, key);

  useEffect(() => {
    if (name) {
      fetchData();
    }
  }, [name]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const usersResponse = await fetch("http://localhost:8080/UserList");
      const usersData = await usersResponse.json();
      if (usersData.length > 0) setUsers(usersData);

      const tripsResponse = await fetch("http://localhost:8080/Travellerlist");
      const tripsData = await tripsResponse.json();
      if (tripsData.length > 0) setTrips(tripsData);
    } catch (error) {
      toast.error("Error loading data");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (e, userId, email) => {
    e.preventDefault();
    if (!window.confirm(`Are you sure you want to delete user ${email}?`))
      return;

    try {
      const response = await fetch("http://localhost:8080/DeleteUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, email }),
      });
      const result = await response.json();
      toast.success(result.message);
      if (result.message === "User deleted Successfully") {
        fetchData(); // Refresh data
      }
    } catch (error) {
      toast.error("Error deleting user");
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  if (!name) {
    return <AdminLogin />;
  }

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <div className="admin-welcome">
          <h1>Admin Dashboard</h1>
          <p>Welcome back, {JSON.parse(name)}</p>
        </div>
        <div className="admin-actions">
          <button
            onClick={fetchData}
            className="refresh-btn"
            disabled={isLoading}
          >
            <FaSync className={isLoading ? "spin" : ""} /> Refresh
          </button>
          <Signout />
        </div>
      </header>

      <div className="admin-tabs">
        <button
          className={`tab-btn ${activeTab === "users" ? "active" : ""}`}
          onClick={() => setActiveTab("users")}
        >
          <FaUsers /> Users
        </button>
        <button
          className={`tab-btn ${activeTab === "trips" ? "active" : ""}`}
          onClick={() => setActiveTab("trips")}
        >
          <FaPlane /> Trips
        </button>
      </div>

      <div className="admin-content">
        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading data...</p>
          </div>
        ) : activeTab === "users" ? (
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User ID</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Name</th>
                  <th>Email Verified</th>
                  <th>Last Sign In</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(
                  (user, index) =>
                    user.user_metadata?.phone && (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.user_metadata.phone}</td>
                        <td>{user.user_metadata.full_name || "-"}</td>
                        <td
                          className={
                            user.user_metadata.email_verified
                              ? "verified"
                              : "not-verified"
                          }
                        >
                          {user.user_metadata.email_verified ? "Yes" : "No"}
                        </td>
                        <td>{formatDate(user.last_sign_in_at)}</td>
                        <td>
                          <button
                            onClick={(e) =>
                              handleDeleteUser(e, user.id, user.email)
                            }
                            className="delete-btn"
                          >
                            <FaTrash /> Delete
                          </button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User ID</th>
                  <th>Email</th>
                  <th>Destination</th>
                  <th>Name</th>
                  <th>Travelers</th>
                  <th>Travel Date</th>
                  <th>Tour Type</th>
                  <th>Booked On</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{trip.User_id}</td>
                    <td>{trip.email}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.name}</td>
                    <td>{trip.travelers}</td>
                    <td>{trip.travelDate}</td>
                    <td>{trip.type}</td>
                    <td>{formatDate(trip.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default AdminPanel;
