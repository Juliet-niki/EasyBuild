import React from "react";
import { ShieldCheck, Search, FileText, BadgeCheck } from "lucide-react";

const PropertyVerification: React.FC = () => {
  return (
    <section
      id="verification"
      className="py-14 md:py-16 ml:py-20 px-6 bg-primary-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-800 border border-primary-600 text-primary-200 mb-6">
          <ShieldCheck size={20} />
          <span className="font-semibold tracking-wide uppercase text-[clamp(10px,1.5vw,12px)]">
            Protect Your Investment
          </span>
        </div>

        <h2 className="text-[clamp(28px,3.8vw,48px)] font-bold mb-4 md:mb-6">
          Property Legitimacy Verification
        </h2>
        <p className="text-[clamp(16px,2vw,20px)] text-primary-100 max-w-3xl mx-auto mb-12">
          Don't buy blindly. We conduct rigorous checks on land titles,
          municipal approvals, and structural integrity before you sign the
          deal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-primary-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary-700 hover:bg-primary-800 transition-colors">
            <div className="bg-primary-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="text-primary-200" />
            </div>
            <h3 className="text-lg font-bold mb-2">Document Analysis</h3>
            <p className="text-primary-200 text-sm">
              Verification of deeds, encumbrance certificates, and land use
              approvals.
            </p>
          </div>

          <div className="bg-primary-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary-700 hover:bg-primary-800 transition-colors">
            <div className="bg-primary-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="text-primary-200" />
            </div>
            <h3 className="text-lg font-bold mb-2">Physical Inspection</h3>
            <p className="text-primary-200 text-sm">
              On-site measurement checks against approved plans and boundary
              verification.
            </p>
          </div>

          <div className="bg-primary-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary-700 hover:bg-primary-800 transition-colors">
            <div className="bg-primary-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BadgeCheck className="text-primary-200" />
            </div>
            <h3 className="text-lg font-bold mb-2">Legality Report</h3>
            <p className="text-primary-200 text-sm">
              A comprehensive report certifying the property's legal and
              structural status.
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-lg font-bold text-sm md:text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Verify a Property Now
        </button>
      </div>
    </section>
  );
};

export default PropertyVerification;
