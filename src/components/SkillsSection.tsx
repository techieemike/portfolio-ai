"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/lib/data";

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-zinc-300">{name}</span>
        <span className="font-mono text-emerald-400">{level}%</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="skills"
          label="skills"
          title="Tech Stack"
          subtitle="The tools and technologies I work with daily."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-zinc-200 mb-6 font-mono">
                {category.name}
              </h3>
              {category.skills.map((skill, j) => (
                <SkillBar
                  key={j}
                  name={skill.name}
                  level={skill.level}
                  delay={j * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
