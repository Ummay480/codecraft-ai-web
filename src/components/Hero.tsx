import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-subtle hero-pattern"></div>
      <div 
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm border border-accent-foreground/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">AI-Powered Development</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">CodeCraft AI</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build smarter with AI crafts code
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Transform your ideas into powerful web applications with our cutting-edge AI development services. 
            We combine human creativity with artificial intelligence to deliver exceptional results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#projects">
                <Code className="w-5 h-5" />
                View Our Work
              </a>
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="pointer-events-none absolute top-20 left-10 opacity-20 animate-float">
            <div className="w-20 h-20 bg-gradient-primary rounded-full blur-xl"></div>
          </div>
          <div className="pointer-events-none absolute bottom-20 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 bg-primary-light rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;