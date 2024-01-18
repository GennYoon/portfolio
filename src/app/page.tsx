import AboutMeSection from "./section/about-me";
import ContractSection from "./section/contract";
import HeroSeciton from "./section/hero";
import ProjectSection from "./section/project";
import SkillSection from "./section/skill";

import ThemeProvider from "@/components/provider/theme-provider";

import Footer from "@/components/widget/footer";
import Header from "@/components/widget/header";

import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Header />
      <main className="min-w[320px] me-auto ms-auto px-4 py-14 sm:w-full sm:min-w-[470px] md:w-[768px]">
        <HeroSeciton />
        <AboutMeSection />
        <ProjectSection />
        <SkillSection />
        <ContractSection />
      </main>
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}
