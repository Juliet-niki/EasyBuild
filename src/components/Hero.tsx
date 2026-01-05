import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-150 flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/193/1920/1080"
          alt="Engineering Blueprint"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
      </div>

      <div className="relative z-10 mt-5 sm:mt-0 container mx-auto px-6 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/50 border border-primary-700 text-primary-300 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Available for New Projects
        </div>

        <h1 className="text-[clamp(36px,5.5vw,72px)] font-bold text-white leading-tight mb-6">
          Build, Connect <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-primary-200">
            Verify.
          </span>
        </h1>

        <p className="text-[clamp(14px,1.8vw,20px)] text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          We are your trusted partner from project design to implementation. We
          simplify the process and turn complex plans into solid reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm md:text-base font-semibold">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 md:px-8 py-4 text-white transition-all bg-primary-600 rounded-lg hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 focus:ring-offset-slate-900"
          >
            Request Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 md:px-8 py-4 text-slate-300 transition-all bg-transparent border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            View Portfolio
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
