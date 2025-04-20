import React from 'react';
import { SectionTitle } from './common/SectionTitle';

interface SDGProps {
  number: number;
  title: string;
  description: string;
  imageUrl: string;
}

const SDG: React.FC<SDGProps> = ({ number, title, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center transform transition-all duration-500 hover:scale-105">
      <div className="w-40 h-40 mb-4 relative group">
        <img 
          src={imageUrl} 
          alt={`SDG ${number}`} 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h4 className="font-bold text-center mb-2 text-xl">{title}</h4>
      <p className="text-sm text-center text-gray-300">{description}</p>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  const environmentalImpacts = [
    { 
      metric: "Water Saved", 
      value: "18.7M", 
      unit: "m³/year",
      equivalent: "Water for 340,000 Tunisians annually",
      icon: "💧"
    },
    { 
      metric: "CO₂ Emissions Reduction", 
      value: "12,400", 
      unit: "tonnes/year",
      equivalent: "Equal to planting 200,000 trees",
      icon: "🌱"
    },
    { 
      metric: "Chemical Discharge Reduced", 
      value: "85%", 
      unit: "",
      equivalent: "Protecting Mediterranean Sea ecosystems",
      icon: "🌊"
    },
    { 
      metric: "Energy Generated", 
      value: "4.2", 
      unit: "GWh/year",
      equivalent: "Powering 1,500 Tunisian households",
      icon: "⚡"
    }
  ];

  const sdgs = [
    {
      number: 7,
      title: "Affordable and Clean Energy",
      description: "Contributing to Tunisia's renewable energy goals through innovative waste-to-energy conversion",
      imageUrl: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg"
    },
    {
      number: 9,
      title: "Industry, Innovation and Infrastructure",
      description: "Modernizing Tunisia's textile industry with sustainable water and energy infrastructure",
      imageUrl: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg"
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      description: "Implementing circular economy principles in Tunisia's textile manufacturing sector",
      imageUrl: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg"
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Supporting Tunisia's commitment to reduce greenhouse gas emissions by 45% by 2030",
      imageUrl: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-teal-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Environmental & Social Impact" 
          subtitle="Contributing to Tunisia's Sustainable Development Goals"
          centered
          light
        />
        
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Environmental Metrics</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalImpacts.map((impact, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:bg-opacity-20"
              >
                <span className="text-5xl block mb-4">{impact.icon}</span>
                <h4 className="text-xl font-bold mb-1 text-teal-300">{impact.metric}</h4>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{impact.value}</span>
                  <span className="ml-1 text-sm text-gray-300">{impact.unit}</span>
                </div>
                <p className="mt-2 text-sm text-gray-300">{impact.equivalent}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 text-center">Supporting UN Sustainable Development Goals</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {sdgs.map((sdg) => (
              <SDG key={sdg.number} {...sdg} />
            ))}
          </div>
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Impact on Tunisia</h3>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-teal-300">Economic Impact</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Creation of 35-45 high-skilled technical jobs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>100+ indirect jobs in local manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Technology transfer and skill development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Enhanced competitiveness in textile exports</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-teal-300">Environmental Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Protection of Tunisia's water resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Reduced pressure on municipal water supply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Lower carbon footprint for textile industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Mediterranean Sea ecosystem protection</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-teal-800 to-blue-800 rounded-lg">
              <h4 className="font-bold mb-3 text-xl">Vision for Tunisia</h4>
              <p className="text-lg leading-relaxed">
                Our project aims to establish Tunisia as a regional leader in sustainable textile manufacturing, 
                combining traditional expertise with cutting-edge green technology. By demonstrating the viability 
                of waste-to-energy solutions, we're creating a blueprint for sustainable industrial development 
                across North Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;