"use client";
import "./salads.css";
import Link from "next/link";

export default function SaladsPage() {
  return (
    <main className="salads-container">
      <h1 className="salads-title">Салаты 🥗</h1>
      <p className="salads-sub">Выберите салат:</p>

      <div className="salads-list">
        <Link href="/menu/salads/greek" className="salad-link">Греческий</Link>
        <Link href="/menu/salads/caesar" className="salad-link">Цезарь</Link>
        <Link href="/menu/salads/olivier" className="salad-link">Оливье</Link>
      </div>
    </main>
  );
}