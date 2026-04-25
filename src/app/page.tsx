import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#080810" }}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
