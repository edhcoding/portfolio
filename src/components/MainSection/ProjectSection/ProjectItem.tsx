import type { ProjectItemType } from "@/types";

import { useState, useRef } from "react";

import RatioBox from "@/components/common/RatioBox";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ArrowOutward from "@mui/icons-material/ArrowOutward";
import ExpandedProjectItem from "@/components/MainSection/ProjectSection/ExpandedProjectItem";

export default function ProjectItem({
  isMobile,
  ...props
}: {
  isMobile: boolean;
} & ProjectItemType) {
  const [open, setOpen] = useState<boolean>(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const clientRect = itemRef.current?.getClientRects()[0];

  return (
    <Grid size={isMobile ? 12 : 6}>
      <ExpandedProjectItem
        open={open}
        clientRect={clientRect}
        onClose={() => setOpen(false)}
        {...props}
      />
      <Box ref={itemRef}>
        <RatioBox ratio={12 / 5}>
          <Box
            onClick={() => setOpen(true)}
            width="100%"
            height="100%"
            borderRadius="20px"
            overflow="hidden"
            sx={{
              cursor: "pointer",
              "&:hover img": {
                boxShadow: "0 0 10px 4px rgba(0,0,0,0.1)",
                filter: "blur(2px)",
                opacity: 0.2,
              },
              "&:hover .overlay": {
                opacity: 1,
              },
            }}
          >
            <img
              src={props.image}
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
            <Box
              className="overlay"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                opacity: 0,
                transition: "opacity 0.2s ease-in-out",
              }}
            >
              <Typography variant="h3">{props.title}</Typography>
              <ArrowOutward fontSize="large" />
            </Box>
          </Box>
        </RatioBox>
      </Box>
    </Grid>
  );
}
