import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/h-054053145-16x9_0.png?VersionId=qUsUmuRmJGNMAsoujPDbKJt29_7iwodS&size=690:388",
    "https://preview.redd.it/guests-who-ditch-refrigerated-food-why-we-had-to-defect-all-v0-l2arw9e1mbl91.jpg?width=640&crop=smart&auto=webp&s=694a626c31bd983a7d39f96101307b608dc57dd1",
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
