import { Mail, Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         {/* Company Info */}
         <div className="space-y-4">
            <h3 className="text-lg font-semibold">HomeHarbor</h3>
            <p className="text-sm text-gray-600">
              Your trusted partner in finding the perfect home.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@homeharbor.com" className="text-gray-600 hover:underline">contact@homeharbor.com</a> {/* Functional email link added here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-600 hover:text-purple-600">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-purple-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-purple-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/guides/buying" className="text-gray-600 hover:text-purple-600">
                  Buying Guide
                </Link>
              </li>
              <li>
                <Link to="/guides/selling" className="text-gray-600 hover:text-purple-600">
                  Selling Guide
                </Link>
              </li>
              <li>
                <Link to="/guides/market-trends" className="text-gray-600 hover:text-purple-600">
                  Market Trends
                </Link>
              </li>
              <li>
                <Link to="/guides/faq" className="text-gray-600 hover:text-purple-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/legal/privacy-policy" className="text-gray-600 hover:text-purple-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms-of-service" className="text-gray-600 hover:text-purple-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal/cookie-policy" className="text-gray-600 hover:text-purple-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Copyright className="h-4 w-4" />
            <span>{new Date().getFullYear()} HomeHarbor. All rights reserved.</span>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/legal/privacy-policy" className="hover:text-purple-600">
              Privacy
            </Link>
            <Link to="/legal/terms-of-service" className="hover:text-purple-600">
              Terms
            </Link>
            <Link to="/legal/cookie-policy" className="hover:text-purple-600">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;