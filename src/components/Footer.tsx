import { Facebook, Linkedin, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/codecraftai81/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/codecraft-ai-45bb2834b/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/codecraftai81/", label: "Instagram" },
  { icon: Mail, href: "mailto:codecraftai81@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-b border-border mt-16">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        
        {/* --- Logo & Brand --- */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={logo}
            alt="CodeCraft AI Logo"
            className="h-12 w-12 rounded-full object-cover shadow-lg ring-2 ring-blue-800/30"
          />
          <h3 className="text-2xl font-semibold text-primary">CodeCraft AI</h3>
        </div>

        {/* --- Tagline --- */}
        <p className="text-muted-foreground max-w-md mb-6 text-sm md:text-base">
          Building the future of web development with AI-powered solutions.  
          Turning your innovative ideas into extraordinary digital experiences.
        </p>

        {/* --- Footer Navigation Links --- */}
        <div className="flex flex-wrap justify-center space-x-6 mb-8 text-sm font-medium">
          <a href="/#about" className="text-primary hover:text-foreground transition-colors">
            About
          </a>
          <a href="/#services" className="text-primary hover:text-foreground transition-colors">
            Services
          </a>
          <a href="/#contact" className="text-primary hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        {/* --- Social Links --- */}
        <div className="flex space-x-5 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-foreground hover:bg-primary transition-all duration-300 hover:scale-110 shadow-md group"
            >
              <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>

        {/* --- Bottom Text --- */}
        <div className="w-full border-t  pt-6 text-sm text-gray-900 flex flex-col md:flex-row justify-between items-center gap-3">
          <span>© 2025 CodeCraft AI. All rights reserved.</span>
          <span className="text-xs md:text-sm">
            Made with ❤️ by <span className="text-primary font-medium">CodeCraft Team</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
