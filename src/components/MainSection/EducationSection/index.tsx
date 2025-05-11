import { Sections } from "@/types";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import EduItem from "@/components/MainSection/EducationSection/EduItem";

export default function EducationSection() {
  return (
    <Box id={Sections.EDUCATION} component="section" width="100%" pt={10}>
      <Typography variant="h2">{Sections.EDUCATION}.</Typography>
      <Divider orientation="horizontal" sx={{ mt: 1, mb: 3 }} />
      <EduItem />
    </Box>
  );
}
