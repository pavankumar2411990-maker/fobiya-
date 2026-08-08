import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Bed, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { FilterState } from '../types/property';

interface SearchBarProps {
  onSearch: (filters: Partial<FilterState>) => void;
  onReset?: () => void;
  initialFilters?: Partial<FilterState>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onReset, initialFilters }) => {
  const [location, setLocation] = useState(initialFilters?.location || '');
  const [propertyType, setPropertyType] = useState(initialFilters?.propertyType || '');
  const [minPrice, setMinPrice] = useState<number | ''>(initialFilters?.minPrice || '');
  const [maxPrice, setMaxPrice] = useState<number | ''>(initialFilters?.maxPrice || '');
  const [bedrooms, setBedrooms] = useState(initialFilters?.bedrooms || '');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location,
      propertyType,
      minPrice: minPrice === '' ? 0 : Number(minPrice),
      maxPrice: maxPrice === '' ? 50000000 : Number(maxPrice),
      bedrooms,
    });
  };

  const handleReset = () => {
    setLocation('');
    setPropertyType('');
    setMinPrice('');
    setMaxPrice('');
    setBedrooms('');
    if (onReset) onReset();
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 -mt-12 mb-16">
      <div className="bg-[#111111]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
        <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-end gap-6">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Location Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, neighborhood or ZIP"
                className="w-full bg-white/5 border border-white/5 rounded-lg p-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#E50914] transition-colors"
              />
            </div>

            {/* Property Type Select */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-[#171717] md:bg-white/5 border border-white/5 rounded-lg p-3 text-sm text-gray-200 focus:outline-none focus:border-[#E50914] transition-colors"
              >
                <option value="">All Types</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Price Range</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
                  placeholder="Min $"
                  className="w-full bg-white/5 border border-white/5 rounded-lg p-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#E50914] transition-colors"
                />
                <span className="text-gray-500 text-xs">-</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
                  placeholder="Max $"
                  className="w-full bg-white/5 border border-white/5 rounded-lg p-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#E50914] transition-colors"
                />
              </div>
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Bedrooms</label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full bg-[#171717] md:bg-white/5 border border-white/5 rounded-lg p-3 text-sm text-gray-200 focus:outline-none focus:border-[#E50914] transition-colors"
              >
                <option value="">Any</option>
                <option value="1">1+ Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="w-full h-[48px] px-8 bg-white text-black font-bold rounded-lg hover:bg-[#E50914] hover:text-white transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Search Properties
            </button>
          </div>
        </form>
        {(location || propertyType || minPrice || maxPrice || bedrooms) && (
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[#E50914] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
