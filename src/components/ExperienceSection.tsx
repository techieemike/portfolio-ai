"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { experience, coFounderExperience } from "@/lib/data";

const allExperience = [
  ...experience.map((e) => ({ ...e, creator: "Abikale" as const })),
  ...coFounderExperience.map((e) => ({ ...e, creator: "Martha" as const })),
];

const creatorColors = {
  Abikale: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Martha: "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

export default function ExperienceSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="experience"
          label="experience"
          title="Where We've Worked"
          subtitle="From building foundations to scaling AI systems."
        />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800" />

          {allExperience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={`relative mb-12 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              } pl-6 md:pl-0`}
            >
              <div className="absolute left-0 md:left-auto md:right-0 top-1 w-3 h-3 rounded-full bg-emerald-400 border-4 border-zinc-950 transform md:-translate-x-1.5 -translate-x-3" />

              <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-2 py-0.5 text-xs font-mono rounded border ${creatorColors[exp.creator]}`}
                  >
                    {exp.creator}
                  </span>
                  <span className="text-sm font-mono text-emerald-400/80">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mt-1">{exp.company}</h3>
                <p className="text-zinc-400 text-sm mt-0.5">{exp.role}</p>
                <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs font-mono text-zinc-400 bg-zinc-800/50 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
