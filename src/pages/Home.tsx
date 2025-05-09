import TopNav from "@/components/NavBar";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <>
      <TopNav containerRef={containerRef} />
      <div style={{ height: "10000px" }}></div>
    </>
  );
}
