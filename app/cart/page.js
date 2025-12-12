"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cart, total } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <CartItem key={idx} item={item} />
          ))}
        </ul>
      )}
      <h2>Итого: {total}₸</h2>
      <button
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          background: "#27AE60",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => alert(`Оплата ${total}₸`)}
      >
        Оплатить
      </button>
    </div>
  );
}