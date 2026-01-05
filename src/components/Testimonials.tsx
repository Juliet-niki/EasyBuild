import React from "react";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS } from "../constants";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-14 md:py-16 ml:py-20 px-6 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real feedback from homeowners, developers, and architects we've had the pleasure of working with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-slate-200 fill-slate-200 w-8 h-8 md:w-12 md:h-12" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-700 mb-6 italic relative z-10 text-[clamp(13px,1.8vw,16px)]">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
