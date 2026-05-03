"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl border border-white/10 bg-[#0c0c0e] overflow-hidden flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 p-5 md:p-6 border-b border-white/10">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-amber-400/90">
                  {project.tag}
                </div>
                <h3 className="mt-1 text-xl md:text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-[14px] text-zinc-400 max-w-2xl">
                  {project.blurb}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.driveView}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-[#1a0f00] px-3.5 py-2 text-[13px] font-medium hover:bg-amber-300 transition-colors"
                >
                  Open in Drive <ExternalLink size={14} />
                </a>
                <button
                  onClick={onClose}
                  className="h-10 w-10 grid place-items-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-[360px] bg-black">
              <iframe
                title={project.title}
                src={project.drivePreview}
                className="h-[70vh] w-full"
                allow="autoplay"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
