import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

// Guide Pages
import BuyingGuide from "./pages/guides/BuyingGuide";
import SellingGuide from "./pages/guides/SellingGuide";
import MarketTrends from "./pages/guides/MarketTrends";
import FAQ from "./pages/guides/FAQ";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";

// Property Action Pages
import Buy from "./pages/properties/Buy";
import Rent from "./pages/properties/Rent";
import Sell from "./pages/properties/Sell";
import Invest from "./pages/properties/Invest";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="app-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Guide Routes */}
            <Route path="/guides/buying" element={<BuyingGuide />} />
            <Route path="/guides/selling" element={<SellingGuide />} />
            <Route path="/guides/market-trends" element={<MarketTrends />} />
            <Route path="/guides/faq" element={<FAQ />} />
            
            {/* Legal Routes */}
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
            
            {/* Property Action Routes */}
            <Route path="/properties/buy" element={<Buy />} />
            <Route path="/properties/rent" element={<Rent />} />
            <Route path="/properties/sell" element={<Sell />} />
            <Route path="/properties/invest" element={<Invest />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;