import React from "react";
import Hero from "../components/hero";

function Home() {
  return (
    <div>
      <Hero />

      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2>Why Choose Delicious Decies?</h2>
        <p>
          We combine luxury dining atmosphere with world-class chefs
          and fresh organic ingredients to create unforgettable meals.
        </p>
      </section>
    </div>
  );
}

export default Home;