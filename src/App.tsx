import ReactGA from "react-ga";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";

import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import MyProjectSection from "./components/MyProjectSection";
import { injectSpeedInsights } from "@vercel/speed-insights";
import ContractSection from "./components/ContractSection";
import MySkill from "./components/MySkill";

if (import.meta.env.MODE !== "development") {
  const gaTrackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
  ReactGA.initialize(gaTrackingId);
}

function App() {
  injectSpeedInsights();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
      <Header />
      <main className="ms-auto me-auto px-4 py-14 min-w-[320px] md:w-[768px] sm:w-full sm:min-w-[470px]">
        <HeroSection />
        <AboutMeSection />
        <MyProjectSection />
        <MySkill />
        <ContractSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
