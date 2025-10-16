import { CheckCircle, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "E-Commerce Platform Transformation",
    client: "Global Retail Brand",
    challenge: "Needed a scalable e-commerce solution to handle millions of users",
    solution: "Built a custom React-based platform with AI-powered recommendations",
    results: ["300% increase in conversion rate", "50% reduction in page load time", "2M+ active users"],
    category: "E-Commerce"
  },
  {
    title: "AI-Powered Customer Service",
    client: "Financial Services Company",
    challenge: "High customer support costs and slow response times",
    solution: "Implemented intelligent chatbot with natural language processing",
    results: ["70% reduction in support tickets", "24/7 automated support", "95% customer satisfaction"],
    category: "AI Solutions"
  },
  {
    title: "Mobile App for Healthcare",
    client: "Healthcare Provider Network",
    challenge: "Needed patient engagement app with secure data handling",
    solution: "Developed HIPAA-compliant mobile app for iOS and Android",
    results: ["100K+ downloads", "4.8★ app store rating", "40% increase in patient engagement"],
    category: "Mobile Apps"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Discover how we've helped businesses transform their digital presence and achieve 
              measurable results through innovative technology solutions.
            </p>
            
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="mb-4">{study.category}</Badge>
                        <CardTitle className="text-3xl mb-2">{study.title}</CardTitle>
                        <CardDescription className="text-lg">{study.client}</CardDescription>
                      </div>
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
