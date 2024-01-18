"use client";

import React from "react";

import Image from "next/image";

import desktopImg from "@/assets/images/developer-desktop.jpg";

import { motion, useInView } from "framer-motion";

const AboutMeSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const canVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.section ref={ref} variants={canVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
      <div role="about_me" className="items-start gap-8 md:grid md:grid-cols-2">
        <div className="overflow-hidden rounded-lg pb-4">
          <Image src={desktopImg} alt="desktop" />
        </div>
        <div className="pb-4">
          <h3 className="mb-4 text-2xl font-bold">About Me</h3>
          <p className="break-words">
            안녕하세요. 저는 10년차{" "}
            <strong className="bg-gradient-to-r from-[#036CDA] to-[#15F5FD] bg-clip-text text-transparent">
              FullStack Web Developer
            </strong>{" "}
            입니다. 저의 주력은 React (Next.js Vite), Nest.js Flutter AWS 입니다.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMeSection;
