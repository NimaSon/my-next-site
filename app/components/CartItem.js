"use client";

export default function CartItem({ item }) {
  return (
    <li style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      borderBottom: "1px solid #ddd",
    }}>
      <div>
        <span style={{ fontWeight: "500" }}>{item.name}</span> x{item.quantity}
      </div>
      <div style={{ fontWeight: "600" }}>{item.price * item.quantity}₸</div>
    </li>
  );
}