import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-black">
              Privacy Policy
            </h1>
          </div>
          
          <div className="space-y-8">
            <Card className="border border-gray-200">
              <CardContent className="p-8">
                <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
                      <Info className="h-6 w-6 text-purple-600" />
                      Information We Collect
                    </h2>
                    <p className="text-black mb-4">We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-black ml-4">
                      <li>Name and contact information</li>
                      <li>Account credentials</li>
                      <li>Property preferences and search history</li>
                      <li>Communication history</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-black mb-4">How We Use Your Information</h2>
                    <p className="text-black mb-4">We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 text-black ml-4">
                      <li>Provide and improve our services</li>
                      <li>Communicate with you</li>
                      <li>Personalize your experience</li>
                      <li>Ensure platform security</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-black mb-4">Your Rights</h2>
                    <p className="text-black mb-4">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 text-black ml-4">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Opt-out of marketing communications</li>
                    </ul>
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

export default PrivacyPolicy;