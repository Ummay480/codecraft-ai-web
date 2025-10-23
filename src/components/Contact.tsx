import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Swal from "sweetalert2";

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  Swal.fire({
    title: "Message Sent!",
    text: "We'll get back to you within 24 hours.",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#4f46e5", // Tailwind indigo-600
  });
};


const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "codecraftai81@gmail.com",
    href: "mailto:codecraftai81@gmail.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+92 324 920 8788",
    href: "tel:+923249208788"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our office location",
    contact: "Nishter Road, Karachi",
    href: "https://www.google.com/maps/search/?api=1&query=Nishter+Road,+Karachi"
  }
];


const Contact = () => {
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="animate-fade-in-left">
            <Card className="shadow-medium border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-card-foreground">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input id="company" placeholder="Your Company" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..."
                  className="min-h-[120px] resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8 animate-fade-in-right">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Let's start a conversation</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help bring your vision to life. Whether you need a simple website
                or a complex AI-powered application, our team is ready to deliver exceptional results.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.icon === MapPin ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">{info.description}</p>
                    <p className="text-primary font-medium group-hover:underline">{info.contact}</p>
                  </div>
                </a>
              ))}

            </div>

            <div className="bg-accent/30 border border-border/50 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Quick Response Time</h4>
              <p className="text-muted-foreground text-sm">
                We typically respond to all inquiries within 24 hours. For urgent matters,
                please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
