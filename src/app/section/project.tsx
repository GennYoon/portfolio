"use client";

import React from "react";

import Image from "next/image";

import { cn } from "@/utils/classname";
import { supabase } from "@/utils/supabase";

import { Tables } from "@/types/database.type";

import { motion, useInView } from "framer-motion";

const tabs = [{ title: "ALL" }, { title: "WEB" }, { title: "MOBILE" }];

const ProjectSection = () => {
  const [tab, setTab] = React.useState<number>(0);
  const [projects, setProjects] = React.useState<Tables<"project">[]>([]);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const canVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  React.useEffect(() => {
    supabase
      .from("project")
      .select()
      .then(({ data: projects }) => setProjects(projects!));
  }, []);

  return (
    <motion.section
      ref={ref}
      variants={canVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="mb-8 grid place-items-center">
      <div className="py-6">
        <h3 className="text-2xl font-bold">My Projects</h3>
      </div>
      <div className="mb-8 grid h-6 w-60 grid-cols-3 gap-4">
        {tabs.map(({ title }, index) => {
          return (
            <button
              key={title}
              className={cn(
                "h-full w-full rounded-lg border border-gray-300 text-xs text-gray-300 dark:border-gray-800 dark:text-gray-800",
                tab === index && "border-gray-800 text-gray-800 dark:border-gray-300 dark:text-gray-300"
              )}
              onClick={() => setTab(index)}>
              {title}
            </button>
          );
        })}
      </div>
      <div className="grid min-h-96 w-full gap-4 transition-all md:grid-cols-2">
        {projects.map(({ image, type, title, content, url, stack }, index) => {
          if (tabs[tab].title !== "ALL" && type !== tabs[tab].title) return undefined;

          return (
            <a key={index} className="mb-8" href={url!} target="_blank">
              <span className="rounded-xl bg-[#15F5FD40] px-3 py-1 text-sm font-bold text-sky-600 dark:text-[#15F5FD]">
                {type}
              </span>
              <p className="pt-3 text-xl font-bold">{title}</p>
              <div className="flex gap-1.5 py-2 text-gray-800 dark:text-gray-200">
                {stack?.map((st: any) => (
                  <span key={st} className="rounded-sm bg-gray-200 px-2 py-0.5 text-sm dark:bg-gray-800">
                    {st}
                  </span>
                ))}
              </div>
              <div className="w-full">
                <Image
                  className="mb-2 h-72 w-full cursor-pointer rounded-2xl bg-white/30 object-cover object-top backdrop-blur-sm transition-all will-change-scroll md:h-52"
                  src={image!}
                  alt={title!}
                  width={288}
                  height={288}
                />
              </div>
              <p className="line-clamp-3 break-all md:text-sm">{content}</p>
            </a>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ProjectSection;
