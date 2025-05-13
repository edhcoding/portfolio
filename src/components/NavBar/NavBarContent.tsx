import { FontWeightValues } from "@/types/styles";
import type { SxProps } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { MoreHoriz } from "@mui/icons-material";

import { memo, useMemo } from "react";

interface Props {
  isMobile: boolean;
  openNavigator?: () => void;
  startedScroll: boolean;
}

const NavBarContent = ({ isMobile, openNavigator, startedScroll }: Props) => {
  const typoStyles: SxProps = useMemo(
    () => ({
      color: startedScroll ? "primary.dark" : "primary.contrastText",
      fontSize: isMobile ? 18 : 22,
      fontWeight: FontWeightValues.BOLD,
    }),
    [isMobile, startedScroll]
  );

  return (
    <Box
      px={3}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height={isMobile ? 50 : 60}
    >
      <Typography sx={typoStyles}>Portfolio</Typography>
      <IconButton onClick={openNavigator} disabled={!startedScroll}>
        <MoreHoriz />
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
