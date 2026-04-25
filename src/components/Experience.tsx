"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EXPERIENCE = {
  company: "SAP Labs India",
  role: "Software Developer",
  period: "Aug 2024 – Present",

  tracks: [
    // {
    //   name: "Sustainability Engineering",
    //   badge: "Current",
    //   description:
    //     "Building enterprise cloud features on SAP's public cloud platform.",
    //   points: [],
    //   tags: [],
    // },
    {
      name: "SAP Cloud for Customer · Public Cloud",
      description: null,
      points: [
        "Replaced hardcoded field labels with metadata-driven configuration, enabling runtime language adaptation without code changes.",
        "Built runtime-configurable field property system using metadata and atomic components for tenant-level control.",
        "Standardized date rendering across regions via shared date-formatting pipes.",
        "Implemented RBAC to enforce authorization boundaries across workflows.",
      ],
      tags: ["Angular", "TypeScript", "Spring boot"],
    },
    {
      name: "S/4HANA Service Engineering · Private Cloud",
      description: null,
      points: [
        "Automated 30+ backend regression scenarios using Process Test Framework (PTF), reducing manual effort per release.",
        "Identified and reported a critical backend data validation vulnerability, improving system integrity.",
        "Detected anomalous backend behavior and raised incidents to prevent production failures.",
      ],
      tags: ["ABAP","PTF"],
    },
  ],
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative mx-auto max-w-3xl px-6 py-24">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 font-mono text-xs tracking-[0.2em] text-white/25 uppercase"
      >
        Experience
      </motion.p>

      <div className="relative flex flex-col gap-12">
        {/* Timeline line */}
        <div className="absolute left-1 top-2 h-full w-px bg-linear-to-b from-violet-500/30 via-white/10 to-transparent" />

        {/* SAP Labs entry */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative pl-8"
        >
          {/* Dot */}
          <div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-violet-400/60 bg-violet-500/30" />

          {/* Company header */}
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-white">{EXPERIENCE.company}</h3>
            <span className="shrink-0 font-mono text-xs text-white/30">{EXPERIENCE.period}</span>
          </div>
          <p className="text-sm font-medium text-violet-300/80">{EXPERIENCE.role}</p>

          {/* Tracks */}
          <div className="mt-5 flex flex-col gap-6">
            {EXPERIENCE.tracks.map((track) => (
              <div key={track.name} className="relative pl-4">
                {/* Track name + badge + period */}
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <p className="font-mono text-[13px] tracking-wide text-white/40 uppercase">
                    {track.name}
                  </p>
                  {/* {track?.badge && (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                      {track?.badge}
                    </span>
                  )} */}
                  {/* <span className="font-mono text-[10px] text-white/20">{track?.period}</span> */}
                </div>

                {track.description && (
                  <p className="mb-3 text-sm italic text-white/30">{track.description}</p>
                )}

                {track.points.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {track.points.map((pt, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-white/30">
                        <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-white/20" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Per-track tags */}
                {track.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/6 bg-white/3 px-2 py-0.5 font-mono text-[10px] text-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
