export const metadata = {
  title: "Меню | FastDrop",
};

export default function MenuPage() {
  const items = [
    { name: "Пицца", img: "🍕" },
    { name: "Бургеры", img: "🍔" },
    { name: "Салаты", img: "🥗" },
  ];

  return (
    <>
      <h1>Меню FastDrop</h1>
      <p>Доставляем еду по Астане быстро и вкусно!</p>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>
        {items.map((item) => (
          <div key={item.name} style={{
            padding: "20px",
            border: "2px solid #2ECC71",
            borderRadius: "12px",
            width: "150px",
            textAlign: "center",
            fontSize: "22px"
          }}>
            <p style={{ fontSize: "40px" }}>{item.img}</p>
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}