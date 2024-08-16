import AboutMeSection from "./section/about-me";
import ContractSection from "./section/contract";
import HeroSeciton from "./section/hero";
import ProjectSection from "./section/project";
import SkillSection from "./section/skill";

export default function Home() {
  return (
    <main className="min-w[320px] me-auto ms-auto px-4 py-14 sm:w-full sm:min-w-[470px] md:w-[768px]">
      <HeroSeciton />
      <AboutMeSection />
      <ProjectSection />
      <SkillSection />
      <ContractSection />
    </main>
  );
}
