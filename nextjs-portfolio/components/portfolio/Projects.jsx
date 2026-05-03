"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, FileText } from "lucide-react";
import { projects } from "@/data/mock";
import SectionLabel from "./SectionLabel";
import ProjectModal from "./ProjectModal";

function Card({ p, onOpen }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ x: (py - 0.5) * -6, y: (px - 0.5) * 8 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-amber-400/30 transition-[border-color,background-color] duration-300"
    >
      <div
        className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}
      />

      <div className="relative p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/5 px-2.5 py-1 text-[10.5px] uppercase tracking-[0.16em] text-amber-300/90">
            {p.tag}
          </span>
        </div>

        <h3 className="mt-6 text-xl md:text-[22px] font-semibold tracking-tight text-white">
          {p.title}
        </h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-400">
          {p.blurb}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.meta.map((m) => (
            <span
              key={m}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-300"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <button
            onClick={() => onOpen(p)}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 px-3.5 py-2 text-[13px] text-white hover:bg-white/[0.1] hover:border-white/20 transition-colors"
          >
            <Eye size={14} /> View Case Study
          </button>
          <a
            href={p.driveView}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-[#1a0f00] px-3.5 py-2 text-[13px] font-medium hover:bg-amber-300 transition-colors"
          >
            <FileText size={14} /> View Full Deck
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          kicker="03 / Selected Work"
          title="Products, teardowns and strategy decks"
        />

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p) => (
            <Card key={p.id} p={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
