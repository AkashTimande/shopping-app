import ProductContainer from "./Product";
import Header from "./Header";
import "./Wishlist.css";
import CartContext from "../context/CartContext";
import { useContext } from "react";

const Wishlist = () => {
  const ctx = useContext(CartContext);
  return (
    <>
      <Header title="Wishlist" />
      {ctx.wishlistCount === 0 && (
        <div className="empty-msg">Wishlist is Empty😟</div>
      )}
      <div className="all-products">
        {ctx.wishlist &&
          ctx.wishlist.map((prod) => (
            <ProductContainer key={prod.id} product={prod} parent="wishlist" />
          ))}
      </div>
    </>
  );
};

export default Wishlist;
