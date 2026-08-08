import React, { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const StatCounter: React.FC<StatItemProps> = ({ value, prefix = '', suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = value / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-8 glass-card rounded-2xl border border-white/10 hover:border-[#E50914]/40 transition-all duration-300">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-2">
        <span className="text-gradient-red">{prefix}{count.toLocaleString()}{suffix}</span>
      </div>
      <p className="text-sm font-semibold uppercase tracking-wider text-[#A7A7A7] font-mono">
        {label}
      </p>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden border-y border-white/10">
      {/* Background Red Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.12)_0%,rgba(8,8,8,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <StatCounter value={15} suffix="+" label="Years of Experience" />
          <StatCounter value={1250} suffix="+" label="Properties Sold" />
          <StatCounter value={850} prefix="$" suffix="M+" label="Transaction Volume" />
          <StatCounter value={98} suffix="%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
  );
};
