"use client";

import Link from "next/link";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#020202ff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Order & Eat</h1>
      <nav style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Link href="/">Главная</Link>
        <Link href="/menu">Меню</Link>
        <Link href="/contact">Контакты</Link>

        {user ? (
          <>
            <Link href="/profile">Профиль</Link>
            <button
              onClick={logout}
              style={{
                background: "#E74C3C",
                color: "white",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Выход
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Вход</Link>
            <Link href="/signup">Регистрация</Link>
          </>
        )}

        <CartWidget />
      </nav>
    </header>
  );
}