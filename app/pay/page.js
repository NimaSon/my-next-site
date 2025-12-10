"use client"; // <- обязательное

import { CartProvider } from "../../context/CartContext";
import PayButton from "../../components/PayButton";

export default function PayPage() {
  return (
    <CartProvider>
      <h1>Оплата</h1>
      <PayButton />
    </CartProvider>
  );
}