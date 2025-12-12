"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Профиль</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}