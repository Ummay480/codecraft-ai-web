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
      const id = window.location.hash?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    // Scroll on initial load
    scrollToHash();
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
