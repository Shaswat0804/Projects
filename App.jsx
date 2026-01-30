import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./cart";
import Checkout from "./checkout";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
