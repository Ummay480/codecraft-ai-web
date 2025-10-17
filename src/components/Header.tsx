import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <h1 className="text-xl font-bold text-foreground">CodeCraft AI</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="hero" size="lg" asChild>
            <a href="/dashboard">Dashboard</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="hero" asChild>
                <a href="/dashboard">Dashboard</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;