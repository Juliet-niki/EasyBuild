import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { FAQS } from "../constants";
import { Plus, Minus } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-16 ml:py-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Common queries about our processes, permits, and services."
        />

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                openIndex === index
                  ? "border-primary-200 shadow-md"
                  : "border-slate-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`font-semibold ${
                    openIndex === index ? "text-primary-700" : "text-slate-900"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`p-1 rounded-full transition-colors ${
                    openIndex === index
                      ? "bg-primary-100 text-primary-600"
                      : "text-slate-400"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
