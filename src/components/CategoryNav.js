import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // For navigation (optional)

const CategoryNav = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const buttonRefs = useRef({});
  const navigate = useNavigate(); // For react-router-dom (optional)

  const categories = {
    "All Categories": [
      "alcohol",
      "Electronics",
      "Toys & Outdoor",
      "Bakery",
      "Frozen Food",
      "Beauty & Personal Care",
    ],
    "Food Cupboard": ["Pasta", "Rice", "Canned Goods"],
    "Fresh Food": ["Meat", "Fish", "Dairy"],
    "Fruits & Vegetables": ["Apples", "Bananas", "Carrots"],
    Beverages: ["Water", "Juice", "Soda"],
    "Cleaning & Household": ["Detergent", "Paper Towels", "Trash Bags"],
    "Baby Products": ["Diapers", "Baby Food", "Wipes"],
    "Bio & Organic Food": [
      "Organic Pasta",
      "Organic Vegetables",
      "Gluten-Free Snacks",
    ],
    "Beauty & Personal Care": ["Shampoo", "Soap", "Lotion"],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Handle subcategory navigation
  const handleSubcategoryClick = (subcategory) => {
    // Using react-router-dom (uncomment if applicable)
    navigate(`/category/${subcategory.toLowerCase().replace(/\s+/g, "-")}`);

    // Alternative without react-router-dom (uncomment if no router)
    // window.location.href = `/category/${subcategory.toLowerCase().replace(/\s+/g, "-")}`;
  };

  const styles = {
    navContainer: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#fff",
      padding: "10px 0",
      borderBottom: "1px solid #ddd",
      overflowX: "auto",
      whiteSpace: "nowrap",
      maxWidth: "100%",
    },
    categoryButton: {
      backgroundColor: "#ff6666",
      color: "white",
      border: "none",
      padding: "8px 16px",
      margin: "5px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "0.9em",
      transition: "background-color 0.3s",
    },
    categoryButtonHover: {
      backgroundColor: "#cc5252",
    },
    itemsContainer: {
      position: "absolute",
      top: "60px",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      zIndex: 10,
      textAlign: "center",
      maxWidth: "300px",
    },
    itemList: {
      listStyleType: "none",
      padding: 0,
    },
    item: {
      padding: "5px 0",
      fontSize: "1em",
    },
    subcategoryItem: {
      padding: "5px 0",
      fontSize: "1em",
      cursor: "pointer",
      transition: "color 0.3s",
    },
    subcategoryItemHover: {
      color: "#ff6666",
    },
  };

  return (
    <div style={{ position: "relative", marginTop: "40px" }}>
      {/* Category Buttons */}
      <div style={styles.navContainer}>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            ref={(el) => (buttonRefs.current[category] = el)}
            style={{
              ...styles.categoryButton,
              backgroundColor:
                selectedCategory === category ? "#cc5252" : "#ff6666",
            }}
            onClick={() => handleCategoryClick(category)}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.categoryButtonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                selectedCategory === category ? "#cc5252" : "#ff6666")
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Items for Selected Category */}
      {selectedCategory && (
        <div
          style={{
            ...styles.itemsContainer,
            left: buttonRefs.current[selectedCategory]
              ? `${
                  buttonRefs.current[selectedCategory].getBoundingClientRect()
                    .left +
                  buttonRefs.current[selectedCategory].offsetWidth / 2
                }px`
              : "50%",
            transform: "translateX(-50%)",
          }}
        >
          <h3>{selectedCategory} Items</h3>
          {categories[selectedCategory].length > 0 ? (
            <ul style={styles.itemList}>
              {selectedCategory === "All Categories"
                ? categories[selectedCategory].map((item, index) => (
                    <li key={index} style={styles.item}>
                      <div
                        style={styles.subcategoryItem}
                        onClick={() => handleSubcategoryClick(item)}
                        onMouseEnter={(e) =>
                          (e.target.style.color =
                            styles.subcategoryItemHover.color)
                        }
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        {item}
                      </div>
                    </li>
                  ))
                : categories[selectedCategory].map((item, index) => (
                    <li key={index} style={styles.item}>
                      {item}
                    </li>
                  ))}
            </ul>
          ) : (
            <p>No items available for this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryNav;
