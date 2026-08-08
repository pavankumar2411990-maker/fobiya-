import { Property, Agent, Testimonial } from '../types/property';

export const AGENTS: Agent[] = [
  {
    id: 'agent-1',
    name: 'Mr. Dhrender Rana',
    position: 'Senior Property Advisor',
    location: 'Los Angeles, CA',
    yearsExperience: 12,
    phone: '+1 (310) 892-4100',
    email: 'a.morgan@nexorarealty.com',
    portrait: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    bio: 'Specializing in trophy estates across Bel Air, Beverly Hills, and Malibu, Alex has facilitated over $320M in private off-market listings.',
    specialties: ['Trophy Estates', 'Private Off-Market', 'Architectural Landmarks'],
    salesVolume: '$320M+',
    activeListingsCount: 8,
  },
  {
    id: 'agent-2',
    name: 'Sophia Bennett',
    position: 'Luxury Property Specialist',
    location: 'New York, NY',
    yearsExperience: 9,
    phone: '+1 (212) 440-9281',
    email: 's.bennett@nexorarealty.com',
    portrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    bio: 'Sophia is Manhattan\'s premier penthouse authority, representing elite international buyers and ultra-high-net-worth portfolio investors.',
    specialties: ['Luxury Penthouses', 'High-Rise Developments', 'International Buyers'],
    salesVolume: '$260M+',
    activeListingsCount: 6,
  },
  {
    id: 'agent-3',
    name: 'Daniel Carter',
    position: 'Investment Advisor',
    location: 'Miami, FL',
    yearsExperience: 11,
    phone: '+1 (305) 710-3392',
    email: 'd.carter@nexorarealty.com',
    portrait: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    bio: 'Daniel leads Nexora\'s Coastal & Waterfront Division in South Florida, connecting global investors with prized waterfront compounds.',
    specialties: ['Waterfront Estates', 'Investment Portfolios', 'New Construction'],
    salesVolume: '$290M+',
    activeListingsCount: 10,
  },
  {
    id: 'agent-4',
    name: 'Olivia Reed',
    position: 'International Property Consultant',
    location: 'Dubai, UAE',
    yearsExperience: 8,
    phone: '+971 4 820 9011',
    email: 'o.reed@nexorarealty.com',
    portrait: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    bio: 'Olivia consults on ultra-exclusive developments in Dubai Marina, Palm Jumeirah, and European capital retreats.',
    specialties: ['Palm Jumeirah Estates', 'Cross-Border Acquisitions', 'Commercial Assets'],
    salesVolume: '$210M+',
    activeListingsCount: 7,
  },
];

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Aurelia Residence',
    location: 'Beverly Hills, California',
    city: 'Los Angeles',
    stateCountry: 'California, USA',
    price: 4850000,
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 4200,
    type: 'Villa',
    status: 'Exclusive',
    featured: true,
    lifestyleCategory: 'Luxury Villas',
    yearBuilt: 2023,
    parkingSpaces: 3,
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'An architectural masterwork perched in upper Beverly Hills. The Aurelia Residence seamlessly merges indoor and outdoor living with floor-to-ceiling automated glass walls, zero-edge infinity pool overlooking city-to-ocean vistas, and bespoke Italian marble finishes.',
    features: [
      'Zero-Edge Infinity Pool',
      'Automated Smart Home Automation',
      'Climate-Controlled Wine Cellar',
      'Sub-Zero & Miele Chef’s Kitchen',
      'Primary Suite Fireplace',
      'Gated Private Security System',
      'Spa & Sauna Wellness Wing'
    ],
    agentId: 'agent-1'
  },
  {
    id: 'prop-2',
    title: 'Crimson Heights Penthouse',
    location: 'Manhattan, New York',
    city: 'New York',
    stateCountry: 'New York, USA',
    price: 3250000,
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 2800,
    type: 'Penthouse',
    status: 'For Sale',
    featured: true,
    lifestyleCategory: 'Modern Apartments',
    yearBuilt: 2022,
    parkingSpaces: 2,
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'Elevated luxury high above Tribeca. Featuring panoramic views of the Hudson River and Midtown skyline, high ceilings, custom white oak flooring, private direct elevator entry, and a 600 sq ft landscaped wraparound terrace.',
    features: [
      'Private Keyed Elevator Entry',
      '600 Sq Ft Wraparound Terrace',
      'Direct Central Park Skyline Views',
      'Custom Boffi Italian Kitchen',
      'Floor-to-Ceiling Triple-Pane Glass',
      '24/7 White-Glove Doorman Concierge'
    ],
    agentId: 'agent-2'
  },
  {
    id: 'prop-3',
    title: 'The Glass Villa Waterfront',
    location: 'Miami, Florida',
    city: 'Miami',
    stateCountry: 'Florida, USA',
    price: 6900000,
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 5600,
    type: 'Villa',
    status: 'Exclusive',
    featured: true,
    lifestyleCategory: 'Waterfront Homes',
    yearBuilt: 2024,
    parkingSpaces: 4,
    mainImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'A striking minimalist waterfront compound on Star Island. Offers 100 feet of deep-water dockage suited for mega-yachts, floating outdoor living pavilions, custom infinity plunge pools, and sunset views across Biscayne Bay.',
    features: [
      '100ft Deep-Water Yacht Dock',
      'Resort-Style Heated Lap Pool',
      'Rooftop Sky Lounge & Bar',
      'Private Home Theater',
      'Dual Primary En-Suites',
      'Full Outdoor Summer Kitchen'
    ],
    agentId: 'agent-3'
  },
  {
    id: 'prop-4',
    title: 'Noir Sky Penthouse',
    location: 'Dubai Marina, UAE',
    city: 'Dubai',
    stateCountry: 'UAE',
    price: 5400000,
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 3900,
    type: 'Penthouse',
    status: 'New Listing',
    featured: true,
    lifestyleCategory: 'Modern Apartments',
    yearBuilt: 2023,
    parkingSpaces: 3,
    mainImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'Dramatic ultra-modern penthouse occupying the entire 68th floor. Sweeping 360-degree vistas of Palm Jumeirah, private rooftop infinity pool, tailored dark onyx marble, and acoustic home cinema experience.',
    features: [
      'Private Skypool Overlooking Palm Jumeirah',
      'Dark Onyx & Smoked Mirror Interior Design',
      'Dolby Atmos Private Screening Room',
      'Smart Valet & Dedicated Chauffeur Service',
      'Valet Underground Garage'
    ],
    agentId: 'agent-4'
  },
  {
    id: 'prop-5',
    title: 'Oakwood Modern Estate',
    location: 'Austin, Texas',
    city: 'Austin',
    stateCountry: 'Texas, USA',
    price: 2850000,
    bedrooms: 5,
    bathrooms: 4,
    areaSqFt: 4500,
    type: 'House',
    status: 'For Sale',
    featured: true,
    lifestyleCategory: 'Luxury Villas',
    yearBuilt: 2022,
    parkingSpaces: 3,
    mainImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'Set on 2 secluded oak-lined acres along Lake Austin. Features warm architectural cedar cladding, black steel beam framing, resort pool with waterfall edge, and a separate guesthouse studio.',
    features: [
      '2 Acres Gated Private Compound',
      'Separate Detached Guest House / Studio',
      'Heated Saltwater Pool & Spa',
      'Professional Grade Outdoor Pizza Oven & Kitchen',
      'Solar Powered Zero-Energy Infrastructure'
    ],
    agentId: 'agent-1'
  },
  {
    id: 'prop-6',
    title: 'Skyline Modern Residence',
    location: 'Los Angeles, California',
    city: 'Los Angeles',
    stateCountry: 'California, USA',
    price: 7200000,
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 5900,
    type: 'Villa',
    status: 'Exclusive',
    featured: true,
    lifestyleCategory: 'Luxury Villas',
    yearBuilt: 2024,
    parkingSpaces: 4,
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'Perched in the Hollywood Hills west of Sunset Plaza. Unobstructed jetliner views stretching from Downtown LA to Santa Monica ocean horizon. State-of-the-art security, 6-car subterranean subterranean showroom gallery.',
    features: [
      'Jetliner City-to-Ocean Vistas',
      '6-Car Subterranean Auto Gallery',
      'Cantilevered Infinity Edge Pool',
      'State of the Art Biometric Entry',
      'Full Commercial Kitchen & Catering Pantry'
    ],
    agentId: 'agent-1'
  },
  {
    id: 'prop-7',
    title: 'The Apex Innovation Tower Suites',
    location: 'Financial District, Manhattan',
    city: 'New York',
    stateCountry: 'New York, USA',
    price: 8900000,
    bedrooms: 0,
    bathrooms: 4,
    areaSqFt: 7200,
    type: 'Commercial',
    status: 'New Listing',
    featured: false,
    lifestyleCategory: 'Commercial Spaces',
    yearBuilt: 2024,
    parkingSpaces: 6,
    mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'Turnkey full-floor flagship headquarters space with private executive rooftop terrace, acoustic meeting pods, high-speed fiber infrastructure, and LEED Platinum sustainability rating.',
    features: [
      'Full-Floor Private Executive HQ',
      'Landscaped Outdoor Boardroom Terrace',
      'LEED Platinum Certified',
      'Dedicated Private Elevator & Security Desk',
      'Underground Executive Parking'
    ],
    agentId: 'agent-2'
  },
  {
    id: 'prop-8',
    title: 'Serenity Cove Coastal Estate',
    location: 'Malibu, California',
    city: 'Malibu',
    stateCountry: 'California, USA',
    price: 11500000,
    bedrooms: 6,
    bathrooms: 7,
    areaSqFt: 6800,
    type: 'Villa',
    status: 'Exclusive',
    featured: false,
    lifestyleCategory: 'Waterfront Homes',
    yearBuilt: 2023,
    parkingSpaces: 4,
    mainImage: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1600',
    galleryImages: [
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'Oceanfront bluff top retreat overlooking Point Dume. Direct private stairs to a secluded beach cove, infinity spa, outdoor fire lounge, and organic architectural warm timber interiors.',
    features: [
      'Direct Private Beach Cove Stairs',
      'Oceanfront Bluff Infinity Spa',
      'Organic Natural Stone & Teak Finishings',
      'Wine Tasting Room & Cellar',
      'Private Security Compound'
    ],
    agentId: 'agent-1'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'From the first viewing to closing day, Nexora made everything feel effortless. Their access to off-market inventory and attention to detail was exceptional.',
    authorName: 'Michael Anderson',
    authorTitle: 'Property Investor & Tech Executive',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    propertyPurchased: 'The Aurelia Residence'
  },
  {
    id: 'test-2',
    quote: 'The team understood exactly what we wanted and secured our Manhattan penthouse below asking price before it even hit public MLS. Absolute gold standard service.',
    authorName: 'Jessica Williams',
    authorTitle: 'Venture Capitalist & Homeowner',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    propertyPurchased: 'Crimson Heights'
  },
  {
    id: 'test-3',
    quote: 'Professional, transparent, and incredibly knowledgeable about cross-border transactions. I wouldn\'t hesitate to entrust Nexora with our family\'s real estate assets.',
    authorName: 'Robert Thompson',
    authorTitle: 'International Business Owner',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    propertyPurchased: 'The Glass Villa'
  }
];

export const LIFESTYLE_CATEGORIES = [
  {
    title: 'Luxury Villas',
    tagline: 'Private residences designed for extraordinary living.',
    count: '24 Available',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    type: 'Villa'
  },
  {
    title: 'Modern Apartments',
    tagline: 'Contemporary spaces in the heart of the city.',
    count: '18 Available',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    type: 'Penthouse'
  },
  {
    title: 'Waterfront Homes',
    tagline: 'Wake up to breathtaking views every day.',
    count: '12 Available',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
    type: 'House'
  },
  {
    title: 'Commercial Spaces',
    tagline: 'Prime locations built for ambitious businesses.',
    count: '9 Available',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    type: 'Commercial'
  }
];
