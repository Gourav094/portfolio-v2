"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const GitHubIcon = () => (
  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 30 30" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
  </svg>

);

const MediumIcon = () => (
  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
    <path d="M11.08 10c0 2.818-2.268 5.103-5.066 5.103S.948 12.818.948 10 3.216 4.897 6.014 4.897 11.08 7.182 11.08 10zm5.534 0c0 2.65-1.134 4.8-2.533 4.8-1.4 0-2.533-2.15-2.533-4.8s1.133-4.8 2.533-4.8c1.4 0 2.533 2.15 2.533 4.8zm2.44 0c0 2.374-.398 4.3-.89 4.3-.49 0-.889-1.926-.889-4.3s.398-4.3.89-4.3c.49 0 .889 1.926.889 4.3z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 25 25" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z" /><path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24" />
  </svg>
);

const LINKS = [
  { label: "GitHub", href: "https://github.com/", icon: <GitHubIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/", icon: <LinkedInIcon /> },
  { label: "Medium", href: "https://medium.com/", icon: <MediumIcon /> },
  { label: "LeetCode", href: "https://leetcode.com/", icon: <LeetCodeIcon /> },
];

const PILLS = [
  "SAP Labs · 2 yrs",
  "BITS Pilani MTech",
  "700+ LeetCode",
  "Published on Medium",
];

export default function Hero() {
  const orbX = useMotionValue(0);
  const orbY = useMotionValue(0);

  // For headline magnetic tilt
  const headlineRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotX = useSpring(rotateX, { stiffness: 120, damping: 10 });
  const springRotY = useSpring(rotateY, { stiffness: 120, damping: 10 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      orbX.set(e.clientX);
      orbY.set(e.clientY);

      // Tilt headline relative to its center
      const el = headlineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (window.innerWidth / 2);
      const dy = (e.clientY - cy) / (window.innerHeight / 2);
      rotateY.set(dx * 6);
      rotateX.set(-dy * 4);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [orbX, orbY, rotateX, rotateY]);

  const springX = useSpring(orbX, { stiffness: 50, damping: 18 });
  const springY = useSpring(orbY, { stiffness: 50, damping: 18 });

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Static ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 z-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.13) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Cursor glow */}
      <motion.div
        className="pointer-events-none fixed z-0 h-[600px] w-[600px] rounded-full"
        style={{
          x: useTransform(springX, (v) => v - 300),
          y: useTransform(springY, (v) => v - 300),
          background:
            "radial-gradient(circle, rgba(139,92,246,0.10) 0%, rgba(59,130,246,0.04) 40%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-start gap-7">

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-0.5"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-2xl">
            Gourav Garg
          </h2>
          <p className="font-mono text-xs tracking-[0.18em] text-white/40 uppercase pt-1">
            Software Engineer
          </p>
        </motion.div>

        {/* Headline with 3D tilt */}
        <motion.div
          ref={headlineRef}
          style={{
            rotateX: springRotX,
            rotateY: springRotY,
            transformPerspective: 800,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
          >
            The engineer behind
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              the hard problems.
            </span>
          </motion.h1>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-lg text-[0.95rem] leading-relaxed text-white/40"
        >
          I design backend systems that scale — metadata-driven, event-driven,
          cloud-native. Currently at{" "}
          <span className="text-white/65">SAP Labs</span> shipping enterprise
          cloud features. Exploring the edge of{" "}
          <span className="text-white/65">AI + infrastructure</span>.
        </motion.p>

        {/* Credibility pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {PILLS.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.06, duration: 0.35 }}
              className="rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-white/40"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-wrap items-center gap-5 pt-1"
        >
          <a
            href="#projects"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
          >
            <span className="relative z-10">View projects</span>
            <svg
              className="relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="flex items-center gap-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-white/30 transition-colors duration-150 hover:text-white/70"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="h-9 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/15" />
        </motion.div>
      </motion.div>
    </section>
  );
}
