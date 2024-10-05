import AboutMeSection from "./section/about-me";
import ContractSection from "./section/contract";
import ProjectSection from "./section/project";
import SkillSection from "./section/skill";

import HeroWidget from "@/components/widget/hero";
import SocialWidget from "@/components/widget/social";

export default function Home() {
  return (
    <main className="min-w[320px] me-auto ms-auto space-y-4 px-4 py-14 sm:w-full sm:min-w-[470px] md:w-[768px]">
      <HeroWidget />
      <SocialWidget />
      <AboutMeSection />
      <ProjectSection />
      <SkillSection />
      <ContractSection />
    </main>
  );
}
