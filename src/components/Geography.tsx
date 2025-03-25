
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
                {/* Embedded SVG directly into the component for guaranteed display */}
                <svg width="100%" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-h-[350px]">
                  {/* World map base outline */}
                  <path d="M135.1,227.9c0,0-5.4-2.8-6.8-4.8s-6.9-2.5-6.9-2.5l-2.9-2l-1.5-3.3v-2.9l3.6-0.6l-2.8-2.8l-14-0.6l-5.1,3.1l-2.4-1.6 l-8.9,1.5l-6.2-2.5l-3.8,0.1l-0.3-3.5l-4.5-1.1l3.9-5.8l-4.1-2.1l-3.9,2.9h-4l-3.1,1l-2.6-0.3l-0.5-3.4l2.1-3.8l3.8-2.2l3.8-2.8 c0,0,2.8-2.1,1.4-2.9s-7.5-1.9-7.5-1.9l-4.8,5.9l-4.1-0.1l-2.9-2.2l-0.5-5.5l-4.1-0.1l-8.9,0.1l-3.8,3.2l-3.5,2.9V187l5.3-1.1l5.5-3 v-2l-6.9-0.9l-1.6-2.9l-3.5-0.4l-3.9,3.2h-3.1l-3.8-6.4l-2.1-11.1l2.9-0.5l-0.5-2.1l-2.6-2.1l-0.6-5.4l2.5-5.2l-0.9-2.9l0.9-4.9 l1.5-5.9L2,129.9v-5.1l3.1-6.2l0.2-3l-2.4-1.9v-1.9l3.2-1.2l3.8,1.8l4-0.1l3.6,3.5l3.4-3l1-2.2l3.9-0.9l2.6-1.5l3.4-0.5l5.1,1.5 l2.6-2.8l1.8-5.2l2.8-5.8L46.5,89l5.2-1.9h4.2l3.2-2.5l1.8-0.9c0,0,1.5-2,3.2-2.2s4.8-0.8,4.8-0.8l3.8-2.5l6.2-2l6.5,0.1l5.2-2.6 l4.8-0.5l5.8,1l7.8,0.8l9.5,2.5l6.2,0.1l3.8,1.9v2.9l-2.2,2c0,0-3.2,0.9-2.6,4.2s2.9,6.9,2.9,6.9l3.2,3.9l1.9,6.1l0.5,9l-1.1,2.9 l-3.2,1.5h-3.8l-1.5,1.8l0.8,3.9l0.9,5.1h-2.8l-2.6,3.2l-0.9,2.9l1.1,0.9l2.8-1l2.6-0.5c0,0,3.2-1.5,4.1-0.8s2.2,2.9,2.2,2.9 l0.9,3.5l4.2,1.6l5.5,0.5l2.9,3.4l2.2,4.2l3.4,4.1c0,0,2,2.6,3.2,3.1s2.8,3.2,2.8,3.2v4.1c0,0-2,3.5-4.8,3.5s-8.2,0.9-8.2,0.9 l-6.4-0.2l-1.8,5v5.2l-0.6,2.5h-2.8l-1.9,3.9L135.1,227.9z" fill="#D8D8D8" stroke="#8E9196"/>
                  
                  {/* Europe - Navy blue fill */}
                  <path d="M495.9,172.1c0,0-5.2-0.6-6.5-0.5s-5.5,1.6-5.5,1.6l-5.2-1.6l-4.4-1.1l-1.5-2.1l-2.6-0.5l-3.6,1.6l-2.1-1.6l-2.6,0.5l-1.6-1.1 l-2.6,0.5l-2.6-1.6l-1.5,0.5l-2.1-0.5l-3.2-1.6l-1.6-1.1l-3.1,0.5l-1.6-2.1l-2.6-1.1l-0.5-1.6l-3.6-2.1l-2.1-2.6h-2.6l-3.1-2.6 l-1.1-2.1h-2.6l-2.1-1.6l-2.6,0.5l-2.6-1.6l-2.1,0.5l-3.6-1.1l-1.6-1.6h-2.6l-3.1-1.1l-2.6-1.6l-0.5-1.6l-4.8-1.6l-1.6-1.6h-2.6 l-1.6-1.6h-3.1l-2.1-1.6h-2.6l-2.1-1.1l-3.1-0.5l-2.1-1.6h-2.1l-2.1-2.1l-2.6-2.6l-1.6-2.1l-0.5-2.1l-1.6-2.1v-2.1l-1.6-1.6l-1.6-1.6 l-2.6-1.5h-2.6l-2.1-0.5l-1.7-4.7l-2.1-2.1l-4.7-1.6h-4.2l-2.6-2.1l-2.1-0.5l-2.6-1.6l-2.6-0.5l-2.1-2.1l-2.1-1.1h-4.2l-6.8-2.1 l-2.1-1.6l-2.6-1.6h-0.6l-0.5-2.6l-2.6-1.6l-2.1-2.6l-2.1-1.1l-2.1,0.5l-2.1-1.6l-2.1-2.1l-2.6-2.1V90l-1.6-2.1l-2.1-0.5l-2.6-0.5 l-2.1-1.6l-2.1-2.1l-2.6-1.6v-2.1l-2.1-1.1l-2.1-2.1l-0.5-2.1l-2.6-1.6l-3.2-2.8v-3.6l-2.6-1.1l-3.1-1.6v-2.1l-2.1-1.6l-2.1-2.1 l-2.1-0.5l-2.6-1.6l-2.1-2.1l-1.6-1.6v-2.1l-2.1-0.5h-2.1l-0.5-2.1l-1.6-2.1h-1.6l-2.6-2.1l-1.6-2.6l-2.1-0.5l-2.6-1.6l-2.1-2.1 L318,42l-1.6-2.1l-0.5-2.6h-4.7v-3.2l-3.2-3.4L300,28l-3.2-5.3l-2.1-1.6h-2.6l-2.1-2.1l-2.1-5.8l-3.7-5.3l-5.8-2.1h-6.3l-4.2,1.1 l-3.7,3.2l-5.8,2.6l-3.7,2.6l-2.6,2.1l-3.7,4.7h-2.1l-3.2,3.2l-3.7,3.2l-4.2,2.6l-2.1,3.2l-4.2,5.8l-3.7,3.2l-2.1,2.1v2.1l-1.6,2.6 l-2.6,4.2l-2.1,2.6l-2.1,1.6l-1.6,2.1l-3.2,5.3v3.2l-1.6,4.2l-2.1,4.7l-2.1,3.2l-4.2,4.2l-1.6,2.1l-1.6,1.1l-1.6,2.1l-3.2,3.2v3.2 l-2.1,1.6l-1.6,2.6v3.2l-1.1,1.6l-0.5,4.2l-2.1,1.6l-1.6,2.1v3.2l-1.1,1.6v3.2l-1.6,3.2l-1.6,2.1v3.2l-1.6,2.6v6.8l-4.2,4.2l-3.2,4.7 l-4.8,4.2v4.2l-1.6,4.2v4.7l-2.1,4.7l-2.6,5.8l-2.1,3.2v2.6l2.6,0.5l4.2,0.5h4.2l3.2,1.1h4.2l3.2,2.1l2.1,0.5l3.2,2.1l3.2,1.1 l5.8,1.6l5.8,0.5l3.7,0.5l4.2,1.6l4.2,1.1l4.2,1.6l4.2,0.5l3.2,2.6l2.1,0.5l4.2,1.6l4.2,0.5l7.4,2.1l3.2,1.6h3.2l4.2,0.5l4.2,2.1 l3.2,2.1l2.1,1.1l4.2,0.5l5.8,2.1l4.2,1.6l4.2,2.1l4.2,2.1l1.6,1.6l1.6,2.1l2.6,2.1l2.1,1.1l2.6,1.6h3.2l4.2,1.1l3.7,2.1l2.1,0.5 l3.2,1.1l3.2,1.6l1.6,1.6h4.2l3.2,1.1l3.2,2.1h4.2l4.2,1.6h5.3l4.2,0.5l4.2,0.5h3.2l4.2,1.1l3.7,1.1l5.3,2.1l3.2,1.6l3.2,2.1l2.1,2.1 l2.6,2.6l1.6,1.6h2.1l2.1,0.5l2.6,0.5l1.6,1.6l2.1,2.1l1.6,1.6l2.1,1.6h4.2l4.2,1.1l4.2,1.1l2.1,1.1l2.1,1.6l1.6,1.6l2.6,0.5l2.1,0.5 l3.2,0.5h2.6l1.6,0.5h2.1l3.2,1.6l2.1,1.1l3.2,1.6l3.2,1.1l3.2,1.1l3.2,1.6h2.6l3.2,0.5l2.1,1.1h3.2l3.9,0.7l2.1,0.5h2.6l3.2,0.5 l3.2,0.5l1.6,1.6l0.5,1.6l2.1,0.5l3.2,1.1l2.1,1.1l1.6,0.5l2.1,0.5l3.2,1.6l1.6,1.6l1.6,1.6l1.6,0.5l2.1,0.5l1.6,1.1l2.1,1.6l1.6,1.1 l2.1,1.6l2.1,0.5l1.6,1.1l2.6,0.5l3.1,1.7L495.9,172.1z" fill="#0A2342" stroke="#8E9196" opacity="0.9"/>
                  
                  {/* Middle East - P2GS blue fill */}
                  <path d="M593.4,180c-0.6,0-2.8,2-2.8,2s-4.4,0-5,0s-3.6,1.2-3.6,1.2h-2.4l-2.6,6l-1.8,2.2l-3.8-0.8l-1.8,1l-0.8,2l2.2,3.6 l1.2,1.6v4.2l2.4,2.2v2.2l-1.8,0.6v2l0.8,1.2l-1.2,2.4c0,0-1.6,3.4-2.2,3.4s-3.4,1.2-3.4,1.2l-1.6,2.4l-3,3.6l-3.2,1.4l-2,3 l-2.2,3.2h-2.6l-1.4,3.8l-3.4,2.2l-1.4,2.2l-4.8,1.6l-2.8,1.2l-1.2,2.4l-2.8,2l-0.6,2.4l-1,7.4l-1.2,2.2l-3.8,1.2l-1,2.2l-2.8,4.4 l-0.4,3l-4.8-0.4l-2.8,2.2l-3.6,1.2l-2.6-8l-9.4-5l-8.6-4.2l-6.8-1.8l-5-3.2l-9-0.6l-0.8,2l-4.4,1l-3-2l-2.8-2l-4.6-1.2l-3.6-4 l-2.6-3l-4.8-1.8l-3.4-0.6l-1.8-1.8l-4.8-3.2l-3.8-1.4l-1-1.8l-1.4-2.4l-5.6-2.8l-2.4-2.6l-2-5.8l-0.4-5l-0.8-2.2l-2.2-2.4l-1-3 l0.6-1.6l-3.4-5.4l-1.8-4l-4.8-10L400,180l-0.4-3.2l-3.2-2.4l-1.8-3.6l-0.2-3.6l1.6-1.8l1.4-5.2l-0.4-3.8l0.4-4.6l0.6-6.2l-1.2-4.4 l-2.2-3l-2.6-5l-3.4-3.2l-1.6-7.2l-0.6-3.4l2-7.6l3.6-10.4v-3l-1.2-2.2l-2-5.4v-3.6l1-3l0.2-5.4l-1.8-4.4l-0.8-4.4v-2.2l1.4-2.4h5 l2-1.6l1.2-3.6l5.2-6.4l3.4-3.2l3.4-0.6h1.8l1-4.2l5.6-3.8l3-1.8l1.6-2.6l3-3.2l2.6-4.4l3.4-3.8l0.8-2.4l1.8-0.4l2.4-1.2 l1.2-2.4h2.2c0,0,3.8-1.2,4.6-1.2s3-2,3-2l3-3.6l2.6-1.4l2.6-3.8l2.2-3.2l2.2-4.8l1.8-3.2l-0.2-3.2l1.4-3.8l0.4-2.6l-3-2.6 l-1.6-2.6l-2.4-3.6v-3.2l2.4-1.4l2.6-3.2l2-2l1.8-2.2l3.2-2.8l2.6-3.6l0.8-4l1.8-3l4-2.8l3.2-1.4l1.4-2.2l3.2-1.4l3.4,0.2l2.8-1.4 l3-0.4l2.2-1l1.4-0.8l3.6,0.4h3.8l2,1.6l2.6,1.4l2.8,2.2l2.2,2.8l1.2,2.4l1.6,2.2l0.6,3.2l2.6,3.2l2.2,4.2l3.2,4.4l3.4,3l2.4,4.2 l1.8,2.4l3.4,3.8l3.2,3.2l2.4,2.8l3.2,3l2.4,2.6l0.6,2.6l1.4,2.8l2.4,5l2.2,5.4l2,5l1.8,5.4l1.8,5.2l0.8,5.2l0.6,5.8l0.4,4.2l0.2,4.6 l0.8,4.2l1.4,4.4l1.8,4.4l2.4,3.6l1.6,3.6l1.6,4.4l1,3.6l0.8,4.8l-0.4,4.2l-1.2,3.6l-0.6,4.4l-1.2,3.2l-1,3l-0.6,3.2v3.8L588,150 l-0.4,5.4l-1,4.8l-1.8,6.6l2.4,2.4l3,0.2l3.2,1.2l1.6,2.8l2.2,2.4l-1.8,1.2l-2.2,1.6L593.4,180z" fill="#126E82" stroke="#8E9196" opacity="0.9"/>
                  
                  {/* Africa - Light blue fill */}
                  <path d="M470.8,195.3c0,0-1.2,1.4-0.8,2.8s1.8,3,1.8,3l4.4,3.8l1.2,1.8h4.8l4.6,4l2.2,1.8h2.2l1.6,2.5l2.6,6.5l2.8,2.2l0.6,2.2 l-1.6,1.2l1.4,2l2.6,2.8l0.8,2l-1.4,2l0.8,2.2l1.6,1l1.2,1.2v5.2l1.8,2l0.6,2l-0.8,1.2v3.8l-1.8,1l-1.2,1l1.2,1.2l-1.2,7.2l1.2,3 l3.8,4.8l1.8,3.5l-2.2,0.8l-0.8,1.8l-1,1.8l1.8,2.2v2.2l-1.8,5.8l1.2,3.8l0.8,3.2l-0.2,2.2l0.8,3l3,4.2v1.8l-4.6,5.5l-0.6,4v4.2 l0.6,4l-0.6,1.8l-0.2,3l2.6,3.8v2.5l0.8,4.2l-0.2,3.8l-1.6,4.2l-0.6,2.8l-2.4,2l-2.8,3v5l0.6,0.8l-0.8,0.5l-1.6,5.8l2.6,4l1.4,0.8 l2.8,2.5l0.2,2.5l-1.2,3.2v2.5l0.8,3.2l-1.2,2l0.2,2.8l1.6,4.8l1.6,1.2l3.6,1.2l1.4,2.2l4.2,2.8l-0.6,2.8l-2.2,1.8l-1.6,2l-1.8,2.8 l-1.4,3l-1.4,4.8l-3,5.2l-1,3v3.2l-1.2,4.5l-0.8,4.5l-2.2,7.8l-2.6,8.8l-2.6,6l-2.8,5.5l-3.8,6.8l-4.8,7l-2.8,5l-3,3.8l-2.4,2.8 l-1.8,2.2l-1.6,0.5l-3.4,0.5l-3.6-1.5l-2.4-2l-7.6-0.2l-5.2,0.8l-3.4,0.8l-1.6,1.5l-3.2,4.8l-4.2,2.8l-2.8,0.2l-13.2-1.2l-2.2-1.8 l-3.6-0.2l-6,1.5l-2.2,1l-2.8,0.2l-1.6-0.8l-2.2-2.5l-2.8-2l-3.4-1l-3.8,0.5l-2.4,1l-2.6,0.5l-3-0.2l-2.8-1.8l-4.6-1.2l-2.8-1.5 l-2.6-2.2l-2-2.5l-0.6-2l0.2-5l-0.6-4l-0.4-3.2l0.6-2.5l1.6-2.5l0.4-2.2l-1.6-3.2l-1.8-3.5l-0.4-5l-1.2-3l-2.6-4.2l-3-3.2l-2.4-3.5 l-0.2-1.8l1-3.2l-0.6-2.2l-1.2-3.2l-2.6-3.2l-1.4-4.8l-2-2.8l-2.2-3l-0.8-3l0.2-3l-0.6-3l-2.6-4l-0.6-3l0.2-3l1.6-2.5l0.4-4 l1.2-2.8l-0.2-3.2l-1.8-2.2l-0.2-4l-1.2-2.2l-1.6-3.2l-4.4-2.5l-1.6-1.8l-0.8-2l-1.6-2.2l-0.4-2.8l-2.6-0.8l-2.2-2.2l0.2-7l-0.4-2.2 l-1.6-1.5l-0.2-8.2l3-8l2.8-8l1.2-4.5l1.4-7.2l2.2-6.5l2.8-2.5l0.2-2l2-9.2l3.4-6.2l2.8-1.8l1.2-2.5l1.2-2.2l-0.2-5.8l-1.2-2.8 l-0.8-3.8l0.2-3.5l1.4-2.2l3.2-2l3-0.8l1.4-0.2l1.6-1l3.8-0.8l3.2-0.2l2.6,0.8l3,0.2l1.6-0.8l3.6-0.8l1.8-1.8l1.4-3.8l1.6-1.2l2.6-2 l2.8-3l2.4-3.2l1.6-2.8l1.2-3l3.2-2.2l3.4-4.8l2.8-1.8l3.8-1l1.2-0.8l1.6-2l3.4-6.2l3.6-6.8l1-3.2l-1.2-5.8l-1-3.2l0.2-2.8l1.2-2.2 l-0.2-5.5l-0.2-2.8l0.4-3.5l1.8-2.2l2.2-0.8l4.8-0.2l4.4,0.2l1.8-0.8l1.2-1.8l2.6-2l3.2-0.8l3.8,0.5l4.4,0.2l4-1.5l3.8-1.8l2.2-1 l1-2.5l1-3.5l-0.4-2.5l-1.2-1.5l-0.6-2l1.2-3l2.4-4.2l0.8-2.2l2.4-2.2l1.8-1l1-2.2l1.2-3l3.4-5l2.6-4.8l4.2-5.5l2.8-5l1.8-2.8 l1.4-3.2l1.6-4.5l-0.2-3l-0.8-4l-0.2-3.5l-1.6-4.5l-1.2-2.8l-1.6-2.5l-0.6-3l0.4-3.5l1.2-2.2l2-2.5l4.8,1.8l5.2,0.8l3.4,1.2l3.2,2 l0.6,2.8l1.2,12.5l2.4,11.5l3.2,6.8l3.2,6.5l4.2,7.5l5.8,9.8l3.6,7.5l3.2,4.8l4.2,4.5l3,4.2l3.4,5.5l3.6,7.2l3.2,5l2.6,5.8l2.4,6.2 l2.6,5.5l2.8,4.8l2.2,4.8l2.2,3.8l3.4,5l4.4,7.2l4.6,8.2l2.2,5l1.6,3.5L470.8,195.3z" fill="#51C4D3" stroke="#8E9196" opacity="0.9"/>
                  
                  {/* Grid lines and region markers */}
                  <path d="M100,250 L200,250 L300,250 L400,250 L500,250 L600,250 L700,250 L800,250" stroke="#D8D8D8" strokeWidth="0.5" strokeDasharray="5,5"/>
                  <path d="M400,100 L400,150 L400,200 L400,250 L400,300 L400,350 L400,400" stroke="#D8D8D8" strokeWidth="0.5" strokeDasharray="5,5"/>
                  
                  {/* Region pulsing dots */}
                  <circle cx="450" cy="150" r="15" fill="#0A2342" opacity="0.7">
                    <animate attributeName="r" values="12;15;12" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="510" cy="210" r="15" fill="#126E82" opacity="0.7">
                    <animate attributeName="r" values="10;13;10" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;0.9;0.7" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="470" cy="280" r="15" fill="#51C4D3" opacity="0.7">
                    <animate attributeName="r" values="13;16;13" dur="5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;0.9;0.7" dur="5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
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
