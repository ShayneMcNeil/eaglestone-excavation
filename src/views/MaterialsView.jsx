import React from 'react';
import { AlertCircle } from 'lucide-react';
import Button from '../components/Button.jsx';
import { MATERIALS } from '../data/constants.jsx';

export default function MaterialsView({ navigate }) {
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
                <p className="text-sm text-gray-500 mb-2">Sold by the {item.unit}</p>
                {item.description && <p className="text-sm text-[#6a7c71] mb-4 flex-grow">{item.description}</p>}
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
