import { Facebook, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";


const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/codecraftai81/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/codecraft-ai-45bb2834b/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:codecraftai81@gmail.com", label: "Email" }
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/web-development" },
      { name: "AI Solutions", href: "/ai-solutions" },
      { name: "Mobile Apps", href: "/mobile-apps" },
      { name: "Consulting", href: "/consulting" }
    ]
  },
  {
    title: "Company", 
    links: [
      { name: "About Us", href: "/#about" },
      { name: "Our Team", href: "/#team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/#contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Documentation", href: "/documentation" },
      { name: "Support", href: "/support" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <img src={logo} alt="CodeCraft AI Logo" className="h-12 w-12 rounded-full object-cover" />
              <h3 className="text-xl font-bold text-foreground">CodeCraft AI</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Building the future of web development with AI-powered solutions. 
              Transform your ideas into exceptional digital experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 CodeCraft AI. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;