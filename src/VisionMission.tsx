import React from 'react';
import { Target, Compass } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="relative bg-lyno-blue text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573161158332-554e1b21d6bc?auto=format&fit=crop&w=1920&q=80" 
            alt="African business professionals" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Core Purpose</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The guiding principles of Lyno Associate
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-12 py-16 px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-lyno-green transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <Target size={32} className="text-lyno-green" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-800">Vision</h2>
            </div>
            <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
              "To be the most trusted and preferred Audit and Accounting firm in Tanzania, recognized for integrity, professionalism, and contribution to our clients' growth."
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-lyno-blue transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Compass size={32} className="text-lyno-blue" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-800">Mission</h2>
            </div>
            <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
              "To provide high-quality, timely, and affordable professional services that add value to our clients' businesses through strict adherence to ethical standards and regulatory compliance."
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-lyno-blue mb-4 text-center">What This Means For You</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm text-gray-600">
            <div className="p-4">
              <span className="block font-bold text-slate-900 mb-1">Clarity</span>
              We cut through financial complexity to give you clear insights.
            </div>
            <div className="p-4 border-l border-r border-gray-100">
              <span className="block font-bold text-slate-900 mb-1">Reliability</span>
              You can count on us for accurate reporting and deadlines.
            </div>
            <div className="p-4">
              <span className="block font-bold text-slate-900 mb-1">Growth</span>
              Our advice is geared towards sustainable business expansion.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;