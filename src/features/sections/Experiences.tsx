import { EXPERIENCES } from "../data/experiences";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SimpleTooltip } from "@/src/components/ui/tooltip";

export const Experiences = () => {
  return (
    <section className="border-b-2 border-dashed py-7">
      <Accordion type="single" collapsible defaultValue="experience">
        <AccordionItem value="experience">
          <AccordionTrigger className="text-xl flex gap-1 mb-2">
            Experiences
          </AccordionTrigger>

          <AccordionContent>
            <ul className="space-y-6">
              {EXPERIENCES.map((exp, index) => (
                <li
                  key={index}
                  className="rounded-xl border p-4 space-y-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-medium leading-tight">
                        {exp.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {exp.company} - <small>{exp.type}</small>
                      </p>
                    </div>

                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {exp.startYear} – {exp.endYear}
                    </span>
                  </div>

                  {/* Job Desk */}
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {exp.jobDesk.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  {exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.techStack.map((tech, i) => (
                        <SimpleTooltip key={i} content={tech.label}>
                          <div className="rounded-lg border p-2 bg-zinc-100 dark:bg-zinc-900">
                            <img
                              src={tech.url}
                              alt={tech.label}
                              className="h-5 w-5"
                            />
                          </div>
                        </SimpleTooltip>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
