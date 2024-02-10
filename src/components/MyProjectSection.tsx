import { cn, supabase } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import { type Tables } from "@/types/supabase";
import { motion, useInView } from "framer-motion";

const tabs = [{ title: "ALL" }, { title: "WEB" }, { title: "MOBILE" }];

export default function MyProjectSection() {
  const [tab, setTab] = useState<number>(0);
  const [projects, setProjects] = useState<Tables<"projects">[]>([]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const canVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    fetchProjects().catch(console.error);
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) console.log("error", error);
    else setProjects(data!.sort((a, b) => a.id - b.id));
  };
  return (
    <motion.section
      ref={ref}
      variants={canVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="grid place-items-center mb-8"
    >
      <div className="py-6">
        <h3 className="text-2xl font-bold">My Projects</h3>
      </div>
      <div className="grid grid-cols-3 gap-4 w-60 h-6 mb-8">
        {tabs.map(({ title }, index) => {
          return (
            <button
              key={title}
              className={cn(
                "text-xs border dark:text-gray-800  text-gray-300  dark:border-gray-800 border-gray-300 w-full h-full rounded-lg",
                tab === index &&
                  "dark:text-gray-300 text-gray-800 dark:border-gray-300 border-gray-800",
              )}
              onClick={() => setTab(index)}
            >
              {title}
            </button>
          );
        })}
      </div>
      <div className="w-full min-h-96 transition-all grid md:grid-cols-2 gap-4">
        {projects.map(({ image, type, title, content, url, stack }, index) => {
          if (tabs[tab].title !== "ALL" && type !== tabs[tab].title)
            return undefined;

          return (
            <a key={index} className="mb-8" href={url!} target="_blank">
              <span className="bg-[#15F5FD40] dark:text-[#15F5FD] text-sky-600 text-sm font-bold py-1 px-3 rounded-xl">
                {type}
              </span>
              <p className="text-xl font-bold pt-3">{title}</p>
              <div className="flex gap-1.5 py-2 text-gray-800 dark:text-gray-200">
                {stack!.map((st) => (
                  <span
                    key={st}
                    className="text-sm bg-gray-200 dark:bg-gray-800 rounded-sm py-0.5 px-2"
                  >
                    {st}
                  </span>
                ))}
              </div>
              <div className="w-full">
                <img
                  className="w-full h-72 md:h-52 mb-2 rounded-2xl object-cover object-top transition-all will-change-scroll cursor-pointer backdrop-blur-sm bg-white/30"
                  src={image!}
                  alt={title!}
                />
              </div>
              <p className="md:text-sm break-all line-clamp-3">{content}</p>
            </a>
          );
        })}
      </div>
    </motion.section>
  );
}
