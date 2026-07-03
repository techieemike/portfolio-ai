"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="blog"
          label="blog"
          title="Writing & Thinking"
          subtitle="Thoughts on AI engineering, systems, and building products."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-mono text-amber-400 bg-amber-950/50 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-zinc-600 font-mono">
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed mb-3">
                {post.description}
              </p>

              <span className="text-xs text-zinc-600 font-mono">
                {post.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
