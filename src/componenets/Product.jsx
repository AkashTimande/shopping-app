import { useContext } from "react";
import CartContext from "../context/CartContext";
import "./Product.css";

const ProductContainer = ({ product, parent }) => {
  const ctx = useContext(CartContext);

  const cartHandler = (id) => {
    ctx.setCartCount((prev) => prev + 1);
    let currentcart = ctx.cartList;
    const isItemPresent =
      ctx.cartList.filter((product) => product.id === id).length > 0;
    if (isItemPresent) {
      currentcart.forEach((prod) => {
        if (prod.id === id) {
          prod.count += 1;
        }
      });
    } else {
      currentcart.push({ ...product, count: 1 });
    }
    if (parent === "wishlist") {
      const newWishlist = ctx.wishlist.filter((product) => product.id !== id);
      ctx.setWishlist(newWishlist);
      ctx.setWishlistCount((prev) => prev - 1);
    }
    ctx.setCartList(currentcart);
  };

  const wishlistHandler = () => {
    ctx.setWishlistCount((prev) => prev + 1);
    const arr = ctx.wishlist;
    arr.push(product);
    ctx.setWishlist(arr);
  };

  const removeHandler = (id) => {
    const filteredProducts = ctx.wishlist.filter(
      (product) => product.id !== id
    );
    ctx.setWishlist(filteredProducts);
    ctx.setWishlistCount((prev) => prev - 1);
  };

  return (
    <div className="product-container">
      <div className="title">{product.title}</div>
      <div className="desc">{product.description}</div>
      <div className="price">${product.price}</div>
      <div className="action-btns">
        <button
          className="btn cart-btn"
          onClick={() => cartHandler(product.id)}
        >
          Add to Cart
        </button>
        {parent === "container" ? (
          <button
            className={`btn wishlist-btn ${
              ctx.wishlist.filter((prod) => prod.id === product.id).length > 0
                ? "unclickable"
                : ""
            }`}
            onClick={wishlistHandler}
          >
            {ctx.wishlist.filter((prod) => prod.id === product.id).length > 0
              ? "✔️"
              : "💟"}
          </button>
        ) : (
          <button
            className="btn remove-btn"
            onClick={() => removeHandler(product.id)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
