import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, ArrowUpRight, Search } from 'lucide-react';
import { Agent } from '../types/property';
import { AGENTS } from '../data/mockData';

interface AgentsPageProps {
  onSelectAgent: (agent: Agent) => void;
  onScheduleConsultation: () => void;
}

export const AgentsPage: React.FC<AgentsPageProps> = ({ onSelectAgent, onScheduleConsultation }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const filteredAgents = AGENTS.filter((a) => {
    if (selectedLocation && !a.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="pt-28 pb-24 bg-[#080808] text-white">
      {/* Header */}
      <section className="py-16 bg-[#111111] border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-mono text-[#E50914] font-bold tracking-widest">
            GLOBAL ADVISORY TEAM
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white mt-3">
            SENIOR <span className="text-gradient-red">PROPERTY ADVISORS</span>
          </h1>
          <p className="text-sm text-[#A7A7A7] mt-4 max-w-xl mx-auto leading-relaxed">
            Partner with premier luxury estate agents representing the world's most desired postcodes.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#A7A7A7]">
          Showing <strong className="text-white">{filteredAgents.length}</strong> Advisors
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#A7A7A7] font-mono uppercase">Filter Location:</span>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="bg-[#111111] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#E50914]"
          >
            <option value="">All Regions</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="New York">New York</option>
            <option value="Miami">Miami</option>
            <option value="Dubai">Dubai</option>
          </select>
        </div>
      </div>

      {/* Roster Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#E50914]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-80 bg-[#111111]">
                  <img
                    src={agent.portrait}
                    alt={agent.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono text-white bg-black/70 border border-white/15">
                    {agent.salesVolume} Volume
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">{agent.name}</h3>
                  <p className="text-xs font-semibold text-[#E50914] font-mono">{agent.position}</p>
                  <p className="text-xs text-[#A7A7A7] flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E50914]" />
                    <span>{agent.location}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed line-clamp-3">
                    {agent.bio}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={onScheduleConsultation}
                  className="w-full py-2.5 px-4 bg-gradient-red text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1"
                >
                  <span>Book Private Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
