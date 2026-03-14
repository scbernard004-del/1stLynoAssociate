import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="relative bg-lyno-blue text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80" 
            alt="African professional woman" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are ready to assist you with your audit and financial needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Form */}
          <div>
            <SectionHeader title="Get in Touch" />
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <MapPin className="text-lyno-green mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Our Office</h4>
                  <p className="text-gray-600">{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-lyno-green mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-lyno-green mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-gray-600">{COMPANY_INFO.email}</p>
                </div>
              </div>
               <div className="flex items-start">
                <Clock className="text-lyno-green mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Send us a message</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lyno-green focus:ring-lyno-green p-3 border" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lyno-green focus:ring-lyno-green p-3 border" placeholder="you@company.com" />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lyno-green focus:ring-lyno-green p-3 border" placeholder="+255..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lyno-green focus:ring-lyno-green p-3 border" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-lyno-blue text-white font-bold py-3 px-4 rounded hover:bg-slate-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
             {/* Embedded Google Map pointing to Ubungo, Dar es Salaam */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63393.38466649712!2d39.2008785!3d-6.790934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bf49a059d99%3A0xe67c9c0f993f3503!2sUbungo%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1698765432100!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lyno Associate Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;