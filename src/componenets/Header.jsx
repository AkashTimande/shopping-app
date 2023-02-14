import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "./../context/CartContext";
import "./Header.css";
import logo from "./logo.jpg";

const Header = ({ title }) => {
  const [isHighlightedWishlist, setIsHighlightedWishlist] = useState(false);
  const [isHighlightedCart, setIsHighlightedCart] = useState(false);
  const ctx = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (ctx.wishlistCount === 0) {
      return;
    }
    setIsHighlightedWishlist(true);

    const timer = setTimeout(() => {
      setIsHighlightedWishlist(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.wishlistCount]);

  useEffect(() => {
    if (ctx.cartCount === 0) {
      return;
    }
    setIsHighlightedCart(true);

    const timer = setTimeout(() => {
      setIsHighlightedCart(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.cartCount]);

  const wishHandler = () => {
    navigate("/wishlist");
  };

  const cartHandler = () => {
    navigate("/cart");
  };

  const logohandler = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="header-title" onClick={logohandler}>
        <img src={logo} alt="logo" width={200} heigth={150} />
        {/* <span>My Store</span> */}
      </div>
      {title && <div className="page-title">{title}</div>}
      <div className="action-btns">
        {(!title || title !== "Wishlist") && (
          <button
            className={`go-wishlist ${isHighlightedWishlist ? "bump" : ""}`}
            onClick={wishHandler}
          >
            My Wishlist{" "}
            <span
              className={`badge ${
                ctx.wishlistCount === 0 ? "hide-badge" : ""
              } `}
            >
              {ctx.wishlistCount}
            </span>
          </button>
        )}
        {(!title || title !== "Cart") && (
          <button
            className={`go-cart ${isHighlightedCart ? "bump" : ""}`}
            onClick={cartHandler}
          >
            My Cart{" "}
            <span
              className={`badge ${ctx.cartCount === 0 ? "hide-badge" : ""}`}
            >
              {ctx.cartCount}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
