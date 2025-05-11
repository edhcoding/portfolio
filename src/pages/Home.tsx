import { useRef } from "react";

import TopNav from "@/components/NavBar";
import Box from "@mui/material/Box";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <Box width="100%">
      <TopNav containerRef={containerRef} />
      <Box ref={containerRef} width="100vw" height="100vh" overflow="auto">
        <HeroSection />
        <MainSection />
      </Box>
    </Box>
  );
}
