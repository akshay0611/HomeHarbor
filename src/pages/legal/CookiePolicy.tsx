import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-black">
              Cookie Policy
            </h1>
          </div>
          
          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardContent className="p-8">
                <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-8">
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="h-6 w-6 text-purple-600" />
                      <h2 className="text-2xl font-semibold text-black">What Are Cookies</h2>
                    </div>
                    <p className="text-black">
                      Cookies are small text files that are stored on your computer or mobile device when you visit our website.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-black mb-4">How We Use Cookies</h2>
                    <p className="text-black mb-4">We use cookies to:</p>
                    <ul className="list-disc list-inside space-y-2 text-black ml-4">
                      <li>Remember your preferences</li>
                      <li>Understand how you use our website</li>
                      <li>Improve your browsing experience</li>
                      <li>Provide personalized content</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-black mb-4">Types of Cookies We Use</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h3 className="font-semibold text-black mb-2">Essential Cookies</h3>
                        <p className="text-black">Required for the website to function properly. You can't opt out of these cookies.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h3 className="font-semibold text-black mb-2">Analytics Cookies</h3>
                        <p className="text-black">Help us understand how visitors interact with our website.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h3 className="font-semibold text-black mb-2">Functional Cookies</h3>
                        <p className="text-black">Remember your preferences and personalize your experience.</p>
                      </div>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;