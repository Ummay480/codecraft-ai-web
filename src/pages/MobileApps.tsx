import { Smartphone, Layers, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Smartphone,
    title: "Native & Cross-Platform",
    description: "Build apps for iOS and Android with native performance and cross-platform efficiency."
  },
  {
    icon: Layers,
    title: "Modern UI/UX",
    description: "Create intuitive and engaging mobile experiences that users love."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Focus on user needs with data-driven design decisions and continuous improvement."
  }
];

const MobileApps = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Mobile App Development</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Create powerful mobile applications that engage users and drive business growth. 
              We develop high-quality apps for iOS and Android platforms.
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
              Start Your App Project
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MobileApps;
