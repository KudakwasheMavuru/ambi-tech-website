import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Statement } from "@/components/sections/statement";
import { ProjectsTeaser } from "@/components/sections/projects-teaser";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Collaborate } from "@/components/sections/collaborate";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <About />
      <Services />
      <Statement />
      <ProjectsTeaser />
      <Collaborate />
      <Testimonials />
      <FinalCta />
    </>
  );
}
