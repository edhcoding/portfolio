interface Props {
  error: Error;
}

export default function ErrorPage({ error }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1C1C28",
        color: "#F9F9F9",
        textAlign: "center",
      }}
    >
      <h1>⚠️ Error</h1>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{error.message}</p>
    </div>
  );
}
