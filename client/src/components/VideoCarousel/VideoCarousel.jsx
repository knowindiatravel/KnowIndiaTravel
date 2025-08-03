import React, { useState, useRef, useEffect } from "react";
import "./VideoCarousel.css";
import { createClient } from "@supabase/supabase-js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(url, key);

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);
  const [load, setLoad] = useState(false);
  const [videos, setVideos] = useState([]);

  const geturl = async () => {
    const { data, error } = await supabase.storage
      .from("tourist-profile-pics")
      .list("videos", {
        limit: 5,
        offset: 1,
      });

    if (data) {
      const videoUrls = await Promise.all(
        data.map(async (item) => {
          const { data: urlData } = supabase.storage
            .from("tourist-profile-pics")
            .getPublicUrl(`videos/${item.name}`);
          return { src: urlData.publicUrl };
        })
      );
      setVideos(videoUrls);
      setLoad(true);
    }
  };

  useEffect(() => {
    geturl();
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case "m":
          toggleMute();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isMuted]);

  useEffect(() => {
    if (videoRef.current && videos[currentIndex]?.src && load) {
      videoRef.current
        .play()
        .then(() => {})
        .catch((e) => console.log("Auto-play prevented:", e));
    }
  }, [currentIndex, videos, load]);

  return (
    <div className="video-carousel" ref={carouselRef}>
      <div className="video-container">
        {videos.length > 0 && (
          <video
            ref={videoRef}
            key={currentIndex}
            autoPlay
            muted={isMuted}
            onEnded={goToNext}
            playsInline
          >
            <source src={videos[currentIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <button className="nav-button prev" onClick={goToPrevious}>
          <FaChevronLeft />
        </button>
        <button className="nav-button next" onClick={goToNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
