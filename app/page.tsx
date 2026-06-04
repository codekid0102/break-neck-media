import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff" }}>
      <Navbar />

      {/* HERO */}
      <section style={styles.hero}>
  <Image
    src="/images/hero.jpg"
    alt="Break Neck Media"
    fill
    priority
    style={{
      objectFit: "cover",
      opacity: 0.35,
      zIndex: -1,
    }}
  />

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
<section>
  <h2>Recent Work</h2>

  <div>
    <img src="/images/wedding.jpg" />
    <img src="/images/drone.jpg" />
    <img src="/images/event.jpg" />
  </div>
</section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <h2 style={styles.heading}>Our Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Photography</h3>
            <p>Professional photography for events, brands and clients.</p>
          </div>

          <div style={styles.card}>
            <h3>Videography</h3>
            <p>Cinematic storytelling through high-quality video production.</p>
          </div>

          <div style={styles.card}>
            <h3>Drone Footage</h3>
            <p>Aerial perspectives that make every project stand out.</p>
          </div>

          <div style={styles.card}>
            <h3>Event Coverage</h3>
            <p>Capturing every important moment from start to finish.</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={styles.section}>
        <h2 style={styles.heading}>Featured Work</h2>

        <div style={styles.grid}>
          <div style={styles.portfolioCard}>Weddings</div>
          <div style={styles.portfolioCard}>Events</div>
          <div style={styles.portfolioCard}>Commercial</div>
          <div style={styles.portfolioCard}>Drone Projects</div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2 style={styles.heading}>About Break Neck Media</h2>

        <p style={styles.about}>
          My name is Myo. I founded Break Neck Media from a passion for
          photography, videography and visual storytelling. Every project is
          about capturing authentic moments and turning them into content that
          leaves a lasting impact.
        </p>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Ready to create something amazing?</h2>

        <p>
          Let's bring your vision to life through powerful visuals and
          storytelling.
        </p>

        <a href="mailto:info@breakneckmedia.co.uk" style={styles.primaryBtn}>
          Get In Touch
        </a>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
hero: {
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
},

  kicker: {
    color: "#9333ea",
    fontWeight: 700,
    letterSpacing: "2px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "clamp(4rem, 10vw, 7rem)",
    fontWeight: 900,
    lineHeight: 1,
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "1.3rem",
    color: "#ccc",
    marginBottom: "40px",
  },

  buttons: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "14px 28px",
    background: "#9333ea",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: 600,
  },

  secondaryBtn: {
    padding: "14px 28px",
    border: "1px solid #9333ea",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
  },

  section: {
    padding: "100px 10%",
  },

  heading: {
    fontSize: "3rem",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
  },

  card: {
    padding: "30px",
    border: "1px solid #222",
    borderRadius: "12px",
    background: "#111",
  },

  portfolioCard: {
    height: "220px",
    borderRadius: "12px",
    background: "#111",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.4rem",
    fontWeight: 700,
  },

  about: {
    maxWidth: "800px",
    color: "#ccc",
    lineHeight: 1.8,
    fontSize: "1.1rem",
  },

  cta: {
    padding: "120px 10%",
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(147,51,234,.15), rgba(147,51,234,.05))",
  },
};
