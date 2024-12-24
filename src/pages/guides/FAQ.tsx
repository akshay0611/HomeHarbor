import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Info className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-black">Frequently Asked Questions</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-black font-semibold hover:text-purple-600">
                  How do I start the home buying process?
                </AccordionTrigger>
                <AccordionContent className="text-gray-800 pt-2">
                  Start by determining your budget, getting pre-approved for a mortgage, and connecting with a real estate agent. Our Buying Guide provides detailed information to help you get started.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-black font-semibold hover:text-purple-600">
                  What documents do I need to sell my home?
                </AccordionTrigger>
                <AccordionContent className="text-gray-800 pt-2">
                  You'll need property deeds, tax records, utility bills, and any documentation of renovations or repairs. Check our Selling Guide for a comprehensive list of required documents.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-black font-semibold hover:text-purple-600">
                  How long does it take to close on a house?
                </AccordionTrigger>
                <AccordionContent className="text-gray-800 pt-2">
                  Typically, it takes 30-45 days to close on a house after the offer is accepted. However, this timeline can vary based on various factors such as financing and inspection results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-black font-semibold hover:text-purple-600">
                  What are closing costs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-800 pt-2">
                  Closing costs are fees associated with completing a real estate transaction, typically ranging from 2-5% of the purchase price. These may include lender fees, taxes, insurance, and other expenses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-black font-semibold hover:text-purple-600">
                  Should I rent or buy?
                </AccordionTrigger>
                <AccordionContent className="text-gray-800 pt-2">
                  This decision depends on various factors including your financial situation, long-term plans, and local market conditions. Consider factors like down payment availability, job stability, and how long you plan to stay in the area.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;