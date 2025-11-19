"use client";
import Link from "next/link";

export default function PizzaPage() {
  return (
    <main style={style}>
      <h1>Пицца 🍕</h1>

      <img src="/images/pizza.jpg" alt="Пицца" width="300" height="200" />

      <p>Выберите вид:</p>

      <div style={cards}>
        <Link href="/menu/pizza/classic" style={card}>
          <h3 style={title}>Классическая</h3>
          <p style={desc}>Тесто, сыр моцарелла, колбаса, овощи, оливки</p>
        </Link>

        <Link href="/menu/pizza/italian" style={card}>
          <h3 style={title}>Итальянская</h3>
          <p style={desc}>Тонкое тесто, томаты, моцарелла, базилик</p>
        </Link>

        <Link href="/menu/pizza/hawaiian" style={card}>
          <h3 style={title}>Гавайская</h3>
          <p style={desc}>Курица, сыр, ананасы, фирменный соус</p>
        </Link>
      </div>
    </main>
  );
}

const style = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)",
  color: "#333",
};

const cards = {
  display: "flex",
  gap: "20px",
  marginTop: "20px",
};

const card = {
  background: "white",
  width: "220px",
  padding: "15px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "#333",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const title = {
  margin: "0 0 8px 0",
  fontSize: "18px",
  fontWeight: "bold",
};

const desc = {
  margin: 0,
  fontSize: "14px",
  opacity: 0.8,
};
