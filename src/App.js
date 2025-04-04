import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import SignUpButton from "./components/SignIn"; // Commented out SignIn import
import Slideshow from "./components/Slideshow";
import CategoryNav from "./components/CategoryNav";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SubcategoryPage from "./components/SubcategoryPage";
import AboutUs from "./components/About";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <CategoryNav />
                <Slideshow />
                <Products cartItems={cartItems} setCartItems={setCartItems} />
                <div style={{ padding: "20px" }}></div>
                <AboutUs />
              </div>
            }
          />
          {/* <Route path="/SignIn" element={<SignUpButton />} /> */}{" "}
          {/* Commented out SignIn route */}
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/checkout"
            element={
              <Checkout cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/category/:subcategory"
            element={
              <SubcategoryPage
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
