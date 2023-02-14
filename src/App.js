import { Routes, Route } from "react-router-dom";
import { data } from "./data/product_data";
import { useState } from "react";
import Home from "./componenets/Home";
import Wishlist from "./componenets/Wishlist";
import Cart from "./componenets/Cart";
import CartContext from "./context/CartContext";
import Checkout from "./componenets/Checkout";
import "./styles.css";

export default function App() {
  const [products] = useState(data);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [cartList, setCartList] = useState([]);

  const CartData = {
    products,
    wishlistCount,
    cartCount,
    wishlist,
    cartList,
    setCartCount,
    setWishlist,
    setCartList,
    setWishlistCount
  };

  return (
    <CartContext.Provider value={CartData}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}
