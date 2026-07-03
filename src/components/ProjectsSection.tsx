"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="projects"
          label="projects"
          title="What I've Built"
          subtitle="A selection of AI-powered products and systems."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-800/50 transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-950/50 rounded-full mb-4">
                {project.category}
              </span>

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
