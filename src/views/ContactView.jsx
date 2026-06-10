import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../components/Button.jsx';
import { CONTACT_INFO } from '../data/constants.jsx';

export default function ContactView() {
  const [state, handleSubmit] = useForm('mlgkljqo');

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
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-[#cdd3cd] p-8 md:p-10">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Send Us a Message</h3>
              
              {state.succeeded ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="bg-[#086336] text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#feba40]" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-[#6a7c71] mb-6">Thank you for reaching out. We will review your request and get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-[#cdd3cd] focus:ring-2 focus:ring-[#086336] focus:border-transparent outline-none transition-all text-gray-900"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-[#cdd3cd] focus:ring-2 focus:ring-[#086336] focus:border-transparent outline-none transition-all text-gray-900"
                        placeholder="john@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="w-full px-4 py-3 rounded-lg border border-[#cdd3cd] focus:ring-2 focus:ring-[#086336] focus:border-transparent outline-none transition-all text-gray-900"
                        placeholder="(902) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Requesting Service *</label>
                      <select 
                        id="service" 
                        name="service" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#cdd3cd] focus:ring-2 focus:ring-[#086336] focus:border-transparent bg-white outline-none transition-all text-gray-900"
                      >
                        <option value="">Select a service...</option>
                        <option value="excavation">Excavation & Site Work</option>
                        <option value="septic">Septic Installation</option>
                        <option value="wells">Dug Wells</option>
                        <option value="drainage">Driveways & Drainage</option>
                        <option value="watercourse">Watercourse Alterations</option>
                        <option value="forestry">Forestry & Trucking</option>
                        <option value="materials">Materials Inquiry</option>
                        <option value="other">Other Inquiry / Quote Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Project Details & Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-[#cdd3cd] focus:ring-2 focus:ring-[#086336] focus:border-transparent outline-none transition-all resize-y text-gray-900"
                      placeholder="Please describe your project requirements, location, and any details."
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-full py-4 text-lg"
                  >
                    {state.submitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Info Panel */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-[#cdd3cd] p-8 h-full flex flex-col justify-between">
              <div>
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
                </div>
              </div>
              
              <div className="flex items-start pt-6 border-t border-[#cdd3cd] mt-6">
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
  );
}
