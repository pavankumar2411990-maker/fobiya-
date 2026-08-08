import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface CallToActionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Cinematic Image with Deep Dark Red Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Residence Night View"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#8B0000]/70 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-white/80 font-mono font-bold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
          START YOUR JOURNEY TODAY
        </span>

        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mt-6 mb-6">
          READY TO FIND YOUR <br className="hidden sm:inline" />
          <span className="text-gradient-red drop-shadow-lg">NEXT ADDRESS?</span>
        </h2>

        <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal mb-10 leading-relaxed">
          Let's turn your real estate goals into reality. Whether buying, selling, or investing, our senior advisors are ready to assist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-red hover:bg-gradient-red-hover transition-all duration-300 shadow-2xl shadow-[#E50914]/40 hover:scale-105"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white bg-black/60 hover:bg-black/80 border border-white/20 hover:border-[#E50914] backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <PhoneCall className="w-5 h-5 mr-2 text-[#FF3B3B]" />
            <span>Talk to an Advisor</span>
          </button>
        </div>
      </div>
    </section>
  );
};
