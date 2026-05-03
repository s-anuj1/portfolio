"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Users } from "lucide-react";
import { leadership, testimonials } from "@/data/mock";
import SectionLabel from "./SectionLabel";

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          kicker="05 / Leadership & Testimonials"
          title="Owning outcomes, not just roles"
        />

        <div className="grid lg:grid-cols-3 gap-5">
          {leadership.map((l, i) => (
            <motion.div
              key={l.role + l.org}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-amber-400/30 hover:bg-white/[0.04] transition-colors"
            >
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-amber-500/25 to-orange-600/10 border border-amber-400/25 text-amber-300">
                <Users size={18} />
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-amber-400/90">
                {l.scale}
              </div>
              <h3 className="mt-1 text-lg font-semibold text-white">{l.role}</h3>
              <div className="text-sm text-zinc-400">{l.org}</div>
              <ul className="mt-4 space-y-2">
                {l.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-[13.5px] leading-relaxed text-zinc-300"
                  >
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-[11px] uppercase tracking-[0.2em] text-amber-400/90 inline-flex items-center gap-2">
            <span className="h-px w-6 bg-amber-400/60" /> What people say
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-7 hover:border-amber-400/30 transition-colors"
              >
                <Quote
                  className="absolute top-5 right-5 text-amber-400/25"
                  size={28}
                />
                <blockquote className="text-[15.5px] leading-relaxed text-zinc-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="text-white">{t.name}</span>
                  <span className="text-zinc-500">, {t.role}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
