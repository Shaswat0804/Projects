import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cartcontext";

const Navbar = () => {
  const cartContext = useContext(CartContext);


  const cart = cartContext?.cart || [];

  return (
    <nav className="navbar">
      <h2>E-Shop</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
