import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Buy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = () => {
    toast({
      title: "Searching properties for sale",
      description: `Finding properties matching "${searchQuery}"`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Dream Home
            </h1>
            <div className="flex flex-col md:flex-row max-w-2xl mx-auto gap-2">
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
            </div>
          </div>
        </div>

        {/* Properties Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Properties for Sale</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Browse through our curated selection of properties available for purchase
            </p>
          </div>

          <PropertyGrid
            searchQuery={searchQuery}
            propertyType="all"
            priceRange="all"
            sortBy="price-asc"
          />
        </div>

        {/* Buying Guide Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Buying Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Research",
                  description: "Explore neighborhoods and property types",
                },
                {
                  step: "2",
                  title: "Finance",
                  description: "Get pre-approved for a mortgage",
                },
                {
                  step: "3",
                  title: "View",
                  description: "Schedule property viewings",
                },
                {
                  step: "4",
                  title: "Purchase",
                  description: "Make an offer and close the deal",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                >
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 dark:text-purple-300 font-semibold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Buy;