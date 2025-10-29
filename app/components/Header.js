export default function Header() {
  return (
    <header style={{ padding: 20, background: "#eee" }}>
      <nav>
        <a href="/">Главная</a> |{" "}
        <a href="/about">О нас</a> |{" "}
        <a href="/contact">Контакты</a>
      </nav>
    </header>
  );
}