"use client";

import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Введите корректный email.");
      return;
    }

    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов.");
      return;
    }

    setLoading(true);

    try {
      const userData = { email, password };
      // Сохраняем пользователя
      localStorage.setItem("user", JSON.stringify(userData));
      // Сохраняем авторизованного пользователя
      localStorage.setItem("loggedIn", "true");

      setSuccess("Регистрация прошла успешно! Перенаправление...");
      setTimeout(() => {
        window.location.href = "/profile";
      }, 1500);
    } catch (err) {
      setError("Произошла ошибка при регистрации.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={register}
        className="p-6 bg-white shadow-lg rounded w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

        {error && <p className="text-red-500 mb-3">{error}</p>}
        {success && <p className="text-green-500 mb-3">{success}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full p-3 border mb-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full p-3 border mb-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className={`w-full p-3 rounded text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"
          }`}
          disabled={loading}
        >
          {loading ? "Регистрация..." : "Register"}
        </button>
      </form>
    </div>
  );
}