import { Sections } from "@/types";
import { FontWeightValues } from "@/types/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { aboutData } from "@/data/aboutData";

export default function AboutSection() {
  return (
    <Box id={Sections.ABOUT} sx={{ width: "100%", pt: 10 }}>
      <Typography variant="h2">{Sections.ABOUT}.</Typography>
      <Divider orientation="horizontal" sx={{ mt: 1, mb: 3 }} />
      {aboutData.map((about) => (
        <Box
          key={about.title}
          sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 5 }}
        >
          <Typography variant="h4">| {about.title}</Typography>
          <Typography
            variant="body1"
            fontWeight={FontWeightValues.BOLD}
            color={"text.secondary"}
          >
            {about.subtitle}
          </Typography>
          <Typography
            variant="body2"
            whiteSpace="pre-wrap"
            lineHeight={1.8}
            fontWeight={FontWeightValues.SEMI_BOLD}
          >
            {about.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
