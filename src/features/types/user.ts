import type { Personal } from "./personal";

export type Education = {
  name: string;
  institution: string;
  startYear: string;
  endYear: string;
  url: string;
  avatar: string;
};


export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  position: string;
  address: string;

  personal: Personal; // 👈 gabungan di sini

  education: Education[];
  currentEducation: Education | null;
};
