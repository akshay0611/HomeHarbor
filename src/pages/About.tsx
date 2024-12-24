import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Building2, Globe2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-purple-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About HomeHarbor</h1>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
              Your trusted partner in finding the perfect home. We combine years of experience with
              innovative technology to make your real estate journey seamless.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold mb-2">1000+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-gray-600">Properties Sold</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold mb-2">10+</h3>
                <p className="text-gray-600">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At HomeHarbor, our mission is to help people find their perfect home while providing
                exceptional service every step of the way. We believe that finding a home is more than
                just a transaction – it's about creating lasting relationships and understanding our
                clients' unique needs.
              </p>
              <p className="text-lg text-gray-600">
                We combine years of industry expertise with cutting-edge technology to make the home
                buying and selling process as smooth as possible. Our team of dedicated professionals
                is committed to providing personalized service and expert guidance to each client.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;