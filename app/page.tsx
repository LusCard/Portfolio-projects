import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>

      <Sidebar />

      <main className="flex-1 md:ml-64 w-full">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-0">
          <div className="min-h-screen flex items-center justify-center flex-col text-left">
            <div className="max-w-4xl w-full">
              <p className="text-[#64ffda] font-mono text-lg mb-4">Hola, me llamo</p>
              <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">Lucas Cárdenas.</h1>
              <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8">Soy un programador.</h2>
              <p className="max-w-xl text-[#8892b0] text-lg leading-relaxed mb-10">
                Soy un desarrollador de software con experiencia en el desarrollo de aplicaciones web y móviles.
              </p>

            </div>
          </div>

          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Contact />

          <footer className="py-8 text-center text-sm text-[#8892b0] md:hidden">
            <p>Diseñado y construido por Lucas Cárdenas</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
