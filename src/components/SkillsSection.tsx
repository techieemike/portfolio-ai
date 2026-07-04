"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories, coFounderSkillCategories } from "@/lib/data";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "abikale", label: "Abikale" },
  { value: "martha", label: "Martha" },
];

const allSkillCategories = [
  ...skillCategories.map((c) => ({ ...c, creator: "abikale" as const })),
  ...coFounderSkillCategories.map((c) => ({ ...c, creator: "martha" as const })),
];

const creatorColors = {
  abikale: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  martha: "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

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
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = allSkillCategories.filter(
    (c) => activeFilter === "all" || c.creator === activeFilter
  );

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="skills"
          label="skills"
          title="Tech Stack"
          subtitle="The tools and technologies we work with."
        />

        <div className="flex items-center justify-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-4 py-2 text-sm font-mono rounded-lg transition-colors ${
                activeFilter === opt.value
                  ? "bg-emerald-500 text-zinc-950"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {filtered.map((category, i) => (
            <motion.div
              key={`${category.creator}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-lg font-semibold text-zinc-200 font-mono">
                  {category.name}
                </h3>
                {activeFilter === "all" && (
                  <span
                    className={`px-2 py-0.5 text-xs font-mono rounded border ${creatorColors[category.creator]}`}
                  >
                    {category.creator === "abikale" ? "Abikale" : "Martha"}
                  </span>
                )}
              </div>
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
