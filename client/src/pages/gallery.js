import React from "react";
import "./gallery.css";

const images = [
  "/images/g1.jpg",
  "/images/g2.jpg",
  "/images/g3.jpg",
  "/images/g4.jpg",
  "/images/g5.jpg",
  "/images/g6.jpg"
];

function Gallery() {
  return (
    <div className="gallery">
      <h1 data-aos="fade-down">Restaurant Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="food"
            data-aos="zoom-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;