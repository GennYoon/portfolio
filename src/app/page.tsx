import AboutMeSection from "./section/about-me";
import ContractSection from "./section/contract";
import ProjectSection from "./section/project";
import SkillSection from "./section/skill";

import HeroWidget from "@/components/widget/hero";

export default function Home() {
  return (
    <main className="min-w[320px] me-auto ms-auto w-full px-4 py-14 sm:min-w-[470px] md:max-w-[1024px] lg:max-w-[1284px]">
      <HeroWidget />
      <AboutMeSection />
      <ProjectSection />
      <SkillSection />
      <ContractSection />
    </main>
  );
}
