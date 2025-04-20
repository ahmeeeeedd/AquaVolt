import React from "react";
import { Droplets } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplets size={32} className="text-teal-400 mr-2" />
              <span className="text-xl font-bold"> AquaVolt </span>
            </div>
            <p className="text-gray-400">
              Transforming textile wastewater into clean energy and reusable
              water through innovative Rankine cycle technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#feasibility"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Feasibility
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#economics"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Economics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li> Centre Urbain Nord , Tunisie </li>
              <li> AquaVolt@gmailcom</li>
              <li>+216 71 123 456</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AquaVolt . All rights reserved.</p>
          <p className="mt-2">
            <a
              href="#"
              className="text-gray-500 hover:text-teal-400 mx-2 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-teal-400 mx-2 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-teal-400 mx-2 transition-colors"
            >
              Cookie Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
