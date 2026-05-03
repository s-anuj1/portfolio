import React from "react";
import { motion } from "framer-motion";
import { about } from "../../data/mock";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel kicker="01 / About" title="Clarity first. Then speed." />
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
            <div className="grid grid-cols-2 gap-3">
              {about.highlights.map((h, i) => (
                <motion.div
                  key={h.k}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-amber-400/30 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="text-3xl font-semibold tracking-tight text-white">
                    {h.k}
                  </div>
                  <div className="mt-1.5 text-[12.5px] leading-snug text-zinc-400">
                    {h.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
