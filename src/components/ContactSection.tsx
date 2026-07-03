"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Link, Mail, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { hero } from "@/lib/data";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="contact"
          label="contact"
          title="Let's Build Something"
          subtitle="Have a project in mind? I'm always open to discussing new opportunities."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-mono text-zinc-400 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-mono text-zinc-400 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-mono text-zinc-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-zinc-950 font-semibold transition-colors"
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message Sent!"
              ) : status === "error" ? (
                "Failed — Try Again"
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-mono text-zinc-500 mb-2">Email</h3>
              <a
                href={`mailto:${hero.email}`}
                className="text-lg text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                {hero.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-mono text-zinc-500 mb-3">Socials</h3>
              <div className="flex items-center gap-4">
                <a
                  href={hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-800/50 transition-all"
                  aria-label="GitHub"
                >
                  <GitBranch size={20} />
                </a>
                <a
                  href={hero.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-800/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Link size={20} />
                </a>
                <a
                  href={`mailto:${hero.email}`}
                  className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-800/50 transition-all"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <p className="text-zinc-400 text-sm leading-relaxed">
                I typically respond within 24 hours. Whether it's a new project,
                collaboration opportunity, or just a conversation about AI
                engineering — let's connect.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
