import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex h-full items-center justify-center">
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
