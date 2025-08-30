import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, PenTool, User, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <PenTool className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Devnovate
          </span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/blogs" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Blogs
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

{/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link to="/login">
              <User className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="text-sm">
            <Link to="/admin">
              <Shield className="mr-2 h-4 w-4" />
              Admin
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-border/40 bg-background">
          <div className="container py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm font-medium py-2 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/blogs" className="text-sm font-medium py-2 hover:text-primary transition-colors">
                Blogs
              </Link>
              <Link to="/about" className="text-sm font-medium py-2 hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium py-2 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

{/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2 pt-2">
              <Button asChild variant="ghost" size="sm" className="justify-start">
                <Link to="/login">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="justify-start">
                <Link to="/admin">
                  <Shield className="mr-2 h-4 w-4" />
                  Admin Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;