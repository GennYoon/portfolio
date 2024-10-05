"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "Git",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "Node.js",
  "Nest.js",
  "MongoDB",
  "PostgreSQL",
  "Flutter",
  "Python",
  "AWS",
];

const fadeInAnimationVariants = {
  initial: { y: 50, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.05 * index },
  }),
};

const SkillSection = () => {
  return (
    <section data-test="my_skill" className="mb-16 text-center">
      <h1 className="mb-4 text-2xl font-bold">Skills</h1>
      <ul className="flex flex-wrap justify-start gap-2 text-xs text-gray-800">
        {skills.map((skill, index) => (
          <motion.li
            className="rounded-xl border border-black/[0.1] bg-white px-3 py-2"
            key={skill}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillSection;
