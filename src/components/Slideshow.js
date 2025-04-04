import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    "https://cdn.prod.website-files.com/61eaa3470cc7de3ef77364b3/65a001fdb964168cd6fb2441_63c16ac29410cbdbe355df5a_easter-wishes-1583183141-p-500.webp",
    "https://img.freepik.com/free-vector/flat-design-supermarket-twitter-header-template_23-2149349364.jpg",
    "https://img.freepik.com/premium-vector/special-product-offer-label-logo_637458-481.jpg?w=900",
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const styles = {
    slideshowContainer: {
      position: "relative",
      width: "100%",
      height: "400px",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    slideshowImage: {
      width: "95%",
      height: "100%",
      objectFit: "cover",
      transition: "opacity 1s ease-in-out",
    },
    overlayText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "#fff",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div style={styles.slideshowContainer}>
      <img
        src={images[currentImageIndex]}
        alt="Ramadan Kareem"
        style={styles.slideshowImage}
      />
      <div style={styles.overlayText}></div>
    </div>
  );
};

export default Slideshow;
