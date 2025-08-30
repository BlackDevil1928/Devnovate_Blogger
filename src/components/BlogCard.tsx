import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, BookOpen, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedDate: string;
  readTime: string;
  likes: number;
  comments: number;
  tags: string[];
  featured?: boolean;
}

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  publishedDate, 
  readTime, 
  likes, 
  comments, 
  tags, 
  featured = false 
}: BlogCardProps) => {
  return (
    <Card className={`group hover:shadow-elevated transition-all duration-300 ${featured ? 'border-primary/30 shadow-glow' : ''}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
          {featured && (
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          )}
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={author.avatar} />
              <AvatarFallback className="text-xs">
                {author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <span>{author.name}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{publishedDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-red-500">
              <Heart className="h-4 w-4 mr-1" />
              {likes}
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-blue-500">
              <MessageCircle className="h-4 w-4 mr-1" />
              {comments}
            </Button>
          </div>
          
          <Link to={`/blog/${id}`}>
            <Button variant="outline" size="sm" className="text-xs">
              Read More
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;