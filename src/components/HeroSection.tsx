import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { TypeAnimation } from "react-type-animation";
import avator from "../assets/avator.jpg";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

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
      <div className="flex gap-1.5 justify-start">
        <Button variant="secondary" size="sm" className="rounded-full">
          Contact me here
        </Button>
        <Button variant="outline" size="sm" className="rounded-full">
          Download CV
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <LinkedInLogoIcon />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <GitHubLogoIcon />
        </Button>
      </div>
    </motion.section>
  );
}
