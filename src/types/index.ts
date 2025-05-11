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
  description?: string;
  language?: string;
  code?: string;
};