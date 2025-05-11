import AboutSection from "@/components/Main/AboutSection";
import Box from "@mui/material/Box";

export default function Main() {
  return (
    <Box component="main" position="sticky" top={0}>
      <Box
        bgcolor="white"
        boxShadow="0 10px 5px 7px rgba(0,0,0,0.1)"
        px={3}
        pb={15}
      >
        <Box mx="auto" maxWidth="1024px">
          <AboutSection />
        </Box>
      </Box>
      <Box>hi</Box>
      <Box>hi</Box>
    </Box>
  );
}
