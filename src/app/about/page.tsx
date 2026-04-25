import Education from "@/components/Education";
import Skills from "@/components/Skills";

export const metadata = {
  title: "About — Gourav Garg",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "#080810" }}>

      {/* Hero */}
      <section className="relative mx-auto max-w-3xl px-6 pt-36 pb-10">
        <p className="mb-6 font-mono text-xs tracking-[0.2em] text-white/25 uppercase">About</p>
    
        <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/40">
          I&apos;m Gourav — a software engineer at{" "}
          <span className="text-white/65">SAP Labs</span> building enterprise cloud infrastructure.
          I care deeply about systems that are fast, observable, and built to last.
          Outside of work I explore the intersection of{" "}
          <span className="text-white/65">AI and backend engineering</span> — RAG pipelines,
          LLM integration, and developer tooling.
        </p>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Education />

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Skills />
    </main>
  );
}
