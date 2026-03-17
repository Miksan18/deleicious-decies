import React, { useEffect, useState } from "react";
import "./hero.css";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg"
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`
      }}
    >
      <div className="overlay">
        <h1>Delicious Decies</h1>
        <p>Luxury Taste • Premium Experience • Fresh Ingredients</p>
        <button className="hero-btn">Explore Menu</button>
      </div>
    </div>
  );
}

export default Hero;