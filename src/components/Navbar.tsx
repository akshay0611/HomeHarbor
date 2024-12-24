import { Link, useNavigate } from "react-router-dom";
import { Home, Search, User, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTheme } from "@/components/ThemeProvider";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/properties?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      toast({
        title: "Please enter a search term",
        description: "Enter a location or property type to search",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">HomeHarbor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 flex-grow justify-center max-w-2xl">
            <form onSubmit={handleSearch} className="w-full max-w-lg relative">
              <Input
                type="search"
                placeholder="Search properties..."
                className="w-full pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>

        
          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="px-4 py-2 text-sm hover:text-purple-600">
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Properties</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <Link
                        to="/properties/buy"
                        className="block p-2 hover:bg-slate-100 rounded-md"
                      >
                        Buy
                      </Link>
                      <Link
                        to="/properties/rent"
                        className="block p-2 hover:bg-slate-100 rounded-md"
                      >
                        Rent
                      </Link>
                      <Link
                        to="/properties/sell"
                        className="block p-2 hover:bg-slate-100 rounded-md"
                      >
                        Sell
                      </Link>
                      <Link
                        to="/properties/invest"
                        className="block p-2 hover:bg-slate-100 rounded-md"
                      >
                        Invest
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className="px-4 py-2 text-sm hover:text-purple-600"
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className="px-4 py-2 text-sm hover:text-purple-600"
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/signin">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            </Button>
          </div>

          {/* Theme Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            className="ml-auto"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search properties..."
                className="w-full pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
            <Link to="/" className="block px-4 py-2 hover:bg-slate-100">
              Home
            </Link>
            <Link
              to="/properties/buy"
              className="block px-4 py-2 hover:bg-slate-100"
            >
              Buy
            </Link>
            <Link
              to="/properties/rent"
              className="block px-4 py-2 hover:bg-slate-100"
            >
              Rent
            </Link>
            <Link
              to="/properties/sell"
              className="block px-4 py-2 hover:bg-slate-100"
            >
              Sell
            </Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-slate-100">
              About
            </Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-slate-100">
              Contact
            </Link>
            <div className="pt-4 border-t">
              <Button variant="default" size="sm" className="w-full" asChild>
                <Link to="/signin">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;