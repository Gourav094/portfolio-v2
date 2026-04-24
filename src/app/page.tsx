import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#080810" }}>
      <Hero />
      <Experience />
    </main>
  );
}
