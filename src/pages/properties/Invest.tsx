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
              Discover lucrative investment opportunities and grow your wealth through real estate. Unlock the potential of property investments with our expert insights and guidance.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Investing Today
            </Button>
          </div>
        </div>

        {/* Investment Options */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Explore Diverse Investment Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <InvestmentCard
              title="Residential Properties"
              description="Gain ownership of single-family homes, apartments, and condos located in prime neighborhoods. These properties offer consistent rental income and strong long-term appreciation potential."
              icon={Building}
            />
            <InvestmentCard
              title="Commercial Real Estate"
              description="Invest in lucrative office spaces, retail centers, and industrial properties, ensuring a steady cash flow and increased market value over time."
              icon={Coins}
            />
            <InvestmentCard
              title="REITs (Real Estate Investment Trusts)"
              description="Diversify your portfolio with REITs, allowing you to invest in real estate without direct property ownership. Enjoy passive income and broad market exposure with minimal risk."
              icon={PiggyBank}
            />
            <InvestmentCard
              title="Property Development"
              description="Engage in high-potential property development projects, transforming underutilized spaces into high-value real estate assets for significant returns."
              icon={ChartBarIncreasing}
            />
          </div>
        </div>

        {/* Why Invest Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Why Choose HomeHarbor for Your Investments
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Guidance",
                  description: "Leverage the knowledge of our seasoned real estate professionals to navigate the complexities of property investments and maximize your returns.",
                },
                {
                  title: "Comprehensive Market Analysis",
                  description: "Gain access to in-depth market data, property trends, and forecasts to identify the most profitable investment opportunities in the real estate sector.",
                },
                {
                  title: "Portfolio Management Services",
                  description: "Benefit from our end-to-end portfolio management services, ensuring your real estate assets are optimized for consistent growth and profitability.",
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
