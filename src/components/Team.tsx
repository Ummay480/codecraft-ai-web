import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ummayImage from "@/assets/team-ummay.jpg";
import fouziaImage from "@/assets/team-fouzia.jpg";
import tayyabaImage from "@/assets/team-tayyaba.jpg";
import darakhshanImage from "@/assets/team-darakhshan.jpg";
import zainMalikImage from "@/assets/team-zain-malik.jpg";
import muhammadAyanImage from "@/assets/team-muhammad-ayan.jpg";

const teamMembers = [
  {
    name: "Ms. Ummay Kulsoom",
    role: "AI Engineer",
    image: ummayImage,
    initials: "UK"
  },
  {
    name: "Ms. Fouzia",
    role: "Frontend Developer",
    image: fouziaImage,
    initials: "MF"
  },
  {
    name: "Ms. Laiqa",
    role: "Backend Developer",
    image: tayyabaImage,
    initials: "ML"
  },
  {
    name: "Malia Raees",
    role: "UI/UX Designer",
    image: darakhshanImage,
    initials: "MR"
  },
  {
    name: "Zain Malik",
    role: "Marketing Manager",
    image: zainMalikImage,
    initials: "ZM"
  },
  {
    name: "Muhammad Ayan",
    role: "Full-Stack Developer",
    image: muhammadAyanImage,
    initials: "MA"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of professionals brings together expertise in AI, development, 
            design, and digital marketing to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <AvatarImage 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-xl font-semibold bg-gradient-primary text-primary-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                
                <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;