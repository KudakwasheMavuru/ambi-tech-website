import { projects } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-ambi">
        <SectionHeading
          eyebrow={projects.eyebrow}
          heading={projects.heading}
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 flex flex-col gap-24 sm:mt-20 sm:gap-28">
          {projects.items.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
