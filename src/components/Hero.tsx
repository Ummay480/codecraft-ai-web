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