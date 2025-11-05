"use client";
import Link from "next/link";

export default function PizzaPage() {
  return (
    <main style={style}>
      <h1>Пицца 🍕</h1>
      <p>Выберите вид:</p>
      <div style={list}>
        <Link href="/menu/pizza/classic" style={link}>Классическая</Link>
        <Link href="/menu/pizza/italian" style={link}>Итальянская</Link>
        <Link href="/menu/pizza/hawaiian" style={link}>Гавайская</Link>
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

const list = { display: "flex", gap: "20px", marginTop: "20px" };
const link = {
  background: "#3498DB",
  color: "white",
  padding: "10px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};
