import { FontWeightValues } from "@/types/styles";
import type { SxProps } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { MoreHoriz } from "@mui/icons-material";

import { memo, useMemo } from "react";

interface NavBarContentProps {
  isMobile: boolean;
  openNavigator?: () => void;
  startedScroll: boolean;
}

const NavBarContent = ({
  isMobile,
  openNavigator,
  startedScroll,
}: NavBarContentProps) => {
  const typoStyles: SxProps = useMemo(
    () => ({
      color: startedScroll ? "primary.dark" : "primary.contrastText",
      fontSize: isMobile ? 18 : 22,
      fontWeight: FontWeightValues.BOLD,
    }),
    [isMobile, startedScroll]
  );

  const icBtnStyles: SxProps = useMemo(
    () => ({
      opacity: startedScroll ? 1 : 0.7,
    }),
    [startedScroll]
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: isMobile ? 50 : 60,
        px: 3,
      }}
    >
      <Typography sx={typoStyles}>Portfolio</Typography>
      <IconButton onClick={openNavigator} disabled={!startedScroll}>
        <MoreHoriz sx={icBtnStyles} />
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={typoStyles}>by.</Typography>
        <img
          src="images/memoji.webp"
          alt="미모지"
          style={{ width: "40px", marginTop: "2px", marginRight: "-8px" }}
        />
      </Box>
    </Box>
  );
};

export default memo(NavBarContent);
