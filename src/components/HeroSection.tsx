import React from 'react';
import { Button } from './common/Button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToTechnology = () => {
    const element = document.querySelector('#technology');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-r from-blue-900 to-teal-800 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforming Textile Wastewater into <span className="text-teal-400">Energy & Clean Water</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            A sustainable solution for Tunisia's textile industry using Rankine cycle technology
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              primary 
              className="w-full sm:w-auto"
              onClick={scrollToTechnology}
            >
              Discover Our Solution
            </Button>
            <Button 
              secondary 
              className="w-full sm:w-auto"
              onClick={() => {
                const element = document.querySelector('#feasibility');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              See the Feasibility
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <button 
              onClick={scrollToTechnology}
              className="text-white focus:outline-none"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;