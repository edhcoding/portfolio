import { FontWeightValues } from "@/types/styles";
import { Sections } from "@/types";
import type { SxProps } from "@mui/material/styles";

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

interface NavBarProps {
  containerRef: RefObject<HTMLDivElement>;
}

export default function NavBar({ containerRef }: NavBarProps) {
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
              sx={{
                fontSize: isMobile ? 16 : 20,
                fontWeight: FontWeightValues.MEDIUM,
              }}
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
      opacity: startedScroll ? 1 : 0.7,
    }),
    [startedScroll, isMobile]
  );

  useEffect(() => {
    if (!startedScroll && isOpen) setIsOpen(false);
  }, [startedScroll, isOpen]);

  return (
    <Box component="nav">
      {/* ClickAwayListener - 컴포넌트 외부를 클릭했을 때 특정 동작을 수행하고 싶을 때 사용 (하나의 자식 요소만 허용) */}
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={navBarStyles}>
          <NavBarContent
            isMobile={isMobile}
            openNavigator={openNavigator}
            startedScroll={startedScroll}
          />
          {/* Collapse - 요소를 부드럽게 펼치고 접는 애니메이션을 제공하는 컴포넌트 (기본 수직, react-transition-group 내부적으로 사용) */}
          <Collapse in={isOpen}>
            <Box px={3}>
              <Divider />
            </Box>
            <Box width="100%">
              <List sx={{ py: 2 }}>{listItems}</List>
            </Box>
          </Collapse>
        </Box>
      </ClickAwayListener>
    </Box>
  );
}
