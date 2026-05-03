"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Wrench, Rocket } from "lucide-react";
import { skills, toolLogos } from "@/data/mock";
import SectionLabel from "./SectionLabel";

const icons = {
  Product: Lightbulb,
  Tools: Wrench,
  Execution: Rocket,
};

function LogoItem({ t }) {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="group inline-flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
      <img
        src={`https://cdn.simpleicons.org/${t.slug}/e5e5e5`}
        alt={t.name}
        onError={() => setHidden(true)}
        className="h-6 w-6 md:h-7 md:w-7 select-none"
        loading="lazy"
        draggable={false}
      />
      <span className="text-[13.5px] md:text-sm text-zinc-400 group-hover:text-amber-200 transition-colors">
        {t.name}
      </span>
    </div>
  );
}

function LogoMarquee() {
  const row = [...toolLogos, ...toolLogos];
  const maskStyle = {
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
    maskImage:
      "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
  };
  return (
    <div
      className="relative mt-14 overflow-hidden py-2"
      style={maskStyle}
      aria-label="Tools I work with"
    >
      <div className="marquee-track flex items-center gap-14 whitespace-nowrap will-change-transform">
        {row.map((t, i) => (
          <LogoItem key={t.slug + i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const groups = Object.entries(skills);
  return (
    <section id="skills" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel kicker="04 / Skills" title="The toolbox I reach for" />

        <div className="grid md:grid-cols-3 gap-5">
          {groups.map(([name, items], i) => {
            const Icon = icons[name] || Lightbulb;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-amber-400/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-amber-500/25 to-orange-600/10 border border-amber-400/25 text-amber-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-white font-medium text-[17px]">{name}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {items.map((it) => (
                    <span
                      key={it}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[12.5px] text-zinc-300 hover:border-amber-400/30 hover:text-white transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <LogoMarquee />
      </div>
    </section>
  );
}
