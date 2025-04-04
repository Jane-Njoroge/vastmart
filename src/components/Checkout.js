import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = ({ cartItems, setCartItems }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmitPurchase = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting with email:", email);
      console.log("Cart items:", cartItems);

      const userResponse = await axios.post("/users", { email });
      console.log("User response:", userResponse.data);
      const userId = userResponse.data.user_id;
      console.log("Extracted userId:", userId);

      const orderData = {
        user_id: userId,
        items: cartItems.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
        })),
      };
      console.log("Order data being sent:", orderData);

      const orderResponse = await axios.post("/orders", orderData);
      console.log("Order response:", orderResponse.data);

      setCartItems([]);
      navigate("/cart");
      console.log("Purchase completed, redirected to cart");
    } catch (error) {
      console.error("Error during checkout:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error setting up request:", error.message);
      }
    }
  };

  const styles = {
    checkoutContainer: {
      padding: "80px 20px 20px",
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
      fontSize: "2em",
      fontWeight: "bold",
      marginBottom: "30px",
      color: "#e00",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "10px",
      fontSize: "1em",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#ff0000",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1em",
      fontWeight: "bold",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#cc0000",
    },
  };

  return (
    <div style={styles.checkoutContainer}>
      <h2 style={styles.header}>Vastmart</h2>
      <form style={styles.form} onSubmit={handleSubmitPurchase}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Submit Email
        </button>
      </form>
    </div>
  );
};

export default Checkout;
