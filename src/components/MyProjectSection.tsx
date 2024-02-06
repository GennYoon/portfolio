import { cn, supabase } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import { type Tables } from "@/types/supabase";
import { motion, useInView } from "framer-motion";
import image from "../assets/developer-desktop.jpg";

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
    else setProjects(data);
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
      <div className="w-full min-h-[335px] transition-all grid md:grid-cols-2 gap-4">
        {projects.map(({ type, title, url, stack }, index) => {
          if (tabs[tab].title !== "ALL" && type !== tabs[tab].title)
            return undefined;

          return (
            <div key={index}>
              <div className="w-full h-[200px] backdrop-blur-sm bg-white/30 rounded-lg mb-2 overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500 cursor-pointer"
                  src={image}
                  alt={title!}
                />
              </div>
              <div className="break-words">
                <p className="font-bold mb-1">{title}</p>
                {url && (
                  <p>
                    <span className="text-xs font-bold bg-[#036CDA] text-[#15F5FD] py-0.5 px-1 mr-1.5">
                      WEBSITE
                    </span>
                    <a href={url} target="_blank" className="hover:underline">
                      {url}
                    </a>
                  </p>
                )}

                <p>
                  <span className="text-xs font-bold bg-[#036CDA] text-[#15F5FD] py-0.5 px-1 mr-1.5">
                    PLATFORM
                  </span>
                  <span>{type}</span>
                </p>
                {stack && (
                  <p>
                    <span className="text-xs font-bold bg-[#036CDA] text-[#15F5FD] py-0.5 px-1 mr-1.5">
                      STACK
                    </span>
                    <span>{stack.join(", ")}</span>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
