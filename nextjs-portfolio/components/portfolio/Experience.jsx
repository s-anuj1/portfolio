"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/mock";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          kicker="02 / Experience"
          title="Where I've shipped real things"
        />

        <div className="relative">
          <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/50 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experience.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 md:pl-16"
              >
                <div className="absolute left-0 top-1 h-9 w-9 md:h-10 md:w-10 rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-500/25 to-orange-600/10 grid place-items-center text-amber-300 shadow-[0_0_0_4px_rgba(11,11,12,1)]">
                  <Briefcase size={16} />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6 hover:border-white/20 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-amber-400/90">
                        {e.period}
                      </div>
                      <h3 className="mt-1 text-lg md:text-xl font-semibold text-white">
                        {e.role}
                      </h3>
                      <div className="text-zinc-400 text-sm mt-0.5">
                        {e.company}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                      <MapPin size={12} /> {e.location}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {e.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="relative pl-5 text-[14.5px] leading-relaxed text-zinc-300"
                      >
                        <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
