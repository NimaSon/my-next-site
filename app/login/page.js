"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
      setError("Invalid email or password");
      return;
    }

    window.location.href = "/profile";
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={login} className="p-6 bg-white shadow-lg rounded w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        {error && <p className="text-red-600">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border mb-3 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border mb-3 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded">Login</button>
      </form>
    </div>
  );
}