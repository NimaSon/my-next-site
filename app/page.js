"use client";

import Link from "next/link";

export default function Home() {
  const items = [
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>FastDrop</h1>
      <p style={{ fontSize: "18px", color: "#444", marginBottom: "30px" }}>
        Доставляем еду по Астане быстро и вкусно!
      </p>

      <nav
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/contact" style={btn("#9B59B6")}>
          Контакты
        </Link>
        <Link href="/menu" style={btn("#E67E22")}>
          Меню
        </Link>
      </nav>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <div
            key={item.name}
            style={{
              padding: "20px",
              border: "2px solid #2ECC71",
              borderRadius: "12px",
              width: "150px",
              textAlign: "center",
              fontSize: "22px",
              backgroundColor: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            }}
          >
            <p style={{ fontSize: "40px", marginBottom: "10px" }}>{item.img}</p>
            {item.name}
          </div>
        ))}
      </div>
    </main>
  );
}

function btn(color) {
  return {
    background: color,
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
  };
}