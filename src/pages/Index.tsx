import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      const id = hash ? hash.slice(1) : "";
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        // Cross-browser compatible scrolling
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        try {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        } catch (e) {
          // Fallback for browsers that don't support smooth scrolling
          window.scrollTo(0, offsetPosition);
        }
      }
    };
    
    // Small delay to ensure DOM is ready
    setTimeout(scrollToHash, 100);
    
    // Listen to hash changes
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
