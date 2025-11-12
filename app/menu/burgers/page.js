"use client";
import Link from "next/link";

export default function BurgersPage() {
  return (
    <main style={style}>
      <h1>Бургеры 🍔</h1>

      <img src="/images/burgers.jpg" alt="Бургер" width="300" height="200" />

      <p>Выберите категорию:</p>
      <div style={list}>
        <Link href="/menu/burgers/sandwich" style={link}>Сендвич 🥪</Link>
        <Link href="/menu/burgers/croissant" style={link}>Круассан 🥐</Link>
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
  background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  color: "#333",
};

const list = { display: "flex", gap: "20px", marginTop: "20px" };
const link = {
  background: "#E67E22",
  color: "white",
  padding: "10px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};
