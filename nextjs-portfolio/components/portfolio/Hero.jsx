"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { profile, hero } from "@/data/mock";

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.18),transparent_70%)] blur-2xl" />
        <div className="absolute top-40 -left-24 w-[420px] h-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(251,146,60,0.10),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#0a0a0b)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
              </span>
              {hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.02] tracking-tight font-semibold text-white"
            >
              {hero.headline[0]}
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                {hero.headline[1]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-[15.5px] md:text-base text-zinc-400 leading-relaxed"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 340, damping: 20 }}
                onClick={() => scrollTo("#projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/15 px-5 py-3 text-sm font-medium text-white hover:bg-white/[0.08] hover:border-white/25 transition-colors"
              >
                View Work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 340, damping: 20 }}
                href={`mailto:${profile.email}?subject=Let%27s%20work%20together&body=Hi%20Anuj%2C`}
                className="group relative inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-[#1a0f00] hover:bg-amber-300 transition-colors shadow-[0_10px_30px_-8px_rgba(245,158,11,0.55)] hover:shadow-[0_14px_40px_-8px_rgba(245,158,11,0.75)]"
              >
                <span className="absolute -inset-1 rounded-full bg-amber-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail size={16} className="relative" />
                <span className="relative">Hire Me</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-5 text-xs text-zinc-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} /> {profile.location}
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={13} className="text-amber-400" /> Open to 0→1 and Founder's Office roles
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-[280px] sm:w-[340px] lg:w-full max-w-[420px] aspect-[4/5]">
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-amber-500/30 via-orange-500/10 to-transparent blur-2xl" />
              <div className="relative h-full w-full rounded-[22px] overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_30px_80px_-30px_rgba(245,158,11,0.35)]">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,11,0.85),transparent_45%)]" />
                <div className="absolute left-4 right-4 bottom-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-3">
                  <div className="text-[13px] text-white font-medium">
                    {profile.name}
                  </div>
                  <div className="text-[11.5px] text-zinc-400 mt-0.5">
                    {profile.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
