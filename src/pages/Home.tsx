import { useRef } from "react";

import TopNav from "@/components/NavBar";
import Box from "@mui/material/Box";
import HeroSection from "@/components/HeroSection";
import Main from "@/components/Main";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <Box sx={{ width: "100%" }}>
      <TopNav containerRef={containerRef} />
      <Box
        ref={containerRef}
        sx={{
          height: "100vh",
          width: "100vw",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <HeroSection />
        <Main />
      </Box>
    </Box>
  );
}
