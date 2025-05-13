import type { SxProps } from "@mui/material/styles";
import { FontWeightValues } from "@/types/styles";
import { Sections } from "@/types";

import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

import { RefObject, useCallback, useEffect, useMemo, useState } from "react";

import useDeviceQuery from "@/hooks/useDeviceQuery";
import useStartedScroll from "@/hooks/useStartedScroll";

import NavBarContent from "@/components/NavBar/NavBarContent";

interface Props {
  containerRef: RefObject<HTMLDivElement>;
}

export default function NavBar({ containerRef }: Props) {
  const { isMobile } = useDeviceQuery();
  const { startedScroll } = useStartedScroll(containerRef);
  const [isOpen, setIsOpen] = useState(false);

  const onClickNavigator = useCallback((section: string) => {
    setIsOpen(false);
    const elem = document.getElementById(section);

    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openNavigator = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickAway = useCallback(() => {
    if (isOpen) setIsOpen(false);
  }, [isOpen]);

  const listItems = useMemo(
    () =>
      Object.values(Sections).map((section) => (
        <ListItem key={section} disablePadding>
          <ListItemButton
            sx={{ mx: 1, borderRadius: 23 }}
            onClick={() => onClickNavigator(section)}
          >
            <Typography
              fontSize={isMobile ? 20 : 24}
              fontWeight={FontWeightValues.MEDIUM}
            >
              {section}
            </Typography>
          </ListItemButton>
        </ListItem>
      )),
    [isMobile, onClickNavigator]
  );

  const navBarStyles: SxProps = useMemo(
    () => ({
      position: "fixed",
      top: startedScroll ? 10 : 0,
      left: startedScroll ? 10 : 0,
      width: startedScroll ? "calc(100vw - 20px)" : "100vw",
      borderRadius: startedScroll ? `${isMobile ? 25 : 30}px` : 0,
      alignItems: "flex-start",
      bgcolor: startedScroll ? "rgba(255,255,255,0.5)" : "none",
      zIndex: 10,
      transition: "all 0.2s ease-in-out",
      boxShadow: startedScroll ? "0px 0px 7px 2px rgba(0,0,0,0.1)" : "none",
      backdropFilter: startedScroll ? "blur(10px)" : "none",
      opacity: 1,
    }),
    [startedScroll, isMobile]
  );

  useEffect(() => {
    if (!startedScroll && isOpen) setIsOpen(false);
  }, [startedScroll, isOpen]);

  return (
    <Box component="nav">
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={navBarStyles}>
          <NavBarContent
            isMobile={isMobile}
            openNavigator={openNavigator}
            startedScroll={startedScroll}
          />
          <Collapse in={isOpen}>
            <Box px={3}>
              <Divider />
            </Box>
            <Box width="100%" color="primary.dark">
              <List sx={{ py: 2 }}>{listItems}</List>
            </Box>
          </Collapse>
        </Box>
      </ClickAwayListener>
    </Box>
  );
}
