import ScrollProgress from "./components/ScrollProgress";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Hero />
          <About />
          <Work />
          <Education />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}
