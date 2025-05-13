import type { DetailType } from "@/types";
import { FontWeightValues } from "@/types/styles";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TextWithDot from "@/components/common/TextWithDot";

export interface ExpItemType {
  title: string;
  subtitle: string[];
  logoSrc: string;
  descs: DetailType[];
}

export default function ExpItem(
  props: ExpItemType & {
    isMobile: boolean;
  }
) {
  const { title, subtitle, logoSrc, descs, isMobile } = props;

  return (
    <Grid container={!isMobile} mb={10}>
      <Grid size={5} mb={2}>
        <Box display="flex" alignItems="center">
          <img
            src={logoSrc}
            alt={title}
            style={{
              width: "30px",
              marginRight: "8px",
            }}
          />
          <Typography variant="h3" flex={1}>
            {title}
          </Typography>
        </Box>
        {subtitle.map((sub, idx) => {
          return (
            <Typography
              key={`${sub}-${idx}`}
              variant="body2"
              lineHeight={1.8}
              color="text.primary"
              fontWeight={FontWeightValues.SEMI_BOLD}
            >
              {sub}
            </Typography>
          );
        })}
      </Grid>
      <Grid size={7}>
        {descs.map((desc, idx) => {
          if (desc.type === "text") {
            return (
              <TextWithDot
                key={`project-${title}-detail-${idx}`}
                variant="body1"
                color="text.primary"
                fontWeight={FontWeightValues.SEMI_BOLD}
              >
                {desc.content}
              </TextWithDot>
            );
          }
          return (
            <Typography
              key={`project-${title}-detail-${idx}`}
              my={1}
              variant="body1"
              color="text.primary"
              fontSize={18}
              fontWeight={FontWeightValues.BOLD}
            >
              {desc.content}
            </Typography>
          );
        })}
      </Grid>
    </Grid>
  );
}
