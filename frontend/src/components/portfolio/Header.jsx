import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/mock";

const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border] duration-300 ${
        scrolled
          ? "bg-[#0b0b0c]/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => go("#top")}
          className="group flex items-center gap-2 text-white"
        >
          <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 grid place-items-center text-[#0b0b0c] font-semibold">
            A
          </span>
          <span className="font-medium tracking-tight">
            {profile.firstName}
            <span className="text-amber-400">.</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <button
              key={n.href}
              onClick={() => go(n.href)}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-md hover:bg-white/5 transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={profile.resumeView}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-200 hover:bg-amber-400/15 hover:border-amber-400/50 transition-colors"
          >
            Resume
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 grid place-items-center rounded-md text-white hover:bg-white/5"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0b0b0c]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <button
                  key={n.href}
                  onClick={() => go(n.href)}
                  className="text-left px-3 py-3 text-zinc-200 hover:text-white hover:bg-white/5 rounded-md"
                >
                  {n.label}
                </button>
              ))}
              <a
                href={profile.resumeView}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-sm text-amber-200"
              >
                Resume <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
