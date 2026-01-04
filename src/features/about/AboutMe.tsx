import { USER } from "../data/user";
import {
  Accordion,
  AccordionContent,
  AccordionContentMotion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SimpleTooltip } from "@/src/components/ui/tooltip";

export const AboutMe = () => {
  const { about, techStack, medsos } = USER.personal;

  return (
    <section className="border-b-2 border-dashed py-7">
      {/* MAIN ACCORDION */}
      <Accordion type="single" collapsible defaultValue="personal">
        <AccordionItem value="personal">
          <AccordionTrigger className="text-xl">
            Personal Information
          </AccordionTrigger>

          <AccordionContent>
            {/* CHILD ACCORDION */}
            <Accordion
              type="multiple"
              defaultValue={["about", "tech", "website"]}
              className="pl-4">
              {/* ABOUT */}
              <AccordionItem value="about">
                <AccordionTrigger>{about.title}</AccordionTrigger>
                <AccordionContentMotion>
                  <p>{about.content}</p>
                </AccordionContentMotion>
              </AccordionItem>

              {/* TECH STACK */}
              <AccordionItem value="tech">
                <AccordionTrigger>Tech Stack</AccordionTrigger>
                <AccordionContentMotion>
                  <ul className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <SimpleTooltip content={tech.label}>
                        <div className="rounded-xl p-2 bg-zinc-100 dark:bg-zinc-900">
                          <img
                            src={tech.url}
                            width={32}
                            height={32}
                            alt="Anotherrizz"
                          />
                        </div>
                      </SimpleTooltip>
                    ))}
                  </ul>
                </AccordionContentMotion>
              </AccordionItem>

              {/* WEBSITE / SOCIAL */}
              <AccordionItem value="website">
                <AccordionTrigger>Social Media</AccordionTrigger>
                <AccordionContentMotion>
                  <ul className="flex gap-2 flex-wrap">
                    {medsos.map((site) => (
                      <SimpleTooltip content={site.label} >
                        <div className="rounded-xl p-2 w-fit bg-zinc-100 dark:bg-zinc-900">
                          <a
                            href={site.url || "#"}
                            target="_blank"
                            className="text-sm underline">
                            {site.icon}{site.title}
                          </a>
                        </div>
                      </SimpleTooltip>
                    ))}
                  </ul>
                </AccordionContentMotion>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
