import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Calendar } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onScheduleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onScheduleClick }) => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-[#080808] text-white">
      {/* Background Gradients */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[#E50914]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-[#8B0000]/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Cinematic Hero Content */}
      <div className="z-10 max-w-2xl mt-12 md:mt-0 relative">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-[1px] w-12 bg-[#E50914]"></div>
          <span className="text-[#A7A7A7] text-xs font-bold uppercase tracking-[0.3em]">Redefining the way you live</span>
        </div>
        
        <h1 className="text-5xl md:text-[88px] leading-[1.1] md:leading-[0.9] font-bold tracking-tighter mb-8">
          FIND A PLACE<br />
          THAT FEELS LIKE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#FF1E2D]">HOME.</span>
        </h1>
        
        <p className="text-[#A7A7A7] text-base md:text-lg max-w-md leading-relaxed mb-10">
          Discover exceptional properties curated for those who expect more from where they live. Luxury living, redefined by intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-10 py-5 bg-[#E50914] hover:bg-[#FF3B3B] text-white font-bold rounded-xl transition-all shadow-[0_10px_30px_rgba(229,9,20,0.3)]"
          >
            Explore Properties
          </button>
          <button
            onClick={onScheduleClick}
            className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:bg-white hover:text-black font-bold rounded-xl transition-all"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Decorative Side Indicators */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center space-y-8 pointer-events-none">
        <div className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold -rotate-90 origin-center whitespace-nowrap mb-16">ESTABLISHED 2026</div>
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="flex flex-col space-y-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E50914]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
        </div>
      </div>

      {/* Bottom Metrics */}
      <div className="absolute bottom-0 left-0 right-0 h-auto md:h-24 bg-[#111111] border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 py-6 md:py-0 z-30">
        <div className="flex flex-wrap gap-8 md:space-x-16 mb-4 md:mb-0">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white">1,250<span className="text-[#E50914]">+</span></span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Properties Sold</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white">$850M<span className="text-[#E50914]">+</span></span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Volume</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white">98<span className="text-[#E50914]">%</span></span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Satisfaction</span>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-[11px] font-bold text-gray-400">
          <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>LIVE MARKET DATA</span>
          <span className="text-white/20 hidden md:inline">|</span>
          <span className="hidden md:inline">SCROLL TO EXPLORE MORE</span>
        </div>
      </div>
    </section>
  );
};
