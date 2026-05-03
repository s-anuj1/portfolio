"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { profile } from "@/data/mock";
import SectionLabel from "./SectionLabel";

function CopyBtn({ value }) {
  const [done, setDone] = React.useState(false);
  const copy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1200);
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-amber-300 hover:border-amber-400/30 transition-colors"
      aria-label="Copy"
    >
      {done ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          kicker="06 / Contact"
          title="Let's build something with real impact."
          sub="Best way to reach me is email. Open to PM, APM and Founder's Office roles, and interesting 0→1 conversations."
        />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-10">
          <div className="pointer-events-none absolute -top-20 -right-24 w-[460px] h-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.18),transparent_70%)] blur-2xl" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.a
                href={`mailto:${profile.email}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group inline-flex items-center gap-2 text-2xl md:text-4xl font-semibold tracking-tight text-white hover:text-amber-300 transition-colors break-all"
              >
                {profile.email}
                <ArrowUpRight
                  size={22}
                  className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>

              <div className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Mail size={16} className="text-amber-300" />
                  <div className="text-sm text-zinc-300 truncate">
                    {profile.email}
                  </div>
                  <div className="ml-auto">
                    <CopyBtn value={profile.email} />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Phone size={16} className="text-amber-300" />
                  <div className="text-sm text-zinc-300">{profile.phone}</div>
                  <div className="ml-auto">
                    <CopyBtn value={profile.phone} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-amber-400/90">
                  Elsewhere
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <SocialRow
                    icon={Linkedin}
                    label="LinkedIn"
                    href={profile.socials.linkedin}
                    handle="/in/anuj-kumar"
                  />
                  <SocialRow
                    icon={Twitter}
                    label="Twitter / X"
                    href={profile.socials.twitter}
                    handle="@sainianuj_22"
                  />
                  <SocialRow
                    icon={Instagram}
                    label="Instagram"
                    href={profile.socials.instagram}
                    handle="@anujsainii.__"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialRow({ icon: Icon, label, href, handle }) {
  const openLink = (e) => {
    // Safety net in case an overlay intercepts the native link.
    if (!href) return;
    e.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={openLink}
      className="group relative z-10 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:border-amber-400/30 hover:bg-white/[0.04] transition-colors cursor-pointer"
    >
      <div className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-amber-500/25 to-orange-600/10 border border-amber-400/25 text-amber-300">
        <Icon size={15} />
      </div>
      <div className="flex-1">
        <div className="text-sm text-white">{label}</div>
        <div className="text-xs text-zinc-500">{handle}</div>
      </div>
      <ArrowUpRight
        size={16}
        className="text-zinc-500 group-hover:text-amber-300 transition-colors"
      />
    </a>
  );
}
