import { Sections } from "@/types";
import { FontWeightValues } from "@/types/styles";

import { aboutData } from "@/data/aboutData";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import useDeviceQuery from "@/hooks/useDeviceQuery";

export default function AboutSection() {
  const { isMobile } = useDeviceQuery();

  return (
    <Box
      id={Sections.ABOUT}
      component="section"
      width="100%"
      pt={isMobile ? 10 : 20}
    >
      <Typography variant="h2">{Sections.ABOUT}.</Typography>
      <Divider orientation="horizontal" sx={{ mt: 1, mb: 3 }} />
      {aboutData.map((about) => (
        <Box
          key={about.title}
          mb={5}
          gap={1}
          display="flex"
          flexDirection="column"
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
