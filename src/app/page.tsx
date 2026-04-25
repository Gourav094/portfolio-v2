import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#080810" }}>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
    </main>
  );
}
