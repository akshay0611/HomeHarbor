import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, ChartBarIncreasing, Coins, PiggyBank } from "lucide-react";

const InvestmentCard = ({ title, description, icon: Icon }: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
}) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
          <Icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

const Invest = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Invest in Real Estate
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover lucrative investment opportunities and grow your wealth through real estate
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Investing Today
            </Button>
          </div>
        </div>

        {/* Investment Options */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Investment Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <InvestmentCard
              title="Residential Properties"
              description="Invest in single-family homes, apartments, and condos with high rental demand and appreciation potential."
              icon={Building}
            />
            <InvestmentCard
              title="Commercial Real Estate"
              description="Explore opportunities in office spaces, retail locations, and industrial properties for steady income."
              icon={Coins}
            />
            <InvestmentCard
              title="REITs"
              description="Invest in Real Estate Investment Trusts for diversified exposure to the property market with lower capital requirements."
              icon={PiggyBank}
            />
            <InvestmentCard
              title="Property Development"
              description="Participate in development projects with potential for significant returns through value appreciation."
              icon={ChartBarIncreasing}
            />
          </div>
        </div>

        {/* Why Invest Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Why Invest with Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Guidance",
                  description: "Our team of experienced professionals will help you make informed investment decisions.",
                },
                {
                  title: "Market Analysis",
                  description: "Access detailed market research and property analytics to identify the best opportunities.",
                },
                {
                  title: "Portfolio Management",
                  description: "Professional management of your real estate investments for optimal returns.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">
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

export default Invest;