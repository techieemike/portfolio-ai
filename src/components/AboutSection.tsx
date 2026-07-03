"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TerminalBlock from "@/components/TerminalBlock";
import SectionHeading from "@/components/SectionHeading";
import { about, stats } from "@/lib/data";

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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-zinc-400 leading-relaxed"
          >
            {about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
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
