import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BuyingGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-black">
              Buying Guide
            </h1>
          </div>
          
          <div className="prose prose-purple max-w-none space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-2xl font-semibold text-black mb-4">Understanding the Home Buying Process</h2>
              <p className="text-black mb-6">
                Buying a home is one of the most significant investments you'll make. Here's what you need to know:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Determine Your Budget</h3>
                      <p className="text-black">Before starting your home search, calculate how much you can afford and get pre-approved for a mortgage.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Research the Market</h3>
                      <p className="text-black">Understanding local market conditions will help you make informed decisions about when and where to buy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Work with Professionals</h3>
                      <p className="text-black">Partner with experienced real estate agents, mortgage lenders, and home inspectors to ensure a smooth process.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Make an Offer</h3>
                      <p className="text-black">Once you find the right home, work with your agent to make a competitive offer based on market conditions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyingGuide;