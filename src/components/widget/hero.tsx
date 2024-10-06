"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import avatarImg from "@/assets/images/avatar.jpg";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";

const HeroWidget = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const canVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };
  return (
    <motion.section ref={ref} variants={canVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
      <div className="mt-12 flex items-end justify-between gap-4">
        <div className="w-24 flex-shrink">
          <AspectRatio ratio={1 / 1} className="h-18 w-18 overflow-hidden rounded-full">
            <Image src={avatarImg.src} alt="avator" fill />
          </AspectRatio>
        </div>
        <div className="flex-1">
          <h1 className="bg-gradient-to-r from-[#036CDA] to-[#15F5FD] bg-clip-text text-4xl font-bold text-transparent">
            Hello, I&apos;m
          </h1>
          <h1 className="text-2xl font-bold">
            <TypeAnimation
              sequence={["FullStack Developer", 1000, "use NeoVim IDE", 1000, "GennYoon", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="flex items-end justify-start gap-1.5">
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <a href="https://www.linkedin.com/in/gennyoon/" target="_blank">
              <LinkedInLogoIcon className="h-5 w-5 text-[#0A66C2]" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <a href="https://github.com/gennyoon" target="_blank">
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroWidget;
