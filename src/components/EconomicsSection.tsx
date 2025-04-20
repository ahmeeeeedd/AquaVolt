import React, { useState } from "react";
import { SectionTitle } from "./common/SectionTitle";
import { Button } from "./common/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

const EconomicsSection: React.FC = () => {
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [plantSize, setPlantSize] = useState("medium");

  const financialMetrics = [
    {
      metric: "Investissement Initial",
      value: "TND 1.05M",
      description: "Système complet Rankine + filtration (hors subventions)",
    },
    {
      metric: "Coûts Annuels d'Exploitation",
      value: "TND 143.6K",
      description: "Énergie, maintenance, filtration, MBR, etc.",
    },
    {
      metric: "Valeur Annuelle Eau + Énergie",
      value: "TND 246.9K",
      description: "Électricité, eau réutilisée, ventes de boues chimiques",
    },
    {
      metric: "Bénéfice Net Annuel",
      value: "TND 103.3K",
      description: "Après déduction des coûts d’exploitation",
    },
    {
      metric: "Période d'Amortissement",
      value: "7.64 ans",
      description: "ROI après subventions (~34.8%)",
    },
    {
      metric: "Investissement Réduit",
      value: "TND 789.4K",
      description: "Après subventions (SUNREF, REFAT, GIZ...)",
    },
  ];

  const roiData = {
    small: {
      investment: "TND 600K",
      payback: "8.1 ans",
      roi: "15.3%",
      npv: "TND 770K",
    },
    medium: {
      investment: "TND 1.05M",
      payback: "7.6 ans",
      roi: "17.9%",
      npv: "TND 1.3M",
    },
    large: {
      investment: "TND 1.9M",
      payback: "6.8 ans",
      roi: "21.4%",
      npv: "TND 2.4M",
    },
  };

  return (
    <section id="economics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Évaluation Économique"
          subtitle="Viabilité financière du traitement des eaux textiles par cycle de Rankine"
          centered
        />

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financialMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
              >
                <h4 className="text-gray-500 text-sm">{metric.metric}</h4>
                <p className="text-3xl font-bold my-2 text-blue-900">
                  {metric.value}
                </p>
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
              {showROICalculator
                ? "Cacher le Calculateur ROI"
                : "Afficher le Calculateur ROI"}
              {showROICalculator ? (
                <ChevronUp className="ml-2" />
              ) : (
                <ChevronDown className="ml-2" />
              )}
            </Button>

            {showROICalculator && (
              <div className="mt-6 bg-white rounded-lg shadow-md p-8 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-6">
                  Calculateur de Retour sur Investissement
                </h3>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">
                    Taille de l'installation :
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <button
                      className={`px-4 py-2 rounded-md ${
                        plantSize === "small"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => setPlantSize("small")}
                    >
                      Petite (5 000 m³/mois)
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${
                        plantSize === "medium"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => setPlantSize("medium")}
                    >
                      Moyenne (10 000 m³/mois)
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${
                        plantSize === "large"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => setPlantSize("large")}
                    >
                      Grande (20 000 m³/mois)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold mb-4">Indicateurs Financiers</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span>Investissement initial :</span>
                        <span className="font-bold">
                          {roiData[plantSize].investment}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span>Période d'amortissement :</span>
                        <span className="font-bold">
                          {roiData[plantSize].payback}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span>ROI sur 10 ans :</span>
                        <span className="font-bold">
                          {roiData[plantSize].roi}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span>VAN sur 15 ans :</span>
                        <span className="font-bold">
                          {roiData[plantSize].npv}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-900 text-white rounded-lg p-6">
                    <h4 className="font-bold mb-4">
                      Bénéfices Annuels Estimés
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between border-b border-blue-700 pb-2">
                        <span>Économies d'eau :</span>
                        <span className="font-bold">
                          {plantSize === "small"
                            ? "TND 120K"
                            : plantSize === "medium"
                            ? "TND 175K"
                            : "TND 300K"}
                        </span>
                      </li>
                      <li className="flex justify-between border-b border-blue-700 pb-2">
                        <span>Valeur de l'énergie :</span>
                        <span className="font-bold">
                          {plantSize === "small"
                            ? "TND 55K"
                            : plantSize === "medium"
                            ? "TND 95K"
                            : "TND 180K"}
                        </span>
                      </li>
                      <li className="flex justify-between border-b border-blue-700 pb-2">
                        <span>Coûts d'opération :</span>
                        <span className="font-bold">
                          {plantSize === "small"
                            ? "-TND 110K"
                            : plantSize === "medium"
                            ? "-TND 143.6K"
                            : "-TND 265K"}
                        </span>
                      </li>
                      <li className="flex justify-between pt-2">
                        <span>Bénéfice net annuel :</span>
                        <span className="font-bold">
                          {plantSize === "small"
                            ? "TND 65K"
                            : plantSize === "medium"
                            ? "TND 126.4K"
                            : "TND 215K"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-600 italic">
                  *Basé sur les données techniques et économiques collectées sur
                  le projet pilote DEMCO-Textu, ajustées aux standards de 2025.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicsSection;
