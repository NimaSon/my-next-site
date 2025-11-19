export default function HawaiianPizza() {
  return (
    <main style={page}>
      <h1>Гавайская пицца</h1>

      <img
        src="/images/pizza/hawaiian.jpg"
        alt="Гавайская пицца"
        style={image}
      />

      <p style={text}>
        Курица, сыр моцарелла и сладкие ананасы — мягкий вкус.
      </p>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "40px",
};

const image = {
  width: "300px",
  height: "auto",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  marginTop: "20px",
};

const text = {
  maxWidth: "300px",
  textAlign: "center",
  marginTop: "15px",
  fontSize: "16px",
  opacity: 0.8,
};