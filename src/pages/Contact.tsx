import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Users, HelpCircle, Send } from "lucide-react";
import Threads from "@/components/ui/threads-background";

const Contact = () => {
  const contactOptions = [
    {
      icon: Mail,
      title: "General Inquiries",
      description: "Questions about Devnovate or our platform",
      action: "hello@devnovate.com"
    },
    {
      icon: MessageCircle,
      title: "Content & Editorial",
      description: "Article submissions and editorial feedback",
      action: "editorial@devnovate.com"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Help with your account or community guidelines",
      action: "support@devnovate.com"
    },
    {
      icon: HelpCircle,
      title: "Partnership Opportunities",
      description: "Collaboration and sponsorship inquiries",
      action: "partnerships@devnovate.com"
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
            amplitude={0.6} 
            distance={0.1} 
            enableMouseInteraction={true} 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-6">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Connect
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or want to collaborate? We'd love to hear from you. 
            Our team is here to help and support the developer community.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the best way to reach us based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {option.action}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-2">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company / Organization
                    </label>
                    <Input id="company" placeholder="Your company name (optional)" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full shadow-glow">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about Devnovate.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I submit an article?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create an account, click "Start Writing" and submit your article for review. 
                  Our editorial team will review and provide feedback within 3-5 business days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What topics do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept articles on software development, programming tutorials, 
                  tech industry insights, career advice, and emerging technologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a content guideline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We maintain high standards for quality, originality, and value. 
                  Articles should be well-structured, informative, and beneficial to developers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I republish my content?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Authors retain rights to their content. You can republish elsewhere, 
                  but we ask that you mention Devnovate as the original publication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                We're Here to Help
              </CardTitle>
              <p className="text-muted-foreground">
                Our team typically responds to inquiries within 24 hours during business days. 
                For urgent matters, please use the appropriate contact email above.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-4">
                <Button variant="outline">
                  Visit Help Center
                </Button>
                <Button variant="outline">
                  Join Discord Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;