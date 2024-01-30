import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import gennyoon from "./assets/gennyoon.jpg";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="h-[1000px] ms-auto me-auto px-4 pt-14 md:w-[572px] sm:w-full">
        <p className="pt-20">안녕하세요. 윤원열(GennYoon)입니다.</p>

        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Yoon WonYoul</h1>
            <p>Fullstack Developer</p>
          </div>
          <div>
            <Avatar>
              <AvatarImage
                className="w-20 h-20 rounded-full"
                src={gennyoon}
                alt="avatar"
              />
              <AvatarFallback>Error</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Work */}
        <div role="work" className="mb-8">
          <h3 className="text-[20px] font-bold underline">Work</h3>
          <p className="break-words">내용</p>
        </div>

        {/* bio */}
        <div role="bio" className="mb-8">
          <h3 className="text-[20px] font-bold underline">Bio</h3>
          <div className="pl-16 -indent-16 break-words">
            <span className="mr-4">
              <strong>1983</strong>
            </span>
            Born in Gyeonggi-do Anyang, South Korea
          </div>
          <div className="pl-16 -indent-16 break-words">
            <span className="mr-4">
              <strong>1983</strong>
            </span>
            내용
          </div>
          <div className="pl-16 -indent-16 break-words">
            <span className="mr-4">
              <strong>1983</strong>
            </span>
            내용
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
