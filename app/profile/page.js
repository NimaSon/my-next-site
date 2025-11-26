"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      window.location.href = "/login";
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>

      <div className="bg-white p-6 shadow-lg rounded w-full max-w-md">
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}