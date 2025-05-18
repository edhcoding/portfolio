import { RingLoader } from "react-spinners";

export default function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1e1e1e",
      }}
    >
      <RingLoader color="#F9F9F9" size={60} />
    </div>
  );
}
