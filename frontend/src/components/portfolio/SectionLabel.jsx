import React from "react";
import { motion } from "framer-motion";

export default function SectionLabel({ kicker, title, sub }) {
  return (
    <div className="mb-10 md:mb-14">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-amber-400/90"
      >
        <span className="h-px w-6 bg-amber-400/60" />
        {kicker}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="section-title mt-3 text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.18] pb-1"
      >
        {title}
      </motion.h2>

      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 max-w-2xl text-zinc-400"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
