import { Briefcase, Heart, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement in cutting-edge technologies."
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible work arrangements and supportive team culture."
  },
  {
    icon: Briefcase,
    title: "Exciting Projects",
    description: "Work on innovative projects that make a real impact."
  }
];

const openings = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "AI/ML Engineer",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Be part of a dynamic team building the future of web development and AI solutions. 
              We're always looking for talented individuals to join our mission.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <benefit.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Open Positions</h2>
              <div className="space-y-4">
                {openings.map((job, index) => (
                  <Card key={index} className="border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="mb-2">{job.title}</CardTitle>
                          <CardDescription>{job.location} • {job.type}</CardDescription>
                        </div>
                        <Button onClick={() => window.location.href = "/#contact"}>Apply Now</Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
