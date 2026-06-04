export default function ClientAccessPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Client Access</h1>

        <input
          placeholder="Enter access code"
          style={{
            padding: "12px",
            width: "300px",
          }}
        />

        <button
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
          }}
        >
          View Gallery
        </button>
      </div>
    </main>
  );
}
