import Image from "next/image";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="w-full bg-primary pt-[65px]">
        <section id="aboutme-section" className="mb-20 md:mb-24">
          <AboutMe />
        </section>
        <section id="experience-section" className="mb-20 md:mb-24">
          <Experience />
        </section>
        <section id="projects-section" className="mb-20 md:mb-24">
          <Projects />
        </section>
        <section id="skills-section" className="mb-20 md:mb-24">
          <Skills />
        </section>
      </article>
      <Footer /> 
    </main>
  );
}
