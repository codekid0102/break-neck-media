type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Gallery ID: {params.id}</h1>
    </div>
  );
}
