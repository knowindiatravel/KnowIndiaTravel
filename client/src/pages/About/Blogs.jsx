import React, { useState, useRef, useEffect } from "react";
import { FaStar, FaRegStar, FaPlay, FaBookOpen, FaEye } from "react-icons/fa";
import { FiChevronRight, FiUpload } from "react-icons/fi";
import "./Blogs.css";
import {toast,ToastContainer} from 'react-toastify'
import { createClient } from "@supabase/supabase-js";
//import Dark from './Dark'

const url =import.meta.env.VITE_SUPABASE_URL
const key =import.meta.env.VITE_SUPABASE_KEY
const supabase=createClient(url,key)

const Blogs = () => {
  const [activeTab, setActiveTab] = useState("reviews");
  const [reviews, setReviews] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isManualSelection, setIsManualSelection] = useState(false);
  const videoRefs = useRef([]);
  const fileInputRef = useRef(null);
  //const [path,setpath] = useState('');
  
  const [Reviews,setreviews]=useState([]);
  
  //Initial blog reviews data
  const initialReviews = [
    {
      id: 1,
      title: "Golden Triangle Tour Experience",
      author: "Rahul Sharma",
      avatar:
        "https://images.unsplash.com/photo-1717672134174-bba6868108b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaHVsJTIwc2hhcm1hfGVufDB8fDB8fHww",
      rating: 5,
      date: "15 May 2023",
      comment:
        "The 7-day Golden Triangle tour was exceptional! The guides were knowledgeable and hotels were premium. The Taj Mahal at sunrise was breathtaking.",
      excerpt:
        "Exploring Delhi, Agra and Jaipur with KnowIndiaTravel was a seamless experience...",
    },
    {
      id: 2,
      title: "Kerala Backwaters Bliss",
      author: "Priya Patel",
      avatar:
        "https://images.unsplash.com/photo-1641908261314-8f56fe161fe7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByaXlhJTIwcGF0ZWx8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      date: "22 June 2023",
      comment:
        "The houseboat stay was magical, though the afternoon heat was intense. Overall a wonderful South India experience.",
      excerpt:
        "Cruising through Alleppey's backwaters while enjoying local cuisine was unforgettable...",
    },
    {
      id: 3,
      title: "Himalayan Trekking Adventure",
      author: "Arjun Kapoor",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      date: "10 Sept 2023",
      comment:
        "The Manali-Leh trek organized by KnowIndiaTravel was physically challenging but the team's support made it achievable. Stunning landscapes!",
      excerpt:
        "From snow-capped peaks to Buddhist monasteries, this trek showed me the raw beauty of the Himalayas...",
    },
  ];

 const func=async(e)=>{
  const {data} = await supabase
                 .from('Comments')
                 .select("*");
     setreviews(data);            
     console.log(Reviews);
   }

  useEffect(()=>{
  func();
  },[])
//func();
  // YouTube videos data with embed IDs extracted from the URLs
  const youtubeVideos = [
    {
      id: "y1",
      title: "Taj Mahal Complete Tour Guide",
      embedId: "49HTIoCccDY",
      views: "1.2M views",
    },
    {
      id: "y2",
      title: "Kerala Backwaters Experience",
      embedId: "DX5n2f5Vu9s",
      views: "856K views",
    },
    {
      id: "y3",
      title: "Rajasthan Cultural Journey",
      embedId: "w9WAvgIHJr4",
      views: "723K views",
    },
    {
      id: "y4",
      title: "Himalayan Trekking Documentary",
      embedId: "H9-OOl_9r6I",
      views: "1.5M views",
    },
  ];

  // Default avatars avatar: defaultAvatars[0],
  const defaultAvatars = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
  ];

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    name:'',
    email:'',
    rating: 5,
    comment: "",
    excerpt: "",
  });

  // Initialize reviews
  useEffect(() => {
    setReviews(initialReviews);
  }, []);

  // Auto-play videos in sequence (10 seconds)
  useEffect(() => {
    if (isManualSelection) return;

    const timer = setTimeout(() => {
      const nextIndex = (currentVideoIndex + 1) % youtubeVideos.length;
      setCurrentVideoIndex(nextIndex);
    }, 10000); // Change every 10 seconds

    return () => clearTimeout(timer);
  }, [currentVideoIndex, isManualSelection]);

  // Handle manual video selection
  const handleVideoSelect = (index) => {
    setIsManualSelection(true);
    setCurrentVideoIndex(index);

    // Reset manual selection after 30 seconds of inactivity
    setTimeout(() => {
      setIsManualSelection(false);
    }, 30000);
  };

  // Render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="star filled" />
      ) : (
        <FaRegStar key={i} className="star" />
      )
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating: rating,
    });
  };

  // const handleAvatarUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFormData({
  //         ...formData,
  //         avatar: reader.result,
  //       });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleSubmitReview = async(e) => {
    e.preventDefault();

    const {data:{user},error}=await supabase.auth.getUser();
   if(user){
    //console.log(user);  
     formData.name=user.user_metadata.first_name;
     formData.email=user.email;
    fetch('http://localhost:8080/Blogs',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then((res)=>res.json())
    .then((result)=>{
      if(!Array.isArray(result.message)){
     toast.success(result.message);
      }
      else{
      setReviews(result.message[0]);
       setpath(result.url);
      }
    })
   }
   else
   toast.success(error.message);
  };

  return (
    <div className="blogs-container">
      {/* <Dark/> */}
      <div className="blogs-hero">
        <h1 className="section-title">Travel Blogs & Reviews</h1>
        <p className="section-subtitle">
          Discover authentic travel experiences shared by our community
        </p>
      </div>

      {/* Tab Navigation - Two Column Layout */}
      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
          style={{
            background:
              activeTab === "reviews"
                ? "linear-gradient(135deg, #0a4da3, #00b4b4)"
                : "#f8f9fa",
            color: activeTab === "reviews" ? "white" : "#2c3e50",
          }}
        >
          <FaBookOpen className="tab-icon" /> Travel Reviews
        </button>
        <button
          className={`tab-btn ${activeTab === "videos" ? "active" : ""}`}
          onClick={() => setActiveTab("videos")}
          style={{
            background:
              activeTab === "videos"
                ? "linear-gradient(135deg, #0a4da3, #00b4b4)"
                : "#f8f9fa",
            color: activeTab === "videos" ? "white" : "#2c3e50",
          }}
        >
          <FaPlay className="tab-icon" /> Video Guides
        </button>
      </div>

      {activeTab === "reviews" && (
        <div className="reviews-section">
          {/* Review Submission Form */}
          <div className="review-form-container">
            <h3>Share Your Travel Experience</h3>
            <form onSubmit={handleSubmitReview}>
              <div className="form-group">
                <label>Experience Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Golden Triangle Tour Experience"
                  required
                />
              </div>

              {/* <div className="form-group">
                <label>Your Avatar</label>
                <div className="avatar-selection">
                  <div className="default-avatars">
                    {defaultAvatars.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt={`Default Avatar ${index + 1}`}
                        className={`avatar-option ${
                          formData.avatar === avatar ? "selected" : ""
                        }`}
                        onClick={() => setFormData({ ...formData, avatar })}
                      />
                    ))}
                  </div>
                  <div className="upload-avatar">
                    <button
                      type="button"
                      className="upload-btn"
                      onClick={() => fileInputRef.current.click()}
                    >
                      <FiUpload /> Upload Photo
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleAvatarUpload}
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div> */}
         
              <div className="form-group">
                <label>Rating</label>
                <div className="rating-selector">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${
                        star <= formData.rating ? "filled" : ""
                      }`}
                      onClick={() => handleRatingChange(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Brief Comment</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Share your overall experience in a few sentences"
                  required
                />
              </div>

              <div className="form-group">
                <label>Full Story</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your experience in detail"
                  required
                />
              </div>

              <input type="submit" className="submit-btn" value="Submit"/>
            </form>
          </div>
          
          {/* Existing Reviews */}
          <div className="reviews-grid">
            {Reviews.map((review,index) =>{
              return(
              <div key={index} className="review-card">
                <div className="review-header">
                  <img
                    src={review.path}
                    alt={review.Name}
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h3>{review.Name}</h3>
                    <div className="rating">
                      {renderStars(review.ratings)}
                      
                      <span className="review-date">{review.created_at}</span>
                    </div>
                  </div>
                </div>
                <h4 className="review-title">{review.title}</h4>
                <p className="review-comment">"{review.comment}"</p>
                <p className="review-excerpt">{review.excerpt}</p>
                <button className="read-more-btn">Read Full Story</button>
              </div>
              )
})}
          </div>
        </div>
      )}

     


      {activeTab === "videos" && (
        <div className="videos-section">
          <div className="videos-grid">
            {youtubeVideos.map((video, index) => (
              <div
                key={video.id}
                className={`video-card ${
                  index === currentVideoIndex ? "active" : ""
                }`}
                onClick={() => handleVideoSelect(index)}
              >
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${
                      video.embedId
                    }?autoplay=${index === currentVideoIndex ? 1 : 0}&mute=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ref={(el) => (videoRefs.current[index] = el)}
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <div className="video-meta">
                    <span className="video-views">
                      <FaEye className="views-icon" /> {video.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <ToastContainer toastStyle={{backgroundColor:'skyblue'}}/>
    </div>
  );
};

export default Blogs;
