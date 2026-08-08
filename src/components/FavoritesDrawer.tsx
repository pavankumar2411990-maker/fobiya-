import React from 'react';
import { X, Heart, Trash2, ArrowUpRight, Building2 } from 'lucide-react';
import { Property } from '../types/property';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Property[];
  onRemoveFavorite: (propertyId: string) => void;
  onSelectProperty: (property: Property) => void;
  onClearAll: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectProperty,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in">
      {/* Dark Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#080808] border-l border-white/10 text-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-red flex items-center justify-center">
                <Heart className="w-4 h-4 fill-white text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Saved Properties</h3>
                <p className="text-xs text-[#A7A7A7]">{favorites.length} Shortlisted</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#171717] hover:text-[#E50914] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {favorites.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#A7A7A7]">
                <Building2 className="w-12 h-12 text-gray-600 mb-3" />
                <p className="font-bold text-white mb-1">No Saved Properties Yet</p>
                <p className="text-xs">Click the heart icon on any luxury listing to save it to your personal portfolio.</p>
              </div>
            ) : (
              favorites.map((prop) => (
                <div
                  key={prop.id}
                  className="glass-card p-3 rounded-2xl border border-white/10 flex items-center gap-3 group relative"
                >
                  <img
                    src={prop.mainImage}
                    alt={prop.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4
                      onClick={() => {
                        onSelectProperty(prop);
                        onClose();
                      }}
                      className="font-display text-sm font-bold text-white truncate cursor-pointer hover:text-[#FF3B3B] transition-colors"
                    >
                      {prop.title}
                    </h4>
                    <p className="text-xs text-[#A7A7A7] truncate">{prop.location}</p>
                    <p className="text-xs font-bold text-[#E50914] font-mono mt-1">
                      ${prop.price.toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => onRemoveFavorite(prop.id)}
                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                    title="Remove from favorites"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {favorites.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#111111] flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-gray-400 hover:text-red-400 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-gradient-red text-white text-xs font-bold shadow-md"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
