import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroAiNeural from "@/assets/hero-ai-neural.jpg";
import heroCoding from "@/assets/hero-coding.jpg";
import heroTransformation from "@/assets/hero-transformation.jpg";
import heroWebdev from "@/assets/hero-webdev.jpg";
import heroAutomation from "@/assets/hero-automation.jpg";

const heroSlides = [
  {
    image: heroAiNeural,
    title: "Building Smarter Web Experiences with AI",
    subtitle: "Harness the power of artificial intelligence to create intelligent, adaptive web solutions",
    overlayColor: "rgba(255, 255, 255, 255)", // dark overlay
  },
  {
    image: heroCoding,
    title: "Where Code Meets Creativity",
    subtitle: "Innovative development that transforms ideas into exceptional digital experiences",
    overlayColor: "rgba(10, 15, 40, 0.55)", // bluish dark
  },
  {
    image: heroTransformation,
    title: "Empowering Businesses through Intelligent Automation",
    subtitle: "Drive digital transformation with cutting-edge AI-powered automation solutions",
    overlayColor: "rgba(20, 20, 20, 0.6)",
  },
  {
    image: heroWebdev,
    title: "The Future of Web Development is AI-Powered",
    subtitle: "Next-generation web applications built with modern AI technologies",
    overlayColor: "rgba(0, 0, 0, 0.55)",
  },
  {
    image: heroAutomation,
    title: "Seamless Integration with Agent SDK & n8n",
    subtitle: "Powerful workflow automation and AI agents for your business processes",
    overlayColor: "rgba(0, 10, 30, 0.6)",
  },
];


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentContent = heroSlides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Carousel */}
<AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    className="absolute inset-0"
  >
    {/* Background Image */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${currentContent.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.5)",
      }}
    ></div>

    {/* Dynamic overlay based on slide */}
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: currentContent.overlayColor,
      }}
    ></div>
  </motion.div>
</AnimatePresence>












      {/* Animated Dark Overlay */}
      <div className="absolute inset-0 animate-bg-shift"></div>







      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-subtle opacity-30"></div>

      {/* Animated AI Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Floating AI Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float-slow opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-light rounded-full animate-float-medium opacity-30" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-float-fast opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary-light rounded-full animate-float-slow opacity-35" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-primary rounded-full animate-float-medium opacity-45" style={{ animationDelay: '2s' }}></div>

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse" />
          <line x1="70%" y1="30%" x2="85%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="20%" y1="70%" x2="40%" y2="85%" stroke="hsl(var(--primary-light))" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="60%" y1="60%" x2="80%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        </svg>

        {/* Animated Code Snippets */}
        <div className="absolute top-20 left-10 opacity-20 animate-code-float">
          <pre className="text-xs text-primary font-mono">
            {`<AI>`}
          </pre>
        </div>
        <div className="absolute bottom-32 right-16 opacity-15 animate-code-float" style={{ animationDelay: '1s' }}>
          <pre className="text-xs text-primary-light font-mono">
            {`{code}`}
          </pre>
        </div>
        <div className="absolute top-1/2 right-20 opacity-20 animate-code-float" style={{ animationDelay: '2s' }}>
          <pre className="text-xs text-primary font-mono">
            {`</>`}
          </pre>
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid-flow"></div>
      </div>

      {/* Content Container with Glassmorphism */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-md border border-accent-foreground/20 rounded-full px-5 py-2.5 mb-8 shadow-soft"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">AI-Powered Development</span>
          </motion.div>

          {/* Dynamic Heading with Animation */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {currentContent.title}
              </span>
            </motion.h1>
          </AnimatePresence>

          {/* Dynamic Subtitle with Animation */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            >
              {currentContent.subtitle}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="hero"
              size="xl"
              className="group relative overflow-hidden backdrop-blur-sm shadow-strong hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
              asChild
            >
              <a href="#contact" className="relative z-10">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="backdrop-blur-sm bg-background/20 border-accent-foreground/30 hover:bg-background/40 hover:border-accent-foreground/50 shadow-medium transition-all duration-300"
              asChild
            >
              <a href="#projects">
                <Code className="w-5 h-5" />
                View Our Work
              </a>
            </Button>
          </motion.div>

          {/* Progress Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-2 justify-center mt-12"
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'w-8 bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.8)]'
                    : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>

          {/* Floating Glow Elements */}
          <div className="pointer-events-none absolute top-20 left-10 opacity-30 animate-float blur-3xl">
            <div className="w-32 h-32 bg-primary rounded-full"></div>
          </div>
          <div className="pointer-events-none absolute bottom-20 right-10 opacity-30 animate-float blur-3xl" style={{ animationDelay: '1s' }}>
            <div className="w-24 h-24 bg-primary-light rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;