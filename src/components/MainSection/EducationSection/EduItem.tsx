import type { EduItemProps } from "@/types";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import TextWithDot from "@/components/common/TextWithDot";
import { FontWeightValues } from "@/types/styles";
import { educationData } from "@/data/educationData";

export default function EduItem() {
  const { title, logoSrc, descs } = educationData as EduItemProps;

  return (
    <Grid container direction="column" mb={5}>
      <Box display="flex" alignItems="center" mb={2}>
        <img
          src={logoSrc}
          alt={title}
          style={{
            height: "44px",
            marginRight: "8px",
          }}
        />
        <Typography variant="h3" flex={1}>
          {title}
        </Typography>
      </Box>
      <Grid size={{ xs: 8 }}>
        {descs.map((desc, idx) => (
          <TextWithDot
            key={`${title}-desc-${idx}`}
            variant="body1"
            lineHeight={2}
            fontWeight={FontWeightValues.SEMI_BOLD}
          >
            {desc}
          </TextWithDot>
        ))}
      </Grid>
    </Grid>
  );
}
