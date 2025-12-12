"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#333",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link href="/"><button>Главная</button></Link>
        <Link href="/menu"><button>Меню</button></Link>
        <Link href="/contact"><button>Контакты</button></Link>
        <Link href="/profile"><button>Профиль</button></Link>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {user ? (
          <>
            <span>{user.name}</span>
            <button onClick={logout}>Выйти</button>
          </>
        ) : (
          <>
            <Link href="/login"><button>Войти</button></Link>
            <Link href="/signup"><button>Регистрация</button></Link>
          </>
        )}
        <span>Корзина: {cart.length} шт.</span>
      </div>
    </header>
  );
}