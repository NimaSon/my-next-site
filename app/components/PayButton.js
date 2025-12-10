"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";

export default function PayButton() {
  const { cart, clearCart } = useContext(CartContext) || {};
  const [paymentMethod, setPaymentMethod] = useState("Наличные");

  const handlePay = () => {
    if (!cart || cart.length === 0) {
      alert("Корзина пуста!");
      return;
    }
    alert(
      `Оплата ${cart.length} товаров\nСпособ оплаты: ${paymentMethod}`
    );
    clearCart();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <p>Товаров в корзине: {cart?.length || 0}</p>

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      >
        <option>Наличные</option>
        <option>Карта</option>
        <option>Онлайн</option>
      </select>

      <button
        onClick={handlePay}
        style={{
          padding: "10px 20px",
          background: "#E67E22",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Оплатить
      </button>
    </div>
  );
}