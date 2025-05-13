import { ProjectItemType } from "@/types";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Dispatch, SetStateAction, useMemo } from "react";

interface Props {
  selectedTag: string;
  setSelectedTag: Dispatch<SetStateAction<string>>;
  projectsData: ProjectItemType[];
}

export default function ProjectFilter({
  selectedTag,
  setSelectedTag,
  projectsData,
}: Props) {
  const cateTags = useMemo(() => {
    const tags = projectsData
      .map((project) => project.cateTag)
      .filter((tag): tag is string => tag !== undefined);

    return [...new Set(tags)];
  }, [projectsData]);

  return (
    <Box display="flex" gap={1} overflow="auto">
      {["전체", ...cateTags].map((tag) => (
        <Chip
          key={`tag-${tag}`}
          clickable
          label={tag}
          color="warning"
          onClick={() => setSelectedTag(tag)}
          variant={selectedTag === tag ? "filled" : "outlined"}
        />
      ))}
    </Box>
  );
}
