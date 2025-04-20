import React from "react";
import { SectionTitle } from "./common/SectionTitle";

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
      value: "83,000",
      unit: "m³/year",
      equivalent: "83% recovery from 100,000 m³/year input",
      icon: "💧",
    },
    {
      metric: "CO₂ Emissions Reduction",
      value: "~12,400",
      unit: "kg CO₂/year",
      equivalent: "Equivalent to planting ~200,000 trees",
      icon: "🌱",
    },
    {
      metric: "Chemical Discharge Reduced",
      value: "85%",
      unit: "",
      equivalent: "Protection of local marine ecosystems",
      icon: "🌊",
    },
    {
      metric: "Clean Energy Generated",
      value: "603,892.5",
      unit: "kWh/year",
      equivalent: "Powering ~1,500 households",
      icon: "⚡",
    },
  ];

  const sdgs = [
    {
      number: 6,
      title: "Clean Water and Sanitation",
      description:
        "Recovering wastewater and reducing pollution in textile industry",
      imageUrl:
        "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg",
    },
    {
      number: 7,
      title: "Affordable and Clean Energy",
      description:
        "Generating clean electricity via Rankine cycle in industrial context",
      imageUrl:
        "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg",
    },
    {
      number: 9,
      title: "Industry, Innovation and Infrastructure",
      description:
        "Deploying innovative water-energy systems for textile sustainability",
      imageUrl:
        "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg",
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      description:
        "Reducing resource use and waste discharge through closed-loop reuse",
      imageUrl:
        "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg",
    },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-b from-teal-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Environmental & Social Impact"
          subtitle="Contributing to Tunisia's Sustainable Development Goals"
          centered
          light
        />

        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Key Environmental Metrics
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalImpacts.map((impact, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:bg-opacity-20"
              >
                <span className="text-5xl block mb-4">{impact.icon}</span>
                <h4 className="text-xl font-bold mb-1 text-teal-300">
                  {impact.metric}
                </h4>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{impact.value}</span>
                  <span className="ml-1 text-sm text-gray-300">
                    {impact.unit}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-300">
                  {impact.equivalent}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 text-center">
            Supporting UN Sustainable Development Goals
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {sdgs.map((sdg) => (
              <SDG key={sdg.number} {...sdg} />
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Impact on Tunisia
          </h3>

          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-teal-300">
                  Economic Impact
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>35–45 direct skilled technical jobs created</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>
                      Over 100 indirect jobs in manufacturing and maintenance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>
                      Boost to local cleantech expertise and innovation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>
                      Improved competitiveness in global textile market
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-teal-300">
                  Environmental Benefits
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>
                      Protection of Tunisia’s strategic water resources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>
                      Relieves pressure on municipal water infrastructure
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>Helps achieve Tunisia’s 2030 climate targets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>
                      Supports marine biodiversity in the Mediterranean
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-teal-800 to-blue-800 rounded-lg">
              <h4 className="font-bold mb-3 text-xl">Vision for Tunisia</h4>
              <p className="text-lg leading-relaxed">
                Our mission is to position Tunisia as a leader in circular and
                clean textile production. This pilot project showcases a
                scalable model for sustainable industrial growth across North
                Africa, merging renewable energy with advanced water reuse
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
