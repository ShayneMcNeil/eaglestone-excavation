import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MessageSquare, ChevronRight, 
  ShieldCheck, Truck, Droplets, TreePine, Wrench, 
  MapPin, CheckCircle2, AlertCircle, HardHat
} from 'lucide-react';

// --- DATA ---

const CONTACT_INFO = {
  phone: "(902) 308-0679",
  email: "eaglestonesalesandinquiries@gmail.com",
  facebook: "https://www.facebook.com/p/Eaglestone-Excavation-and-Forestry-Services-61552757901413/",
  location: "Bear River, Nova Scotia",
  serviceArea: "Southwestern Nova Scotia & Province-wide",
  owner: "Craig S Peck"
};

const COLORS = {
  primary: "#086336", // Dark Emerald
  accent: "#feba40",  // Sunflower Gold
  bg: "#e5e8e6",      // Alabaster Grey
  border: "#cdd3cd",  // Dust Grey
  textMuted: "#6a7c71" // Dusty Olive
};

const SERVICES = [
  {
    id: "excavation",
    title: "Excavation & Site Work",
    icon: <HardHat className="w-8 h-8" />,
    shortDesc: "Comprehensive site preparation for residential and commercial projects.",
    fullDesc: "From initial land clearing to final grading, we handle all aspects of excavation and site preparation. Whether you're building a new home, adding an extension, or developing a commercial lot, our heavy equipment and experienced operators ensure the ground is ready.",
    features: ["Foundation digging", "Land clearing & leveling", "Trenching", "Final grading", "Commercial site prep"],
    image: "./billy-freeman-nkxB5Ab-ONY-unsplash.jpg"
  },
  {
    id: "septic",
    title: "Septic Installations",
    icon: <Wrench className="w-8 h-8" />,
    shortDesc: "Licensed design and installation of reliable septic systems.",
    fullDesc: "As licensed installers, we provide end-to-end septic system services. We assist with the necessary permits, design a system tailored to your property's soil and usage requirements, and execute the installation to the highest provincial standards.",
    features: ["System design & engineering", "Permit assistance", "New system installation", "Repairs & upgrades", "Licensed & insured"],
    image: "./b3fabdd7-2213-4ddd-9168-0477054c229a.png"
  },
  {
    id: "wells",
    title: "Dug Wells",
    icon: <Droplets className="w-8 h-8" />,
    shortDesc: "Construction and repair of traditional dug water wells.",
    fullDesc: "Ensure a reliable water supply with our expert dug well construction and repair services. We handle the excavation, casing installation, and sealing, ensuring your well meets all safety and environmental regulations.",
    features: ["New well construction", "Well deepening & repair", "Waterline trenching", "Pump system integration", "Sealing & protection"],
    image: "./brady-rogers-lg6-3u2tMh0-unsplash.jpg"
  },
  {
    id: "drainage",
    title: "Driveways & Drainage",
    icon: <Truck className="w-8 h-8" />,
    shortDesc: "Custom driveways, ditching, and drain tile installation.",
    fullDesc: "Proper water management is critical to protecting your property. We construct durable driveways and implement comprehensive drainage solutions including ditching, culverts, and drain tile systems to keep your land dry and accessible.",
    features: ["Gravel driveway construction", "Ditching & sloping", "Drain tile installation", "Culvert placement", "Erosion control"],
    image: "./b4179075-846a-4f4e-89ba-b59623dd1ddd.png"
  },
  {
    id: "watercourse",
    title: "Watercourse Alterations",
    icon: <CheckCircle2 className="w-8 h-8" />,
    shortDesc: "Licensed watercourse crossings, bridges, and alterations.",
    fullDesc: "Working near water requires specialized knowledge and licensing. We manage watercourse alterations, including building crossings and bridges, ensuring environmental compliance and minimal ecological impact.",
    features: ["Licensed alterations", "Bridge construction", "Stream crossings", "Erosion protection", "Environmental compliance"],
    image: "./9ad28247-ec7a-4d38-a2c7-0eb87997e8fe.png"
  },
  {
    id: "forestry",
    title: "Forestry & Trucking",
    icon: <TreePine className="w-8 h-8" />,
    shortDesc: "Forestry site work and heavy-duty trucking services.",
    fullDesc: "We provide specialized forestry site preparation, logging road construction, and reliable trucking services to move materials, equipment, and debris efficiently across Southwestern Nova Scotia.",
    features: ["Logging road construction", "Forestry site prep", "Material hauling", "Equipment transport", "Debris removal"],
    image: "./ad3f74b1-69d1-4e25-b43c-8581fbbb5f0f.png"
  }
];

const MATERIALS = [
  { id: 1, name: "Crushed Gravel (Class A)", unit: "Tonne", price: "Request Pricing", status: "In Stock", image: "./b51adc09-b8ae-4ae6-8925-c6b99d0f470b.png" },
  { id: 2, name: "Drainage Stone (Clear)", unit: "Tonne", price: "Request Pricing", status: "In Stock", image: "./6fc6797b-a51b-4134-9f2b-a8313e427c5e.png" },
  { id: 3, name: "Screened Topsoil", unit: "Yard", price: "Request Pricing", status: "Limited", image: "./1899288a-0d7d-488b-8847-6af0ab32b254.png" },
  { id: 4, name: "Fill Dirt", unit: "Load", price: "Request Pricing", status: "In Stock", image: "./d9ae4bb9-6137-4325-bdfe-aa7bda0973cd.png" },
  { id: 5, name: "Landscape Boulders", unit: "Each/Tonne", price: "Request Pricing", status: "In Stock", image: "./55b19d7e-dff5-40a7-831f-c3f85a979bbc.png" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1579545802275-c052994e63e7?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1605372545524-7164985f4ba5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1584824388144-88981f3c3a4d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1544640808-32cb4f68696e?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1621619665971-dae963fc23d3?auto=format&fit=crop&q=80&w=600"
];

// --- COMPONENTS ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-bold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-[#feba40] text-[#086336] hover:bg-yellow-400 focus:ring-[#feba40]", // Gold button, Emerald text
    secondary: "bg-white text-[#086336] border-2 border-[#086336] hover:bg-gray-50 focus:ring-[#086336]",
    dark: "bg-[#086336] text-white hover:bg-green-800 focus:ring-[#086336]"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
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
              {['home', 'about', 'services', 'materials', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className={`capitalize font-bold transition-colors ${
                    currentPage === page ? 'text-[#086336] border-b-2 border-[#feba40]' : 'text-gray-600 hover:text-[#086336]'
                  }`}
                >
                  {page}
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
              {['home', 'about', 'services', 'materials', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className={`block w-full text-left px-3 py-4 text-lg font-bold capitalize border-b border-[#cdd3cd] ${
                    currentPage === page ? 'text-[#086336] bg-gray-50' : 'text-gray-700'
                  }`}
                >
                  {page}
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
                Professional excavation, forestry, and site work services serving Southwestern Nova Scotia.
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

// --- VIEWS ---

function HomeView({ navigate, setSelectedService }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#086336] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="./billy-freeman-nkxB5Ab-ONY-unsplash.jpg" 
            alt="Excavator at work" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm font-bold text-[#feba40]">
            <ShieldCheck className="w-4 h-4" />
            <span>Licensed & Insured in Nova Scotia</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl">
            Rugged Reliability for Your Next Project.
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl font-medium leading-relaxed">
            From comprehensive site work and septic installations to forestry and heavy trucking. Based in Bear River, serving Southwestern NS.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <Button onClick={() => navigate('contact')} className="text-lg px-8 py-4 shadow-lg shadow-yellow-500/20">
              Request a Free Quote
            </Button>
            <Button variant="secondary" onClick={() => navigate('services')} className="text-lg px-8 py-4 border-white text-[#086336] bg-transparent hover:bg-white/10 hover:text-white">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Trust Bar */}
      <section className="bg-white border-b border-[#cdd3cd] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-[#086336] mb-2" />
              <span className="font-bold text-gray-800 text-sm md:text-base">Fully Insured</span>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="w-8 h-8 text-[#086336] mb-2" />
              <span className="font-bold text-gray-800 text-sm md:text-base">Licensed Septic Installers</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-8 h-8 text-[#086336] mb-2" />
              <span className="font-bold text-gray-800 text-sm md:text-base">Licensed Watercourse Work</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-[#086336] mb-2" />
              <span className="font-bold text-gray-800 text-sm md:text-base">Local to Bear River</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-[#e5e8e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#086336] mb-4">Core Services</h2>
            <div className="w-24 h-1.5 bg-[#feba40] mx-auto mb-6"></div>
            <p className="text-[#6a7c71] max-w-2xl mx-auto text-lg">
              We own the equipment and have the expertise to tackle residential, commercial, and forestry projects of any scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-sm border border-[#cdd3cd] overflow-hidden hover:shadow-md transition-shadow cursor-pointer group flex flex-col"
                onClick={() => setSelectedService(service)}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 z-20 bg-white p-2 rounded-lg shadow-sm">
                    <div className="text-[#086336]">{service.icon}</div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-[#6a7c71] mb-4 flex-grow">{service.shortDesc}</p>
                  <div className="flex items-center text-[#086336] font-bold text-sm group-hover:text-green-700">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Button variant="dark" onClick={() => navigate('services')}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#086336] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 text-white/5">
          <TreePine className="w-96 h-96" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to break ground?</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements. We offer competitive pricing, reliable timelines, and quality workmanship.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button onClick={() => navigate('contact')} className="w-full sm:w-auto text-lg px-8 py-4">
              Get a Free Quote
            </Button>
            <div className="flex items-center text-[#feba40] font-bold text-xl">
              <Phone className="w-6 h-6 mr-2" />
              {CONTACT_INFO.phone}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutView() {
  return (
    <div className="pb-20">
      <div className="bg-[#086336] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">About Eaglestone</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Local expertise, professional equipment, and a commitment to doing the job right.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-md border border-[#cdd3cd] p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#086336] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Based in Bear River, Nova Scotia, Eaglestone Excavation and Forestry Services is a locally owned and operated business dedicated to providing top-tier site work, excavation, and trucking services across Southwestern Nova Scotia.
                </p>
                <p>
                  Owned and operated by Craig S Peck, we understand the unique landscape and environmental regulations of our province. We pride ourselves on practical solutions, hard work, and transparent communication with every client—whether you are a homeowner needing a driveway fixed or a contractor requiring full commercial site prep.
                </p>
                <p className="font-bold text-[#086336]">
                  We are fully licensed and insured, giving you peace of mind that your project is handled safely and to provincial standards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1544640808-32cb4f68696e?auto=format&fit=crop&q=80&w=400" alt="Excavator" className="rounded-lg h-48 w-full object-cover shadow-sm" />
               <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400" alt="Forestry" className="rounded-lg h-48 w-full object-cover shadow-sm mt-8" />
            </div>
          </div>
        </div>

        {/* Credentials & Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl border border-[#cdd3cd] shadow-sm">
            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
              <ShieldCheck className="w-8 h-8 text-[#086336] mr-3" /> 
              Licenses & Certifications
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0" />
                <div>
                  <strong className="block text-gray-900">Licensed Septic Installers</strong>
                  <span className="text-sm text-gray-600">Qualified to design and install residential and commercial septic systems in NS.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0" />
                <div>
                  <strong className="block text-gray-900">Watercourse Alteration Certified</strong>
                  <span className="text-sm text-gray-600">Licensed to work in and around watercourses, including culverts and bridges.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0" />
                <div>
                  <strong className="block text-gray-900">Fully Insured</strong>
                  <span className="text-sm text-gray-600">Comprehensive liability insurance for all excavation and heavy equipment operations.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#086336] p-8 rounded-xl text-white shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-black mb-6 flex items-center text-[#feba40]">
              <MapPin className="w-8 h-8 mr-3" /> 
              Our Service Area
            </h3>
            <p className="text-lg mb-6 text-green-50">
              Our home base is in <strong>Bear River, NS</strong>, but our equipment is mobile. 
            </p>
            <p className="text-green-100 mb-6">
              We primarily serve Southwestern Nova Scotia, including Digby, Annapolis, and Yarmouth counties, but we offer province-wide service for larger projects and specialized trucking needs.
            </p>
            <div className="mt-auto">
               <div className="inline-block bg-white/10 px-4 py-2 rounded border border-white/20 text-sm font-bold">
                 Based in Bear River • Serving Nova Scotia
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesView({ setSelectedService }) {
  return (
    <div className="pb-20">
      <div className="bg-[#086336] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Comprehensive site work, excavation, and trucking solutions tailored to your needs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-sm border border-[#cdd3cd] overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col"
              onClick={() => setSelectedService(service)}
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 z-20 bg-[#feba40] p-3 rounded-full shadow-md text-[#086336]">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-gray-900 mb-3">{service.title}</h3>
                <p className="text-[#6a7c71] mb-6 flex-grow leading-relaxed">{service.shortDesc}</p>
                <div className="flex items-center text-[#086336] font-bold mt-auto group-hover:text-green-700">
                  <span className="border-b-2 border-transparent group-hover:border-green-700 pb-0.5 transition-colors">View Details</span>
                  <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MaterialsView({ navigate }) {
  return (
    <div className="pb-20">
      <div className="bg-[#086336] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Materials for Sale</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Quality aggregates, soils, and stones delivered directly to your site.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-[#cdd3cd] p-6 mb-12 flex items-start space-x-4">
          <AlertCircle className="w-6 h-6 text-[#feba40] shrink-0 mt-0.5" />
          <p className="text-gray-700 text-sm md:text-base">
            <strong>Note on Pricing & Availability:</strong> Material prices fluctuate based on quarry rates and delivery distance. All materials are subject to availability. Please contact us with your location and required volume for an accurate quote. Trucking is available for all materials listed below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIALS.map((item) => (
            <div key={item.id} className="bg-white border border-[#cdd3cd] rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-[#086336]">
                  {item.status}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">Sold by the {item.unit}</p>
                <div className="mt-auto pt-4 border-t border-[#cdd3cd] flex items-center justify-between">
                  <span className="font-bold text-[#6a7c71]">{item.price}</span>
                  <Button variant="secondary" onClick={() => navigate('contact')} className="px-4 py-1.5 text-sm">
                    Inquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactView() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="pb-20">
      <div className="bg-[#086336] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact & Booking</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Get in touch for a free estimate or to schedule your next project.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Panel */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-[#cdd3cd] p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Direct Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#e5e8e6] p-3 rounded-full mr-4 text-[#086336]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Call or Text</p>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className="text-lg font-bold text-gray-900 hover:text-[#086336] transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#e5e8e6] p-3 rounded-full mr-4 text-[#086336]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-base font-bold text-gray-900 hover:text-[#086336] transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#e5e8e6] p-3 rounded-full mr-4 text-[#086336]">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Facebook</p>
                    <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="text-base font-bold text-gray-900 hover:text-[#086336] transition-colors">
                      Message us on Facebook
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start pt-6 border-t border-[#cdd3cd]">
                  <div className="bg-[#e5e8e6] p-3 rounded-full mr-4 text-[#086336]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-base font-bold text-gray-900">{CONTACT_INFO.location}</p>
                    <p className="text-sm text-[#6a7c71] mt-1">Serving {CONTACT_INFO.serviceArea}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- MODALS ---

function ServiceModal({ service, onClose, navigate }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      {/* Modal Box */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto">
          {/* Image Sidebar */}
          <div className="md:w-2/5 relative h-64 md:h-auto shrink-0">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
               <div className="text-white flex items-center">
                  <div className="bg-[#feba40] p-2 rounded-full mr-3 text-[#086336]">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-black">{service.title}</h2>
               </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-10 md:w-3/5 flex flex-col">
            <h3 className="text-xl font-bold text-[#086336] mb-4 border-b border-[#cdd3cd] pb-2">Service Overview</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              {service.fullDesc}
            </p>

            <h3 className="text-xl font-bold text-[#086336] mb-4 border-b border-[#cdd3cd] pb-2">What's Included</h3>
            <ul className="space-y-3 mb-10">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#feba40] mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t border-[#cdd3cd] bg-gray-50 -mx-8 -mb-8 p-8 md:-mx-10 md:-mb-10 md:p-10 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0 text-center sm:text-left">
                <p className="font-bold text-gray-900 mb-1">Need this service?</p>
                <p className="text-sm text-gray-500">Contact us for a site visit and estimate.</p>
              </div>
              <Button 
                onClick={() => {
                  onClose();
                  navigate('contact');
                }}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}