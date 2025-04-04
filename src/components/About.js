import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"; // Importing icons from react-icons library

const AboutUs = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "beige",
        position: "relative", // Ensure it's part of normal document flow
        textAlign: "center", // Center the content
      }}
    >
      {/* About Us Section */}
      <h1>About Us</h1>
      <p>
        Welcome to <strong>vastmart</strong>, your one-stop destination for all
        your shopping needs! At Supermarket, we pride ourselves on offering a
        wide range of high-quality products, exceptional customer service, and a
        shopping experience like no other.
      </p>

      {/* Social Media Links */}
      <h2>Follow Us on Social Media</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Instagram */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaInstagram size={30} color="#E4405F" />
          <a
            href="https://www.instagram.com/vastmart"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Instagram
          </a>
        </div>

        {/* TikTok */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaTiktok size={30} color="#000" />
          <a
            href="https://www.tiktok.com/@vastmart"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#000" }}
          >
            TikTok
          </a>
        </div>

        {/* YouTube */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaYoutube size={30} color="#FF0000" />
          <a
            href="https://www.youtube.com/vastmart"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#000" }}
          >
            YouTube
          </a>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Wide variety of products to meet all your needs.</li>
        <li>Affordable prices with regular discounts.</li>
        <li>Friendly and knowledgeable staff ready to assist you.</li>
        <li>Convenient shopping experience both in-store and online.</li>
      </ul>

      {/* Contact Us Section */}
      <h2>Contact Us</h2>
      <p>📞 Phone: +254745588147</p>
      <p>📧 Email: contact@vastmart.com</p>
      <p>🏬 Address: 123 westwood Street,kiambu, Kenya</p>
    </div>
  );
};

export default AboutUs;
