import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Rent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = () => {
    toast({
      title: "Searching rental properties",
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
                'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Rental
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
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Available Rentals
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover your next home with our selection of rental properties
            </p>
          </div>

          <PropertyGrid
            searchQuery={searchQuery}
            propertyType="all"
            priceRange="all"
            sortBy="price-asc"
          />
        </div>

        {/* Rental Guide Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Rental Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Flexible Leases",
                  description: "Choose from various lease terms that suit your needs",
                  icon: "📝",
                },
                {
                  title: "Virtual Tours",
                  description: "View properties from the comfort of your home",
                  icon: "🏠",
                },
                {
                  title: "Secure Applications",
                  description: "Easy and secure online rental applications",
                  icon: "🔒",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg text-center"
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
      </main>
      <Footer />
    </div>
  );
};

export default Rent;