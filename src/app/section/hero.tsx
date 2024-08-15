"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import avatarImg from "@/assets/images/avatar.jpg";

import { GitHubLogoIcon, HomeIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";

const HeroSeciton = () => {
  const ref = React.useRef(null);
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
      className="mb-16">
      <div className="mt-12 flex justify-between">
        <div>
          <h1 className="bg-gradient-to-r from-[#036CDA] to-[#15F5FD] bg-clip-text text-4xl font-bold text-transparent">
            Hello, I&apos;m
          </h1>
          <h1 className="mb-8 text-2xl font-bold">
            <TypeAnimation
              sequence={["FullStack Developer", 1000, "use NeoVim IDE", 1000, "GennYoon", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div>
          <Avatar>
            <AvatarImage className="rounded-full" src={avatarImg.src} width={20} height={20} alt="avatar" />
            <AvatarFallback />
          </Avatar>
        </div>
      </div>
      <div className="flex justify-start gap-1.5">
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
};

export default HeroSeciton;
