import { ProfileImage } from "./components/ProfileImage";
import { USER } from "../data/user";
import { CuriculumVitae } from "./components/CuriculumVitae";
import { MapIcon, MapPin } from "lucide-react";

export const CardProfile = () => {
  return (
    <div className="p-4 bg-white dark:bg-background border-b-2 border-dashed flex my-3 gap-4 rounded-lg w-full ">
      <ProfileImage />
      <section className=" flex flex-col md:flex-row md:justify-between md:items-center w-full ">
        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-3xl font-semibold mb-2 flex items-center gap-2">
            {USER.name}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path
                fill="#0926ff"
                d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"
              />
            </svg>
          </h2>
          <p className="mb-2">
            <span className="text-xs md:text-sm">{USER.position}</span>
          </p>
          <h3 className="mb-2 flex items-center gap-1">
            <MapPin className=" w-5" />
            <span className="text-xs">{USER.address}</span>
          </h3>
        </div>

        <CuriculumVitae />
      </section>
    </div>
  );
};
