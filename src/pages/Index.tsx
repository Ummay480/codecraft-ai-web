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
    const headerOffset = 80;

    const scrollToElement = (el: HTMLElement) => {
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      try {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } catch (e) {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, offsetPosition);
      }
    };

    const scrollToHash = () => {
      const hash = window.location.hash;
      const id = hash ? hash.slice(1) : "";
      if (!id) return;
      const el = document.getElementById(id);
      if (el) scrollToElement(el);
    };
    
    // Intercept in-page anchor clicks for wider browser support
    const handleAnchorClick = (e: Event) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      // Prevent default jump and perform compatible scrolling
      e.preventDefault();
      // Update URL hash without causing a hard jump
      try {
        history.pushState(null, "", `#${id}`);
      } catch {}
      scrollToElement(el);
    };

    // Small delay to ensure DOM is ready
    setTimeout(scrollToHash, 100);
    
    // Listen to hash changes and anchor clicks
    window.addEventListener("hashchange", scrollToHash);
    document.addEventListener("click", handleAnchorClick as EventListener, { capture: true });
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      document.removeEventListener("click", handleAnchorClick as EventListener, { capture: true } as any);
    };
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
