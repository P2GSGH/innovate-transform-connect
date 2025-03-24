
import React, { useEffect, useRef } from "react";
import { Building2, Wifi, Building } from "lucide-react";

const Services = () => {
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
    <section id="services" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title reveal-animation animate-fade-in-up">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="reveal-animation animate-fade-in-up delay-200">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] h-full flex flex-col">
              <div className="bg-p2gs-navy p-6 flex items-center">
                <div className="bg-white/10 p-4 rounded-full mr-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Construction Project Management</h3>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-700 mb-4">
                  From pre-construction planning to final handover, P2GS manages every stage of your construction projects with precision and expertise.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Project planning and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Budget control and cost management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Quality assurance and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Stakeholder coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Risk management and mitigation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="reveal-animation animate-fade-in-up delay-400">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] h-full flex flex-col">
              <div className="bg-p2gs-blue p-6 flex items-center">
                <div className="bg-white/10 p-4 rounded-full mr-4">
                  <Wifi className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Telecom Digital Transformation</h3>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-700 mb-4">
                  We support telecom providers in upgrading and digitizing their infrastructure, ensuring seamless implementation and optimal performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Network modernization planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Digital infrastructure deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">System integration and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Technology migration management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Performance monitoring and enhancement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="reveal-animation animate-fade-in-up delay-600">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] h-full flex flex-col">
              <div className="bg-p2gs-lightblue p-6 flex items-center">
                <div className="bg-white/10 p-4 rounded-full mr-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Telecom Solutions</h3>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-700 mb-4">
                  We design and deploy advanced telecom infrastructure for smart buildings and city-wide networks, creating connected and efficient environments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Smart building connectivity solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">IoT network integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Urban connectivity planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Smart city infrastructure deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-p2gs-blue font-bold mr-2">•</span>
                    <span className="text-gray-700">Sustainable communication networks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
