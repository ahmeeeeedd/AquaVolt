import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Check, AlertTriangle } from 'lucide-react';

const FeasibilitySection: React.FC = () => {
  const feasibilityFactors = [
    {
      title: "Textile Industry Presence",
      description: "Tunisia has a strong textile industry with over 1,600 companies producing significant wastewater.",
      score: 9,
      icon: <Check className="text-green-500 w-6 h-6" />
    },
    {
      title: "Water Scarcity",
      description: "Tunisia faces severe water scarcity issues, making water recycling solutions highly valuable.",
      score: 10,
      icon: <Check className="text-green-500 w-6 h-6" />
    },
    {
      title: "Renewable Energy Goals",
      description: "Tunisia aims to increase renewable energy to 30% by 2030, creating policy support.",
      score: 8,
      icon: <Check className="text-green-500 w-6 h-6" />
    },
    {
      title: "Technical Expertise",
      description: "Access to engineering talent in thermodynamics and water treatment.",
      score: 7,
      icon: <Check className="text-green-500 w-6 h-6" />
    },
    {
      title: "Initial Investment Costs",
      description: "Higher upfront costs require strategic financing or partnerships.",
      score: 5,
      icon: <AlertTriangle className="text-yellow-500 w-6 h-6" />
    },
    {
      title: "Regulatory Framework",
      description: "Environmental regulations support the project but permit processes can be lengthy.",
      score: 6,
      icon: <Check className="text-green-500 w-6 h-6" />
    }
  ];

  const tunisiaStats = [
    { label: "Textile Industry Size", value: "€2.4 billion", unit: "annual exports" },
    { label: "Water Scarcity Level", value: "71%", unit: "water stress index" },
    { label: "Textile Wastewater", value: "22 million", unit: "m³ annually" },
    { label: "Energy Import Dependency", value: "97%", unit: "of energy needs" },
    { label: "Renewable Energy Target", value: "30%", unit: "by 2030" },
    { label: "Water Reuse Potential", value: "85%", unit: "recovery rate" }
  ];

  return (
    <section id="feasibility" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Feasibility in Tunisia" 
          subtitle="Analysis of key factors affecting implementation in the Tunisian context"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Key Feasibility Factors</h3>
            
            <div className="space-y-6">
              {feasibilityFactors.map((factor, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold flex items-center">
                      {factor.icon}
                      <span className="ml-2">{factor.title}</span>
                    </h4>
                    <div className="flex items-center">
                      <div className="w-36 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className={`h-full rounded-full ${
                            factor.score >= 8 ? 'bg-green-500' : 
                            factor.score >= 6 ? 'bg-blue-500' : 
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${factor.score * 10}%` }}
                        ></div>
                      </div>
                      <span className="font-bold">{factor.score}/10</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Tunisia Context</h3>
            
            <div className="bg-blue-900 text-white rounded-lg p-6 shadow-lg">
              <div className="space-y-6">
                {tunisiaStats.map((stat, index) => (
                  <div key={index} className="border-b border-blue-700 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-blue-300 text-sm">{stat.label}</p>
                    <div className="flex items-baseline mt-1">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="ml-2 text-blue-200 text-sm">{stat.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-800 rounded p-4">
                <h4 className="font-semibold mb-2">Overall Feasibility Score</h4>
                <div className="flex items-center">
                  <div className="w-full h-3 bg-blue-700 rounded-full mr-2">
                    <div className="h-full rounded-full bg-green-400" style={{ width: '75%' }}></div>
                  </div>
                  <span className="font-bold text-xl">7.5/10</span>
                </div>
                <p className="mt-2 text-sm text-blue-200">
                  Highly feasible with strategic planning and proper investment
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-4">Implementation Timeline</h4>
              <div className="space-y-3">
                {[
                  { phase: "Pilot Project", time: "6-8 months" },
                  { phase: "Regulatory Approval", time: "3-4 months" },
                  { phase: "Full System Installation", time: "8-12 months" },
                  { phase: "Testing & Optimization", time: "2-3 months" },
                  { phase: "Full Operation", time: "Ongoing" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-800">{item.phase}</span>
                    <span className="font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 italic">
                Total expected time from initiation to operation: 19-27 months
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeasibilitySection;