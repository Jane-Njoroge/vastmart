import React, { useState } from "react";

const productsData = {
  "All Categories": [
    {
      name: "Glenmorangie Lasanta",
      size: "750ml",
      price: "KES 9,000.00",
      image: "https://ik.imagekit.io/cprvr2lhot/glenmorangie-lasanta-.jpeg",
    },
    {
      name: "Heinz TomatoKetchup",
      size: "570g",
      price: "KES 480.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h13/hbb/17307024949278/23831_main.jpg?im=Resize=480",
    },
    {
      name: "Celine White Toilet Tissue",
      size: "10 pack",
      price: "KES 295.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h25/ha3/32907277238302/180928_main.jpg?im=Resize=480",
    },
    {
      name: "PICK N PEEL",
      size: "1l",
      price: "KES 259.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hf5/h18/26449295835166/41061_main.jpg?im=Resize=480",
    },
    {
      name: "Glen Silvers",
      size: "750ml",
      price: "KES 2,499.00",
      image: "https://ik.imagekit.io/cprvr2lhot/glen-silvers.jpeg",
    },
    {
      name: "Digestive Biscuit",
      size: "100G",
      price: "KES 104.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/had/hc3/16813497778206/8226_main.jpg?im=Resize=480",
    },
    {
      name: "Nescafe Instant Coffee",
      size: "1.6G",
      price: "KES 8.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/41502/1736877003/41502_main.jpg?im=Resize=480",
    },
    {
      name: "Cadburry Dream White Chocolate",
      size: "80G",
      price: "KES 232.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hf0/h30/16930274344990/23682_main.jpg?im=Resize=480",
    },
    {
      name: "Green Forest Roasted Cashew Nuts",
      size: "100G",
      price: "KES 330.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h73/hff/17319962279966/117595_main.jpg?im=Resize=480",
    },
    {
      name: "Cadbury Drinking Chocolate",
      size: "100G",
      price: "KES 97.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h69/hf7/28268450152478/31708_main.jpg?im=Resize=480",
    },
    {
      name: "Lunchbar Peanuts Chocolate Bar",
      size: "48G",
      price: "KES 149.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h85/hc9/16975365832734/23696_main.jpg?im=Resize=480",
    },
    {
      name: "Manji Family Biscuits",
      size: "80G",
      price: "KES 53.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h70/he7/16813498138654/8224_main.jpg?im=Resize=480",
    },
    {
      name: " Santa Maaria Pasta",
      size: "400G",
      price: "KES 149.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h73/h86/16813400424478/1912_main.jpg?im=Resize=480",
    },
    {
      name: "Sunrice Basmati Rice",
      size: "1KG",
      price: "KES 357.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h91/h79/26950864764958/38561_main.jpg?im=Resize=480",
    },
    {
      name: "Kavagara Maize flour",
      size: "2KG",
      price: "KES 190.00",
      image:
        "https://eurogulffoodstuff.com/wp-content/uploads/2024/02/IMG_3051-scaled.jpg",
    },

    {
      name: "Adriana White Fish Fillet",
      size: "500G",
      price: "KES 750.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/50285/1718895604/50285_main.jpg?im=Resize=480",
    },
    {
      name: "Chicken Thigh",
      size: "500G",
      price: "KES 600.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/99633/1730127603/99633_main.jpg?im=Resize=480",
    },
    {
      name: "Boran Beef Mince Standard",
      size: "500G",
      price: "KES 449.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/29719/1729144804/29719_main.jpg?im=Resize=480",
    },
    {
      name: "Pork Ham Boneless",
      size: "500G",
      price: "KES 499.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/111253/1729144804/111253_main.jpg?im=Resize=480",
    },
    {
      name: "Beef Liver",
      size: "500G",
      price: "KES 759.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h8a/ha8/16871658225694/100519_main.jpg?im=Resize=480",
    },
    {
      name: "Fuji Apples",
      size: "1KG",
      price: "KES 619.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h1b/h04/16871922860062/1296_main.jpg?im=Resize=480",
    },
    {
      name: "Bananas",
      size: "500G",
      price: "KES 65.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h2f/h59/16871973060638/1362_main.jpg?im=Resize=480",
    },
    {
      name: "Carrots",
      size: "1KG",
      price: "KES 100.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/ha4/h5d/17013545336862/1514_main.jpg?im=Resize=480",
    },
    {
      name: "White Grapes",
      size: "Pack",
      price: "KES 539.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hbb/h36/17320081358878/1565_1.jpg?im=Resize=480",
    },
    {
      name: "Loose Tomato",
      size: "1KG",
      price: "KES 65.oo",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h3e/hc2/12452869144606/1436_Main.jpg?im=Resize=480",
    },

    {
      name: "Booch Kombucha Raspberry",
      size: "300ml",
      price: "KES 275.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h7e/hf8/50600690548766/132795_main.jpg?im=Resize=480",
    },
    {
      name: "Ribena Conc B/C Cordial drink",
      size: "500ml",
      price: "KES 295.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h53/haa/62042167803934/166524_main.jpg?im=Resize=480",
    },
    {
      name: "Red Bull Energy Drink",
      size: "250ML",
      price: "KES 222.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/40578/1727949603/40578_main.jpg?im=Resize=480",
    },
    {
      name: "Quencher Drinking Water",
      size: "!.5Ltr",
      price: "KES 67.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hf9/he3/12456747925534/17394_Main.jpg?im=Resize=480",
    },
    {
      name: "Coca Cola Soda",
      size: "1.25Ltr",
      price: "KES 129.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h7e/h11/17013604843550/24191_main.jpg?im=Resize=480",
    },

    {
      name: "Safisha Handy Spongs",
      size: "4pcs",
      price: "KES 155.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/ha4/hd0/12456918908958/67629_Main.jpg?im=Resize=480",
    },
    {
      name: "Vim Multipurpose powder",
      size: "1Kg",
      price: "KES 178.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h18/h25/12451489284126/14298_Main.jpg?im=Resize=480",
    },
    {
      name: "Downy Pouch",
      size: "900ml",
      price: "KES 484.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h19/he1/62594727116830/221956_main.jpg?im=Resize=480",
    },
    {
      name: "Zenta Soap Cream",
      size: "1KG",
      price: "KES 207",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h64/he9/17384224391198/116790_main.jpg?im=Resize=480",
    },
    {
      name: "Sunlight Lavender Powder",
      size: "1Kg",
      price: "KES 341.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hbf/h7d/62003649282078/93536_main.jpg?im=Resize=480",
    },
    // {
    //   name: "Persil Machine Washing Powder",
    //   size: "1Kg",
    //   price: "KES 1599.00",
    //   image:
    //     "https://cdn.mafrservices.com/sys-master-root/h10/h19/26449287708702/25849_main.jpg?im=Resize=480",
    // },
  ],
};

const Products = ({ selectedCategory, cartItems, setCartItems }) => {
  // Estimate items per row based on the grid layout
  const itemsPerRow = 5; // Assumption: ~3 items per row for a 1200px container with minmax(180px, 1fr)
  const rowsPerLoad = 3; // Load 3 rows at a time
  const itemsPerLoad = itemsPerRow * rowsPerLoad; // 3 rows * 3 items/row = 9 items per load

  // State to manage the number of items to display
  const [displayCount, setDisplayCount] = useState(itemsPerLoad); // Initially display 9 items (3 rows)

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleIncrement = (productName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

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

  const getQuantity = (productName) => {
    const item = cartItems.find((item) => item.name === productName);
    return item ? item.quantity : 0;
  };

  // Function to load more items
  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + itemsPerLoad); // Load 9 more items (3 rows)
  };

  const styles = {
    productsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "20px",
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    productCard: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      padding: "15px",
      textAlign: "center",
      minHeight: "300px",
    },
    productImage: {
      width: "100%",
      maxWidth: "150px",
      height: "auto",
      margin: "10px auto",
    },
    productName: {
      fontSize: "0.9em",
      margin: "5px 0",
      color: "#333",
    },
    productSize: {
      fontSize: "0.8em",
      color: "#666",
      margin: "5px 0",
    },
    productPrice: {
      fontSize: "1em",
      fontWeight: "bold",
      color: "#000",
      margin: "10px 0",
    },
    addButton: {
      backgroundColor: "#ff0000",
      color: "white",
      border: "none",
      borderRadius: "50%",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "0.9em",
      fontWeight: "bold",
      transition: "background-color 0.3s",
    },
    addButtonHover: {
      backgroundColor: "#cc0000",
    },
    quantityContainer: {
      display: "flex",
      justifyContent: "center",
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
      transition: "background-color 0.3s",
    },
    quantityButtonHover: {
      backgroundColor: "#cc0000",
    },
    quantityText: {
      fontSize: "1em",
      fontWeight: "bold",
    },
    loadMoreButton: {
      display: "block",
      margin: "20px auto",
      padding: "10px 20px",
      backgroundColor: "#fff",
      color: "#000",
      border: "1px solid #ccc",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1em",
      fontWeight: "bold",
      transition: "background-color 0.3s",
    },
    loadMoreButtonHover: {
      backgroundColor: "#f0f0f0",
    },
  };

  const productsToDisplay = selectedCategory
    ? productsData[selectedCategory] || []
    : productsData["All Categories"];

  // Slice the products to display only up to the current displayCount
  const displayedProducts = productsToDisplay.slice(0, displayCount);

  return (
    <div>
      <div style={styles.productsContainer}>
        {displayedProducts.map((product, index) => (
          <div key={index} style={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImage}
            />
            <div style={styles.productName}>{product.name}</div>
            <div style={styles.productSize}>{product.size}</div>
            <div style={styles.productPrice}>{product.price}</div>
            {getQuantity(product.name) > 0 ? (
              <div style={styles.quantityContainer}>
                <button
                  style={styles.quantityButton}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      styles.quantityButtonHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      styles.quantityButton.backgroundColor)
                  }
                  onClick={() => handleDecrement(product.name)}
                >
                  −
                </button>
                <span style={styles.quantityText}>
                  {getQuantity(product.name)}
                </span>
                <button
                  style={styles.quantityButton}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      styles.quantityButtonHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      styles.quantityButton.backgroundColor)
                  }
                  onClick={() => handleIncrement(product.name)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                style={styles.addButton}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    styles.addButtonHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor =
                    styles.addButton.backgroundColor)
                }
                onClick={() => handleAddToCart(product)}
              >
                ADD
              </button>
            )}
          </div>
        ))}
      </div>
      {/* Show "Load More" button if there are more products to display */}
      {displayCount < productsToDisplay.length && (
        <button
          style={styles.loadMoreButton}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              styles.loadMoreButtonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor =
              styles.loadMoreButton.backgroundColor)
          }
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Products;
