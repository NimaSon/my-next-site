"use client"; // обязательно, чтобы видеть контекст

import "./globals.css";
import { useContext } from "react";
import { CartProvider, CartContext } from "@/app/context/CartContext";
import PayButton from "@/app/components/PayButton";

function HomeContent() {
  const items = [
    { name: "Пицца Маргарита", img: "🍕", price: 1200 },
    { name: "Салат Цезарь", img: "🥗", price: 2500 },
    { name: "Салат Оливье", img: "🥗", price: 1500 },
    { name: "Бургер Чиз", img: "🍔", price: 1500 },
  ];

  const { addToCart } = useContext(CartContext);

  return (
    <main
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            background: "black",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 1)",
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

export default function HomePage() {
  const { addToCart } = useContext(CartContext);

  const items = [
    { name: "Пицца Маргарита", price: 1200, img: "🍕" },
    { name: "Салат Цезарь", price: 2500, img: "🥗" },
    { name: "Бургер Чиз", price: 1500, img: "🍔" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: "10px" }}>
          <span style={{ fontSize: "30px" }}>{item.img}</span>
          <strong> {item.name} </strong> - {item.price}₸
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => addToCart(item)}
          >
            Добавить в корзину
          </button>
        </div>
      ))}
      <PayButton />
    </div>
  );
}