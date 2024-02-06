import { useRef } from "react";
import desktop from "../assets/developer-desktop.jpg";
import { motion, useInView } from "framer-motion";

export default function AboutMeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const canVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      ref={ref}
      variants={canVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div role="about_me" className="md:grid md:grid-cols-2 items-start gap-8">
        <div className="rounded-lg overflow-hidden pb-4">
          <img src={desktop} alt="desktop" />
        </div>
        <div className="pb-4">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="break-words">
            안녕하세요. 저는 10년차{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#036CDA] to-[#15F5FD]">
              FullStack Web Developer
            </strong>{" "}
            입니다. 저의 주력은 React (Next.js, Vite), Nest.js, Flutter, AWS
            입니다.
          </p>
          <div></div>
          {/* <div className="grid grid-cols-2 gap-2"> */}
          {/*   <button className="px-1 py-1 w-full rounded-full bg-gradient-to-br from-[#036CDA] to-[#15F5FD] hover:bg-slate-200 text-white mt-3"> */}
          {/*     Hiro Me */}
          {/*   </button> */}
          {/*   <button className="px-1 py-1 w-full rounded-full bg-gradient-to-br from-[#036CDA] to-[#15F5FD] hover:bg-slate-800 text-white mt-3"> */}
          {/*     <span className="block bg-[#121212] hover:bg-slate-800 rounded-full py-2"> */}
          {/*       Download CV */}
          {/*     </span> */}
          {/*   </button> */}
          {/* </div> */}
        </div>
      </div>
    </motion.section>
  );
}
