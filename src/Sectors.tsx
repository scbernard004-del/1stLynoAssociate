import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SECTORS } from '../constants';
import { FileWarning, FileCheck } from 'lucide-react';

const Sectors: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="relative bg-lyno-blue text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1920&q=80" 
            alt="African city skyline" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Client Sectors</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We serve a broad range of industries across the Tanzanian economy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SECTORS.map((sector, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all border-b-4 border-lyno-green group">
              <sector.icon size={40} className="text-slate-400 group-hover:text-lyno-green mb-4 transition-colors" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{sector.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>

        {/* Handling different client states */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-lyno-blue"></div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Adapting to Your Reality</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <FileWarning size={28} className="text-amber-500 mr-3" />
                <h4 className="text-lg font-bold text-slate-800">Poor or No Records?</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Many growing businesses in Tanzania struggle with record-keeping. We don't turn you away. Instead, we work with you to:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Reconstruct financial records from source documents.</li>
                <li>Implement simple, effective manual or digital bookkeeping.</li>
                <li>Train staff on basic record retention.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <FileCheck size={28} className="text-lyno-green mr-3" />
                <h4 className="text-lg font-bold text-slate-800">Systemized Clients</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                For corporates and institutions with established ERPs and computerized systems, we focus on:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Advanced internal control audits.</li>
                <li>System integrity checks.</li>
                <li>Strategic financial advisory and forecasting.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sectors;