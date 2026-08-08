import React from 'react';
import { Heart, MapPin, Bed, Bath, Maximize2, ArrowUpRight } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (propertyId: string) => void;
  onSelectProperty: (property: Property) => void;
  viewMode?: 'grid' | 'list';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onSelectProperty,
  viewMode = 'grid',
}) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  if (viewMode === 'list') {
    return (
      <div className="glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row group border border-white/10 hover:border-[#E50914]/40 transition-all duration-300">
        {/* Image Container */}
        <div className="relative md:w-2/5 h-64 md:h-auto img-zoom-container overflow-hidden">
          <img
            src={property.mainImage}
            alt={property.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Status Badge */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#080808]/80 text-[#FF3B3B] border border-[#E50914]/30 backdrop-blur-md">
            {property.status}
          </span>

          {/* Heart Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(property.id);
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-[#080808]/70 border border-white/15 text-white hover:text-[#E50914] backdrop-blur-md transition-colors"
            aria-label="Save to favorites"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#E50914] text-[#E50914]' : ''}`} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6 md:w-3/5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-[#E50914] uppercase tracking-wider font-semibold">
                {property.type}
              </span>
              <span className="font-display text-2xl font-extrabold text-white">{formattedPrice}</span>
            </div>

            <h3
              onClick={() => onSelectProperty(property)}
              className="font-display text-xl font-bold text-white group-hover:text-[#FF3B3B] transition-colors cursor-pointer"
            >
              {property.title}
            </h3>

            <p className="text-sm text-[#A7A7A7] flex items-center gap-1.5 mt-1">
              <MapPin className="w-4 h-4 text-[#E50914] shrink-0" />
              <span>{property.location}</span>
            </p>

            <p className="text-xs text-gray-400 mt-3 line-clamp-2 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Specs bar */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A7A7A7]">
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-1">
                <Bed className="w-4 h-4 text-gray-300" />
                <strong className="text-white">{property.bedrooms}</strong> Beds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4 text-gray-300" />
                <strong className="text-white">{property.bathrooms}</strong> Baths
              </span>
              <span className="flex items-center gap-1">
                <Maximize2 className="w-4 h-4 text-gray-300" />
                <strong className="text-white">{property.areaSqFt.toLocaleString()}</strong> sq ft
              </span>
            </div>

            <button
              onClick={() => onSelectProperty(property)}
              className="inline-flex items-center text-xs font-bold text-white bg-gradient-red hover:bg-gradient-red-hover px-4 py-2 rounded-xl transition-all shadow-md"
            >
              <span>View Property</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid Mode Card
  return (
    <div className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between border border-white/10 hover:border-[#E50914]/40 transition-all duration-300">
      {/* Top Image Section */}
      <div className="relative h-64 img-zoom-container overflow-hidden cursor-pointer" onClick={() => onSelectProperty(property)}>
        <img
          src={property.mainImage}
          alt={property.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Subtle Red Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E50914]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Badges & Actions */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="pointer-events-auto px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#080808]/80 text-[#FF3B3B] border border-[#E50914]/30 backdrop-blur-md">
            {property.status}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(property.id);
            }}
            className="pointer-events-auto p-2.5 rounded-full bg-[#080808]/70 border border-white/15 text-white hover:text-[#E50914] backdrop-blur-md transition-all duration-200 hover:scale-110"
            aria-label="Save to favorites"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#E50914] text-[#E50914]' : 'text-white'}`} />
          </button>
        </div>

        {/* Price Floating Overlay at Bottom Left of Image */}
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <span className="font-display text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
            {formattedPrice}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-[#A7A7A7] mb-1 font-mono uppercase tracking-wider">
            <span>{property.type}</span>
            <span>{property.city}</span>
          </div>

          <h3
            onClick={() => onSelectProperty(property)}
            className="font-display text-lg font-bold text-white group-hover:text-[#FF3B3B] transition-colors line-clamp-1 cursor-pointer"
          >
            {property.title}
          </h3>

          <p className="text-xs text-[#A7A7A7] flex items-center gap-1 mt-1 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
            <span>{property.location}</span>
          </p>
        </div>

        {/* Specs Grid */}
        <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs text-[#A7A7A7]">
          <div className="bg-[#111111]/60 py-2 rounded-lg border border-white/5">
            <p className="font-bold text-white text-sm flex items-center justify-center gap-1">
              <Bed className="w-3.5 h-3.5 text-[#E50914]" />
              {property.bedrooms}
            </p>
            <p className="text-[10px] uppercase font-mono">Beds</p>
          </div>

          <div className="bg-[#111111]/60 py-2 rounded-lg border border-white/5">
            <p className="font-bold text-white text-sm flex items-center justify-center gap-1">
              <Bath className="w-3.5 h-3.5 text-[#E50914]" />
              {property.bathrooms}
            </p>
            <p className="text-[10px] uppercase font-mono">Baths</p>
          </div>

          <div className="bg-[#111111]/60 py-2 rounded-lg border border-white/5">
            <p className="font-bold text-white text-sm flex items-center justify-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-[#E50914]" />
              {property.areaSqFt.toLocaleString()}
            </p>
            <p className="text-[10px] uppercase font-mono">Sq Ft</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onSelectProperty(property)}
          className="w-full py-2.5 px-4 bg-[#171717] hover:bg-gradient-red text-white text-xs font-bold rounded-xl border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1.5 group-hover:shadow-lg group-hover:shadow-[#E50914]/20"
        >
          <span>View Property Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
