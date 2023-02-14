import ProductContainer from "./Product";
import "./Container.css";
import CartContext from "../context/CartContext";
import { useContext } from "react";

const Container = () => {
  const ctx = useContext(CartContext);
  return (
    <div className="all-products">
      {ctx.products &&
        ctx.products.map((prod) => (
          <ProductContainer key={prod.id} product={prod} parent="container" />
        ))}
    </div>
  );
};

export default Container;
