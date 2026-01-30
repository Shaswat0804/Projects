import { useContext } from "react";
import { CartContext } from "./cartcontext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Checkout</h2>
      <h3>Total Amount: ₹{total}</h3>
      <button className="checkout" onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
