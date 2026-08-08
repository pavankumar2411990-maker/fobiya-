import React from 'react';
import { ShieldCheck, Target, Award, Sparkles, Building2, Users } from 'lucide-react';
import { AGENTS } from '../data/mockData';
import { StatsSection } from '../components/StatsSection';

interface AboutPageProps {
  onNavigate: (view: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 bg-[#080808] text-white">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#111111] border-b border-white/10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#FF3B3B] font-mono font-bold">
            ABOUT NEXORA REALTY
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4 leading-tight">
            WE DON'T JUST SELL PROPERTIES. <br className="hidden sm:inline" />
            <span className="text-gradient-red">WE CREATE POSSIBILITIES.</span>
          </h1>
          <p className="text-base text-[#A7A7A7] max-w-2xl mx-auto mt-6 leading-relaxed">
            Founded on principles of discretion, market mastery, and unyielding client service, Nexora Realty stands at the apex of luxury residential and commercial advisory.
          </p>
        </div>
      </section>

      {/* Our Story Editorial Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-mono text-[#E50914] font-bold tracking-widest">
              OUR HERITAGE & VISION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Two Decades of Curating Extraordinary Living
            </h2>
            <p className="text-sm text-[#A7A7A7] leading-relaxed">
              Nexora Realty was established with a singular objective: to elevate real estate acquisitions into an art form. Over fifteen years, our boutique firm has grown from a specialized Manhattan penthouse agency into a global real estate powerhouse operating across Los Angeles, New York, Miami, Dubai, and European capital markets.
            </p>
            <p className="text-sm text-[#A7A7A7] leading-relaxed">
              We represent discretionary buyers, private family offices, and developers who require confidentiality, sophisticated financial structuring, and instant access to premier off-market properties.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10">
              <div>
                <span className="font-display text-3xl font-bold text-white">$850M+</span>
                <p className="text-xs text-[#A7A7A7] font-mono uppercase">Cumulative Volume</p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-white">100%</span>
                <p className="text-xs text-[#A7A7A7] font-mono uppercase">Discretion & Privacy</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Nexora Corporate Headquarters"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Grid */}
      <section className="py-20 bg-[#111111] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono text-[#E50914] font-bold tracking-widest">
              CORE PHILOSOPHY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#E50914]/20 flex items-center justify-center text-[#E50914] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Precision Guidance</h3>
              <p className="text-xs text-[#A7A7A7] leading-relaxed">
                We deliver rigorous market analytics and comparative valuation modeling so clients make decisive, data-backed investments.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#E50914]/20 flex items-center justify-center text-[#E50914] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Absolute Discretion</h3>
              <p className="text-xs text-[#A7A7A7] leading-relaxed">
                Our off-market private portfolio ensures complete privacy for public figures, executives, and high-net-worth families.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#E50914]/20 flex items-center justify-center text-[#E50914] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Architectural Mastery</h3>
              <p className="text-xs text-[#A7A7A7] leading-relaxed">
                We evaluate every estate not merely as square footage, but as a masterpiece of modern craftsmanship and enduring design value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Component */}
      <StatsSection />

      {/* Leadership Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono text-[#E50914] font-bold tracking-widest">
            LEADERSHIP
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-2">
            The Advisors Behind Nexora
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="glass-card p-6 rounded-3xl border border-white/10 text-center">
              <img
                src={agent.portrait}
                alt={agent.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-[#E50914] grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="font-display text-lg font-bold text-white">{agent.name}</h3>
              <p className="text-xs font-mono text-[#E50914] mt-0.5">{agent.position}</p>
              <p className="text-xs text-[#A7A7A7] mt-2">{agent.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
