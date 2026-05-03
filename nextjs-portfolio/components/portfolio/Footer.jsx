"use client";

import React from "react";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { profile } from "@/data/mock";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#08080a]">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-md bg-gradient-to-br from-amber-400 to-orange-600 grid place-items-center text-[#0b0b0c] font-semibold text-sm">
              A
            </span>
            <span className="text-white font-medium">
              {profile.name}
              <span className="text-amber-400">.</span>
            </span>
          </div>
          <p className="mt-2 text-[13px] text-zinc-500 max-w-md">
            Product thinker and builder. Designed and developed with intent.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <IconLink href={`mailto:${profile.email}`} label="Email" Icon={Mail} />
          <IconLink href={profile.socials.linkedin} label="LinkedIn" Icon={Linkedin} />
          <IconLink href={profile.socials.twitter} label="Twitter" Icon={Twitter} />
          <IconLink href={profile.socials.instagram} label="Instagram" Icon={Instagram} />
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between text-xs text-zinc-500">
          <div>© {year} {profile.name}. All rights reserved.</div>
          <div>Crafted with care · India</div>
        </div>
      </div>
    </footer>
  );
}

function IconLink({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-10 w-10 grid place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-amber-300 hover:border-amber-400/30 transition-colors"
    >
      <Icon size={15} />
    </a>
  );
}
