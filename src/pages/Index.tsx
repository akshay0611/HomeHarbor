import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Moon, Sun, Star, MessageSquare, User } from "lucide-react";
import PropertyGrid from "@/components/PropertyGrid";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [sortBy, setSortBy] = useState("price-asc");
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleSearch = () => {
    toast({
      title: "Searching properties",
      description: `Finding properties matching "${searchQuery}"`,
    });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Buyer",
      content: "Found my dream home through this platform! The search process was incredibly smooth, and the support team was always there to help.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Seller",
      content: "Listed my property and got multiple offers within days. The platform's reach and professional presentation made all the difference.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Renter",
      content: "The best rental platform I've used. Very transparent process and excellent communication throughout.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-[70vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover the perfect property in your favorite location
            </p>
            <div className="flex flex-col md:flex-row max-w-3xl mx-auto gap-2">
              <Input
                placeholder="Enter location or property type..."
                className="bg-white/95"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button size="lg" className="md:w-auto" onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              {/* <Button
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
              </Button> */}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold dark:text-white">Featured Properties</h2>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="flex gap-2">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="0-500000">Under $500k</SelectItem>
                    <SelectItem value="500000-1000000">$500k - $1M</SelectItem>
                    <SelectItem value="1000000+">$1M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <PropertyGrid 
            searchQuery={searchQuery} 
            propertyType={propertyType}
            priceRange={priceRange}
            sortBy={sortBy}
          />
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Extensive Property Selection",
                  description: "Browse through thousands of verified listings",
                  icon: "🏠",
                },
                {
                  title: "Expert Guidance",
                  description: "Get support from experienced real estate professionals",
                  icon: "👨‍💼",
                },
                {
                  title: "Secure Transactions",
                  description: "Safe and transparent property dealings",
                  icon: "🔒",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg text-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Read testimonials from our satisfied clients who found their perfect properties through our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2">
                      <User className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="flex items-center text-purple-600 dark:text-purple-300">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    <span className="text-sm">Verified Review</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add this section for budget tips */}
        <div className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Determine Your Budget
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
              Before starting your home search, calculate how much you can afford and get pre-approved for a mortgage.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
