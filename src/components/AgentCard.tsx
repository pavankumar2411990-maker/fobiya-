import React from 'react';
import { Mail, Linkedin, MapPin, Award, Phone, ArrowUpRight } from 'lucide-react';
import { Agent } from '../types/property';
import { AGENTS } from '../data/mockData';

interface AgentsSectionProps {
  onSelectAgent: (agent: Agent) => void;
}

export const AgentsSection: React.FC<AgentsSectionProps> = ({ onSelectAgent }) => {
  return (
    <section className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF3B3B] font-mono font-bold">
            EXPERT ADVISORY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-2">
            MEET YOUR <span className="text-gradient-red">ADVISORS</span>
          </h2>
          <p className="text-sm text-[#A7A7A7] mt-3">
            Industry veterans with unrivaled market intelligence and bespoke client dedication.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#E50914]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Grayscale Portrait Container with Red Glow on Hover */}
                <div className="relative h-80 overflow-hidden bg-[#111111]">
                  <img
                    src={agent.portrait}
                    alt={agent.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />

                  {/* Experience Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold font-mono text-white bg-black/70 border border-white/15 backdrop-blur-md flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#E50914]" />
                    {agent.yearsExperience} Yrs Exp
                  </div>

                  {/* Quick Action Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`mailto:${agent.email}`}
                      className="p-2.5 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#E50914] transition-colors"
                      title="Email Advisor"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2.5 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#E50914] transition-colors"
                      title="LinkedIn Profile"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FF3B3B] transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#E50914] mt-0.5 font-mono">
                    {agent.position}
                  </p>

                  <p className="text-xs text-[#A7A7A7] flex items-center gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E50914]" />
                    <span>{agent.location}</span>
                  </p>

                  <p className="text-xs text-gray-400 mt-3 line-clamp-2 leading-relaxed">
                    {agent.bio}
                  </p>
                </div>
              </div>

              {/* View Profile Button */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => onSelectAgent(agent)}
                  className="w-full py-2.5 px-4 bg-[#111111] hover:bg-gradient-red text-white text-xs font-bold rounded-xl border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>View Profile & Listings</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
