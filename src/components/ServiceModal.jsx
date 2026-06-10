import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import Button from './Button.jsx';

export default function ServiceModal({ service, onClose, navigate }) {
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
