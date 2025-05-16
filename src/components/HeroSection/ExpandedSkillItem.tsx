import type { SkillItemType } from "@/types";
import { FontWeightValues } from "@/types/styles";

import { useEffect, useState } from "react";

import TextWithDot from "@/components/common/TextWithDot";

import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";

import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface Props {
  open?: boolean;
  onClose?: () => void;
  clientRect?: DOMRect;
  isMobile?: boolean;
}

export default function ExpandedSkillItem({
  open,
  onClose,
  isMobile,
  ...props
}: Props) {
  const { name, image, description, rating } = props as SkillItemType;

  const [openBG, setOpenBG] = useState<boolean>(false);
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;

    if (open) {
      setOpenBG(true);
      timeout1 = setTimeout(() => {
        setOpenInfo(true);
      }, 500);
    } else {
      setOpenInfo(false);
      timeout2 = setTimeout(() => {
        setOpenBG(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [open]);

  if (!openBG && !openInfo) return null;

  return (
    <>
      <Zoom in={openBG} timeout={{ enter: 400, exit: 400 }}>
        <Box
          onClick={onClose}
          position="fixed"
          width="100vw"
          height="100vh"
          top={0}
          left={0}
          bgcolor="rgba(255,255,255,0.5)"
          zIndex={2}
          sx={{
            backdropFilter: "blur(10px)",
          }}
        />
      </Zoom>

      <Box
        zIndex={3}
        top="50vh"
        left="50vw"
        width={isMobile ? "100%" : "600px"}
        px={isMobile ? 2 : 4}
        position="fixed"
        sx={{
          transform: "translateX(-50%) translateY(-50%)",
          transition: "all cubic-bezier(0, 0, 0.4, 1.0) 0.3s",
        }}
      >
        <Divider orientation="horizontal" sx={{ mb: 3 }}>
          SKILL
        </Divider>
        <Box height="100px" display="flex" gap={2} alignItems="flex-start">
          <img height={isMobile ? 80 : 100} src={image} alt={name} />
          <Box display="flex" flexDirection="column">
            <Typography variant="h2" color="success">
              {name}
            </Typography>
            <Rating
              value={rating}
              readOnly
              icon={<GradeIcon fontSize="large" />}
              emptyIcon={<StarBorderIcon fontSize="large" />}
              sx={{
                "& .MuiRating-icon": {
                  color: "#f50057",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                },
              }}
            />
          </Box>
        </Box>
        <Collapse in={openInfo}>
          <Divider orientation="horizontal" sx={{ mt: 3, mb: 1 }}>
            DESC
          </Divider>
          <Box py={1}>
            {description?.map((desc, idx) => (
              <TextWithDot
                key={`skill-desc-${idx}`}
                color="success"
                fontSize={18}
                fontWeight={FontWeightValues.MEDIUM}
              >
                {desc}
              </TextWithDot>
            ))}
          </Box>
        </Collapse>
      </Box>
    </>
  );
}
