"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ClientAccess() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("clients")
      .select("*")
      .eq("access_code", code)
      .single();

    setLoading(false);

    if (error || !data) {
      setError("Invalid access code");
      return;
    }

    router.push(`/gallery/${data.id}`);
  };

  return (
    <main style={styles.container}>
      <h1>Client Access</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter access code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          {loading ? "Checking..." : "Enter"}
        </button>

        {error && <p style={styles.error}>{error}</p>}
      </form>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#000",
    color: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "20px",
  },
  input: {
    padding: "12px",
    width: "250px",
    borderRadius: "6px",
    border: "1px solid #333",
  },
  button: {
    padding: "12px",
    background: "#9333ea",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
};