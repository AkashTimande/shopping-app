import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Cart.css";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  const [finalPrice, setFinalPrice] = useState(0);
  const ctx = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("inside useeffect");
    let price = 0;
    ctx.cartList.forEach((val) => {
      price += val.count * val.price;
    });
    setFinalPrice(price);
  }, [ctx.cartList, ctx.cartCount]);

  const submitOrderHandler = () => {
    navigate("/checkout");
    ctx.setCartList([]);
    ctx.setCartCount(0);
  };

  // const test = () => {
  //   const updatedList = cartList.map((val) => ({ ...val, count: 1 }));
  //   setCartList(updatedList);
  // };

  return (
    <>
      <Header title="Cart" />
      {ctx.cartCount === 0 && <div className="empty-msg">Cart is Empty😟</div>}
      <div className="cart-container">
        {ctx.cartList.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      {ctx.cartCount > 0 && (
        <div className="footer">
          <div className="order">
            <button className="order-btn" onClick={submitOrderHandler}>
              Order
            </button>
          </div>
          <div className="final-price">${finalPrice}</div>
        </div>
      )}
    </>
  );
};

export default Cart;
