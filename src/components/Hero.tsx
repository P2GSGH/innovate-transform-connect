
import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll(".reveal-animation");
            animatedElements.forEach((el) => {
              el.classList.add("animate");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-p2gs-navy/20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden mb-4">
            <h1 
              className="reveal-animation text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-reveal-text inline-block"
            >
              Empowering Projects.{" "}
              <span className="text-p2gs-lightblue">Driving Innovation.</span>
            </h1>
          </div>
          <p 
            className="reveal-animation delay-300 animate-fade-in-up text-lg md:text-xl text-white/90 mt-6 mb-8 leading-relaxed"
          >
            P2GS is your trusted partner in Project Management for Construction and Telecom Digital Transformation across Europe, Africa, and the Middle East.
          </p>
          <div className="reveal-animation delay-500 animate-fade-in-up">
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-p2gs-blue rounded-md shadow-lg hover:bg-p2gs-navy transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Discover Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex justify-center items-center text-white">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
