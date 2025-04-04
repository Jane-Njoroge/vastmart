import React from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Add this import

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate(); // Initialize navigate

  // Calculate total amount with custom formatting
  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("KES ", "").replace(",", ""));
      return total + price * item.quantity;
    }, 0);
    return total.toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Increase quantity of an item
  const handleIncrement = (productName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity of an item, remove if quantity becomes 0
  const handleDecrement = (productName) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return updatedItems.filter((item) => item.quantity > 0);
    });
  };

  // Remove item from cart entirely
  const handleRemove = (productName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== productName)
    );
  };

  // Clear all items from the cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Handle complete purchase with navigation
  const handleCompletePurchase = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    console.log("Navigating to checkout with cart items:", cartItems);
    navigate("/checkout"); // Redirect to checkout page
  };

  const styles = {
    cartPageContainer: {
      padding: "80px 20px 20px",
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    cartHeader: {
      fontSize: "1.5em",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#e00",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    cartItem: {
      display: "flex",
      alignItems: "center",
      padding: "15px 0",
      borderBottom: "1px solid #eee",
    },
    itemImage: {
      width: "60px",
      height: "60px",
      objectFit: "cover",
      marginRight: "15px",
      borderRadius: "5px",
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      fontSize: "1em",
      color: "#333",
    },
    itemPrice: {
      fontSize: "0.9em",
      color: "#666",
    },
    quantityContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    quantityButton: {
      backgroundColor: "#ff0000",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      cursor: "pointer",
      fontSize: "1em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    removeButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#e00",
      fontSize: "1em",
    },
    clearButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#e00",
      fontSize: "1em",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    total: {
      marginTop: "20px",
      fontSize: "1.2em",
      fontWeight: "bold",
      textAlign: "right",
    },
    completePurchaseButton: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#ff0000",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1em",
      fontWeight: "bold",
      display: "block",
      marginLeft: "auto",
      width: "fit-content",
      transition: "background-color 0.3s",
    },
    completePurchaseButtonHover: {
      backgroundColor: "#cc0000",
    },
    emptyCart: {
      textAlign: "center",
      color: "#666",
      fontSize: "1.2em",
      padding: "20px",
    },
  };

  return (
    <div style={styles.cartPageContainer}>
      <div style={styles.cartHeader}>
        Your Cart
        {cartItems.length > 0 && (
          <button
            style={styles.clearButton}
            onClick={handleClearCart}
            title="Clear All Items"
          >
            <FaTrash />
            <span>Clear All</span>
          </button>
        )}
      </div>
      {cartItems.length === 0 ? (
        <p style={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <div style={styles.itemDetails}>
                <div style={styles.itemName}>{item.name}</div>
                <div style={styles.itemPrice}>
                  {item.price} x {item.quantity}
                </div>
              </div>
              <div style={styles.quantityContainer}>
                <button
                  style={styles.quantityButton}
                  onClick={() => handleDecrement(item.name)}
                >
                  −
                </button>
                <span style={styles.quantityText}>{item.quantity}</span>
                <button
                  style={styles.quantityButton}
                  onClick={() => handleIncrement(item.name)}
                >
                  +
                </button>
                <button
                  style={styles.removeButton}
                  onClick={() => handleRemove(item.name)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <div style={styles.total}>Total: KES {calculateTotal()}</div>
          <button
            style={styles.completePurchaseButton}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.completePurchaseButtonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                styles.completePurchaseButton.backgroundColor)
            }
            onClick={handleCompletePurchase}
          >
            Complete Purchase
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
