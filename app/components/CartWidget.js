"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <Link href="/cart" style={{ position: "relative" }}>
      <span style={{ fontSize: "20px" }}>🛒</span>

      {cart.length > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
          }}
        >
          {cart.length}
        </span>
      )}
    </Link>
  );
}