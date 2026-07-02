import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, CheckCircle2, MapPin, Maximize, Minimize } from 'lucide-react';
import { CONTACT_INFO } from '../data/constants.jsx';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function AboutView() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFullscreen);
      
      // Force Leaflet to recalculate its viewport size after the fullscreen transition completes
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 100);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: true,
      });

      mapInstanceRef.current = map;

      // CartoDB Voyager tiles showing detailed street layouts, highways, and town labels
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Coordinates from KML: [lat, lng]
      const serviceAreaCoordinates = [
        [44.3685614, -64.9664233],
        [44.5489168, -65.224602],
        [44.8651448, -64.9059985],
        [45.1021513, -65.1751635],
        [44.9857132, -65.4058764],
        [44.6818648, -66.0266039],
        [44.3056985, -66.4770434],
        [44.0219817, -66.3781664],
        [43.5500702, -66.0156176],
        [44.3685614, -64.9664233]
      ];

      // Styled polygon matching Eaglestone theme (deep green outline, gold fill)
      const polygon = L.polygon(serviceAreaCoordinates, {
        color: '#086336',       // deep green
        fillColor: '#feba40',   // gold
        fillOpacity: 0.25,      // translucent fill
        weight: 3               // outline width
      }).addTo(map);

      // Pins on the map as reference points for visitors
      const referencePoints = [
        { name: 'Bear River', coords: [44.5723, -65.6433], isHome: true },
        { name: 'Digby', coords: [44.6208, -65.7584] },
        { name: 'Annapolis Royal', coords: [44.7437, -65.5189] },
        { name: 'Middleton', coords: [44.9426, -65.0682] },
        { name: 'Caledonia', coords: [44.3750, -65.0311] },
        { name: 'Bridgewater', coords: [44.3700, -64.5200] },
        { name: 'Lunenburg', coords: [44.3778, -64.3094] },
        { name: 'Liverpool', coords: [44.0375, -64.7139] },
        { name: 'Halifax', coords: [44.6475, -63.5906] },
        { name: 'Sydney', coords: [46.1364, -60.1956] },
        { name: 'Yarmouth', coords: [43.8387, -66.1152] }
      ];

      // Helper function to create custom SVG map pins matching brand colors (Green and Gold)
      const createPinIcon = (color, sizeMultiplier = 1) => {
        const width = 24 * sizeMultiplier;
        const height = 30 * sizeMultiplier;
        return L.divIcon({
          className: '',
          html: `
            <div style="display: flex; flex-direction: column; align-items: center; width: ${width}px; height: ${height}px;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${color}" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/>
                <circle cx="12" cy="10" r="3.5" fill="#ffffff"/>
              </svg>
            </div>
          `,
          iconSize: [width, height],
          iconAnchor: [width / 2, height],
          popupAnchor: [0, -height]
        });
      };

      // Add pins to map
      referencePoints.forEach(pt => {
        const isHome = pt.isHome;
        const pinColor = isHome ? '#086336' : '#feba40'; // Green for Home Base, Gold for references
        const sizeMultiplier = isHome ? 1.35 : 1.0;

        const marker = L.marker(pt.coords, {
          icon: createPinIcon(pinColor, sizeMultiplier),
          interactive: false // Non-clickable so hover cursors or popup interactions are disabled
        }).addTo(map);

        // Bind a permanent tooltip that floats cleanly below the pin
        marker.bindTooltip(pt.name, {
          permanent: true,
          direction: 'bottom',
          className: 'custom-town-tooltip',
          offset: [0, 4]
        });
      });

      // Zoom the map to perfectly fit the service area polygon on initial load
      map.fitBounds(polygon.getBounds(), { padding: [35, 35] });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#086336] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Based in Bear River, Nova Scotia, Eaglestone Excavation and Forestry Services is a locally owned and operated business dedicated to providing top-tier site work, excavation, and trucking services across Southwestern Nova Scotia.
                </p>
                <p>
                  We understand the unique landscape and environmental regulations of our province. As licensed septic installers and licensed well diggers, we are qualified to design, construct, and repair vital residential water and wastewater systems. We are also proud to work with provincial, municipal, and agricultural grant programs, helping homeowners and businesses secure funding and complete necessary upgrades.
                </p>
                <p className="font-bold text-[#086336]">
                  We are fully licensed and insured, giving you peace of mind that your project is handled safely and to provincial standards.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-[#086336] mb-6 flex items-center">
                <ShieldCheck className="w-8 h-8 mr-3 text-[#086336]" /> 
                Licenses & Certifications
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Licensed Septic Installers</strong>
                    <span className="text-sm text-gray-600">Qualified to design and install residential and commercial septic systems in NS.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Licensed Well Diggers</strong>
                    <span className="text-sm text-gray-600">Certified for expert dug well construction, deepening, and waterline installations.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Grant Work Approved</strong>
                    <span className="text-sm text-gray-600">Approved provider for provincial/municipal well, water, and septic upgrade grants.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Watercourse Alteration Certified</strong>
                    <span className="text-sm text-gray-600">Licensed to work in and around watercourses, including culverts and bridges. Sizer and installer certified.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#feba40] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Fully Insured</strong>
                    <span className="text-sm text-gray-600">Comprehensive liability insurance for all excavation and heavy equipment operations.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Service Area */}
        <div className="bg-[#086336] p-8 md:p-12 rounded-xl text-white shadow-md border border-[#064e2b] mb-16">
          <div className="w-full mb-8">
            <h3 className="text-3xl font-black mb-4 flex items-center text-[#feba40]">
              <MapPin className="w-8 h-8 mr-3" /> 
              Our Service Area
            </h3>
            <p className="text-lg mb-4 text-green-50">
              Our home base is in <strong>Bear River, NS</strong>, but our equipment is mobile. 
            </p>
            <p className="text-green-100 mb-6">
              We primarily serve Southwestern Nova Scotia, including Digby, Annapolis, and Yarmouth counties, but we offer province-wide service for larger projects and specialized trucking needs. If your location is not highlighted on the map, we may still be able to service your area. Please contact us to inquire.
            </p>
            <div className="inline-block bg-white/10 px-4 py-2 rounded border border-white/20 text-sm font-bold">
              Based in Bear River • Serving Nova Scotia
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div 
              ref={containerRef} 
              className={`w-full h-[500px] overflow-hidden border border-white/20 shadow-lg relative z-0 transition-all ${isFullscreen ? 'rounded-none' : 'rounded-lg'}`}
              style={isFullscreen ? { height: '100vh', width: '100vw' } : {}}
            >
              <style>{`
                .leaflet-tooltip.custom-town-tooltip {
                  background: transparent !important;
                  border: none !important;
                  box-shadow: none !important;
                  color: #086336 !important;
                  font-weight: 800 !important;
                  font-size: 11px !important;
                  font-family: sans-serif !important;
                  text-shadow: -1.5px -1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px 1.5px 0 #fff !important;
                  padding: 0 !important;
                  white-space: nowrap !important;
                }
                .leaflet-tooltip-bottom.custom-town-tooltip::before {
                  display: none !important;
                }
              `}</style>

              <div ref={mapRef} className="w-full h-full" />
              
              {/* Native Fullscreen Toggle Button */}
              <button 
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-[1000] bg-white p-2 rounded-lg border border-[#cdd3cd] shadow-md hover:bg-gray-50 active:scale-95 transition-all text-[#086336] flex items-center justify-center cursor-pointer"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Map"}
              >
                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
              </button>
            </div>
            <span className="text-xs text-green-200 mt-2 text-center font-medium italic">
              Serving Annapolis, Digby, and Yarmouth counties and surrounding areas (Scroll to zoom)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
