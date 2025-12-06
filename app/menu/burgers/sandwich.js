export default function SandwichPage() {
  return (
    <div style={style.container}>
      <h1 style={style.title}>Сэндвич 🥪</h1>

      <img
        src="/images/sandwich.jpg"
        alt="Сэндвич"
        style={style.image}
      />

      <p style={style.text}>
        Вкусный сэндвич с овощами, сыром, свежей зеленью и нежным мясом.
      </p>
    </div>
  );
}

const style = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(135deg, #ffefbd, #ffe5a1)",
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  image: {
    width: "300px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    marginBottom: "20px",
  },

  text: {
    fontSize: "20px",
    textAlign: "center",
    color: "#444",
    maxWidth: "600px",
  },
};