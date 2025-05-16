import { Sections } from "@/types";
import { FontWeightValues } from "@/types/styles";

import { aboutData } from "@/data/aboutData";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import TextWithDot from "@/components/common/TextWithDot";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function AboutSection() {
  return (
    <Box id={Sections.ABOUT} component="section" width="100%" pt={10}>
      <Typography variant="h2">{Sections.ABOUT}.</Typography>
      <Divider orientation="horizontal" sx={{ mt: 1, mb: 3 }} />
      {aboutData.map((about) => (
        <Box
          key={about.title}
          mb={7}
          gap={1}
          display="flex"
          flexDirection="column"
        >
          <Box display="flex" alignItems="center" gap={1}>
            <LocalOfferIcon color="info" />
            <Typography variant="h4">{about.title}</Typography>
          </Box>
          <Typography
            variant="body1"
            fontWeight={FontWeightValues.BOLD}
            color={"text.secondary"}
          >
            | {about.subtitle}
          </Typography>
          {about.content.map((text, index) => (
            <TextWithDot
              key={index}
              variant="body1"
              lineHeight={1.8}
              fontWeight={FontWeightValues.SEMI_BOLD}
            >
              {text}
            </TextWithDot>
          ))}
        </Box>
      ))}
    </Box>
  );
}
