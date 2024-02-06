import { useRef } from "react";
import desktop from "../assets/developer-desktop.jpg";
import { motion, useInView } from "framer-motion";

export default function AboutMeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const canVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      ref={ref}
      variants={canVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div
        role="about_me"
        className="h-[320px] md:grid md:grid-cols-2 items-start gap-8"
      >
        <div className="rounded-lg overflow-hidden">
          <img src={desktop} alt="desktop" />
        </div>
        <div>
          <h3 className="text-[24px] font-bold">About Me</h3>
          <p className="break-words">저는 FullStack Web Developer 입니다.</p>
        </div>

        {/* <div> */}
        {/*   <div>Skills</div> */}
        {/*   <div> */}
        {/*     <ul> */}
        {/*       <li>JavaScript</li> */}
        {/*       <li>TypeScript</li> */}
        {/*       <li>React</li> */}
        {/*       <li>Vite</li> */}
        {/*       <li>Next.js</li> */}
        {/*       <li>Tailwind</li> */}
        {/*       <li>Node.js</li> */}
        {/*       <li>Express</li> */}
        {/*       <li>Nest.js</li> */}
        {/*       <li>PostgreSQL</li> */}
        {/*       <li>TypeORM</li> */}
        {/*       <li>Prisma</li> */}
        {/*       <li>Flutter</li> */}
        {/*       <li>Terraform</li> */}
        {/*     </ul> */}
        {/*   </div> */}
        {/*   <div>Certifications</div> */}
        {/*   <div> */}
        {/*     <ul> */}
        {/*       <li>AWS Cloud Practitioner</li> */}
        {/*     </ul> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </motion.section>
  );
}
