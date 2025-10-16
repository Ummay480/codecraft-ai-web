import { Code2, Rocket, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    description: "Tailored solutions built with modern frameworks like React, Next.js, and TypeScript."
  },
  {
    icon: Rocket,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website looks perfect on all devices."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Lightning-fast loading times and optimized user experiences."
  }
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Web Development Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Transform your digital presence with cutting-edge web development solutions. We create fast, 
              secure, and scalable web applications tailored to your business needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" onClick={() => window.location.href = "/#contact"}>
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
