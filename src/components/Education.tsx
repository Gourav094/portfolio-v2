"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EDUCATION = [
  {
    degree: "M.Tech — Computer Science",
    school: "BITS Pilani",
    period: "2024 – 2026",
    highlights: [
      "Specialization in Software Engineering",
      "Coursework: Scalable Services, DevOps, Software Architecture, OSS",
    ],
    accent: "#60a5fa",
    rgb: "96,165,250",
  },
  {
    degree: "B.Tech — Computer Science",
    school: "Chandigarh Group of Colleges, Landran",
    period: "2020 – 2024",
    highlights: [
      "CGPA: 9.06 / 10",
      "Core focus on algorithms, data structures, and distributed systems",
    ],
    accent: "#a78bfa",
    rgb: "139,92,246",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative mx-auto max-w-5xl px-6 py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 font-mono text-xs tracking-[0.2em] text-white/25 uppercase"
      >
        Education
      </motion.p>

      <div className="relative flex flex-col gap-10">
        {/* Timeline line */}
        <div className="absolute left-[4px] top-2 h-full w-px bg-gradient-to-b from-violet-500/30 via-white/10 to-transparent" />

        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-8"
          >
            {/* Dot */}
            <div
              className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border"
              style={{
                borderColor: `rgba(${edu.rgb},0.6)`,
                background: `rgba(${edu.rgb},0.25)`,
              }}
            />

            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-white/90">{edu.degree}</h3>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-xs text-white/30">{edu.period}</span>
              </div>
            </div>

            <p className="mt-0.5 text-sm font-medium" style={{ color: `rgba(${edu.rgb},0.7)` }}>
              {edu.school}
            </p>

            <ul className="mt-3 flex flex-col gap-1.5">
              {edu.highlights.map((h, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-white/40">
                  <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-white/20" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
