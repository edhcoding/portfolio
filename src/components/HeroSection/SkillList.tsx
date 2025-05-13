import type { SxProps, Theme } from "@mui/material/styles";
import type { SkillItemType } from "@/types";
import { skillsData } from "@/data/skillsData";

import Box from "@mui/material/Box";

import { useMemo, useState } from "react";
import useDeviceQuery from "@/hooks/useDeviceQuery";
import ExpandedSkillItem from "@/components/HeroSection/ExpandedSkillItem";

export default function SkillList() {
  const { isMobile } = useDeviceQuery();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillItemType | null>(
    null
  );

  const scrollAnimation: SxProps<Theme> = {
    "@keyframes scroll": {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
    display: "flex",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
    gap: 2,
    animation: "scroll 15s linear infinite",
    width: "fit-content",
    ":hover": { animationPlayState: "paused" },
  };

  const cardStyles: SxProps<Theme> = useMemo(
    () => ({
      position: "relative",
      width: "100%",
      height: "100%",
      bgcolor: "#F5F5F5",
      borderRadius: "20px",
      overflow: "hidden",
      p: isMobile ? 2 : 3,
      cursor: "pointer",
      aspectRatio: "5 / 3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: 5,
      whiteSpace: "normal",
    }),
    [isMobile]
  );

  const handleSkillClick = (skill: SkillItemType) => {
    setSelectedSkill(skill);
    setOpen(true);
  };

  return (
    <Box overflow="hidden" borderRadius="20px" position="relative">
      <ExpandedSkillItem
        open={open}
        isMobile={isMobile}
        onClose={() => setOpen(false)}
        {...selectedSkill}
      />
      <Box sx={scrollAnimation}>
        {[...skillsData, ...skillsData].map((skill, idx) => (
          <Box
            key={skill.name + idx}
            sx={cardStyles}
            onClick={() => handleSkillClick(skill)}
          >
            <img src={skill.image} height={40} alt={skill.name} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
