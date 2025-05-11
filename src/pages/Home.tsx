import { useRef } from "react";

import TopNav from "@/components/NavBar";
import Box from "@mui/material/Box";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <Box sx={{ width: "100%" }}>
      <TopNav containerRef={containerRef} />
      <HeroSection />
      <div style={{ height: "1000px" }} />
    </Box>
  );
}
