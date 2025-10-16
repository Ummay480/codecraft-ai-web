import { Book, Code, FileText, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const docSections = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics and set up your first project"
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Comprehensive API documentation and examples"
  },
  {
    icon: FileText,
    title: "Best Practices",
    description: "Industry standards and recommended approaches"
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Common questions and troubleshooting guides"
  }
];

const faqs = [
  {
    question: "How do I get started with CodeCraft AI?",
    answer: "Contact us through our contact form, and our team will schedule a consultation to understand your needs and provide a customized solution."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in React, TypeScript, Node.js, AI/ML integration, mobile app development, and cloud infrastructure."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we provide comprehensive support and maintenance packages to ensure your applications run smoothly."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity, but most projects range from 4-12 weeks. We'll provide a detailed timeline during consultation."
  }
];

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Everything you need to know about working with CodeCraft AI. Find guides, 
              references, and answers to common questions.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {docSections.map((section, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors cursor-pointer">
                  <CardHeader>
                    <section.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
