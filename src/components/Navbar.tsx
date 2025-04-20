import React, { useState, useEffect } from "react";
import { Menu, X, Droplets } from "lucide-react";
import { Link } from "./common/Link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Droplets size={32} className="text-teal-600 mr-2" />
          <span className="text-xl font-bold"> AquaVolt </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="#home">Home</Link>
          <Link href="#technology">Technology</Link>
          <Link href="#feasibility">Feasibility</Link>
          <Link href="#impact">Impact</Link>
          <Link href="#economics">Economics</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#home" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#technology" onClick={() => setIsOpen(false)}>
              Technology
            </Link>
            <Link href="#feasibility" onClick={() => setIsOpen(false)}>
              Feasibility
            </Link>
            <Link href="#impact" onClick={() => setIsOpen(false)}>
              Impact
            </Link>
            <Link href="#economics" onClick={() => setIsOpen(false)}>
              Economics
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
