import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "Smart product recommendations and inventory management system built with React and Python AI models.",
      tech: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Management Dashboard",
      description: "Comprehensive patient management system with AI-driven analytics and appointment scheduling.",
      tech: ["Next.js", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Smart Financial Advisor",
      description: "AI-powered investment advisor with real-time market analysis and personalized recommendations.",
      tech: ["Vue.js", "Python", "FastAPI", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Educational Learning Platform",
      description: "Interactive learning platform with AI tutoring and progress tracking for students.",
      tech: ["React", "Express.js", "MySQL", "OpenAI API", "AWS"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Analytics Tool",
      description: "Market analysis platform with predictive pricing models and property recommendations.",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "Machine Learning", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Management Suite",
      description: "Comprehensive social media management with AI content generation and analytics.",
      tech: ["React", "Node.js", "GraphQL", "MongoDB", "Social APIs"],
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=250&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform with AI-powered solutions and cutting-edge web technologies.
          </p>
        </div>

        {/* Portfolio Video Showcase */}
        <div className="mb-16 space-y-8">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Lovable Portfolio Showcase</CardTitle>
                <CardDescription>Watch our latest Lovable projects in action</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video 
                  controls 
                  className="w-full"
                  preload="metadata"
                >
                  <source src="/videos/Lovable-portfolio.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Full Stack Next.js Projects</CardTitle>
                <CardDescription>Our comprehensive Next.js development portfolio</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <video 
                  controls 
                  className="w-full"
                  preload="metadata"
                >
                  <source src="/videos/Web-Portfolio.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
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

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;