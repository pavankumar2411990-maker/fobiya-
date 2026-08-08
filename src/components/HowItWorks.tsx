import React from 'react';
import { Compass, Eye, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      description: 'Tell us what you\'re looking for and we\'ll identify properties that match your lifestyle and goals.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'EXPLORE',
      description: 'Tour your shortlisted properties with guidance from one of our experienced agents.',
      icon: Eye,
    },
    {
      num: '03',
      title: 'CLOSE',
      description: 'From negotiation to paperwork, we\'ll make the process seamless from start to finish.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF3B3B] font-mono font-bold">
            SEAMLESS ACQUISITION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-2">
            YOUR NEXT MOVE <span className="text-gradient-red">STARTS HERE</span>
          </h2>
          <p className="text-sm text-[#A7A7A7] mt-3">
            A refined three-step advisory journey engineered for clarity and absolute confidence.
          </p>
        </div>

        {/* 3 Step Process Container with Connecting Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Subtle connecting red gradient line (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-[#E50914]/0 via-[#E50914] to-[#E50914]/0 z-0" />

          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 glass-card p-8 rounded-3xl border border-white/10 hover:border-[#E50914]/40 transition-all duration-300 group text-center flex flex-col items-center"
              >
                {/* Numbered Pill */}
                <div className="w-16 h-16 rounded-2xl bg-[#080808] border border-white/15 flex items-center justify-center mb-6 group-hover:border-[#E50914] group-hover:scale-110 transition-all shadow-lg shadow-[#E50914]/10">
                  <IconComp className="w-7 h-7 text-[#E50914] group-hover:text-white transition-colors" />
                </div>

                <span className="font-mono text-xs font-bold uppercase text-[#FF3B3B] tracking-widest mb-1">
                  STEP {step.num}
                </span>

                <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-[#A7A7A7] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
