import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-lyno-blue text-white h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* African Business Team - Tanzanian style professional meeting */}
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" 
            alt="African business professionals in a meeting" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              {COMPANY_INFO.motto}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-lyno-green hover:bg-emerald-500 text-white px-8 py-4 rounded font-semibold text-lg transition-all flex items-center justify-center"
              >
                Contact Us <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-lyno-blue text-white px-8 py-4 rounded font-semibold text-lg transition-all flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="About Lyno Associate" 
                subtitle="We are a Tanzanian audit firm dedicated to providing compliance, assurance, and advisory services of the highest standard."
              />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Registered and regulated by the National Board of Accountants and Auditors (NBAA), we serve a diverse portfolio of clients ranging from large corporates and NGOs to microfinance institutions and startups.
              </p>
              <ul className="space-y-3 mb-8">
                {['NBAA Compliant', 'Local Expertise', 'Integrity Driven', 'Client Focused'].map((item) => (
                  <li key={item} className="flex items-center text-slate-800 font-medium">
                    <CheckCircle size={20} className="text-lyno-green mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-lyno-green font-semibold hover:underline">
                Read more about our firm &rarr;
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              {/* Professional African woman in corporate setting - Verified */}
              <img 
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80" 
                alt="Tanzanian auditor reviewing documents" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Expertise" 
            subtitle="Comprehensive financial solutions tailored for the Tanzanian business environment."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow border-t-4 border-lyno-green">
                <service.icon size={48} className="text-lyno-blue mb-6" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                <Link to="/services" className="text-lyno-green text-sm font-semibold hover:text-emerald-700">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-lyno-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to elevate your financial compliance?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Lyno Associate for rigorous audits and strategic financial advice.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-lyno-green hover:bg-emerald-500 text-white px-8 py-3 rounded font-semibold transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;