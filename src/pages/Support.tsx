import { Mail, MessageSquare, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const supportChannels = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 24 hours",
    contact: "codecraftai81@gmail.com",
    action: "Send Email"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available during business hours",
    action: "Start Chat"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    contact: "Schedule a call",
    action: "Book Call"
  }
];

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Support Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              We're here to help. Choose your preferred support channel and get the assistance you need.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {supportChannels.map((channel, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <channel.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{channel.title}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{channel.contact}</p>
                    <Button 
                      className="w-full" 
                      onClick={() => window.location.href = "/#contact"}
                    >
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border bg-accent/50">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>Support Hours</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Monday - Friday: 9:00 AM - 6:00 PM (EST)
                      <br />
                      Weekend support available for emergency issues
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
