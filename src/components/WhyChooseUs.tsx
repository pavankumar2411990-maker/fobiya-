import React from 'react';
import { ShieldCheck, Sparkles, Building, BarChart3 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      num: '01',
      title: 'Market Expertise',
      description: 'Deep knowledge of local markets and emerging opportunities.',
      icon: BarChart3,
    },
    {
      num: '02',
      title: 'Curated Properties',
      description: 'Every property is carefully selected for quality and long-term value.',
      icon: Building,
    },
    {
      num: '03',
      title: 'Personalized Service',
      description: 'A dedicated experience built around your goals.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Proven Results',
      description: 'Strategic negotiation and data-driven decision making.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E50914]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Architectural Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Architectural Landmark"
                className="w-full h-[540px] sm:h-[620px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />

              {/* Floating Accent Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-2xl border border-white/15">
                <p className="font-display text-lg font-bold text-white mb-1">Bespoke Concierge</p>
                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  Tailored advisory services for high-net-worth acquisitions & confidential off-market portfolios.
                </p>
              </div>
            </div>

            {/* Decorative Red Square Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-red opacity-20 blur-2xl rounded-full pointer-events-none" />
          </div>

          {/* Right Column: Editorial Text & 01-04 Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF3B3B] font-mono font-bold">
                WHY NEXORA
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
                REAL ESTATE, <br />
                <span className="text-gradient-red">REIMAGINED.</span>
              </h2>
              <p className="text-base text-[#A7A7A7] mt-4 leading-relaxed max-w-xl">
                We combine local expertise, market intelligence, and exceptional service to help our clients make confident real estate decisions.
              </p>
            </div>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.num}
                    className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#E50914]/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display text-2xl font-extrabold text-[#E50914] font-mono">
                        {item.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#E50914] group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4 text-[#FF3B3B] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FF3B3B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A7A7A7] leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
