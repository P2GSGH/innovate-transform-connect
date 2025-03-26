
import React, { useEffect, useRef } from "react";
import { Globe, MapPin } from "lucide-react";

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
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/bca081e6-7fdb-4deb-b74a-53f316217484.png" 
                  alt="World Map showing our global presence" 
                  className="w-full h-auto object-contain rounded-lg"
                  style={{ 
                    minHeight: "350px",
                    filter: "hue-rotate(20deg) saturate(80%) brightness(105%)",
                    mixBlendMode: "multiply"
                  }}
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-white/80 text-xs text-gray-500 px-2 py-1 rounded z-20">
                Europe, Middle East & Africa
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
                  style={{ borderLeftColor: region.name === "Europe" ? "#9F9EA1" : region.name === "Middle East" ? "#33C3F0" : "#51C4D3" }}
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
