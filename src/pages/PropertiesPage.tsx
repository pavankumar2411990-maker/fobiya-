import React, { useState, useMemo } from 'react';
import { LayoutGrid, List, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { Property, FilterState } from '../types/property';
import { PROPERTIES } from '../data/mockData';
import { PropertyCard } from '../components/PropertyCard';
import { SearchBar } from '../components/SearchBar';

interface PropertiesPageProps {
  favorites: string[];
  onToggleFavorite: (propertyId: string) => void;
  onSelectProperty: (property: Property) => void;
  initialFilters?: Partial<FilterState>;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  favorites,
  onToggleFavorite,
  onSelectProperty,
  initialFilters,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    location: initialFilters?.location || '',
    propertyType: initialFilters?.propertyType || '',
    minPrice: initialFilters?.minPrice || 0,
    maxPrice: initialFilters?.maxPrice || 50000000,
    bedrooms: initialFilters?.bedrooms || '',
    bathrooms: '',
    sortBy: 'featured',
    viewMode: 'grid',
    statusFilter: '',
  });

  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      // Location match
      if (filters.location) {
        const query = filters.location.toLowerCase();
        const matchesLoc =
          p.location.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query) ||
          p.stateCountry.toLowerCase().includes(query);
        if (!matchesLoc) return false;
      }

      // Property Type
      if (filters.propertyType && p.type !== filters.propertyType) {
        return false;
      }

      // Status
      if (filters.statusFilter && p.status !== filters.statusFilter) {
        return false;
      }

      // Price Range
      if (p.price < filters.minPrice || p.price > filters.maxPrice) {
        return false;
      }

      // Bedrooms
      if (filters.bedrooms && p.bedrooms < Number(filters.bedrooms)) {
        return false;
      }

      // Bathrooms
      if (filters.bathrooms && p.bathrooms < Number(filters.bathrooms)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'newest') return b.yearBuilt - a.yearBuilt;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [filters]);

  const handleSearchFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const resetAllFilters = () => {
    setFilters({
      searchQuery: '',
      location: '',
      propertyType: '',
      minPrice: 0,
      maxPrice: 50000000,
      bedrooms: '',
      bathrooms: '',
      sortBy: 'featured',
      viewMode: 'grid',
      statusFilter: '',
    });
  };

  return (
    <div className="pt-28 pb-24 bg-[#080808] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF3B3B] font-mono font-bold">
            EXCLUSIVE INVENTORY
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white mt-2">
            FIND YOUR <span className="text-gradient-red">NEXT PROPERTY</span>
          </h1>
          <p className="text-sm text-[#A7A7A7] mt-3 leading-relaxed">
            Browse our global collection of trophy estates, luxury penthouses, and architectural masterworks.
          </p>
        </div>

        {/* Search Panel */}
        <SearchBar
          onSearch={handleSearchFilters}
          onReset={resetAllFilters}
          initialFilters={filters}
        />

        {/* Controls Bar: Sorting, Grid/List view toggle, Results count */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white">
              Showing <strong className="text-[#E50914]">{filteredProperties.length}</strong> Luxury Properties
            </span>

            {/* Quick Status Pill Filters */}
            <div className="hidden md:flex items-center space-x-1.5 ml-4">
              {['', 'Exclusive', 'For Sale', 'New Listing'].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilters({ ...filters, statusFilter: st })}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                    filters.statusFilter === st
                      ? 'bg-[#E50914] text-white font-bold'
                      : 'bg-[#111111] text-[#A7A7A7] hover:text-white'
                  }`}
                >
                  {st === '' ? 'All Status' : st}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            {/* Sort Select */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#A7A7A7] font-mono uppercase">Sort By:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                className="bg-[#111111] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#E50914]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Built</option>
              </select>
            </div>

            {/* Grid / List View Toggle Buttons */}
            <div className="flex items-center bg-[#111111] border border-white/10 p-1 rounded-xl space-x-1">
              <button
                onClick={() => setFilters({ ...filters, viewMode: 'grid' })}
                className={`p-1.5 rounded-lg transition-colors ${
                  filters.viewMode === 'grid' ? 'bg-[#E50914] text-white' : 'text-[#A7A7A7] hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setFilters({ ...filters, viewMode: 'list' })}
                className={`p-1.5 rounded-lg transition-colors ${
                  filters.viewMode === 'list' ? 'bg-[#E50914] text-white' : 'text-[#A7A7A7] hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid / List */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-3xl border border-white/10">
            <SlidersHorizontal className="w-12 h-12 text-[#E50914] mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-white">No Matching Properties Found</h3>
            <p className="text-xs text-[#A7A7A7] mt-1 max-w-sm mx-auto">
              Try adjusting your price range, location search, or bedrooms criteria to view more results.
            </p>
            <button
              onClick={resetAllFilters}
              className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-red text-white text-xs font-bold shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={
              filters.viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }
          >
            {filteredProperties.slice(0, visibleCount).map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                isFavorite={favorites.includes(prop.id)}
                onToggleFavorite={onToggleFavorite}
                onSelectProperty={onSelectProperty}
                viewMode={filters.viewMode}
              />
            ))}
          </div>
        )}

        {/* Pagination / Load More Properties Button */}
        {visibleCount < filteredProperties.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-8 py-3.5 rounded-full bg-[#171717] hover:bg-[#222] border border-white/15 hover:border-[#E50914] text-xs font-bold text-white transition-all shadow-lg hover:scale-105"
            >
              Load More Properties ({filteredProperties.length - visibleCount} Remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
