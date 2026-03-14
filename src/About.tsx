import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ShieldCheck, Award, TrendingUp, Target, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-lyno-blue mb-6">About Lyno Associate</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a Tanzanian firm of Certified Public Accountants and Auditors, established to provide high-quality professional services in Audit, Accountancy, Taxation, and General Management Advisory.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-lyno-blue mb-4">Firm Background</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Lyno Associate was founded with a clear mandate: to offer professional services that meet international standards while addressing the specific needs of the Tanzanian market. Our firm is fully registered and compliant with the laws of the United Republic of Tanzania.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We operate under the strict regulation of the <strong>National Board of Accountants and Auditors (NBAA)</strong>, ensuring that every engagement we undertake adheres to the highest ethical and professional benchmarks.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-6">
              <h4 className="font-bold text-slate-800 mb-2">Our Commitment</h4>
              <p className="text-sm text-gray-600">
                To provide timely, accurate, and affordable services without compromising on quality. We believe in building long-term relationships based on trust and tangible results.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
             {/* Africans in a meeting - Tanzanian style professional context */}
             <img 
                src="https://images.unsplash.com/photo-1573161158332-554e1b21d6bc?auto=format&fit=crop&w=1200&q=80" 
                alt="African business professionals in a meeting" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="bg-lyno-blue text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-lyno-green">Experience</h3>
                <p className="text-gray-300">
                  Our partners and staff bring together years of combined experience working with diverse sectors including construction, NGOs, trading, and retail across East Africa.
                </p>
              </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-20">
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
        </div>

        {/* Philosophy */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <SectionHeader title="Our Approach" subtitle="How we deliver value to our clients." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-start">
              <div className="bg-white p-3 rounded-full shadow-sm mb-4">
                <ShieldCheck size={32} className="text-lyno-green" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Compliance First</h4>
              <p className="text-gray-600 text-sm">
                We navigate the complex regulatory landscape of Tanzania so you don't have to. We ensure you remain compliant with TRA and NBAA requirements.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-white p-3 rounded-full shadow-sm mb-4">
                <Award size={32} className="text-lyno-green" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">
                Every audit and report goes through rigorous internal review processes to ensure accuracy and adherence to International Financial Reporting Standards (IFRS).
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-white p-3 rounded-full shadow-sm mb-4">
                <TrendingUp size={32} className="text-lyno-green" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Business Context</h4>
              <p className="text-gray-600 text-sm">
                We understand that Tanzanian businesses range from informal traders to structured corporates. We adapt our methodologies to fit your specific operational reality.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;