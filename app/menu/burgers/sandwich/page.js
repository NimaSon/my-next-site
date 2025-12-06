export default function SandwichPage() {
  return (
    <div style={styles.page}>
      <h1>Сэндвич 🥪</h1>

      <img
        src="/images/sandwich.jpg"
        alt="Сэндвич"
        width="300"
        height="200"
        style={styles.image}
      />

      <p style={styles.desc}>
        Свежий сэндвич с сыром, овощами, салатом и ароматным хлебом.
      </p>
    </div>
  );
}

const styles = {
  page: {
    textAlign: "center",
    padding: "30px"
  },
  image: {
    borderRadius: "12px",
    marginTop: "20px"
  },
  desc: {
    marginTop: "15px",
    fontSize: "18px",
    color: "#333"
  }
};