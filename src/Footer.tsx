import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded w-fit">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Lyno Associate provides world-class audit, accounting, and advisory services tailored to the Tanzanian market. We are committed to integrity, precision, and your business growth.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-wider font-bold border border-slate-700 px-2 py-1 rounded text-gray-500">NBAA Regulated</span>
              <span className="text-[10px] uppercase tracking-wider font-bold border border-slate-700 px-2 py-1 rounded text-gray-500">TRA Registered</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-serif font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-lyno-green"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/about" className="hover:text-lyno-green transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>About Us</NavLink></li>
              <li><NavLink to="/services" className="hover:text-lyno-green transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>Our Services</NavLink></li>
              <li><NavLink to="/partners" className="hover:text-lyno-green transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>Our Partners</NavLink></li>
              <li><NavLink to="/sectors" className="hover:text-lyno-green transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>Client Sectors</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-lyno-green transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Services Summary */}
          <div>
            <h3 className="text-white text-lg font-serif font-bold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-lyno-green"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">Assurance & Audit</li>
              <li className="text-gray-400">Taxation Services</li>
              <li className="text-gray-400">Accounting Support</li>
              <li className="text-gray-400">Financial Advisory</li>
              <li className="text-gray-400">Internal Controls</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-lg font-serif font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-lyno-green"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 text-lyno-green mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 text-lyno-green group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 text-lyno-green group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start pt-4 border-t border-slate-800 mt-4">
                <FileText size={18} className="mr-3 text-slate-600 mt-0.5" />
                <div className="text-[11px] text-slate-500 space-y-1">
                  <p className="flex justify-between gap-4"><span>TIN:</span> <span className="font-mono">{COMPANY_INFO.ids.tin}</span></p>
                  <p className="flex justify-between gap-4"><span>VRN:</span> <span className="font-mono">{COMPANY_INFO.ids.vrn}</span></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;