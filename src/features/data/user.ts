import type { User } from "../types/user";

export const USER: User = {
  id: "1",
  name: "Risqi Japana",
  email: "Kx9m9@example.com",
  avatarUrl: "...",
  position: "Information System Student | Junior Web Developer",
  address: "South Tangerang, Indonesia",

  personal: {
    about: {
      title: "About Me",
      content:
        "7th-semester Information Systems student focused on web development using React and Laravel, with hands-on experience in modern stack. Collaborative, motivated, and ready to contribute in a professional setting",
    },
    techStack: [
      { label: "Laravel", url: "https://api.iconify.design/devicon:laravel.svg", icon: "react" },
      { label: "React Js", url: "https://api.iconify.design/devicon:react.svg", icon: "laravel" },
      { label: "Next Js", url: "https://api.iconify.design/devicon:nextjs.svg", icon: "laravel" },
      { label: "Typescript", url: "https://api.iconify.design/devicon:typescript.svg", icon: "laravel" },
      { label: "Tailwind", url: "https://api.iconify.design/devicon:tailwindcss.svg", icon: "laravel" },
      { label: "Postgresql", url: "https://api.iconify.design/devicon:postgresql.svg", icon: "laravel" },
      { label: "Mysql", url: "https://api.iconify.design/devicon:mysql-wordmark.svg", icon: "laravel" },
      { label: "Supabase", url: "https://api.iconify.design/devicon:supabase.svg", icon: "laravel" },
      { label: "Netlify", url: "https://api.iconify.design/devicon:netlify-wordmark.svg", icon: "laravel" },
    ],
    medsos: [
      {
        id:"email",
        title: "jobsrisqi@gmail.com",
        label: "see my email",
        url: "",
        icon: "#",
      },
      {
        id:"linkedin",
        title: "linkedin.com/in/risqijapana/",
        label: "see my linkedin",
        url: "https://www.linkedin.com/in/risqijapana/",
        icon: "#",
      },
      {
        id:"tiktok",
        title: "tiktok.com/codeku",
        label: "see my tiktok",
        url: "https://www.tiktok.com/@jokiwebmu?_r=1&_t=ZS-92QjOpfrGaL",
        icon: "#",
      },
      {
        id:"github",
        title: "github.com/Anotherrizz",
        label: "see my github",
        url: "https://github.com/AnotherRizz",
        icon: "#",
      },
    
    ],
  },

  education: [
    {
      name: "MSIB Study Independent Fullstack Web Reactjs & Go",
      institution: "MSIB Batch 7 x Ruangguru",
      startYear: "Sep 2024",
      endYear: "Dec 2024",
      url: "https://ruangguru.com/",
      avatar: "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/0d2a5721df67c9fa950d6278380f3b56.jpg",
    },
    {
      name: "Bachelor of Information System",
      institution: "Universitas Bina Sarana Informatika",
      startYear: "2022",
      endYear: "present",
      url: "https://bsi.ac.id/",
      avatar: "/images/logo_ubsi.png",
    },
  ],
  currentEducation: {
    name: "Bachelor of Information System",
    institution: "Universitas Bina Sarana Informatika",
    startYear: "2022",
    endYear: "present",
    url: "https://bsi.ac.id/",
    avatar: "",
  },
};
