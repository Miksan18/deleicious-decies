import React, { useEffect, useState } from "react";
import MenuCard from "../components/menucard";
import "./menu.css";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(item.name + " added to cart");
  };

  return (
    <div className="menu-page">
      <h1 data-aos="fade-down">Our Special Menu</h1>

      <div className="menu-grid">
        {menu.map(item => (
          <MenuCard
            key={item._id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;