import React from "react";
import SectionHeading from "./SectionHeading";
import { SERVICES } from "../constants";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-14 md:py-16 ml:py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Our Expertise"
          subtitle="Comprehensive engineering and human resources solutions tailored to residential, commercial, and industrial needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 ml:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ml:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative p-4 sm:p-6 ml:p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-xl flex items-center justify-center text-primary-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon
                  strokeWidth={1.5}
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
