import Image from "next/image";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="w-full bg-primary">
        <section id="aboutme-section" className="">
          <AboutMe />
        </section>
        <section id="experience-section">

        </section>
      </article>      
    </main>
  );
}
