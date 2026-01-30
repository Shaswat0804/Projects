import { useContext } from "react";
import { CartContext } from "./cartcontext";

const ProductCard = ({ product }) => {
  const cartContext = useContext(CartContext);

  // Safe fallback
  const addToCart = cartContext?.addToCart;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{Math.round(product.price * 80)}</p>

      <button
        onClick={() => {
          if (!addToCart) return;

          addToCart({
            id: product.id,
            name: product.title,
            price: Math.round(product.price * 80),
            image: product.image,
          });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
