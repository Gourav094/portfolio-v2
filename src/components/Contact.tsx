"use client";

import { motion } from "framer-motion";

const SOCIALS = [
  {
    label: "gouravgarg.dev@gmail.com",
    href: "mailto:gouravgarg.dev@gmail.com",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
        <path d="M3 5h14l-7 7-7-7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <rect x="3" y="5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Gourav094",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gouravgarg094/",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
        <path d="M0 1.44C0 .645.662 0 1.475 0h17.05C19.338 0 20 .645 20 1.44v17.12c0 .795-.662 1.44-1.475 1.44H1.475C.662 20 0 19.355 0 18.56V1.44zM6 7.5H4v9h2v-9zm-1-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 3v1s.875-1 2.5-1c1.5 0 2.5 1 2.5 3v5h-2v-4.5c0-1-.5-1.5-1.5-1.5S10 10 10 11v5.5H8v-9h1z"/>
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@garggourav012",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
        <path d="M11.08 10c0 2.818-2.268 5.103-5.066 5.103S.948 12.818.948 10 3.216 4.897 6.014 4.897 11.08 7.182 11.08 10zm5.534 0c0 2.65-1.134 4.8-2.533 4.8-1.4 0-2.533-2.15-2.533-4.8s1.133-4.8 2.533-4.8c1.4 0 2.533 2.15 2.533 4.8zm2.44 0c0 2.374-.398 4.3-.89 4.3-.49 0-.889-1.926-.889-4.3s.398-4.3.89-4.3c.49 0 .889 1.926.889 4.3z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)" }}
      />

      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-1"
          >
            <p className="font-mono text-xs tracking-[0.2em] text-white/25 uppercase mb-3">Contact</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white/40 sm:text-4xl">
              Interested in
            </h2>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Building Together?
            </h2>
          </motion.div>

          {/* Center — curved arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block text-white/15"
          >
            <svg viewBox="0 0 120 60" className="h-16 w-28" fill="none">
              <path
                d="M10 50 Q60 10 100 30"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M100 25 L105 30 L98 34"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />    
            </svg>
          </motion.div>

          {/* Right — socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-white/50 transition-all duration-200 hover:border-white/20 hover:text-white/90 hover:bg-white/[0.06]"
              >
                {s.icon}
                {s.label}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom footer line */}
      <div className="border-t border-white/[0.04] py-5 text-center font-mono text-[11px] text-white/15">
        © {new Date().getFullYear()} Gourav Garg
      </div>
    </section>
  );
}
