"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuthButtons() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/"; // обновление UI
  };

  if (!user) {
    return (
      <div className="flex gap-3">
        <Link className="px-4 py-2 bg-blue-600 text-white rounded" href="/login">
          Login
        </Link>
        <Link className="px-4 py-2 bg-green-600 text-white rounded" href="/signup">
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="flex gap-3 items-center">
      <Link className="px-4 py-2 bg-purple-600 text-white rounded" href="/profile">
        Profile
      </Link>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}