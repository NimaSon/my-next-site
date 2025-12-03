"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const register = (e) => {
    e.preventDefault();

    const userData = { email, password };
    login(userData); // сохраняем пользователя
    window.location.href = "/profile"; // редирект
  };

  return (
    <form onSubmit={register}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
      <button type="submit">Регистрация</button>
    </form>
  );
}