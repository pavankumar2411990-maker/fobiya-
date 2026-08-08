import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ArrowUpRight, Building2 } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenListProperty: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  favoritesCount,
  onOpenFavorites,
  onOpenListProperty,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'agents', label: 'Agents' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/5 h-20 flex items-center shadow-2xl'
          : 'bg-[#080808]/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left group focus:outline-none"
        >
          <div className="text-2xl font-black tracking-tighter text-white">
            FOBIYA<span className="text-[#E50914]">.</span>REALTY
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-gray-400">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`uppercase transition-colors ${
                  isActive
                    ? 'text-white hover:text-[#E50914]'
                    : 'hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Favorites heart trigger */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2.5 rounded-full bg-[#171717] border border-white/10 text-white hover:border-[#E50914]/50 transition-colors group"
            title="Saved Properties"
            aria-label="Saved Properties"
          >
            <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-[#E50914] text-[#E50914]' : 'text-gray-300 group-hover:text-[#E50914]'}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E50914] text-white text-[11px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* List Your Property CTA Button */}
          <button
            onClick={onOpenListProperty}
            className="bg-white text-black text-[11px] font-bold px-6 py-2.5 rounded-full uppercase tracking-widest hover:bg-[#E50914] hover:text-white transition-all whitespace-nowrap"
          >
            List Your Property
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={onOpenFavorites}
            className="relative p-2 rounded-lg bg-[#171717] border border-white/10 text-white"
            aria-label="Favorites"
          >
            <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-[#E50914] text-[#E50914]' : 'text-white'}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E50914] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#171717] border border-white/10 text-white hover:text-[#E50914] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                  currentView === item.id
                    ? 'bg-[#E50914] text-white font-semibold'
                    : 'text-[#A7A7A7] hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenListProperty();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-red text-white font-semibold text-center"
              >
                <span>List Your Property</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
