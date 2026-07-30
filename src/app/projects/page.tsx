import type { Metadata } from "next";
import { projects, siteMeta } from "@/content/site";
import { ProjectCard } from "@/components/sections/project-card";
import { PhotoHeader } from "@/components/ui/photo-header";

export const metadata: Metadata = {
  title: `Projects — ${siteMeta.name}`,
  description: projects.heading,
};

export default function ProjectsPage() {
  return (
    <>
      <PhotoHeader
        image="/images/kigali-skyline-photo.jpg"
        eyebrow={projects.eyebrow}
        heading={projects.heading}
      />
      <section className="relative py-24 sm:py-32">
        <div className="container-ambi">
          <div className="flex flex-col gap-24 sm:gap-28">
            {projects.items.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
