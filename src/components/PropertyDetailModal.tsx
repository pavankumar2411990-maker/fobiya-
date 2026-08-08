import React, { useState } from 'react';
import { X, Heart, MapPin, Bed, Bath, Maximize2, Calendar as CalendarIcon, Car, Check, Phone, Mail, ArrowUpRight, Maximize, Layers } from 'lucide-react';
import { Property } from '../types/property';
import { AGENTS } from '../data/mockData';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (propertyId: string) => void;
  onScheduleViewing: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  isFavorite,
  onToggleFavorite,
  onScheduleViewing,
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'floorplan'>('overview');
  const [activeFloor, setActiveFloor] = useState<'ground' | 'upper' | 'roof'>('ground');

  const agent = AGENTS.find((a) => a.id === property.agentId) || AGENTS[0];

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      {/* Container Card */}
      <div className="relative w-full max-w-5xl bg-[#080808] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto text-white">
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#E50914] backdrop-blur-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Hero Section */}
        <div className="relative h-72 sm:h-96 md:h-[420px] bg-[#111111] overflow-hidden">
          <img
            src={property.galleryImages[activeImageIndex] || property.mainImage}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

          {/* Fullscreen view trigger */}
          <button
            onClick={() => setFullscreenImage(property.galleryImages[activeImageIndex] || property.mainImage)}
            className="absolute bottom-6 right-6 px-3.5 py-2 rounded-xl bg-black/70 border border-white/20 text-xs font-semibold text-white hover:bg-[#E50914] backdrop-blur-md transition-colors flex items-center gap-1.5"
          >
            <Maximize className="w-4 h-4" />
            <span>Fullscreen View</span>
          </button>

          {/* Favorite & Status */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#080808]/80 text-[#FF3B3B] border border-[#E50914]/40 backdrop-blur-md">
              {property.status}
            </span>
            <button
              onClick={() => onToggleFavorite(property.id)}
              className="p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#E50914] backdrop-blur-md transition-colors"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#E50914] text-[#E50914]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Thumbnails Bar */}
        {property.galleryImages.length > 1 && (
          <div className="p-4 bg-[#111111] border-b border-white/10 flex gap-3 overflow-x-auto">
            {property.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  activeImageIndex === idx ? 'border-[#E50914] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Main Content Area */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E50914] font-semibold">
                {property.type} • {property.city}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mt-1">
                {property.title}
              </h2>
              <p className="text-sm text-[#A7A7A7] flex items-center gap-1.5 mt-2">
                <MapPin className="w-4 h-4 text-[#E50914]" />
                <span>{property.location}</span>
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-[#A7A7A7] uppercase font-mono block">Acquisition Price</span>
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-gradient-red">
                {formattedPrice}
              </span>
            </div>
          </div>

          {/* Quick Property Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 bg-[#111111] rounded-2xl border border-white/10 text-center text-xs">
            <div>
              <Bed className="w-4 h-4 text-[#E50914] mx-auto mb-1" />
              <p className="font-bold text-white text-base">{property.bedrooms}</p>
              <p className="text-[10px] text-[#A7A7A7] uppercase">Bedrooms</p>
            </div>
            <div>
              <Bath className="w-4 h-4 text-[#E50914] mx-auto mb-1" />
              <p className="font-bold text-white text-base">{property.bathrooms}</p>
              <p className="text-[10px] text-[#A7A7A7] uppercase">Bathrooms</p>
            </div>
            <div>
              <Maximize2 className="w-4 h-4 text-[#E50914] mx-auto mb-1" />
              <p className="font-bold text-white text-base">{property.areaSqFt.toLocaleString()}</p>
              <p className="text-[10px] text-[#A7A7A7] uppercase">Sq Ft Area</p>
            </div>
            <div>
              <CalendarIcon className="w-4 h-4 text-[#E50914] mx-auto mb-1" />
              <p className="font-bold text-white text-base">{property.yearBuilt}</p>
              <p className="text-[10px] text-[#A7A7A7] uppercase">Year Built</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Car className="w-4 h-4 text-[#E50914] mx-auto mb-1" />
              <p className="font-bold text-white text-base">{property.parkingSpaces}</p>
              <p className="text-[10px] text-[#A7A7A7] uppercase">Garages</p>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <div className="flex border-b border-white/10 space-x-6 text-sm font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 transition-colors border-b-2 ${
                activeTab === 'overview' ? 'border-[#E50914] text-white' : 'border-transparent text-[#A7A7A7] hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-3 transition-colors border-b-2 ${
                activeTab === 'features' ? 'border-[#E50914] text-white' : 'border-transparent text-[#A7A7A7] hover:text-white'
              }`}
            >
              Luxury Amenities ({property.features.length})
            </button>
            <button
              onClick={() => setActiveTab('floorplan')}
              className={`pb-3 transition-colors border-b-2 ${
                activeTab === 'floorplan' ? 'border-[#E50914] text-white' : 'border-transparent text-[#A7A7A7] hover:text-white'
              }`}
            >
              Architectural Floor Plan
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-white">Property Description</h3>
              <p className="text-sm text-[#A7A7A7] leading-relaxed font-sans">
                {property.description}
              </p>
            </div>
          )}

          {/* Tab 2: Amenities */}
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {property.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#111111] border border-white/5 text-xs text-white">
                  <div className="w-5 h-5 rounded-md bg-[#E50914]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#E50914]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Floorplan Diagram */}
          {activeTab === 'floorplan' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#E50914]" />
                  Interactive Blueprint Schematic
                </h3>
                <div className="flex gap-2">
                  {(['ground', 'upper', 'roof'] as const).map((fl) => (
                    <button
                      key={fl}
                      onClick={() => setActiveFloor(fl)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono uppercase transition-colors ${
                        activeFloor === fl ? 'bg-[#E50914] text-white' : 'bg-[#111111] text-[#A7A7A7]'
                      }`}
                    >
                      {fl} Level
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-[#111111] border border-white/10 rounded-2xl flex flex-col items-center justify-center min-h-[220px] text-center relative overflow-hidden">
                <div className="w-full max-w-md h-44 border-2 border-dashed border-[#E50914]/30 rounded-xl flex items-center justify-center p-4 relative bg-[#080808]/60">
                  <div className="text-center">
                    <p className="text-xs font-mono text-[#FF3B3B] uppercase tracking-widest font-bold">
                      {activeFloor.toUpperCase()} FLOOR SCHEMATIC — {property.areaSqFt / 2} SQ FT
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {activeFloor === 'ground' && 'Primary Foyer • Grand Living Area • Chef’s Kitchen • Infinity Pool Terrace'}
                      {activeFloor === 'upper' && 'Primary Suite • En-Suite Guest Rooms • Private Spa Bathrooms • Sky Balconies'}
                      {activeFloor === 'roof' && 'Rooftop Lounge • Sky Deck Bar • Solarium & Infinity Edge Jacuzzi'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Assigned Agent Box */}
          <div className="p-6 bg-[#111111] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={agent.portrait}
                alt={agent.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#E50914]"
              />
              <div>
                <span className="text-[10px] font-mono uppercase text-[#E50914]">Listing Advisor</span>
                <h4 className="font-display text-lg font-bold text-white">{agent.name}</h4>
                <p className="text-xs text-[#A7A7A7]">{agent.position} • {agent.location}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => onScheduleViewing(property)}
                className="px-6 py-3 rounded-xl bg-gradient-red text-white text-xs font-bold transition-all shadow-lg shadow-[#E50914]/25 hover:scale-105 flex items-center justify-center gap-2"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Schedule Private Tour</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Overlay */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
        >
          <button className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white">
            <X className="w-6 h-6" />
          </button>
          <img src={fullscreenImage} alt="Fullscreen Property" className="max-w-full max-h-[90vh] object-contain rounded-2xl" />
        </div>
      )}
    </div>
  );
};
