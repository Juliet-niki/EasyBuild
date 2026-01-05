import React from "react";
import { Check, Linkedin, Mail } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-14 md:py-16 ml:py-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col ml:flex-row">
          {/* Image Side */}
          <div className="ml:w-2/5 relative min-h-100">
            <img
              src="/images/ceo2.jpg"
              alt="Civil Engineer Portrait"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply"></div>
          </div>

          {/* Content Side */}
          <div className="ml:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-3 md:mb-6">
              <h4 className="text-primary-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-1 md:mb-2">
                About The Engineer
              </h4>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">
                Engr. Iwu Innocent Chigozie
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium">
                Senior Civil Engineer & Project Manager
              </p>
            </div>

            <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed text-[clamp(12px,1.8vw,16px)]">
              With over 15 years of experience in the construction industry,
              James has led numerous high-profile residential and commercial
              projects. His philosophy is simple: integrity in design,
              transparency in cost, and excellence in execution. He holds a
              Master’s in Structural Engineering and is a licensed surveyor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Licensed Civil Engineer",
                "Certified Land Surveyor",
                "Green Building Expert",
                "Project Mgmt Professional",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <div className="bg-primary-100 p-1 rounded-full">
                    <Check size={14} className="text-primary-600" />
                  </div>
                  <span className="text-xs md:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-[clamp(12px,1.8vw,14px)] ">
                <a
                  href="mailto:iwuinnocentchigozie@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
              </button>
              <button className="px-6 py-3 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-[clamp(12px,1.8vw,14px)] ">
                <a
                  href="https://www.linkedin.com/in/engr-innocent-chigozie-iwu-82841b2b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
