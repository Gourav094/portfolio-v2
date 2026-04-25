"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SKILL_GROUPS = [
  {
    category: "Backend",
    color: "#a78bfa",
    borderColor: "rgba(167,139,250,0.2)",
    glowColor: "rgba(139,92,246,0.06)",
    skills: [
      {
        label: "Node.js",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <path d="M16 2L2 10v12l14 8 14-8V10L16 2z" fill="#539E43" fillOpacity="0.9"/>
            <path d="M16 7.5v17M9 11.5l7 4 7-4" stroke="#fff" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        label: "Spring Boot",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <circle cx="16" cy="16" r="13" fill="#6DB33F" fillOpacity="0.15" stroke="#6DB33F" strokeWidth="1.2"/>
            <path d="M10 20c1-4 3-7 6-8.5M16 11.5c3 0 6 2 6 5.5s-3 6-6 6" stroke="#6DB33F" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="22" cy="10" r="1.5" fill="#6DB33F"/>
          </svg>
        ),
      },
      {
        label: "Microservices",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <circle cx="16" cy="16" r="3" fill="#a78bfa"/>
            <circle cx="6" cy="9" r="2.5" stroke="#a78bfa" strokeWidth="1.2"/>
            <circle cx="26" cy="9" r="2.5" stroke="#a78bfa" strokeWidth="1.2"/>
            <circle cx="6" cy="23" r="2.5" stroke="#a78bfa" strokeWidth="1.2"/>
            <circle cx="26" cy="23" r="2.5" stroke="#a78bfa" strokeWidth="1.2"/>
            <path d="M13.5 14.5L8 11M18.5 14.5L24 11M13.5 17.5L8 21M18.5 17.5L24 21" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.5"/>
          </svg>
        ),
      },
      {
        label: "REST",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <rect x="4" y="10" width="24" height="5" rx="2.5" stroke="#a78bfa" strokeWidth="1.2"/>
            <rect x="4" y="17" width="16" height="5" rx="2.5" stroke="#a78bfa" strokeWidth="1.2" strokeOpacity="0.45"/>
            <circle cx="25" cy="19.5" r="2.5" fill="#a78bfa" fillOpacity="0.25" stroke="#a78bfa" strokeWidth="1.2"/>
          </svg>
        ),
      },
      {
        label: "GraphQL",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <path d="M16 4l10.4 6v12L16 28 5.6 22V10L16 4z" stroke="#E535AB" strokeWidth="1.3"/>
            <circle cx="16" cy="4" r="1.8" fill="#E535AB"/>
            <circle cx="26.4" cy="10" r="1.8" fill="#E535AB"/>
            <circle cx="26.4" cy="22" r="1.8" fill="#E535AB"/>
            <circle cx="16" cy="28" r="1.8" fill="#E535AB"/>
            <circle cx="5.6" cy="22" r="1.8" fill="#E535AB"/>
            <circle cx="5.6" cy="10" r="1.8" fill="#E535AB"/>
            <circle cx="16" cy="16" r="2.5" fill="#E535AB" fillOpacity="0.25"/>
          </svg>
        ),
      },
      {
        label: "ABAP",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <rect x="4" y="6" width="24" height="20" rx="3" fill="#0070F2" fillOpacity="0.15" stroke="#0070F2" strokeWidth="1.2"/>
            <path d="M9 22l4-12 4 12M11 18h4" stroke="#0070F2" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M21 10h2a2 2 0 010 4h-2v-4zM21 14h2.5a2 2 0 010 4H21v-4" stroke="#0070F2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Frontend",
    color: "#60a5fa",
    borderColor: "rgba(96,165,250,0.2)",
    glowColor: "rgba(59,130,246,0.06)",
    skills: [
      {
        label: "React",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.3"/>
            <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(60 16 16)"/>
            <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(120 16 16)"/>
            <circle cx="16" cy="16" r="2" fill="#61DAFB"/>
          </svg>
        ),
      },
      {
        label: "Angular",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <path d="M16 3L4 7l1.8 15.6L16 29l10.2-6.4L28 7 16 3z" fill="#DD0031" fillOpacity="0.15" stroke="#DD0031" strokeWidth="1.2"/>
            <path d="M16 8l5 11h-3l-1-2.5h-2L14 19h-3l5-11z" fill="#DD0031" fillOpacity="0.8"/>
          </svg>
        ),
      },
      {
        label: "TypeScript",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <rect x="3" y="3" width="26" height="26" rx="3" fill="#3178C6" fillOpacity="0.2" stroke="#3178C6" strokeWidth="1.2"/>
            <path d="M8 12h8M12 12v9" stroke="#3178C6" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M18 20c0 1 .8 1.5 2 1.5s2.5-.6 2.5-2-1.2-1.8-2.5-2-2.5-.8-2.5-2 .8-2 2.5-2 2 .6 2 1.5" stroke="#3178C6" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        label: "JavaScript",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <rect x="3" y="3" width="26" height="26" rx="3" fill="#F7DF1E" fillOpacity="0.15" stroke="#F7DF1E" strokeWidth="1.2"/>
            <path d="M11 21c0 1.2.6 2 1.8 2s2-.7 2-2.5V13h2.5v7.5c0 2.8-1.6 4-4 4-2.2 0-3.5-1.2-4-2.5" stroke="#F7DF1E" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Data",
    color: "#22d3ee",
    borderColor: "rgba(34,211,238,0.2)",
    glowColor: "rgba(6,182,212,0.06)",
    skills: [
      {
        label: "MongoDB",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <path d="M16 4c0 0-7 7-7 13a7 7 0 0014 0C23 11 16 4 16 4z" fill="#47A248" fillOpacity="0.2" stroke="#47A248" strokeWidth="1.3"/>
            <path d="M16 8v16" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        label: "MySQL",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <ellipse cx="16" cy="10" rx="10" ry="4" stroke="#00758F" strokeWidth="1.3"/>
            <path d="M6 10v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" stroke="#00758F" strokeWidth="1.3"/>
            <path d="M6 16v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" stroke="#00758F" strokeWidth="1.3" strokeOpacity="0.45"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Infra",
    color: "#34d399",
    borderColor: "rgba(52,211,153,0.2)",
    glowColor: "rgba(16,185,129,0.06)",
    skills: [
      {
        label: "Docker",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <rect x="3" y="13" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
            <rect x="9" y="13" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
            <rect x="15" y="13" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
            <rect x="9" y="8" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
            <rect x="15" y="8" width="4" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
            <path d="M3 19c2 3 5 4 9 4h5c4 0 7-2 8-5H3z" fill="#2496ED" fillOpacity="0.15" stroke="#2496ED" strokeWidth="1.2"/>
          </svg>
        ),
      },
      {
        label: "Kubernetes",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <path d="M16 4l11 6.5v11L16 28 5 21.5v-11L16 4z" stroke="#326CE5" strokeWidth="1.3"/>
            <circle cx="16" cy="16" r="3.5" stroke="#326CE5" strokeWidth="1.3"/>
            <path d="M16 8v4.5M16 19.5V24M8 12l3.9 2.25M20.1 17.75L24 20M8 20l3.9-2.25M20.1 14.25L24 12" stroke="#326CE5" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        label: "CI/CD",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <circle cx="8" cy="16" r="3" stroke="#34d399" strokeWidth="1.3"/>
            <circle cx="24" cy="16" r="3" stroke="#34d399" strokeWidth="1.3"/>
            <path d="M11 16h10" stroke="#34d399" strokeWidth="1.3" strokeDasharray="2 2"/>
            <path d="M20 12l4 4-4 4" stroke="#34d399" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        label: "Git",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <path d="M29 15l-12-12a1.4 1.4 0 00-2 0L13 5l2.5 2.5a1.7 1.7 0 012.1 2.1L20.5 12a1.7 1.7 0 11-1 1l-2.7-2.7v7a1.7 1.7 0 11-2 0V11a1.7 1.7 0 01-.9-2.8L11.5 5.6l-8.5 8.5a1.4 1.4 0 000 2l12 12a1.4 1.4 0 002 0l12-12a1.4 1.4 0 000-2z" fill="#F05032" fillOpacity="0.15" stroke="#F05032" strokeWidth="1.2"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "AI",
    color: "#f472b6",
    borderColor: "rgba(244,114,182,0.2)",
    glowColor: "rgba(236,72,153,0.06)",
    skills: [
      {
        label: "RAG",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <rect x="4" y="6" width="10" height="7" rx="2" stroke="#f472b6" strokeWidth="1.3"/>
            <rect x="18" y="6" width="10" height="7" rx="2" stroke="#f472b6" strokeWidth="1.3"/>
            <rect x="11" y="19" width="10" height="7" rx="2" stroke="#f472b6" strokeWidth="1.3"/>
            <path d="M9 13l7 6M23 13l-7 6" stroke="#f472b6" strokeWidth="1.2" strokeOpacity="0.5"/>
          </svg>
        ),
      },
      {
        label: "LangChain",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <path d="M6 16c0-3 2-5 5-5h2" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M26 16c0 3-2 5-5 5h-2" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="12" y="12" width="8" height="8" rx="2" stroke="#f472b6" strokeWidth="1.3"/>
          </svg>
        ),
      },
      {
        label: "LLM Integration",
        icon: (
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
            <rect x="4" y="8" width="24" height="16" rx="3" stroke="#f472b6" strokeWidth="1.3"/>
            <path d="M9 16h2l2-4 2 8 2-6 2 4h2" stroke="#f472b6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  let globalIndex = 0;

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-14 pb-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 font-mono text-xs tracking-[0.2em] text-white/25 uppercase"
      >
        Skills
      </motion.p>

      <div ref={ref} className="flex flex-col gap-6">
        {SKILL_GROUPS.map((group, gi) => {
          const groupStartIndex = globalIndex;
          globalIndex += group.skills.length;

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              {/* Category label */}
              <div className="w-24 shrink-0 text-right">
                <span
                  className="font-mono text-[11px] tracking-widest uppercase"
                  style={{ color: group.color, opacity: 0.7 }}
                >
                  {group.category}
                </span>
              </div>

              {/* Connector line */}
              <div
                className="h-px w-6 shrink-0"
                style={{ background: group.borderColor }}
              />

              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => {
                  const delay = (groupStartIndex + si) * 0.04;
                  return (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + delay, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex items-center gap-2.5 rounded-full px-4 py-2.5 transition-all duration-300 cursor-default"
                      style={{
                        background: `rgba(255,255,255,0.03)`,
                        border: `1px solid rgba(255,255,255,0.07)`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = group.glowColor;
                        (e.currentTarget as HTMLElement).style.border = `1px solid ${group.borderColor}`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${group.glowColor}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `rgba(255,255,255,0.03)`;
                        (e.currentTarget as HTMLElement).style.border = `1px solid rgba(255,255,255,0.07)`;
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <span className="opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                        {skill.icon}
                      </span>
                      <span
                        className="text-[13px] font-medium transition-colors duration-300"
                        style={{ color: "rgba(255,255,255,0.40)" }}
                      >
                        {skill.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
