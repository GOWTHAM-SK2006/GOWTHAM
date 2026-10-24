import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// year is computed server-side so it doesn't trigger the client prerender warning
const CURRENT_YEAR = new Date().getFullYear();

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] btn btn-primary text-sm"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Services />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Contact />
      </main>

      <Footer year={CURRENT_YEAR} />
    </>
  );
}
