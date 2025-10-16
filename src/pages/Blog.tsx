import { Calendar, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "The Future of AI in Web Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build and design web applications, from automated code generation to intelligent user experiences.",
    author: "CodeCraft AI Team",
    date: "October 15, 2025",
    category: "AI & Technology",
    readTime: "5 min read"
  },
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for architecting large-scale React applications that maintain performance and code quality as your project grows.",
    author: "CodeCraft AI Team",
    date: "October 10, 2025",
    category: "Web Development",
    readTime: "8 min read"
  },
  {
    title: "Mobile-First Design: Why It Matters in 2025",
    excerpt: "Understanding the importance of mobile-first approach in modern web design and how it impacts user engagement and conversion rates.",
    author: "CodeCraft AI Team",
    date: "October 5, 2025",
    category: "Design",
    readTime: "6 min read"
  },
  {
    title: "Integrating Machine Learning Models into Web Apps",
    excerpt: "A comprehensive guide to seamlessly incorporating ML models into your web applications, with practical examples and implementation strategies.",
    author: "CodeCraft AI Team",
    date: "September 28, 2025",
    category: "AI & Technology",
    readTime: "10 min read"
  },
  {
    title: "The Rise of Serverless Architecture",
    excerpt: "Discover how serverless computing is changing the landscape of backend development and why it might be the right choice for your next project.",
    author: "CodeCraft AI Team",
    date: "September 20, 2025",
    category: "Cloud Computing",
    readTime: "7 min read"
  },
  {
    title: "UX Design Principles for Developer-Focused Tools",
    excerpt: "Creating intuitive interfaces for technical audiences requires a unique approach. Learn the key principles that make developer tools successful.",
    author: "CodeCraft AI Team",
    date: "September 15, 2025",
    category: "Design",
    readTime: "5 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Stay updated with the latest trends, tutorials, and insights from the world of web development, 
              AI, and digital innovation.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-border hover:border-primary transition-all duration-300 flex flex-col">
                  <CardHeader>
                    <Badge className="w-fit mb-4">{post.category}</Badge>
                    <CardTitle className="text-2xl mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" size="sm" className="group">
                        Read More 
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
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

export default Blog;
