"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>Контакты</h1>
      <p style={{ fontSize: "18px", marginBottom: "40px", textAlign: "center" }}>
        Свяжитесь с нами для заказа или вопросов о доставке!
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* Контактная информация */}
        <div
          style={{
            flex: "1 1 300px",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Наши контакты</h2>
          <p>📍 Адрес: Засекречено</p>
          <p>📞 Телефон: Засекречено</p>
          <p>✉ Email: info@orderandeat.kz</p>
        </div>

        {/* Форма обратной связи */}
        <div
          style={{
            flex: "1 1 300px",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Напишите нам</h2>

          {submitted && (
            <p style={{ color: "green", marginBottom: "15px" }}>
              Спасибо! Ваше сообщение отправлено.
            </p>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            <textarea
              placeholder="Сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                background: "#E67E22",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}