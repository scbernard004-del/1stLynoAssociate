import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header */}
      <div className="relative bg-lyno-blue text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&w=1920&q=80" 
            alt="Professional African handshake" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Professional Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive suite of audit, accounting, and advisory services designed to ensure your business is compliant, efficient, and prepared for growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {SERVICES.map((category, index) => (
          <div key={category.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className={`md:flex ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Category Info & Image */}
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-lyno-blue/60 flex flex-col justify-center p-8 md:p-12 text-white">
                  {category.icon && <category.icon size={64} className="text-lyno-green mb-6" />}
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{category.title}</h2>
                  <p className="text-gray-200 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Detailed Items & Benefits */}
              <div className="md:w-1/2 p-8 md:p-12 bg-white flex flex-col">
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-lyno-blue mb-8 pb-2 border-b-2 border-lyno-green inline-block">
                    Key Service Offerings
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {category.items.map((item, i) => {
                      const IconComponent = item.icon || Check;
                      return (
                        <div key={i} className="flex items-start group">
                          <div className="bg-emerald-50 rounded-xl p-3 mr-4 flex-shrink-0 group-hover:bg-lyno-green group-hover:text-white transition-colors duration-300">
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <h4 className="text-md font-bold text-slate-800 mb-1">{item.title}</h4>
                            <p className="text-gray-600 text-xs leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-lyno-blue mb-4 flex items-center">
                    <span className="w-8 h-1 bg-lyno-green mr-3 rounded-full"></span>
                    Benefits & Outcomes
                  </h3>
                  <ul className="space-y-3">
                    {category.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-lyno-green flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;