import type { BoxProps, SxProps, Theme } from "@mui/material";

import useDeviceQuery from "@/hooks/useDeviceQuery";

import { useMemo } from "react";

import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";

type Props = {
  bgImage?: string;
  bgcolor?: string;
  index?: number;
} & BoxProps;

export default function Card({
  children,
  bgImage,
  index = 0,
  bgcolor = "#F5F5F5",
  onClick,
  ...boxProps
}: Props) {
  const { isMobile } = useDeviceQuery();

  const cardStyles: SxProps<Theme> = useMemo(
    () => ({
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: "20vh",
      bgcolor,
      borderRadius: "20px",
      overflow: "hidden",
      p: isMobile ? 2 : 3,
      cursor: onClick ? "pointer" : "auto",
      backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      backgroundSize: bgImage ? "cover" : undefined,
      backgroundPosition: bgImage ? "center" : undefined,
      ...boxProps.sx,
    }),
    [bgImage, bgcolor, onClick, boxProps.sx, isMobile]
  );

  return (
    <Zoom
      in
      style={{
        transitionDuration: "400ms",
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <Box {...boxProps} sx={cardStyles} onClick={onClick}>
        {children}
      </Box>
    </Zoom>
  );
}
