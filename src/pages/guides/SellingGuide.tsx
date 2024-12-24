import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SellingGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-black">
              Selling Guide
            </h1>
          </div>
          
          <div className="prose prose-purple max-w-none space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-2xl font-semibold text-black mb-4">Maximize Your Home's Value</h2>
              <p className="text-black mb-6">
                Selling your home requires careful planning and strategy. Here's your comprehensive guide:
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <ArrowRight className="h-6 w-6 text-purple-500" />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Prepare Your Home</h3>
                      <p className="text-black">Make necessary repairs, declutter, and stage your home to attract potential buyers.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <ArrowRight className="h-6 w-6 text-purple-500" />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Price It Right</h3>
                      <p className="text-black">Work with professionals to determine the optimal listing price based on market conditions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <ArrowRight className="h-6 w-6 text-purple-500" />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Market Your Property</h3>
                      <p className="text-black">Leverage professional photography and multiple listing services to reach potential buyers.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <ArrowRight className="h-6 w-6 text-purple-500" />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Navigate Offers</h3>
                      <p className="text-black">Understand how to evaluate and negotiate offers to get the best possible outcome.</p>
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

export default SellingGuide;