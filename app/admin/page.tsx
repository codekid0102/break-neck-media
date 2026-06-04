export default function AdminDashboard() {
  return (
    <main style={styles.wrapper}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      <p style={styles.subtitle}>
        Manage Break Neck Media system controls.
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>📤 Upload Galleries</h2>
          <p>Upload and manage client media collections.</p>
        </div>

        <div style={styles.card}>
          <h2>🔑 Client Codes</h2>
          <p>Create and manage secure client access codes.</p>
        </div>

        <div style={styles.card}>
          <h2>📅 Bookings</h2>
          <p>View and manage upcoming shoots.</p>
        </div>

        <div style={styles.card}>
          <h2>📨 Enquiries</h2>
          <p>Check incoming messages and requests.</p>
        </div>
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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#111",
    border: "1px solid #222",
    borderRadius: "12px",
    padding: "20px",
  },
};
