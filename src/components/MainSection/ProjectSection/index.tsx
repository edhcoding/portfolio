import { projectsData } from "@/data/projectsData";
import { Sections } from "@/types";

import { useMemo, useState } from "react";

import ProjectItem from "@/components/MainSection/ProjectSection/ProjectItem";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ProjectFilter from "@/components/MainSection/ProjectSection/ProjectFilter";
import useDeviceQuery from "@/hooks/useDeviceQuery";

export default function ProjectSection() {
  const { isMobile } = useDeviceQuery();
  const [selectedTag, setSelectedTag] = useState<string>("전체");

  const filteredProjects = useMemo(() => {
    if (selectedTag === "전체") return projectsData;

    return projectsData.filter((project) => project.cateTag === selectedTag);
  }, [selectedTag]);

  return (
    <Box id={Sections.PROJECTS} pt={15}>
      <Typography variant="h2">{Sections.PROJECTS}.</Typography>
      <Divider orientation="horizontal" sx={{ mt: 1, mb: 3 }} />
      <ProjectFilter
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        projectsData={projectsData}
      />
      <Grid container mt={2} spacing={2} size={12} alignItems="center">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.title} isMobile={isMobile} {...project} />
        ))}
      </Grid>
    </Box>
  );
}
