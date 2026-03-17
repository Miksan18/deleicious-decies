import React from "react";
import "./menucard.css";

function MenuCard({ item, addToCart }) {
  return (
    <div className="menu-card" data-aos="fade-up">
      <img src={item.image} alt={item.name} />

      <div className="menu-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="menu-bottom">
          <span>₹{item.price}</span>
          <button onClick={() => addToCart(item)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;