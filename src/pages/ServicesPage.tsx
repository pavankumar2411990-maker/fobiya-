import React from 'react';
import { Building, Sparkles, KeyRound, ShieldAlert, BarChart4, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onScheduleClick: () => void;
  onNavigate: (view: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onScheduleClick, onNavigate }) => {
  const servicesList = [
    {
      title: 'Luxury Residential Acquisitions',
      tagline: 'Targeted search and confidential representation for trophy homes and estates.',
      icon: Building,
      points: [
        'Curated access to private off-market property registries',
        'In-depth comparative financial yield and neighborhood analysis',
        'Bespoke offer strategy and contract negotiation',
        'End-to-end legal, tax, and escrow advisory coordination'
      ]
    },
    {
      title: 'Exclusive Property Listings & Seller Representation',
      tagline: 'Strategic global marketing campaigns designed for maximum asset realization.',
      icon: KeyRound,
      points: [
        'High-definition architectural photography and cinematic drone cinematography',
        'Targeted digital and print placement in luxury global publications',
        'Strict vetting of high-net-worth prospective buyers',
        'Discreet private showings and VIP open house events'
      ]
    },
    {
      title: 'Commercial Real Estate & Portfolio Advisory',
      tagline: 'High-performing commercial assets and institutional-grade opportunities.',
      icon: BarChart4,
      points: [
        'Flagship retail space and headquarters acquisitions',
        'Cap rate optimization and multi-family portfolio modeling',
        'Cross-border capital deployment',
        'Tenant lease negotiations and asset management'
      ]
    },
    {
      title: 'Confidential Family Office Advisory',
      tagline: 'Tailored real estate wealth preservation and private trust consulting.',
      icon: ShieldAlert,
      points: [
        'Multi-jurisdictional real estate holding structures',
        'Privacy protection and anonymous acquisition protocols',
        'Estate valuation and legacy asset planning',
        'Dedicated single-point-of-contact advisory team'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#080808] text-white">
      {/* Header */}
      <section className="py-16 bg-[#111111] border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-mono text-[#E50914] font-bold tracking-widest">
            BESPOKE ADVISORY SERVICES
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white mt-3">
            ELEVATED <span className="text-gradient-red">REAL ESTATE SOLUTIONS</span>
          </h1>
          <p className="text-sm text-[#A7A7A7] mt-4 max-w-xl mx-auto leading-relaxed">
            From trophy home acquisitions to global institutional portfolio structuring, Nexora Realty provides comprehensive end-to-end real estate advisory.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#E50914]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-red flex items-center justify-center text-white mb-6 glow-red-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2">
                    {srv.title}
                  </h2>
                  <p className="text-xs text-[#A7A7A7] mb-6">
                    {srv.tagline}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-white/10">
                    {srv.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={onScheduleClick}
                    className="w-full py-3 px-4 rounded-xl bg-[#111111] hover:bg-gradient-red text-white text-xs font-bold transition-all border border-white/10 hover:border-transparent flex items-center justify-center gap-2"
                  >
                    <span>Request Private Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
