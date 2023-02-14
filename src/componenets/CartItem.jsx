import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item, parent }) => {
  const [quantityInput, setQuantityInput] = useState(item.count);
  const ctx = useContext(CartContext);

  const incrementHandler = () => {
    const newQuantity = quantityInput + 1;
    setQuantityInput(newQuantity);

    let updatedList = ctx.cartList;
    updatedList.forEach((val) => {
      if (val.id === item.id) {
        val.count = newQuantity;
      }
    });
    ctx.setCartList(updatedList);
    ctx.setCartCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    const newQuantity = quantityInput - 1;
    setQuantityInput(newQuantity);

    let updatedList = ctx.cartList;
    if (newQuantity === 0) {
      updatedList = updatedList.filter((prod) => prod.id !== item.id);
      ctx.setCartList(updatedList);
      ctx.setCartCount((prev) => prev - 1);
      return;
    }
    updatedList.forEach((val) => {
      if (val.id === item.id) {
        val.count = newQuantity;
      }
    });

    ctx.setCartList(updatedList);
    ctx.setCartCount((prev) => prev - 1);
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item-title">{item.title}</div>
      <div className="cart-item-quantity">
        <button onClick={incrementHandler}>✚😜</button>
        <input type="text" value={quantityInput} />
        <button onClick={decrementHandler}>−😟</button>
      </div>
      <div className="cart-item-price">${item.count * item.price}</div>
    </div>
  );
};

export default CartItem;
