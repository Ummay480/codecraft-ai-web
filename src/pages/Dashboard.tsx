import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, FolderKanban, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Active Projects", value: "12", icon: FolderKanban, change: "+3 this month" },
    { title: "Team Members", value: "24", icon: Users, change: "+2 this month" },
    { title: "Clients", value: "48", icon: TrendingUp, change: "+8 this quarter" },
    { title: "Success Rate", value: "98%", icon: BarChart3, change: "+2% from last quarter" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Dashboard</h1>
            <p className="text-lg text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Your latest development projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "E-commerce Platform", status: "In Progress", progress: 75 },
                  { name: "AI Chatbot Integration", status: "In Progress", progress: 60 },
                  { name: "Mobile App Redesign", status: "Completed", progress: 100 },
                ].map((project) => (
                  <div key={project.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{project.name}</span>
                      <span className="text-xs text-muted-foreground">{project.status}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all" 
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <button className="w-full text-left p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="font-medium text-foreground">Start New Project</div>
                  <div className="text-sm text-muted-foreground">Create a new development project</div>
                </button>
                <button className="w-full text-left p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="font-medium text-foreground">Schedule Meeting</div>
                  <div className="text-sm text-muted-foreground">Book a consultation with our team</div>
                </button>
                <button className="w-full text-left p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="font-medium text-foreground">View Reports</div>
                  <div className="text-sm text-muted-foreground">Access project analytics and insights</div>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
