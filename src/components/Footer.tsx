import { GitBranch, Link, ArrowUp } from "lucide-react";
import { hero } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {year} {hero.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Link size={18} />
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
