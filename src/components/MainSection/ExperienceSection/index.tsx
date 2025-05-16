import { Sections } from "@/types";
import { experiencesData } from "@/data/experiencesData";

import useDeviceQuery from "@/hooks/useDeviceQuery";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ExpItem from "@/components/MainSection/ExperienceSection/ExpItem";

export default function ExperienceSection() {
  const { isMobile } = useDeviceQuery();

  return (
    <Box id={Sections.EXPERIENCE} pt={15}>
      <Typography variant="h2">{Sections.EXPERIENCE}.</Typography>
      <Divider orientation="horizontal" sx={{ mt: 1, mb: 3 }} />

      {experiencesData.map((experience, i) => (
        <ExpItem key={`experience-${i}`} isMobile={isMobile} {...experience} />
      ))}
    </Box>
  );
}
