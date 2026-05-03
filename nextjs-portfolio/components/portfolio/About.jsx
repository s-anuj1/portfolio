"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { about, education } from "@/data/mock";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          kicker="01 / About"
          title="Clarity first. Then speed."
        />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-5">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-[15.5px] md:text-[17px] leading-relaxed text-zinc-300"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 md:p-7"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.18),transparent_70%)] blur-2xl" />

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-amber-500/25 to-orange-600/10 border border-amber-400/30 text-amber-300">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-amber-400/90">
                    Education
                  </div>
                  <div className="text-[13px] text-zinc-400">
                    Credentials & training
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {education.map((e, i) => (
                  <motion.div
                    key={e.school}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4 md:p-5 hover:border-amber-400/30 hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-[15px] md:text-[16.5px] font-semibold leading-tight text-white">
                        {e.school}
                      </h3>
                      <span className="shrink-0 text-[11.5px] text-zinc-400 tabular-nums">
                        {e.period}
                      </span>
                    </div>
                    <div className="mt-1.5 text-[13.5px] text-zinc-300">
                      {e.degree}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
