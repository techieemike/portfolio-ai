"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { projects, coFounderProjects } from "@/lib/data";

const allProjects = [...projects, ...coFounderProjects];

const filterOptions = [
  { value: "all", label: "All" },
  { value: "abikale", label: "Abikale" },
  { value: "martha", label: "Martha" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = allProjects.filter(
    (p) => activeFilter === "all" || p.creator === activeFilter
  );

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="projects"
          label="projects"
          title="What We've Built"
          subtitle="AI-powered products and systems by TheBigFish Lab."
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

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-800/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-950/50 rounded-full">
                  {project.category}
                </span>
                <span
                  className={`inline-block px-3 py-1 text-xs font-mono rounded-full ${
                    project.creator === "abikale"
                      ? "text-blue-400 bg-blue-950/50"
                      : "text-purple-400 bg-purple-950/50"
                  }`}
                >
                  {project.creator === "abikale" ? "Abikale" : "Martha"}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 6).map((tag, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs font-mono text-zinc-400 bg-zinc-800/50 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 6 && (
                  <span className="px-2 py-1 text-xs font-mono text-zinc-600">
                    +{project.tags.length - 6}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
