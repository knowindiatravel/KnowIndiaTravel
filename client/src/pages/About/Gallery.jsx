import React, { useState, useRef } from "react";
import { FiZoomIn, FiHeart, FiShare2, FiUpload, FiX } from "react-icons/fi";
import "./Gallery.css";

const Gallery = () => {
  const [activeCollection, setActiveCollection] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Gallery images data
  const destinations = [
    {
      name: "Rajasthan",
      description: "Land of kings, deserts, and vibrant culture",
      images: [
        {
          url: "https://images.unsplash.com/photo-1649073868642-bcbbd06239d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QW1iZXIlMjBGb3J0fGVufDB8fDB8fHww",
          title: "Amber Fort, Jaipur",
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1673415819335-10861f5aa4ca?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Jaisalmer Desert",
        },
        {
          url: "https://images.unsplash.com/photo-1705592360345-1cd173c8b345?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VWRhaXB1ciUyMExha2UlMjBQYWxhY2V8ZW58MHx8MHx8fDA%3D",
          title: "Udaipur Lake Palace",
        },
      ],
    },
    {
      name: "Kerala",
      description: "God's Own Country - Backwaters and lush greenery",
      images: [
        {
          url: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWxsZXBwZXklMjBIb3VzZWJvYXR8ZW58MHx8MHx8fDA%3D",
          title: "Alleppey Houseboat",
        },
        {
          url: "https://images.unsplash.com/photo-1591354565616-16e9337d2d61?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TXVubmFyJTIwVGVhJTIwR2FyZGVuc3xlbnwwfHwwfHx8MA%3D%3D",
          title: "Munnar Tea Gardens",
        },
        {
          url: "https://images.unsplash.com/photo-1652185670744-a839091777cb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S29jaGklMjBDaGluZXNlJTIwTmV0c3xlbnwwfHwwfHx8MA%3D%3D",
          title: "Kochi Chinese Nets",
        },
      ],
    },
    {
      name: "Himalayas",
      description: "Majestic mountains and spiritual retreats",
      images: [
        {
          url: "https://plus.unsplash.com/premium_photo-1661962344178-19930ba15492?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVoJTIwTGFkYWtofGVufDB8fDB8fHww",
          title: "Leh-Ladakh",
        },
        {
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
          title: "Himalayan Peaks",
        },
        {
          url: "https://images.unsplash.com/photo-1628782379401-4fff9cdcbbfe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BpdGklMjBWYWxsZXl8ZW58MHx8MHx8fDA%3D",
          title: "Spiti Valley",
        },
      ],
    },
  ];

  const featuredCollections = [
    {
      title: "Coastal India",
      description: "Golden beaches and tropical paradise",
      image:
        "https://images.unsplash.com/photo-1727276884218-ec3be46cda91?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvYXN0YWwlMjBJbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
      count: "48 Photos",
    },
    {
      title: "Wildlife Sanctuaries",
      description: "Biodiversity in its natural habitat",
      image:
        "https://plus.unsplash.com/premium_photo-1661818104191-c822b94335ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2lsZGxpZmUlMjBTYW5jdHVhcmllc3xlbnwwfHwwfHx8MA%3D%3D",
      count: "32 Photos",
    },
    {
      title: "Sacred Temples",
      description: "Architectural marvels and spiritual centers",
      image:
        "https://images.unsplash.com/photo-1672068566074-164964f599d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FjcmVkJTIwVGVtcGxlc3xlbnwwfHwwfHx8MA%3D%3D",
      count: "65 Photos",
    },
  ];

  const toggleCollection = (index) => {
    setActiveCollection(activeCollection === index ? null : index);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setShowUploadModal(true);
  };

  const removeFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const closeModal = () => {
    setShowUploadModal(false);
    setSelectedFiles([]);
  };

  return (
    <div className="gallery-container">
      {/* Gallery Hero Section */}
      <div className="gallery-hero">
        <h1 className="section-title">India Through Our Lens</h1>
        <p className="section-subtitle">
          Explore the vibrant colors, diverse landscapes, and rich heritage of
          India
        </p>
      </div>

      <div className="destinations-gallery">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`destination-section ${
              activeCollection === index ? "active" : ""
            }`}
          >
            <div
              className="destination-header"
              onClick={() => toggleCollection(index)}
            >
              <h2 className="destination-name">{destination.name}</h2>
              <p className="destination-description">
                {destination.description}
              </p>
              <div className="destination-toggle">
                {activeCollection === index ? "−" : "+"}
              </div>
            </div>

            <div className="image-grid-container">
              <div className="image-grid">
                {destination.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="gallery-item">
                    <div className="image-wrapper">
                      <img
                        src={image.url}
                        alt={image.title}
                        loading="lazy"
                        className="gallery-image"
                      />
                    </div>
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <h3>{image.title}</h3>
                        <div className="action-buttons">
                          <button className="action-btn">
                            <FiZoomIn />
                          </button>
                          <button className="action-btn">
                            <FiHeart />
                          </button>
                          <button className="action-btn">
                            <FiShare2 />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="featured-collection">
        <h2 className="section-heading">Featured Collections</h2>
        <p className="section-subtitle">
          Curated photo collections showcasing India's diversity
        </p>

        <div className="featured-grid">
          {featuredCollections.map((collection, index) => (
            <div key={index} className="featured-item">
              <div className="featured-image-container">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="featured-image"
                />
                <div className="collection-overlay">
                  <div className="collection-info">
                    <h3>{collection.title}</h3>
                    <p>{collection.description}</p>
                    <span className="photo-count">{collection.count}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section with Upload Trigger */}
      <div className="cta-section">
        <h2>Share Your India Experience</h2>
        <p>
          Have beautiful photos of your Indian travels? Share them with our
          community!
        </p>
        <button
          className="cta-button"
          onClick={() => fileInputRef.current.click()}
        >
          <FiUpload className="upload-icon" /> Submit Your Photos
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept="image/*"
          style={{ display: "none" }}
        />
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="upload-modal-overlay">
          <div className="upload-modal">
            <button className="close-modal" onClick={closeModal}>
              <FiX />
            </button>
            <h3>Upload Your Photos</h3>
            <p>Selected files will be submitted for review</p>

            <div className="file-preview-container">
              {selectedFiles.length > 0 ? (
                <div className="file-previews">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="file-preview">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="preview-image"
                      />
                      <div className="file-info">
                        <span>{file.name}</span>
                        <span>{(file.size / 1024).toFixed(2)} KB</span>
                      </div>
                      <button
                        className="remove-file"
                        onClick={() => removeFile(index)}
                      >
                        <FiX />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No files selected</p>
                </div>
              )}
            </div>

            <div className="modal-actions">
              <button className="add-more-btn" onClick={handleUploadClick}>
                <FiUpload /> Add More Photos
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                accept="image/*"
                style={{ display: "none" }}
              />
              <button className="submit-btn">
                Submit {selectedFiles.length} Photo
                {selectedFiles.length !== 1 ? "s" : ""}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
