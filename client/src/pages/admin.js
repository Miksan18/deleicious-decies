import React, { useState } from "react";

function Admin() {
  const [food, setFood] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAdd = async () => {
    await fetch("http://localhost:5000/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });

    alert("Food added!");
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <input
        placeholder="Name"
        onChange={(e) => setFood({ ...food, name: e.target.value })}
      />

      <input
        placeholder="Price"
        onChange={(e) => setFood({ ...food, price: e.target.value })}
      />

      <input
        placeholder="Image URL"
        onChange={(e) => setFood({ ...food, image: e.target.value })}
      />

      <button onClick={handleAdd}>Add Food</button>
    </div>
  );
}

export default Admin;