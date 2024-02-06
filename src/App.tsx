import { useRef } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";

import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import MyProjectSection from "./components/MyProjectSection";
import { injectSpeedInsights } from "@vercel/speed-insights";

import { motion, useInView } from "framer-motion";

function App() {
  injectSpeedInsights();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="ms-auto me-auto px-4 pt-14 min-w-[320px] md:w-[768px] sm:w-full sm:min-w-[470px]">
        <HeroSection />
        <AboutMeSection />
        <MyProjectSection />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
