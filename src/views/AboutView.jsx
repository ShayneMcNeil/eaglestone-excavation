import React from 'react';
import { ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/constants.jsx';

export default function AboutView() {
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
                  Owned and operated by Craig S Peck, we understand the unique landscape and environmental regulations of our province. As licensed septic installers and licensed well diggers, we are qualified to design, construct, and repair vital residential water and wastewater systems. We are also proud to work with provincial, municipal, and agricultural grant programs, helping homeowners and businesses secure funding and complete necessary upgrades.
                </p>
                <p className="font-bold text-[#086336]">
                  We are fully licensed and insured, giving you peace of mind that your project is handled safely and to provincial standards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col">
                 <img src="couple_on_farm.png" alt="Craig S Peck and partner on the farm" className="rounded-lg h-48 w-full object-cover shadow-sm" />
                 <span className="text-xs text-gray-500 mt-2 text-center font-medium italic">Craig S Peck & partner on the farm</span>
               </div>
               <div className="flex flex-col mt-8">
                 <img src="nova_scotia_map.png" alt="Map of Nova Scotia highlighting Digby and Annapolis Counties" className="rounded-lg h-48 w-full object-cover shadow-sm" />
                 <span className="text-xs text-gray-500 mt-2 text-center font-medium italic">Our Service Area: Digby & Annapolis Counties</span>
               </div>
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
                  <strong className="block text-gray-900">Licensed Well Diggers</strong>
                  <span className="text-sm text-gray-600">Certified for expert dug well construction, deepening, and waterline installations.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0" />
                <div>
                  <strong className="block text-gray-900">Grant Work Approved</strong>
                  <span className="text-sm text-gray-600">Approved provider for provincial/municipal well, water, and septic upgrade grants.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0" />
                <div>
                  <strong className="block text-gray-900">Watercourse Alteration Certified</strong>
                  <span className="text-sm text-gray-600">Licensed to work in and around watercourses, including culverts and bridges. Sizer and installer certified.</span>
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
