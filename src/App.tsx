import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AgentsPage } from './pages/AgentsPage';
import { ContactPage } from './pages/ContactPage';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ScheduleConsultationModal } from './components/ScheduleConsultationModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Property, Agent, FilterState } from './types/property';
import { PROPERTIES } from './data/mockData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nexora_favorites');
      return saved ? JSON.parse(saved) : ['prop-1', 'prop-3'];
    } catch {
      return ['prop-1', 'prop-3'];
    }
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [scheduleModalMode, setScheduleModalMode] = useState<'viewing' | 'consultation' | 'list-property'>('consultation');
  const [activePropertyForViewing, setActivePropertyForViewing] = useState<Property | null>(null);

  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Partial<FilterState>>({});

  useEffect(() => {
    try {
      localStorage.setItem('nexora_favorites', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  const handleToggleFavorite = (propertyId: string) => {
    setFavorites((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );
  };

  const handleSearchAndNavigate = (filters: Partial<FilterState>) => {
    setActiveFilters(filters);
    setCurrentView('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenScheduleModal = (mode: 'viewing' | 'consultation' | 'list-property' = 'consultation', property?: Property) => {
    setScheduleModalMode(mode);
    if (property) {
      setActivePropertyForViewing(property);
    } else {
      setActivePropertyForViewing(null);
    }
    setIsScheduleModalOpen(true);
  };

  const savedPropertiesList = PROPERTIES.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#E50914] selection:text-white flex flex-col justify-between font-sans">
      {/* Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesDrawerOpen(true)}
        onOpenListProperty={() => handleOpenScheduleModal('list-property')}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onSelectAgent={(agent) => {
              setSelectedAgent(agent);
              handleOpenScheduleModal('consultation');
            }}
            onSearch={handleSearchAndNavigate}
            onScheduleClick={() => handleOpenScheduleModal('consultation')}
            onNavigate={(view) => setCurrentView(view)}
          />
        )}

        {currentView === 'properties' && (
          <PropertiesPage
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            initialFilters={activeFilters}
          />
        )}

        {currentView === 'about' && (
          <AboutPage onNavigate={(view) => setCurrentView(view)} />
        )}

        {currentView === 'services' && (
          <ServicesPage
            onScheduleClick={() => handleOpenScheduleModal('consultation')}
            onNavigate={(view) => setCurrentView(view)}
          />
        )}

        {currentView === 'agents' && (
          <AgentsPage
            onSelectAgent={(agent) => {
              setSelectedAgent(agent);
              handleOpenScheduleModal('consultation');
            }}
            onScheduleConsultation={() => handleOpenScheduleModal('consultation')}
          />
        )}

        {currentView === 'contact' && <ContactPage />}
      </main>

      {/* Multi-Column Footer */}
      <Footer onNavigate={(view) => setCurrentView(view)} />

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isFavorite={favorites.includes(selectedProperty.id)}
          onToggleFavorite={handleToggleFavorite}
          onScheduleViewing={(prop) => {
            setSelectedProperty(null);
            handleOpenScheduleModal('viewing', prop);
          }}
        />
      )}

      {/* Booking / Valuation Modal */}
      {isScheduleModalOpen && (
        <ScheduleConsultationModal
          property={activePropertyForViewing}
          mode={scheduleModalMode}
          onClose={() => setIsScheduleModalOpen(false)}
        />
      )}

      {/* Favorites Side Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesDrawerOpen}
        onClose={() => setIsFavoritesDrawerOpen(false)}
        favorites={savedPropertiesList}
        onRemoveFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onClearAll={() => setFavorites([])}
      />
    </div>
  );
}
