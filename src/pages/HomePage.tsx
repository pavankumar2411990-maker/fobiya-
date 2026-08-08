import React from 'react';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { PropertyCard } from '../components/PropertyCard';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { StatsSection } from '../components/StatsSection';
import { PropertyCategories } from '../components/CategoryCard';
import { HowItWorks } from '../components/HowItWorks';
import { AgentsSection } from '../components/AgentCard';
import { TestimonialsSection } from '../components/TestimonialCard';
import { CallToAction } from '../components/CallToAction';
import { ContactSection } from '../components/ContactForm';
import { PROPERTIES } from '../data/mockData';
import { Property, Agent, FilterState } from '../types/property';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  favorites: string[];
  onToggleFavorite: (propertyId: string) => void;
  onSelectProperty: (property: Property) => void;
  onSelectAgent: (agent: Agent) => void;
  onSearch: (filters: Partial<FilterState>) => void;
  onScheduleClick: () => void;
  onNavigate: (view: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  favorites,
  onToggleFavorite,
  onSelectProperty,
  onSelectAgent,
  onSearch,
  onScheduleClick,
  onNavigate,
}) => {
  const featuredProperties = PROPERTIES.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="bg-[#080808] text-white">
      {/* 1. HERO SECTION */}
      <Hero
        onExploreClick={() => onNavigate('properties')}
        onScheduleClick={onScheduleClick}
      />

      {/* 2. FLOATING SEARCH BAR */}
      <SearchBar onSearch={onSearch} />

      {/* 3. FEATURED PROPERTIES */}
      <section className="py-20 bg-[#080808] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF3B3B] font-mono font-bold">
                EXCEPTIONAL SPACES
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-2">
                Featured <span className="text-gradient-red">Properties</span>
              </h2>
              <p className="text-sm text-[#A7A7A7] mt-3 max-w-xl">
                Explore a handpicked collection of exceptional properties in the world's most desirable locations.
              </p>
            </div>

            <button
              onClick={() => onNavigate('properties')}
              className="inline-flex items-center text-xs font-bold text-white bg-[#171717] hover:bg-gradient-red border border-white/10 hover:border-transparent px-6 py-3 rounded-full transition-all group"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 6 Featured Property Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                isFavorite={favorites.includes(prop.id)}
                onToggleFavorite={onToggleFavorite}
                onSelectProperty={onSelectProperty}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 5. STATISTICS SECTION */}
      <StatsSection />

      {/* 6. EXPLORE BY LIFESTYLE */}
      <PropertyCategories
        onSelectCategory={(type) => {
          onSearch({ propertyType: type });
          onNavigate('properties');
        }}
      />

      {/* 7. HOW IT WORKS */}
      <HowItWorks />

      {/* 8. AGENTS SECTION */}
      <AgentsSection onSelectAgent={onSelectAgent} />

      {/* 9. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 10. CALL TO ACTION */}
      <CallToAction
        onExploreClick={() => onNavigate('properties')}
        onContactClick={onScheduleClick}
      />

      {/* 11. CONTACT SECTION */}
      <ContactSection />
    </div>
  );
};
