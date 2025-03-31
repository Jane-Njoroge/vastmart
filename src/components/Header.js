import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import SignIn from "./SignIn";

function VastMartHeader({ cartItems }) {
  const [showSignInForm, setShowSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setShowSignInForm((prev) => !prev);
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "5px 10px",
          zIndex: 100,
          boxShadow: "0px 1px 1px rgba(245, 240, 240, 0.94)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <h1
            style={{
              margin: "10px",
              fontSize: "1.0em",
            }}
          >
            <strong>
              <span style={{ color: "red" }}>VASTMART</span>
            </strong>
          </h1>
        </div>

        <div
          className="search-section"
          style={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            margin: "0 20px",
            maxWidth: "600px",
          }}
        >
          <input
            type="text"
            placeholder="Search For Groceries..."
            style={{
              flexGrow: 1,
              padding: "8px 12px",
              border: "1px solid #e00",
              borderRadius: "20px",
              marginRight: "5px",
              outline: "none",
              backgroundColor: "white",
            }}
          />
          <button
            className="search-button"
            style={{
              background: "white",
              color: "#e00",
              border: "1px solid #e00",
              padding: "8px 12px",
              borderRadius: "50%",
              cursor: "pointer",
              height: "35px",
              width: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaSearch style={{ color: "#e00" }} />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "100px",
          }}
        >
          <button
            onClick={toggleSignInForm}
            style={{
              display: "flex",
              alignItems: "center",
              background: "white",
              border: "none",
              color: "#e00",
              fontSize: "0.9em",
              cursor: "pointer",
              marginRight: "70px",
            }}
          >
            <FaUser style={{ marginRight: "5px", color: "#e00" }} />
            {showSignInForm ? "Close Form" : "Sign In"}
          </button>

          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/cart">
              <button
                style={{
                  background: "white",
                  border: "1px solid #e00",
                  color: "#e00",
                  padding: "8px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  height: "35px",
                  width: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaShoppingCart style={{ color: "#e00" }} />
              </button>
            </Link>
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "#e00",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "0.7em",
              }}
            >
              {cartItemCount}
            </span>
          </div>
        </div>
      </header>

      {showSignInForm && (
        <div style={{ marginTop: "60px" }}>
          <SignIn />
        </div>
      )}
    </div>
  );
}

export default VastMartHeader;
