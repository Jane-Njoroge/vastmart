import React from "react";
import { useParams } from "react-router-dom";

// Placeholder images
const placeholderImage = "https://via.placeholder.com/150";

// Data for subcategories and their items
const subcategoryItems = {
  alcohol: [
    {
      name: "Star Walker",
      weight: "750ml",
      price: "KES 1460.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/203571/1740139203/203571_main.jpg?im=Resize=480",
    },
    {
      name: "White Cap Lager",
      weight: "500ml",
      price: "KES 233.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h26/hd9/12456808480798/41869_Main.jpg?im=Resize=480",
    },
    {
      name: "Hunters Gold Cider",
      weight: "330ml",
      price: "KES 250.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/41742/1739523603/41742_main.jpg?im=Resize=480",
    },
    {
      name: "Hunters Choice Whisky",
      weight: "750ml",
      price: "KES 1118.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/41550/1740045604/41550_main.jpg?im=Resize=480",
    },
    {
      name: "Best London Dry Gin",
      weight: "750ml",
      price: "KES 900.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/123008/1740045604/123008_main.jpg?im=Resize=480",
    },
    {
      name: "Ballantines Finest Blended Scotch Whisky",
      weight: "750ml",
      price: "KES 2233.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/36833/1740067203/36833_main.jpg?im=Resize=480",
    },
    {
      name: "Glenfiddich",
      weight: "750ml",
      price: "KES 10000.00",
      image:
        "https://ik.imagekit.io/cprvr2lhot/bol-Lcx-DZg-glenfiddich%2015%20years%20.webp",
    },
    {
      name: "Glenlivet",
      weight: "750ml",
      price: "KES 5999.00",
      image:
        "https://ik.imagekit.io/cprvr2lhot/glenlivet-founders-reserve.jpeg",
    },
    {
      name: "Pure Malt Red Nikka Whisky",
      weight: "500ml",
      price: "KES 10500.00",
      image:
        "https://ik.imagekit.io/cprvr2lhot/pure-malt-red-nikka-whisky.jpeg",
    },
    {
      name: "Jameson Crested",
      weight: "750ml",
      price: "KES 4500.00",
      image: "https://ik.imagekit.io/cprvr2lhot/jameson-crested.jpeg",
    },
    {
      name: "Jim Beam",
      weight: "750ml",
      price: "KES 2999.00",
      image: "https://ik.imagekit.io/cprvr2lhot/jim-black-tripple-aged.jpeg",
    },
    {
      name: "Ardmore Triple Wood",
      weight: "750ml",
      price: "KES 8499.00",
      image: "https://ik.imagekit.io/cprvr2lhot/ardmore-triple-wood.jpeg",
    },
  ],
  electronics: [
    {
      name: "Bluetooth Speaker",
      weight: "10W",
      price: "KES 4995.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/236816/1727971205/236816_main.jpg?im=Resize=480",
    },
    {
      name: "Oraimo Wireless Earbuds",
      weight: "",
      price: "KES 5200.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/219599/1720191603/219599_main.jpg?im=Resize=480",
    },
    {
      name: "Mounlinex Blender",
      price: "KES 8495.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/103847/1721218204/103847_main.jpg?im=Resize=480",
    },
    {
      name: "Ramtons Hand Mixer",
      price: "KES 3700.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h1f/h90/32189580509214/57279_main.jpg?im=Resize=480",
    },
    {
      name: "Wet And Dry Vacuum Cleaner",
      price: "KES 14200.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h08/h3b/32189634805790/73781_main.jpg?im=Resize=480",
    },
    {
      name: "Ramtons Microwave",
      price: "KES 12290.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h61/h3e/32189566189598/53885_main.jpg?im=Resize=480",
    },
    {
      name: "Ramtons Corded Electric kettle",
      price: "KES 1980.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h4b/h1a/32189511008286/4336_main.jpg?im=Resize=480",
    },
    {
      name: "Ramtons Nonstickgrill",
      price: "KES 5975.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h37/hb3/28692270776350/161685_main.jpg?im=Resize=480",
    },
    {
      name: "Lg 8kg Washing Machine",
      price: "KES 79995.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h8d/h9c/51787110973470/214183_1.jpg?im=Resize=480",
    },
    {
      name: "Tronic Extension",
      price: "KES 1800.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h02/h18/45231292350494/113524_main.jpg?im=Resize=480",
    },
  ],
  "toys-outdoor": [
    {
      name: "Soccer Ball",
      price: "KES 500.00",
      image:
        "https://t3.ftcdn.net/jpg/03/12/74/76/360_F_312747672_VsTRaHC2Vyyp2tADEspHQMAaoTaqxo3J.jpg",
    },
    {
      name: "Water Gun",
      price: "KES 750.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmobPN8tiDMZWsU-78KAvYqaN6Zp79OhThg&s",
    },
    {
      name: "Kidzpro GT-C8180",
      price: "KES 1910.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h14/h3d/52556093423646/210066_main.jpg?im=Resize=480",
    },
    {
      name: "Pop Toy",
      price: "KES 300.00",
      image:
        "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/0796251/1.jpg?9743",
    },
    {
      name: "Truck",
      price: "KES 4300.00",
      image:
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/3463682/1.jpg?7225",
    },
    {
      name: "Electric Toy Car",
      price: "KES 6500.00",
      image:
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/5246662/1.jpg?8185",
    },
    {
      name: "Lego Building Toy",
      price: "KES 4850.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h39/h7d/52393262252062/212238_main.jpg?im=Resize=480",
    },
    {
      name: "Power Joy",
      price: "KES 660.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hbd/h64/62077094789150/210073_main.jpg?im=Resize=480",
    },
    {
      name: "Emily Pink Dress Joints Body Roll",
      price: "KES 2180.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hde/h2c/51801423609886/210535_main.jpg?im=Resize=480",
    },
    {
      name: "Moulding Clay",
      price: "KES 155.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hde/h38/27589052137502/116598_main.jpg?im=Resize=480",
    },
  ],
  bakery: [
    {
      name: "Suppa Loaf",
      weight: "400g",
      price: "KES 65.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h86/h95/12681201778718/74580_main.jpg?im=Resize=480",
    },
    {
      name: "Butter Croissant",
      weight: "10pieces",
      price: "KES 755.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h93/ha7/17194173628446/71475_main.jpg?im=Resize=480",
    },
    {
      name: "Assorted Muffins",
      weight: "3 pieces",
      price: "KES 590.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Assorted-Muffins-367679_360x.webp?v=1735178666",
    },
    {
      name: "Chocolate Tea cake",
      weight: "320G",
      price: "KES 650.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Chocolate-Tea-Cake-01-544404_360x.png?v=1734955898",
    },
    {
      name: "Lemon & Mixed Berry cake",
      weight: "slice",
      price: "KES 450.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Lemon-_-Berry-Cake-Slice_360x.webp?v=1734955389",
    },
    {
      name: "Black Forest Cake",
      weight: "slice",
      price: "KES 450.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Dark-Forest-Cake-Slice-345157_360x.webp?v=1734955393",
    },
    {
      name: "Danish Pastry",
      weight: "300G",
      price: "KES 350.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Untitled_design_-_2025-03-05T092910.308-removebg-preview_360x.png?v=1741173063",
    },
    {
      name: "Almond Cookies",
      weight: "180G",
      price: "KES 495.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Almond-Cookies-915118_360x.webp?v=1734955022",
    },
    {
      name: "Brownie with Macadamia Nuts",
      weight: "100G",
      price: "KES 290.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Chocolate-Brownie-483514_360x.jpg?v=1734954675",
    },
    {
      name: "Mixed Berry Swiss Roll",
      weight: "190G",
      price: "KES 390.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Mixed-Berry-Swiss-Roll-642321_360x.jpg?v=1734955053",
    },
    {
      name: "Ginger Bread",
      weight: "120G",
      price: "KES 395.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Ginger-Bread-Energy-Balls-800119_360x.jpg?v=1734954754",
    },
    {
      name: "Mini Savoury Cheese",
      weight: "1piece",
      price: "KES 150.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Savoury-Cheese-Pie-357791_360x.jpg?v=1734956465",
    },
    {
      name: "Oats Date Granola",
      weight: "250G",
      price: "KES 695.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Untitleddesign-2025-02-20T195726.295_360x.png?v=1740130005",
    },
    {
      name: "Walnut Banana Tea Cake",
      weight: "370G",
      price: "KES 650.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Oat-Walnut-_-Banana-Tea-Cake-01-920801_360x.jpg?v=1734955890",
    },
    {
      name: "Big Choco Chip",
      weight: "1pc",
      price: "KES 150.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Big-Cookie-894915_360x.webp?v=1735178666",
    },
    {
      name: "Multigrain Croissant",
      weight: "90G",
      price: "KES 330.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/Multigrain-Croissant-724855_360x.webp?v=1734956839",
    },
  ],
  "frozen-food": [
    {
      name: "Igloo Butterscotch",
      weight: "1Ltr",
      price: "KES 1070.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/69985972_5aceb52d-b6f7-4839-8bc0-f509418f9d88-500793_180x.jpg?v=1734956341",
    },
    {
      name: "Ice Cream",
      weight: "500ml",
      price: "KES 1175.00",
      image:
        "https://cdn.shopify.com/s/files/1/0801/9374/9309/files/36152-950165_180x.jpg?v=1734956388",
    },
    {
      name: "Igloo Pushup",
      weight: "90ml",
      price: "KES 200.00",
      image:
        "https://artcaffemarket.co.ke/cdn/shop/files/6291003095146_1_3519-537931.jpg?v=1734955310",
    },
    {
      name: "Heifer Beef",
      weight: "500G",
      price: "KES 279.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/117082/1729144804/117082_main.jpg?im=Resize=480",
    },
    {
      name: "Chicken",
      weight: "1.5Kg",
      price: "KES 749.00",
      image:
        "https://cdn.mafrservices.com/pim-content/KEN/media/product/102888/1729144804/102888_main.jpg?im=Resize=480",
    },
    {
      name: "Pork Sausages",
      weight: "1Kg",
      price: "KES 705.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h40/hfa/17290246127646/40466_main.jpg?im=Resize=480",
    },
    {
      name: "Beef Safari Sausages",
      weight: "500G",
      price: "KES 369.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h67/h94/17290242883614/40427_main.jpg?im=Resize=480",
    },
    {
      name: "Beef Smokie",
      weight: "400G",
      price: "KES 291.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hef/hac/17290242129950/40433_main.jpg?im=Resize=480",
    },
    {
      name: "Beef Smokies Labless",
      weight: "1Kg",
      price: "KES 555.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h80/h37/17290280402974/40499_main.jpg?im=Resize=480",
    },
    {
      name: "Beef brawn Slice",
      weight: "200G",
      price: "KES 142.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/hd6/h3f/34112352616478/40449_main.jpg?im=Resize=480",
    },
    {
      name: "Nyamabite Sausage",
      weight: "125G",
      price: "KES 91.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h2e/h3f/17290243276830/40454_main.jpg?im=Resize=480",
    },
  ],
  "beauty-personal-care": [
    {
      name: "Dove Shampoo",
      weight: "400ml",
      price: "KES 845.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h0a/h29/48851377782814/191285_Main.jpg?im=Resize=480",
    },
    {
      name: "Nivea Men Body Lotion",
      weight: "400ml",
      price: "KES 670.00",
      image:
        "https://cdn.mafrservices.com/sys-master-root/h32/h27/17588358840350/17077_main.jpg?im=Resize=480",
    },
    {
      name: "Old Spice Stick Captain Deo",
      weight: "50ml",
      price: "KES 749.00",
      image:
        "https://cdn.quickmart.co.ke/resized/600_600/product_images_649033.png",
    },
  ],
};

const SubcategoryPage = ({ cartItems, setCartItems }) => {
  const { subcategory } = useParams();

  // Normalize the subcategory from URL
  const normalizedSubcategory = decodeURIComponent(subcategory)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .trim();

  console.log("Normalized Subcategory:", normalizedSubcategory);

  const items = subcategoryItems[normalizedSubcategory] || [];

  // Cart functions
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

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
    },
    productCard: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      padding: "10px",
      textAlign: "center",
      position: "relative",
    },
    discountTag: {
      position: "absolute",
      top: "10px",
      left: "10px",
      backgroundColor: "#ff3333",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
      fontSize: "0.8em",
    },
    productImage: {
      width: "100%",
      height: "150px",
      objectFit: "contain",
    },
    productName: {
      fontSize: "1em",
      fontWeight: "bold",
      margin: "10px 0 5px",
    },
    productWeight: {
      fontSize: "0.9em",
      color: "#666",
    },
    productPrice: {
      fontSize: "1em",
      fontWeight: "bold",
      margin: "5px 0",
    },
    addButton: {
      backgroundColor: "#ff3333",
      color: "white",
      border: "none",
      padding: "8px 16px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "0.9em",
      marginTop: "10px",
      transition: "background-color 0.3s",
    },
    addButtonHover: {
      backgroundColor: "#cc0000",
    },
    quantityContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
    },
    quantityButton: {
      backgroundColor: "#ff3333",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "0.9em",
      margin: "0 5px",
      transition: "background-color 0.3s",
    },
    quantityButtonHover: {
      backgroundColor: "#cc0000",
    },
    quantityText: {
      fontSize: "1em",
      margin: "0 10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2>
        {normalizedSubcategory
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}{" "}
        Products
      </h2>
      {items.length > 0 ? (
        <div style={styles.grid}>
          {items.map((item, index) => {
            const quantity = getQuantity(item.name);
            return (
              <div key={index} style={styles.productCard}>
                {item.discount > 0 && (
                  <div style={styles.discountTag}>{item.discount}%</div>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.productImage}
                  onError={(e) => {
                    e.target.src = placeholderImage;
                    console.log(
                      `Failed to load image for ${item.name}: ${item.image}`
                    );
                  }}
                />
                <div style={styles.productName}>{item.name}</div>
                {item.weight && (
                  <div style={styles.productWeight}>{item.weight}</div>
                )}
                <div style={styles.productPrice}>
                  {item.price} {/* Display the price string directly */}
                </div>
                {quantity === 0 ? (
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
                    onClick={() => handleAddToCart(item)}
                  >
                    ADD
                  </button>
                ) : (
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
                      onClick={() => handleDecrement(item.name)}
                    >
                      −
                    </button>
                    <span style={styles.quantityText}>{quantity}</span>
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
                      onClick={() => handleIncrement(item.name)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p>No items available for this subcategory.</p>
      )}
    </div>
  );
};

export default SubcategoryPage;
