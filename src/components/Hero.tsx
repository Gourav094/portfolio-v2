"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const LINKS = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/" },
  { label: "Medium", href: "https://medium.com/" },
  { label: "LeetCode", href: "https://leetcode.com/" },
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
  const springRotX = useSpring(rotateX, { stiffness: 120, damping: 25 });
  const springRotY = useSpring(rotateY, { stiffness: 120, damping: 25 });

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
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Gourav Garg
          </h2>
          <p className="font-mono text-xs tracking-[0.18em] text-white/35 uppercase">
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
                className="text-sm text-white/30 transition-colors duration-150 hover:text-white/70"
              >
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
