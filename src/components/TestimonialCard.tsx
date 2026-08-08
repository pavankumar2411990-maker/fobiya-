import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#8B0000]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF3B3B] font-mono font-bold">
            CLIENT SATISFACTION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-2">
            WHAT OUR <span className="text-gradient-red">CLIENTS SAY</span>
          </h2>
          <p className="text-sm text-[#A7A7A7] mt-3">
            Read firsthand accounts from high-net-worth buyers, investors, and homeowners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#E50914]/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#E50914]/20 group-hover:text-[#E50914]/40 transition-colors mb-4" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E50914] text-[#E50914]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.authorName}
                  className="w-12 h-12 rounded-full object-cover border border-[#E50914]/40"
                />
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    {t.authorName}
                  </h4>
                  <p className="text-xs text-[#A7A7A7]">
                    {t.authorTitle}
                  </p>
                  {t.propertyPurchased && (
                    <p className="text-[10px] text-[#FF3B3B] font-mono mt-0.5">
                      Acquired: {t.propertyPurchased}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
