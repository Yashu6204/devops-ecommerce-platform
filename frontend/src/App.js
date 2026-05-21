import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://51.21.252.22:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ fontFamily: "Arial" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          background: "#111827",
          color: "white",
        }}
      >
        <h2>E-Commerce Store</h2>

        <div>
          <span style={{ marginRight: "20px" }}>Home</span>
          <span style={{ marginRight: "20px" }}>Products</span>
          <span style={{ marginRight: "20px" }}>Cart</span>
          <span>Login</span>
        </div>
      </nav>

      <section
        style={{
          textAlign: "center",
          padding: "60px",
          background: "#f3f4f6",
        }}
      >
        <h1>Welcome to Our Store</h1>
        <p>Best gadgets at affordable prices</p>
      </section>

      <section style={{ padding: "40px" }}>
        <h2>Featured Products</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                width: "250px",
                textAlign: "center",
              }}
            >
              <h3>{product.name}</h3>
              <p>${product.price}</p>

              <button
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
