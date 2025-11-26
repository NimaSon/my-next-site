"use client";

import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    window.location.href = "/profile";
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={register} className="p-6 bg-white shadow-lg rounded w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Register</h1>

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

        <button className="w-full bg-green-600 text-white p-3 rounded">Register</button>
      </form>
    </div>
  );
}