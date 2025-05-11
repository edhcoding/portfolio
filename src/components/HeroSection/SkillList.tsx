import type { SxProps, Theme } from "@mui/material/styles";
import type { SkillItemType } from "@/types";
import { FontWeightValues } from "@/types/styles";
import { skillsData } from "@/data/skillsData";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import { useMemo, useState } from "react";
import useDeviceQuery from "@/hooks/useDeviceQuery";

export default function SkillList() {
  const { isMobile } = useDeviceQuery();
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

  return (
    <Box overflow="hidden" borderRadius="20px" position="relative">
      <Box sx={scrollAnimation}>
        {[...skillsData, ...skillsData].map((skill, idx) => (
          <Box
            key={skill.name + idx}
            sx={cardStyles}
            onClick={() => setSelectedSkill(skill)}
          >
            <img src={skill.image} height={40} alt={skill.name} />
          </Box>
        ))}
      </Box>
      {selectedSkill && !isMobile && (
        <Dialog
          open={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
          hideBackdrop
          slots={{
            transition: Zoom,
          }}
          sx={{
            padding: 0,
            "& .MuiPaper-root": {
              borderRadius: "20px",
              padding: "40px",
            },
            "& .MuiDialogTitle-root": {
              padding: 0,
              paddingBottom: 3,
            },
          }}
        >
          <DialogTitle width="100%" maxWidth="550px" padding={0}>
            <Box display="flex" alignItems="center" gap={2} height="60px">
              <img
                height={70}
                src={selectedSkill.image}
                alt={selectedSkill.name}
              />
              <Box display="flex" flexDirection="column">
                <Typography
                  fontSize={24}
                  color="primary.dark"
                  fontWeight={FontWeightValues.SEMI_BOLD}
                >
                  {selectedSkill.name}
                </Typography>
                <Grid container width="100%" spacing={0.5} flexWrap="nowrap">
                  {[...Array(5)].map((_, i) => (
                    <Grid key={`${selectedSkill.name}-star-${i}`} width="50px">
                      <LinearProgress
                        color="primary"
                        variant="determinate"
                        value={selectedSkill.rating > i ? 100 : 0}
                        sx={{
                          mt: 1,
                          height: 12,
                          borderRadius: 0,
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent
            sx={{
              width: "100%",
              maxWidth: "550px",
              padding: 0,
            }}
          >
            {selectedSkill.description?.split("\n").map((line, idx) => (
              <Typography
                key={idx}
                variant="body2"
                fontSize={18}
                lineHeight={1.7}
                color="primary.dark"
                fontWeight={FontWeightValues.MEDIUM}
              >
                {line}
              </Typography>
            ))}
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
}
