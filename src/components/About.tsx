import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Lightbulb } from "lucide-react";

const stats = [
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
  { number: "24/7", label: "Support" }
];

const features = [
  "AI-Enhanced Code Generation",
  "Automated Testing & Deployment", 
  "Performance Optimization",
  "Security Best Practices",
  "Scalable Architecture",
  "Ongoing Support & Maintenance"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">CodeCraft AI</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just another development agency. We're pioneers in AI-assisted development, 
              combining cutting-edge technology with human expertise to deliver exceptional results.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Right Column - Stats & Icons */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-accent/30 rounded-xl border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Team</h3>
                <p className="text-sm text-muted-foreground">Expert developers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Quality</h3>
                <p className="text-sm text-muted-foreground">Premium results</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Innovation</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;