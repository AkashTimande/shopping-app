import Header from "./Header";
import "./Checkout.css";

const Checkout = () => {
  return (
    <>
      <Header />
      <div className="checkout-container">
        <div className="success">Your order has been successfully placed!!</div>
        <div className="thanks">
          Thank you for shopping with us. Please do visit again😁
        </div>
      </div>
    </>
  );
};

export default Checkout;
