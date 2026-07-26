import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <About />
      <Services />
      <Projects />
      <Education />
      <WhyChooseUs />
      <Testimonials />
      <FinalCta />
    </>
  );
}
