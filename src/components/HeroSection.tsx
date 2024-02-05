import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { TypeAnimation } from "react-type-animation";
import gennyoon from "../assets/gennyoon.jpg";

export default function HeroSection() {
  return (
    <div className="flex justify-between mt-20 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Hello, I'm
        </h1>
        <h1 className="text-3xl font-bold">
          <TypeAnimation
            sequence={[
              "GennYoon",
              1000,
              "Web Developer",
              1000,
              "Server Developer",
              1000,
              "Mobile Developer",
              1000,
              "UI/UX Planner",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </div>
      <div>
        <Avatar>
          <AvatarImage
            className="w-20 h-20 rounded-full"
            src={gennyoon}
            alt="avatar"
          />
          <AvatarFallback />
        </Avatar>
      </div>
    </div>
  );
}
