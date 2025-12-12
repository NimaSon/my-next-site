"use client";

import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import PayButton from "./components/PayButton";

const items = [
  { name: "Пицца Маргарита", img: "🍕", price: 1200 },
  { name: "Салат Цезарь", img: "🥗", price: 2500 },
  { name: "Салат Оливье", img: "🥗", price: 1500 },
  { name: "Бургер Чиз", img: "🍔", price: 1500 },
];

export default function HomePage() {
  const { addToCart } = useContext(CartContext);

  return (
    <main style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            background: "black",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,1)",
            textAlign: "center",
            flex: "1 1 200px",
          }}
        >
          <p style={{ fontSize: "50px" }}>{item.img}</p>
          <h2 style={{ fontWeight: "bold" }}>{item.name}</h2>
          <p>{item.price}₸</p>
          <button
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#E67E22",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => addToCart(item)}
          >
            Добавить в корзину
          </button>
        </div>
      ))}
      <div style={{ width: "100%" }}>
        <PayButton />
      </div>
    </main>
  );
}