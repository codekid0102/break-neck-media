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


      {/* FEATURED WORK */}
     <section id="portfolio" style={styles.section}>
  <h2 style={styles.heading}>Featured Work</h2>

  <div style={styles.grid}>
 <div
  style={{
    ...styles.portfolioCard,
    backgroundImage:
  "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.75)), url('/images/wedding.jpg')",
  }}
>
  Weddings
</div>

    <div
      style={{
        ...styles.portfolioCard,
       backgroundImage:
  "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.75)), url('/images/event.jpg')",  
      }}
    >
      Events
    </div>

    <div
      style={{
        ...styles.portfolioCard,
        backgroundImage:
  "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.75)), url('/images/hero.jpg')",
      }}
    >
      Commercial
    </div>

    <div
      style={{
        ...styles.portfolioCard,
        backgroundImage:
  "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.75)), url('/images/drone.jpg')",
      }}
    >
      Drone Projects
    </div>
  </div>
</section>

      {/* PORTFOLIO */}
     

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
  height: "320px",
  borderRadius: "16px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  padding: "24px",
  fontSize: "1.6rem",
  fontWeight: 700,
  color: "#fff",
  position: "relative",
  overflow: "hidden",
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
