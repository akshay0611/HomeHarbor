import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartLine } from "lucide-react";

const data = [
  { month: 'Jan', price: 500000 },
  { month: 'Feb', price: 520000 },
  { month: 'Mar', price: 510000 },
  { month: 'Apr', price: 540000 },
  { month: 'May', price: 560000 },
  { month: 'Jun', price: 580000 },
];

const MarketTrends = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <ChartLine className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold">Market Trends</h1>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Average Home Prices</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8b5cf6" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Market Overview</h3>
                <p className="text-gray-600">Current market conditions and trends in your area.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Price Trends</h3>
                <p className="text-gray-600">Analysis of property price movements over time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Future Outlook</h3>
                <p className="text-gray-600">Predictions and forecasts for the housing market.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketTrends;