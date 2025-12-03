"use client";

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
  const { cart, removeFromCart, total } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setShowCart(!showCart)}
        style={{
          background: "#E74C3C",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Корзина ({cart.length})
      </button>

      {showCart && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: 0,
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            width: "300px",
            maxHeight: "400px",
            overflowY: "auto",
            zIndex: 100,
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            Корзина
          </h2>
          {cart.length === 0 && <p>Ваша корзина пуста</p>}
          {cart.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span>{item.name}</span>
              <span>{item.price}₸</span>
              <button
                onClick={() => removeFromCart(idx)}
                style={{
                  marginLeft: "10px",
                  background: "#E74C3C",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "2px 6px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
          ))}
          {cart.length > 0 && <div style={{ marginTop: "10px", fontWeight: "bold" }}>Итого: {total}₸</div>}
        </div>
      )}
    </div>
  );
}