"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Link, Mail } from "lucide-react";
import Image from "next/image";
import { hero, coFounder } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/50 border border-emerald-800/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-400 font-mono">
              TheBigFish Lab
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-xl shadow-emerald-500/10">
                <Image
                  src="/profile.jpeg"
                  alt={hero.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{hero.name}</h2>
              <p className="text-sm text-emerald-400/80 font-mono mt-1">
                {hero.title}
              </p>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed max-w-sm">
                Full Stack AI Engineer and Systems Architect with 5+ years
                deploying production-grade SaaS, agentic AI, and real-time
                applications across fintech, healthcare, and industrial domains.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href={hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                  aria-label="GitHub"
                >
                  <GitBranch size={20} />
                </a>
                <a
                  href={hero.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Link size={20} />
                </a>
                <a
                  href={`mailto:${hero.email}`}
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-xl shadow-emerald-500/10">
                <Image
                  src="/picture 1.jpeg"
                  alt={coFounder.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                {coFounder.name}
              </h2>
              <p className="text-sm text-emerald-400/80 font-mono mt-1">
                {coFounder.title}
              </p>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed max-w-sm">
                Full Stack Developer and AI Systems Engineer experienced in
                building production-grade web applications and AI-powered SaaS
                platforms with expertise in RAG pipelines, forecasting, and
                voice-based AI systems.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href={coFounder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                  aria-label="GitHub"
                >
                  <GitBranch size={20} />
                </a>
                <a
                  href={coFounder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Link size={20} />
                </a>
                <a
                  href={`mailto:${coFounder.email}`}
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-zinc-600 hover:text-emerald-400 transition-colors flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
