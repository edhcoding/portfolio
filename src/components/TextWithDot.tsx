import type { TypographyProps } from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TextWithDot({ ...typoProps }: TypographyProps) {
  return (
    <Box display="flex">
      <Typography {...typoProps}>•</Typography>
      <Typography {...typoProps} flex={1} ml={1} sx={{ ...typoProps.sx }}>
        {typoProps.children}
      </Typography>
    </Box>
  );
}
