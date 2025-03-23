
import React, { useEffect, useRef } from "react";

const Geography = () => {
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

  const regions = [
    {
      name: "Europe",
      description: "Strategic project management across Western and Eastern European markets.",
      countries: ["France", "Germany", "Italy", "Spain", "United Kingdom"]
    },
    {
      name: "Middle East",
      description: "Comprehensive telecom and construction project leadership throughout the region.",
      countries: ["Lebanon", "UAE", "Saudi Arabia", "Qatar", "Jordan"]
    },
    {
      name: "Africa",
      description: "Specialized expertise adapted to the unique requirements of African markets.",
      countries: ["Egypt", "Morocco", "South Africa", "Nigeria", "Kenya"]
    }
  ];

  return (
    <section id="geography" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title reveal-animation animate-fade-in-up">We Work Without Borders</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-animation animate-fade-in-up delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-p2gs-lightblue/30 to-transparent opacity-70 rounded-full blur-3xl"></div>
              <svg 
                viewBox="0 0 800 450" 
                className="w-full h-auto relative z-10"
                style={{ filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1))" }}
              >
                <path d="M658.7,210.5c-0.8,1.4-2.2,2.3-3.6,3c-1.6,0.8-3.4,1.3-5.2,1.6c-3.8,0.6-7.7,0.3-11.4-0.6c-3.7-0.9-7.3-2.5-10.6-4.5 c-3.3-2-6.4-4.4-9.3-7c-2.9-2.6-5.7-5.5-8.1-8.6c-2.4-3.1-4.5-6.5-6.1-10c-1.6-3.6-2.7-7.4-3.1-11.3c-0.4-3.9-0.1-7.9,1-11.6 c1.1-3.7,3-7.2,5.5-10.2c2.6-3,5.8-5.5,9.3-7.4c3.5-1.9,7.4-3.2,11.3-3.8c3.9-0.6,7.9-0.5,11.8,0.1c3.9,0.6,7.6,1.8,11.1,3.4 c3.5,1.6,6.8,3.7,9.7,6.2c2.9,2.5,5.5,5.4,7.6,8.5c2.1,3.2,3.7,6.6,4.8,10.2c1.1,3.6,1.6,7.3,1.5,11c-0.1,3.7-0.7,7.4-1.8,10.9 c-1.1,3.5-2.7,6.9-4.7,10c-1.1,1.8-2.4,3.4-3.8,5" fill="#D8D8D8" stroke="#A0A0A0" strokeWidth="0.5"/>
                <path d="M182.3,170c-1.1-0.9-2.3-1.8-3.4-2.6c-1.4-0.9-3.4-2.1-2.2-4c0.7-1.1,2.2-1.3,3.3-1.4c1.1-0.1,2.3-0.1,3.4-0.1 c2.5,0,5.1,0.2,7.6,0c1.2-0.1,2.5-0.2,3.6-0.6c1.3-0.4,2.7-1.1,4-1.1c1.7-0.1,3.3,1.5,5,1.6c0.8,0,1.6-0.3,2.4-0.5 c0.7-0.1,1.5-0.1,2.1,0.2c0.6,0.3,1,0.8,1.3,1.4c0.5,1,1,2,1.6,2.9c0.5,0.7,1.2,1.3,1.3,2.2c0.1,0.7-0.3,1.3-0.7,1.8 c-0.9,1.3-1.9,2.5-3,3.6c-0.5,0.5-1.1,0.9-1.7,1.2c-0.6,0.2-1.4,0.2-1.9,0.7c-0.8,0.7-0.6,1.9-0.6,2.9c0,1.2-0.1,2.5-0.8,3.5 c-0.5,0.8-1.3,1.2-2.1,1.7c-1.6,0.8-3.2,1.5-4.9,2.1c-0.8,0.3-1.7,0.6-2.6,0.6c-1,0-2-0.3-3-0.6c-2.1-0.6-4.3-1.4-6.1-2.6 c-1.1-0.7-2-1.5-2.8-2.5c-1-1.2-1.9-2.5-2.5-3.9c-0.3-0.7-0.5-1.4-0.5-2.2C178.8,172.7,180.9,171.1,182.3,170z" fill="#126E82" stroke="#0A2342" strokeWidth="0.5"/>
                <path d="M276.7,211.8c-1.1,0.5-2.4,0.3-3.6,0.2c-1.9-0.2-3.9-0.4-5.7-1.1c-1.7-0.7-3.2-1.7-4.6-2.8c-1.4-1.2-2.7-2.5-3.5-4.1 c-0.8-1.5-1.1-3.1-1.7-4.7c-0.7-1.7-1.6-3.2-2.3-4.8c-0.8-1.8-1.1-3.7-1.5-5.6c-0.7-3.7-1.4-7.4-2.7-10.9c-0.6-1.8-1.3-3.5-1.7-5.3 c-0.4-1.8-0.4-3.6-0.3-5.5c0.1-3,0.3-6.1,1.2-9c0.9-2.9,2.3-5.5,3.8-8.1c1.5-2.6,3.2-5.2,5.5-7.1c1.9-1.5,4.1-2.5,6.3-3.3 c1.8-0.7,3.7-1.1,5.6-1.5c2.3-0.5,4.7-0.9,7.1-0.8c2.3,0.1,4.6,0.7,6.8,1.4c2.1,0.7,4.2,1.7,6,3.1c1.9,1.5,3.3,3.4,4.7,5.3 c1.3,1.9,2.5,3.9,3.6,6c0.9,1.6,1.7,3.3,2.2,5.1c0.5,1.8,0.7,3.7,0.8,5.6c0.1,3.1-0.3,6.2-1.5,9.1c-1.1,2.8-2.9,5.2-5.3,7 c-2.5,1.9-5.5,2.9-8.5,3.5c-2.5,0.5-5.1,0.6-7.6,0.6c-2.2,0-4.5-0.1-6.6-0.9c-2.7-1-4.9-3.1-6.5-5.4c-0.8-1.2-1.5-2.5-1.8-3.9 c-0.3-1.5-0.3-3-0.1-4.5c0.3-2.9,1.3-5.7,2.8-8.2c1.5-2.5,3.5-4.7,5.7-6.5c2.2-1.8,4.6-3.4,7.1-4.6c2.2-1.1,4.5-2,6.7-2.9 c0.3-0.1,0.6-0.3,0.7-0.6c0.1-0.3,0-0.6-0.2-0.9c-0.3-0.4-0.7-0.8-1.2-1c-0.9-0.5-1.9-0.8-3-0.9c-2-0.2-4,0.1-5.8,0.8 c-1.9,0.7-3.6,1.8-5.1,3.2c-2.5,2.4-4.1,5.5-5.2,8.8c-0.5,1.6-0.9,3.3-1.1,5c-0.2,1.6-0.3,3.2-0.3,4.8c0,3,0.4,6,1.3,8.8 c0.9,2.8,2.2,5.5,3.8,8c0.8,1.2,1.6,2.4,2.6,3.4c1,1,2.1,1.9,3.3,2.8c2.4,1.7,5,3.2,7.6,4.3c2.7,1.1,5.6,1.9,8.6,2.1 c0.8,0.1,1.6,0.1,2.3,0c0.4,0,0.7-0.1,1.1-0.2c0.3-0.1,0.6-0.3,0.8-0.5c0.2-0.2,0.2-0.4,0.2-0.6c0-0.2-0.1-0.4-0.2-0.5 c-0.2-0.3-0.4-0.5-0.7-0.7c-0.5-0.4-1-0.6-1.6-0.9c-1-0.5-2.1-0.9-3.1-1.4c-1.9-0.9-3.8-1.9-5.5-3.1c-1.7-1.2-3.2-2.6-4.4-4.3 c-1.1-1.7-2-3.5-2.4-5.5c-0.4-2-0.5-4.1-0.2-6.1c0.3-2,1.1-3.9,2.1-5.6c1.1-1.7,2.5-3.2,4.1-4.4c1.7-1.2,3.5-2.1,5.5-2.7 c1.9-0.6,3.9-0.8,5.9-0.8c3.3,0,6.6,0.8,9.5,2.4c2.9,1.6,5.3,3.8,7.1,6.6c1.7,2.8,2.8,5.9,3.1,9.1c0.3,3.2-0.1,6.5-1.2,9.6 c-1.1,3.1-2.8,5.9-5,8.3c-2.2,2.4-4.9,4.4-7.8,5.7c-3,1.3-6.3,2-9.6,2c-0.7,0-1.4,0-2.1-0.1C277.4,212,277,211.9,276.7,211.8z" fill="#126E82" stroke="#0A2342" strokeWidth="0.5"/>
                <path d="M440.5,168.3c-1.8-0.1-3.6-0.5-5.3-1.2c-1.7-0.7-3.3-1.6-4.8-2.7c-1.5-1.1-2.9-2.4-4.1-3.8c-1.2-1.4-2.3-3-3.1-4.7 c-0.8-1.7-1.4-3.5-1.8-5.3c-0.4-1.9-0.7-3.8-0.7-5.7c0-2.6,0.4-5.3,1.2-7.8c0.8-2.5,2.1-4.9,3.7-7c1.6-2.1,3.5-3.9,5.6-5.4 c2.1-1.5,4.4-2.6,6.8-3.4c2.4-0.8,4.9-1.2,7.5-1.2c2.4,0,4.9,0.4,7.2,1.2c2.3,0.8,4.5,1.9,6.4,3.3c1.9,1.4,3.6,3.1,5,5 c1.4,1.8,2.6,3.8,3.5,5.9c0.9,2.1,1.5,4.4,1.9,6.7c0.3,2,0.4,4.1,0.2,6.1c-0.2,2-0.7,4-1.5,5.9c-0.9,2.1-2,4.1-3.4,6 c-1.4,1.8-3,3.5-4.8,4.9c-1.8,1.4-3.8,2.6-5.9,3.5c-2.1,0.9-4.3,1.5-6.6,1.8C444.6,168.4,442.5,168.4,440.5,168.3z" fill="#126E82" stroke="#0A2342" strokeWidth="0.5"/>
                <path d="M100,200 L200,200 L300,200 L400,200 L500,200 L600,200 L700,200" stroke="#D8D8D8" strokeWidth="0.5" strokeDasharray="5,5"/>
                <path d="M400,100 L400,150 L400,200 L400,250 L400,300 L400,350" stroke="#D8D8D8" strokeWidth="0.5" strokeDasharray="5,5"/>
                
                <circle cx="180" cy="180" r="15" fill="#0A2342" className="animate-slow-pulse" opacity="0.7">
                  <animate attributeName="r" values="12;15;12" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="280" cy="150" r="15" fill="#0A2342" className="animate-slow-pulse" opacity="0.7">
                  <animate attributeName="r" values="10;13;10" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="440" cy="140" r="15" fill="#0A2342" className="animate-slow-pulse" opacity="0.7">
                  <animate attributeName="r" values="13;16;13" dur="5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="650" cy="160" r="15" fill="#0A2342" className="animate-slow-pulse" opacity="0.7">
                  <animate attributeName="r" values="11;14;11" dur="6s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div className="absolute top-[15%] left-[18%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-p2gs-blue text-white text-xs font-medium px-2 py-1 rounded-full">Europe</div>
              </div>
              <div className="absolute top-[35%] left-[44%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-p2gs-blue text-white text-xs font-medium px-2 py-1 rounded-full">Middle East</div>
              </div>
              <div className="absolute top-[35%] left-[28%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-p2gs-blue text-white text-xs font-medium px-2 py-1 rounded-full">Africa</div>
              </div>
            </div>
          </div>

          <div className="reveal-animation animate-fade-in-up delay-400">
            <p className="text-gray-700 mb-8">
              With active operations across Europe, Africa, and the Middle East, P2GS delivers results adapted to local markets and global standards. Our multicultural teams and local expertise allow us to respond effectively to region-specific challenges and opportunities.
            </p>

            <div className="space-y-6">
              {regions.map((region, index) => (
                <div 
                  key={region.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 transition-all duration-300 hover:shadow-lg"
                  style={{ borderLeftColor: region.name === "Europe" ? "#0A2342" : region.name === "Middle East" ? "#126E82" : "#51C4D3" }}
                >
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-p2gs-navy mb-2">{region.name}</h3>
                    <p className="text-gray-700 mb-3">{region.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country) => (
                        <span key={country} className="inline-block bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 rounded-full">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Geography;
