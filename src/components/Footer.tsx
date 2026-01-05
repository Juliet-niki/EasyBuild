import React from "react";
import { NAV_ITEMS } from "../constants";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-6 border-t border-slate-900">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 ml:grid-cols-[1fr_1.5fr_1fr] gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-baseline gap-2 mb-4">
              <div className="bg-primary-600  text-white flex items-center justify-center p-2 rounded-lg transition-colors duration-300">
                <p className="text-xl md:text-2xl font-bold leading-tight font-sans">
                  EB
                </p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-white">
                EasyBuild<span className="text-primary-600">.ng</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm leading-relaxed mb-6">
              Professional civil engineering services committed to safety,
              innovation, and structural integrity. Building the future, one
              project at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-3 text-sm md:text-base">
                Services
              </h4>
              <ul className="space-y-3 text-xs md:text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Building Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Land Survey
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Estimations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Property Verification
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Construction Mgmt
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-3 md:mb-6 text-sm md:text-base">
                Company
              </h4>
              <ul className="space-y-3 text-xs md:text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm md:text-base">
              Stay Updated
            </h4>
            <p className="text-xs md:text-sm mb-4">
              Subscribe to our newsletter for industry insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-slate-900 border border-slate-800 rounded px-4 py-2 text-xs md:text-sm w-full focus:outline-none focus:border-primary-600"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded text-xs md:text-sm font-medium transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} EasyBuild Engineering. All rights
            reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
          >
            Back to Top
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
