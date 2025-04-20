import React, { useState } from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Droplets, Thermometer, Wind, Recycle, Factory } from 'lucide-react';

const TechnologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Wastewater Collection",
      description: "Textile wastewater at 60°C is collected and pre-filtered, processing 500 m³/day through our advanced filtration system. The system removes solid particles and contaminants while preserving the thermal energy content.",
      color: "bg-blue-500",
      icon: <Droplets className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Boiler System",
      description: "Our innovative heat exchange technology raises the wastewater's thermal energy to generate steam at 10 bar pressure. The system achieves optimal heat transfer with minimal energy loss.",
      color: "bg-red-500",
      icon: <Thermometer className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Turbine Generation",
      description: "The high-pressure steam drives our state-of-the-art turbine with 75% isentropic efficiency, generating approximately 127 kW of continuous power (3 MWh/day).",
      color: "bg-yellow-500",
      icon: <Wind className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Condensation",
      description: "Steam exits the turbine at 0.1 bar and enters our advanced condenser system at 25°C ambient temperature, efficiently recovering 400 m³/day of clean water.",
      color: "bg-green-500",
      icon: <Recycle className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Industrial Integration",
      description: "The recovered water and energy are reintegrated into textile production, saving 264,000 TND annually in water and energy costs.",
      color: "bg-teal-500",
      icon: <Factory className="w-8 h-8" />
    }
  ];

  const technicalSpecs = {
    wastewater: [
      { label: "Input Temperature", value: "60°C" },
      { label: "Daily Flow Rate", value: "500 m³/day" },
      { label: "Thermal Energy Available", value: "847.5 kW" },
      { label: "Specific Heat Capacity", value: "4.18 kJ/kg·K" }
    ],
    steamCycle: [
      { label: "Steam Pressure (Turbine Inlet)", value: "10 bar" },
      { label: "Condenser Pressure", value: "0.1 bar" },
      { label: "Turbine Efficiency", value: "75%" },
      { label: "Cycle Efficiency", value: "15-20%" }
    ],
    performance: [
      { label: "Power Generation", value: "127 kW" },
      { label: "Daily Energy Output", value: "3,051 kWh" },
      { label: "Water Recovery Rate", value: "80%" },
      { label: "Clean Water Production", value: "400 m³/day" }
    ]
  };

  const economicMetrics = [
    {
      title: "Initial Investment Breakdown",
      items: [
        { label: "Mini Boiler & Heat Exchangers", value: "400,000 TND" },
        { label: "Steam Turbine System", value: "500,000 TND" },
        { label: "Condenser & Cooling Tower", value: "250,000 TND" },
        { label: "Filtration System", value: "200,000 TND" },
        { label: "Installation & Automation", value: "150,000 TND" }
      ]
    },
    {
      title: "Annual Benefits",
      items: [
        { label: "Water Cost Savings", value: "144,000 TND" },
        { label: "Wastewater Treatment Savings", value: "120,000 TND" },
        { label: "Total Annual Savings", value: "264,000 TND" },
        { label: "ROI Period (With 30% Grant)", value: "3.97 years" },
        { label: "ROI Period (No Grant)", value: "5.68 years" }
      ]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Rankine Cycle Technology" 
          subtitle="Converting Textile Wastewater into Energy and Clean Water"
          centered
        />
        
        <div className="max-w-6xl mx-auto mt-16">
          {/* Process Steps */}
          <div className="flex flex-col md:flex-row mb-12 justify-between relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative mb-8 md:mb-0">
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto transition-all duration-500 cursor-pointer
                    ${activeStep === step.id ? `${step.color} scale-110 shadow-lg` : 'bg-gray-300'}
                  `}
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.icon}
                </div>
                <p className="text-center mt-3 font-medium">{step.title}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -z-10">
                    <div 
                      className={`h-full ${step.color} transition-all duration-500`}
                      style={{ width: activeStep > step.id ? '100%' : '0%' }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Technical Details */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="flex items-center mb-6">
              <div className={`${steps[activeStep - 1].color} p-3 rounded-full text-white mr-4`}>
                {steps[activeStep - 1].icon}
              </div>
              <h3 className="text-3xl font-bold">
                {steps[activeStep - 1].title}
              </h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {steps[activeStep - 1].description}
            </p>
            
            {/* Technical Parameters */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Wastewater Parameters</h4>
                <div className="space-y-3">
                  {technicalSpecs.wastewater.map((spec, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Steam Cycle Parameters</h4>
                <div className="space-y-3">
                  {technicalSpecs.steamCycle.map((spec, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">System Performance</h4>
                <div className="space-y-3">
                  {technicalSpecs.performance.map((spec, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Economic Analysis */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Economic Analysis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {economicMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-2xl font-semibold mb-6">{metric.title}</h4>
                <div className="space-y-4">
                  {metric.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-bold text-lg">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;