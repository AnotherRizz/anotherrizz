import { Navbar } from "../components/navbar";
import { AboutMe } from "../features/about/AboutMe";
import { CourseAndEducation } from "../features/course/CourseAndEducation";

import { CardProfile } from "../features/profile/CardProfile";
import { Experiences } from "../features/sections/Experiences";

export default function Home() {
  return (
    <div className=" max-w-4xl px-4 md:px-1 mx-auto bg-zinc-50  dark:bg-background">
      <Navbar />
      <CardProfile/>
      <AboutMe/>
      <CourseAndEducation/>
      <Experiences/>
    </div>
  );
}
