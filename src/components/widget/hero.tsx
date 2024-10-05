"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import avatarImg from "@/assets/images/avatar.jpg";

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
    </motion.section>
  );
};

export default HeroWidget;
