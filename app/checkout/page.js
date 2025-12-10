"use client";

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cart, total } = useContext(CartContext);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    if (!name || !address) {
      alert("Пожалуйста, заполните все данные!");
      return;
    }

    alert(`
Спасибо за заказ, ${name}!
Сумма: ${total}₸
Способ оплаты: ${paymentMethod === "card" ? "Карта" : "Наличные"}
Доставка по адресу: ${address}
    `);

    window.location.href = "/";
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: 20 }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>Оформление заказа</h1>

      <h2 style={{ fontSize: 20, marginBottom: 10 }}>Ваш заказ:</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul style={{ marginBottom: 20 }}>
          {cart.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 5 }}>
              {item.name} — {item.price}₸
            </li>
          ))}
        </ul>
      )}

      <h2 style={{ marginBottom: 10 }}>Итого: {total}₸</h2>

      <h2 style={{ marginTop: 20 }}>Ваши данные:</h2>

      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Адрес доставки"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={inputStyle}
      />

      <h2 style={{ marginTop: 20 }}>Способ оплаты:</h2>

      <label style={radioLabel}>
        <input
          type="radio"
          value="card"
          checked={paymentMethod === "card"}
          onChange={() => setPaymentMethod("card")}
        />
        Оплата картой
      </label>

      <label style={radioLabel}>
        <input
          type="radio"
          value="cash"
          checked={paymentMethod === "cash"}
          onChange={() => setPaymentMethod("cash")}
        />
        Наличными курьеру
      </label>

      <button onClick={handleOrder} style={buttonStyle}>
        Подтвердить заказ
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const radioLabel = {
  display: "block",
  marginTop: "10px",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "25px",
  width: "100%",
  padding: "12px",
  background: "#27ae60",
  color: "white",
  fontSize: "18px",
  borderRadius: "8px",
  cursor: "pointer",
};