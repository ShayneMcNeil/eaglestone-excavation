import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/constants.jsx';

export default function ServicesView({ setSelectedService }) {
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
