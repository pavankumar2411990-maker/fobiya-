export type PropertyType = 'Apartment' | 'Villa' | 'House' | 'Penthouse' | 'Commercial';
export type PropertyStatus = 'For Sale' | 'Exclusive' | 'New Listing' | 'Pending';

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  stateCountry: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  type: PropertyType;
  status: PropertyStatus;
  featured: boolean;
  lifestyleCategory: 'Luxury Villas' | 'Modern Apartments' | 'Waterfront Homes' | 'Commercial Spaces';
  yearBuilt: number;
  parkingSpaces: number;
  mainImage: string;
  galleryImages: string[];
  description: string;
  features: string[];
  floorPlanUrl?: string;
  agentId: string;
  virtualTourUrl?: string;
}

export interface Agent {
  id: string;
  name: string;
  position: string;
  location: string;
  yearsExperience: number;
  phone: string;
  email: string;
  portrait: string;
  bio: string;
  specialties: string[];
  salesVolume: string;
  activeListingsCount: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  rating: number;
  avatar: string;
  propertyPurchased?: string;
}

export interface FilterState {
  searchQuery: string;
  location: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  bathrooms: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
  viewMode: 'grid' | 'list';
  statusFilter: string;
}
