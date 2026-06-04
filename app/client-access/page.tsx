export default function ClientPortal() {
  return (
    <main style={styles.wrapper}>
      <h1 style={styles.title}>Client Portal</h1>

      <p style={styles.subtitle}>
        Access your private galleries and project files.
      </p>

      <div style={styles.card}>
        <h2>🔐 Enter Access Code</h2>

        <input
          placeholder="Enter client code..."
          style={styles.input}
        />

        <button style={styles.button}>Access Gallery</button>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    padding: "80px 10%",
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#aaa",
    marginBottom: "40px",
  },

  card: {
    maxWidth: "500px",
    background: "#111",
    border: "1px solid #222",
    padding: "30px",
    borderRadius: "12px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#000",
    color: "#fff",
  },

  button: {
    padding: "12px 20px",
    background: "#9333ea",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};