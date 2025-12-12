"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SignupPage() {
  const { signup } = useContext(AuthContext);

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
    signup(formData.email, formData.password);
    setFormData({ email: "", password: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Регистрация</h1>
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
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}