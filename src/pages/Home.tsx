import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="bg-[#090909] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
}
