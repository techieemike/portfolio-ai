"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GitBranch, Link, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { hero, coFounder } from "@/lib/data";

export default function TeamSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="team"
          label="team"
          title="Meet The Founders"
          subtitle="The minds behind TheBigFish Lab."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500/30">
              <Image
                src="/profile.jpeg"
                alt={hero.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">{hero.name}</h3>
            <p className="text-sm text-emerald-400/80 font-mono mt-1">
              {hero.title}
            </p>
            <p className="text-xs text-zinc-500 mt-3 leading-relaxed max-w-md mx-auto">
              Full Stack AI Engineer and Systems Architect with 5+ years
              deploying production-grade SaaS, agentic AI, and real-time
              applications. Leads AI/ML engineering at Globacom and builds
              AI-powered platforms at TheBigFish Lab.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500/30">
              <Image
                src="/picture 1.jpeg"
                alt={coFounder.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">{coFounder.name}</h3>
            <p className="text-sm text-emerald-400/80 font-mono mt-1">
              {coFounder.title}
            </p>
            <p className="text-xs text-zinc-500 mt-3 leading-relaxed max-w-md mx-auto">
              Full Stack Developer and AI Systems Engineer experienced in
              building production-grade web applications and AI-powered SaaS
              platforms. Combines engineering discipline with analytical rigour
              rooted in peer-reviewed research.
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
