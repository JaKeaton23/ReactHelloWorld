function App() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          Jayden Keaton <span style={styles.muted}>— Assignment 1 Hello World!</span> 👋🏾
        </h1>
        <p style={styles.subtitle}>Hello World for Morehouse College Full Stack Development</p>

        <div style={styles.status}>
  <span style={styles.check}>✔ Built</span>
  <span style={styles.check}>✔ Tested</span>
  <span style={styles.check}>✔ Containerized</span>
</div>

        </div>
      </div>
  
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: 24,
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
  },
  card: {
    width: "min(700px, 100%)",
    padding: 28,
    borderRadius: 20,
    color: "white",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },
  status: {
  display: "flex",
  gap: 16,
  marginTop: 10,
  flexWrap: "wrap",
},
check: {
  fontSize: 15,
  padding: "6px 12px",
  borderRadius: 8,
  background: "rgba(34,197,94,0.15)",
  color: "#bbf7d0",
  border: "1px solid rgba(34,197,94,0.35)",
},
  title: { margin: 0, fontSize: 44, letterSpacing: -0.5 },
  muted: { opacity: 0.85, fontWeight: 600 },
  subtitle: { marginTop: 12, marginBottom: 18, fontSize: 18, opacity: 0.9 },
  row: { display: "flex", gap: 10, flexWrap: "wrap" },
  pill: {
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.18)",
    fontSize: 14,
  },
};

export default App;
