import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Leadership Team" 
          subtitle="Meet the certified partners driving excellence at Lyno Associate."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          {PARTNERS.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-gray-100 shadow-xl">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-lyno-blue">{partner.name}</h3>
              <p className="text-lyno-green font-semibold mb-4 text-sm uppercase tracking-wide">{partner.role}</p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {partner.qualifications.map((qual, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200">
                    {qual}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed max-w-md">
                {partner.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-lyno-blue rounded-xl p-10 text-center">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Team</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Beyond our partners, Lyno Associate is staffed by a dedicated team of aspiring accountants and auditors. We prioritize continuous professional development to ensure our entire staff stays updated with the latest NBAA guidelines and tax regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;