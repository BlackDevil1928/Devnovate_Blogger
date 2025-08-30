import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Threads from "@/components/ui/threads-background";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First", 
      description: "We believe in the power of developer communities to share knowledge and grow together."
    },
    {
      icon: Target,
      title: "Quality Content",
      description: "Every article goes through careful review to ensure high-quality, actionable insights."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We showcase cutting-edge technologies and innovative approaches to modern development."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Built by developers, for developers, with genuine passion for the craft of coding."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & Chief Editor",
      bio: "Full-stack developer with 8+ years of experience. Passionate about React and TypeScript.",
      avatar: ""
    },
    {
      name: "Alex Rodriguez", 
      role: "Community Manager",
      bio: "DevOps engineer and open-source contributor. Loves building developer communities.",
      avatar: ""
    },
    {
      name: "Maria Garcia",
      role: "Content Curator", 
      bio: "Frontend specialist with expertise in modern CSS and design systems.",
      avatar: ""
    },
    {
      name: "David Kim",
      role: "Backend Architect",
      bio: "Microservices expert and API design enthusiast. MongoDB and Node.js specialist.",
      avatar: ""
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Threads 
            color={[0.6, 0.4, 1]} 
            amplitude={0.8} 
            distance={0.2} 
            enableMouseInteraction={true} 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-6">About Devnovate</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Developers 
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Worldwide
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Devnovate is more than just a blogging platform. We're a thriving community 
            where developers share knowledge, learn from each other, and push the boundaries 
            of what's possible in technology.
          </p>
          <Link to="/blogs">
            <Button size="lg" className="shadow-glow">
              Explore Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              To create the most valuable resource for developers by fostering a community 
              where knowledge flows freely, innovation thrives, and everyone has the opportunity 
              to learn, grow, and contribute to the global developer ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate group of developers, writers, and community builders 
              dedicated to making Devnovate the best platform for developer content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary/5 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Growing Community
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of developers who trust Devnovate for quality content.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2.5K+</div>
              <div className="text-muted-foreground">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Writers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                Ready to Join Our Community?
              </CardTitle>
              <p className="text-muted-foreground">
                Start sharing your knowledge and connect with developers worldwide. 
                Your unique perspective can help others grow and learn.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-glow">
                  Start Writing
                </Button>
                <Link to="/blogs">
                  <Button variant="outline" size="lg">
                    Browse Articles
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;