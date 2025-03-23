
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Geography from "@/components/Geography";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Intersection Observer to trigger animations when elements come into view
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

    // Observe all sections with animations
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href")?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for fixed header
              behavior: "smooth",
            });
          }
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Geography />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
