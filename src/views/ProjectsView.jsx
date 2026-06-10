import React from 'react';
import { HardHat, CheckCircle2 } from 'lucide-react';

export default function ProjectsView() {
  return (
    <div className="pb-20">
      <div className="bg-[#086336] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Completed Projects</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">A showcase of our excavation, well digging, septic, and forestry projects across Southwestern NS.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-white rounded-2xl shadow-md border border-[#cdd3cd] p-10 md:p-16 flex flex-col items-center">
          <div className="bg-[#e5e8e6] p-6 rounded-full text-[#086336] mb-8 animate-pulse">
            <HardHat className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Gallery Coming Soon</h2>
          <div className="w-16 h-1 bg-[#feba40] mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            We are currently gathering high-quality photos of our recent excavations, septic system installations, dug wells, and driveway completions.
          </p>
        </div>
      </div>
    </div>
  );
}
