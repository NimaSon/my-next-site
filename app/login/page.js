"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
    // Можно очистить форму
    setFormData({ email: "", password: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "8px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px", background: "#E67E22", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Войти
        </button>
      </form>
    </div>
  );
}