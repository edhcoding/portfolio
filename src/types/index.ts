export type SectionsType = (typeof Sections)[keyof typeof Sections];

export const Sections = {
  INTRO: "Intro",
  ABOUT: "About",
  EDUCATION: "Education",
  EXPERIENCE: "Experience",
  PROJECTS: "Projects",
  CONTACTS: "Contacts",
} as const;

export type SkillItemType = {
  name: string;
  rating: number;
  image: string;
  description?: string[];
  language?: string;
  code?: string;
};

export interface EduItemProps {
  title: string;
  logoSrc: string;
  descs: string[];
}

export type DetailType = {
  content: string;
  type: "subtitle" | "text";
};

export type ProjectItemType = {
  title: string;
  description: string;
  details: DetailType[];
  image: string;
  link?: string;
  skills: string[];
  cateTag?: string;
  isMobile?: boolean;
};
