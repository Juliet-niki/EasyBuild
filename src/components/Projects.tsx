import React from "react";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-14 md:py-16 ml:py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A glimpse into our diverse portfolio of residential and commercial successes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary-400 font-medium text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {project.description}
                </p>
              </div>

              {/* Static Label for Mobile (always visible if touch, but we'll stick to hover for clean design on desktop) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white md:hidden">
                <span className="text-primary-600 text-xs font-bold uppercase">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
