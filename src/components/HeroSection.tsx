import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { TypeAnimation } from "react-type-animation";
import avator from "../assets/avator.jpg";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-between mt-20">
        <div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I'm
          </h1>
          <h1 className="text-2xl font-bold">
            <TypeAnimation
              sequence={[
                "GennYoon",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "DevOps Engineer",
                1000,
                "App Developer",
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
              src={avator}
              alt="avatar"
            />
            <AvatarFallback />
          </Avatar>
        </div>
      </div>
      <div className="h-16" />
    </>
  );
}
