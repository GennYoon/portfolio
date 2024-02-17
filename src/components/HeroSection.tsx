import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { TypeAnimation } from "react-type-animation";
import avatar from "../assets/avatar.jpg";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import {
  HomeIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export default function HeroSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const canVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  return (
    <motion.section
      ref={ref}
      variants={canVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="mb-16"
    >
      <div className="flex justify-between mt-12">
        <div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#036CDA] to-[#15F5FD]">
            Hello, I'm
          </h1>
          <h1 className="text-2xl font-bold mb-8">
            <TypeAnimation
              sequence={[
                "FullStack Developer",
                1000,
                "use NeoVim IDE",
                1000,
                "GennYoon",
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
              src={avatar}
              alt="avatar"
            />
            <AvatarFallback />
          </Avatar>
        </div>
      </div>
      <div className="flex gap-1.5 justify-start">
        <Button asChild variant="secondary" size="sm" className="rounded-full">
          <a href="#contract">Contact me here</a>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a href="https://gennyoon.net" target="_blank">
            <HomeIcon />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a href="https://www.linkedin.com/in/gennyoon/" target="_blank">
            <LinkedInLogoIcon />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a href="https://github.com/gennyoon" target="_blank">
            <GitHubLogoIcon />
          </a>
        </Button>
      </div>
    </motion.section>
  );
}
