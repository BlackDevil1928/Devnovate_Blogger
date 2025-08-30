import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, BookOpen, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import mockBlogs from "@/data/mockBlogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = mockBlogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-6">We couldn't find that article.</p>
          <Link to="/blogs" className="text-primary">Back to Articles</Link>
        </div>
      </div>
    );
  }

  const initials = blog.author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Link to="/blogs" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
        </Link>

        <article className="max-w-3xl mx-auto">
          <div className="mb-4 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={blog.author.avatar} alt={`${blog.author.name} avatar`} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <span>{blog.author.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>{blog.publishedDate}</span></div>
              <div className="flex items-center space-x-1"><BookOpen className="h-4 w-4" /><span>{blog.readTime}</span></div>
            </div>
          </div>

          <Card className="border-border/60">
            <CardContent className="prose prose-invert max-w-none py-6">
              {/* In a real app, render Markdown. For demo, plain text */}
              <div className="whitespace-pre-wrap leading-7">{blog.content}</div>
            </CardContent>
          </Card>
        </article>
      </main>
    </div>
  );
};

export default BlogDetails;
