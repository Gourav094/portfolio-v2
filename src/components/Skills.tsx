"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SKILL_GROUPS = [
  { label: "Node.js",        category: "Backend"    },
  { label: "Spring Boot",    category: "Backend"    },
  { label: "ABAP",           category: "Backend"    },
  { label: "Microservices",  category: "Backend"    },
  { label: "WebSockets",     category: "Backend"    },
  { label: "REST",           category: "Backend"    },
  { label: "GraphQL",        category: "Backend"    },
  { label: "Angular",        category: "Frontend"   },
  { label: "React",          category: "Frontend"   },
  { label: "TypeScript",     category: "Frontend"   },
  { label: "JavaScript",     category: "Frontend"   },
  { label: "MongoDB",        category: "Database"   },
  { label: "MySQL",          category: "Database"   },
  { label: "Docker",         category: "DevOps"     },
  { label: "Kubernetes",     category: "DevOps"     },
  { label: "CI/CD",          category: "DevOps"     },
  { label: "Git",            category: "DevOps"     },
  { label: "RAG",            category: "AI"         },
  { label: "LangChain",      category: "AI"         },
  { label: "LLM Integration",category: "AI"         },
];

const CATEGORY_COLOR: Record<string, string> = {
  Backend:  "group-hover:border-violet-500/40 group-hover:bg-violet-500/5",
  Frontend: "group-hover:border-blue-500/40 group-hover:bg-blue-500/5",
  Database: "group-hover:border-cyan-500/40 group-hover:bg-cyan-500/5",
  DevOps:   "group-hover:border-emerald-500/40 group-hover:bg-emerald-500/5",
  AI:       "group-hover:border-pink-500/40 group-hover:bg-pink-500/5",
};

const CATEGORY_TEXT: Record<string, string> = {
  Backend:  "group-hover:text-violet-300",
  Frontend: "group-hover:text-blue-300",
  Database: "group-hover:text-cyan-300",
  DevOps:   "group-hover:text-emerald-300",
  AI:       "group-hover:text-pink-300",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative mx-auto max-w-3xl px-6 py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 font-mono text-xs tracking-[0.2em] text-white/25 uppercase"
      >
        Skills
      </motion.p>

      <div ref={ref} className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {SKILL_GROUPS.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className={`group flex h-20 cursor-default items-center justify-center rounded-2xl border border-white/[0.07] bg-[#0f0f17] transition-all duration-300 ${CATEGORY_COLOR[skill.category]}`}
          >
            <span className={`text-center text-sm font-medium text-white/40 transition-colors duration-300 px-4 ${CATEGORY_TEXT[skill.category]}`}>
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
