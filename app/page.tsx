import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section style={styles.hero}>
        <h1 style={styles.title}>Break Neck Media</h1>

        <p style={styles.subtitle}>
          Capturing moments. Creating stories. Building visual impact that moves fast and hits hard.
        </p>

        <div style={styles.buttons}>
          <a href="/client-access" style={styles.primaryBtn}>
            Client Portal
          </a>
          <a href="/admin" style={styles.secondaryBtn}>
            Admin Dashboard
          </a>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
  },
  title: {
    fontSize: "56px",
    fontWeight: "800",
    marginBottom: "20px",
    letterSpacing: "-1px",
  },
  subtitle: {
    fontSize: "18px",
    maxWidth: "600px",
    color: "#555",
    marginBottom: "30px",
    lineHeight: 1.6,
  },
  buttons: {
    display: "flex",
    gap: "15px",
  },
  primaryBtn: {
    padding: "12px 20px",
    background: "black",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
  },
  secondaryBtn: {
    padding: "12px 20px",
    background: "#f2f2f2",
    color: "black",
    textDecoration: "none",
    borderRadius: "8px",
  },
};
