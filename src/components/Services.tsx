import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code2, Smartphone, Zap, Globe, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Development",
    description: "Leverage machine learning and AI to build intelligent applications that adapt and learn from user behavior."
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Complete web applications using modern frameworks like React, Node.js, and cutting-edge technologies."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Beautiful, mobile-first designs that work perfectly across all devices and screen sizes."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast applications optimized for speed, SEO, and exceptional user experience."
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Custom web apps tailored to your business needs with scalable architecture and modern UX."
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration with APIs, databases, and third-party services to power your applications."
  }
];

const Services = () => {
  const headerRef = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div ref={headerRef as any} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive AI-powered development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cardRef = useScrollAnimation();

            return (
              <Card
                key={index}
                ref={cardRef as any}
                className="border p-6 bg-white shadow-md rounded-lg animate-swipe-up card-shadow-mobile"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}


        </div>
      </div>
    </section>
  );
};

export default Services;