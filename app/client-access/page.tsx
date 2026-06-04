"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ClientAccess() {
  const [code, setCode] = useState("");
  const [galleries, setGalleries] = useState<any[]>([]);

  const handleSubmit = async () => {
    const { data: client } = await supabase
      .from("clients")
      .select("*")
      .eq("code", code)
      .single();

    if (!client) {
      alert("Invalid code");
      return;
    }

    const { data } = await supabase
      .from("client_galleries")
      .select("gallery_id, galleries(*)")
      .eq("client_code", code);

    setGalleries(data || []);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Client Access</h1>

      <input
        placeholder="Enter your access code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={handleSubmit}>Enter</button>

      <div>
        {galleries.map((g: any) => (
          <div key={g.gallery_id}>
            <h3>{g.galleries.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}