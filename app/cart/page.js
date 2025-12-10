"use client";

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [payment, setPayment] = useState(null); // выбранный метод оплаты
  const [isPaying, setIsPaying] = useState(false); // экран выбора оплаты

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const startPayment = () => {
    setIsPaying(true);
  };

  const confirmPayment = () => {
    alert(`Оплата прошла успешно! Метод: ${payment}`);
    clearCart();
    window.location.href = "/";
  };

  if (cart.length === 0) {
    return <h1 style={{ padding: 20 }}>Корзина пуста</h1>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Корзина</h1>

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            padding: 10,
            marginBottom: 10,
            border: "1px solid #ccc",
            borderRadius: 8,
          }}
        >
          <h3>{item.name}</h3>
          <p>Цена: {item.price} ₸</p>
          <button
            onClick={() => removeFromCart(index)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Удалить
          </button>
        </div>
      ))}

      <h2>Итого: {totalPrice} ₸</h2>

      {!isPaying ? (
        <button
          onClick={startPayment}
          style={{
            marginTop: 15,
            width: "100%",
            padding: "12px",
            background: "#27ae60",
            color: "white",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Перейти к оплате
        </button>
      ) : (
        <div style={{ marginTop: 20 }}>
          <h3>Выберите способ оплаты:</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <label>
              <input
                type="radio"
                name="pay"
                value="Kaspi QR"
                onChange={(e) => setPayment(e.target.value)}
              />
              Kaspi QR
            </label>

            <label>
              <input
                type="radio"
                name="pay"
                value="Банковская карта"
                onChange={(e) => setPayment(e.target.value)}
              />
              Банковская карта
            </label>

            <label>
              <input
                type="radio"
                name="pay"
                value="Qiwi"
                onChange={(e) => setPayment(e.target.value)}
              />
              Qiwi
            </label>

            <label>
              <input
                type="radio"
                name="pay"
                value="Наличные"
                onChange={(e) => setPayment(e.target.value)}
              />
              Наличные при получении
            </label>
          </div>

          <button
            onClick={confirmPayment}
            disabled={!payment}
            style={{
              marginTop: 20,
              width: "100%",
              padding: "12px",
              background: payment ? "#2980b9" : "#95a5a6",
              color: "white",
              borderRadius: 8,
              cursor: payment ? "pointer" : "not-allowed",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Подтвердить оплату
          </button>
        </div>
      )}
    </div>
  );
}