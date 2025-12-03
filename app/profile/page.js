"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const userData = localStorage.getItem("user");

    if (!loggedIn || !userData) {
      // Если не авторизован — редирект на логин
      window.location.href = "/login";
    } else {
      setUser(JSON.parse(userData));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать, {user.email}!</h1>
      <button
        onClick={logout}
        className="bg-red-600 text-white p-3 rounded"
      >
        Выйти
      </button>
    </div>
  );
}