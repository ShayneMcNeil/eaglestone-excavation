import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from './data/constants.jsx';
import Button from './components/Button.jsx';
import ServiceModal from './components/ServiceModal.jsx';
import HomeView from './views/HomeView.jsx';
import AboutView from './views/AboutView.jsx';
import ServicesView from './views/ServicesView.jsx';
import MaterialsView from './views/MaterialsView.jsx';
import ProjectsView from './views/ProjectsView.jsx';
import ContactView from './views/ContactView.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  // Dynamic SEO Page Titles and Meta Descriptions
  useEffect(() => {
    // 1. Update Document Title
    const baseTitle = "Eaglestone Excavation & Forestry Services";
    const pageTitles = {
      home: `Home | ${baseTitle} - Southwestern Nova Scotia`,
      about: `About Us | ${baseTitle}`,
      services: `Our Services | ${baseTitle} - Septic, Wells & Excavating`,
      materials: `Materials for Sale | Gravel, Sand & Topsoil | ${baseTitle}`,
      projects: `Completed Projects | Showcase | ${baseTitle}`,
      contact: `Contact & Booking | Request a Quote | ${baseTitle}`
    };
    document.title = pageTitles[currentPage] || baseTitle;

    // 2. Update Meta Description Tag
    const pageDescriptions = {
      home: "Eaglestone Excavation & Forestry Services in Bear River, NS. Licensed septic installers and well diggers providing site work, driveways, drainage, and trucking.",
      about: "About Eaglestone Excavation. Owned by Craig S. Peck, we are licensed septic installers, well diggers, and watercourse alteration specialists in Nova Scotia.",
      services: "Licensed septic installation, dug well construction, crock installations, watercourse crossings, French drains, and logging road construction services.",
      materials: "Gravel, sand, topsoils, armour stone, woodchips, compost, clear rock, rip rap, and crusher dust delivered to your site in Digby & Annapolis Counties.",
      projects: "View completed excavation, septic system installation, dug well construction, and driveway drainage projects in Southwestern Nova Scotia.",
      contact: "Get a free quote from Eaglestone Excavation & Forestry Services. Contact Craig S. Peck for septic, well, and excavation bookings in NS."
    };
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescriptions[currentPage] || pageDescriptions.home);
  }, [currentPage]);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#e5e8e6] text-gray-900 font-sans flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#086336] text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2 text-[#feba40]" /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2 text-[#feba40]" /> {CONTACT_INFO.email}</span>
          </div>
          <div className="flex items-center space-x-2 font-medium">
            <ShieldCheck className="w-5 h-5 text-[#feba40]" />
            <span>Fully Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <div 
              className="flex items-center cursor-pointer py-2" 
              onClick={() => navigate('home')}
            >
              <img 
                src="eaglestone_logo.jpg" 
                alt="Eaglestone Excavation & Forestry Services Logo" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'materials', 'projects', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className={`capitalize font-bold transition-colors ${
                    currentPage === page ? 'text-[#086336] border-b-2 border-[#feba40]' : 'text-gray-600 hover:text-[#086336]'
                  }`}
                >
                  {page === 'projects' ? 'Completed Projects' : page}
                </button>
              ))}
              <Button onClick={() => navigate('contact')} className="ml-4 py-2 px-4 text-sm">
                Get a Quote
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#086336] hover:text-green-800 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#cdd3cd] absolute w-full left-0 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['home', 'about', 'services', 'materials', 'projects', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className={`block w-full text-left px-3 py-4 text-lg font-bold capitalize border-b border-[#cdd3cd] ${
                    currentPage === page ? 'text-[#086336] bg-gray-50' : 'text-gray-700'
                  }`}
                >
                  {page === 'projects' ? 'Completed Projects' : page}
                </button>
              ))}
              <div className="pt-4">
                <Button onClick={() => navigate('contact')} className="w-full">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomeView navigate={navigate} setSelectedService={setSelectedService} />}
        {currentPage === 'about' && <AboutView />}
        {currentPage === 'services' && <ServicesView setSelectedService={setSelectedService} />}
        {currentPage === 'materials' && <MaterialsView navigate={navigate} />}
        {currentPage === 'projects' && <ProjectsView />}
        {currentPage === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <footer className="bg-[#2a302c] text-white pt-16 pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="mb-6 inline-block bg-white p-3 rounded-xl shadow-sm">
                <img 
                  src="eaglestone_logo.jpg" 
                  alt="Eaglestone Logo" 
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Licensed well diggers, septic installers, and excavation professionals serving Southwestern Nova Scotia. Grant-funded projects accepted.
              </p>
              <div className="flex items-center space-x-2 text-[#feba40] font-bold">
                <ShieldCheck className="w-5 h-5" />
                <span>Licensed & Insured</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#feba40]">Services</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {SERVICES.slice(0, 5).map(s => (
                  <li key={s.id}><button onClick={() => {navigate('services'); setSelectedService(s);}} className="hover:text-white transition-colors">{s.title}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#feba40]">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><button onClick={() => navigate('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => navigate('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => navigate('projects')} className="hover:text-white transition-colors">Completed Projects</button></li>
                <li><button onClick={() => navigate('materials')} className="hover:text-white transition-colors">Materials for Sale</button></li>
                <li><button onClick={() => navigate('contact')} className="hover:text-white transition-colors">Contact & Booking</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#feba40]">Contact</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-[#086336] shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-[#086336] shrink-0" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#086336] shrink-0" />
                  <span>{CONTACT_INFO.location}<br/>Serving {CONTACT_INFO.serviceArea}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Eaglestone Excavation & Forestry Services. All rights reserved. | Web design by <u><a href="http://www.shaynemcneil.dev">Shayne McNeil</a></u></p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Actions (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#cdd3cd] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex">
        <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className="flex-1 py-3 flex flex-col items-center justify-center text-[#086336] hover:bg-gray-50 border-r border-[#cdd3cd]">
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase">Call</span>
        </a>
        <button onClick={() => navigate('contact')} className="flex-1 py-3 flex flex-col items-center justify-center text-[#086336] hover:bg-gray-50 border-r border-[#cdd3cd]">
          <Mail className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase">Email</span>
        </button>
        <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="flex-1 py-3 flex flex-col items-center justify-center text-[#086336] hover:bg-gray-50">
          <MessageSquare className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase">Message</span>
        </a>
      </div>

      {/* Service Modal Overlay */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} navigate={navigate} />
      )}
    </div>
  );
}