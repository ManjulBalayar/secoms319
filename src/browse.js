import React, { useState, useEffect } from "react";

export function Browse({
  isActive,
  changePage,
  cart,
  removeFromCart,
  addToCart,
  productPrices,
  products,
}) {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    var cartEmpty = Object.values(cart).every((item) => item === 0);
    const checkoutButton = document.getElementById("checkout-button");
    if (cartEmpty) {
      checkoutButton.classList.add("collapse");
    } else {
      checkoutButton.classList.remove("collapse");
    }
  }, [cart]);

  useEffect(() => {
    setFiltered(products);
  }, [products]);

  function handleSearchChange(event) {
    if (event) {
      let filtered = products.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFiltered(filtered);
    }
  }

  function doneShopping() {
    setFiltered(products);
    changePage("Cart");
  }

  return !isActive ? (
    <></>
  ) : (
    <div style={{ backgroundColor: "#00563F", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <header style={{ paddingTop: "2rem" }}>
        <h1 style={{
            color: "white",
            fontSize: "2.75rem",
            lineHeight: "3rem",
            textAlign: "center",
            fontWeight: "bold",
          }}>Manjul's Nike Shoe Store</h1>
        <h2 style={{ color: "white", fontSize: "1.5rem", lineHeight: "2rem", textAlign: "center" }}>Nike Air Force 1 Collection</h2>
        <input
          type="text"
          name="price"
          id="price"
          style={{
            display: "block",
            borderRadius: "0.375rem",
            border: "1px solid #D1D5DB",
            padding: "0.5rem 1rem",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            color: "#1F2937",
            backgroundColor: "#FFFFFF",
            placeholderColor: "#6B7280",
            width: "50%",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
          placeholder="Search..."
          onChange={handleSearchChange}
        />
      </header>
      <main style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridColumnGap: "1.5rem", gridRowGap: "2.5rem", width: "80%" }}>
        {filtered.map((product) => (
          <div key={product.id} style={{ backgroundColor: "#E5E7EB", borderRadius: "0.5rem", padding: "1rem" }}>
            <img
              style={{ height: "50%", width: "100%", objectFit: "contain", objectPosition: "center", marginBottom: "1rem" }}
              src={product.url}
              alt={product.name}
            />
            <h3 style={{ fontSize: "1rem", lineHeight: "1.5rem", color: "black", marginBottom: "0.5rem" }}>{product.name}</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.5rem", color: "black", fontWeight: "500", marginBottom: "1rem" }}>
              ${product.price.toFixed(2)}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
        onClick={() => removeFromCart(product.name)}
        style={{
        backgroundColor: "#3B82F6",
        borderRadius: "0.25rem",
        color: "white",
        fontWeight: "bold",
        padding: "0.25rem 0.5rem",
        cursor: "pointer",
        marginRight: "0.5rem"
        }}
        >
        -
        </button>
        <span style={{ color: "black", fontWeight: "500", marginRight: "0.5rem" }}>
        {cart[product.name]}
        </span>
        <button
        onClick={() => addToCart(product.name)}
        style={{
        backgroundColor: "#3B82F6",
        borderRadius: "0.25rem",
        color: "white",
        fontWeight: "bold",
        padding: "0.25rem 0.5rem",
        cursor: "pointer",
        marginRight: "0.5rem"
        }}
        >
        +
        </button>
        <button
        onClick={() => addToCart(product.name)}
        style={{
        backgroundColor: "#3B82F6",
        borderRadius: "0.25rem",
        color: "white",
        fontWeight: "bold",
        padding: "0.25rem 0.5rem",
        cursor: "pointer",
        }}
        >
        Add to cart
        </button>
        </div>
        </div>
        ))}
        </main>
        <footer style={{ paddingTop: "2rem", paddingBottom: "2rem", backgroundColor: "#009E74", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button
        id="checkout-button"
        onClick={doneShopping}
        style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "0.375rem",
        color: "#009E74",
        fontWeight: "bold",
        padding: "0.5rem 1rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        textAlign: "center",
        cursor: "pointer",
        width: "50%",
        }}
        >
        View Cart
        </button>
        </footer>
        </div>
        );
        }
