
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-p2gs-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">P2GS</h2>
            <p className="text-gray-300 max-w-md">
              Specialized project management across Europe, Africa, and the Middle East. Delivering exceptional results in Construction and Telecom Digital Transformation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-p2gs-lightblue transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-p2gs-lightblue transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-p2gs-lightblue transition-colors duration-200">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-p2gs-lightblue transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Qubic Center, Sin El Fil, Lebanon</li>
              <li className="text-gray-300">contact@p2gs.com</li>
              <li className="text-gray-300">+961 1 234 567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} P2GS – All rights reserved
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Powered by Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
