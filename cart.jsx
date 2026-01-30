import { useContext } from "react";
import { CartContext } from "./cartcontext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) return <h2>Cart is empty</h2>;

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span> {item.quantity} </span>
          <button onClick={() => increaseQty(item.id)}>+</button>

          <p>Subtotal: ₹{item.price * item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          <hr />
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={clearCart}>Clear Cart</button>

      <br /><br />

      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
