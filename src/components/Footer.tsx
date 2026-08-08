import React from 'react';
import { Building2, Instagram, Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-white relative pt-16 pb-12 overflow-hidden">
      {/* Subtle Red Horizontal Gradient Line Above Footer */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="flex items-center gap-2.5 group focus:outline-none text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-red flex items-center justify-center glow-red-sm">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  NEXORA <span className="text-[#E50914] font-normal">REALTY</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#A7A7A7] uppercase font-mono -mt-1">
                  LUXURY REAL ESTATE
                </span>
              </div>
            </button>

            <p className="text-sm text-[#A7A7A7] max-w-sm leading-relaxed">
              Exceptional properties. Exceptional service. Redefining high-end real estate through market intelligence and bespoke advisory.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-gray-400 font-mono">Advisory Desk Online 24/7</span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A7A7A7]">
              <li>
                <button onClick={() => { onNavigate('properties'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  Properties
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('properties'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  Luxury Homes
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('properties'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  Apartments & Penthouses
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('properties'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  Commercial
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('properties'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  New Developments
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A7A7A7]">
              <li>
                <button onClick={() => { onNavigate('about'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('agents'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  Our Agents
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('services'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  Careers & Advisory
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('contact'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('about'); scrollToTop(); }} className="hover:text-[#E50914] transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Follow Us
            </h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="inline-flex items-center gap-2 text-xs text-[#A7A7A7] hover:text-[#E50914] transition-colors">
                <Instagram className="w-4 h-4 text-[#E50914]" />
                <span>Instagram</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-xs text-[#A7A7A7] hover:text-[#E50914] transition-colors">
                <Facebook className="w-4 h-4 text-[#E50914]" />
                <span>Facebook</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-xs text-[#A7A7A7] hover:text-[#E50914] transition-colors">
                <Linkedin className="w-4 h-4 text-[#E50914]" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-xs text-[#A7A7A7] hover:text-[#E50914] transition-colors">
                <Youtube className="w-4 h-4 text-[#E50914]" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7A7A7] gap-4">
          <p>© 2026 Nexora Realty. All rights reserved. Crafted for extraordinary living.</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#171717] hover:bg-[#E50914] border border-white/10 hover:border-transparent text-white transition-all duration-300 flex items-center gap-2 group"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest pl-2">Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
