import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      display: "flex",
      gap: "20px",
      padding: "20px",
      background: "#2ECC71",
      color: "#fff",
      fontWeight: "bold"
    }}>
      <Link href="/menu">Меню</Link>
      <Link href="/contacts">Контакты</Link>
    </header>
  );
}