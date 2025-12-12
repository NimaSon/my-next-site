"use client";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function CroissantPage() {
  const { addToCart } = useContext(CartContext);

  const item = {
    name: "Бургер-сендвич",
    img: "🥪",
    price: 2000,
    description:
      "Это чаще всего аппетитный, сытный бургер, который приготовлен с акцентом на разнообразие начинок и слоев, свойственных сэндвичам.",
    recipe: 
`1. Булка: Используются разрезанные булочки для бургеров, которые часто поджаривают для хруста.
2. Начинка: Классическая для бургера котлета (говяжья, куриная).
3. Дополнительно: Соус (майонез, кетчуп), сыр, овощи (салат, помидоры, огурцы).
4. Сборка: Ингредиенты укладываются слоями, как в сэндвиче, а не просто в булочку.`,
  };

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        lineHeight: 1.6,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "70px" }}>{item.img}</div>
        <h1 style={{ marginTop: "10px", fontSize: "32px", fontWeight: "bold" }}>
          {item.name}
        </h1>
        <p style={{ color: "#555", margin: "10px 0" }}>{item.description}</p>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>{item.price}₸</p>

        <button
          onClick={() => addToCart(item)}
          style={{
            padding: "12px 24px",
            background: "#E67E22",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Добавить в корзину
        </button>
      </div>

      <hr style={{ margin: "25px 0", opacity: 0.3 }} />

      <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Рецепт приготовления</h2>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#f8f8f8",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        {item.recipe}
      </pre>
    </main>
  );
}
