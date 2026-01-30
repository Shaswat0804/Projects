import { useEffect, useState } from "react";
import ProductCard from "./productcard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product =>
    (category === "all" || product.category === category) &&
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <br />
      <select onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <div className="products">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
