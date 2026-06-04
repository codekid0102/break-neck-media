import { supabase } from "@/lib/supabase";

export default async function GalleryPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: client } = await supabase
    .from("clients")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!client) {
    return <div>Client not found</div>;
  }

  return (
    <main style={{ padding: "40px", color: "#fff", background: "#000" }}>
      <h1>{client.name} Gallery</h1>
      <p>Private client content will go here soon.</p>
    </main>
  );
}
