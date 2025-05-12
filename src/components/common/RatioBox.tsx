import { Box, type BoxProps } from "@mui/material";
import { type ReactNode } from "react";

export interface Props {
  ratio?: number; // 가로/세로 비율 ex) 1/1, 16/9, ...
  children?: ReactNode;
}

function RatioBox({ ratio = 1, children, ...boxProps }: Props & BoxProps) {
  return (
    <Box
      width="100%"
      position="relative"
      pt={`calc(100% / (${ratio}))`}
      sx={{
        "> *": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        },
        ...boxProps.sx,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
}

export default RatioBox;
