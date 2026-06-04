export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Break Neck Media</div>

      <nav style={styles.nav}>
        <a href="/" style={styles.link}>Home</a>
        <a href="/admin" style={styles.link}>Admin</a>
        <a href="/client-access" style={styles.link}>Client Access</a>
      </nav>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    background: "white",
    zIndex: 10,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px",
    letterSpacing: "-0.5px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "14px",
  },
};
