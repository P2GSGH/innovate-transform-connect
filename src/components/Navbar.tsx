
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Geography", href: "#geography" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-p2gs-navy font-heading font-bold text-2xl">
            P2GS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-p2gs-blue ${
                  scrolled ? "text-p2gs-navy" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-p2gs-navy" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-p2gs-navy" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[300px] opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-p2gs-navy hover:text-p2gs-blue font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
