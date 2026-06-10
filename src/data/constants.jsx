import React from 'react';
import { HardHat, Wrench, Droplets, Truck, CheckCircle2, TreePine } from 'lucide-react';

export const CONTACT_INFO = {
  phone: "(902) 308-0679",
  email: "eaglestonesalesandinquiries@gmail.com",
  facebook: "https://www.facebook.com/p/Eaglestone-Excavation-and-Forestry-Services-61552757901413/",
  location: "Bear River, Nova Scotia",
  serviceArea: "Southwestern Nova Scotia & Province-wide",
  owner: "Craig S Peck"
};

export const COLORS = {
  primary: "#086336", // Dark Emerald
  accent: "#feba40",  // Sunflower Gold
  bg: "#e5e8e6",      // Alabaster Grey
  border: "#cdd3cd",  // Dust Grey
  textMuted: "#6a7c71" // Dusty Olive
};

export const SERVICES = [
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
    fullDesc: "As licensed installers, we provide end-to-end septic system services. We assist with the necessary permits, design a system tailored to your property's soil and usage requirements, and execute the installation to the highest provincial standards. We also handle grant-funded installations.",
    features: ["System design & engineering", "Permit assistance", "New system installation", "Repairs & upgrades", "Grant-approved work", "Licensed & insured"],
    image: "./b3fabdd7-2213-4ddd-9168-0477054c229a.png"
  },
  {
    id: "wells",
    title: "Dug Wells",
    icon: <Droplets className="w-8 h-8" />,
    shortDesc: "Licensed construction and repair of traditional dug water wells.",
    fullDesc: "Ensure a reliable water supply with our expert dug well construction and repair services. As licensed well diggers, we handle the excavation, crock installation, and sealing, ensuring your well meets all safety and environmental regulations. We also assist with grant-funded projects.",
    features: ["Licensed Well Diggers", "New well construction", "Well deepening & repair", "Grant-approved installations", "Waterline trenching", "Sealing & protection"],
    image: "./brady-rogers-lg6-3u2tMh0-unsplash.jpg"
  },
  {
    id: "drainage",
    title: "Driveways & Drainage",
    icon: <Truck className="w-8 h-8" />,
    shortDesc: "Custom driveways, ditching, and drain tile installation.",
    fullDesc: "Proper water management is critical to protecting your property. We construct durable driveways and implement comprehensive drainage solutions including ditching, culverts, and drain tile systems to keep your land dry and accessible.",
    features: ["Gravel driveway construction", "Ditching & sloping", "Drain tile installation", "French drains", "Culvert placement", "Erosion control"],
    image: "./b4179075-846a-4f4e-89ba-b59623dd1ddd.png"
  },
  {
    id: "watercourse",
    title: "Watercourse Alterations",
    icon: <CheckCircle2 className="w-8 h-8" />,
    shortDesc: "Licensed watercourse crossings, bridges, and alterations.",
    fullDesc: "Working near water requires specialized knowledge and licensing. We manage watercourse alterations, including building crossings and bridges, ensuring environmental compliance and minimal ecological impact.",
    features: ["Licensed alterations", "Bridge construction", "Stream crossings", "Culvert installations", "Permit applications", "Watercourse alterations & crossings design and sizing", "Erosion protection", "Environmental compliance"],
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

export const MATERIALS = [
  { id: 1, name: "Type 1 (Class A)", unit: "Tonne", price: "Request Pricing", status: "In Stock", description: "High-quality crushed gravel ideal for road bases, driveways, and parking areas. Delivery available.", image: "b51adc09-b8ae-4ae6-8925-c6b99d0f470b.png" },
  { id: 2, name: "Type 2", unit: "Tonne", price: "Request Pricing", status: "In Stock", description: "Coarser aggregate sub-base stone, perfect for foundational work and heavy-use driveways. Delivered.", image: "type_2_gravel.png" },
  { id: 3, name: "Topsoils", unit: "Yard", price: "Request Pricing", status: "In Stock", description: "Premium organic soil for landscaping, lawn preparation, and gardens. Available in various grades. Delivered.", image: "1899288a-0d7d-488b-8847-6af0ab32b254.png" },
  { id: 4, name: "Armour Stone", unit: "Tonne", price: "Request Pricing", status: "In Stock", description: "Large heavy stones ideal for retaining walls, erosion control, shorelines, and focal landscaping. Delivered.", image: "55b19d7e-dff5-40a7-831f-c3f85a979bbc.png" },
  { id: 5, name: "Sand", unit: "Tonne", price: "Request Pricing", status: "In Stock", description: "Available in various grades: septic sand, electrical sand, general purpose sand, and pit run sand. Delivered.", image: "construction_sand.png" },
  { id: 6, name: "Clear Stone", unit: "Tonne", price: "Request Pricing", status: "In Stock", description: "Drainage stone, available in various sizes for septic fields, French drains, and landscaping. Delivered.", image: "6fc6797b-a51b-4134-9f2b-a8313e427c5e.png" },
  { id: 7, name: "Woodchips", unit: "Yard", price: "Request Pricing", status: "In Stock", description: "Landscaping mulch, available in natural or colored (red/brown) finishes. Delivered.", image: "woodchips.png" },
  { id: 8, name: "Compost", unit: "Yard", price: "Request Pricing", status: "In Stock", description: "Nutrient-rich soil conditioner, available in various grades for landscaping and gardens. Delivered.", image: "compost.png" },
  { id: 9, name: "Clear Rock", unit: "Tonne", price: "Request Pricing", status: "In Stock", description: "Unwashed clear stone in various sizes for heavy drainage, sub-base work, and backfilling. Delivered.", image: "6fc6797b-a51b-4134-9f2b-a8313e427c5e.png" },
  { id: 10, name: "Rip Rap", unit: "Yard", price: "Request Pricing", status: "In Stock", description: "Heavy angular stones designed to protect shorelines, slopes, and culverts from water erosion. Delivered.", image: "rip_rap.png" },
  { id: 11, name: "Crusher Dust", unit: "Tonne", price: "Request Pricing", status: "In Stock", description: "Fine stone dust, ideal as a final leveling layer under pavers, walkways, and patios. Delivered.", image: "crusher_dust.png" },
  { id: 12, name: "7-Inch Minus", unit: "Tonne", price: "Request Pricing", status: "In Stock", description: "Heavy sub-base aggregate containing rock sizes up to 7 inches down to fine particles. Delivered.", image: "seven_inch_minus.png" },
  { id: 13, name: "Fill Dirt", unit: "Load", price: "Request Pricing", status: "In Stock", description: "Unscreened fill dirt, ideal for filling large holes, raising elevation, and site grading. Delivered.", image: "d9ae4bb9-6137-4325-bdfe-aa7bda0973cd.png" },
  { id: 14, name: "Landscape Boulders", unit: "Each/Tonne", price: "Request Pricing", status: "In Stock", description: "Natural rock boulders for decorative landscaping, property markers, and natural barriers. Delivered.", image: "55b19d7e-dff5-40a7-831f-c3f85a979bbc.png" }
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1579545802275-c052994e63e7?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1605372545524-7164985f4ba5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1584824388144-88981f3c3a4d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1544640808-32cb4f68696e?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1621619665971-dae963fc23d3?auto=format&fit=crop&q=80&w=600"
];
