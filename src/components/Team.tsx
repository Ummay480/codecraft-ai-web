"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import React from "react";

// ✅ Import team member images
import ummayImage from "@/assets/team-ummay.jpg";
import fouziaImage from "@/assets/team-fouzia.jpg";
import tayyabaImage from "@/assets/team-tayyaba.jpg";
import darakhshanImage from "@/assets/team-darakhshan.jpg";
import zainMalikImage from "@/assets/team-zain-malik.jpg";
import muhammadAyanImage from "@/assets/team-muhammad-ayan.jpg";

// ✅ Team Data
const teamMembers = [
  {
    name: "Ms. Ummay Kulsoom",
    role: "AI Engineer",
    image: ummayImage,
    initials: "UK",
  },
  {
    name: "Ms. Fouzia",
    role: "Frontend Developer",
    image: fouziaImage,
    initials: "MF",
  },
  {
    name: "Ms. Laiqa",
    role: "Backend Developer",
    image: tayyabaImage,
    initials: "ML",
  },
  {
    name: "Malia Raees",
    role: "UI/UX Designer",
    image: darakhshanImage,
    initials: "MR",
  },
  {
    name: "Zain Malik",
    role: "Marketing Manager",
    image: zainMalikImage,
    initials: "ZM",
  },
 
];

const Team = () => {
  const headerRef = useScrollAnimation();
  
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        {/* ====== Section Header ====== */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of professionals brings together expertise in AI,
            development, design, and digital marketing to deliver exceptional
            results.
          </p>
        </div>

        {/* ====== Team Grid ====== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative bg-card/70 backdrop-blur-sm border border-border/40 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 ease-out transform hover:-translate-y-1"
            >
              <CardContent
                className="p-8 text-center translate-y-4 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Avatar */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                      <AvatarImage
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-xl font-semibold bg-gradient-to-r from-primary to-accent text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>

                {/* Divider Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
