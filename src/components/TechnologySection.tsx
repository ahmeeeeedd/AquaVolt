import React, { useState } from "react";
import { SectionTitle } from "./common/SectionTitle";
import { Droplets, Thermometer, Wind, Recycle, Factory } from "lucide-react";

const TechnologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Effluent Capture & Pre-treatment",
      description:
        "At DEMCO-Textu, 100 m³/day of textile wastewater at 52.5°C is captured. The water is filtered in three stages: pre-filtration, fine filtration, and post-boiler residue management. Residual solids are valorized or safely disposed of.",
      color: "bg-blue-600",
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Heat Recovery & Steam Production",
      description:
        "1,300 m² of solar thermal panels (5 kWh/m²/day, 50% efficiency) produce 3,250 kWh/day. The wastewater is heated from 52.5°C to 100°C via pre-heater and gas boiler, generating steam to power a turbine.",
      color: "bg-red-600",
      icon: <Thermometer className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Steam-Driven Power Generation",
      description:
        "The steam drives a turbine with 30% conversion efficiency. Total input of 5,515 kWh/day yields 1,654.5 kWh/day or 603,892.5 kWh/year of clean electricity — enough to cover 57.65% of a small plant’s needs.",
      color: "bg-yellow-500",
      icon: <Wind className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Condensation & Water Recovery",
      description:
        "The steam is condensed using fans and pumps (~20 kWh/day). Up to 83% of water is recovered and reinjected into the textile process, reducing fresh water usage and environmental discharge.",
      color: "bg-green-600",
      icon: <Recycle className="w-8 h-8" />,
    },
    {
      id: 5,
      title: "Circular Integration at DEMCO-Textu",
      description:
        "Recovered electricity and water are reused onsite. Annual savings: 103,257.38 TND net. The ROI with grants is 7.64 years. This supports sustainability and reduces dependency on fresh water and fossil energy.",
      color: "bg-teal-600",
      icon: <Factory className="w-8 h-8" />,
    },
  ];

  const technicalSpecs = {
    wastewater: [
      { label: "Input Temperature", value: "52.5°C" },
      { label: "Daily Volume", value: "100 m³/day" },
      { label: "Thermal Energy Available", value: "~5,515 kWh/day" },
      { label: "Solar Thermal Panel Area", value: "1,300 m²" },
    ],
    steamCycle: [
      { label: "Solar Panel Efficiency", value: "50%" },
      { label: "Gas Boiler Efficiency", value: "90%" },
      { label: "Steam Turbine Efficiency", value: "30%" },
      { label: "Condensation Efficiency", value: "85%" },
    ],
    performance: [
      { label: "Electric Output", value: "603,892.5 kWh/year" },
      { label: "Water Recovery Rate", value: "83%" },
      { label: "Recovered Water", value: "~83,000 m³/year" },
      { label: "Net Annual Benefit", value: "103,257.38 TND" },
    ],
  };

  const economicMetrics = [
    {
      title: "Investment & Support (Tunisia)",
      items: [
        { label: "System Investment", value: "1,050,000 TND" },
        { label: "Grants & Subsidies", value: "365,600 TND (34.8%)" },
        { label: "Effective Investment", value: "789,400 TND" },
        { label: "Annual Net Gain", value: "103,257.38 TND" },
        { label: "ROI", value: "7.64 years" },
      ],
    },
    {
      title: "Annual Operational Costs",
      items: [
        { label: "Gas Boiler", value: "94,170 TND" },
        { label: "Pump", value: "32,850 TND" },
        { label: "Condenser", value: "1,825 TND" },
        { label: "Pre-Heater", value: "456.25 TND" },
        { label: "MBR Filtration + Maintenance", value: "14,343.75 TND" },
      ],
    },
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Rankine-Based Wastewater Reuse"
          subtitle="Energy and Water Recovery at DEMCO-Textu (Tunisia)"
          centered
        />

        <div className="max-w-6xl mx-auto mt-16">
          {/* Process Steps */}
          <div className="flex flex-col md:flex-row mb-12 justify-between relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative mb-8 md:mb-0">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto transition-all duration-500 cursor-pointer
                    ${
                      activeStep === step.id
                        ? `${step.color} scale-110 shadow-lg`
                        : "bg-gray-300"
                    }
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
                      style={{ width: activeStep > step.id ? "100%" : "0%" }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Technical Parameters */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="flex items-center mb-6">
              <div
                className={`${
                  steps[activeStep - 1].color
                } p-3 rounded-full text-white mr-4`}
              >
                {steps[activeStep - 1].icon}
              </div>
              <h3 className="text-3xl font-bold">
                {steps[activeStep - 1].title}
              </h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {steps[activeStep - 1].description}
            </p>

            {/* Specs Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(technicalSpecs).map(([sectionTitle, specs]) => (
                <div key={sectionTitle} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4">
                    {sectionTitle === "wastewater" && "Wastewater Specs"}
                    {sectionTitle === "steamCycle" && "Steam Cycle Specs"}
                    {sectionTitle === "performance" && "System Output"}
                  </h4>
                  <div className="space-y-3">
                    {specs.map((spec: any, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Economic Impact */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Economic Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {economicMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-2xl font-semibold mb-6">{metric.title}</h4>
                <div className="space-y-4">
                  {metric.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-gray-100 pb-2"
                    >
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
