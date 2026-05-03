"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/mock";

const nav = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Leadership", href: "#leadership", id: "leadership" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
      className="fixed top-3 md:top-5 left-0 right-0 z-50 px-4"
    >
      {/* Desktop pill */}
      <motion.div
        animate={{
          maxWidth: scrolled ? 820 : 980,
          paddingTop: scrolled ? 6 : 8,
          paddingBottom: scrolled ? 6 : 8,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`hidden md:flex mx-auto items-center justify-between gap-4 rounded-full px-2 pl-4 pr-2 border transition-[background,box-shadow,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "bg-[#0b0b0c]/60 border-white/10 backdrop-blur-xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]"
            : "bg-[#0b0b0c]/30 border-white/5 backdrop-blur-md shadow-[0_8px_30px_-14px_rgba(0,0,0,0.6)]"
        }`}
      >
        <button
          onClick={() => go("#top")}
          className="group flex items-center gap-2 text-white shrink-0"
          aria-label="Home"
        >
          <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 grid place-items-center text-[#0b0b0c] font-semibold text-sm">
            A
          </span>
          <span className="font-medium tracking-tight text-[15px]">
            {profile.firstName}
            <span className="text-amber-400">.</span>
          </span>
        </button>

        <nav className="flex items-center gap-0.5 relative">
          {nav.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                className={`relative px-3 py-1.5 text-[13.5px] rounded-full transition-colors duration-300 ${
                  isActive
                    ? "text-amber-300"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{n.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-amber-400/10 border border-amber-400/25"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <a
          href={profile.resumeView}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-[13px] text-amber-200 hover:bg-amber-400/15 hover:border-amber-400/50 transition-colors shrink-0"
        >
          Resume / CV
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </motion.div>

      {/* Mobile pill */}
      <div
        className={`md:hidden mx-auto max-w-[560px] flex items-center justify-between gap-3 rounded-full px-2 pl-4 pr-2 py-2 border transition-[background,border-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? "bg-[#0b0b0c]/70 border-white/10 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
            : "bg-[#0b0b0c]/35 border-white/5 backdrop-blur-md"
        }`}
      >
        <button
          onClick={() => go("#top")}
          className="flex items-center gap-2 text-white"
          aria-label="Home"
        >
          <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 grid place-items-center text-[#0b0b0c] font-semibold text-sm">
            A
          </span>
          <span className="font-medium tracking-tight">
            {profile.firstName}
            <span className="text-amber-400">.</span>
          </span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeView}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-[12.5px] text-amber-200"
          >
            Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="h-9 w-9 grid place-items-center rounded-full border border-white/10 bg-white/5 text-white"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-[560px] rounded-2xl border border-white/10 bg-[#0b0b0c]/90 backdrop-blur-xl p-2"
          >
            <div className="flex flex-col gap-0.5">
              {nav.map((n) => {
                const isActive = active === n.id;
                return (
                  <button
                    key={n.href}
                    onClick={() => go(n.href)}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "text-amber-300 bg-amber-400/10 border border-amber-400/20"
                        : "text-zinc-200 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    {n.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
