import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Star, ArrowRight, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const featuredBlogs = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn the best practices for creating maintainable and scalable React applications using TypeScript, including advanced patterns and performance optimizations.",
    author: { name: "Sarah Chen", avatar: "" },
    publishedDate: "Dec 15",
    readTime: "8 min read",
    likes: 124,
    comments: 18,
    tags: ["React", "TypeScript", "Frontend"],
    featured: true
  },
  {
    id: "2", 
    title: "The Complete Guide to Node.js Microservices",
    excerpt: "Discover how to build, deploy, and manage microservices architecture using Node.js, Docker, and Kubernetes for enterprise-grade applications.",
    author: { name: "Alex Rodriguez", avatar: "" },
    publishedDate: "Dec 12",
    readTime: "12 min read", 
    likes: 89,
    comments: 23,
    tags: ["Node.js", "Microservices", "Backend"],
    featured: true
  }
];

const trendingBlogs = [
  {
    id: "3",
    title: "Modern CSS Grid Layouts for Responsive Design",
    excerpt: "Master CSS Grid with practical examples and learn how to create complex, responsive layouts.",
    author: { name: "Maria Garcia", avatar: "" },
    publishedDate: "Dec 10",
    readTime: "6 min read",
    likes: 67,
    comments: 12,
    tags: ["CSS", "Frontend", "Design"]
  },
  {
    id: "4",
    title: "Building RESTful APIs with Express.js and MongoDB", 
    excerpt: "A comprehensive guide to creating robust REST APIs using Express.js and MongoDB.",
    author: { name: "David Kim", avatar: "" },
    publishedDate: "Dec 8", 
    readTime: "10 min read",
    likes: 156,
    comments: 31,
    tags: ["Express.js", "MongoDB", "API"]
  },
  {
    id: "5",
    title: "Introduction to Machine Learning with Python",
    excerpt: "Get started with machine learning using Python, scikit-learn, and practical examples.",
    author: { name: "Dr. Emily Watson", avatar: "" },
    publishedDate: "Dec 5",
    readTime: "15 min read",
    likes: 203,
    comments: 45,
    tags: ["Python", "Machine Learning", "AI"]
  }
];

const stats = [
  { label: "Active Writers", value: "500+", icon: Users },
  { label: "Published Articles", value: "2.5k+", icon: BookOpen },
  { label: "Monthly Readers", value: "50k+", icon: TrendingUp },
  { label: "Community Members", value: "10k+", icon: Star }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Star className="mr-2 h-4 w-4" />
              Featured Content
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Editor's <span className="bg-gradient-primary bg-clip-text text-transparent">Picks</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked articles from our community's most talented writers and developers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="mr-2 h-6 w-6 text-primary" />
                <Badge variant="secondary">Trending Now</Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Popular This Week
              </h2>
              <p className="text-muted-foreground mt-2">
                The most read and shared articles by our community
              </p>
            </div>
            <Link to="/blogs">
              <Button variant="outline">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-primary/5 border-t border-border/40">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardHeader>
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                Stay Updated
              </CardTitle>
              <p className="text-muted-foreground">
                Get the latest articles, tutorials, and developer insights delivered to your inbox every week.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button className="px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Devnovate
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                The ultimate platform for developers to share knowledge, learn from peers, and build amazing things together.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">Twitter</Button>
                <Button variant="ghost" size="sm">GitHub</Button>
                <Button variant="ghost" size="sm">Discord</Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><Link to="/blogs" className="hover:text-primary transition-colors">Browse Articles</Link></div>
<div><Link to="/blogs" className="hover:text-primary transition-colors">Browse Articles</Link></div>
                <div><Link to="/write" className="hover:text-primary transition-colors">Write Article</Link></div>
                <div><Link to="#" className="hover:text-primary transition-colors">Join Community</Link></div>
                <div><Link to="#" className="hover:text-primary transition-colors">Guidelines</Link></div>
                <div><Link to="#" className="hover:text-primary transition-colors">Join Community</Link></div>
                <div><Link to="#" className="hover:text-primary transition-colors">Guidelines</Link></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><Link to="/about" className="hover:text-primary transition-colors">About</Link></div>
                <div><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></div>
                <div><Link to="#" className="hover:text-primary transition-colors">Privacy</Link></div>
                <div><Link to="#" className="hover:text-primary transition-colors">Terms</Link></div>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Devnovate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;