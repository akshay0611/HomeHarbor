export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  description: string;
  type: string;
  listedDate: string;
  features: string[];
  yearBuilt: number;
}

export const propertyData: Property[] = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    location: "123 Main St, Downtown",
    price: 750000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Luxurious downtown apartment with stunning city views and modern amenities. Features include hardwood floors, stainless steel appliances, and a private balcony.",
    type: "apartment",
    listedDate: "2024-02-15",
    features: ["Hardwood Floors", "Stainless Steel Appliances", "Private Balcony"],
    yearBuilt: 2020
  },
  {
    id: "2",
    title: "Suburban Family Home",
    location: "456 Oak Ave, Suburbia",
    price: 950000,
    beds: 4,
    baths: 3,
    sqft: 2500,
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    description: "Spacious family home in a quiet suburban neighborhood. Features a large backyard, updated kitchen, and a two-car garage.",
    type: "house",
    listedDate: "2024-02-10",
    features: ["Large Backyard", "Updated Kitchen", "Two-Car Garage"],
    yearBuilt: 2015
  },
  {
    id: "3",
    title: "Luxury Penthouse",
    location: "789 High Rise Blvd",
    price: 2500000,
    beds: 3,
    baths: 3.5,
    sqft: 3000,
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    description: "Stunning penthouse with panoramic city views. Features include high-end finishes, a gourmet kitchen, and a private rooftop terrace.",
    type: "condo",
    listedDate: "2024-02-01",
    features: ["Panoramic Views", "Gourmet Kitchen", "Private Rooftop"],
    yearBuilt: 2022
  },
];