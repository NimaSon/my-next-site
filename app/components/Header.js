"use client";

import Link from "next/link";
import CartWidget from "./CartWidget";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#000000ff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Order & Eat</h1>
      <nav style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Link href="/">Главная</Link>
        <Link href="/menu">Меню</Link>
        <Link href="/contact">Контакты</Link>
        <Link href="/login">Вход</Link>
        <Link href="/signup">Регистрация</Link>
        <CartWidget />
      </nav>
    </header>
  );
}