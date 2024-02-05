import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";

import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import MyProjectSection from "./components/MyProjectSection";

// import type { Database } from "../types/supabase";
//
// import { createClient } from "@supabase/supabase-js";
//
// const supabaseUrl = "https://udakkdpxfzwyalqyjmiz.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkYWtrZHB4Znp3eWFscXlqbWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNTA4ODIsImV4cCI6MjAyMjcyNjg4Mn0.J1EPBGjRpl5BO3izDTJ7yxcATM4_phJc5qz4NEweqec";
// const supabase = createClient<Database>(supabaseUrl, supabaseKey);

function App() {
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
