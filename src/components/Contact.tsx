
import React, { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

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
    <section id="contact" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title reveal-animation animate-fade-in-up">Let's Work Together</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal-animation animate-fade-in-up delay-200">
            <div className="glass-card backdrop-blur-md p-8 rounded-xl border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-p2gs-navy mb-6">Get in Touch</h3>
              <p className="text-gray-700 mb-8">
                Have a project in mind? We're here to help you move forward with clarity, precision, and confidence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-p2gs-blue/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-p2gs-blue" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-p2gs-navy">Our Location</h4>
                    <p className="text-gray-600">Qubic Center, Sin El Fil, Lebanon</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-p2gs-blue/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-p2gs-blue" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-p2gs-navy">Email Us</h4>
                    <p className="text-gray-600">contact@p2gs.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-p2gs-blue/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-p2gs-blue" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-p2gs-navy">Call Us</h4>
                    <p className="text-gray-600">+961 1 234 567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-animation animate-fade-in-up delay-400">
            <form onSubmit={handleSubmit} className="glass-card backdrop-blur-md p-8 rounded-xl border border-gray-200 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-p2gs-blue focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-p2gs-blue focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-p2gs-blue focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-p2gs-navy rounded-md shadow-lg hover:bg-p2gs-blue transition-all duration-300 transform hover:translate-y-[-2px] ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
