
import React, { useEffect, useRef } from "react";

const About = () => {
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
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title reveal-animation animate-fade-in-up">Who We Are</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="reveal-animation animate-fade-in-up delay-200 glass-card p-8 rounded-xl">
            <h3 className="text-xl font-bold text-p2gs-navy mb-4">Our Company</h3>
            <p className="text-gray-700">
              P2GS is a specialized project management firm headquartered in Lebanon, based at Qubic Center, Sin El Fil. We focus on delivering exceptional results through strategic planning and technical expertise.
            </p>
          </div>

          <div className="reveal-animation animate-fade-in-up delay-400 glass-card p-8 rounded-xl">
            <h3 className="text-xl font-bold text-p2gs-navy mb-4">Our Expertise</h3>
            <p className="text-gray-700">
              We guide businesses and institutions through complex projects in two key sectors: Construction and Digital Transformation of Fixed and Mobile Telecom Networks. Our specialized teams ensure precision in execution.
            </p>
          </div>

          <div className="reveal-animation animate-fade-in-up delay-600 glass-card p-8 rounded-xl">
            <h3 className="text-xl font-bold text-p2gs-navy mb-4">Our Reach</h3>
            <p className="text-gray-700">
              Operating across Europe, Africa, and the Middle East, we combine strategic insight, technical expertise, and international experience to deliver high-impact results tailored to local market needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
