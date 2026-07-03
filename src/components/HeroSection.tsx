"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Link, Mail } from "lucide-react";
import { hero } from "@/lib/data";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/50 border border-emerald-800/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-400 font-mono">
              {hero.status}
            </span>
          </div>

          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-xl shadow-emerald-500/10">
            <Image
              src="/profile.jpeg"
              alt={hero.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {hero.name}
          </h1>

          {/* Company info below image */}
          <div className="flex flex-col items-center gap-1 mb-6">
            <p className="text-lg text-emerald-400/80 font-mono">
              {hero.title}
            </p>
            <p className="text-base text-zinc-500 font-medium">
              {hero.subtitle}
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-zinc-500 mb-10 leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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

          <div className="flex items-center justify-center gap-6">
            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <GitBranch size={24} />
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Link size={24} />
            </a>
            <a
              href={`mailto:${hero.email}`}
              className="text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-emerald-400 transition-colors flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
