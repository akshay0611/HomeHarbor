import { propertyData } from "@/data/properties";
import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  searchQuery: string;
  propertyType: string;
  priceRange: string;
  sortBy: string;
}

const PropertyGrid = ({ 
  searchQuery, 
  propertyType, 
  priceRange, 
  sortBy 
}: PropertyGridProps) => {
  let filteredProperties = propertyData.filter((property) => {
    const matchesSearch =
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      propertyType === "all" || property.type === propertyType;

    let matchesPrice = true;
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      if (max) {
        matchesPrice = property.price >= min && property.price <= max;
      } else {
        matchesPrice = property.price >= min;
      }
    }

    return matchesSearch && matchesType && matchesPrice;
  });

  // Sort properties
  filteredProperties.sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      ) : (
        <div className="col-span-full text-center py-8 text-gray-500">
          No properties found matching your criteria
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;