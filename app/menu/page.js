"use client";

import Link from "next/link";

export default function MenuPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "10px", color: "#222" }}>
        Меню Order & Eat
      </h1>
      <p style={{ fontSize: "18px", color: "#333", marginBottom: "30px" }}>
        Выберите еду
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/menu/pizza" style={card("🍕", "Пицца")} />
        <Link href="/menu/burgers" style={card("🍔", "Бургеры")} />
        <Link href="/menu/salads" style={card("🥗", "Салаты")} />
      </div>
    </main>
  );
}

function btn(color) {
  return {
    background: color,
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
  };
}

function card(emoji, title) {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    border: "2px solid #2ECC71",
    borderRadius: "12px",
    width: "150px",
    height: "150px",
    textAlign: "center",
    fontSize: "22px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textDecoration: "none",
    color: "#333",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    content: `"${emoji}\n${title}"`,
  };
}