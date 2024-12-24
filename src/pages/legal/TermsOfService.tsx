import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollText, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <ScrollText className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-black">
              Terms of Service
            </h1>
          </div>
          
          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardContent className="p-8">
                <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-8">
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Check className="h-6 w-6 text-purple-600" />
                      <h2 className="text-2xl font-semibold text-black">Acceptance of Terms</h2>
                    </div>
                    <p className="text-black">
                      By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Check className="h-6 w-6 text-purple-600" />
                      <h2 className="text-2xl font-semibold text-black">Use License</h2>
                    </div>
                    <p className="text-black">
                      Permission is granted to temporarily download one copy of the materials (information or software) on HomeHarbor's website for personal, non-commercial transitory viewing only.
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Check className="h-6 w-6 text-purple-600" />
                      <h2 className="text-2xl font-semibold text-black">User Accounts</h2>
                    </div>
                    <p className="text-black">
                      When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account.
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Check className="h-6 w-6 text-purple-600" />
                      <h2 className="text-2xl font-semibold text-black">Property Listings</h2>
                    </div>
                    <p className="text-black">
                      All property listings on our platform are subject to verification. We do not guarantee the accuracy of any listing information.
                    </p>
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

export default TermsOfService;