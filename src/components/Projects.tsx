"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const PROJECTS = [
  {
    id: "vendoriq",
    title: "VendorIQ.ai",
    tagline: "RAG · LLM · TypeScript",
    description:
      "Enterprise invoice intelligence powered by RAG. Upload vendor documents — ask questions, extract insights, query data in plain English. Built for scale.",
    tags: ["RAG", "LLM", "TypeScript", "MongoDB", "Node.js"],
    github: "https://github.com/Gourav094/vendorIQ.ai",
    youtube: "https://youtu.be/jnJQah_94D0?si=d3n10kw7JNg62agj",
    npm: null,
    accent: "#a78bfa",
    rgb: "139,92,246",
  },
  {
    id: "secret-scan",
    title: "secret-scan",
    tagline: "CLI · npm · Security",
    description:
      "Published npm CLI that scans codebases for exposed secrets before they hit production. Zero false positives by design.",
    tags: ["Node.js", "CLI", "Security", "npm", "JavaScript"],
    github: "https://github.com/Gourav094/secret-scan",
    youtube: null,
    npm: "https://www.npmjs.com/package/@gourav094/secret-scan",
    accent: "#34d399",
    rgb: "52,211,153",
  },
];

const GITHUB_ICON = (
  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
  </svg>
);

function YoutubeModal({ url, onClose }: { url: string; onClose: () => void }) {
  const videoId = url.includes("youtu.be/")
    ? url.split("youtu.be/")[1]?.split("?")[0]
    : url.split("v=")[1]?.split("&")[0];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <button onClick={onClose} className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white/60 hover:text-white text-sm transition-colors">✕</button>
      </motion.div>
    </motion.div>
  );
}

function FeaturedCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [showVideo, setShowVideo] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [4, -4]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-4, 4]), { stiffness: 200, damping: 30 });
  const glowX = useTransform(mouseX, [-1, 1], [0, 100]);
  const glowY = useTransform(mouseY, [-1, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <>
      {showVideo && project.youtube && <YoutubeModal url={project.youtube} onClose={() => setShowVideo(false)} />}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/8 bg-[#0e0e1a] p-8 cursor-default"
      >
        {/* Moving spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${glowX}% ${glowY}%, rgba(${project.rgb},0.10) 0%, transparent 60%)`,
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-8 right-8 h-px" style={{ background: `linear-gradient(90deg, transparent, rgba(${project.rgb},0.5), transparent)` }} />

        {/* Header */}
        <div className="relative z-10 flex flex-col gap-6">
          {/* Number + github */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/15">0{index + 1}</span>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/20 transition-all duration-200 hover:text-white/70 text-xs font-mono"
            >
              {GITHUB_ICON}
              <span>View code</span>
            </a>
          </div>

          {/* Big decorative icon */}
          <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03]" style={{ color: project.accent }}>
            <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
              <rect x="10" y="8" width="34" height="44" rx="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
              <rect x="16" y="8" width="34" height="44" rx="4" fill={`rgba(${project.rgb},0.07)`} stroke="currentColor" strokeWidth="1.5"/>
              <path d="M24 22h16M24 29h16M24 36h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7"/>
              <circle cx="46" cy="48" r="10" fill={`rgba(${project.rgb},0.15)`} stroke="currentColor" strokeWidth="1.5"/>
              <path d="M43 48l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-2xl font-semibold text-white/90 mb-1">{project.title}</h3>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: project.accent, opacity: 0.65 }}>
              {project.tagline}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-white/40 max-w-xs">{project.description}</p>
        </div>

        {/* Bottom */}
        <div className="relative z-10 mt-8 flex flex-col gap-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 font-mono text-[10px] text-white/30 transition-colors duration-300 group-hover:border-white/[0.12] group-hover:text-white/50">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA — only show if there's something to link */}
          {(project.youtube || project.npm) && (
            <div className="flex items-center gap-3 pt-1">
              {project.youtube && (
                <button onClick={() => setShowVideo(true)}
                  className="flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300"
                  style={{ borderColor: `rgba(${project.rgb},0.25)`, color: project.accent, background: `rgba(${project.rgb},0.06)` }}
                >
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor"><path d="M3 2l11 6-11 6V2z"/></svg>
                  Watch Demo
                </button>
              )}
              {project.npm && (
                <a href={project.npm} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300"
                  style={{ borderColor: `rgba(${project.rgb},0.25)`, color: project.accent, background: `rgba(${project.rgb},0.06)` }}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M0 0v24h24V0H0zm19.2 19.2H12V9.6h-4.8v9.6H4.8V4.8h14.4v14.4z"/></svg>
                  View on npm
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

function CompactCard(_: { project: typeof PROJECTS[0]; index: number }) {
  return null;
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 font-mono text-xs tracking-[0.2em] text-white/25 uppercase"
      >
        Projects
      </motion.p>

      {/* Side by side */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <FeaturedCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* More on GitHub */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 flex justify-center"
      >
        <a href="https://github.com/Gourav094" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-[11px] text-white/20 transition-colors duration-200 hover:text-white/55"
        >
          {GITHUB_ICON}
          more projects on github →
        </a>
      </motion.div>
    </section>
  );
}
