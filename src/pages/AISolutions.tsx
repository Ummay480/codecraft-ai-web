import { Brain, Sparkles, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Brain,
    title: "Machine Learning Integration",
    description: "Implement intelligent systems that learn and adapt to your business needs."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Automation",
    description: "Streamline operations with smart automation and predictive analytics."
  },
  {
    icon: Target,
    title: "Custom AI Models",
    description: "Develop tailored AI solutions for your specific industry challenges."
  }
];

const AISolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">AI Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Harness the power of artificial intelligence to transform your business. Our AI solutions 
              help you make smarter decisions, automate processes, and unlock new opportunities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <solution.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" onClick={() => window.location.href = "/#contact"}>
              Explore AI Solutions
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AISolutions;
