import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
//import Dark from './Dark'
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(url, key);

const PlanYourTripPopup = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: 1,
    tripType: "leisure",
    message: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    console.log(user);
    if (user) {
      formData.id = user.id;
      fetch("http://localhost:8080/Tripdata", {
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
          console.log(error);
          toast.success(error);
        });
    } else toast.success(error.message);
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* <Dark/> */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#0a4da3",
            marginBottom: "10px",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Plan Your Perfect Trip
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "16px",
          }}
        >
          Fill out this form and our travel experts will create a customized
          itinerary for you
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  transition: "border 0.3s",
                  boxSizing: "border-box",
                }}
                placeholder="John Doe"
              />
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  transition: "border 0.3s",
                  boxSizing: "border-box",
                }}
                placeholder="your@email.com"
              />
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  transition: "border 0.3s",
                  boxSizing: "border-box",
                }}
                placeholder="+1 (123) 456-7890"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                onClick={nextStep}
                style={{
                  backgroundColor: "#0a4da3",
                  color: "white",
                  border: "none",
                  padding: "12px 25px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  transition: "background 0.3s",
                }}
              >
                Next: Trip Details
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Trip Details */}
        {currentStep === 2 && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Destination*
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  transition: "border 0.3s",
                  boxSizing: "border-box",
                }}
                placeholder="Where do you want to go?"
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "25px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Travel Date*
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "16px",
                    transition: "border 0.3s",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Number of Travelers*
                </label>
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "16px",
                    transition: "border 0.3s",
                    boxSizing: "border-box",
                    backgroundColor: "white",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "person" : "people"}
                    </option>
                  ))}
                  <option value="9+">9+ people</option>
                </select>
              </div>
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Trip Type*
              </label>
              <select
                name="tripType"
                value={formData.tripType}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  transition: "border 0.3s",
                  boxSizing: "border-box",
                  backgroundColor: "white",
                }}
              >
                <option value="leisure">Leisure Vacation</option>
                <option value="honeymoon">Honeymoon</option>
                <option value="family">Family Trip</option>
                <option value="adventure">Adventure Travel</option>
                <option value="business">Business Trip</option>
              </select>
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Special Requests
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  transition: "border 0.3s",
                  boxSizing: "border-box",
                  minHeight: "120px",
                }}
                placeholder="Tell us about your dream trip, special requirements, or anything else we should know..."
              ></textarea>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                type="button"
                onClick={prevStep}
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#333",
                  border: "none",
                  padding: "12px 25px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  transition: "background 0.3s",
                }}
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? "#ccc" : "#00b4b4",
                  color: "white",
                  border: "none",
                  padding: "12px 25px",
                  borderRadius: "6px",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  transition: "background 0.3s",
                }}
              >
                {isSubmitting ? "Processing..." : "Submit Request"}
              </button>
            </div>
          </div>
        )}
      </form>
      <ToastContainer toastStyle={{ backgroundColor: "lightblue" }} />
    </div>
  );
};

export default PlanYourTripPopup;
