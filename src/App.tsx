import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";

import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import MyProjectSection from "./components/MyProjectSection";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="h-[1000px] ms-auto me-auto px-4 pt-14 md:w-[572px] sm:w-full">
        <HeroSection />
        <AboutMeSection />
        <MyProjectSection />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
