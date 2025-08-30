import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";
import Threads from "@/components/ui/threads-background";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <Threads 
          color={[0.6, 0.4, 1]} 
          amplitude={1.2} 
          distance={0.3} 
          enableMouseInteraction={true} 
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        <Badge className="mb-6 px-4 py-2 text-sm font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <TrendingUp className="mr-2 h-4 w-4" />
          Join 10,000+ developers
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Share Your
          <span className="bg-gradient-primary bg-clip-text text-transparent block">
            Developer Story
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Discover cutting-edge tutorials, insights, and stories from developers around the world. 
          Write, learn, and grow together.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="text-lg px-8 py-3 shadow-glow animate-glow">
            <a href="/write">
              Start Writing
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
            <a href="/blogs">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Stories
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Published Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10k+</div>
            <div className="text-muted-foreground">Active Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Expert Contributors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;