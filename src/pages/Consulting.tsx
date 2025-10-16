import { Lightbulb, TrendingUp, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "Technology Strategy",
    description: "Develop comprehensive technology roadmaps aligned with your business goals."
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "Guide your organization through successful digital transformation initiatives."
  },
  {
    icon: Shield,
    title: "Technical Audits",
    description: "Assess your current systems and identify opportunities for improvement."
  }
];

const Consulting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Technology Consulting</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Expert guidance to help you navigate complex technology decisions and accelerate your 
              digital transformation journey. We provide strategic insights and actionable recommendations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" onClick={() => window.location.href = "/#contact"}>
              Schedule Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consulting;
