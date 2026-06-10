import React from 'react';
import { ShieldCheck, Wrench, CheckCircle2, MapPin, Droplets, HardHat, ChevronRight, TreePine, Phone } from 'lucide-react';
import Button from '../components/Button.jsx';
import { SERVICES, CONTACT_INFO } from '../data/constants.jsx';

export default function HomeView({ navigate, setSelectedService }) {
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
            <span>Licensed Well Diggers & Septic Installers</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl">
            Rugged Reliability for Your Next Project.
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl font-medium leading-relaxed">
            Licensed well diggers and septic installers providing comprehensive site work, forestry, and heavy trucking. Based in Bear River, serving Southwestern NS. We do grant-funded projects!
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-[#086336] mb-2" />
              <span className="font-bold text-gray-800 text-sm md:text-base">Fully Insured</span>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="w-8 h-8 text-[#086336] mb-2" />
              <span className="font-bold text-gray-800 text-sm md:text-base">Licensed Septic Installers</span>
            </div>
            <div className="flex flex-col items-center">
              <Droplets className="w-8 h-8 text-[#086336] mb-2" />
              <span className="font-bold text-gray-800 text-sm md:text-base">Licensed Well Diggers</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-8 h-8 text-[#086336] mb-2" />
              <span className="font-bold text-gray-800 text-sm md:text-base">Grant Work Approved</span>
            </div>
            <div className="flex flex-col items-center">
              <HardHat className="w-8 h-8 text-[#086336] mb-2" />
              <span className="font-bold text-gray-800 text-sm md:text-base">Watercourse Alterations</span>
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
