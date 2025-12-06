export default function CroissantPage() {
  return (
    <div style={styles.page}>
      <h1>Круассан 🥐</h1>

      <img
        src="/images/croissant.jpg"
        alt="Круассан"
        width="300"
        height="200"
        style={styles.image}
      />

      <p style={styles.desc}>
        Хрустящий круассан с нежным слоёным тестом и сладкой начинкой.
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