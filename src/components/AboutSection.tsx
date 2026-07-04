"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TerminalBlock from "@/components/TerminalBlock";
import SectionHeading from "@/components/SectionHeading";
import { about, coFounder, stats } from "@/lib/data";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (isInView) {
      if (value === "∞") {
        setDisplayed("∞");
        return;
      }
      const num = parseInt(value);
      if (isNaN(num)) {
        setDisplayed(value);
        return;
      }
      let current = 0;
      const step = Math.ceil(num / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= num) {
          current = num;
          clearInterval(timer);
        }
        setDisplayed(String(current) + (value.includes("+") ? "+" : ""));
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-emerald-400 font-mono">
        {displayed}
      </p>
      <p className="text-sm text-zinc-500 mt-1">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="about"
          label="about"
          title={about.heading}
          subtitle={about.subheading}
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-4 font-mono">
              {">"} abikale
            </h3>
            <TerminalBlock
              lines={[
                { command: "whoami", output: "> abikale_michael_raymond" },
                {
                  command: "cat skills.txt",
                  output:
                    "> nextjs, python, langchain, fastapi,\n> kubernetes, typescript, postgresql",
                },
                { command: "echo $STATUS", output: "> building the future" },
              ]}
            />
            <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed text-sm">
              {about.bio.slice(0, 2).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-4 font-mono">
              {">"} martha
            </h3>
            <TerminalBlock
              lines={[
                {
                  command: "whoami",
                  output: "> rachael_martha_moses",
                },
                {
                  command: "cat skills.txt",
                  output:
                    "> react, nextjs, python, fastapi,\n> nestjs, postgresql, redis, celery",
                },
                {
                  command: "echo $STATUS",
                  output: "> engineering the stack",
                },
              ]}
            />
            <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed text-sm">
              {coFounder.bio.slice(0, 2).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-zinc-800">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
