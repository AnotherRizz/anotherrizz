import { USER } from "../data/user";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SimpleTooltip } from "@/src/components/ui/tooltip";

export const CourseAndEducation = () => {
  const education = USER.education;

  return (
    <section className="border-b-2 border-dashed py-7">
      <Accordion type="single" collapsible defaultValue="education">
        <AccordionItem value="education">
          <AccordionTrigger className="text-xl flex gap-1 mb-2">
            Education & Course
          </AccordionTrigger>

          <AccordionContent>
            <ul className="space-y-4">
              {education.map((edu, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-xl border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
                  {/* Avatar */}
                  <SimpleTooltip content={edu.institution}>
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0">
                      <img
                        src={edu.avatar}
                        alt={edu.institution}
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                    </a>
                  </SimpleTooltip>

                  {/* Info */}
                  <div className="flex flex-col gap-1">
                    <h4 className="font-medium leading-tight">{edu.name}</h4>

                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>

                    <span className="text-xs text-muted-foreground">
                      {edu.startYear} – {edu.endYear}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
