import React, { useState } from "react";

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    address: "",
  });

  const handleOrder = async () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (cart.length === 0) {
        alert("Cart is empty!");
        return;
      }

      const res = await fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          items: cart,
        }),
      });

      const data = await res.json();

      alert(data.message || "Order placed successfully!");

      localStorage.removeItem("cart");

      // reset form
      setForm({
        name: "",
        address: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="text"
        placeholder="Address"
        value={form.address}
        onChange={(e) =>
          setForm({ ...form, address: e.target.value })
        }
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <button onClick={handleOrder} style={{ padding: "10px 20px" }}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;