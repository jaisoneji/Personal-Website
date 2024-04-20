import Image from "next/image";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="w-full bg-primary">
        <section id="aboutme-section" className="mb-24">
          <AboutMe />
        </section>
        <section id="projects-section" className="mb-24">
          <Projects />
        </section>
      </article>      
    </main>
  );
}
