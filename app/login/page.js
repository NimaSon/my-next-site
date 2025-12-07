"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Получаем пользователя из localStorage
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("Пользователь не найден. Зарегистрируйтесь.");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (email === userData.email && password === userData.password) {
      login(userData); // сохраняем пользователя в контекст
      window.location.href = "/profile"; // редирект на профиль
    } else {
      setError("Неверный email или пароль");
    }
  };

  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "30px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          width: "300px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Вход</h1>

        {error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#3498DB",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Войти
        </button>
      </form>
    </main>
  );
}