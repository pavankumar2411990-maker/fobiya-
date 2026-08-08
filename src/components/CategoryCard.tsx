import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LIFESTYLE_CATEGORIES } from '../data/mockData';

interface CategoryCardProps {
  onSelectCategory: (type: string) => void;
}

export const PropertyCategories: React.FC<CategoryCardProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF3B3B] font-mono font-bold">
            EXPLORE BY LIFESTYLE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Curated Living <span className="text-gradient-red">Portfolios</span>
          </h2>
          <p className="text-sm text-[#A7A7A7] mt-3">
            Discover tailored real estate investments matched precisely to your lifestyle aspirations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIFESTYLE_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCategory(cat.type)}
              className="group relative h-[420px] rounded-3xl overflow-hidden border border-white/10 hover:border-[#E50914]/50 transition-all duration-500 cursor-pointer shadow-xl"
            >
              {/* Full-bleed Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Overlays & Red Gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/60 via-[#FF1E2D]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Top Pill */}
              <div className="absolute top-5 right-5 z-10 px-3 py-1 rounded-full text-[11px] font-bold font-mono text-white bg-black/60 border border-white/15 backdrop-blur-md">
                {cat.count}
              </div>

              {/* Bottom Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#A7A7A7] group-hover:text-white/90 leading-relaxed mb-4 transition-colors">
                  {cat.tagline}
                </p>

                {/* Explore Button */}
                <div className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#FF3B3B] transition-colors">
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
