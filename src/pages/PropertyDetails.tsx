import { useParams } from "react-router-dom";
import { propertyData } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, DollarSign } from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertyData.find((p) => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Property Images */}
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Property Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              {property.location}
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-2" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center">
                <Square className="h-5 w-5 mr-2" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>
            <p className="text-gray-700 mb-6">{property.description}</p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
            <div className="text-2xl font-bold mb-4 flex items-center">
              <DollarSign className="h-6 w-6" />
              {property.price.toLocaleString()}
            </div>
            <Button className="w-full mb-4">Schedule a Tour</Button>
            <Button variant="outline" className="w-full">
              Contact Agent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;