import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import  agentia  from "@/assets/agentia.png"
import panacloud from "@/assets/panacloud.png";

const Projects = () => {
  const headerRef = useScrollAnimation();

  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description:
        "Smart product recommendations and inventory management system built with React and Python AI models.",
      tech: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      liveUrl: "https://hackhton3.vercel.app/",
      githubUrl: "https://github.com/example/ai-ecommerce",
    },
    {
      title: "Agentia World",
      description:
        "A modern business agency website built with Next.js and Tailwind CSS. Showcasing smooth animations, responsive layouts, and a professional brand identity..",
      tech: ["Next.js", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      image: agentia,   
      liveUrl: "https://agentia-world-five.vercel.app/",
      githubUrl: "https://github.com/MaliaRK/Agentia_World.git",
    },
    {
      title: "disaster management system",
      description:
        "AI-based platform for disaster prediction, resource allocation, and real-time monitoring.",
      tech: ["Vue.js", "Python", "FastAPI", "Redis", "Docker"],
      image:
        "https://images.unsplash.com/photo-1541710005980-7ea80ff232d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkaXNhc3RlciUyMHJlbGllZnxlbnwwfHx8fDE3NTkyNTc4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080%22,",
      liveUrl: "https://disaster-management-liart.vercel.app/",
      githubUrl: "https://github.com/example/smart-financial-advisor",
    },
    {
      title: "Educational Learning Platform",
      description:
        "Interactive learning platform with AI tutoring and progress tracking for students.",
      tech: ["React", "Express.js", "MySQL", "OpenAI API", "AWS"],
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop",
      liveUrl: "https://edu-ai-platform-demo.vercel.app",
      githubUrl: "https://github.com/example/edu-ai-platform",
    },
    {
      title: "Panacloud Website Clone",
      description:
        "A beautifully recreated version of the Panacloud site using React and modern UI principles. Focused on performance, pixel-perfect design, and dynamic animations.",
      tech: [
        "TypeScript",
        "Custom CSS",
        "PostgreSQL",
        "Machine Learning",
        "Google Maps API",
      ],
      image: panacloud,
      liveUrl: "https://final-assignment-company-portfolio.vercel.app/",
      githubUrl: "https://github.com/MaliaRK/final_assignment_company_portfolio.git",
    },
    {
      title: "Social Media Management Suite",
      description:
        "Comprehensive social media management with AI content generation and analytics.",
      tech: ["React", "Node.js", "GraphQL", "MongoDB", "Social APIs"],
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=250&fit=crop",
      liveUrl: "https://social-suite-demo.vercel.app",
      githubUrl: "https://github.com/example/social-suite",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 animate-on-scroll">
          <h2 className="text-4xl font-bold text-foreground mb-3">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform with AI-powered
            solutions and cutting-edge web technologies.
          </p>
        </div>

        {/* === Videos Section === */}
        <div className="space-y-8 mb-10">
          {[
            {
              title: "AI Presentation Portfolio",
              desc: "Comprehensive AI-powered presentation and development showcase",
              src: "/videos/AI-Presentation-Portfolio.mp4",
            },
            {
              title: "Lovable Portfolio Showcase",
              desc: "Watch our latest Lovable projects in action",
              src: "/videos/Lovable-portfolio.mp4",
            },
            {
              title: "Full Stack Next.js Projects",
              desc: "Our comprehensive Next.js development portfolio",
              src: "/videos/Web-Portfolio.mp4",
            },
            {
              title: "OpenAI Agents Projects",
              desc: "Custom AI agents and automation solutions built with OpenAI SDK",
              src: "/videos/OpenAI-SDK-Portfolio.mp4",
            },
          ].map((video, i) => (
            <Card
              key={i}
              className="max-w-4xl mx-auto overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="text-center py-4">
                <CardTitle className="text-2xl mb-1">{video.title}</CardTitle>
                <CardDescription>{video.desc}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video controls className="w-full aspect-video object-cover">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* === Projects Grid === */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover-lift border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* === View All Button === */}
        <div className="text-center mt-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
