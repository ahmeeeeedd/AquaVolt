import React, { useState } from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Button } from './common/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const EconomicsSection: React.FC = () => {
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [plantSize, setPlantSize] = useState('medium');
  
  const financialMetrics = [
    { 
      metric: "Initial Investment", 
      value: "€2.3M", 
      description: "Total capital expenditure for system implementation" 
    },
    { 
      metric: "Annual Operational Cost", 
      value: "€185K", 
      description: "Including maintenance, labor, and consumables" 
    },
    { 
      metric: "Annual Revenue", 
      value: "€480K", 
      description: "From energy generation and water savings" 
    },
    { 
      metric: "Payback Period", 
      value: "4.8 Years", 
      description: "Time to recoup initial investment" 
    },
    { 
      metric: "IRR (10-year)", 
      value: "21.3%", 
      description: "Internal Rate of Return over 10-year period" 
    },
    { 
      metric: "Net Present Value", 
      value: "€2.7M", 
      description: "NPV over 15-year system lifespan" 
    }
  ];

  const roiData = {
    small: {
      investment: "€1.4M",
      payback: "5.2 years",
      roi: "18.5%",
      npv: "€1.6M"
    },
    medium: {
      investment: "€2.3M",
      payback: "4.8 years",
      roi: "21.3%",
      npv: "€2.7M"
    },
    large: {
      investment: "€3.8M",
      payback: "4.3 years",
      roi: "24.1%",
      npv: "€4.5M"
    }
  };

  const comparativeAdvantages = [
    {
      title: "Conventional Wastewater Treatment",
      advantages: [
        "Significantly lower operating costs (40% reduction)",
        "Clean water AND energy generation (dual benefit)",
        "85% water recycling vs. 60% in conventional systems"
      ],
      disadvantages: [
        "Higher initial capital investment",
        "More complex installation",
        "Longer implementation timeline"
      ]
    },
    {
      title: "Other Renewable Energy Solutions",
      advantages: [
        "Solves two problems simultaneously (waste and energy)",
        "Consistent energy generation (not weather-dependent)",
        "Higher energy density per square meter of installation"
      ],
      disadvantages: [
        "Requires consistent wastewater supply",
        "More specialized maintenance needs",
        "Less scalable for very small installations"
      ]
    }
  ];

  return (
    <section id="economics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Economic Analysis" 
          subtitle="Financial viability and return on investment"
          centered
        />
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financialMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
                <h4 className="text-gray-500 text-sm">{metric.metric}</h4>
                <p className="text-3xl font-bold my-2 text-blue-900">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Button 
              secondary
              className="mx-auto flex items-center"
              onClick={() => setShowROICalculator(!showROICalculator)}
            >
              {showROICalculator ? 'Hide ROI Calculator' : 'Show ROI Calculator'}
              {showROICalculator ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
            </Button>
            
            {showROICalculator && (
              <div className="mt-6 bg-white rounded-lg shadow-md p-8 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-6">ROI Calculator</h3>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Select Plant Size:</label>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      className={`px-4 py-2 rounded-md ${plantSize === 'small' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      onClick={() => setPlantSize('small')}
                    >
                      Small (5,000 m³/month)
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-md ${plantSize === 'medium' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      onClick={() => setPlantSize('medium')}
                    >
                      Medium (10,000 m³/month)
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-md ${plantSize === 'large' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      onClick={() => setPlantSize('large')}
                    >
                      Large (20,000 m³/month)
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold mb-4">Financial Metrics</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span>Initial Investment:</span>
                        <span className="font-bold">{roiData[plantSize].investment}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Payback Period:</span>
                        <span className="font-bold">{roiData[plantSize].payback}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>10-Year ROI:</span>
                        <span className="font-bold">{roiData[plantSize].roi}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>15-Year NPV:</span>
                        <span className="font-bold">{roiData[plantSize].npv}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900 text-white rounded-lg p-6">
                    <h4 className="font-bold mb-4">Projected Annual Benefits</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between border-b border-blue-700 pb-2">
                        <span>Water Savings:</span>
                        <span className="font-bold">
                          {plantSize === 'small' ? '€175K' : plantSize === 'medium' ? '€290K' : '€580K'}
                        </span>
                      </li>
                      <li className="flex justify-between border-b border-blue-700 pb-2">
                        <span>Energy Value:</span>
                        <span className="font-bold">
                          {plantSize === 'small' ? '€95K' : plantSize === 'medium' ? '€190K' : '€380K'}
                        </span>
                      </li>
                      <li className="flex justify-between border-b border-blue-700 pb-2">
                        <span>Operational Costs:</span>
                        <span className="font-bold">
                          {plantSize === 'small' ? '-€110K' : plantSize === 'medium' ? '-€185K' : '-€320K'}
                        </span>
                      </li>
                      <li className="flex justify-between pt-2">
                        <span>Net Annual Benefit:</span>
                        <span className="font-bold">
                          {plantSize === 'small' ? '€160K' : plantSize === 'medium' ? '€295K' : '€640K'}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="mt-6 text-sm text-gray-600 italic">
                  *Calculations based on current energy prices, water costs, and operational efficiencies in Tunisia as of 2025.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Comparative Analysis</h3>
          
          <div className="space-y-8">
            {comparativeAdvantages.map((comparison, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-900 text-white p-4">
                  <h4 className="text-xl font-bold">Compared to: {comparison.title}</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-6">
                    <h5 className="font-bold text-green-600 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Advantages
                    </h5>
                    <ul className="space-y-2">
                      {comparison.advantages.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6">
                    <h5 className="font-bold text-red-600 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Challenges
                    </h5>
                    <ul className="space-y-2">
                      {comparison.disadvantages.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Funding Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Available Grants</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>EU Green Innovation Fund (up to €500K)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Tunisian Industrial Modernization Program (30% of costs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>UNIDO Cleaner Production Initiative</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Green Financing</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Preferential interest rates (2-4% lower than market)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Extended repayment periods (up to 12 years)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Carbon credit generation potential</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicsSection;