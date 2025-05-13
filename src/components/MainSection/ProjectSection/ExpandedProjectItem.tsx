import type { ProjectItemType } from "@/types";
import { FontWeightValues } from "@/types/styles";

import { useEffect, useState } from "react";

import RatioBox from "@/components/common/RatioBox";
import TextWithDot from "@/components/common/TextWithDot";

import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import Link from "@mui/icons-material/Link";
import useDeviceQuery from "@/hooks/useDeviceQuery";

interface Props {
  open?: boolean;
  onClose?: () => void;
  clientRect?: DOMRect;
}

export default function ExpandedProjectItem({
  open,
  onClose,
  clientRect,
  ...props
}: Props) {
  const {
    title,
    description,
    details,
    image,
    link = "",
    skills,
    cateTag = "",
  } = props as ProjectItemType;

  const { isMobile } = useDeviceQuery();
  const [openBG, setOpenBG] = useState<boolean>(false);
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;

    if (open) {
      // 배경 표시 -> 0.5 정보 표시
      setOpenBG(true);
      timeout1 = setTimeout(() => {
        setOpenInfo(true);
      }, 500);
    } else {
      // 정보 숨김 -> 0.5 배경 숨김
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
      {/* 배경 효과 */}
      <Zoom in={openBG} timeout={{ enter: 400, exit: 400 }}>
        <Box
          onClick={onClose}
          position="fixed"
          width="100vw"
          height="100vh"
          top={0}
          left={0}
          bgcolor="rgba(255,255,255,0.9)"
          zIndex={2}
          sx={{
            backdropFilter: "blur(10px)",
          }}
        />
      </Zoom>

      {/* 프로젝트 정보 */}
      <Box
        position="fixed"
        zIndex={3}
        width={clientRect?.width}
        top={openInfo ? "90px" : clientRect?.top}
        left={openInfo ? "50vw" : clientRect?.left}
        sx={{
          transform: openInfo ? "translateX(-50%)" : "none",
          transition: "all cubic-bezier(0, 0, 0.4, 1.0) 0.3s",
        }}
      >
        <RatioBox ratio={12 / 5}>
          <Box
            onClick={onClose}
            width="100%"
            height="100%"
            overflow="hidden"
            borderRadius="20px"
            boxShadow="0 0 10px 4px rgba(0,0,0,0.1)"
            sx={{
              cursor: "pointer",
              transform: "scale(1.005)",
            }}
          >
            <img
              src={image}
              alt="project"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                transition: "all 0.2s ease-in-out",
              }}
            />
          </Box>
        </RatioBox>
        <Collapse in={openInfo}>
          <Box py={2}>
            <Box display="flex" alignItems="center">
              <Typography variant="h3">{title}</Typography>
              <IconButton size="small" href={link} target="_blank">
                <Link
                  htmlColor="#999"
                  fontSize={isMobile ? "medium" : "large"}
                />
              </IconButton>
            </Box>
            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight={FontWeightValues.BOLD}
            >
              {description}
            </Typography>
            <Box display="flex" flexWrap="wrap">
              <Chip
                label={cateTag}
                clickable
                size="small"
                color="warning"
                sx={{ mr: 1, mt: 1 }}
              />
              {skills.map((skill) => {
                return (
                  <Chip
                    key={`${title}-${skill}`}
                    label={skill}
                    clickable
                    size="small"
                    sx={{ mr: 1, mt: 1 }}
                  />
                );
              })}
            </Box>

            <Box
              id={`${title}-details`}
              gap={1}
              mt={2}
              pb={10}
              display="flex"
              maxHeight="45vh"
              flexDirection="column"
              position="relative"
              overflow="auto"
              sx={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            >
              {details.map((detail, idx) => {
                if (detail.type === "text") {
                  return (
                    <TextWithDot
                      key={`project-${title}-detail-${idx}`}
                      variant="body2"
                      color="text.primary"
                    >
                      {detail.content}
                    </TextWithDot>
                  );
                }
                return (
                  <Typography
                    key={`project-${title}-detail-${idx}`}
                    my={1}
                    variant="body2"
                    color="text.primary"
                    fontWeight={FontWeightValues.EXTRA_BOLD}
                  >
                    {detail.content}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}
