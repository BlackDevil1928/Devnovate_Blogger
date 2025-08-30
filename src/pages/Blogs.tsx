import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SortDesc } from "lucide-react";
import { useState } from "react";

import mockBlogs from "@/data/mockBlogs";

const popularTags = [
  "React", "TypeScript", "Node.js", "Python", "JavaScript", 
  "CSS", "API Design", "Frontend", "Backend", "DevOps", "AI"
];

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredBlogs = mockBlogs.filter((b) => {
    const matchesTag = selectedTag ? b.tags.includes(selectedTag) : true;
    const matchesQuery = normalizedQuery
      ? b.title.toLowerCase().includes(normalizedQuery) ||
        b.excerpt.toLowerCase().includes(normalizedQuery) ||
        b.author.name.toLowerCase().includes(normalizedQuery)
      : true;
    return matchesTag && matchesQuery;
  });

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Developer <span className="bg-gradient-primary bg-clip-text text-transparent">Articles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and best practices from our community of developers.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <SortDesc className="mr-2 h-4 w-4" />
              Sort
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>• New article published by Sarah Chen</div>
                <div>• 5 new comments on "Node.js Guide"</div>
                <div>• Alex Rodriguez joined the community</div>
                <div>• Weekly newsletter sent</div>
              </div>
            </div>
          </div>

{/* Blog Grid */}
          <div className="flex-1">
            {visibleBlogs.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <div className="text-2xl">No results 😿</div>
                <div className="text-sm mt-2">Try a different search or tag.</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visibleBlogs.map((blog) => (
                  <BlogCard key={blog.id} {...blog} />
                ))}
              </div>
            )}

            {/* Load More */}
            {visibleBlogs.length < filteredBlogs.length && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" onClick={() => setVisibleCount((c) => c + 4)}>
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;