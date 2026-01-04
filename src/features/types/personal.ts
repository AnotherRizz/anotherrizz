export type About = {
  title: string;
  content: string;
};

export type TechStack = {
  label: string;
  url: string;
  icon: string;
};
export type Experience = {
  name: string;
  company: string;
  jobDesk: string[];
  startYear: string;
  endYear: string;
  techStack: TechStack[];
  type: string;
  url: string;
  avatar: string;
};

export type medsos = {
  id: string;
  title: string;
  label: string;
  url: string | undefined;
  icon: string;
};

export type Personal = {
  about: About;
  techStack: TechStack[];
  medsos: medsos[];
};
